import Navbar from "./FrontendComponents/Navbar";
import Intro from "./FrontendComponents/Intro";
import ExisProbm from "./FrontendComponents/ExisProbm";
import Solution from "./FrontendComponents/Solution";
import Features from "./FrontendComponents/Features";
import WorkFlow from "./FrontendComponents/WorkFlow";
import LaunchInfo from "./FrontendComponents/LaunchInfo";
import Foot from "./FrontendComponents/Footer";
import Backend from "./BackendComponents/Backend.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Intro />
      <ExisProbm />
      <Solution />
      <Features />
      <WorkFlow />
      <LaunchInfo />
      <Foot />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/backend" element={<Backend />} />
      </Routes>
    </Router>
  );
}
