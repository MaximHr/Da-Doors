import { useState } from "react";
import "./index.css";
import Landing from "./pages/Landing.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Navabar from "./components/Navabar.jsx";
import Doors from "./pages/Doors.jsx";
import Footer from "./components/Footer.jsx";
import Details from "./pages/Details.jsx";
import NotFound from "./pages/NotFound.jsx";
import Form from "./components/Form.jsx";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <BrowserRouter>
      <Navabar />
      <Routes>
        <Route
          path="/"
          element={<Landing onOpenPopup={() => setIsPopupOpen(true)} />}
        />
        <Route path="/doors" element={<Doors series={false} />} />
        <Route path="/series/:name" element={<Doors series={true} />} />
        <Route
          path="/door/:slug"
          element={<Details onOpenPopup={() => setIsPopupOpen(true)} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      {isPopupOpen && <Form onClose={() => setIsPopupOpen(false)} />}
    </BrowserRouter>
  );
}

export default App;
