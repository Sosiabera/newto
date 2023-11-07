import { BrowserRouter, Routes, Route } from "react-router-dom";
import Full from "./full";
import Home from "../component/home/Home";
export default function RouthPath() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Full />} />
        <Route path="/level" element={<Home />} />
        
      </Routes>
    </BrowserRouter>
  );
}
