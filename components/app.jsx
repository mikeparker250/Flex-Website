// App — composes the page + Tweaks panel.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#007bc2",
  "accent2": "#35b2ff",
  "heroVariant": "video",
  "funnel": "multi",
  "tone": "local",
  "density": "regular"
}/*EDITMODE-END*/;

const ACCENT_PRESETS = {
  '#007bc2': '#35b2ff',  // Flex Electric Blue (current)
  '#1a4ce0': '#5a85ff',  // Cobalt
  '#0a8a6f': '#3edabd',  // Bayou Green
  '#d94020': '#ff7a4a',  // Caution Orange
};

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply accents to root vars
  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', t.accent);
    root.style.setProperty('--accent-2', t.accent2);
    root.style.setProperty('--accent-glow', t.accent2 + '8c');
    root.dataset.density = t.density === 'compact' ? 'compact' : 'regular';
  }, [t.accent, t.accent2, t.density]);

  // When accent changes via swatch, sync accent2 to its presetted highlight
  const setAccentPair = (primary) => {
    const second = ACCENT_PRESETS[primary] || t.accent2;
    setTweak({ accent: primary, accent2: second });
  };

  return (
    <React.Fragment>
      <Header />
      <Hero variant={t.heroVariant} tone={t.tone} />
      <Awards />
      <Marquee />
      <Stats />
      <Services />
      <Funnel variant={t.funnel} />
      <About />
      <Guarantee />
      <ServiceArea />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />

      <ChatWidget />
      <StickyCTA />

      <TweaksPanel>
        <TweakSection label="Hero" />
        <TweakRadio
          label="Style"
          value={t.heroVariant}
          options={[
            { value: 'video', label: 'Video' },
            { value: 'photo', label: 'Photo' },
            { value: 'form',  label: 'Form'  },
          ]}
          onChange={(v) => setTweak('heroVariant', v)}
        />
        <TweakSelect
          label="Headline tone"
          value={t.tone}
          options={[
            { value: 'local',     label: 'Warm + local' },
            { value: 'confident', label: 'Confident, no-nonsense' },
            { value: 'premium',   label: 'Premium / hospitality' },
            { value: 'cocky',     label: 'Bold + cocky' },
          ]}
          onChange={(v) => setTweak('tone', v)}
        />

        <TweakSection label="Funnel" />
        <TweakRadio
          label="Quote form"
          value={t.funnel}
          options={[
            { value: 'multi',  label: 'Wizard' },
            { value: 'single', label: 'Single' },
          ]}
          onChange={(v) => setTweak('funnel', v)}
        />

        <TweakSection label="Brand color" />
        <TweakColor
          label="Accent"
          value={t.accent}
          options={Object.keys(ACCENT_PRESETS)}
          onChange={setAccentPair}
        />

        <TweakSection label="Layout" />
        <TweakRadio
          label="Density"
          value={t.density}
          options={[
            { value: 'compact', label: 'Compact' },
            { value: 'regular', label: 'Roomy' },
          ]}
          onChange={(v) => setTweak('density', v)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
