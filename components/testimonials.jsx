// Testimonials — sliding card carousel with snap.
const testimonialsStyles = `
.fpc-testimonials {
  padding: var(--section-y) var(--pad-x);
  background: var(--ink);
  color: #fff;
  position: relative;
  overflow: hidden;
}
.fpc-testimonials .header {
  max-width: 1280px;
  margin: 0 auto 48px;
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 32px;
}
.fpc-testimonials h2 {
  font-family: var(--display);
  font-style: italic;
  font-weight: 800;
  font-size: clamp(48px, 6.5vw, 104px);
  line-height: 0.9;
  text-transform: uppercase;
  margin: 12px 0 0;
}
.fpc-testimonials h2 .accent { color: var(--accent-2); }
.fpc-testimonials .header .right {
  text-align: right;
  font-family: var(--body);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.08em;
  color: rgba(255,255,255,0.6);
}
.fpc-testimonials .header .right .big {
  display: block;
  font-family: var(--display);
  font-style: italic;
  font-size: 48px;
  line-height: 1;
  letter-spacing: 0;
  color: #fff;
  margin-bottom: 2px;
}

.t-rail {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1280px;
  margin: 0 auto;
}
.t-card {
  background: #0e1116;
  border: 2px solid rgba(255,255,255,0.1);
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  transition: transform 200ms ease, border 200ms ease, box-shadow 200ms ease;
}
.t-card:hover {
  transform: translate(-3px, -3px);
  border-color: var(--accent-2);
  box-shadow: 8px 8px 0 0 var(--accent);
}
.t-card .stars { color: #ffd60a; }
.t-card .quote {
  font-family: var(--body);
  font-size: 17px;
  line-height: 1.55;
  color: rgba(255,255,255,0.92);
  flex: 1;
}
.t-card .who {
  display: flex; align-items: center; gap: 12px;
  border-top: 1px solid rgba(255,255,255,0.08);
  padding-top: 16px;
  margin-top: auto;
}
.t-card .avatar {
  width: 40px; height: 40px;
  border-radius: 50%;
  display: grid; place-items: center;
  background: var(--accent);
  color: #fff;
  font-weight: 800;
  font-size: 14px;
}
.t-card .who .name {
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.02em;
}
.t-card .who .meta {
  font-size: 12px;
  color: rgba(255,255,255,0.55);
  letter-spacing: 0.04em;
}
.t-card .source {
  position: absolute;
  top: 18px; right: 18px;
  font: 700 10px var(--mono);
  letter-spacing: 0.18em;
  color: rgba(255,255,255,0.4);
}

@media (max-width: 980px) {
  .t-rail { grid-template-columns: 1fr; }
  .fpc-testimonials .header { flex-direction: column; align-items: flex-start; }
  .fpc-testimonials .header .right { text-align: left; }
}
`;

const TESTS = [
  {
    quote: "Tech showed up in a clean truck, in uniform, on time. Treated our place top to bottom, sealed two spots I didn't even know about. We haven't seen a bug since.",
    name: "Jordan H.",
    meta: "Bentonville · Google",
    src: "GOOGLE",
    initials: "JH",
  },
  {
    quote: "Honestly the best service I've ever had — and I'm picky. Got rid of an ant problem the other guys couldn't. Worth every dollar.",
    name: "Megan T.",
    meta: "Rogers · Nextdoor",
    src: "NEXTDOOR",
    initials: "MT",
  },
  {
    quote: "We had a termite scare. They came out same day, gave it to me straight, and treated within 48 hours. Couldn't ask for better.",
    name: "Anthony G.",
    meta: "Fayetteville · Google",
    src: "GOOGLE",
    initials: "AG",
  },
  {
    quote: "Friendly, professional, and they care about the result. My kids actually wave when the truck pulls up.",
    name: "Sarah V.",
    meta: "Springdale · Facebook",
    src: "FACEBOOK",
    initials: "SV",
  },
  {
    quote: "Cancelled my big-name service after one visit from Flex. The difference is night and day. These guys actually care.",
    name: "Marcus P.",
    meta: "Bentonville · Google",
    src: "GOOGLE",
    initials: "MP",
  },
  {
    quote: "$55/mo and I haven't thought about a bug in a year. That's the entire job, and they nail it every time.",
    name: "Rachel K.",
    meta: "Bella Vista · Google",
    src: "GOOGLE",
    initials: "RK",
  },
];

function Testimonials() {
  return (
    <React.Fragment>
      <style>{testimonialsStyles}</style>
      <section className="fpc-testimonials">
        <div className="grain soft" />
        <div className="header">
          <div>
            <div className="eyebrow">Reviews</div>
            <h2>
              1,600+ NWA neighbors<br />
              can&rsquo;t be <span className="accent">wrong.</span>
            </h2>
          </div>
          <div className="right">
            <span className="big">4.9 ★</span>
            Average across Google,<br />Facebook & Nextdoor
          </div>
        </div>

        <div className="t-rail">
          {TESTS.map((t, i) => (
            <article className="t-card" key={i}>
              <span className="source">{t.src}</span>
              <span className="stars">★★★★★</span>
              <p className="quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="who">
                <div className="avatar">{t.initials}</div>
                <div>
                  <div className="name">{t.name}</div>
                  <div className="meta">{t.meta}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
}

window.Testimonials = Testimonials;
