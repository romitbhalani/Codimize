import { useInView } from "../../hooks/useInView";
import { useCountUp } from "../../hooks/useCountUp";

export default function StatCard({
  number,
  label,
  delay = 0,
  fontSize = 50,
  labelSize = 14,
}) {
  const [ref, visible] = useInView(0.3);

  const match = String(number).match(/^(\d+)(\D*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";
  const count = useCountUp(target, visible, 1800);

  return (
    <div
      ref={ref}
      className="stat-card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(28px) scale(0.92)",
        transition: `
          opacity   0.7s cubic-bezier(.16,1,.3,1) ${delay}ms,
          transform 0.7s cubic-bezier(.16,1,.3,1) ${delay}ms
        `,
      }}
    >
      <div
        style={{
          fontSize,
          fontWeight: 800,
          fontFamily: "'Sora','Sora Fallback',sans-serif",
          lineHeight: 1,
        }}
        className="gt"
      >
        {count}{suffix}
      </div>
      <div style={{ fontSize: labelSize, color: "rgba(255,255,255,.42)", marginTop: 8 }}>
        {label}
      </div>
    </div>
  );
}
