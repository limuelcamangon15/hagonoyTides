import "./index.css";
import About from "./pages/About/About";
import BuyMeACoffeePage from "./pages/BuyMeACoffee/BuyMeACoffeePage";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Toaster } from "sileo";

function App() {
  return (
    <>
      <Toaster position="top-center" offset={65} />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="/limuelcamangon/buy-me-a-coffee"
            element={<BuyMeACoffeePage />}
          />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
