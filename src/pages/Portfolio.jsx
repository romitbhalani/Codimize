import GeoBg      from "../components/ui/GeoBg";
import Reveal      from "../components/ui/Reveal";
import VideoBanner from "../components/ui/VideoBanner";
import { PORTFOLIO } from "../data/siteData";

export default function Portfolio({ onNavigate }) {
  const muted = "rgba(255,255,255,.42)";
  const bdr   = "rgba(255,255,255,.07)";

  return (
    <section style={{ position:"relative", padding:"140px 24px 100px", overflow:"hidden" }}>
      <VideoBanner />
      <GeoBg variant="a" />

      <div style={{ maxWidth:1160, margin:"0 auto", position:"relative", zIndex:2 }}>
        <Reveal>
          <div className="chip">Case Studies</div>
          <h1 style={{ fontSize:"clamp(36px,5.5vw,68px)", fontWeight:800, color:"#fff", lineHeight:1.07, marginBottom:20 }}>
            Work That<br /><span className="gt">Speaks for Itself.</span>
          </h1>
          <p style={{ color:muted, fontSize:18, maxWidth:520, marginBottom:72 }}>
            Real products, real metrics, real impact for clients across the globe.
          </p>
        </Reveal>

        {/* Case study cards */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(460px,1fr))", gap:24 }}>
          {PORTFOLIO.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="card" style={{ overflow:"hidden", position:"relative" }}>

                {/* Card hero area */}
                <div style={{ height:240, position:"relative", overflow:"hidden", borderBottom:`1px solid ${bdr}` }}>
                  <img src={p.image} alt={p.title} className="card-img-hero" />
                  <div style={{ position:"absolute", inset:0, background:`linear-gradient(to bottom, rgba(${p.rgb},.25) 0%, rgba(8,8,14,.92) 100%)` }} />
                  <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"24px 28px", zIndex:2 }}>
                    <div style={{ display:"inline-block", fontSize:11, color:p.accent, background:`rgba(${p.rgb},.18)`, border:`1px solid rgba(${p.rgb},.35)`, padding:"4px 12px", borderRadius:20, fontWeight:600, marginBottom:10, backdropFilter:"blur(8px)" }}>
                      {p.category}
                    </div>
                    <h3 style={{ fontSize:26, fontWeight:800, color:"#fff" }}>{p.title}</h3>
                  </div>
                </div>

                {/* Card body */}
                <div style={{ padding:28 }}>
                  <p style={{ color:muted, fontSize:14, lineHeight:1.82, marginBottom:22 }}>{p.desc}</p>

                  {/* Metric badges */}
                  <div style={{ display:"flex", flexWrap:"wrap", gap:10, marginBottom:20 }}>
                    {p.metrics.map((m) => (
                      <div key={m} style={{ background:`rgba(${p.rgb},.1)`, border:`1px solid rgba(${p.rgb},.25)`, borderRadius:8, padding:"6px 14px", fontSize:13, fontWeight:600, color:p.accent }}>
                        {m}
                      </div>
                    ))}
                  </div>

                  {/* Tech stack tags */}
                  <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                    {p.stack.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={300}>
          <div style={{ marginTop:72, textAlign:"center" }}>
            <p style={{ color:muted, marginBottom:28, fontSize:16 }}>
              We have 40+ additional case studies across various industries.
            </p>
            <button className="btn-primary" onClick={() => onNavigate("Contact")}>
              Request Full Portfolio →
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
