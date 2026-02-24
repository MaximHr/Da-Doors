import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import LogIn from "./pages/LogIn";
import "./styles/index.css";
import "./styles/style.css";
import AccessDenied from "./pages/AccessDenied";
import Admin from "./components/Admin";
import Products from "./pages/Products";
import Members from "./pages/Members";
import Error from "./pages/Error";
import ProtectedRoute from "./components/ProtectedRoute";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <Routes>
      <Route path="login" element={<LogIn />} />

      <Route element={<ProtectedRoute />}>
        <Route path="admin" element={<Admin />}>
          <Route path="products" element={<Products />} />
          <Route path="" element={<Products />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="products/:slug" element={<UpdateProduct />} />
          <Route path="members" element={<Members />} />
        </Route>
      </Route>

      <Route path="access-denied" element={<AccessDenied />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>,
);
