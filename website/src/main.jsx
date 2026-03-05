import { createRoot } from "react-dom/client";
import "./index.css";
import Landing from "./pages/Landing.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Navabar from "./components/Navabar.jsx";
import Doors from "./pages/Doors.jsx";
import Footer from "./components/Footer.jsx";
import Details from "./pages/Details.jsx";
import NotFound from "./pages/NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navabar />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/doors" element={<Doors series={false} />} />
      <Route path="/series/:name" element={<Doors series={true}/>} />
      <Route path="/door/:slug" element={<Details />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
		<Footer />
  </BrowserRouter>,
);
