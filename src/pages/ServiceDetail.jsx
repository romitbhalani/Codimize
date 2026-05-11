import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { SERVICES, ENGAGEMENT_MODELS, INDUSTRIES } from "../data/siteData";
import GeoBg        from "../components/ui/GeoBg";
import Reveal        from "../components/ui/Reveal";
import SubNav        from "../components/ui/SubNav";
import TechTabs      from "../components/ui/TechTabs";
import FAQAccordion  from "../components/ui/FAQAccordion";

export default function ServiceDetail() {
  const { slug }   = useParams();
  const navigate   = useNavigate();
  const s          = SERVICES.find((svc) => svc.slug === slug);

  useEffect(() => {
    if (!s) navigate("/services", { replace: true });
  }, [s, navigate]);

  if (!s) return null;

  const muted = "rgba(255,255,255,.42)";
  const bdr   = "rgba(255,255,255,.07)";

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          minHeight: 620,
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          paddingTop: 80,
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage: `url(${s.heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(.28) saturate(1.1)",
          }}
        />
        {/* Gradient overlays */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,8,14,.3) 0%, rgba(8,8,14,.8) 60%, #08080e 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 70% 60% at 30% 40%, rgba(${s.rgb},.14), transparent)` }} />
        {/* Top accent line */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${s.color}, transparent)` }} />

        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "80px 24px 80px", position: "relative", zIndex: 2, width: "100%" }}>
          {/* Breadcrumb */}
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
              <Link
                to="/services"
                style={{ display: "inline-flex", alignItems: "center", gap: 6, color: muted, fontSize: 13, textDecoration: "none", transition: "color .2s" }}
                onMouseOver={(e) => (e.currentTarget.style.color = s.color)}
                onMouseOut={(e)  => (e.currentTarget.style.color = muted)}
              >
                ← All Services
              </Link>
              <span style={{ color: "rgba(255,255,255,.22)", fontSize: 13 }}>/</span>
              <span style={{ color: s.color, fontSize: 13, fontWeight: 600 }}>{s.title}</span>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "flex-end" }}>
            <div>
              <Reveal>
                {/* Icon + chip */}
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                  <div
                    style={{
                      width: 64, height: 64, borderRadius: 18,
                      background: `rgba(${s.rgb},.15)`,
                      border: `1px solid rgba(${s.rgb},.35)`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 28, color: s.color,
                      boxShadow: `0 0 48px rgba(${s.rgb},.22)`,
                    }}
                  >
                    {s.icon}
                  </div>
                  <div className="chip" style={{ borderColor: `rgba(${s.rgb},.35)`, color: s.color }}>
                    {s.title}
                  </div>
                </div>

                <h1
                  style={{
                    fontSize: "clamp(30px, 4.5vw, 60px)",
                    fontWeight: 800, color: "#fff", lineHeight: 1.07,
                    marginBottom: 22, maxWidth: 800,
                  }}
                >
                  {s.headline}
                </h1>

                <p style={{ color: "rgba(255,255,255,.62)", fontSize: 17, lineHeight: 1.8, maxWidth: 640, marginBottom: 32 }}>
                  {s.overview}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36 }}>
                  {s.tags.map((t) => (
                    <span key={t} style={{ padding: "5px 14px", borderRadius: 999, background: `rgba(${s.rgb},.12)`, border: `1px solid rgba(${s.rgb},.28)`, color: s.color, fontSize: 12, fontWeight: 600 }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <button className="btn-primary" onClick={() => navigate("/contact")}>
                    Start a Project →
                  </button>
                  <button className="btn-ghost" onClick={() => navigate("/portfolio")}>
                    See Our Work
                  </button>
                </div>
              </Reveal>
            </div>

            {/* Hero stats */}
            <Reveal delay={150} y={20}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, minWidth: 190 }}>
                {s.heroStats.map((stat, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "22px 26px",
                      background: "rgba(255,255,255,.04)",
                      border: `1px solid rgba(${s.rgb},.18)`,
                      borderRadius: 16,
                      backdropFilter: "blur(12px)",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: 28, fontWeight: 800, color: s.color, fontFamily: "'Sora', sans-serif", lineHeight: 1 }}>
                      {stat.number}
                    </div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,.5)", marginTop: 6, lineHeight: 1.4 }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── STICKY SUB-NAV ───────────────────────────────────────── */}
      <SubNav color={s.color} rgb={s.rgb} />

      {/* ── OVERVIEW / HIGHLIGHTS ────────────────────────────────── */}
      <section id="overview" style={{ padding: "100px 24px", background: "#0a0a14", borderTop: `1px solid ${bdr}` }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
            <Reveal>
              <div className="chip">Overview</div>
              <h2
                style={{
                  fontSize: "clamp(26px, 3.5vw, 44px)",
                  fontWeight: 800, color: "#fff", lineHeight: 1.12, marginBottom: 20,
                }}
              >
                Why Teams Choose{" "}
                <span style={{ background: `linear-gradient(135deg, ${s.color}, rgba(${s.rgb},.55))`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Codimize
                </span>{" "}
                for This
              </h2>
              <p style={{ color: muted, fontSize: 16, lineHeight: 1.85, marginBottom: 32 }}>
                We've shipped this service for 50+ companies across three continents. Here's what sets our approach apart from every other agency.
              </p>
              <button className="btn-primary" onClick={() => navigate("/contact")}>
                Book Free Consultation →
              </button>
            </Reveal>

            <Reveal delay={100}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {s.highlights.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex", alignItems: "flex-start", gap: 14,
                      padding: "16px 20px",
                      background: "#111120",
                      border: `1px solid ${bdr}`,
                      borderRadius: 14,
                      transition: "border-color .25s, transform .2s",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = `rgba(${s.rgb},.35)`;
                      e.currentTarget.style.transform = "translateX(4px)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = bdr;
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    <div
                      style={{
                        width: 24, height: 24, borderRadius: "50%", flexShrink: 0,
                        background: `rgba(${s.rgb},.15)`,
                        border: `1px solid rgba(${s.rgb},.35)`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: s.color, fontSize: 11, fontWeight: 700,
                      }}
                    >
                      ✓
                    </div>
                    <span style={{ color: "rgba(255,255,255,.8)", fontSize: 14, lineHeight: 1.65 }}>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SPECIALIZATIONS ──────────────────────────────────────── */}
      <section id="specializations" style={{ padding: "100px 24px", position: "relative", overflow: "hidden" }}>
        <GeoBg variant="b" />
        <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <div className="chip" style={{ display: "inline-block" }}>Specializations</div>
              <h2
                style={{
                  fontSize: "clamp(26px, 3.5vw, 46px)",
                  fontWeight: 800, color: "#fff", lineHeight: 1.1, marginTop: 16,
                }}
              >
                Our <span className="gt">Core Capabilities</span>
              </h2>
              <p style={{ color: muted, fontSize: 16, lineHeight: 1.8, maxWidth: 560, margin: "16px auto 0" }}>
                Deep expertise across every facet of {s.title.toLowerCase()}, delivered by specialists — not generalists.
              </p>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {s.specializations.map((spec, i) => (
              <Reveal key={spec.title} delay={i * 60}>
                <div
                  className="card"
                  style={{
                    padding: 32, height: "100%",
                    display: "flex", flexDirection: "column", gap: 16,
                    position: "relative", overflow: "hidden",
                    transition: "transform .25s, border-color .25s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.borderColor = `rgba(${s.rgb},.38)`;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "";
                  }}
                >
                  {/* Top accent */}
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${s.color}00, ${s.color}, ${s.color}00)`, opacity: 0.6 }} />
                  <div
                    style={{
                      width: 52, height: 52, borderRadius: 14,
                      background: `rgba(${s.rgb},.1)`,
                      border: `1px solid rgba(${s.rgb},.22)`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 22, color: s.color,
                    }}
                  >
                    {spec.icon}
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#fff", margin: 0 }}>{spec.title}</h3>
                  <p style={{ color: muted, fontSize: 14, lineHeight: 1.78, margin: 0, flex: 1 }}>{spec.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ───────────────────────────────────────────── */}
      <section id="tech-stack" style={{ padding: "100px 24px", background: "#090912", borderTop: `1px solid ${bdr}` }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="chip" style={{ display: "inline-block" }}>Technologies</div>
              <h2
                style={{
                  fontSize: "clamp(26px, 3.5vw, 46px)",
                  fontWeight: 800, color: "#fff", lineHeight: 1.1, marginTop: 16,
                }}
              >
                Tools &amp; <span className="gt">Tech Stack</span>
              </h2>
              <p style={{ color: muted, fontSize: 16, lineHeight: 1.8, maxWidth: 520, margin: "16px auto 0" }}>
                Battle-tested technologies chosen for reliability, performance, and long-term maintainability.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <TechTabs technologies={s.technologies} color={s.color} rgb={s.rgb} />
          </Reveal>
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────────────── */}
      <section style={{ padding: "100px 24px", borderTop: `1px solid ${bdr}` }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="chip" style={{ display: "inline-block" }}>Industries</div>
              <h2
                style={{
                  fontSize: "clamp(26px, 3.5vw, 46px)",
                  fontWeight: 800, color: "#fff", lineHeight: 1.1, marginTop: 16,
                }}
              >
                Domains We <span className="gt">Know Deeply</span>
              </h2>
              <p style={{ color: muted, fontSize: 16, lineHeight: 1.8, maxWidth: 520, margin: "16px auto 0" }}>
                From regulated industries to fast-moving startups — we've built for them all.
              </p>
            </div>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
              gap: 14,
            }}
          >
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 40}>
                <div
                  className="card"
                  style={{
                    padding: "24px 18px",
                    display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
                    borderRadius: 16, textAlign: "center",
                    transition: "border-color .2s, transform .2s",
                    cursor: "default",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = `rgba(${s.rgb},.35)`;
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = "";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <span style={{ fontSize: 28 }}>{ind.icon}</span>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,.65)", fontWeight: 500, lineHeight: 1.3 }}>
                    {ind.name}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────── */}
      <section id="process" style={{ padding: "100px 24px", background: "#090912", borderTop: `1px solid ${bdr}` }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <div className="chip" style={{ display: "inline-block" }}>How We Work</div>
              <h2
                style={{
                  fontSize: "clamp(26px, 3.5vw, 46px)",
                  fontWeight: 800, color: "#fff", lineHeight: 1.1, marginTop: 16,
                }}
              >
                Our <span className="gt">Delivery Process</span>
              </h2>
              <p style={{ color: muted, fontSize: 16, lineHeight: 1.8, maxWidth: 520, margin: "16px auto 0" }}>
                A transparent, repeatable process refined across 200+ projects. No surprises, just results.
              </p>
            </div>
          </Reveal>

          <div style={{ position: "relative" }}>
            {/* Vertical connector line on desktop */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 0, bottom: 0,
                width: 1,
                background: `linear-gradient(180deg, transparent, rgba(${s.rgb},.25) 20%, rgba(${s.rgb},.25) 80%, transparent)`,
                transform: "translateX(-50%)",
                pointerEvents: "none",
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {s.process.map((step, i) => {
                const isRight = i % 2 === 1;
                return (
                  <Reveal key={step.step} delay={i * 70}>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 60px 1fr",
                        alignItems: "center",
                        gap: 24,
                      }}
                    >
                      {/* Left slot */}
                      <div style={{ display: "flex", justifyContent: "flex-end" }}>
                        {!isRight && (
                          <div
                            className="card"
                            style={{
                              padding: "28px 32px",
                              maxWidth: 460,
                              position: "relative",
                              overflow: "hidden",
                            }}
                          >
                            <div style={{ position: "absolute", top: 12, right: 16, fontSize: 42, fontWeight: 900, color: `rgba(${s.rgb},.07)`, fontFamily: "monospace", userSelect: "none" }}>{step.step}</div>
                            <div style={{ width: 36, height: 36, borderRadius: 10, background: `rgba(${s.rgb},.12)`, border: `1px solid rgba(${s.rgb},.25)`, display: "flex", alignItems: "center", justifyContent: "center", color: s.color, fontSize: 12, fontWeight: 700, marginBottom: 14, fontFamily: "monospace" }}>
                              {step.step}
                            </div>
                            <h3 style={{ fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{step.title}</h3>
                            <p style={{ color: muted, fontSize: 14, lineHeight: 1.78, margin: 0 }}>{step.desc}</p>
                          </div>
                        )}
                      </div>

                      {/* Center dot */}
                      <div style={{ display: "flex", justifyContent: "center" }}>
                        <div
                          style={{
                            width: 14, height: 14, borderRadius: "50%",
                            background: s.color,
                            boxShadow: `0 0 20px rgba(${s.rgb},.6)`,
                            border: `2px solid rgba(${s.rgb},.3)`,
                            flexShrink: 0,
                          }}
                        />
                      </div>

                      {/* Right slot */}
                      <div style={{ display: "flex", justifyContent: "flex-start" }}>
                        {isRight && (
                          <div
                            className="card"
                            style={{
                              padding: "28px 32px",
                              maxWidth: 460,
                              position: "relative",
                              overflow: "hidden",
                            }}
                          >
                            <div style={{ position: "absolute", top: 12, right: 16, fontSize: 42, fontWeight: 900, color: `rgba(${s.rgb},.07)`, fontFamily: "monospace", userSelect: "none" }}>{step.step}</div>
                            <div style={{ width: 36, height: 36, borderRadius: 10, background: `rgba(${s.rgb},.12)`, border: `1px solid rgba(${s.rgb},.25)`, display: "flex", alignItems: "center", justifyContent: "center", color: s.color, fontSize: 12, fontWeight: 700, marginBottom: 14, fontFamily: "monospace" }}>
                              {step.step}
                            </div>
                            <h3 style={{ fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{step.title}</h3>
                            <p style={{ color: muted, fontSize: 14, lineHeight: 1.78, margin: 0 }}>{step.desc}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT MODELS ────────────────────────────────────── */}
      <section id="engagement" style={{ padding: "100px 24px", borderTop: `1px solid ${bdr}` }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <div className="chip" style={{ display: "inline-block" }}>Engagement</div>
              <h2
                style={{
                  fontSize: "clamp(26px, 3.5vw, 46px)",
                  fontWeight: 800, color: "#fff", lineHeight: 1.1, marginTop: 16,
                }}
              >
                Choose Your <span className="gt">Engagement Model</span>
              </h2>
              <p style={{ color: muted, fontSize: 16, lineHeight: 1.8, maxWidth: 520, margin: "16px auto 0" }}>
                We adapt to how you work — whether you need a fixed quote, a dedicated pod, or flexible time and materials.
              </p>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 22 }}>
            {ENGAGEMENT_MODELS.map((model, i) => (
              <Reveal key={model.title} delay={i * 80}>
                <div
                  className="card"
                  style={{
                    padding: "36px 32px",
                    height: "100%",
                    display: "flex", flexDirection: "column",
                    position: "relative", overflow: "hidden",
                    transition: "transform .25s, border-color .25s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.borderColor = `rgba(${model.rgb},.4)`;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "";
                  }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${model.color}00, ${model.color}, ${model.color}00)` }} />
                  <div style={{ position: "absolute", top: "-20%", right: "-5%", width: 160, height: 160, borderRadius: "50%", background: `radial-gradient(circle, rgba(${model.rgb},.09), transparent 70%)`, pointerEvents: "none" }} />

                  <div
                    style={{
                      width: 52, height: 52, borderRadius: 14, marginBottom: 20,
                      background: `rgba(${model.rgb},.1)`,
                      border: `1px solid rgba(${model.rgb},.22)`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 22, color: model.color,
                    }}
                  >
                    {model.icon}
                  </div>
                  <h3 style={{ fontSize: 19, fontWeight: 700, color: "#fff", marginBottom: 10 }}>{model.title}</h3>
                  <p style={{ color: muted, fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>{model.desc}</p>

                  <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: "auto" }}>
                    {model.points.map((pt, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                        <div style={{ width: 18, height: 18, borderRadius: "50%", background: `rgba(${model.rgb},.15)`, border: `1px solid rgba(${model.rgb},.35)`, display: "flex", alignItems: "center", justifyContent: "center", color: model.color, fontSize: 9, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>
                          ✓
                        </div>
                        <span style={{ color: "rgba(255,255,255,.72)", fontSize: 13, lineHeight: 1.6 }}>{pt}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className="btn-ghost"
                    style={{ marginTop: 28, width: "100%", borderColor: `rgba(${model.rgb},.3)`, color: model.color }}
                    onClick={() => navigate("/contact")}
                  >
                    Get Started →
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section id="faq" style={{ padding: "100px 24px", background: "#090912", borderTop: `1px solid ${bdr}` }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="chip" style={{ display: "inline-block" }}>FAQ</div>
              <h2
                style={{
                  fontSize: "clamp(26px, 3.5vw, 46px)",
                  fontWeight: 800, color: "#fff", lineHeight: 1.1, marginTop: 16,
                }}
              >
                Common <span className="gt">Questions</span>
              </h2>
              <p style={{ color: muted, fontSize: 16, lineHeight: 1.8, maxWidth: 480, margin: "16px auto 0" }}>
                Everything you need to know about working with us on {s.title.toLowerCase()}.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <FAQAccordion faqs={s.faqs} color={s.color} rgb={s.rgb} />
          </Reveal>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section
        style={{
          padding: "120px 24px",
          position: "relative",
          overflow: "hidden",
          borderTop: `1px solid ${bdr}`,
        }}
      >
        <GeoBg variant="c" />
        <div
          style={{
            position: "absolute", inset: 0,
            background: `radial-gradient(ellipse 60% 50% at 50% 50%, rgba(${s.rgb},.07), transparent)`,
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
          <Reveal>
            <div
              style={{
                width: 72, height: 72, borderRadius: 22, margin: "0 auto 28px",
                background: `rgba(${s.rgb},.12)`,
                border: `1px solid rgba(${s.rgb},.3)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 32, color: s.color,
                boxShadow: `0 0 60px rgba(${s.rgb},.2)`,
              }}
            >
              {s.icon}
            </div>

            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 52px)",
                fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: 18,
              }}
            >
              Ready to Build Your{" "}
              <span style={{ background: `linear-gradient(135deg, ${s.color}, rgba(${s.rgb},.6))`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {s.title}
              </span>{" "}
              Solution?
            </h2>

            <p style={{ color: muted, fontSize: 17, lineHeight: 1.82, marginBottom: 40 }}>
              Book a free 30-minute discovery call. We'll scope the work, give you an honest estimate, and tell you if we're the right fit.
            </p>

            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <button className="btn-primary" style={{ padding: "14px 36px", fontSize: 15 }} onClick={() => navigate("/contact")}>
                Book a Free Call →
              </button>
              <button className="btn-ghost" onClick={() => navigate("/services")}>
                Explore Other Services
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
