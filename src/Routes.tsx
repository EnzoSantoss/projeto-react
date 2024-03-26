import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Search from "./pages/Search";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:id" element={<Watch />} />
        <Route path="/search" element={<Search />}></Route>
        <Route
          path="*"
          element={<h2>404 PAGE NOT FOUND KKKKKKKKKKKKKKKKK</h2>}
        />
      </Routes>
    </BrowserRouter>
  );
}
