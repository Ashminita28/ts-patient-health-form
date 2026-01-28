import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface ThemeContextType {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProvideProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProvideProps> = ({ children }) => {
  const [isDarkTheme, setIsDartThem] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDartThem((previousTheme) => !previousTheme);
  };

  const value = {
    isDarkTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("Use within a theme provider");
  }
  return context;
};
