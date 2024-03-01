// ThemedComponent.js
import React from "react";
import { useThemeContext } from "@/services/context/theme-context";

const ThemedComponent = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        padding: "20px",
      }}
    >
      <p>{`Current theme: ${theme}`}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemedComponent;
