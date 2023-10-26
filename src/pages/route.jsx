import { BrowserRouter, Routes, Route } from "react-router-dom";
import Full from "./full";
import Qcard from "../component/Qcard";
export default function RouthPath() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Full />} />
        <Route path="/level" element={<Qcard />} />
        
      </Routes>
    </BrowserRouter>
  );
}
