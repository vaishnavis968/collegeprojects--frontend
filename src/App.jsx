import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import UploadPage from "./Pages/UploadPage";
import ComparePage from "./Pages/Compare";
import ResultPage from "./Pages/ResultPage";
import AboutPage from "./Pages/About";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* Other pages will be added next */}
      </Routes>
    </Router>
  );
}
