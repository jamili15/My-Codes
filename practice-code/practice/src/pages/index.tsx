// pages/index.tsx
import { GetServerSideProps } from "next";
import axios from "axios";
import { ExampleData } from "../types/types";

interface HomeProps {
  data: ExampleData[];
}

const Home: React.FC<HomeProps> = ({ data }) => {
  return (
    <div className="container mx-auto px-4">
      <h1>Server-Side Rendered Page</h1>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <div>{item.qr} </div>
            <div>{item.title} </div>
            <div>{item.content} </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  // Fetch data from the server at request time
  const res = await axios.get("http://localhost:3005/posts");
  const data: ExampleData[] = res.data;

  return {
    props: { data },
  };
};

export default Home;
