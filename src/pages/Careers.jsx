import GeoBg  from "../components/ui/GeoBg";
import Reveal  from "../components/ui/Reveal";
import { CAREERS } from "../data/siteData";

export default function Careers({ onNavigate }) {
  const muted = "rgba(255,255,255,.42)";
  const bdr   = "rgba(255,255,255,.07)";

  return (
    <section style={{ position:"relative", padding:"140px 24px 100px", overflow:"hidden" }}>
      <GeoBg variant="a" />

      <div style={{ maxWidth:1100, margin:"0 auto", position:"relative", zIndex:2 }}>

        {/* Header */}
        <Reveal>
          <div style={{ textAlign:"center", marginBottom:72 }}>
            <div className="chip">Join Our Team</div>
            <h1 style={{ fontSize:"clamp(32px,5vw,64px)", fontWeight:800, color:"#fff", marginBottom:16 }}>
              Career Opportunities at Codimize
            </h1>
            <p style={{ color:muted, fontSize:17, maxWidth:560, margin:"0 auto" }}>
              Discover open roles for product, engineering, and growth experts. We’re building ambitious software with remote-first teams and global clients.
            </p>
          </div>
        </Reveal>

        {/* Career cards */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:24, alignItems:"stretch" }}>
          {CAREERS.map((job, i) => (
            <Reveal key={job.title} delay={i * 100}>
              <div
                className="card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "100%",
                  padding: 40,
                  border: job.highlight ? "1px solid rgba(0,150,255,.5)" : `1px solid ${bdr}`,
                  position: "relative",
                  overflow: "hidden",
                  background: job.highlight ? "rgba(8,14,24,.98)" : "#0f0f1a",
                }}
              >
                {job.highlight && (
                  <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:"linear-gradient(90deg,#0096FF,#38BEFF,#06b6d4)" }}/>
                )}
                {job.highlight && (
                  <div style={{ position:"absolute", top:"-40%", right:"-20%", width:300, height:300, borderRadius:"50%", background:"radial-gradient(circle,rgba(0,150,255,.07),transparent 70%)", pointerEvents:"none" }}/>
                )}

                <div style={{ position:"relative", zIndex:1 }}>
                  {job.highlight && (
                    <div style={{ display:"inline-block", background:"rgba(0,150,255,.15)", color:"#38BEFF", fontSize:11, fontWeight:700, padding:"4px 14px", borderRadius:20, marginBottom:16, textTransform:"uppercase", letterSpacing:".08em" }}>
                      Hiring Now
                    </div>
                  )}

                  <h3 style={{ fontSize:22, fontWeight:800, color:"#fff", marginBottom:6 }}>{job.title}</h3>
                  <p style={{ color:muted, fontSize:13, marginBottom:24 }}>{job.desc}</p>

                  <div style={{ display:"flex", flexWrap:"wrap", gap:12, marginBottom:24 }}>
                    <span style={{ color:"#fff", fontSize:13, padding:"8px 12px", border:`1px solid ${bdr}`, borderRadius:999 }}>{job.type}</span>
                    <span style={{ color:"#fff", fontSize:13, padding:"8px 12px", border:`1px solid ${bdr}`, borderRadius:999 }}>{job.location}</span>
                  </div>

                  <div style={{ height:1, background:bdr, marginBottom:24 }}/>

                  <ul style={{ marginBottom:36, display:"flex", flexDirection:"column", gap:14 }}>
                    {job.responsibilities.map((item) => (
                      <li key={item} style={{ display:"flex", gap:12, fontSize:14, color:muted, alignItems:"flex-start" }}>
                        <span style={{ color:job.accent, fontSize:16, lineHeight:1.3, flexShrink:0 }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onNavigate("Contact")}
                  className={job.highlight ? "btn-primary" : "btn-ghost"}
                  style={{ width:"100%", padding:"15px 24px" }}
                >
                  {job.cta}
                </button>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
