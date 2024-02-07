// BarcodeGenerator.tsx

import React, { ReactNode, useEffect, useState } from "react";
import Barcode from "react-barcode";

interface BarcodeGeneratorProps {
  children?: ReactNode;
}

const BarcodeGenerator: React.FC<BarcodeGeneratorProps> = ({ children }) => {
  const [content, setContent] = useState<ReactNode>("");
  useEffect(() => {
    // Update content when children change
    setContent(React.Children.toArray(children).join(""));
  }, [children]);

  return (
    <div>
      <p>Content for Bar code:</p>

      {content && <Barcode value={content} />}
    </div>
  );
};

export default BarcodeGenerator;
