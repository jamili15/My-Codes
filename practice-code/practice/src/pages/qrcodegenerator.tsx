// pages/index.tsx
import QRCodeGenerator from "../components/QRCodeGenerator";

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="">QR Code Generator </h1>
      <QRCodeGenerator />
    </div>
  );
};

export default Home;
