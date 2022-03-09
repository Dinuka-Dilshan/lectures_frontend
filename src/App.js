import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./Pages/Home";
import Subject from "./Pages/Subject";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Subject />} />
      </Routes>
    </>
  );
}

export default App;
