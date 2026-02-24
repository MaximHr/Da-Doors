import { createRoot } from "react-dom/client";
import "./index.css";
import Landing from "./pages/Landing.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Navabar from "./components/Navabar.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navabar />
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  </BrowserRouter>,
);
