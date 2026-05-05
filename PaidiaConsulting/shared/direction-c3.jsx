// C3 — Manifesto · Saturated colour blocks
// Same colour-block layout as C1 but with PUNCHIER colours: hot magenta + cobalt
// + acid lime + ink black on warm cream. Big italic Fraunces. Maximum flair.

function DirectionC3({ accent = '#e30b5c', headline = 'AI that actually works.', motif = true }) {
  const ink = '#1a1814', cream = '#f4efe6', cobalt = '#1a4ed8', lime = '#c5ff3d', magenta = '#e30b5c';
  return (
    <div className="ab" style={{ width:'100%', minHeight:'100%', background:cream, color:ink, fontFamily:'Fraunces, serif' }}>
      <style>{`
        .c3 .display{font-family:'Fraunces',serif;font-style:italic;font-weight:500;letter-spacing:-0.02em;line-height:0.92}
        .c3 .sans{font-family:'Geist',sans-serif}
        .c3 .mono{font-family:'JetBrains Mono',monospace}
      `}</style>
      <div className="c3">
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'24px 40px', borderBottom:`2px solid ${ink}` }}>
          <div className="sans" style={{ display:'flex', alignItems:'center', gap:14 }}>
            <div style={{ width:32, height:32, background:magenta, borderRadius:'50%' }}/>
            <span style={{ fontWeight:600, fontSize:18 }}>Paidia<em style={{ fontFamily:'Fraunces', fontStyle:'italic', color:magenta }}>·</em>Consulting</span>
          </div>
          <nav className="sans" style={{ display:'flex', gap:28, fontSize:14 }}>
            {['Services','Impact','Clients','Get in touch'].map((x,i)=>(<a key={i} href="#" style={{ color:ink, textDecoration:'none' }}>{x}</a>))}
          </nav>
        </div>

        <section style={{ padding:'48px 40px 80px' }}>
          <div className="mono" style={{ display:'flex', justifyContent:'space-between', fontSize:11, marginBottom:32, color:'rgba(26,24,20,0.6)' }}>
            <span>VOL. 04 · 2026</span><span>A FIELD GUIDE TO APPLIED AI</span><span>LONDON</span>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'auto 360px', gap:32, alignItems:'end' }}>
            <h1 className="display" style={{ fontSize:'clamp(72px,12vw,200px)', margin:0 }}>
              AI that<br/>
              <span style={{ background:ink, color:cream, padding:'0 24px', borderRadius:8, display:'inline-block' }}>actually</span><br/>
              works<span style={{ color:magenta }}>.</span>
            </h1>
            {motif && (
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8 }}>
                <div style={{ background:magenta, color:cream, padding:14, borderRadius:10, aspectRatio:'1', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
                  <span className="mono" style={{ fontSize:10 }}>FCDO</span>
                  <span className="display" style={{ fontSize:36, lineHeight:0.9 }}>500K<br/><span style={{ fontFamily:'Geist', fontStyle:'normal', fontSize:11 }}>citizens / yr</span></span>
                </div>
                <div style={{ background:cobalt, color:cream, padding:14, borderRadius:10, aspectRatio:'1', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
                  <span className="mono" style={{ fontSize:10 }}>GOSH</span>
                  <span className="display" style={{ fontSize:36, lineHeight:0.9 }}>70%<br/><span style={{ fontFamily:'Geist', fontStyle:'normal', fontSize:11 }}>adoption / 12wk</span></span>
                </div>
                <div style={{ background:lime, color:ink, padding:14, borderRadius:10, aspectRatio:'1', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
                  <span className="mono" style={{ fontSize:10 }}>AWIN</span>
                  <span className="display" style={{ fontSize:36, lineHeight:0.9 }}>10d<br/><span style={{ fontFamily:'Geist', fontStyle:'normal', fontSize:11 }}>→ 2 hrs</span></span>
                </div>
                <div style={{ background:ink, color:cream, padding:14, borderRadius:10, aspectRatio:'1', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
                  <span className="mono" style={{ fontSize:10, color:lime }}>NHS</span>
                  <span className="display" style={{ fontSize:36, lineHeight:0.9 }}>+90k<br/><span style={{ fontFamily:'Geist', fontStyle:'normal', fontSize:11 }}>appointments</span></span>
                </div>
              </div>
            )}
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:48, marginTop:80 }}>
            <p className="sans" style={{ fontSize:20, lineHeight:1.4, gridColumn:'1 / span 2', margin:0, maxWidth:720 }}>
              From <em style={{ fontFamily:'Fraunces', fontWeight:500 }}>boardroom</em> to <em style={{ fontFamily:'Fraunces', fontWeight:500 }}>codebase</em> to <em style={{ fontFamily:'Fraunces', fontWeight:500 }}>culture</em>. Deep AI expertise, from architecture to deployment — we turn ambition into systems that ship and keep working.
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:10, justifyContent:'end' }}>
              <a href="#" className="sans" style={{ background:magenta, color:cream, padding:'18px 24px', borderRadius:999, textDecoration:'none', fontWeight:500, display:'flex', justifyContent:'space-between' }}>Start a conversation <span>↗</span></a>
              <a href="#" className="sans" style={{ background:'transparent', color:ink, padding:'18px 24px', borderRadius:999, textDecoration:'none', fontWeight:500, border:`1px solid ${ink}`, display:'flex', justifyContent:'space-between' }}>See our work <span>→</span></a>
            </div>
          </div>
        </section>

        <section style={{ background:ink, color:cream, padding:'120px 40px' }}>
          <div className="mono" style={{ fontSize:11, color:lime, marginBottom:24, textTransform:'uppercase', letterSpacing:'0.08em' }}>§ A short manifesto</div>
          <p className="display" style={{ fontSize:'clamp(36px,4.5vw,72px)', margin:0, maxWidth:1100, lineHeight:1.05 }}>
            Most AI projects stall in <span style={{ color:magenta }}>pilot purgatory</span>. We've spent twenty years shipping software, and the last few shipping AI for governments, charities, and the FTSE 100. We build systems that <span style={{ background:lime, color:ink, padding:'0 16px', borderRadius:6 }}>ship</span> — and keep working when the demo is over.
          </p>
          <div className="sans" style={{ marginTop:48, display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:32, maxWidth:1100 }}>
            {[['70M+','users / yr', magenta],['95%','accuracy', lime],['20+','years', cobalt]].map(([n,l,c],i)=>(
              <div key={i}><div className="display" style={{ fontSize:80, color:c, lineHeight:1 }}>{n}</div><div style={{ fontSize:14, color:'rgba(244,239,230,0.7)', marginTop:8 }}>{l}</div></div>
            ))}
          </div>
        </section>

        <section style={{ padding:'120px 40px' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:32, alignItems:'end', marginBottom:64 }}>
            <h2 className="display" style={{ fontSize:'clamp(48px,6vw,96px)', margin:0 }}>What we<br/>actually do<span style={{ color:magenta }}>.</span></h2>
            <p className="sans" style={{ fontSize:18, lineHeight:1.5, color:'rgba(26,24,20,0.7)', margin:0, maxWidth:480 }}>Six disciplines. Used in any combination. From "we don't know where to start" to "this thing serves half a million people."</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:16 }}>
            {[
              {n:'I',t:'Strategy & Advisory',d:'Board-level guidance. The 20% of use cases that drive 80% of impact.', bg:magenta, fg:cream},
              {n:'II',t:'Coaching & Mentoring',d:'Reshape mental models. The jagged frontier.', bg:lime, fg:ink},
              {n:'III',t:'Transformation & Training',d:'70% adoption in 12 weeks.', bg:cobalt, fg:cream},
              {n:'IV',t:'Architecture & Engineering',d:'Production-grade systems. RAG, agents, hallucination-safe.', bg:ink, fg:cream},
              {n:'V',t:'Rapid Prototyping',d:'Working demos in days, not quarters.', bg:cream, fg:ink, border:true},
              {n:'VI',t:'AI Governance',d:'Frameworks that enable rather than block.', bg:lime, fg:ink},
            ].map((s,i)=>(
              <div key={i} style={{ background:s.bg, color:s.fg, border: s.border?`2px solid ${ink}`:'none', borderRadius:18, padding:32, minHeight:320, display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
                <div className="display" style={{ fontSize:64, lineHeight:1 }}>{s.n}.</div>
                <div>
                  <div className="display" style={{ fontSize:28, marginBottom:14, lineHeight:1.05 }}>{s.t}</div>
                  <p className="sans" style={{ fontSize:14, lineHeight:1.55, margin:0, opacity:0.85 }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding:'40px 40px 120px' }}>
          <div className="mono" style={{ fontSize:11, color:'rgba(26,24,20,0.6)', marginBottom:16, textTransform:'uppercase', letterSpacing:'0.08em' }}>§ Field Notes — selected work</div>
          <h2 className="display" style={{ fontSize:'clamp(48px,6vw,96px)', margin:'0 0 48px', maxWidth:1000 }}>
            Numbers that <span style={{ color:magenta }}>matter</span>.
          </h2>
          <div style={{ background:ink, color:cream, borderRadius:24, padding:48, marginBottom:24 }}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, alignItems:'end' }}>
              <div>
                <div className="mono" style={{ fontSize:11, color:lime, marginBottom:24 }}>FEATURE · 01 / FCDO</div>
                <h3 className="display" style={{ fontSize:'clamp(40px,5vw,84px)', margin:0, lineHeight:0.95 }}>The UK's first<br/>public LLM.</h3>
              </div>
              <div>
                <p className="sans" style={{ fontSize:18, lineHeight:1.55, color:'rgba(244,239,230,0.85)', margin:0 }}>
                  Live on every British Embassy website. <strong style={{ color:cream }}>95% accuracy in production</strong>, exceeding the human agent baseline. £3.6M saved over 5 years; 500,000+ citizens served.
                </p>
                <div className="sans" style={{ marginTop:24, padding:'14px 18px', background:lime, color:ink, borderRadius:8, fontWeight:600, fontSize:14, display:'inline-block' }}>★ Digital Leaders AI Excellence — Winner 2025</div>
              </div>
            </div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 }}>
            {[
              { c:'GOSH Charity', m:'70% adoption · 12 weeks', body:'Possibly the fastest charity AI transformation in the UK.', bg:cobalt, fg:cream },
              { c:'NHS England', m:'+90,000 appointments', body:'11 ICBs. £500k secured. 6-week prototype.', bg:lime, fg:ink },
              { c:'Awin', m:'10 days → 2 hours', body:'Publisher matching: 1,500 vendors in 2 hours.', bg:magenta, fg:cream },
              { c:'Pearson', m:'4× growth platform', body:'FTSE 100 unified AI platform.', bg:cream, fg:ink, border:true },
              { c:'Rimes', m:'500+ hours/month', body:'40+ developers upskilled who shipped during the engagement.', bg:cream, fg:ink, border:true },
            ].map((c,i)=>(
              <div key={i} style={{ background:c.bg, color:c.fg, border:c.border?`1px solid ${ink}`:'none', borderRadius:18, padding:32 }}>
                <div className="mono" style={{ fontSize:11, marginBottom:24, opacity:0.7, textTransform:'uppercase', letterSpacing:'0.08em' }}>{c.c}</div>
                <div className="display" style={{ fontSize:42, marginBottom:14, lineHeight:1 }}>{c.m}</div>
                <p className="sans" style={{ fontSize:15, lineHeight:1.55, margin:0, opacity:0.85 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding:'120px 40px', background:lime, textAlign:'center' }}>
          <h2 className="display" style={{ fontSize:'clamp(64px,11vw,200px)', margin:0, lineHeight:0.9 }}>
            Let's build<br/>something<br/>that <em style={{ background:ink, color:lime, padding:'0 24px', borderRadius:8 }}>works</em>.
          </h2>
          <div style={{ marginTop:48, display:'flex', gap:16, justifyContent:'center', alignItems:'center', flexWrap:'wrap' }}>
            <a href="#" className="mono" style={{ fontSize:16, color:ink, textDecoration:'none', borderBottom:`1px solid ${ink}` }}>info@paidiaconsulting.com</a>
            <a href="#" className="sans" style={{ background:ink, color:lime, padding:'18px 32px', borderRadius:999, fontWeight:500, textDecoration:'none', fontSize:16 }}>Start a conversation ↗</a>
          </div>
        </section>
        <footer className="sans" style={{ padding:40, display:'flex', justifyContent:'space-between', fontSize:13, color:'rgba(26,24,20,0.6)', borderTop:`1px solid ${ink}` }}>
          <span>© 2026 Paidia Consulting Ltd · London, UK</span>
          <span style={{ fontFamily:'Fraunces', fontStyle:'italic' }}>made with care, in public.</span>
          <span>Privacy · Email</span>
        </footer>
      </div>
    </div>
  );
}
window.DirectionC3 = DirectionC3;
