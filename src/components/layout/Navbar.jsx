import { useState, useEffect } from "react";
import { NAV_LINKS } from "../../data/siteData";

/**
 * Navbar — sticky top navigation.
 * Goes from transparent → blurred glass on scroll.
 * Collapses to hamburger on mobile.
 */
export default function Navbar({ currentPage, onNavigate }) {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu whenever page changes
  useEffect(() => { setMenuOpen(false); }, [currentPage]);

  const handleNav = (page) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        height: 72,
        display: "flex",
        alignItems: "center",
        background: scrolled ? "rgba(8,8,14,.9)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,.07)" : "1px solid transparent",
        transition: "all .35s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          width: "100%",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div
          onClick={() => handleNav("Home")}
          style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 11 }}
        >
          <div
            style={{
              width: 36, height: 36,
              background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
              borderRadius: 10,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 18,
              boxShadow: "0 4px 20px rgba(99,102,241,.4)",
            }}
          >
            ◈
          </div>
          <span
            style={{
              fontFamily: "'Sora', 'Sora Fallback', sans-serif",
              fontWeight: 800,
              fontSize: 22,
              color: "#fff",
              letterSpacing: "-.03em",
            }}
          >
            Codimize
          </span> 
        </div>

        {/* Desktop links */}
        <div
          className="desk-nav"
          style={{ display: "flex", gap: 36, alignItems: "center" }}
        >
          {NAV_LINKS.map((link) => (
            <span
              key={link}
              className={`nav-link${currentPage === link ? " active" : ""}`}
              onClick={() => handleNav(link)}
            >
              {link}
            </span>
          ))}
          <button
            className="btn-primary"
            style={{ padding: "10px 22px", fontSize: 13 }}
            onClick={() => handleNav("Contact")}
          >
            Book a Call
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="mob-btn"
          style={{
            background: "none",
            border: "1px solid rgba(255,255,255,.07)",
            color: "#e8e8f4",
            borderRadius: 8,
            padding: "8px 12px",
            fontSize: 18,
          }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="mob-menu"
          style={{
            position: "absolute",
            top: 72, left: 0, right: 0,
            background: "rgba(8,8,14,.98)",
            backdropFilter: "blur(24px)",
            borderBottom: "1px solid rgba(255,255,255,.07)",
            padding: "20px 24px 28px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {NAV_LINKS.map((link) => (
            <span
              key={link}
              className="nav-link"
              onClick={() => handleNav(link)}
              style={{ fontSize: 17, padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,.07)" }}
            >
              {link}
            </span>
          ))}
          <button className="btn-primary" onClick={() => handleNav("Contact")}>
            Book a Call →
          </button>
        </div>
      )}
    </nav>
  );
}
