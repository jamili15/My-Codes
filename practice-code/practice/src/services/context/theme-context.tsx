// ThemeContext.js
import React, { createContext, useContext, useState } from "react";

type ThemeContextProps = {
  children: React.ReactNode;
};

type ThemeContext = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContext | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeContextProps> = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContext => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
