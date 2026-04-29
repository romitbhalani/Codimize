import { useEffect, useRef } from "react";

/**
 * CursorGlow — soft radial gradient that follows the cursor.
 * Uses a DOM ref to update position directly → zero React re-renders.
 */
export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX - 220 + "px";
        glowRef.current.style.top  = e.clientY - 220 + "px";
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      style={{
        position: "fixed",
        pointerEvents: "none",
        zIndex: 9001,
        left: "-220px",
        top: "-220px",
        width: 440,
        height: 440,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,102,241,.07) 0%, transparent 70%)",
      }}
    />
  );
}
