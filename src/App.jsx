import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Layout
import Navbar       from "./components/layout/Navbar";
import Footer       from "./components/layout/Footer";

// Global UI
import CursorGlow   from "./components/ui/CursorGlow";
import NoiseOverlay from "./components/ui/NoiseOverlay";

// Pages
import Home         from "./pages/Home";
import About        from "./pages/About";
import Services     from "./pages/Services";
import Portfolio    from "./pages/Portfolio";
import Careers       from "./pages/Careers";
import Contact       from "./pages/Contact";
import ServiceDetail from "./pages/ServiceDetail";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <NoiseOverlay />
      <CursorGlow />
      <ScrollToTop />

      <div style={{ minHeight:"100vh", display:"flex", flexDirection:"column", background:"#08080e" }}>
        <Navbar />

        <main style={{ flex:1, paddingTop:72 }}>
          <Routes>
            <Route path="/"          element={<Home />} />
            <Route path="/about"     element={<About />} />
            <Route path="/services"         element={<Services />} />
            <Route path="/services/:slug"   element={<ServiceDetail />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/careers"   element={<Careers />} />
            <Route path="/contact"   element={<Contact />} />
            <Route path="*"          element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}
