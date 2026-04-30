import { useState } from "react";
import GeoBg  from "../components/ui/GeoBg";
import Reveal  from "../components/ui/Reveal";
import { CONTACT_INFO } from "../data/siteData";

export default function Contact() {
  const [form, setForm] = useState({ name:"", email:"", message:"" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const muted = "rgba(255,255,255,.42)";
  const dim   = "rgba(255,255,255,.2)";
  const bdr   = "rgba(255,255,255,.07)";

  const handleSubmit = () => {
    if (form.name && form.email) setSubmitted(true);
  };

  return (
    <section style={{ position:"relative", padding:"140px 24px 100px", overflow:"hidden" }}>
      <GeoBg variant="a" />

      <div style={{ maxWidth:1100, margin:"0 auto", position:"relative", zIndex:2 }}>
        <div
          className="contact-grid"
          style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"start" }}
        >

          {/* ── Left: info ── */}
          <Reveal>
            <div className="chip">Get In Touch</div>
            <h1 style={{ fontSize:"clamp(32px,4.5vw,62px)", fontWeight:800, color:"#fff", lineHeight:1.07, marginBottom:24 }}>
              Let's Discuss<br /><span className="gt">Your Project.</span>
            </h1>
            <p style={{ color:muted, fontSize:16, lineHeight:1.88, marginBottom:52 }}>
              Whether you have a complete spec or just an idea on a napkin — we'd love to hear from you.
              Our engineers respond within 4 hours.
            </p>

            {CONTACT_INFO.map(({ icon, value, label }) => (
              <div key={label} style={{ display:"flex", gap:16, alignItems:"center", marginBottom:24 }}>
                <div style={{ width:48, height:48, background:"rgba(0,150,255,.1)", border:"1px solid rgba(0,150,255,.2)", borderRadius:14, display:"flex", alignItems:"center", justifyContent:"center", color:"#60CDFF", fontSize:20, flexShrink:0 }}>
                  {icon}
                </div>
                <div>
                  <div style={{ fontSize:11, color:dim, textTransform:"uppercase", letterSpacing:".1em", marginBottom:2 }}>{label}</div>
                  <div style={{ fontSize:15, fontWeight:500, color:"#e8e8f4" }}>{value}</div>
                </div>
              </div>
            ))}
          </Reveal>

          {/* ── Right: form ── */}
          <Reveal delay={150}>
            {submitted ? (
              <div style={{ background:"#0f0f1a", border:"1px solid rgba(0,150,255,.3)", borderRadius:24, padding:"56px 40px", textAlign:"center" }}>
                <div style={{ fontSize:64, marginBottom:20 }}>✅</div>
                <h2 style={{ fontSize:24, fontWeight:800, color:"#fff", marginBottom:12 }}>Message Sent!</h2>
                <p style={{ color:muted }}>We'll be in touch within 4 business hours.</p>
              </div>
            ) : (
              <div style={{ background:"#0f0f1a", border:`1px solid ${bdr}`, borderRadius:24, padding:"44px 40px" }}>
                <h3 style={{ fontSize:22, fontWeight:700, color:"#fff", marginBottom:30 }}>Send a Message</h3>

                <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
                  <input
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <input
                    type="email"
                    placeholder="Work Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                  <button
                    className="btn-primary"
                    style={{ width:"100%", padding:16 }}
                    onClick={handleSubmit}
                    disabled={sending}
                  >
                    {sending ? "Sending..." : "Send Message & Book a Call →"}
                  </button>
                  {error && (
                    <p style={{ fontSize:13, color:"#f87171", textAlign:"center", marginTop:6 }}>
                      {error}
                    </p>
                  )}
                  <p style={{ fontSize:12, color:dim, textAlign:"center" }}>
                    We respond within 4 hours · No spam · No commitment
                  </p>
                </div>
              </div>
            )}
          </Reveal>

        </div>
      </div>
    </section>
  );
}
