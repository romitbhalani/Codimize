import { useState, useEffect } from "react";

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
import Pricing      from "./pages/Pricing";
import Contact      from "./pages/Contact";

// Page map — add new pages here
const PAGES = {
  Home,
  About,
  Services,
  Portfolio,
  Pricing,
  Contact,
};

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  // Scroll to top on every page change
  useEffect(() => { window.scrollTo(0, 0); }, [currentPage]);

  const navigate = (page) => setCurrentPage(page);

  const PageComponent = PAGES[currentPage] || Home;

  return (
    <>
      {/* Global ambient effects */}
      <NoiseOverlay />
      <CursorGlow />

      <div style={{ minHeight:"100vh", display:"flex", flexDirection:"column", background:"#08080e" }}>

        <Navbar currentPage={currentPage} onNavigate={navigate} />

        {/* paddingTop offsets the fixed navbar height */}
        <main style={{ flex:1, paddingTop:72 }}>
          <PageComponent onNavigate={navigate} />
        </main>

        <Footer onNavigate={navigate} />

      </div>
    </>
  );
}
