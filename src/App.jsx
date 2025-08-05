import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UrlShortener from "./pages/UrlShortener";
import Stats from "./pages/Stats";
import Redirector from "./pages/Redirector";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UrlShortener />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/:shortcode" element={<Redirector />} />
      </Routes>
    </Router>
  );
}
