// Final CTA — full-bleed split with hero CTA + price hook.
const finalCtaStyles = `
.fpc-finalcta {
  position: relative;
  padding: 140px var(--pad-x);
  background: var(--ink);
  color: #fff;
  overflow: hidden;
  text-align: center;
}
.fpc-finalcta::before {
  content: "";
  position: absolute; inset: 0;
  background: url(assets/community.jpg) center / cover no-repeat;
  filter: saturate(110%) contrast(105%);
  opacity: 0.55;
  z-index: 0;
}
.fpc-finalcta::after {
  content: "";
  position: absolute; inset: 0;
  background:
    linear-gradient(180deg, rgba(2,2,2,0.5), rgba(2,2,2,0.85)),
    linear-gradient(135deg, var(--accent) 0%, transparent 60%);
  opacity: 0.95;
  z-index: 1;
}

.fpc-finalcta .inner {
  position: relative;
  z-index: 2;
  max-width: 1000px;
  margin: 0 auto;
}
.fpc-finalcta h2 {
  font-family: var(--display);
  font-style: italic;
  font-weight: 800;
  font-size: clamp(56px, 9vw, 168px);
  line-height: 0.86;
  text-transform: uppercase;
  letter-spacing: -0.005em;
  margin: 0 0 24px;
}
.fpc-finalcta h2 .strike { position: relative; display: inline-block; }
.fpc-finalcta h2 .strike::before {
  content: ""; position: absolute;
  left: -0.05em; right: -0.05em;
  bottom: 0.08em; height: 0.22em;
  background: var(--accent-2);
  opacity: 0.55;
  transform: skew(-10deg);
  z-index: -1;
}
.fpc-finalcta .price-row {
  display: inline-flex;
  align-items: baseline;
  gap: 14px;
  font-family: var(--display);
  font-style: italic;
  font-weight: 800;
  margin: 0 0 36px;
}
.fpc-finalcta .price-row .from {
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.7);
}
.fpc-finalcta .price-row .num {
  font-size: 96px;
  color: #fff;
  line-height: 1;
}
.fpc-finalcta .price-row .num .dollar {
  font-size: 56px;
  vertical-align: top;
  color: var(--accent-2);
}
.fpc-finalcta .price-row .per {
  font-size: 22px;
  letter-spacing: 0.04em;
  color: rgba(255,255,255,0.8);
}
.fpc-finalcta .ctas {
  display: inline-flex; gap: 16px; flex-wrap: wrap; justify-content: center;
}
.fpc-finalcta .note {
  margin-top: 28px;
  font-family: var(--body);
  font-size: 14px;
  color: rgba(255,255,255,0.75);
  letter-spacing: 0.04em;
}
.fpc-finalcta .note strong { color: #fff; }
`;

function FinalCTA() {
  return (
    <React.Fragment>
      <style>{finalCtaStyles}</style>
      <section className="fpc-finalcta">
        <div className="grain" />
        <div className="inner">
          <div className="eyebrow" style={{ marginBottom: 20 }}>Ready?</div>
          <h2>
            Let&rsquo;s make your house<br />
            a <span className="strike">bug-free zone.</span>
          </h2>
          <div className="price-row">
            <span className="from">Starting at only</span>
            <span className="num"><span className="dollar">$</span>55</span>
            <span className="per">/ month</span>
          </div>
          <div className="ctas">
            <a className="btn btn--on-dark btn--lg" href="#quote">
              Get a Free Quote <Ic.Arrow />
            </a>
            <a className="btn btn--ghost btn--lg" href="tel:4794040800" style={{ borderColor: '#fff' }}>
              <Ic.Phone /> (479) 404-0800
            </a>
          </div>
          <p className="note">
            <strong>No card required.</strong> &nbsp;·&nbsp; Same-day service available &nbsp;·&nbsp; Pest-free guarantee
          </p>
        </div>
      </section>
    </React.Fragment>
  );
}

window.FinalCTA = FinalCTA;
