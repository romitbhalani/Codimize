import GeoBg from "../ui/GeoBg";
import { NAV_LINKS } from "../../data/siteData";

const FOOTER_LINKS = [
  {
    title: "Services",
    links: ["Web Development", "SaaS Products", "AI Solutions", "Enterprise Apps", "Cloud & DevOps"],
  },
  {
    title: "Company",
    links: ["About", "Portfolio", "Pricing", "Contact"],
  },
  {
    title: "Connect",
    links: ["hello@codimize.io", "LinkedIn", "GitHub", "Twitter"],
  },
];

export default function Footer({ onNavigate }) {
  const muted = "rgba(255,255,255,.42)";
  const dim   = "rgba(255,255,255,.2)";
  const bdr   = "rgba(255,255,255,.07)";

  return (
    <footer
      style={{
        background: "#060609",
        borderTop: `1px solid ${bdr}`,
        padding: "72px 24px 36px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <GeoBg variant="b" />

      <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative", zIndex: 2 }}>

        {/* Top grid */}
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 64,
          }}
        >
          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 20 }}>
              <div
                style={{
                  width: 34, height: 34,
                  background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
                  borderRadius: 9,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 17,
                }}
              >
                ◈
              </div>
              <span style={{ fontFamily: "'Sora', 'Sora Fallback', sans-serif", fontWeight: 800, fontSize: 20, color: "#fff" }}>
                Codimize
              </span>
            </div>
            <p style={{ color: muted, fontSize: 14, lineHeight: 1.78, maxWidth: 240, marginBottom: 24 }}>
              Build Tomorrow, Ship Today. India-based, globally delivered. Your engineering partner for the AI era.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {["Li", "GH", "Tw"].map((s) => (
                <div
                  key={s}
                  style={{
                    width: 36, height: 36,
                    background: "#141422",
                    border: `1px solid ${bdr}`,
                    borderRadius: 8,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 12, color: muted, cursor: "pointer",
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map(({ title, links }) => (
            <div key={title}>
              <h4
                style={{
                  fontSize: 11, fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: ".1em",
                  color: dim, marginBottom: 20,
                }}
              >
                {title}
              </h4>
              <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {links.map((link) => (
                  <li
                    key={link}
                    style={{ fontSize: 14, color: muted, cursor: "pointer", transition: "color .2s" }}
                    onClick={() => NAV_LINKS.includes(link) && onNavigate(link)}
                    onMouseOver={(e) => (e.target.style.color = "#a78bfa")}
                    onMouseOut={(e)  => (e.target.style.color = muted)}
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: `1px solid ${bdr}`,
            paddingTop: 28,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            alignItems: "center",
          }}
        >
          <p style={{ color: dim, fontSize: 13 }}>
            © 2025 Codimize Technologies Pvt. Ltd. · Ahmedabad, India
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((l) => (
              <span key={l} style={{ fontSize: 13, color: dim, cursor: "pointer" }}>{l}</span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
