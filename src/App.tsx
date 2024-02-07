import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Auth from "./pages/auth/index";
import Home from "./pages/home/index";
import Movie from "./pages/movie/index";
import TvShow from "./pages/tvshow/index";
import Rated from "./pages/rated/index";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/rated" element={<Rated />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/tvshow/:id" element={<TvShow />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
