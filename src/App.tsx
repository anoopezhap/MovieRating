import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/auth" element={<h1>Auth</h1>} />
            <Route path="/rated" element={<h1>Rated</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
