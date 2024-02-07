// pages/submitted.tsx
import React from "react";
import { useRouter } from "next/router";

const SubmittedPage: React.FC = () => {
  const router = useRouter();
  const { name, email } = router.query;

  return (
    <div>
      <h1>Submitted Data</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default SubmittedPage;
