import { useState, useEffect, useRef } from "react";

const SECTIONS = [
  { id: "overview",        label: "Overview"        },
  { id: "specializations", label: "Specializations" },
  { id: "tech-stack",      label: "Technologies"    },
  { id: "process",         label: "Process"         },
  { id: "engagement",      label: "Engagement"      },
  { id: "faq",             label: "FAQ"             },
];

export default function SubNav({ color = "#0096FF", rgb = "0,150,255" }) {
  const [active,  setActive]  = useState("overview");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = [];
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const o = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActive(id); },
        { rootMargin: "-25% 0px -65% 0px" }
      );
      o.observe(el);
      obs.push(o);
    });
    return () => obs.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = el.getBoundingClientRect().top + window.scrollY - 144;
    window.scrollTo({ top: offset, behavior: "smooth" });
  };

  return (
    <div
      style={{
        position: "sticky",
        top: 72,
        zIndex: 900,
        height: 52,
        background: "rgba(8,8,14,.96)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(255,255,255,.07)",
        display: "flex",
        alignItems: "center",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(-8px)",
        transition: "opacity .3s ease, transform .3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          width: "100%",
          padding: "0 24px",
          display: "flex",
          gap: 2,
          alignItems: "center",
          overflowX: "auto",
          scrollbarWidth: "none",
        }}
      >
        {SECTIONS.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                background: "none",
                border: "none",
                padding: "6px 16px",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 13,
                fontWeight: isActive ? 700 : 500,
                color: isActive ? color : "rgba(255,255,255,.42)",
                transition: "color .2s",
                whiteSpace: "nowrap",
                position: "relative",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {label}
              {isActive && (
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 16,
                    right: 16,
                    height: 2,
                    background: color,
                    borderRadius: 2,
                    animation: "subnav-indicator .2s ease forwards",
                  }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
