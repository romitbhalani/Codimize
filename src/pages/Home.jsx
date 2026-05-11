import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GeoBg      from "../components/ui/GeoBg";
import Particles  from "../components/ui/Particles";
import Marquee    from "../components/ui/Marquee";
import Reveal     from "../components/ui/Reveal";
import StatCard   from "../components/ui/StatCard";
import VideoBanner from "../components/ui/VideoBanner";
import { SERVICES, TESTIMONIALS, TECH_STACK } from "../data/siteData";

const HERO_WORDS = ["Scalable.", "Intelligent.", "Fast.", "Reliable.", "Secure."];

export default function Home() {
  const navigate = useNavigate();
  const [wordIdx, setWordIdx] = useState(0);

  // Cycle hero words
  useEffect(() => {
    const timer = setInterval(() => setWordIdx((i) => (i + 1) % HERO_WORDS.length), 2200);
    return () => clearInterval(timer);
  }, []);

  const muted = "rgba(255,255,255,.42)";

  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <VideoBanner />
        <GeoBg variant="a" />
        <Particles count={52} />

        {/* Ambient orbs */}
        <div style={{ position:"absolute", top:"-15%", right:"-8%", width:700, height:700, borderRadius:"50%", background:"radial-gradient(circle,rgba(0,150,255,.13),transparent 70%)", pointerEvents:"none", animation:"float-b 9s ease-in-out infinite" }}/>
        <div style={{ position:"absolute", bottom:"-12%", left:"-6%", width:540, height:540, borderRadius:"50%", background:"radial-gradient(circle,rgba(6,182,212,.09),transparent 70%)", pointerEvents:"none", animation:"float-a 11s ease-in-out infinite" }}/>

        <div className="section-wrap" style={{ position:"relative", zIndex:2 }}>
          <div style={{ maxWidth: 860 }}>

            <div style={{ animation:"slide-up .9s ease forwards", opacity:0, animationDelay:".1s" }}>
              <div className="chip">🇮🇳 India-Based · US / UK / CA Clients · 50+ Projects Shipped</div>
            </div>

            <div style={{ animation:"slide-up .9s ease forwards", opacity:0, animationDelay:".25s" }}>
              <h1 style={{ fontSize:"clamp(46px,7.5vw,92px)", fontWeight:800, lineHeight:1.04, color:"#fff", marginBottom:16 }}>
                We Build Software
              </h1>
              <h1 style={{ fontSize:"clamp(46px,7.5vw,92px)", fontWeight:800, lineHeight:1.04, marginBottom:36 }}>
                That's{" "}
                <span
                  className="gt"
                  key={wordIdx}
                  style={{ display:"inline-block", animation:"slide-up .5s ease forwards" }}
                >
                  {HERO_WORDS[wordIdx]}
                </span>
              </h1>
            </div>

            <div style={{ animation:"slide-up .9s ease forwards", opacity:0, animationDelay:".4s" }}>
              <p style={{ fontSize:"clamp(16px,2.1vw,20px)", color:muted, maxWidth:580, lineHeight:1.78, marginBottom:48 }}>
                From AI-powered SaaS to enterprise platforms — Codimize engineers production-grade
                software for startups and SMEs across the US, UK, and Canada.
              </p>
            </div>

            <div style={{ animation:"slide-up .9s ease forwards", opacity:0, animationDelay:".55s", display:"flex", gap:16, flexWrap:"wrap", alignItems:"center" }}>
              <button className="btn-primary" onClick={() => navigate("/contact")}>
                Book a Free Discovery Call →
              </button>
              <button className="btn-ghost" onClick={() => navigate("/portfolio")}>
                View Case Studies
              </button>
            </div>

            {/* Scroll cue */}
            <div style={{ marginTop:80, display:"flex", alignItems:"center", gap:12, animation:"slide-up .9s ease forwards", opacity:0, animationDelay:".7s" }}>
              <div style={{ width:1, height:52, background:"linear-gradient(to bottom,transparent,rgba(0,150,255,.8))" }}/>
              <span style={{ fontSize:11, color:"rgba(255,255,255,.2)", letterSpacing:".14em", textTransform:"uppercase" }}>
                Scroll to explore
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ── TECH STACK MARQUEE ── */}
      <section style={{ background:"#0a0a14", borderTop:"1px solid rgba(255,255,255,.06)", borderBottom:"1px solid rgba(255,255,255,.06)", padding:"48px 0 44px", overflow:"hidden", position:"relative" }}>
        {/* Subtle ambient glow */}
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,150,255,.06), transparent)", pointerEvents:"none" }} />
        <p style={{ textAlign:"center", fontSize:11, letterSpacing:".14em", textTransform:"uppercase", color:"rgba(255,255,255,.22)", fontWeight:600, marginBottom:28, position:"relative", zIndex:1 }}>
          Trusted Technologies &amp; Platforms
        </p>
        <Marquee items={TECH_STACK} />
      </section>

      {/* ── STATS ── */}
      <section style={{ position:"relative", padding:"80px 24px", overflow:"hidden" }}>
        <GeoBg variant="b" />
        <div style={{ maxWidth:1160, margin:"0 auto", position:"relative", zIndex:2, display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:20 }}>
          {[["50+","Projects Shipped"],["5+","Years Building"],["30+","Engineers"],["3","Continents Served"]].map(([n, l], i) => (
            <StatCard key={l} number={n} label={l} delay={i * 90} fontSize={50} labelSize={14} />
          ))}
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section style={{ position:"relative", padding:"80px 24px 100px", overflow:"hidden" }} className="grid-line">
        <div style={{ maxWidth:1160, margin:"0 auto", position:"relative", zIndex:2 }}>
          <Reveal>
            <div style={{ marginBottom:56 }}>
              <div className="chip">What We Do</div>
              <h2 style={{ fontSize:"clamp(30px,4vw,52px)", fontWeight:800, color:"#fff", maxWidth:560 }}>
                End-to-End<br /><span className="gt">Digital Engineering</span>
              </h2>
            </div>
          </Reveal>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(290px,1fr))", gap:20, alignItems:"stretch" }}>
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 65} style={{ height:"100%" }}>
                <div className="card" style={{ padding:32, position:"relative", overflow:"hidden", height:"100%", display:"flex", flexDirection:"column" }}>
                  {/* Top accent line */}
                  <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:`linear-gradient(90deg,transparent,${s.color},transparent)`, opacity:.7 }}/>
                  {/* Corner glow */}
                  <div style={{ position:"absolute", top:"-35%", right:"-15%", width:200, height:200, borderRadius:"50%", background:`radial-gradient(circle,rgba(${s.rgb},.1),transparent 70%)`, pointerEvents:"none" }}/>

                  <div style={{ width:54, height:54, borderRadius:15, background:`rgba(${s.rgb},.1)`, border:`1px solid rgba(${s.rgb},.22)`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:24, color:s.color, marginBottom:22 }}>
                    {s.icon}
                  </div>
                  <h3 style={{ fontSize:18, fontWeight:700, marginBottom:10, color:"#fff" }}>{s.title}</h3>
                  <p style={{ color:muted, fontSize:14, lineHeight:1.78, marginBottom:18, flex:1 }}>{s.desc}</p>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                    {s.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div style={{ textAlign:"center", marginTop:48 }}>
            <button className="btn-ghost" onClick={() => navigate("/services")}>
              View All Services →
            </button>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ position:"relative", padding:"100px 24px", overflow:"hidden", background:"#0f0f1a" }}>
        <GeoBg variant="c" />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,rgba(0,150,255,.14),rgba(56,190,255,.08))", pointerEvents:"none" }}/>
        <div style={{ maxWidth:1160, margin:"0 auto", position:"relative", zIndex:2 }}>
          <div className="split-grid">
            <Reveal>
              <div className="chip">Ready to Build?</div>
              <h2 style={{ fontSize:"clamp(32px,5vw,62px)", fontWeight:800, color:"#fff", lineHeight:1.08, marginBottom:20 }}>
                Build Something<br /><span className="gt">Extraordinary.</span>
              </h2>
              <p style={{ color:muted, fontSize:17, lineHeight:1.82, marginBottom:40, maxWidth:480 }}>
                Free 30-min discovery call. No commitment. Just honest advice from engineers who've shipped 50+ products.
              </p>
              <div style={{ display:"flex", gap:16, flexWrap:"wrap" }}>
                <button className="btn-primary" onClick={() => navigate("/contact")}>Book a Free Call Today →</button>
                <button className="btn-ghost"   onClick={() => navigate("/careers")}>View Careers</button>
              </div>
            </Reveal>
            <Reveal delay={120} y={20}>
              <div className="img-wrap" style={{ height:440, borderRadius:24, border:"1px solid rgba(255,255,255,.07)", boxShadow:"0 40px 100px rgba(0,0,0,.55)" }}>
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&auto=format&fit=crop&q=80" alt="Team collaboration" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding:"100px 24px", position:"relative", overflow:"hidden" }}>
        <GeoBg variant="b" />
        <div style={{ maxWidth:1160, margin:"0 auto", position:"relative", zIndex:2 }}>
          <Reveal>
            <div style={{ marginBottom:56 }}>
              <div className="chip">Client Stories</div>
              <h2 style={{ fontSize:"clamp(30px,4vw,50px)", fontWeight:800, color:"#fff" }}>
                Trusted <span className="gt">Worldwide</span>
              </h2>
            </div>
          </Reveal>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:20, alignItems:"stretch" }}>
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 100} style={{ height: "100%" }}>
                <div className="card" style={{ padding:32, position:"relative", display:"flex", flexDirection:"column", justifyContent:"space-between", minHeight:"100%" }}>
                  <div style={{ position:"absolute", top:18, right:22, fontSize:64, color:"rgba(0,150,255,.1)", fontFamily:"serif", lineHeight:1 }}>"</div>
                  <div style={{ display:"flex", gap:3, marginBottom:18 }}>
                    {[0,1,2,3,4].map((s) => <span key={s} style={{ color:"#fbbf24", fontSize:14 }}>★</span>)}
                  </div>
                  <p style={{ color:muted, fontSize:15, lineHeight:1.82, marginBottom:28 }}>{t.quote}</p>
                  <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                    <div style={{ width:44, height:44, borderRadius:"50%", background:`rgba(${t.rgb},.14)`, border:`1px solid rgba(${t.rgb},.3)`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:700, color:t.color }}>
                      {t.av}
                    </div>
                    <div>
                      <div style={{ fontSize:14, fontWeight:600, color:"#fff" }}>{t.name}</div>
                      <div style={{ fontSize:12, color:muted }}>{t.role} · {t.loc}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
