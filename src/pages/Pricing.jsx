import GeoBg  from "../components/ui/GeoBg";
import Reveal  from "../components/ui/Reveal";
import { PRICING } from "../data/siteData";

export default function Pricing({ onNavigate }) {
  const muted = "rgba(255,255,255,.42)";
  const bdr   = "rgba(255,255,255,.07)";

  return (
    <section style={{ position:"relative", padding:"140px 24px 100px", overflow:"hidden" }}>
      <GeoBg variant="a" />

      <div style={{ maxWidth:1100, margin:"0 auto", position:"relative", zIndex:2 }}>

        {/* Header */}
        <Reveal>
          <div style={{ textAlign:"center", marginBottom:72 }}>
            <div className="chip">Transparent Pricing</div>
            <h1 style={{ fontSize:"clamp(32px,5vw,64px)", fontWeight:800, color:"#fff", marginBottom:16 }}>
              Simple, <span className="gt">Honest</span> Pricing
            </h1>
            <p style={{ color:muted, fontSize:17, maxWidth:480, margin:"0 auto" }}>
              No hidden fees. Elite engineering at a fraction of US/UK cost.
            </p>
          </div>
        </Reveal>

        {/* Pricing cards */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:24, alignItems:"start" }}>
          {PRICING.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100}>
              <div
                className="card"
                style={{
                  padding: 40,
                  border: plan.highlight ? "1px solid rgba(167,139,250,.5)" : `1px solid ${bdr}`,
                  position: "relative",
                  overflow: "hidden",
                  background: plan.highlight ? "rgba(18,14,32,.98)" : "#0f0f1a",
                }}
              >
                {/* Rainbow top bar on featured plan */}
                {plan.highlight && (
                  <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:"linear-gradient(90deg,#6366f1,#a78bfa,#06b6d4)" }}/>
                )}
                {/* Subtle corner glow on featured */}
                {plan.highlight && (
                  <div style={{ position:"absolute", top:"-40%", right:"-20%", width:300, height:300, borderRadius:"50%", background:"radial-gradient(circle,rgba(167,139,250,.07),transparent 70%)", pointerEvents:"none" }}/>
                )}

                <div style={{ position:"relative", zIndex:1 }}>
                  {plan.highlight && (
                    <div style={{ display:"inline-block", background:"rgba(167,139,250,.15)", color:"#a78bfa", fontSize:11, fontWeight:700, padding:"4px 14px", borderRadius:20, marginBottom:16, textTransform:"uppercase", letterSpacing:".08em" }}>
                      Most Popular
                    </div>
                  )}

                  <h3 style={{ fontSize:22, fontWeight:800, color:"#fff", marginBottom:6 }}>{plan.name}</h3>
                  <p style={{ color:muted, fontSize:13, marginBottom:24 }}>{plan.desc}</p>

                  <div style={{ marginBottom:28 }}>
                    <span style={{ fontSize:54, fontWeight:800, fontFamily:"'Sora','Sora Fallback',sans-serif", color:"#fff" }}>{plan.price}</span>
                    <span style={{ color:muted, fontSize:16 }}>{plan.period}</span>
                  </div>

                  <div style={{ height:1, background:bdr, marginBottom:24 }}/>

                  <ul style={{ marginBottom:36, display:"flex", flexDirection:"column", gap:14 }}>
                    {plan.features.map((f) => (
                      <li key={f} style={{ display:"flex", gap:12, fontSize:14, color:muted, alignItems:"flex-start" }}>
                        <span style={{ color:plan.accent, fontSize:16, lineHeight:1.3, flexShrink:0 }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => onNavigate("Contact")}
                    className={plan.highlight ? "btn-primary" : "btn-ghost"}
                    style={{ width:"100%", padding:"15px 24px" }}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Footnote */}
        <Reveal delay={300}>
          <div style={{ marginTop:48, background:"#0f0f1a", border:`1px solid ${bdr}`, borderRadius:14, padding:"24px 32px", textAlign:"center" }}>
            <p style={{ color:muted, fontSize:14 }}>
              All plans include IP ownership · NDA · Version-controlled delivery · Dedicated Slack · 🇺🇸 🇬🇧 🇨🇦 Timezone coverage
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
