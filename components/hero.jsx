// Hero — three variants chosen via tweak: 'video', 'photo', 'form'.
const heroStyles = `
.fpc-hero {
  position: relative;
  min-height: 92vh;
  padding-top: 138px;
  padding-bottom: 60px;
  overflow: hidden;
  background: var(--ink);
  color: #fff;
}

.fpc-hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.fpc-hero-bg img,
.fpc-hero-bg video {
  width: 100%; height: 100%;
  object-fit: cover;
  filter: saturate(105%) contrast(105%);
}
.fpc-hero-bg::before {
  /* dark vignette */
  content: "";
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse at 30% 40%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 90%),
    linear-gradient(180deg, rgba(2,2,2,0.78) 0%, rgba(2,2,2,0.35) 35%, rgba(2,2,2,0.85) 100%);
  z-index: 1;
}
.fpc-hero-bg::after {
  /* electric blue side wash, sliced */
  content: "";
  position: absolute; inset: 0;
  background: linear-gradient(135deg, var(--accent) 0%, transparent 55%);
  opacity: 0.35;
  mix-blend-mode: screen;
  clip-path: polygon(0 0, 56% 0, 38% 100%, 0 100%);
  z-index: 1;
}

/* Slideshow (simulates video loop with cross-fading photos) */
.fpc-hero-slides {
  position: absolute; inset: 0;
}
.fpc-hero-slides .slide {
  position: absolute; inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1.8s ease, transform 8s linear;
  transform: scale(1.05);
}
.fpc-hero-slides .slide.active {
  opacity: 1;
  transform: scale(1.12);
}

.fpc-hero-content {
  position: relative;
  z-index: 3;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px var(--pad-x) 40px;
  text-align: center;
}

.fpc-hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-family: var(--display);
  font-weight: 700;
  font-size: clamp(15px, 1.4vw, 20px);
  letter-spacing: 0.12em;
  color: rgba(255,255,255,0.92);
  text-transform: uppercase;
  margin-bottom: 28px;
}
.fpc-hero-eyebrow .pill {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 6px 12px;
  border: 1.5px solid var(--accent-2);
  border-radius: 999px;
  color: var(--accent-2);
  font-size: 12px;
  letter-spacing: 0.18em;
}
.fpc-hero-eyebrow .stars-row {
  display: inline-flex; align-items: center; gap: 8px;
}

.fpc-hero h1 {
  font-family: var(--display);
  font-style: italic;
  font-weight: 800;
  text-transform: uppercase;
  font-size: clamp(64px, 11vw, 168px);
  line-height: 0.84;
  letter-spacing: -0.005em;
  margin: 0 0 28px;
}
.fpc-hero h1 .word-block {
  display: inline-block;
  position: relative;
  padding: 0 0.05em;
}
.fpc-hero h1 .swipe-word::after {
  content: "";
  position: absolute;
  left: -0.05em; right: -0.05em;
  bottom: 0.08em;
  height: 0.22em;
  background: var(--accent-2);
  opacity: 0.55;
  transform: skew(-10deg);
  z-index: -1;
}

.fpc-hero-sub {
  max-width: 720px;
  margin: 0 auto 36px;
  font-size: clamp(17px, 1.4vw, 22px);
  line-height: 1.5;
  color: rgba(255,255,255,0.92);
}

.fpc-hero-ctas {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-bottom: 60px;
}

.fpc-hero-trust {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 28px;
  font-family: var(--body);
  font-weight: 600;
  font-size: 14px;
  color: rgba(255,255,255,0.78);
  letter-spacing: 0.02em;
}
.fpc-hero-trust .item {
  display: inline-flex; align-items: center; gap: 8px;
}
.fpc-hero-trust .item svg { color: var(--accent-2); }

/* Scroll cue */
.scroll-cue {
  position: absolute;
  bottom: 22px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.7);
  display: flex; flex-direction: column; align-items: center; gap: 8px;
}
.scroll-cue::after {
  content: "";
  width: 1px; height: 36px;
  background: linear-gradient(180deg, rgba(255,255,255,0.7), transparent);
  animation: cue 1.6s ease-in-out infinite;
}
@keyframes cue { 0%{height:6px;opacity:0.2} 50%{height:36px;opacity:1} 100%{height:6px;opacity:0.2} }

/* === FORM-FIRST VARIANT === */
.fpc-hero.form-first .fpc-hero-content {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 56px;
  text-align: left;
  align-items: center;
  max-width: 1300px;
  padding-top: 60px;
}
.fpc-hero.form-first h1 { font-size: clamp(52px, 7vw, 112px); }
.fpc-hero.form-first .fpc-hero-eyebrow { margin-bottom: 18px; }
.fpc-hero.form-first .fpc-hero-sub { margin-left: 0; margin-right: 0; }
.fpc-hero.form-first .fpc-hero-ctas { justify-content: flex-start; }
.fpc-hero.form-first .fpc-hero-trust { justify-content: flex-start; }
.fpc-hero.form-first .hero-form-panel {
  background: rgba(255,255,255,0.96);
  color: var(--ink);
  padding: 36px;
  border: 2px solid #fff;
  box-shadow: 12px 12px 0 0 var(--accent);
  border-radius: 2px;
}
.fpc-hero.form-first .hero-form-panel h3 {
  font-family: var(--display);
  font-style: italic;
  font-weight: 800;
  font-size: 40px;
  line-height: 0.96;
  margin: 0 0 6px;
  text-transform: uppercase;
}
.fpc-hero.form-first .hero-form-panel p {
  font-size: 14px; color: var(--muted); margin: 0 0 22px;
}

@media (max-width: 980px) {
  .fpc-hero.form-first .fpc-hero-content {
    grid-template-columns: 1fr;
  }
}
`;

function HeroBackground({ variant }) {
  const slides = [
    'assets/hero-house.jpg',
    'assets/family-portrait.jpg',
    'assets/community.jpg',
    'assets/family-1.jpg',
  ];
  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => {
    if (variant !== 'photo-loop') return;
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, [variant]);

  if (variant === 'photo') {
    return (
      <div className="fpc-hero-bg">
        <img src="assets/hero-house.jpg" alt="" />
      </div>
    );
  }

  if (variant === 'video') {
    const videoRef = React.useRef(null);
    React.useEffect(() => {
      const v = videoRef.current;
      if (!v) return;
      v.muted = true;
      v.defaultMuted = true;
      v.volume = 0;
      v.play().catch(() => {});
    }, []);
    return (
      <div className="fpc-hero-bg">
        <video
          ref={videoRef}
          src="assets/hero-loop.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="assets/hero-house.jpg"
        />
      </div>
    );
  }

  // photo-loop variant — cross-fading brand photography (fallback)
  return (
    <div className="fpc-hero-bg">
      <div className="fpc-hero-slides">
        {slides.map((src, i) => (
          <div
            key={src}
            className={`slide ${i === idx ? 'active' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>
    </div>
  );
}

function HeroHeadline({ tone }) {
  // Tone variants from tweak
  const variants = {
    confident: { eye: 'BENTONVILLE • FAYETTEVILLE • ROGERS', a: 'Pest Control', b: 'Done Right.' },
    premium:   { eye: 'PREMIUM PEST CONTROL, DELIVERED', a: 'The Five-Star', b: 'Pest Service.' },
    local:     { eye: 'YOUR NORTHWEST ARKANSAS NEIGHBORS', a: 'Best Pest Control', b: 'In Arkansas' },
    cocky:     { eye: 'NORTHWEST ARKANSAS\' BEST IN PEST', a: 'Bugs Hate Us.', b: 'You Won\u2019t.' },
  };
  const v = variants[tone] || variants.local;
  return (
    <React.Fragment>
      <div className="fpc-hero-eyebrow">
        <span className="pill"><Ic.Pin width="11" height="11" /> {v.eye}</span>
      </div>
      <h1>
        <span className="word-block">{v.a}</span><br />
        <span className="word-block swipe-word">{v.b}</span>
      </h1>
    </React.Fragment>
  );
}

function HeroForm() {
  return (
    <form className="hero-form-panel" onSubmit={(e) => e.preventDefault()}>
      <h3>Get a Free Quote</h3>
      <p>30 seconds. No card. We&rsquo;ll call within the hour during business hours.</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
        <input className="hf-input" placeholder="First name" />
        <input className="hf-input" placeholder="Last name" />
        <input className="hf-input" placeholder="Phone" />
        <input className="hf-input" placeholder="ZIP" />
        <input className="hf-input" placeholder="Email" style={{ gridColumn: '1 / -1' }} />
        <select className="hf-input" defaultValue="" style={{ gridColumn: '1 / -1' }}>
          <option value="" disabled>What&rsquo;s bugging you?</option>
          <option>General pest control</option>
          <option>Termites</option>
          <option>Rodents / wildlife</option>
          <option>Commercial</option>
          <option>Other</option>
        </select>
      </div>
      <button type="submit" className="btn" style={{ width: '100%', marginTop: 8 }}>
        Send My Free Quote <Ic.Arrow width="16" height="16" />
      </button>
      <p style={{ fontSize: 12, color: 'var(--muted)', textAlign: 'center', marginTop: 14 }}>
        We respect your time. No spam, no high-pressure sales.
      </p>
      <style>{`
        .hf-input {
          font: 600 14px var(--body);
          padding: 14px 14px;
          border: 1.5px solid #cdd3da;
          border-radius: 2px;
          background: #fff;
          color: var(--ink);
          width: 100%;
        }
        .hf-input:focus {
          outline: none;
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(0,123,194,0.18);
        }
      `}</style>
    </form>
  );
}

function Hero({ variant, tone }) {
  const isForm = variant === 'form';
  return (
    <React.Fragment>
      <style>{heroStyles}</style>
      <section id="top" className={`fpc-hero ${isForm ? 'form-first' : ''}`}>
        <HeroBackground variant={variant} />
        <div className="grain" />
        <div className="fpc-hero-content">
          {isForm ? (
            <React.Fragment>
              <div>
                <HeroHeadline tone={tone} />
                <p className="fpc-hero-sub">
                  Defend your home against destructive pests. Service starts as low as <strong style={{ color: 'var(--accent-2)' }}>$55/month</strong> — backed by our pest-free guarantee.
                </p>
                <div className="fpc-hero-ctas">
                  <a className="btn btn--on-dark btn--lg" href="#quote">
                    Get a Free Quote <Ic.Arrow />
                  </a>
                  <a className="btn btn--ghost btn--lg" href="tel:4794040800" style={{ borderColor: '#fff' }}>
                    <Ic.Phone /> (479) 404-0800
                  </a>
                </div>
                <div className="fpc-hero-trust">
                  <span className="item"><Ic.Star /> 1,600+ 5-star reviews</span>
                  <span className="item"><Ic.Shield width="16" height="16" /> Pest-free guarantee</span>
                  <span className="item"><Ic.Bolt width="14" height="14" /> Same-day service</span>
                </div>
              </div>
              <HeroForm />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <HeroHeadline tone={tone} />
              <p className="fpc-hero-sub">
                Defend your home against destructive pests. Service starts as low as <strong style={{ color: 'var(--accent-2)' }}>$55/month</strong> — backed by our pest-free guarantee.
              </p>
              <div className="fpc-hero-ctas">
                <a className="btn btn--on-dark btn--lg" href="#quote">
                  Get a Free Quote <Ic.Arrow />
                </a>
                <a className="btn btn--ghost btn--lg" href="tel:4794040800" style={{ borderColor: '#fff' }}>
                  <Ic.Phone /> (479) 404-0800
                </a>
              </div>
              <div className="fpc-hero-trust">
                <span className="item"><Ic.Star /> 1,600+ 5-star reviews</span>
                <span className="item"><Ic.Shield width="16" height="16" /> Pest-free guarantee</span>
                <span className="item"><Ic.Bolt width="14" height="14" /> Same-day service</span>
                <span className="item"><Ic.House width="16" height="16" /> Family-owned in NWA</span>
                <span className="item"><Ic.Shield width="14" height="14" /> Voted Best of NWA · 5 yrs</span>
              </div>
            </React.Fragment>
          )}
        </div>
        {!isForm && (
          <div className="scroll-cue">Scroll</div>
        )}
      </section>
    </React.Fragment>
  );
}

window.Hero = Hero;
