import "./index.css";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
