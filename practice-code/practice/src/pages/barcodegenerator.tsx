// Home.tsx

import Head from "next/head";
import BarcodeGenerator from "../components/BarCodeGenerator";
import axios from "axios";
import { useState, useEffect } from "react";

interface Post {
  id: number;
  title: string;
  content: string;
  qr: number;
}

const Home: React.FC = () => {
  //   const [posts, setPosts] = useState<Post[]>([]);

  //   useEffect(() => {
  //     // Fetch data from the JSON server using axios
  //     axios
  //       .get<Post[]>("http://localhost:3005/posts")
  //       .then((response) => setPosts(response.data))
  //       .catch((error) => console.error("Error fetching data:", error));
  //   }, []);
  return (
    <div>
      <Head>
        <title>Barcode Generator</title>
        <meta
          name="description"
          content="Barcode Generator using Next.js and TypeScript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-5">
        <h1>Barcode Generator</h1>
        <BarcodeGenerator>0101 25216 0562</BarcodeGenerator>
      </main>
    </div>
  );
};

export default Home;
