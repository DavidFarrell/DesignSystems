// Direction C2 — Manifesto Poster · Alternate
// Same editorial-italic DNA as C, but a different palette (deep oxblood + ochre + sage
// on warm bone) and a different layout: vertical "broadsheet" poster — single
// massive serif column down the page, sidebar marginalia, no colour-block grid.

function DirectionC2({ accent = '#7a1f2b', headline = 'AI that actually works.', motif = true }) {
  return (
    <div className="ab c2-root" style={{ width:'100%', minHeight:'100%', '--accent': accent,
      background:'#efe7d8', color:'#1a1814', fontFamily:'Fraunces, serif' }}>
      <style>{`
        .c2-root .display{font-family:'Fraunces',serif;font-weight:400;font-style:italic;letter-spacing:-0.02em;line-height:0.92}
        .c2-root .sans{font-family:'Geist',sans-serif}
        .c2-root .mono{font-family:'JetBrains Mono',monospace}
        .c2-root .marg{font-family:'Fraunces',serif;font-style:italic;color:rgba(26,24,20,0.55);font-size:13px;line-height:1.4}
      `}</style>

      <C2Nav accent={accent}/>
      <C2Hero accent={accent} headline={headline} motif={motif}/>
      <C2Manifesto accent={accent}/>
      <C2Services accent={accent}/>
      <C2Impact accent={accent}/>
      <C2Clients accent={accent}/>
      <C2Awards accent={accent}/>
      <C2Contact accent={accent}/>
      <C2Footer/>
    </div>
  );
}

function C2Nav({ accent }) {
  return (
    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'24px 48px', borderBottom:`1px solid ${accent}` }}>
      <div className="display" style={{ fontSize:28 }}>Paidia<span style={{ color:accent }}>·</span></div>
      <div className="mono" style={{ fontSize:11, color:'rgba(26,24,20,0.6)', textTransform:'uppercase', letterSpacing:'0.1em' }}>A Broadsheet · Vol. IV · MMXXVI</div>
      <nav className="sans" style={{ display:'flex', gap:24, fontSize:14 }}>
        {['Services','Impact','Clients','Contact'].map((x,i)=>(
          <a key={i} href="#" style={{ color:'#1a1814', textDecoration:'none' }}>{x}</a>
        ))}
      </nav>
    </div>
  );
}

function C2Hero({ accent, headline, motif }) {
  return (
    <section style={{ padding:'64px 48px 48px', position:'relative' }}>
      <div style={{ display:'grid', gridTemplateColumns:'200px 1fr 200px', gap:48 }}>
        {/* Left margin notes */}
        {motif ? (
          <div style={{ paddingTop:120 }}>
            <div className="marg">No. 01 — On shipping.</div>
            <div className="marg" style={{ marginTop:14 }}>Most "AI projects" never see a real user. Ours do.</div>
            <div style={{ width:40, height:1, background:accent, margin:'24px 0' }}/>
            <div className="marg">No. 02 — On honesty.</div>
            <div className="marg" style={{ marginTop:14 }}>The jagged frontier. Where AI excels, where it fails. We name both.</div>
          </div>
        ) : <div/>}

        {/* Center column — one giant serif poem */}
        <div style={{ textAlign:'center' }}>
          <div className="mono" style={{ fontSize:11, color:accent, textTransform:'uppercase', letterSpacing:'0.2em', marginBottom:24 }}>— A field guide to applied AI —</div>
          <h1 className="display" style={{ fontSize:'clamp(72px, 13vw, 220px)', margin:0 }}>
            AI<br/>
            <span style={{ color:accent }}>that</span><br/>
            actually<br/>
            <span style={{ borderBottom:`6px solid ${accent}`, paddingBottom:8 }}>works.</span>
          </h1>
          <p className="sans" style={{ fontSize:19, lineHeight:1.5, maxWidth:560, margin:'40px auto 0', color:'rgba(26,24,20,0.78)' }}>
            From boardroom to codebase to culture. Deep AI expertise, from architecture to deployment — we turn ambition into systems that ship and keep working.
          </p>
          <div style={{ marginTop:32, display:'flex', gap:12, justifyContent:'center' }}>
            <a href="#" className="sans" style={{ background:accent, color:'#efe7d8', padding:'16px 28px', borderRadius:999, textDecoration:'none', fontWeight:500, fontSize:15 }}>Start a conversation ↗</a>
            <a href="#" className="sans" style={{ color:'#1a1814', padding:'16px 28px', borderRadius:999, textDecoration:'none', fontWeight:500, fontSize:15, border:'1px solid #1a1814' }}>See our work →</a>
          </div>
        </div>

        {/* Right margin notes */}
        {motif ? (
          <div style={{ paddingTop:120 }}>
            <div className="marg">★ Award-winning</div>
            <div className="marg" style={{ marginTop:6 }}>Digital Leaders AI Excellence — Winner 2025.</div>
            <div style={{ width:40, height:1, background:accent, margin:'24px 0' }}/>
            <div className="marg">★ Bestselling</div>
            <div className="marg" style={{ marginTop:6 }}>"AI Demystified" — Pearson FT, Amazon top 10.</div>
            <div style={{ width:40, height:1, background:accent, margin:'24px 0' }}/>
            <div className="marg">★ Featured</div>
            <div className="marg" style={{ marginTop:6 }}>AI.gov.uk · UK Gov Use Case Library.</div>
          </div>
        ) : <div/>}
      </div>

      {/* Stats strip beneath */}
      <div style={{ marginTop:64, padding:'32px 0', borderTop:`1px solid ${accent}`, borderBottom:`1px solid ${accent}`, display:'grid', gridTemplateColumns:'repeat(3, 1fr)', textAlign:'center' }}>
        {[['70M+','users served annually'],['95%','accuracy in production'],['20+','years shipping products']].map(([n,l],i)=>(
          <div key={i} style={{ borderLeft: i? `1px solid ${accent}` : 'none' }}>
            <div className="display" style={{ fontSize:'clamp(48px, 6vw, 96px)', color:accent }}>{n}</div>
            <div className="sans" style={{ fontSize:14, color:'rgba(26,24,20,0.7)', marginTop:4 }}>{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function C2Manifesto({ accent }) {
  return (
    <section style={{ padding:'120px 48px', background:'#1a1814', color:'#efe7d8' }}>
      <div className="mono" style={{ fontSize:11, color:'#c9a14b', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:24, textAlign:'center' }}>§ A short manifesto</div>
      <p className="display" style={{ fontSize:'clamp(36px, 4.5vw, 72px)', margin:'0 auto', maxWidth:1100, lineHeight:1.1, textAlign:'center' }}>
        Most AI projects stall in <span style={{ color:'#c9a14b' }}>pilot purgatory</span>. We've spent twenty years shipping software, and the last few shipping AI for governments, charities, and the FTSE 100. We build systems that <span style={{ background:'#c9a14b', color:'#1a1814', padding:'0 16px', borderRadius:6 }}>ship</span> — and keep working when the demo is over.
      </p>
    </section>
  );
}

function C2Services({ accent }) {
  const services = [
    ['I','Strategy & Advisory','Board-level guidance on where AI creates real value. The 20% of use cases that drive 80% of impact — and the noise to ignore.'],
    ['II','Coaching & Mentoring','Coaching that reshapes mental models. Where AI excels, where it fails — the jagged frontier.'],
    ['III','Transformation & Training','Sustainable AI capability from boardroom to frontline. 70% adoption in 12 weeks.'],
    ['IV','Architecture & Engineering','Production-grade AI systems built for accuracy, security, and scale. RAG pipelines, agentic workflows.'],
    ['V','Rapid Prototyping','Working demos in days, not quarters. Build fast to prove value, hand off cleanly.'],
    ['VI','AI Governance','Frameworks that enable rather than block. Risk tiers, approval, transparency — UK Gov-aligned.'],
  ];
  return (
    <section style={{ padding:'120px 48px' }}>
      <div className="mono" style={{ fontSize:11, color:accent, textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:24, textAlign:'center' }}>§ The Six Disciplines</div>
      <h2 className="display" style={{ fontSize:'clamp(48px, 7vw, 112px)', margin:'0 auto 64px', textAlign:'center', maxWidth:1100 }}>
        What we<br/>actually do.
      </h2>

      {/* Two-column broadsheet list */}
      <div style={{ maxWidth:1100, margin:'0 auto', columnCount:2, columnGap:48 }}>
        {services.map(([n,t,d],i)=>(
          <div key={i} style={{ breakInside:'avoid', paddingBottom:36, marginBottom:36, borderBottom:'1px solid rgba(26,24,20,0.18)' }}>
            <div style={{ display:'flex', alignItems:'baseline', gap:16, marginBottom:10 }}>
              <span className="display" style={{ color:accent, fontSize:32 }}>{n}.</span>
              <h3 className="display" style={{ fontSize:30, margin:0 }}>{t}</h3>
            </div>
            <p className="sans" style={{ fontSize:15, lineHeight:1.55, color:'rgba(26,24,20,0.75)', margin:0 }}>{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function C2Impact({ accent }) {
  const cases = [
    { c:'GOSH Charity', m:'70% adoption · 12 weeks', body:'Possibly the fastest charity AI transformation in the UK. From strategy to coaching — sustainable capability across the entire org.' },
    { c:'NHS England', m:'+90,000 appointments', body:'Discovery across 11 ICBs. Pathway to 90,000 extra appointments annually. £500k secured. First prototype live-testing in 6 weeks.' },
    { c:'Awin', m:'10 days → 2 hours', body:'Publisher matching system processing 1,500 vendors in 2 hours, down from 10 days. RFP response time cut by 50%.' },
    { c:'Pearson', m:'4× growth platform', body:'Architecting unified AI platform for FTSE 100 education provider, connecting all legacy systems behind a single front door.' },
    { c:'Rimes', m:'500+ hours/month saved', body:'Roadmap for firm processing millions of daily transactions. 40+ developers upskilled who shipped during the engagement.' },
  ];
  return (
    <section style={{ padding:'120px 48px', borderTop:'1px solid rgba(26,24,20,0.18)' }}>
      <div className="mono" style={{ fontSize:11, color:accent, textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:24, textAlign:'center' }}>§ Selected work · Field reports</div>
      <h2 className="display" style={{ fontSize:'clamp(48px, 7vw, 112px)', margin:'0 auto 64px', textAlign:'center' }}>
        Numbers that <span style={{ color:accent }}>matter</span>.
      </h2>

      {/* Hero — vertical poster style */}
      <div style={{ background:'#1a1814', color:'#efe7d8', padding:'72px 48px', position:'relative', textAlign:'center', marginBottom:32 }}>
        <div className="mono" style={{ fontSize:11, color:'#c9a14b', textTransform:'uppercase', letterSpacing:'0.2em', marginBottom:24 }}>★ Cover Story · FCDO</div>
        <h3 className="display" style={{ fontSize:'clamp(48px, 8vw, 144px)', margin:'0 auto 32px', maxWidth:1000, lineHeight:0.92 }}>
          The UK's first<br/>public LLM.
        </h3>
        <p className="sans" style={{ fontSize:19, lineHeight:1.55, maxWidth:760, margin:'0 auto 24px', color:'rgba(239,231,216,0.85)' }}>
          Live on every British Embassy website. 10-day email queues turned into 5-second responses. <strong style={{ color:'#efe7d8' }}>95% accuracy in production</strong> — exceeding the human agent baseline. Saving £3.6M over 5 years while serving 500,000+ citizens annually.
        </p>
        <div className="sans" style={{ display:'inline-block', padding:'14px 22px', background:'#c9a14b', color:'#1a1814', borderRadius:8, fontWeight:600, fontSize:14 }}>
          ★ Digital Leaders AI Excellence Award · Winner 2025
        </div>
      </div>

      {/* Editorial list of cases — newspaper feature page */}
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        {cases.map((c,i)=>(
          <div key={i} style={{ display:'grid', gridTemplateColumns:'1fr 2fr', gap:48, padding:'40px 0', borderTop:'1px solid rgba(26,24,20,0.18)', alignItems:'baseline' }}>
            <div>
              <div className="mono" style={{ fontSize:11, color:accent, marginBottom:14, textTransform:'uppercase', letterSpacing:'0.08em' }}>No. 0{i+2} — {c.c}</div>
              <div className="display" style={{ fontSize:48, lineHeight:0.95 }}>{c.m}</div>
            </div>
            <p className="sans" style={{ fontSize:17, lineHeight:1.55, color:'rgba(26,24,20,0.78)', margin:0 }}>{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function C2Clients({ accent }) {
  const list = ['FCDO','NHS England','GOSH Charity','Homes England','Awin','Rimes','Pearson','LB Merton','Keele University'];
  return (
    <section style={{ padding:'80px 0', background:'#1a1814', color:'#efe7d8' }}>
      <div style={{ padding:'0 48px', marginBottom:32, textAlign:'center' }}>
        <div className="mono" style={{ fontSize:11, color:'#c9a14b', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:16 }}>§ Trusted across sectors</div>
        <h2 className="display" style={{ fontSize:'clamp(40px, 5vw, 72px)', margin:0 }}>Government. Charity. Enterprise.</h2>
      </div>
      <div style={{ overflow:'hidden', padding:'40px 0', borderTop:`1px solid #c9a14b`, borderBottom:`1px solid #c9a14b` }}>
        <div className="display" style={{ display:'flex', gap:48, whiteSpace:'nowrap', fontSize:64 }}>
          {[...list,...list,...list].map((c,i)=>(
            <span key={i} style={{ display:'flex', alignItems:'center', gap:48 }}>{c} <span style={{ color: i%3? '#c9a14b' : '#7a1f2b', fontStyle:'normal' }}>✺</span></span>
          ))}
        </div>
      </div>
    </section>
  );
}

function C2Awards({ accent }) {
  const awards = [
    ['Digital Leaders AI Excellence','Winner 2025 · Privacy & Security'],
    ['Computing Digital Tech Leaders','Nominated 2025 · Best AI Project'],
    ['Government Innovator Award','Nominated 2025 · Civil Service Awards'],
    ['"AI Demystified"','Pearson FT · Amazon bestseller'],
    ['AI.gov.uk','Featured case study'],
  ];
  return (
    <section style={{ padding:'120px 48px' }}>
      <div className="mono" style={{ fontSize:11, color:accent, textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:24, textAlign:'center' }}>§ Recognition</div>
      <h2 className="display" style={{ fontSize:'clamp(48px, 6vw, 96px)', margin:'0 auto 48px', textAlign:'center', maxWidth:1100 }}>
        Work that won't<br/>sit on a shelf.
      </h2>
      <div style={{ maxWidth:1000, margin:'0 auto' }}>
        {awards.map(([t,s],i)=>(
          <div key={i} style={{ display:'grid', gridTemplateColumns:'40px 1fr 1fr', gap:24, padding:'24px 0', borderTop:'1px solid rgba(26,24,20,0.18)', alignItems:'baseline' }}>
            <span className="display" style={{ color:accent, fontSize:22 }}>{String(i+1).padStart(2,'0')}</span>
            <div className="display" style={{ fontSize:24 }}>{t}</div>
            <div className="sans" style={{ fontSize:14, color:'rgba(26,24,20,0.7)' }}>{s}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function C2Contact({ accent }) {
  return (
    <section style={{ padding:'140px 48px', textAlign:'center', background:'#c9a14b' }}>
      <div className="mono" style={{ fontSize:11, color:'rgba(26,24,20,0.7)', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:24 }}>§ Get started</div>
      <h2 className="display" style={{ fontSize:'clamp(64px, 11vw, 200px)', margin:0, lineHeight:0.9 }}>
        Let's build<br/>something<br/>that <em style={{ background:'#1a1814', color:'#c9a14b', padding:'0 24px', borderRadius:8 }}>works</em>.
      </h2>
      <div style={{ marginTop:48, display:'flex', gap:16, justifyContent:'center', alignItems:'center', flexWrap:'wrap' }}>
        <a href="#" className="mono" style={{ fontSize:16, color:'#1a1814', textDecoration:'none', borderBottom:'1px solid rgba(26,24,20,0.4)' }}>info@paidiaconsulting.com</a>
        <a href="#" className="sans" style={{ background:'#1a1814', color:'#efe7d8', padding:'18px 32px', borderRadius:999, fontWeight:500, textDecoration:'none', fontSize:16 }}>Start a conversation ↗</a>
      </div>
    </section>
  );
}

function C2Footer() {
  return (
    <footer className="sans" style={{ padding:'40px 48px', display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:13, color:'rgba(26,24,20,0.6)', borderTop:'1px solid rgba(26,24,20,0.2)' }}>
      <span>© 2026 Paidia Consulting Ltd · London, UK</span>
      <span style={{ fontFamily:'Fraunces', fontStyle:'italic' }}>set in Fraunces & Geist · printed in pixels</span>
      <span>Privacy · Email</span>
    </footer>
  );
}

window.DirectionC2 = DirectionC2;
