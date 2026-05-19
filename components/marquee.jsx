// Marquee — infinite review crawl, two rows opposite directions.
const marqueeStyles = `
.fpc-marquee-wrap {
  background: var(--ink);
  color: #fff;
  padding: 18px 0;
  border-top: 1px solid rgba(255,255,255,0.06);
  border-bottom: 1px solid rgba(255,255,255,0.06);
  overflow: hidden;
  position: relative;
}
.fpc-marquee-wrap::before,
.fpc-marquee-wrap::after {
  content: "";
  position: absolute; top: 0; bottom: 0;
  width: 80px;
  z-index: 2;
  pointer-events: none;
}
.fpc-marquee-wrap::before { left: 0; background: linear-gradient(90deg, var(--ink), transparent); }
.fpc-marquee-wrap::after { right: 0; background: linear-gradient(-90deg, var(--ink), transparent); }

.fpc-track {
  display: flex;
  width: max-content;
  gap: 48px;
  font-family: var(--display);
  font-style: italic;
  font-weight: 700;
  font-size: clamp(24px, 2.4vw, 36px);
  letter-spacing: 0.02em;
  text-transform: uppercase;
  align-items: center;
  animation: marquee 50s linear infinite;
  white-space: nowrap;
}
.fpc-track.reverse { animation-direction: reverse; animation-duration: 65s; }
.fpc-track .dot {
  display: inline-block;
  width: 10px; height: 10px;
  background: var(--accent-2);
  border-radius: 50%;
  margin: 0 16px;
  flex-shrink: 0;
}
.fpc-track .quote {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  color: rgba(255,255,255,0.95);
}
.fpc-track .quote .stars {
  font-size: 16px;
  color: #ffd60a;
}
.fpc-track .quote .name {
  font-family: var(--body);
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.12em;
  color: rgba(255,255,255,0.55);
  text-transform: uppercase;
}

@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
`;

const REVIEWS = [
  ["Showed up same day. Killed it. Literally.", "Jordan H., Bentonville"],
  ["Best pest service in NWA, hands down.", "Megan T., Rogers"],
  ["Friendly tech, no smell, no bugs.", "Anthony G., Fayetteville"],
  ["Cancelled the other guys after one visit.", "Sarah V., Springdale"],
  ["Polite, on-time, and the bugs are gone.", "Marcus P., Bentonville"],
  ["Worth every penny of the $55.", "Rachel K., Bella Vista"],
  ["These guys care. You can feel it.", "David L., Cave Springs"],
  ["Termite scare \u2192 totally handled.", "Brittany W., Rogers"],
];

function Marquee() {
  const items = (
    <React.Fragment>
      {REVIEWS.map(([q, n], i) => (
        <span className="quote" key={i}>
          <span className="stars">★★★★★</span>
          &ldquo;{q}&rdquo;
          <span className="name">{n}</span>
          <span className="dot" />
        </span>
      ))}
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <style>{marqueeStyles}</style>
      <div className="fpc-marquee-wrap">
        <div className="fpc-track">
          {items}{items}
        </div>
      </div>
    </React.Fragment>
  );
}

window.Marquee = Marquee;
