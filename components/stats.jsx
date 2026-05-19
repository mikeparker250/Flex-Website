// Stats strip — animated count-up + headline.
const statsStyles = `
.fpc-stats {
  background: var(--ink);
  color: #fff;
  padding: 80px var(--pad-x);
  position: relative;
  overflow: hidden;
}
.fpc-stats .container {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 64px;
  align-items: center;
  position: relative;
  z-index: 2;
}
.fpc-stats h2 {
  font-family: var(--display);
  font-style: italic;
  font-weight: 800;
  font-size: clamp(40px, 5.5vw, 88px);
  line-height: 0.9;
  letter-spacing: 0;
  margin: 0 0 24px;
  text-transform: uppercase;
}
.fpc-stats h2 .accent { color: var(--accent-2); }
.fpc-stats .lead { color: rgba(255,255,255,0.78); max-width: 480px; }

.fpc-stat-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  border: 2px solid rgba(255,255,255,0.14);
}
.fpc-stat-cell {
  padding: 28px 28px;
  border: 1px solid rgba(255,255,255,0.08);
  margin: -1px 0 0 -1px;
  position: relative;
}
.fpc-stat-cell .num {
  font-family: var(--display);
  font-style: italic;
  font-weight: 800;
  font-size: clamp(56px, 6vw, 96px);
  line-height: 1;
  letter-spacing: 0;
  background: linear-gradient(180deg, #fff 0%, var(--accent-2) 110%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.fpc-stat-cell .lbl {
  font-family: var(--body);
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.55);
  margin-top: 8px;
}
.fpc-stat-cell .sub {
  font-size: 13px;
  color: rgba(255,255,255,0.72);
  margin-top: 12px;
  line-height: 1.5;
}
.fpc-stat-cell .corner {
  position: absolute;
  top: 12px; right: 12px;
  font: 700 11px/1 var(--mono);
  letter-spacing: 0.18em;
  color: rgba(255,255,255,0.35);
}

@media (max-width: 900px) {
  .fpc-stats .container { grid-template-columns: 1fr; gap: 36px; }
}
`;

function useCountUp(target, decimals = 0, duration = 1400) {
  const [val, setVal] = React.useState(0);
  const ref = React.useRef(null);
  const started = React.useRef(false);

  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setVal(target * eased);
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [target, duration]);

  return [val.toFixed(decimals), ref];
}

function Stat({ value, decimals, prefix, suffix, label, sub, idx }) {
  const [v, ref] = useCountUp(value, decimals);
  return (
    <div className="fpc-stat-cell" ref={ref}>
      <div className="corner">0{idx}</div>
      <div className="num">{prefix}{v}{suffix}</div>
      <div className="lbl">{label}</div>
      {sub && <div className="sub">{sub}</div>}
    </div>
  );
}

function Stats() {
  return (
    <React.Fragment>
      <style>{statsStyles}</style>
      <section className="fpc-stats">
        <div className="grain soft" />
        <div className="container">
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>By the numbers</div>
            <h2>
              Locally owned.<br />
              <span className="accent">Loudly trusted.</span>
            </h2>
            <p className="lead">
              We&rsquo;re your Northwest Arkansas neighbors &mdash; the family-owned crew that families call when they want pest control done right the first time.
            </p>
          </div>
          <div className="fpc-stat-grid">
            <Stat idx={1} value={1600} suffix="+" label="5-star reviews"  sub="Google, Nextdoor & Facebook" />
            <Stat idx={2} value={98}   suffix="%"  label="Retention rate" sub="Customers who stay year-over-year" />
            <Stat idx={3} value={24}   suffix="h"  label="Response time"  sub="Same-day, most days" />
            <Stat idx={4} value={100}  suffix="%"  label="Guarantee"      sub="We come back free until you&rsquo;re pest-free" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

window.Stats = Stats;
