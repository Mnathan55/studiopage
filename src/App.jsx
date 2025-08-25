import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import AboutUs from "./pages/AboutUs";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import SmoothScroll from "./lib/SmoothScroll";
import Clients from "./pages/Clients";


const App = () => {
  return (
    <Router>
      <SmoothScroll>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
      </SmoothScroll>
    </Router>
  );
};

export default App;
