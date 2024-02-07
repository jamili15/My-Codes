// pages/form.tsx
import React, { useState } from "react";
import { useRouter } from "next/router";

interface FormData {
  name: string;
  email: string;
}

const FormPage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({ name: "", email: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Manually create a new object with a string index signature
    const query: { [key: string]: string } = {
      name: formData.name,
      email: formData.email,
    };

    router.push({
      pathname: "/submitted",
      query,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormPage;
