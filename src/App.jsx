import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import AboutUs from "./pages/AboutUs";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import SmoothScroll from "./lib/SmoothScroll";


const App = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      // First time → show loader
      setShowLoader(true);

      // Set a flag so loader won't show again
      localStorage.setItem("hasVisited", "true");
    }
    const timer = setTimeout(() => setShowLoader(false), 8000); // match GSAP animation duration
    return () => clearTimeout(timer);
  }, []);

  /* if (showLoader) {
    return <Loader />; // only show loader (nothing else yet)
  } */
  return (
    <Router>
      <SmoothScroll>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
      </SmoothScroll>
    </Router>
  );
};

export default App;
