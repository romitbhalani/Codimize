import { useNavigate } from "react-router-dom";
import GeoBg      from "../components/ui/GeoBg";
import Reveal      from "../components/ui/Reveal";
import VideoBanner from "../components/ui/VideoBanner";
import { SERVICES } from "../data/siteData";

export default function Services() {
  const navigate = useNavigate();
  const muted = "rgba(255,255,255,.42)";
  const bdr   = "rgba(255,255,255,.07)";

  return (
    <section style={{ position:"relative", padding:"140px 24px 100px", overflow:"hidden" }}>
      <VideoBanner />
      <GeoBg variant="a" />

      <div style={{ maxWidth:1160, margin:"0 auto", position:"relative", zIndex:2 }}>
        <div className="split-grid" style={{ marginBottom:80 }}>
          <Reveal>
            <div className="chip">Our Services</div>
            <h1 style={{ fontSize:"clamp(36px,5.5vw,68px)", fontWeight:800, color:"#fff", lineHeight:1.07, marginBottom:20 }}>
              Full-Stack<br /><span className="gt">Digital Engineering</span>
            </h1>
            <p style={{ color:muted, fontSize:18, lineHeight:1.82, marginBottom:36 }}>
              Everything you need to build, launch, and scale a world-class software product — from first line of code to production at scale.
            </p>
            <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
              <button className="btn-primary" onClick={() => navigate("/contact")}>Start a Project →</button>
              <button className="btn-ghost" onClick={() => navigate("/portfolio")}>See Our Work</button>
            </div>
          </Reveal>
          <Reveal delay={120} y={20}>
            <div className="img-wrap" style={{ height:420, borderRadius:24, border:"1px solid rgba(255,255,255,.07)", boxShadow:"0 32px 80px rgba(0,0,0,.5)" }}>
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=900&auto=format&fit=crop&q=80" alt="Engineering team at work" />
            </div>
          </Reveal>
        </div>

        {/* Service cards */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:22, alignItems:"stretch" }}>
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 70} style={{ height:"100%" }}>
              <div
                className="card"
                onClick={() => navigate(`/services/${s.slug}`)}
                style={{
                  padding:36, position:"relative", overflow:"hidden",
                  height:"100%", display:"flex", flexDirection:"column",
                  cursor:"pointer", transition:"transform .25s, border-color .25s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor = `rgba(${s.rgb},.4)`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "";
                }}
              >
                {/* Top accent */}
                <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:`linear-gradient(90deg,${s.color}00,${s.color},${s.color}00)` }}/>
                {/* Corner glow */}
                <div style={{ position:"absolute", top:"-30%", right:"-10%", width:200, height:200, borderRadius:"50%", background:`radial-gradient(circle,rgba(${s.rgb},.1),transparent 70%)`, pointerEvents:"none" }}/>

                <div style={{ width:56, height:56, borderRadius:16, background:`rgba(${s.rgb},.1)`, border:`1px solid rgba(${s.rgb},.22)`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:24, color:s.color, marginBottom:24 }}>
                  {s.icon}
                </div>
                <h3 style={{ fontSize:20, fontWeight:700, marginBottom:12, color:"#fff" }}>{s.title}</h3>
                <p style={{ color:muted, fontSize:14, lineHeight:1.8, marginBottom:20, flex:1 }}>{s.desc}</p>
                <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:16 }}>
                  {s.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
                <div style={{ display:"flex", alignItems:"center", gap:6, color:s.color, fontSize:13, fontWeight:600 }}>
                  View Full Details <span style={{ fontSize:16 }}>→</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={300}>
          <div style={{ marginTop:80, background:"#0f0f1a", border:`1px solid ${bdr}`, borderRadius:20, padding:"48px 40px", textAlign:"center" }}>
            <h2 style={{ fontSize:26, fontWeight:800, color:"#fff", marginBottom:12 }}>
              Not Sure What You Need?
            </h2>
            <p style={{ color:muted, marginBottom:28 }}>
              Book a free 30-min consultation and our architects will scope the right approach for your goals.
            </p>
            <button className="btn-primary" onClick={() => navigate("/contact")}>
              Get a Free Technical Consultation →
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
