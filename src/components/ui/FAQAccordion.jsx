import { useState } from "react";

export default function FAQAccordion({ faqs, color = "#0096FF", rgb = "0,150,255" }) {
  const [open, setOpen] = useState(0);
  const bdr = "rgba(255,255,255,.07)";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            style={{
              background: isOpen ? `rgba(${rgb},.04)` : "#0f0f1c",
              border: `1px solid ${isOpen ? `rgba(${rgb},.28)` : bdr}`,
              borderRadius: 14,
              overflow: "hidden",
              transition: "border-color .25s, background .25s",
            }}
          >
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              style={{
                width: "100%",
                background: "none",
                border: "none",
                padding: "20px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 16,
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span style={{ color: "#e8e8f4", fontSize: 15, fontWeight: 600, lineHeight: 1.4 }}>
                {faq.q}
              </span>
              <span
                style={{
                  width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                  background: isOpen ? `rgba(${rgb},.15)` : "rgba(255,255,255,.05)",
                  border: `1px solid ${isOpen ? `rgba(${rgb},.35)` : bdr}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: isOpen ? color : "rgba(255,255,255,.4)",
                  fontSize: 18,
                  fontWeight: 300,
                  transition: "transform .3s, background .25s, color .25s, border-color .25s",
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                +
              </span>
            </button>
            <div
              style={{
                maxHeight: isOpen ? 320 : 0,
                overflow: "hidden",
                transition: "max-height .4s cubic-bezier(.16,1,.3,1)",
              }}
            >
              <p
                style={{
                  padding: "0 24px 22px",
                  color: "rgba(255,255,255,.52)",
                  fontSize: 14,
                  lineHeight: 1.85,
                  margin: 0,
                }}
              >
                {faq.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
