// Direction C — Manifesto Poster
// Warm cream + ink + multi-colour blocks. Editorial italic serif display type.
// Treats the page like a Swiss-poster magazine spread. Maximum personality.

function DirectionC({ accent = '#3a5a40', headline = 'AI that actually works.', motif = true }) {
  return (
    <div className="ab c-root" style={{ width:'100%', minHeight:'100%', '--accent': accent }}>
      <CNav accent={accent} />
      <CHero accent={accent} headline={headline} motif={motif} />
      <CManifesto accent={accent} />
      <CServices accent={accent} />
      <CImpact accent={accent} />
      <CClients />
      <CAwards accent={accent} />
      <CContact accent={accent} />
      <CFooter />
    </div>
  );
}

function CNav({ accent }) {
  return (
    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'24px 40px', borderBottom:'1px solid rgba(26,24,20,0.15)' }}>
      <div className="sans" style={{ display:'flex', alignItems:'center', gap:14 }}>
        <div style={{ width:32, height:32, background:'#1a1814', borderRadius:'50%', display:'grid', placeItems:'center', color:accent, fontFamily:'Fraunces', fontStyle:'italic', fontWeight:600, fontSize:18 }}>p</div>
        <span style={{ fontWeight:600, fontSize:16, letterSpacing:'-0.01em' }}>Paidia<span style={{ fontFamily:'Fraunces', fontStyle:'italic', fontWeight:400 }}>·</span>Consulting</span>
      </div>
      <nav className="sans" style={{ display:'flex', gap:28, fontSize:14 }}>
        {['Services','Impact','Clients','Get in touch'].map((x,i)=>(
          <a key={i} href="#" style={{ color:'#1a1814', textDecoration:'none', display:'flex', alignItems:'center', gap:6 }}>
            <span style={{ fontFamily:'Fraunces', fontStyle:'italic', color:accent }}>0{i+1}</span> {x}
          </a>
        ))}
      </nav>
    </div>
  );
}

function CHero({ accent, headline, motif }) {
  return (
    <section style={{ padding:'48px 40px 80px', position:'relative' }}>
      {/* Magazine-style metadata strip */}
      <div className="mono" style={{ display:'flex', justifyContent:'space-between', fontSize:11, marginBottom:32, color:'rgba(26,24,20,0.6)' }}>
        <span>VOL. 04 · 2026</span>
        <span>A FIELD GUIDE TO APPLIED AI</span>
        <span>LONDON</span>
      </div>

      {/* Asymmetric grid: huge serif italic headline + colour blocks */}
      <div style={{ display:'grid', gridTemplateColumns:'auto 320px', gap:32, alignItems:'end' }}>
        <h1 className="display" style={{ fontSize:'clamp(72px, 12vw, 200px)', margin:0, fontStyle:'italic' }}>
          AI that<br/>
          <span style={{ background:'#1a1814', color:'#f4efe6', padding:'0 24px', display:'inline-block', borderRadius:8 }}>actually</span><br/>
          works<span style={{ color:accent }}>.</span>
        </h1>
        {motif && (
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8 }}>
            <div className="clay" style={{ padding:14, borderRadius:10, aspectRatio:'1', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
              <span className="mono" style={{ fontSize:10 }}>FCDO</span>
              <span className="display" style={{ fontSize:36, lineHeight:0.9 }}>500K<br/><span style={{ fontFamily:'Geist', fontStyle:'normal', fontSize:11, fontWeight:500 }}>citizens / yr</span></span>
            </div>
            <div className="lemon" style={{ padding:14, borderRadius:10, aspectRatio:'1', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
              <span className="mono" style={{ fontSize:10 }}>GOSH</span>
              <span className="display" style={{ fontSize:36, lineHeight:0.9 }}>70%<br/><span style={{ fontFamily:'Geist', fontStyle:'normal', fontSize:11, fontWeight:500 }}>adoption / 12wk</span></span>
            </div>
            <div className="sky" style={{ padding:14, borderRadius:10, aspectRatio:'1', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
              <span className="mono" style={{ fontSize:10 }}>AWIN</span>
              <span className="display" style={{ fontSize:36, lineHeight:0.9 }}>10d<br/><span style={{ fontFamily:'Geist', fontStyle:'normal', fontSize:11, fontWeight:500 }}>→ 2 hrs</span></span>
            </div>
            <div className="ink" style={{ padding:14, borderRadius:10, aspectRatio:'1', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
              <span className="mono" style={{ fontSize:10, color: accent }}>NHS</span>
              <span className="display" style={{ fontSize:36, lineHeight:0.9 }}>+90k<br/><span style={{ fontFamily:'Geist', fontStyle:'normal', fontSize:11, fontWeight:500 }}>appointments</span></span>
            </div>
          </div>
        )}
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:48, marginTop:80 }}>
        <p className="sans" style={{ fontSize:20, lineHeight:1.4, margin:0, gridColumn:'1 / span 2', maxWidth:720 }}>
          From <em style={{ fontFamily:'Fraunces', fontWeight:500 }}>boardroom</em> to <em style={{ fontFamily:'Fraunces', fontWeight:500 }}>codebase</em> to <em style={{ fontFamily:'Fraunces', fontWeight:500 }}>culture</em>. Deep AI expertise, from architecture to deployment — we turn ambition into systems that ship and keep working.
        </p>
        <div style={{ display:'flex', flexDirection:'column', gap:10, justifyContent:'end' }}>
          <a href="#" className="sans" style={{ background:'#1a1814', color:'#f4efe6', padding:'18px 24px', borderRadius:999, textDecoration:'none', fontWeight:500, display:'flex', justifyContent:'space-between', alignItems:'center' }}>Start a conversation <span style={{ color: accent }}>↗</span></a>
          <a href="#" className="sans" style={{ background:'transparent', color:'#1a1814', padding:'18px 24px', borderRadius:999, textDecoration:'none', fontWeight:500, border:'1px solid rgba(26,24,20,0.25)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>See our work <span>→</span></a>
        </div>
      </div>
    </section>
  );
}

function CManifesto({ accent }) {
  return (
    <section className="ink" style={{ padding:'120px 40px', position:'relative' }}>
      <div className="mono" style={{ fontSize:11, color: accent, marginBottom:24, textTransform:'uppercase', letterSpacing:'0.08em' }}>§ A short manifesto</div>
      <p className="display" style={{ fontSize:'clamp(36px, 4.5vw, 72px)', margin:0, fontStyle:'italic', maxWidth:'1100px', lineHeight:1.05 }}>
        Most AI projects stall in <span style={{ color:accent }}>pilot purgatory</span>. We've spent twenty years shipping software, and the last few shipping AI for governments, charities, and the FTSE 100. We build systems that <span style={{ background:accent, color:'#1a1814', padding:'0 16px', borderRadius:6 }}>ship</span> — and keep working when the demo is over.
      </p>
      <div className="sans" style={{ marginTop:48, display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:32, maxWidth:1100 }}>
        {[['70M+','users served annually'],['95%','accuracy in production'],['20+','years shipping products']].map(([n,l],i)=>(
          <div key={i}>
            <div className="display" style={{ fontSize:80, color: accent, lineHeight:1 }}>{n}</div>
            <div style={{ fontSize:14, color:'rgba(244,239,230,0.7)', marginTop:8 }}>{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CServices({ accent }) {
  const services = [
    { n:'I', t:'Strategy & Advisory', d:'Board-level guidance on where AI creates real value. The 20% of use cases that drive 80% of impact — and the noise to ignore.', bg:'#f4efe6' },
    { n:'II', t:'Coaching & Mentoring', d:'Coaching that reshapes mental models. Where AI excels, where it fails — the jagged frontier.', bg:'#e8d5a8' },
    { n:'III', t:'Transformation & Training', d:'Sustainable AI capability from boardroom to frontline. 70% adoption in 12 weeks.', bg:'#3a5a40', text:'#f4efe6' },
    { n:'IV', t:'Architecture & Engineering', d:'Production-grade systems built for accuracy, security, and scale. RAG pipelines, agentic workflows.', bg:'#1a1814', text:'#f4efe6' },
    { n:'V', t:'Rapid Prototyping', d:'Working demos in days, not quarters. Build fast to prove value, hand off cleanly.', bg:'#7a9eb8' },
    { n:'VI', t:'AI Governance', d:'Frameworks that enable rather than block. Risk tiers, approval, transparency — UK Gov-aligned.', bg:'#f4efe6' },
  ];
  return (
    <section style={{ padding:'120px 40px' }}>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:32, alignItems:'end', marginBottom:64 }}>
        <h2 className="display" style={{ fontSize:'clamp(48px, 6vw, 96px)', margin:0, fontStyle:'italic' }}>
          What we<br/>actually do<span style={{ color: accent }}>.</span>
        </h2>
        <p className="sans" style={{ fontSize:18, lineHeight:1.5, color:'rgba(26,24,20,0.7)', margin:0, maxWidth:480 }}>
          Six disciplines. Used in any combination. From "we don't know where to start" to "this thing serves half a million people."
        </p>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:16 }}>
        {services.map((s,i)=>(
          <div key={i} style={{ background: s.bg, color: s.text || '#1a1814', borderRadius:18, padding:32, minHeight:320, border: s.bg==='#f4efe6' ? '1px solid rgba(26,24,20,0.12)' : 'none', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
            <div className="display" style={{ fontSize:64, fontStyle:'italic', lineHeight:1 }}>{s.n}.</div>
            <div>
              <div className="display" style={{ fontSize:28, fontStyle:'italic', marginBottom:14, lineHeight:1.05 }}>{s.t}</div>
              <p className="sans" style={{ fontSize:14, lineHeight:1.55, margin:0, opacity:0.85 }}>{s.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CImpact({ accent }) {
  return (
    <section style={{ padding:'40px 40px 120px' }}>
      <div className="mono" style={{ fontSize:11, color: 'rgba(26,24,20,0.6)', marginBottom:16, textTransform:'uppercase', letterSpacing:'0.08em' }}>§ Field Notes — selected work</div>
      <h2 className="display" style={{ fontSize:'clamp(48px, 6vw, 96px)', margin:'0 0 48px', fontStyle:'italic', maxWidth:1000 }}>
        Numbers that <span style={{ color:accent }}>matter</span>.
      </h2>

      {/* Hero feature — Editorial pull */}
      <div className="ink" style={{ borderRadius:24, padding:48, marginBottom:24, position:'relative', overflow:'hidden' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, alignItems:'end' }}>
          <div>
            <div className="mono" style={{ fontSize:11, color: accent, marginBottom:24 }}>FEATURE · 01 / FCDO</div>
            <h3 className="display" style={{ fontSize:'clamp(40px, 5vw, 84px)', fontStyle:'italic', margin:0, lineHeight:0.95, color:'#f4efe6' }}>
              The UK's first<br/>public LLM.
            </h3>
            <div style={{ marginTop:24, display:'flex', gap:8, flexWrap:'wrap' }} className="mono">
              {['LLM Architecture','Hallucination-safe','Production'].map((t,i)=>(
                <span key={i} style={{ fontSize:11, padding:'6px 12px', border:`1px solid ${accent}`, borderRadius:999, color: accent }}>{t}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="sans" style={{ fontSize:18, lineHeight:1.55, color:'rgba(244,239,230,0.85)', margin:0 }}>
              Live on every British Embassy website. Transformed 10-day email queues into 5-second responses. <strong style={{ color:'#f4efe6' }}>95% accuracy in production</strong> — exceeding the human agent baseline. Saving £3.6M over 5 years while serving 500,000+ citizens annually.
            </p>
            <div className="sans" style={{ marginTop:24, padding:'14px 18px', background: accent, color:'#1a1814', borderRadius:8, fontWeight:600, fontSize:14, display:'inline-block' }}>
              ★ Digital Leaders AI Excellence Award · Winner 2025
            </div>
          </div>
        </div>
      </div>

      {/* Editorial list of cases — magazine spread */}
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 }}>
        {[
          { c:'GOSH Charity', m:'70% adoption · 12 weeks', body:'Possibly the fastest charity AI transformation in the UK. From strategy to coaching — sustainable capability across the entire org.', tone:'lemon' },
          { c:'NHS England', m:'+90,000 appointments', body:'Discovery across 11 ICBs. Pathway to 90,000 extra appointments annually. £500k secured. First prototype live-testing in 6 weeks.', tone:'sky' },
          { c:'Awin', m:'10 days → 2 hours', body:'Publisher matching system processing 1,500 vendors in 2 hours, down from 10 days. RFP response time cut by 50%.', tone:'forest' },
          { c:'Pearson', m:'4× growth platform', body:'Architecting unified AI platform for FTSE 100 education provider, connecting all legacy systems behind a single front door.', tone:'paper' },
          { c:'Rimes', m:'500+ hours/month saved', body:'Roadmap for firm processing millions of daily transactions. 40+ developers upskilled who shipped AI features during the engagement.', tone:'paper' },
        ].map((c,i)=>(
          <div key={i} style={{
            background: c.tone==='lemon'?'#e8d5a8':c.tone==='sky'?'#7a9eb8':c.tone==='forest'?'#3a5a40':'#f4efe6',
            color: c.tone==='forest'?'#f4efe6':'#1a1814',
            border: c.tone==='paper'?'1px solid rgba(26,24,20,0.15)':'none',
            borderRadius:18, padding:32 }}>
            <div className="mono" style={{ fontSize:11, marginBottom:24, opacity:0.7, textTransform:'uppercase', letterSpacing:'0.08em' }}>{c.c}</div>
            <div className="display" style={{ fontSize:42, fontStyle:'italic', marginBottom:14, lineHeight:1 }}>{c.m}</div>
            <p className="sans" style={{ fontSize:15, lineHeight:1.55, margin:0, opacity:0.85 }}>{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CClients() {
  const list = ['FCDO','NHS England','GOSH Charity','Homes England','Awin','Rimes','Pearson','London Borough of Merton','Keele University'];
  return (
    <section className="ink" style={{ padding:'80px 0' }}>
      <div style={{ padding:'0 40px', marginBottom:24 }}>
        <div className="mono" style={{ fontSize:11, color:'rgba(244,239,230,0.6)', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:16 }}>§ Trusted across sectors</div>
        <h2 className="display" style={{ fontSize:'clamp(40px, 5vw, 72px)', fontStyle:'italic', margin:0, color:'#f4efe6' }}>
          Government. Charity.<br/>Enterprise.
        </h2>
      </div>
      <div style={{ overflow:'hidden', padding:'40px 0', borderTop:'1px solid rgba(244,239,230,0.15)', borderBottom:'1px solid rgba(244,239,230,0.15)' }}>
        <div className="display" style={{ display:'flex', gap:48, whiteSpace:'nowrap', fontSize:64, fontStyle:'italic', color:'#f4efe6' }}>
          {[...list, ...list, ...list].map((c,i)=>(
            <span key={i} style={{ display:'flex', alignItems:'center', gap:48 }}>{c} <span style={{ color: i%3? '#3a5a40' : '#e8d5a8', fontStyle:'normal' }}>✺</span></span>
          ))}
        </div>
      </div>
    </section>
  );
}

function CAwards({ accent }) {
  const awards = [
    ['Digital Leaders AI Excellence','Winner 2025 · Privacy & Security'],
    ['Computing Digital Tech Leaders','Nominated 2025 · Best AI Project'],
    ['Government Innovator Award','Nominated 2025 · Civil Service Awards'],
    ['"AI Demystified"','Pearson FT · Amazon bestseller'],
    ['AI.gov.uk','Featured case study'],
  ];
  return (
    <section style={{ padding:'120px 40px' }}>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 2fr', gap:64 }}>
        <div>
          <div className="mono" style={{ fontSize:11, color:'rgba(26,24,20,0.6)', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:16 }}>§ Recognition</div>
          <h2 className="display" style={{ fontSize:'clamp(48px, 5vw, 80px)', fontStyle:'italic', margin:0 }}>
            Work that won't<br/>sit on a shelf<span style={{ color:accent }}>.</span>
          </h2>
        </div>
        <div>
          {awards.map(([t,s],i)=>(
            <div key={i} style={{ display:'grid', gridTemplateColumns:'40px 1fr 1fr', gap:24, padding:'20px 0', borderTop:'1px solid rgba(26,24,20,0.15)', alignItems:'baseline' }}>
              <span className="display" style={{ color: accent, fontStyle:'italic', fontSize:20 }}>{String(i+1).padStart(2,'0')}</span>
              <div className="display" style={{ fontSize:22, fontStyle:'italic', fontWeight:500 }}>{t}</div>
              <div className="sans" style={{ fontSize:14, color:'rgba(26,24,20,0.7)' }}>{s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CContact({ accent }) {
  return (
    <section style={{ padding:'120px 40px', textAlign:'center', background:'#e8d5a8' }}>
      <div className="mono" style={{ fontSize:11, color:'rgba(26,24,20,0.7)', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:24 }}>§ Get started</div>
      <h2 className="display" style={{ fontSize:'clamp(64px, 11vw, 200px)', margin:0, fontStyle:'italic', lineHeight:0.9 }}>
        Let's build<br/>something<br/>that <em style={{ background:'#1a1814', color:'#e8d5a8', padding:'0 24px', borderRadius:8, fontStyle:'italic' }}>works</em>.
      </h2>
      <div style={{ marginTop:48, display:'flex', gap:16, justifyContent:'center', alignItems:'center', flexWrap:'wrap' }}>
        <a href="#" className="mono" style={{ fontSize:16, color:'#1a1814', textDecoration:'none', borderBottom:'1px solid rgba(26,24,20,0.3)', paddingBottom:4 }}>info@paidiaconsulting.com</a>
        <a href="#" className="sans" style={{ background:'#1a1814', color:'#f4efe6', padding:'18px 32px', borderRadius:999, fontWeight:500, textDecoration:'none', fontSize:16 }}>Start a conversation ↗</a>
      </div>
    </section>
  );
}

function CFooter() {
  return (
    <footer className="sans" style={{ padding:'40px', display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:13, color:'rgba(26,24,20,0.6)', borderTop:'1px solid rgba(26,24,20,0.15)' }}>
      <span>© 2026 Paidia Consulting Ltd · London, UK</span>
      <span style={{ fontFamily:'Fraunces', fontStyle:'italic' }}>made with care, in public.</span>
      <div style={{ display:'flex', gap:24 }}>
        <a href="#" style={{ color:'inherit', textDecoration:'none' }}>Privacy</a>
        <a href="#" style={{ color:'inherit', textDecoration:'none' }}>Email</a>
      </div>
    </footer>
  );
}

window.DirectionC = DirectionC;
