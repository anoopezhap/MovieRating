import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Auth from "./pages/auth/index";
import Home from "./pages/home/index";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/rated" element={<h1>Rated</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
