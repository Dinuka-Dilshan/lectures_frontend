import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const ThemeToggleContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useThemeToggle = () => {
  return useContext(ThemeToggleContext);
};

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const toggleHandler = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={isDark}>
      <ThemeToggleContext.Provider value={toggleHandler}>
        {children}
      </ThemeToggleContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
