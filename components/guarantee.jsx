// Guarantee — big bold promise band, magnetic CTA.
const guaranteeStyles = `
.fpc-guarantee {
  position: relative;
  padding: 120px var(--pad-x);
  background: var(--ink);
  color: #fff;
  overflow: hidden;
  isolation: isolate;
}

.fpc-guarantee .scroller-bg {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  pointer-events: none;
  z-index: 0;
  opacity: 0.06;
  user-select: none;
}
.fpc-guarantee .scroller-bg .bg-line {
  white-space: nowrap;
  font-family: var(--display);
  font-style: italic;
  font-weight: 800;
  font-size: 320px;
  line-height: 0.85;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  color: #fff;
  animation: marquee 50s linear infinite;
}

.fpc-guarantee .container {
  position: relative;
  z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 56px;
  align-items: center;
}
.guarantee-seal {
  position: relative;
  width: 240px; height: 240px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, var(--accent-2), var(--accent) 70%);
  display: grid; place-items: center;
  color: #fff;
  border: 4px solid #fff;
  box-shadow:
    0 0 0 6px var(--ink),
    14px 14px 0 6px var(--accent-2);
}
.guarantee-seal .inner {
  text-align: center;
  font-family: var(--display);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 13px;
}
.guarantee-seal .inner .big {
  font-style: italic;
  font-size: 64px;
  display: block;
  line-height: 0.9;
  margin-bottom: 6px;
}
.guarantee-seal .ring-text {
  position: absolute;
  inset: 0;
  animation: rot 18s linear infinite;
}
@keyframes rot { to { transform: rotate(360deg); } }

.fpc-guarantee h2 {
  font-family: var(--display);
  font-style: italic;
  font-weight: 800;
  font-size: clamp(48px, 7vw, 112px);
  line-height: 0.9;
  text-transform: uppercase;
  margin: 0 0 24px;
  letter-spacing: -0.005em;
}
.fpc-guarantee h2 .accent { color: var(--accent-2); }
.fpc-guarantee .lead {
  font-size: 18px;
  line-height: 1.6;
  color: rgba(255,255,255,0.86);
  max-width: 600px;
  margin: 0 0 32px;
}

.guarantee-points {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 0 0 36px;
}
.guarantee-points .pt {
  border-top: 2px solid var(--accent-2);
  padding-top: 18px;
}
.guarantee-points .pt .num {
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.22em;
  color: var(--accent-2);
  display: block;
  margin-bottom: 8px;
}
.guarantee-points .pt h4 {
  font-family: var(--display);
  font-style: italic;
  font-weight: 800;
  font-size: 24px;
  margin: 0 0 6px;
  text-transform: uppercase;
}
.guarantee-points .pt p {
  font-size: 14px;
  margin: 0;
  color: rgba(255,255,255,0.78);
  line-height: 1.5;
}

@media (max-width: 980px) {
  .fpc-guarantee .container { grid-template-columns: 1fr; }
  .guarantee-points { grid-template-columns: 1fr; }
}
`;

function Guarantee() {
  return (
    <React.Fragment>
      <style>{guaranteeStyles}</style>
      <section className="fpc-guarantee">
        <div className="scroller-bg">
          <div className="bg-line">Pest-Free Guarantee · Pest-Free Guarantee · Pest-Free Guarantee · </div>
        </div>
        <div className="grain soft" />

        <div className="container">
          <div className="guarantee-seal">
            <div className="inner">
              <span className="big">100%</span>
              Pest-Free<br />Guarantee
            </div>
          </div>

          <div>
            <div className="eyebrow">Our Promise</div>
            <h2>
              If the bugs come back, <span className="accent">so do we.</span><br />
              On the house.
            </h2>
            <p className="lead">
              Between scheduled visits, if pests show up, we show up &mdash; the same week, no extra charge, no questions asked. That&rsquo;s the deal.
            </p>

            <div className="guarantee-points">
              <div className="pt">
                <span className="num">01 / Coverage</span>
                <h4>Between visits</h4>
                <p>See a bug after we&rsquo;ve treated? Call. We&rsquo;re back at no cost.</p>
              </div>
              <div className="pt">
                <span className="num">02 / Speed</span>
                <h4>Same-week return</h4>
                <p>Re-treats scheduled within 3 business days of your call.</p>
              </div>
              <div className="pt">
                <span className="num">03 / Honesty</span>
                <h4>On us, not you</h4>
                <p>We back every visit with free re-treats. If we still can&rsquo;t fix the problem, we refund your last service &mdash; no questions asked.</p>
              </div>
            </div>

            <a className="btn btn--on-dark" href="#quote">
              Start Your Service <Ic.Arrow />
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

window.Guarantee = Guarantee;
