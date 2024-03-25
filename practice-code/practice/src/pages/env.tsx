// pages/index.js
import React from "react";

interface Props {
  apiKey: string;
  apiUrl: string;
}

const IndexPage: React.FC<Props> = ({ apiKey, apiUrl }) => {
  return (
    <div>
      <h1>Environment Variables in Next.js</h1>
      <p>API Key: {apiKey}</p>
      <p>API URL: {apiUrl}</p>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      apiKey: process.env.API_KEY,
      apiUrl: process.env.API_URL,
    },
  };
}

export default IndexPage;
