// pages/index.tsx
import QRCodeGenerator from "../components/QRCodeGenerator";

const Home: React.FC = () => {
  return (
    <div>
      <h1>QR Code Generator App</h1>
      <QRCodeGenerator />
    </div>
  );
};

export default Home;
