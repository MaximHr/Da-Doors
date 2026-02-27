import { createRoot } from "react-dom/client";
import "./index.css";
import Landing from "./pages/Landing.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Navabar from "./components/Navabar.jsx";
import Doors from "./pages/Doors.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navabar />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/doors" element={<Doors />} />
    </Routes>
		<Footer />
  </BrowserRouter>,
);
