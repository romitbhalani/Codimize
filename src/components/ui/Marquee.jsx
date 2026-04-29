import { useState } from "react";

function TechIcon({ icon, name, color }) {
  if (icon) {
    return (
      <img
        src={icon}
        alt={name}
        width={24}
        height={24}
        style={{ objectFit: "contain", flexShrink: 0, display: "block" }}
        onError={(e) => {
          const s = e.target;
          s.style.display = "none";
        }}
      />
    );
  }
  return (
    <span
      style={{
        width: 24,
        height: 24,
        borderRadius: 6,
        background: `linear-gradient(135deg, ${color}, ${color}88)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 11,
        fontWeight: 800,
        color: "#fff",
        flexShrink: 0,
      }}
    >
      {name[0]}
    </span>
  );
}

function MarqueeRow({ items, reverse = false, speed = 34, paused = false }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        animation: `${reverse ? "marquee-reverse" : "marquee"} ${speed}s linear infinite`,
        animationPlayState: paused ? "paused" : "running",
        willChange: "transform",
      }}
    >
      {[...items, ...items].map((tech, i) => (
        <div key={i} className="tech-pill">
          <TechIcon icon={tech.icon} name={tech.name} color={tech.color} />
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "rgba(255,255,255,.65)",
              letterSpacing: ".03em",
            }}
          >
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Marquee({ items }) {
  const [paused, setPaused] = useState(false);

  const half = Math.ceil(items.length / 2);
  const row1 = items.slice(0, half);
  const row2 = items.slice(half);

  return (
    <div
      style={{
        overflow: "hidden",
        maskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <MarqueeRow items={row1} reverse={false} speed={34} paused={paused} />
        <MarqueeRow items={row2} reverse={true}  speed={42} paused={paused} />
      </div>
    </div>
  );
}
