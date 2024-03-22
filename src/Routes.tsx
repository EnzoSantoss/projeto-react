import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:id" element={<Watch />} />
        <Route
          path="*"
          element={<h2>404 PAGE NOT FOUND KKKKKKKKKKKKKKKKK</h2>}
        />
      </Routes>
    </BrowserRouter>
  );
}
