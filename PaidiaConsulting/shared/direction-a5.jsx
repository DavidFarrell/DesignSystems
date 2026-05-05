// A5 — Brutalist · Stamp / monolith
// Cobalt blue background, hot orange accent, ultra-condensed massive type filling the
// frame edge-to-edge like a passport stamp or warning poster. Heavy use of red rules,
// 'CLASSIFIED' bands, big numerals. Most graphic of the brutalist set.

function DirectionA5({ accent = '#ff6a00', headline = 'AI that actually works.', motif = true }) {
  const bg = '#0033cc';
  return (
    <div className="ab" style={{ width:'100%', minHeight:'100%', background:bg, color:'#fff', fontFamily:'Archivo, sans-serif' }}>
      <style>{`
        .a5 .display{font-family:'Archivo Black',sans-serif;letter-spacing:-0.05em;line-height:0.78;text-transform:uppercase}
        .a5 .mono{font-family:'Geist Mono',monospace}
        .a5 .stamp{border:3px solid ${accent};padding:6px 12px;display:inline-block;color:${accent};font-weight:800;letter-spacing:0.18em;transform:rotate(-3deg)}
      `}</style>
      <div className="a5">
        <div style={{ padding:'14px 32px', background:accent, color:bg, display:'flex', justifyContent:'space-between' }} className="mono">
          <span style={{ fontWeight:700, fontSize:11, letterSpacing:'0.14em' }}>▮ PAIDIA OFFICIAL · LDN ▮ APPLIED AI BUREAU ▮ ISSUE 026 ▮</span>
          <span style={{ fontSize:11, fontWeight:700 }}>● CLEARED FOR PUBLIC RELEASE</span>
        </div>
        <div style={{ padding:'18px 32px', display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:`3px solid ${accent}` }}>
          <div className="display" style={{ fontSize:30 }}>PAIDIA<span style={{ color:accent }}>★</span></div>
          <nav className="mono" style={{ display:'flex', gap:24, fontSize:12, textTransform:'uppercase', letterSpacing:'0.1em' }}>
            {['Services','Impact','Clients','Writing'].map((x,i)=>(<a key={i} href="#" style={{ color:'#fff', textDecoration:'none' }}>{x}</a>))}
          </nav>
          <a href="#" style={{ background:accent, color:bg, padding:'10px 18px', textDecoration:'none', fontWeight:800, fontSize:13 }}>CONTACT →</a>
        </div>

        <section style={{ padding:'40px 32px 64px', position:'relative' }}>
          <div className="mono" style={{ display:'flex', justifyContent:'space-between', fontSize:11, color:accent, marginBottom:32, letterSpacing:'0.12em', fontWeight:700 }}>
            <span>FILE №026 / RAG·AGENTS·MCP</span><span>CLASSIFICATION : APPLIED</span><span>DATE : 05·MAY·2026</span>
          </div>
          <h1 className="display" style={{ fontSize:'clamp(120px,18vw,300px)', margin:0 }}>
            <span style={{ display:'block' }}>AI THAT</span>
            <span style={{ display:'block', color:accent }}>ACTUALLY</span>
            <span style={{ display:'block' }}>WORKS.</span>
          </h1>
          {motif && <span className="stamp" style={{ position:'absolute', top:80, right:80, fontSize:14 }}>NO PILOT PURGATORY</span>}
        </section>

        <section style={{ padding:'40px 32px', background:accent, color:bg, borderTop:`3px solid #fff`, borderBottom:`3px solid #fff` }}>
          <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:48, alignItems:'center' }}>
            <p style={{ fontSize:24, lineHeight:1.4, fontWeight:600, margin:0 }}>From boardroom to codebase to culture. Deep AI expertise, from architecture to deployment — we turn ambition into systems that ship and keep working.</p>
            <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
              <a href="#" style={{ background:bg, color:'#fff', padding:'18px 22px', textDecoration:'none', fontWeight:800, fontSize:15 }}>START A CONVERSATION ↗</a>
              <a href="#" style={{ background:'transparent', color:bg, padding:'18px 22px', border:`3px solid ${bg}`, textDecoration:'none', fontWeight:800, fontSize:15 }}>SEE OUR WORK →</a>
            </div>
          </div>
        </section>

        <section style={{ padding:'80px 32px' }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:0 }}>
            {[['70M+','users / yr'],['95%','accuracy'],['20+','years shipping']].map(([n,l],i)=>(
              <div key={i} style={{ borderLeft: i? `2px solid ${accent}` : 'none', padding:'0 32px' }}>
                <div className="display" style={{ fontSize:'clamp(96px,12vw,200px)', color:accent }}>{n}</div>
                <div className="mono" style={{ fontSize:14, marginTop:12, fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase' }}>▸ {l}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding:'80px 32px', borderTop:`3px solid ${accent}` }}>
          <div className="mono" style={{ fontSize:11, color:accent, letterSpacing:'0.14em', marginBottom:16, fontWeight:700 }}>▮ FILE 02 / SERVICES</div>
          <h2 className="display" style={{ fontSize:'clamp(64px,9vw,160px)', margin:'0 0 48px' }}>FROM SLIDES<br/>TO <span style={{ color:accent }}>PRODUCTION.</span></h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:0, border:`2px solid ${accent}` }}>
            {[
              ['I','STRATEGY','Where AI creates real value. The 20% that drives 80%.'],
              ['II','COACHING','Reshape mental models. The jagged frontier.'],
              ['III','TRAINING','70% workforce adoption in 12 weeks.'],
              ['IV','ENGINEERING','Production-grade RAG, agents, hallucination-safe.'],
              ['V','PROTOTYPING','Working demos in days, not quarters.'],
              ['VI','GOVERNANCE','Enable rather than block. UK Gov-aligned.'],
            ].map(([n,t,d],i)=>(
              <div key={i} style={{ padding:28, borderRight: (i+1)%3 ? `2px solid ${accent}` : 'none', borderBottom: i<3 ? `2px solid ${accent}` : 'none', minHeight:240, display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
                <div className="display" style={{ fontSize:80, color:accent }}>{n}</div>
                <div>
                  <div className="display" style={{ fontSize:28, marginBottom:10 }}>{t}</div>
                  <p style={{ fontSize:14, lineHeight:1.5, color:'rgba(255,255,255,0.8)', margin:0 }}>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding:'80px 32px', borderTop:`3px solid ${accent}` }}>
          <div className="mono" style={{ fontSize:11, color:accent, letterSpacing:'0.14em', marginBottom:16, fontWeight:700 }}>▮ FILE 03 / IMPACT</div>
          <h2 className="display" style={{ fontSize:'clamp(64px,9vw,160px)', margin:'0 0 48px' }}>NUMBERS THAT<br/><span style={{ color:accent }}>MATTER.</span></h2>
          <div style={{ background:'#fff', color:bg, padding:48, marginBottom:24, position:'relative' }}>
            <span className="stamp" style={{ position:'absolute', top:20, right:20, fontSize:11, background:bg, color:accent, transform:'rotate(8deg)' }}>★ WINNER 2025</span>
            <div className="mono" style={{ fontSize:12, color:accent, fontWeight:700, marginBottom:16, letterSpacing:'0.12em' }}>▮ DOSSIER 01 · FCDO</div>
            <h3 className="display" style={{ fontSize:'clamp(56px,8vw,144px)', margin:'0 0 24px' }}>UK GOV'S FIRST<br/>PUBLIC LLM.</h3>
            <p style={{ fontSize:18, lineHeight:1.5, maxWidth:780, fontWeight:500, margin:0 }}>10-day email queues turned into 5-second responses. <strong>95% accuracy in production</strong>, exceeding the human agent baseline. £3.6M saved over 5 years; 500,000+ citizens served annually.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:16 }}>
            {[
              ['GOSH','70% / 12wk','Fastest charity AI transformation in the UK.'],
              ['NHS','+90,000','Pathway to 90,000 extra appointments. £500k secured.'],
              ['AWIN','10D → 2H','Publisher matching: 1,500 vendors. RFP halved.'],
              ['PEARSON','4× growth','FTSE 100 unified AI platform. MCP framework.'],
              ['RIMES','500h/mo','40+ developers upskilled mid-engagement.'],
              ['MERTON','Open-source','Council AI playbook for local government.'],
            ].map(([c,m,d],i)=>(
              <div key={i} style={{ border:`2px solid ${accent}`, padding:24 }}>
                <div className="mono" style={{ fontSize:11, color:accent, fontWeight:700, marginBottom:12, letterSpacing:'0.1em' }}>▮ DOSSIER 0{i+2} · {c}</div>
                <div className="display" style={{ fontSize:36, marginBottom:14, color:accent }}>{m}</div>
                <p style={{ fontSize:13, color:'rgba(255,255,255,0.75)', lineHeight:1.55, margin:0 }}>{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding:'140px 32px', background:accent, color:bg, textAlign:'center' }}>
          <h2 className="display" style={{ fontSize:'clamp(96px,15vw,260px)', margin:0, lineHeight:0.82 }}>
            LET'S BUILD<br/>SOMETHING<br/>THAT WORKS.
          </h2>
          <a href="#" style={{ marginTop:40, display:'inline-block', background:bg, color:accent, padding:'20px 40px', fontWeight:800, textDecoration:'none', fontSize:16 }}>START A CONVERSATION ↗</a>
        </section>
        <footer className="mono" style={{ padding:'32px', borderTop:`3px solid ${accent}`, fontSize:12, display:'flex', justifyContent:'space-between', textTransform:'uppercase', letterSpacing:'0.1em', fontWeight:700 }}>
          <span>© 2026 PAIDIA · OFFICIAL</span><span style={{ color:accent }}>▮ LDN · EST 2024 ▮</span><span>PRIVACY · EMAIL</span>
        </footer>
      </div>
    </div>
  );
}
window.DirectionA5 = DirectionA5;
