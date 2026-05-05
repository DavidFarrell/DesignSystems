// app.jsx — 10 directions: 5 Brutalist + 5 Manifesto

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentA": "#e7ff52",
  "accentA2": "#ff3d6e",
  "accentA3": "#fff200",
  "accentA4": "#ff3b1f",
  "accentA5": "#ff6a00",
  "accentC": "#3a5a40",
  "accentC2": "#7a1f2b",
  "accentC3": "#e30b5c",
  "accentC4": "#ff5c1f",
  "accentC5": "#0d8478",
  "headlineVariant": "v1",
  "motif": true,
  "density": "regular"
}/*EDITMODE-END*/;

const HEADLINES = {
  v1: { a:'AI that actually works.', c:'AI that actually works.' },
  v2: { a:'From slides to production.', c:'We make AI that ships.' },
  v3: { a:'Make AI work. For real.', c:'AI without the slop.' },
  v4: { a:"Ship AI. Don't pilot it.", c:'The AI consultancy that codes.' },
};

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const h = HEADLINES[t.headlineVariant] || HEADLINES.v1;
  const density = { compact: 0.92, regular: 1, comfy: 1.08 }[t.density] || 1;
  const W = Math.round(1440 * density);
  const H = Math.round(2200 * density);

  return (
    <>
      <DesignCanvas>
        <DCSection id="brutalist" title="Brutalist Editorial · 5 takes" subtitle="Same DNA — bold type, max contrast, editorial energy. Pushed in 5 directions.">
          <DCArtboard id="a1" label="A1 · Tabloid (dark, yellow)" width={W} height={H}>
            <DirectionA accent={t.accentA} headline={h.a} motif={t.motif} />
          </DCArtboard>
          <DCArtboard id="a2" label="A2 · The Quarterly (cream, magenta)" width={W} height={H}>
            <DirectionA2 accent={t.accentA2} headline={h.a} motif={t.motif} />
          </DCArtboard>
          <DCArtboard id="a3" label="A3 · Riso zine (purple, yellow + pink)" width={W} height={H}>
            <DirectionA3 accent={t.accentA3} headline={h.a} motif={t.motif} />
          </DCArtboard>
          <DCArtboard id="a4" label="A4 · Sports tabloid (white, red diagonal)" width={W} height={H}>
            <DirectionA4 accent={t.accentA4} headline={h.a} motif={t.motif} />
          </DCArtboard>
          <DCArtboard id="a5" label="A5 · Stamp / monolith (cobalt, orange)" width={W} height={H}>
            <DirectionA5 accent={t.accentA5} headline={h.a} motif={t.motif} />
          </DCArtboard>
        </DCSection>

        <DCSection id="manifesto" title="Manifesto Poster · 5 takes" subtitle="Italic Fraunces display lineage — pushed harder, with punchier colour and asymmetric layouts.">
          <DCArtboard id="c1" label="C1 · Colour blocks (forest, sage, sky)" width={W} height={H}>
            <DirectionC accent={t.accentC} headline={h.c} motif={t.motif} />
          </DCArtboard>
          <DCArtboard id="c2" label="C2 · Broadsheet (oxblood, ochre)" width={W} height={H}>
            <DirectionC2 accent={t.accentC2} headline={h.c} motif={t.motif} />
          </DCArtboard>
          <DCArtboard id="c3" label="C3 · Saturated blocks (magenta, cobalt, lime)" width={W} height={H}>
            <DirectionC3 accent={t.accentC3} headline={h.c} motif={t.motif} />
          </DCArtboard>
          <DCArtboard id="c4" label="C4 · Postered & playful (tangerine, violet)" width={W} height={H}>
            <DirectionC4 accent={t.accentC4} headline={h.c} motif={t.motif} />
          </DCArtboard>
          <DCArtboard id="c5" label="C5 · Editorial spread (teal, coral)" width={W} height={H}>
            <DirectionC5 accent={t.accentC5} headline={h.c} motif={t.motif} />
          </DCArtboard>
        </DCSection>
      </DesignCanvas>

      <TweaksPanel>
        <TweakSection label="Brutalist accents" />
        <TweakColor label="A1 tabloid" value={t.accentA} onChange={(v)=>setTweak('accentA', v)} />
        <TweakColor label="A2 quarterly" value={t.accentA2} onChange={(v)=>setTweak('accentA2', v)} />
        <TweakColor label="A3 riso" value={t.accentA3} onChange={(v)=>setTweak('accentA3', v)} />
        <TweakColor label="A4 sports" value={t.accentA4} onChange={(v)=>setTweak('accentA4', v)} />
        <TweakColor label="A5 stamp" value={t.accentA5} onChange={(v)=>setTweak('accentA5', v)} />

        <TweakSection label="Manifesto accents" />
        <TweakColor label="C1 forest" value={t.accentC} onChange={(v)=>setTweak('accentC', v)} />
        <TweakColor label="C2 oxblood" value={t.accentC2} onChange={(v)=>setTweak('accentC2', v)} />
        <TweakColor label="C3 saturated" value={t.accentC3} onChange={(v)=>setTweak('accentC3', v)} />
        <TweakColor label="C4 postered" value={t.accentC4} onChange={(v)=>setTweak('accentC4', v)} />
        <TweakColor label="C5 editorial" value={t.accentC5} onChange={(v)=>setTweak('accentC5', v)} />

        <TweakSection label="Hero headline" />
        <TweakSelect label="Variant" value={t.headlineVariant}
          options={[
            { value:'v1', label:'v1 · Original' },
            { value:'v2', label:'v2 · Production-led' },
            { value:'v3', label:'v3 · No-slop' },
            { value:'v4', label:'v4 · Provocative' },
          ]}
          onChange={(v)=>setTweak('headlineVariant', v)} />

        <TweakSection label="Layout" />
        <TweakRadio label="Density" value={t.density}
          options={['compact','regular','comfy']}
          onChange={(v)=>setTweak('density', v)} />
        <TweakToggle label="Hero motif" value={t.motif} onChange={(v)=>setTweak('motif', v)} />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
