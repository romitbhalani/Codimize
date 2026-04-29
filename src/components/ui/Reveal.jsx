import { useInView } from "../../hooks/useInView";

/**
 * Reveal — wraps children in a fade + slide-up animation
 * that triggers once when scrolled into view.
 *
 * Props:
 *  delay     {number}  ms delay before animation starts (default 0)
 *  y         {number}  px to slide up from (default 36)
 *  className {string}  extra class names
 */
export default function Reveal({ children, delay = 0, y = 36, className = "", style: extraStyle = {} }) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        transition: `
          opacity   0.85s cubic-bezier(.16,1,.3,1) ${delay}ms,
          transform 0.85s cubic-bezier(.16,1,.3,1) ${delay}ms
        `,
        ...extraStyle,
      }}
    >
      {children}
    </div>
  );
}
