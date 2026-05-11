import { useState } from "react";
import { TECH_LOGOS } from "../../data/siteData";

export default function TechTabs({ technologies, color = "#0096FF", rgb = "0,150,255" }) {
  const [active, setActive] = useState(technologies[0]?.category ?? "");
  const bdr = "rgba(255,255,255,.07)";
  const group = technologies.find((g) => g.category === active);

  return (
    <div>
      {/* Tab pills */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 36 }}>
        {technologies.map(({ category }) => {
          const on = active === category;
          return (
            <button
              key={category}
              onClick={() => setActive(category)}
              style={{
                background: on ? `rgba(${rgb},.13)` : "transparent",
                border: `1px solid ${on ? `rgba(${rgb},.45)` : bdr}`,
                color: on ? color : "rgba(255,255,255,.45)",
                padding: "8px 22px",
                borderRadius: 999,
                fontSize: 13,
                fontWeight: on ? 700 : 500,
                cursor: "pointer",
                transition: "all .2s",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Tech grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
          gap: 12,
        }}
      >
        {(group?.items ?? []).map((name) => {
          const meta = TECH_LOGOS[name] ?? { logo: null, color: "#888" };
          return (
            <div
              key={name}
              className="card"
              style={{
                padding: "22px 14px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
                borderRadius: 16,
                transition: "border-color .2s, transform .2s",
                cursor: "default",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = `rgba(${rgb},.38)`;
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {meta.logo ? (
                <img
                  src={meta.logo}
                  alt={name}
                  style={{ width: 38, height: 38, objectFit: "contain" }}
                  loading="lazy"
                />
              ) : (
                <div
                  style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: `${meta.color}1a`,
                    border: `1px solid ${meta.color}33`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 14, fontWeight: 800, color: meta.color,
                    fontFamily: "'Sora', sans-serif",
                  }}
                >
                  {name[0]}
                </div>
              )}
              <span
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,.65)",
                  textAlign: "center",
                  lineHeight: 1.3,
                  fontWeight: 500,
                }}
              >
                {name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
