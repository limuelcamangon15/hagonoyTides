import "./index.css";
import About from "./pages/About/About";
import BuyMeACoffeePage from "./pages/BuyMeACoffee/BuyMeACoffeePage";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import PrivacyPolicy from "./pages/Privacy/PrivacyPolicy";
import TermsAndConditions from "./pages/Terms/TermsAndConditions";
import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router";
import { Toaster } from "sileo";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        className="min-h-dvh w-full"
        initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />

          <Route
            path="/limuelcamangon/buy-me-a-coffee"
            element={<BuyMeACoffeePage />}
          />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <>
      <Toaster position="top-center" offset={65} />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
