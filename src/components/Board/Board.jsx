import { useTheme } from "../../context/ThemeProvider";

const Board = ({ children }) => {
  const isDark = useTheme();

  const dynamicStyle = {
    backgroundColor: isDark ? "#23272F" : "",
    minHeight:'100vh'
  };

  return <div style={dynamicStyle}>{children}</div>;
};

export default Board;
