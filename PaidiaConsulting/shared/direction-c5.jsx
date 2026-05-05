// C5 — Manifesto · Editorial spread (left-aligned, asymmetric)
// Drops the centered/poster idea entirely. Reads like a magazine feature spread.
// Two-column with a hot teal + warm coral palette on bone. Big italic Fraunces drop-cap.

function DirectionC5({ accent = '#0d8478', headline = 'AI that actually works.', motif = true }) {
  const bone = '#f5f0e6', ink = '#171210', teal = '#0d8478', coral = '#ee5d3f';
  return (
    <div className="ab" style={{ width:'100%', minHeight:'100%', background:bone, color:ink, fontFamily:'Fraunces, serif' }}>
      <style>{`
        .c5 .display{font-family:'Fraunces',serif;font-style:italic;font-weight:400;letter-spacing:-0.025em;line-height:0.95}
        .c5 .sans{font-family:'Geist',sans-serif}
        .c5 .mono{font-family:'JetBrains Mono',monospace}
        .c5 .dropcap::first-letter{font-family:'Fraunces',serif;font-style:italic;font-size:7em;float:left;line-height:0.85;padding:8px 14px 0 0;color:${coral}}
      `}</style>
      <div className="c5">
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'24px 48px', borderBottom:`1px solid ${ink}` }}>
          <div className="display" style={{ fontSize:28 }}>Paidia<span style={{ color:teal }}>·</span></div>
          <span className="mono" style={{ fontSize:11, textTransform:'uppercase', letterSpacing:'0.12em' }}>The Spread · Vol. IV · 2026</span>
          <nav className="sans" style={{ display:'flex', gap:24, fontSize:14 }}>
            {['Services','Impact','Clients','Contact'].map((x,i)=>(<a key={i} href="#" style={{ color:ink, textDecoration:'none' }}>{x}</a>))}
          </nav>
        </div>

        {/* HERO — left-aligned editorial spread */}
        <section style={{ padding:'64px 48px 64px' }}>
          <div className="mono" style={{ fontSize:11, color:coral, textTransform:'uppercase', letterSpacing:'0.16em', marginBottom:24 }}>FEATURE — APPLIED AI · MAY 2026</div>
          <div style={{ display:'grid', gridTemplateColumns:'1.5fr 1fr', gap:64, alignItems:'start' }}>
            <div>
              <h1 className="display" style={{ fontSize:'clamp(80px,12vw,200px)', margin:0 }}>
                AI that<br/>
                <span style={{ color:teal }}>actually</span><br/>
                works<span style={{ color:coral }}>.</span>
              </h1>
              <div style={{ marginTop:32, display:'flex', gap:12 }}>
                <a href="#" className="sans" style={{ background:ink, color:bone, padding:'16px 28px', borderRadius:999, textDecoration:'none', fontWeight:500, fontSize:15 }}>Start a conversation ↗</a>
                <a href="#" className="sans" style={{ background:'transparent', color:ink, padding:'16px 28px', borderRadius:999, textDecoration:'none', fontWeight:500, fontSize:15, border:`1px solid ${ink}` }}>See our work →</a>
              </div>
            </div>
            <div>
              <p className="sans dropcap" style={{ fontSize:18, lineHeight:1.6, margin:0, color:'rgba(23,18,16,0.85)' }}>
                From boardroom to codebase to culture. Deep AI expertise, from architecture to deployment — we turn ambition into systems that ship and keep working. Twenty years of shipping software, the last few of shipping AI for governments, charities, and the FTSE 100.
              </p>
              <div className="mono" style={{ marginTop:24, fontSize:11, color:teal, textTransform:'uppercase', letterSpacing:'0.1em' }}>— By Paidia Consulting</div>
            </div>
          </div>

          {/* big stats strip */}
          <div style={{ marginTop:80, display:'grid', gridTemplateColumns:'repeat(3,1fr)', borderTop:`1px solid ${ink}`, borderBottom:`1px solid ${ink}` }}>
            {[['70M+','users served / year', teal],['95%','accuracy in production', coral],['20+','years shipping', ink]].map(([n,l,c],i)=>(
              <div key={i} style={{ borderLeft: i?`1px solid ${ink}`:'none', padding:'40px 32px' }}>
                <div className="display" style={{ fontSize:'clamp(56px,7vw,112px)', color:c, margin:0 }}>{n}</div>
                <div className="sans" style={{ fontSize:14, color:'rgba(23,18,16,0.7)', marginTop:8 }}>{l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PULL QUOTE */}
        <section style={{ padding:'80px 48px', background:teal, color:bone }}>
          <div className="mono" style={{ fontSize:11, color:coral, textTransform:'uppercase', letterSpacing:'0.16em', marginBottom:24 }}>§ The thesis</div>
          <p className="display" style={{ fontSize:'clamp(36px,4.5vw,72px)', margin:0, maxWidth:1300, lineHeight:1.1 }}>
            "Most AI projects stall in <span style={{ color:coral }}>pilot purgatory</span>. We build systems that <span style={{ background:coral, color:ink, padding:'0 14px', borderRadius:6 }}>ship</span> — and keep working when the demo is over."
          </p>
        </section>

        {/* SERVICES — magazine list, two-column */}
        <section style={{ padding:'120px 48px' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 2fr', gap:64, marginBottom:48, alignItems:'end' }}>
            <h2 className="display" style={{ fontSize:'clamp(48px,6vw,96px)', margin:0 }}>What we<br/>actually do<span style={{ color:coral }}>.</span></h2>
            <p className="sans" style={{ fontSize:18, lineHeight:1.55, color:'rgba(23,18,16,0.7)', margin:0, maxWidth:520 }}>Six disciplines. Used in any combination. From "we don't know where to start" to "this thing serves half a million people."</p>
          </div>
          <div style={{ columnCount:2, columnGap:64 }}>
            {[
              ['I','Strategy & Advisory','Board-level guidance on where AI creates real value. The 20% of use cases that drive 80% of impact — and the noise to ignore.'],
              ['II','Coaching & Mentoring','Coaching that reshapes mental models. Where AI excels, where it fails — the jagged frontier.'],
              ['III','Transformation & Training','Sustainable AI capability from boardroom to frontline. 70% adoption in 12 weeks.'],
              ['IV','Architecture & Engineering','Production-grade AI systems built for accuracy, security, and scale. RAG, agents, hallucination-safe.'],
              ['V','Rapid Prototyping','Working demos in days, not quarters. Build fast to prove value, hand off cleanly.'],
              ['VI','AI Governance','Frameworks that enable rather than block. Risk tiers, approval, transparency.'],
            ].map(([n,t,d],i)=>(
              <div key={i} style={{ breakInside:'avoid', paddingBottom:32, marginBottom:32, borderBottom:`1px solid rgba(23,18,16,0.18)` }}>
                <div style={{ display:'flex', alignItems:'baseline', gap:14, marginBottom:10 }}>
                  <span className="display" style={{ color:coral, fontSize:30 }}>{n}.</span>
                  <h3 className="display" style={{ fontSize:30, margin:0 }}>{t}</h3>
                </div>
                <p className="sans" style={{ fontSize:15, lineHeight:1.6, color:'rgba(23,18,16,0.78)', margin:0 }}>{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* IMPACT — magazine spread of feature cases */}
        <section style={{ padding:'80px 48px' }}>
          <div className="mono" style={{ fontSize:11, color:coral, textTransform:'uppercase', letterSpacing:'0.16em', marginBottom:16 }}>§ Selected work</div>
          <h2 className="display" style={{ fontSize:'clamp(48px,6vw,96px)', margin:'0 0 48px' }}>Numbers that <span style={{ color:teal }}>matter</span>.</h2>

          {/* Hero spread */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', borderTop:`1px solid ${ink}`, borderBottom:`1px solid ${ink}` }}>
            <div style={{ padding:48, background:coral, color:ink }}>
              <div className="mono" style={{ fontSize:11, marginBottom:18, fontWeight:600, letterSpacing:'0.1em' }}>FEATURE · 01 / FCDO</div>
              <h3 className="display" style={{ fontSize:'clamp(40px,5vw,84px)', margin:0, lineHeight:0.95 }}>The UK's first<br/>public LLM.</h3>
              <div className="sans" style={{ marginTop:24, padding:'12px 16px', background:ink, color:coral, borderRadius:8, fontWeight:600, fontSize:13, display:'inline-block' }}>★ Digital Leaders AI Excellence — Winner 2025</div>
            </div>
            <div style={{ padding:48, borderLeft:`1px solid ${ink}` }}>
              <p className="sans dropcap" style={{ fontSize:17, lineHeight:1.65, margin:0 }}>
                Live on every British Embassy website. 10-day email queues turned into 5-second responses. <strong>95% accuracy in production</strong> — exceeding the human agent baseline. Saving £3.6M over 5 years while serving 500,000+ citizens annually.
              </p>
            </div>
          </div>

          {/* List of cases — feature spread style */}
          <div style={{ marginTop:0 }}>
            {[
              { c:'GOSH Charity', m:'70% adoption · 12 weeks', body:'Possibly the fastest charity AI transformation in the UK. Strategy → coaching → sustainable capability.', dot:teal },
              { c:'NHS England', m:'+90,000 appointments', body:'Discovery across 11 ICBs. £500k secured. First prototype live-testing in 6 weeks.', dot:coral },
              { c:'Awin', m:'10 days → 2 hours', body:'Publisher matching: 1,500 vendors in 2 hours. RFP halved.', dot:teal },
              { c:'Pearson', m:'4× growth platform', body:'FTSE 100 unified AI platform connecting all legacy systems.', dot:coral },
              { c:'Rimes', m:'500+ hours/month saved', body:'40+ developers upskilled who shipped AI features during the engagement.', dot:teal },
            ].map((c,i)=>(
              <div key={i} style={{ display:'grid', gridTemplateColumns:'30px 1fr 2fr', gap:32, padding:'36px 0', borderBottom:`1px solid rgba(23,18,16,0.18)`, alignItems:'baseline' }}>
                <span style={{ width:14, height:14, background:c.dot, borderRadius:'50%' }}/>
                <div>
                  <div className="mono" style={{ fontSize:11, marginBottom:8, color:'rgba(23,18,16,0.6)', textTransform:'uppercase', letterSpacing:'0.08em' }}>No. 0{i+2} — {c.c}</div>
                  <div className="display" style={{ fontSize:44, lineHeight:0.95 }}>{c.m}</div>
                </div>
                <p className="sans" style={{ fontSize:16, lineHeight:1.6, color:'rgba(23,18,16,0.78)', margin:0 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding:'120px 48px', background:ink, color:bone }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 2fr', gap:64 }}>
            <div>
              <div className="mono" style={{ fontSize:11, color:coral, textTransform:'uppercase', letterSpacing:'0.12em', marginBottom:16 }}>§ Recognition</div>
              <h2 className="display" style={{ fontSize:'clamp(40px,5vw,72px)', margin:0 }}>Work that won't<br/>sit on a shelf<span style={{ color:coral }}>.</span></h2>
            </div>
            <div>
              {[
                ['Digital Leaders AI Excellence','Winner 2025 — Privacy & Security'],
                ['Computing Digital Tech Leaders','Nominated 2025 — Best AI Project'],
                ['Government Innovator Award','Nominated 2025 — Civil Service Awards'],
                ['"AI Demystified"','Pearson FT — Amazon bestseller'],
                ['AI.gov.uk','Featured case study'],
              ].map(([t,s],i)=>(
                <div key={i} style={{ display:'grid', gridTemplateColumns:'40px 1fr 1fr', gap:24, padding:'20px 0', borderTop:`1px solid rgba(245,240,230,0.18)`, alignItems:'baseline' }}>
                  <span className="display" style={{ color:coral, fontSize:22 }}>{String(i+1).padStart(2,'0')}</span>
                  <div className="display" style={{ fontSize:24 }}>{t}</div>
                  <div className="sans" style={{ fontSize:14, color:'rgba(245,240,230,0.7)' }}>{s}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding:'140px 48px', background:coral, textAlign:'left' }}>
          <h2 className="display" style={{ fontSize:'clamp(64px,11vw,200px)', margin:0, lineHeight:0.9 }}>
            Let's build<br/>something<br/>that <em style={{ background:ink, color:coral, padding:'0 24px', borderRadius:8 }}>works</em>.
          </h2>
          <div style={{ marginTop:48, display:'flex', gap:16, alignItems:'center', flexWrap:'wrap' }}>
            <a href="#" className="mono" style={{ fontSize:16, color:ink, textDecoration:'none', borderBottom:`1px solid ${ink}` }}>info@paidiaconsulting.com</a>
            <a href="#" className="sans" style={{ background:ink, color:coral, padding:'18px 32px', borderRadius:999, fontWeight:500, textDecoration:'none', fontSize:16 }}>Start a conversation ↗</a>
          </div>
        </section>
        <footer className="sans" style={{ padding:48, display:'flex', justifyContent:'space-between', fontSize:13, color:'rgba(23,18,16,0.6)', borderTop:`1px solid ${ink}` }}>
          <span>© 2026 Paidia Consulting · London, UK</span>
          <span style={{ fontFamily:'Fraunces', fontStyle:'italic' }}>set in Fraunces & Geist</span>
          <span>Privacy · Email</span>
        </footer>
      </div>
    </div>
  );
}
window.DirectionC5 = DirectionC5;
