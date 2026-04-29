import { useEffect, useRef, useState } from "react";

/**
 * useInView — fires once when the element enters the viewport.
 * @param {number} threshold  – 0–1, how much of the element must be visible
 * @returns {[React.RefObject, boolean]}
 */
export function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // fire once only
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}
