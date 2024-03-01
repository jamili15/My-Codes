// pages/index.tsx
import React from "react";

const Home: React.FC = () => {
  const handleSilentPrint = () => {
    if (typeof window !== "undefined") {
      try {
        window.print();
      } catch (error) {
        console.error("Error during silent print:", error);
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4">Silent Print Example</h1>
        <p className="text-lg mb-4">
          Click the button below to trigger silent print:
        </p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleSilentPrint}
        >
          Print
        </button>
      </main>
    </div>
  );
};

export default Home;
