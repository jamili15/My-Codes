import React, { ChangeEvent } from "react";

interface TextInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange, onSubmit }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Type something..."
      />
      {onSubmit && (
        <button type="button" onClick={onSubmit}>
          Submit
        </button>
      )}
    </div>
  );
};

export default TextInput;
