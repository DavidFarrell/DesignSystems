// A4 — Brutalist · Sports tabloid / racing stripes
// White paper, jet-black ink, single hot orange-red. Massive condensed type.
// Diagonal slash band that cuts across the page. Track-and-field energy.

function DirectionA4({ accent = '#ff3b1f', headline = 'AI that actually works.', motif = true }) {
  return (
    <div className="ab" style={{ width:'100%', minHeight:'100%', background:'#fafafa', color:'#0a0a0a', fontFamily:'Archivo, sans-serif' }}>
      <style>{`
        .a4 .display{font-family:'Archivo Black',sans-serif;letter-spacing:-0.05em;line-height:0.8;text-transform:uppercase}
        .a4 .mono{font-family:'Geist Mono',monospace}
      `}</style>
      <div className="a4">
        <div style={{ padding:'14px 32px', background:'#0a0a0a', color:'#fafafa', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div className="mono" style={{ fontSize:11, letterSpacing:'0.12em' }}>PAIDIA · APPLIED AI · LONDON</div>
          <div className="mono" style={{ fontSize:11, color:accent }}>● BOOKING Q3 2026</div>
        </div>
        <div style={{ padding:'18px 32px', display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'2px solid #0a0a0a' }}>
          <div className="display" style={{ fontSize:34 }}>PAIDIA<span style={{ color:accent }}>/</span></div>
          <nav className="mono" style={{ display:'flex', gap:28, fontSize:12, textTransform:'uppercase', letterSpacing:'0.1em' }}>
            {['Services','Impact','Clients','Writing'].map((x,i)=>(<a key={i} href="#" style={{ color:'#0a0a0a', textDecoration:'none' }}>{x}</a>))}
          </nav>
          <a href="#" style={{ background:accent, color:'#fafafa', padding:'10px 18px', textDecoration:'none', fontWeight:700, fontSize:13 }}>CONTACT →</a>
        </div>

        {/* Hero with diagonal slash */}
        <section style={{ padding:'48px 32px 0', position:'relative', overflow:'hidden' }}>
          {motif && (
            <div style={{ position:'absolute', top:'-10%', right:'-15%', width:'70%', height:'140%', background:accent, transform:'rotate(-14deg)', zIndex:0 }}/>
          )}
          <div style={{ position:'relative', zIndex:2 }}>
            <div className="mono" style={{ fontSize:11, color:accent, letterSpacing:'0.12em', marginBottom:24 }}>// LEAD STORY · ISSUE 026</div>
            <h1 className="display" style={{ fontSize:'clamp(96px,16vw,260px)', margin:0 }}>
              <span style={{ display:'block' }}>AI THAT</span>
              <span style={{ display:'block', WebkitTextStroke:'2px #0a0a0a', color:'transparent' }}>ACTUALLY</span>
              <span style={{ display:'block' }}>WORKS<span style={{ color: accent }}>.</span></span>
            </h1>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1.6fr 1fr', gap:48, marginTop:48, position:'relative', zIndex:2, paddingBottom:64 }}>
            <p style={{ fontSize:22, lineHeight:1.4, maxWidth:680, margin:0 }}>
              From boardroom to codebase to culture. Deep AI expertise, from architecture to deployment — we turn ambition into systems that ship and keep working.
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
              <a href="#" style={{ background:'#0a0a0a', color:'#fafafa', padding:'18px 24px', textDecoration:'none', fontWeight:700, fontSize:15 }}>START A CONVERSATION ↗</a>
              <a href="#" style={{ background:'#fafafa', color:'#0a0a0a', padding:'18px 24px', border:'2px solid #0a0a0a', textDecoration:'none', fontWeight:700, fontSize:15 }}>SEE OUR WORK →</a>
            </div>
          </div>
        </section>

        <section style={{ borderTop:'2px solid #0a0a0a', borderBottom:'2px solid #0a0a0a' }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)' }}>
            {[['70M+','USERS / YR'],['95%','ACCURACY'],['20+','YEARS SHIPPING']].map(([n,l],i)=>(
              <div key={i} style={{ padding:'48px 32px', borderLeft:i?'2px solid #0a0a0a':'none', position:'relative' }}>
                <div className="display" style={{ fontSize:'clamp(80px,10vw,160px)' }}>{n}</div>
                <div className="mono" style={{ fontSize:12, letterSpacing:'0.1em', marginTop:12 }}>▸ {l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services - track lanes */}
        <section style={{ padding:'80px 32px' }}>
          <div className="mono" style={{ fontSize:11, color:accent, letterSpacing:'0.12em', marginBottom:16 }}>// SERVICES — SIX DISCIPLINES</div>
          <h2 className="display" style={{ fontSize:'clamp(56px,9vw,160px)', margin:'0 0 48px' }}>FROM SLIDES<br/>TO PRODUCTION<span style={{ color:accent }}>.</span></h2>
          {[
            ['I','STRATEGY & ADVISORY','Board-level guidance on where AI creates real value. The 20% of use cases that drive 80% of impact.'],
            ['II','COACHING & MENTORING','Coaching that reshapes mental models. The jagged frontier.'],
            ['III','TRANSFORMATION & TRAINING','Sustainable AI capability. 70% workforce adoption in 12 weeks.'],
            ['IV','ARCHITECTURE & ENGINEERING','Production-grade systems. RAG, agents, hallucination-safe.'],
            ['V','RAPID PROTOTYPING','Working demos in days, not quarters.'],
            ['VI','AI GOVERNANCE','Frameworks that enable rather than block.'],
          ].map(([n,t,d],i)=>(
            <div key={i} style={{ display:'grid', gridTemplateColumns:'80px 80px 1fr 2fr 60px', gap:24, padding:'24px 0', borderTop:'2px solid #0a0a0a', alignItems:'center' }}>
              <div className="mono" style={{ fontSize:11, color:accent, letterSpacing:'0.1em' }}>LANE</div>
              <div className="display" style={{ fontSize:48 }}>{n}</div>
              <div className="display" style={{ fontSize:28 }}>{t}</div>
              <div style={{ fontSize:15, color:'rgba(10,10,10,0.7)', lineHeight:1.5 }}>{d}</div>
              <div style={{ textAlign:'right', fontSize:24 }}>↗</div>
            </div>
          ))}
        </section>

        {/* Cases — like league table */}
        <section style={{ padding:'80px 32px', background:'#0a0a0a', color:'#fafafa' }}>
          <div className="mono" style={{ fontSize:11, color:accent, letterSpacing:'0.12em', marginBottom:16 }}>// THE LEADERBOARD</div>
          <h2 className="display" style={{ fontSize:'clamp(56px,9vw,160px)', margin:'0 0 48px' }}>NUMBERS THAT<br/><span style={{ color:accent }}>MATTER.</span></h2>

          <div style={{ background:accent, color:'#0a0a0a', padding:48, marginBottom:24 }}>
            <div className="mono" style={{ fontSize:12, letterSpacing:'0.12em', marginBottom:16, fontWeight:700 }}>▸ FRONT PAGE · FCDO</div>
            <div style={{ display:'grid', gridTemplateColumns:'1.2fr 1fr', gap:48, alignItems:'end' }}>
              <h3 className="display" style={{ fontSize:'clamp(48px,7vw,128px)', margin:0 }}>UK GOV'S FIRST<br/>PUBLIC LLM.</h3>
              <div>
                <p style={{ fontSize:17, lineHeight:1.5, margin:0, fontWeight:500 }}>10-day email queues turned into 5-second responses. <strong>95% accuracy in production</strong> — exceeding the human agent baseline. £3.6M saved over 5 years.</p>
                <div className="mono" style={{ marginTop:20, padding:'12px 16px', background:'#0a0a0a', color:accent, fontSize:12, fontWeight:700, display:'inline-block', letterSpacing:'0.1em' }}>★ AI EXCELLENCE — WINNER 2025</div>
              </div>
            </div>
          </div>

          <div className="mono" style={{ fontSize:13 }}>
            <div style={{ display:'grid', gridTemplateColumns:'40px 1fr 200px 1fr', gap:16, padding:'14px 16px', background:'rgba(255,255,255,0.05)', textTransform:'uppercase', letterSpacing:'0.08em', color:'rgba(250,250,250,0.5)', fontSize:11 }}>
              <span>#</span><span>CLIENT</span><span>RESULT</span><span>NOTES</span>
            </div>
            {[
              ['02','GOSH CHARITY','70% / 12 WEEKS','Possibly the fastest charity AI transformation in the UK.'],
              ['03','NHS ENGLAND','+90,000 APPTS','Discovery across 11 ICBs. £500k secured. 6-week prototype.'],
              ['04','AWIN','10D → 2 HRS','Publisher matching for 1,500 vendors. RFP halved.'],
              ['05','PEARSON','4× GROWTH PLATFORM','FTSE 100 unified AI platform. MCP framework.'],
              ['06','RIMES','500h/MO SAVED','40+ devs upskilled mid-engagement.'],
            ].map(([n,c,r,d],i)=>(
              <div key={i} style={{ display:'grid', gridTemplateColumns:'40px 1fr 200px 1fr', gap:16, padding:'18px 16px', borderTop:'1px solid rgba(255,255,255,0.1)', alignItems:'center' }}>
                <span style={{ color:accent, fontWeight:700 }}>{n}</span>
                <span className="display" style={{ fontSize:18, color:'#fafafa' }}>{c}</span>
                <span style={{ color:accent, fontWeight:600 }}>{r}</span>
                <span style={{ color:'rgba(250,250,250,0.7)' }}>{d}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Clients marquee */}
        <section style={{ padding:'48px 0', borderTop:'2px solid #0a0a0a', borderBottom:'2px solid #0a0a0a', overflow:'hidden' }}>
          <div className="display" style={{ display:'flex', gap:48, whiteSpace:'nowrap', fontSize:64 }}>
            {[...Array(3)].flatMap(()=>['FCDO','/','NHS','/','GOSH','/','AWIN','/','RIMES','/','PEARSON','/','MERTON','/','KEELE']).map((c,i)=>(
              <span key={i} style={{ color: c==='/' ? accent : '#0a0a0a' }}>{c}</span>
            ))}
          </div>
        </section>

        <section style={{ padding:'140px 32px', textAlign:'center' }}>
          <h2 className="display" style={{ fontSize:'clamp(80px,13vw,240px)', margin:0, lineHeight:0.82 }}>
            LET'S BUILD<br/>SOMETHING<br/><span style={{ color: accent }}>THAT WORKS.</span>
          </h2>
          <a href="#" style={{ marginTop:40, display:'inline-block', background:'#0a0a0a', color:'#fafafa', padding:'20px 36px', fontWeight:700, textDecoration:'none', fontSize:16 }}>START A CONVERSATION ↗</a>
        </section>
        <footer className="mono" style={{ padding:'32px', background:'#0a0a0a', color:'rgba(250,250,250,0.6)', fontSize:12, display:'flex', justifyContent:'space-between', textTransform:'uppercase', letterSpacing:'0.08em' }}>
          <span>© 2026 PAIDIA</span><span style={{ color:accent }}>LDN · EST 2024</span><span>PRIVACY · EMAIL</span>
        </footer>
      </div>
    </div>
  );
}
window.DirectionA4 = DirectionA4;
