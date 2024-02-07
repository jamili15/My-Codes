// pages/index.tsx
import QRCodeGenerator from "../components/QRCodeGenerator";
import { Post } from "@/types/types";
import { GetServerSideProps } from "next";
import axios from "axios";

interface HomeProps {
  data: Post[];
}

const Home: React.FC<HomeProps> = ({ data }) => {
  return (
    <div className="p-5">
      {data.map((item) => (
        <div key={item.id}>
          <QRCodeGenerator>{item.qr}</QRCodeGenerator>
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const res = await fetch("http://localhost:3005/posts");
  const data: Post[] = await res.json();

  return {
    props: { data },
  };
};

export default Home;
