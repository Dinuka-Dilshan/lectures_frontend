import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./Pages/Home";
import Subject from "./Pages/Subject";
import { Route, Routes } from "react-router-dom";
import NotificationBar from "./components/NotificationBar/NotificationBar";
import ThemeProvider from "./context/ThemeProvider";
import FloatToggle from "./components/FloatingButton/FloatToggle";
import Board from "./components/Board/Board";
function App() {
  return (
    <ThemeProvider>
      <Board>
        <FloatToggle />
        <NavBar />
        <NotificationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Subject />} />
        </Routes>
      </Board>
    </ThemeProvider>
  );
}

export default App;
