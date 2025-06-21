import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./paginas/Home";
import SobreMim from "./paginas/SobreMim";
import Menu from "./components/Menu";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<SobreMim />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;
