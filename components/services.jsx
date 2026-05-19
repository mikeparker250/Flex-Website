// Services section — 4 magnetic cards with tilt + image reveal.
const servicesStyles = `
.fpc-services {
  padding: var(--section-y) var(--pad-x);
  background: var(--paper);
}
.fpc-services .header {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 56px;
  align-items: end;
  margin-bottom: 56px;
  max-width: 1280px;
  margin-left: auto; margin-right: auto;
}
.fpc-services h2 {
  font-family: var(--display);
  font-style: italic;
  font-weight: 800;
  font-size: clamp(48px, 6.5vw, 104px);
  line-height: 0.9;
  margin: 12px 0 0;
  text-transform: uppercase;
  letter-spacing: -0.005em;
}
.fpc-services h2 .strike {
  position: relative; display: inline-block;
}
.fpc-services h2 .strike::before {
  content: "";
  position: absolute;
  left: -0.05em; right: -0.05em; top: 56%;
  height: 0.22em;
  background: var(--accent-2);
  opacity: 0.6;
  transform: skew(-10deg);
  z-index: -1;
}
.fpc-services .desc {
  max-width: 440px;
  font-size: 17px;
  line-height: 1.55;
  color: #2a2f37;
}

.svc-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1280px;
  margin: 0 auto;
}
.svc-card {
  position: relative;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background: var(--ink);
  color: #fff;
  border: 2px solid var(--ink);
  box-shadow: 8px 8px 0 0 var(--ink);
  transition: transform 240ms cubic-bezier(.2,.7,.2,1), box-shadow 240ms ease;
  cursor: pointer;
  will-change: transform;
}
.svc-card:hover {
  transform: translate(-4px, -6px);
  box-shadow: 14px 14px 0 0 var(--accent);
}
.svc-card .img {
  position: absolute; inset: 0;
  background-size: cover;
  background-position: center;
  transition: transform 600ms cubic-bezier(.2,.7,.2,1), filter 240ms ease;
  filter: saturate(105%) brightness(0.8);
}
.svc-card:hover .img {
  transform: scale(1.1);
  filter: saturate(115%) brightness(0.92);
}
.svc-card .veil {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(2,2,2,0.1) 0%, rgba(2,2,2,0.45) 45%, rgba(2,2,2,0.92) 100%);
  z-index: 1;
}
.svc-card .blue-veil {
  position: absolute; inset: 0;
  background: linear-gradient(160deg, var(--accent) 0%, transparent 60%);
  opacity: 0;
  mix-blend-mode: screen;
  transition: opacity 240ms ease;
  z-index: 1;
}
.svc-card:hover .blue-veil { opacity: 0.55; }

.svc-card .body {
  position: absolute; inset: 0;
  z-index: 2;
  padding: 24px;
  display: flex; flex-direction: column;
  justify-content: space-between;
}
.svc-card .top { display: flex; justify-content: space-between; align-items: flex-start; }
.svc-card .idx {
  font: 700 11px/1 var(--mono);
  letter-spacing: 0.24em;
  color: rgba(255,255,255,0.6);
}
.svc-card .icon-chip {
  width: 44px; height: 44px;
  display: grid; place-items: center;
  background: var(--accent);
  color: #fff;
  border: 2px solid #fff;
  box-shadow: 3px 3px 0 0 #fff;
}
.svc-card h3 {
  font-family: var(--display);
  font-style: italic;
  font-weight: 800;
  font-size: clamp(28px, 2.4vw, 40px);
  line-height: 0.96;
  text-transform: uppercase;
  margin: 0 0 10px;
  letter-spacing: 0;
}
.svc-card p {
  font-size: 14px;
  line-height: 1.5;
  margin: 0 0 14px;
  color: rgba(255,255,255,0.85);
  opacity: 0;
  max-height: 0;
  transition: opacity 220ms ease, max-height 240ms ease, margin 220ms ease;
}
.svc-card:hover p {
  opacity: 1;
  max-height: 100px;
}
.svc-card .cta {
  font: 700 italic 13px/1 var(--body);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--accent-2);
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

@media (max-width: 1100px) {
  .svc-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .svc-grid { grid-template-columns: 1fr; }
  .fpc-services .header { grid-template-columns: 1fr; gap: 24px; }
}
`;

const SERVICES = [
  {
    title: 'General\nPest Control',
    img: 'assets/service-general.jpg',
    desc: 'Monthly or quarterly defense against ants, spiders, roaches, and the usual suspects. Starting at $55/mo.',
    icon: 'Bug',
  },
  {
    title: 'Termite\nDefense',
    img: 'assets/service-termites.jpg',
    desc: 'Annual inspection + treatment. Detect early, treat fast, protect what matters most.',
    icon: 'Termite',
  },
  {
    title: 'Wildlife\nRemoval',
    img: 'assets/service-extra.jpg',
    desc: 'Humane removal of rodents, squirrels, raccoons, and other unwelcome guests. Sealed for good.',
    icon: 'Rat',
  },
  {
    title: 'Commercial',
    img: 'assets/service-ants.jpg',
    desc: 'Restaurants, retail, offices, multi-family. Flexible service windows, IPM, full reporting.',
    icon: 'Building',
  },
];

function Services() {
  return (
    <React.Fragment>
      <style>{servicesStyles}</style>
      <section id="services" className="fpc-services">
        <div className="header">
          <div>
            <div className="eyebrow on-light">Services</div>
            <h2>
              Built to <span className="strike">crush</span><br />
              the pests that<br />
              call NWA home.
            </h2>
          </div>
          <p className="desc">
            From the ants in your pantry to the termites in your studs &mdash; one local crew, one premium standard, one straightforward price. Every service backed by our pest-free guarantee.
          </p>
        </div>

        <div className="svc-grid">
          {SERVICES.map((s, i) => {
            const Icon = Ic[s.icon];
            return (
              <article className="svc-card" key={i}>
                <div className="img" style={{ backgroundImage: `url(${s.img})` }} />
                <div className="veil" />
                <div className="blue-veil" />
                <div className="body">
                  <div className="top">
                    <div className="idx">0{i + 1} / 04</div>
                    <div className="icon-chip"><Icon /></div>
                  </div>
                  <div>
                    <h3>{s.title.split('\n').map((line, j) => (
                      <React.Fragment key={j}>{line}{j === 0 && <br />}</React.Fragment>
                    ))}</h3>
                    <p>{s.desc}</p>
                    <span className="cta">Learn more <Ic.Arrow width="14" height="14" /></span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
}

window.Services = Services;
