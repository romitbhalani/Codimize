/**
 * GeoBg — Valor-inspired SVG geometric background.
 * Three variants (a / b / c) used across different sections.
 * All shapes are decorative, pointer-events: none.
 */
export default function GeoBg({ variant = "a" }) {
  const baseStyle = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    overflow: "hidden",
  };

  if (variant === "a") return (
    <svg style={baseStyle} viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="rga1" cx="75%" cy="15%" r="55%">
          <stop offset="0%"   stopColor="#6366f1" stopOpacity=".2"/>
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="rga2" cx="5%" cy="90%" r="40%">
          <stop offset="0%"   stopColor="#06b6d4" stopOpacity=".13"/>
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="rga3" cx="50%" cy="50%" r="60%">
          <stop offset="0%"   stopColor="#8b5cf6" stopOpacity=".06"/>
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="1400" height="800" fill="url(#rga3)"/>
      <rect width="1400" height="800" fill="url(#rga1)"/>
      <rect width="1400" height="800" fill="url(#rga2)"/>

      {/* Nested hexagons — top right */}
      <polygon points="1100,20 1300,130 1300,350 1100,460 900,350 900,130"  fill="none" stroke="rgba(99,102,241,.10)" strokeWidth="1.5"/>
      <polygon points="1100,60 1270,158 1270,322 1100,420 930,322 930,158"  fill="none" stroke="rgba(99,102,241,.06)" strokeWidth="1"/>
      <polygon points="1100,100 1240,185 1240,295 1100,380 960,295 960,185" fill="none" stroke="rgba(99,102,241,.03)" strokeWidth="1"/>

      {/* Rotated rectangle — bottom left */}
      <rect x="-80" y="580" width="380" height="380" rx="36" fill="none" stroke="rgba(6,182,212,.09)"  strokeWidth="1.5" transform="rotate(-22,-80,580)"/>
      <rect x="-40" y="620" width="300" height="300" rx="28" fill="none" stroke="rgba(6,182,212,.05)"  strokeWidth="1"   transform="rotate(-22,-40,620)"/>

      {/* Diamond shapes */}
      <rect x="520" y="60"   width="28" height="28" fill="none"                  stroke="rgba(167,139,250,.35)" strokeWidth="1.5" transform="rotate(45,534,74)"/>
      <rect x="240" y="300"  width="16" height="16" fill="rgba(99,102,241,.18)"                                                    transform="rotate(45,248,308)"/>
      <rect x="1250" y="640" width="20" height="20" fill="none"                  stroke="rgba(6,182,212,.22)"   strokeWidth="1.5" transform="rotate(45,1260,650)"/>
      <rect x="80"   y="120" width="12" height="12" fill="rgba(167,139,250,.15)"                                                    transform="rotate(45,86,126)"/>
      <rect x="700"  y="700" width="16" height="16" fill="none"                  stroke="rgba(99,102,241,.2)"   strokeWidth="1"   transform="rotate(45,708,708)"/>

      {/* Concentric circles — bottom center */}
      <circle cx="700" cy="900" r="320" fill="none" stroke="rgba(99,102,241,.05)" strokeWidth="1.5"/>
      <circle cx="700" cy="900" r="240" fill="none" stroke="rgba(99,102,241,.04)" strokeWidth="1"/>

      {/* Cross markers */}
      <line x1="420" y1="560" x2="420" y2="620" stroke="rgba(167,139,250,.22)" strokeWidth="1.5"/>
      <line x1="390" y1="590" x2="450" y2="590" stroke="rgba(167,139,250,.22)" strokeWidth="1.5"/>
      <line x1="1150" y1="500" x2="1150" y2="548" stroke="rgba(6,182,212,.18)" strokeWidth="1.5"/>
      <line x1="1126" y1="524" x2="1174" y2="524" stroke="rgba(6,182,212,.18)" strokeWidth="1.5"/>

      {/* Dot grid */}
      {[0,1,2,3,4,5,6,7].map(c => [0,1,2,3,4,5].map(r => (
        <circle key={`${c}-${r}`} cx={60 + c * 90} cy={60 + r * 90} r="1.5" fill="rgba(255,255,255,.045)"/>
      )))}
    </svg>
  );

  if (variant === "b") return (
    <svg style={baseStyle} viewBox="0 0 1400 600" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="rgb1" cx="15%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#a78bfa" stopOpacity=".16"/>
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="rgb2" cx="88%" cy="55%" r="44%">
          <stop offset="0%"   stopColor="#34d399" stopOpacity=".1"/>
          <stop offset="100%" stopColor="#34d399" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="1400" height="600" fill="url(#rgb1)"/>
      <rect width="1400" height="600" fill="url(#rgb2)"/>

      {/* Concentric circles — left edge */}
      <circle cx="80" cy="300" r="300" fill="none" stroke="rgba(167,139,250,.10)" strokeWidth="1.5"/>
      <circle cx="80" cy="300" r="220" fill="none" stroke="rgba(167,139,250,.06)" strokeWidth="1"/>
      <circle cx="80" cy="300" r="140" fill="none" stroke="rgba(167,139,250,.04)" strokeWidth="1"/>

      {/* Grid lines — right panel */}
      {[0,1,2,3,4,5,6].map(i => <line key={i} x1={850 + i*60} y1="0" x2={850 + i*60} y2="600" stroke="rgba(255,255,255,.03)" strokeWidth="1"/>)}
      {[0,1,2,3,4,5].map(i =>   <line key={i} x1="850" y1={i*120} x2="1400" y2={i*120} stroke="rgba(255,255,255,.03)" strokeWidth="1"/>)}

      {/* Triangle outline */}
      <polygon points="1120,40 1300,340 940,340" fill="none" stroke="rgba(52,211,153,.1)" strokeWidth="1.5"/>

      {/* Diamonds */}
      <rect x="400" y="70"  width="22" height="22" fill="none"                stroke="rgba(167,139,250,.3)" strokeWidth="1.5" transform="rotate(45,411,81)"/>
      <rect x="800" y="490" width="16" height="16" fill="rgba(6,182,212,.15)"                                                   transform="rotate(45,808,498)"/>

      {/* Cross */}
      <line x1="600" y1="100" x2="600" y2="155" stroke="rgba(167,139,250,.2)" strokeWidth="1.5"/>
      <line x1="572" y1="127" x2="628" y2="127" stroke="rgba(167,139,250,.2)" strokeWidth="1.5"/>

      {/* Dot grid */}
      {[0,1,2,3,4].map(c => [0,1,2,3,4,5,6].map(r => (
        <circle key={`${c}-${r}`} cx={900 + c*80} cy={20 + r*80} r="1.5" fill="rgba(255,255,255,.04)"/>
      )))}
    </svg>
  );

  if (variant === "c") return (
    <svg style={baseStyle} viewBox="0 0 1400 500" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="rgc1" cx="50%" cy="50%" r="65%">
          <stop offset="0%"   stopColor="#6366f1" stopOpacity=".16"/>
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="1400" height="500" fill="url(#rgc1)"/>

      {/* Isometric diagonal lines */}
      {[0,1,2,3,4,5,6,7,8].map(i => <line key={`d${i}`} x1={-300 + i*200} y1="500" x2={100  + i*200} y2="0"   stroke="rgba(99,102,241,.05)" strokeWidth="1"/>)}
      {[0,1,2,3,4,5,6,7,8].map(i => <line key={`u${i}`} x1={i*200}        y1="0"   x2={-200 + i*200} y2="500" stroke="rgba(99,102,241,.05)" strokeWidth="1"/>)}

      {/* Rotating rectangle — top left */}
      <rect x="80"  y="60"  width="200" height="200" rx="20" fill="none" stroke="rgba(99,102,241,.12)" strokeWidth="1.5" transform="rotate(15,180,160)"/>
      <rect x="110" y="90"  width="140" height="140" rx="16" fill="none" stroke="rgba(99,102,241,.07)" strokeWidth="1"   transform="rotate(15,180,160)"/>

      {/* Rotating rectangle — bottom right */}
      <rect x="1100" y="250" width="260" height="260" rx="26" fill="none" stroke="rgba(6,182,212,.09)" strokeWidth="1.5" transform="rotate(-12,1230,380)"/>

      {/* Center circle */}
      <circle cx="700" cy="250" r="340" fill="none" stroke="rgba(167,139,250,.05)" strokeWidth="1"/>
    </svg>
  );

  return null;
}
