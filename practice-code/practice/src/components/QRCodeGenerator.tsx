// components/QRCodeGenerator.tsx
import { useState } from "react";
import QRCode from "qrcode.react";

const QRCodeGenerator: React.FC = () => {
  const [text, setText] = useState("");

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="flex flex-col pl-5 gap-5 items-center justify-center text-center">
      <h2>QR Code Generator</h2>
      <input
        type="text"
        placeholder="Enter text for QR code"
        value={text}
        onChange={handleTextChange}
        className="bg-gray-100 w-[50%] rounded p-2 border-2 border-gray-300"
      />
      <div className="">{text && <QRCode value={text} />}</div>
    </div>
  );
};

export default QRCodeGenerator;
