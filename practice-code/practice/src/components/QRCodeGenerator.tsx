// components/QRCodeGenerator.tsx
import React, { ReactNode, useState, useEffect } from "react";
import QRCode from "qrcode.react";

interface QRCodeGeneratorProps {
  children?: ReactNode;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ children }) => {
  const [content, setContent] = useState<ReactNode>("");

  useEffect(() => {
    // Update content when children change
    setContent(React.Children.toArray(children).join(""));
  }, [children]);

  return (
    <div>
      <p>Content for QR code:</p>

      {content && <QRCode value={content} />}
      {content}
    </div>
  );
};

export default QRCodeGenerator;
