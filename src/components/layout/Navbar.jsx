import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { NAV_LINKS, NAV_ROUTES } from "../../data/siteData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

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
        <Link
          to="/"
          style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 11, textDecoration: "none" }}
        >
          <div
            style={{
              width: 60, height: 60,
              borderRadius: 10,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 18,
              boxShadow: "0 4px 20px rgba(0,150,255,.4)",
            }}
          >
            <img src="/assets/logo.png" alt="" style={{width: 56, height: 76, objectFit: 'cover'}} />
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
        </Link>

        {/* Desktop links */}
        <div
          className="desk-nav"
          style={{ display: "flex", gap: 36, alignItems: "center" }}
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link}
              to={NAV_ROUTES[link]}
              className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
              style={{ textDecoration: "none" }}
              end={link === "Home"}
            >
              {link}
            </NavLink>
          ))}
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <button
              className="btn-primary"
              style={{ padding: "10px 22px", fontSize: 13 }}
            >
              Book a Call
            </button>
          </Link>
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
            <NavLink
              key={link}
              to={NAV_ROUTES[link]}
              className="nav-link"
              style={{ fontSize: 17, padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,.07)", textDecoration: "none", display: "block" }}
              onClick={() => setMenuOpen(false)}
              end={link === "Home"}
            >
              {link}
            </NavLink>
          ))}
          <Link to="/contact" style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
            <button className="btn-primary">Book a Call →</button>
          </Link>
        </div>
      )}
    </nav>
  );
}
