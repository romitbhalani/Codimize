import GeoBg      from "../components/ui/GeoBg";
import Reveal      from "../components/ui/Reveal";
import StatCard    from "../components/ui/StatCard";
import VideoBanner from "../components/ui/VideoBanner";
import { STATS }   from "../data/siteData";

const VALUES = [
  { icon:"◎", title:"AI-First Thinking",      desc:"We embed intelligence into every layer — not as an afterthought, but as a core design principle.", color:"#a78bfa", rgb:"167,139,250" },
  { icon:"⚡", title:"Speed Without Compromise", desc:"Lean sprints, proven architecture, and reusable components to ship faster without cutting corners.",  color:"#fbbf24", rgb:"251,191,36"  },
  { icon:"◉", title:"Radical Transparency",    desc:"Weekly demos, real-time Slack updates, and honest estimates. You're always in the loop.",              color:"#06b6d4", rgb:"6,182,212"   },
  { icon:"▣", title:"Ownership Mindset",       desc:"We treat your product like it's ours. Every decision is made with business outcomes in mind.",         color:"#34d399", rgb:"52,211,153"  },
];

export default function About({ onNavigate }) {
  const muted = "rgba(255,255,255,.42)";
  const bdr   = "rgba(255,255,255,.07)";

  return (
    <>
      {/* ── HEADER ── */}
      <section style={{ position:"relative", padding:"140px 24px 80px", overflow:"hidden" }}>
        <VideoBanner />
        <GeoBg variant="a" />
        <div style={{ maxWidth:1160, margin:"0 auto", position:"relative", zIndex:2 }}>
          <Reveal>
            <div className="chip">About Codimize</div>
            <h1 style={{ fontSize:"clamp(36px,5.5vw,70px)", fontWeight:800, color:"#fff", lineHeight:1.07, maxWidth:780, marginBottom:28 }}>
              A Boutique Engineering Studio<br />
              <span className="gt">Built for Global Impact.</span>
            </h1>
            <p style={{ color:muted, fontSize:18, lineHeight:1.82, maxWidth:660, marginBottom:64 }}>
              Founded in Ahmedabad, India, Codimize was built by engineers who worked at Tier-1 product
              companies and wanted to bring that same quality to clients worldwide. We're not a body-shop
              — we're a product-thinking engineering partner.
            </p>
          </Reveal>

          {/* Stats */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:20, marginBottom:80 }}>
            {STATS.map((s, i) => (
              <StatCard key={s.label} number={s.number} label={s.label} delay={i * 80} fontSize={46} labelSize={13} />
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section style={{ padding:"0 24px 90px" }}>
        <div style={{ maxWidth:1160, margin:"0 auto" }}>
          <div className="split-grid">
            <Reveal>
              <div className="chip">Who We Are</div>
              <h2 style={{ fontSize:"clamp(26px,3.5vw,46px)", fontWeight:800, color:"#fff", lineHeight:1.1, marginBottom:20 }}>
                Senior Engineers Who<br /><span className="gt">Think Like Founders.</span>
              </h2>
              <p style={{ color:muted, fontSize:16, lineHeight:1.88, marginBottom:32 }}>
                We're not freelancers or a body-shop. We're a tight-knit team of senior engineers who have shipped products at FAANG companies, Y Combinator startups, and high-growth SaaS businesses — and we bring that same craft to every client engagement.
              </p>
              <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                {[
                  "Senior-only engineers — no juniors on your project",
                  "Async-first & timezone-aware for US / UK / CA clients",
                  "Your IP is 100% yours from day one",
                ].map((item, i) => (
                  <div key={i} style={{ display:"flex", alignItems:"center", gap:12 }}>
                    <div style={{ width:22, height:22, borderRadius:"50%", background:"rgba(99,102,241,.15)", border:"1px solid rgba(99,102,241,.35)", display:"flex", alignItems:"center", justifyContent:"center", color:"#818cf8", fontSize:11, fontWeight:700, flexShrink:0 }}>✓</div>
                    <span style={{ color:"rgba(255,255,255,.7)", fontSize:15 }}>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120} y={20}>
              <div className="img-wrap" style={{ height:460, borderRadius:24, border:"1px solid rgba(255,255,255,.07)", boxShadow:"0 32px 80px rgba(0,0,0,.5)" }}>
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80" alt="Codimize team at work" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ padding:"0 24px 100px" }} className="grid-line">
        <div style={{ maxWidth:1160, margin:"0 auto" }}>
          <Reveal>
            <h2 style={{ fontSize:"clamp(26px,3.5vw,44px)", fontWeight:800, color:"#fff", marginBottom:40 }}>
              Our Values
            </h2>
          </Reveal>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:20 }}>
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="card" style={{ padding:32 }}>
                  <div style={{ width:48, height:48, borderRadius:14, background:`rgba(${v.rgb},.1)`, border:`1px solid rgba(${v.rgb},.2)`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, color:v.color, marginBottom:18 }}>
                    {v.icon}
                  </div>
                  <h3 style={{ fontSize:18, fontWeight:700, color:"#fff", marginBottom:10 }}>{v.title}</h3>
                  <p style={{ color:muted, fontSize:14, lineHeight:1.78 }}>{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* CTA */}
          <Reveal delay={200}>
            <div style={{ marginTop:72, position:"relative", overflow:"hidden", background:"#0f0f1a", border:"1px solid rgba(99,102,241,.22)", borderRadius:24 }}>
              <GeoBg variant="c" />
              <div className="split-grid split-grid-rev" style={{ position:"relative", zIndex:2, gap:0 }}>
                <div style={{ padding:"52px 48px" }}>
                  <h2 style={{ fontSize:"clamp(22px,3vw,38px)", fontWeight:800, color:"#fff", marginBottom:14 }}>
                    Let's Build Something Together
                  </h2>
                  <p style={{ color:muted, marginBottom:32, fontSize:16 }}>
                    We're selective about who we work with — because deep partnership is what we do best.
                  </p>
                  <button className="btn-primary" onClick={() => onNavigate("Contact")}>
                    Start a Conversation →
                  </button>
                </div>
                <div className="img-wrap" style={{ height:300, borderRadius:0 }}>
                  <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80" alt="Team collaboration" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
