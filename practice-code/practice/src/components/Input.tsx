import React, {
  useRef,
  ChangeEvent,
  useState,
  InputHTMLAttributes,
  ChangeEventHandler,
} from "react";

interface MergedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  placeholder?: string;
  labelLayout?: string;
  translationUp?: string;
  translationDown?: string;
  type?:
    | "text"
    | "number"
    | "email"
    | "password"
    | "date"
    | "tel"
    | "time"
    | "file"
    | "checkbox"
    | "search";
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const MergedInput: React.FC<MergedInputProps> = ({
  label,
  className,
  labelLayout,
  translationUp,
  translationDown,
  placeholder,
  type = "text",
  value,
  onChange,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (onChange) {
      onChange(event); // Pass the entire event object
    }
  };

  return (
    <div className="relative">
      <label
        className={`absolute left-2 px-[5px] transition-transform ${labelLayout} ${
          (focused || value) && !props.readOnly
            ? `text-blue-500 -translate-y-3 ${translationUp} bg-white rounded !m-0`
            : `text-gray-500 translate-y-2 ${translationDown}`
        }`}
      >
        {label}
      </label>
      <input
        type={type}
        id={type}
        placeholder={placeholder}
        className={`w-full px-4 py-2 focus:outline-none rounded border ${
          focused ? "focus:border-blue-500" : "focus:border-primary"
        } ${className}`}
        ref={inputRef}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => setFocused(true)}
        onChange={handleChange}
        value={value}
        {...props}
      />
    </div>
  );
};

export default MergedInput;
