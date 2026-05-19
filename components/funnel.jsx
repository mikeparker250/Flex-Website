// Funnel — multi-step quote wizard OR single form, picked via tweak.
const funnelStyles = `
.fpc-funnel {
  position: relative;
  padding: var(--section-y) var(--pad-x);
  background: var(--ink);
  color: #fff;
  overflow: hidden;
}
.fpc-funnel::before {
  content: "";
  position: absolute; inset: 0;
  background: linear-gradient(135deg, var(--accent) 0%, transparent 55%);
  opacity: 0.16;
  pointer-events: none;
}
.fpc-funnel-inner {
  position: relative; z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 64px;
  align-items: center;
}
.fpc-funnel h2 {
  font-family: var(--display);
  font-style: italic;
  font-weight: 800;
  font-size: clamp(48px, 6.5vw, 104px);
  line-height: 0.9;
  text-transform: uppercase;
  letter-spacing: -0.005em;
  margin: 8px 0 16px;
}
.fpc-funnel h2 .accent { color: var(--accent-2); }
.fpc-funnel .lead { color: rgba(255,255,255,0.78); max-width: 460px; font-size: 17px; line-height: 1.6; }

.funnel-trust {
  margin-top: 32px;
  display: grid;
  gap: 14px;
}
.funnel-trust .row {
  display: flex; align-items: center; gap: 14px;
  font-family: var(--body);
  font-weight: 600;
  font-size: 14px;
  color: rgba(255,255,255,0.85);
  letter-spacing: 0.02em;
}
.funnel-trust .row .ic {
  width: 32px; height: 32px;
  display: grid; place-items: center;
  background: var(--accent);
  border: 2px solid #fff;
  box-shadow: 3px 3px 0 0 #fff;
  color: #fff;
}

/* Wizard card */
.wizard {
  background: #fff;
  color: var(--ink);
  border: 2px solid #fff;
  box-shadow: 14px 14px 0 0 var(--accent);
  border-radius: 2px;
  padding: 36px 36px 28px;
  min-height: 540px;
  display: flex; flex-direction: column;
  position: relative;
}
.wizard-head {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 22px;
}
.wizard-head .step {
  font: 800 12px/1 var(--mono);
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--accent);
}
.wizard-head .timer {
  font: 600 12px/1 var(--body);
  color: var(--muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.wizard-progress {
  display: flex; gap: 6px;
  margin-bottom: 28px;
}
.wizard-progress .bar {
  flex: 1; height: 4px;
  background: #e3e7ec;
  position: relative;
  overflow: hidden;
}
.wizard-progress .bar.done { background: var(--accent); }
.wizard-progress .bar.current {
  background: linear-gradient(90deg, var(--accent) 50%, #e3e7ec 50%);
}

.wizard-title {
  font-family: var(--display);
  font-style: italic;
  font-weight: 800;
  font-size: clamp(32px, 3.4vw, 48px);
  line-height: 0.96;
  text-transform: uppercase;
  letter-spacing: 0;
  margin: 0 0 6px;
}
.wizard-sub {
  font-size: 15px;
  color: var(--muted);
  margin: 0 0 24px;
}

.choice-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 24px;
}
.choice-grid.three { grid-template-columns: repeat(3, 1fr); }
.choice-card {
  text-align: left;
  border: 2px solid #e3e7ec;
  background: #fff;
  padding: 18px;
  font-family: var(--body);
  font-weight: 700;
  font-size: 15px;
  color: var(--ink);
  display: flex;
  align-items: center;
  gap: 14px;
  transition: border 160ms ease, box-shadow 160ms ease, transform 160ms ease;
}
.choice-card .ic {
  width: 36px; height: 36px;
  display: grid; place-items: center;
  background: #eef3f7;
  border: 1.5px solid #e3e7ec;
  color: var(--ink);
}
.choice-card.selected {
  border-color: var(--accent);
  background: #f0f7fc;
  box-shadow: 4px 4px 0 0 var(--accent);
}
.choice-card.selected .ic {
  background: var(--accent); color: #fff; border-color: var(--accent);
}
.choice-card:hover:not(.selected) {
  border-color: var(--ink);
  transform: translate(-1px, -1px);
}

.choice-card .sub {
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: var(--muted);
  margin-top: 2px;
}

.input-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 16px;
}
.input-row.full { grid-template-columns: 1fr; }
.fpc-input {
  font: 600 15px var(--body);
  padding: 14px 16px;
  border: 2px solid #e3e7ec;
  border-radius: 2px;
  background: #fff;
  color: var(--ink);
  width: 100%;
}
.fpc-input:focus {
  outline: none;
  border-color: var(--accent);
}

.wizard-foot {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
}
.btn-link {
  background: transparent;
  border: none;
  font: 700 italic 14px var(--body);
  letter-spacing: 0.04em;
  color: var(--muted);
  text-transform: uppercase;
  padding: 8px;
  cursor: pointer;
}
.btn-link:disabled { opacity: 0.3; cursor: not-allowed; }

/* Single form variant */
.single-form {
  background: #fff;
  color: var(--ink);
  border: 2px solid #fff;
  box-shadow: 14px 14px 0 0 var(--accent);
  padding: 36px;
}
.single-form h3 {
  font-family: var(--display);
  font-style: italic;
  font-weight: 800;
  font-size: 44px;
  margin: 0 0 6px;
  text-transform: uppercase;
}

/* Success screen */
.wizard-success {
  text-align: center;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  flex: 1;
  padding: 20px 0;
}
.wizard-success .badge {
  width: 88px; height: 88px;
  display: grid; place-items: center;
  background: var(--accent);
  color: #fff;
  border: 3px solid var(--ink);
  box-shadow: 6px 6px 0 0 var(--ink);
  margin-bottom: 24px;
}
.wizard-success h3 {
  font-family: var(--display);
  font-style: italic;
  font-weight: 800;
  font-size: 56px;
  text-transform: uppercase;
  margin: 0 0 8px;
  line-height: 0.96;
}
.wizard-success p {
  color: var(--muted);
  margin: 0 0 20px;
  font-size: 15px;
}
.wizard-success .call {
  display: inline-flex;
  align-items: center; gap: 10px;
  padding: 14px 22px;
  border: 2px solid var(--ink);
  background: var(--accent);
  color: #fff;
  font-family: var(--body);
  font-weight: 800;
  font-style: italic;
  letter-spacing: 0.02em;
  box-shadow: 4px 4px 0 0 var(--ink);
}

@media (max-width: 980px) {
  .fpc-funnel-inner { grid-template-columns: 1fr; gap: 40px; }
}
@media (max-width: 540px) {
  .choice-grid, .choice-grid.three { grid-template-columns: 1fr; }
  .input-row { grid-template-columns: 1fr; }
}
`;

const PEST_OPTIONS = [
  { id: 'general', label: 'General pests',   sub: 'Ants, spiders, roaches', icon: 'Bug' },
  { id: 'termite', label: 'Termites',         sub: 'Wood damage / swarmers', icon: 'Termite' },
  { id: 'rodent',  label: 'Rodents / wildlife', sub: 'Mice, rats, attic noise', icon: 'Rat' },
  { id: 'commercial', label: 'Commercial',    sub: 'Business or property',  icon: 'Building' },
];

const PROPERTY_OPTIONS = [
  { id: 'sm', label: 'Under 2,000 sqft', sub: 'Apartment / starter home', icon: 'House' },
  { id: 'md', label: '2,000 – 3,500 sqft', sub: 'Most NWA homes',        icon: 'House' },
  { id: 'lg', label: '3,500+ sqft',     sub: 'Large home / acreage',     icon: 'House' },
];

const URGENCY_OPTIONS = [
  { id: 'now',  label: 'ASAP — today if possible', sub: 'Active issue', icon: 'Bolt' },
  { id: 'week', label: 'This week',                sub: 'Plan ahead',   icon: 'Calendar' },
  { id: 'soon', label: 'Just exploring',           sub: 'Getting quotes', icon: 'Check' },
];

function MultiStepWizard() {
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState({});
  const total = 4;

  const update = (k, v) => setData((d) => ({ ...d, [k]: v }));

  const canAdvance = () => {
    if (step === 0) return !!data.pest;
    if (step === 1) return !!data.property;
    if (step === 2) return !!data.urgency;
    if (step === 3) return data.first && data.phone && data.zip;
    return true;
  };

  const next = () => setStep((s) => Math.min(total, s + 1));
  const back = () => setStep((s) => Math.max(0, s - 1));

  if (step === total) {
    return (
      <div className="wizard">
        <div className="wizard-success">
          <div className="badge"><Ic.Check width="40" height="40" /></div>
          <h3>You&rsquo;re in.</h3>
          <p>We&rsquo;ll text {data.first || 'you'} within the hour with your custom quote. No card, no pressure.</p>
          <a className="call" href="tel:4794040800">
            <Ic.Phone /> Or call (479) 404-0800
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="wizard">
      <div className="wizard-head">
        <span className="step">Step {step + 1} of {total}</span>
        <span className="timer">~ 30 seconds</span>
      </div>
      <div className="wizard-progress">
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} className={`bar ${i < step ? 'done' : i === step ? 'current' : ''}`} />
        ))}
      </div>

      {step === 0 && (
        <React.Fragment>
          <h3 className="wizard-title">What&rsquo;s bugging you?</h3>
          <p className="wizard-sub">Pick the closest match. We&rsquo;ll fine-tune on the call.</p>
          <div className="choice-grid">
            {PEST_OPTIONS.map((o) => {
              const Icon = Ic[o.icon];
              return (
                <button key={o.id} type="button"
                  className={`choice-card ${data.pest === o.id ? 'selected' : ''}`}
                  onClick={() => { update('pest', o.id); setTimeout(next, 200); }}
                >
                  <div className="ic"><Icon width="20" height="20" /></div>
                  <div>{o.label}<span className="sub">{o.sub}</span></div>
                </button>
              );
            })}
          </div>
        </React.Fragment>
      )}

      {step === 1 && (
        <React.Fragment>
          <h3 className="wizard-title">How big is your place?</h3>
          <p className="wizard-sub">Helps us right-size the treatment.</p>
          <div className="choice-grid three">
            {PROPERTY_OPTIONS.map((o) => {
              const Icon = Ic[o.icon];
              return (
                <button key={o.id} type="button"
                  className={`choice-card ${data.property === o.id ? 'selected' : ''}`}
                  onClick={() => { update('property', o.id); setTimeout(next, 200); }}
                  style={{ flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}
                >
                  <div className="ic"><Icon /></div>
                  <div>{o.label}<span className="sub">{o.sub}</span></div>
                </button>
              );
            })}
          </div>
        </React.Fragment>
      )}

      {step === 2 && (
        <React.Fragment>
          <h3 className="wizard-title">How soon do you need us?</h3>
          <p className="wizard-sub">No wrong answer — just helps us prioritize.</p>
          <div className="choice-grid three">
            {URGENCY_OPTIONS.map((o) => {
              const Icon = Ic[o.icon];
              return (
                <button key={o.id} type="button"
                  className={`choice-card ${data.urgency === o.id ? 'selected' : ''}`}
                  onClick={() => { update('urgency', o.id); setTimeout(next, 200); }}
                  style={{ flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}
                >
                  <div className="ic"><Icon /></div>
                  <div>{o.label}<span className="sub">{o.sub}</span></div>
                </button>
              );
            })}
          </div>
        </React.Fragment>
      )}

      {step === 3 && (
        <React.Fragment>
          <h3 className="wizard-title">Where do we send it?</h3>
          <p className="wizard-sub">We&rsquo;ll text your custom quote within the hour.</p>
          <div className="input-row">
            <input className="fpc-input" placeholder="First name"
              value={data.first || ''} onChange={(e) => update('first', e.target.value)} />
            <input className="fpc-input" placeholder="Last name"
              value={data.last || ''} onChange={(e) => update('last', e.target.value)} />
          </div>
          <div className="input-row">
            <input className="fpc-input" placeholder="Phone" type="tel"
              value={data.phone || ''} onChange={(e) => update('phone', e.target.value)} />
            <input className="fpc-input" placeholder="ZIP"
              value={data.zip || ''} onChange={(e) => update('zip', e.target.value)} />
          </div>
          <div className="input-row full">
            <input className="fpc-input" placeholder="Email (optional)"
              value={data.email || ''} onChange={(e) => update('email', e.target.value)} />
          </div>
        </React.Fragment>
      )}

      <div className="wizard-foot">
        <button type="button" className="btn-link" onClick={back} disabled={step === 0}>
          ← Back
        </button>
        {step === 3 ? (
          <button type="button" className="btn" disabled={!canAdvance()} onClick={next}>
            Send My Quote <Ic.Arrow />
          </button>
        ) : (
          <button type="button" className="btn" disabled={!canAdvance()} onClick={next}
            style={{ visibility: canAdvance() ? 'visible' : 'hidden' }}>
            Continue <Ic.Arrow />
          </button>
        )}
      </div>
    </div>
  );
}

function SingleForm() {
  const [done, setDone] = React.useState(false);
  if (done) {
    return (
      <div className="single-form">
        <div className="wizard-success" style={{ padding: 0 }}>
          <div className="badge"><Ic.Check width="40" height="40" /></div>
          <h3>You&rsquo;re in.</h3>
          <p>We&rsquo;ll text you within the hour with your quote.</p>
          <a className="call" href="tel:4794040800">
            <Ic.Phone /> Or call (479) 404-0800
          </a>
        </div>
      </div>
    );
  }
  return (
    <form className="single-form" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
      <h3>Get a Free Quote</h3>
      <p style={{ color: 'var(--muted)', margin: '0 0 22px', fontSize: 14 }}>
        30 seconds. No card. We&rsquo;ll call back within the hour.
      </p>
      <div className="input-row">
        <input className="fpc-input" required placeholder="First name" />
        <input className="fpc-input" required placeholder="Last name" />
      </div>
      <div className="input-row">
        <input className="fpc-input" required placeholder="Phone" type="tel" />
        <input className="fpc-input" required placeholder="ZIP" />
      </div>
      <div className="input-row full">
        <input className="fpc-input" placeholder="Email (optional)" />
      </div>
      <div className="input-row full">
        <select className="fpc-input" defaultValue="">
          <option value="" disabled>What&rsquo;s bugging you?</option>
          <option>General pests (ants, spiders, roaches)</option>
          <option>Termites</option>
          <option>Rodents / wildlife</option>
          <option>Commercial property</option>
          <option>Other</option>
        </select>
      </div>
      <button type="submit" className="btn" style={{ width: '100%', marginTop: 10 }}>
        Send My Free Quote <Ic.Arrow />
      </button>
      <p style={{ fontSize: 12, color: 'var(--muted)', textAlign: 'center', marginTop: 14 }}>
        Your info stays with us. No spam, no high-pressure sales.
      </p>
    </form>
  );
}

function Funnel({ variant }) {
  return (
    <React.Fragment>
      <style>{funnelStyles}</style>
      <section id="quote" className="fpc-funnel">
        <div className="grain soft" />
        <div className="fpc-funnel-inner">
          <div>
            <div className="eyebrow">FREE QUOTE</div>
            <h2>
              Get a quote<br />
              in <span className="accent">30 seconds.</span>
            </h2>
            <p className="lead">
              Tell us what&rsquo;s bugging you. We&rsquo;ll text your custom quote within the hour &mdash; no card, no pressure, no surprises.
            </p>
            <div className="funnel-trust">
              <div className="row"><span className="ic"><Ic.Check width="14" height="14" /></span> Pest-free guarantee &mdash; or we come back free.</div>
              <div className="row"><span className="ic"><Ic.Check width="14" height="14" /></span> Locally owned, family-run, NWA-based.</div>
              <div className="row"><span className="ic"><Ic.Check width="14" height="14" /></span> Trained, certified, background-checked techs.</div>
              <div className="row"><span className="ic"><Ic.Check width="14" height="14" /></span> 1,600+ five-star reviews from your neighbors.</div>
            </div>
          </div>

          {variant === 'multi' ? <MultiStepWizard /> : <SingleForm />}
        </div>
      </section>
    </React.Fragment>
  );
}

window.Funnel = Funnel;
