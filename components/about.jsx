// About — family story, layered image + offset blue frame.
const aboutStyles = `
.fpc-about {
  padding: var(--section-y) var(--pad-x);
  background: var(--paper);
  position: relative;
  overflow: hidden;
}
.fpc-about .inner {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: 96px;
  align-items: center;
}
.fpc-about .img-stack {
  position: relative;
  aspect-ratio: 4 / 5;
  max-width: 560px;
}
.fpc-about .img-stack .frame {
  position: absolute;
  inset: 0;
  background: rgba(53,178,255, 0.55);
  transform: translate(-22px, 22px);
  z-index: 0;
}
.fpc-about .img-stack .photo {
  position: absolute; inset: 0;
  background-size: cover; background-position: center;
  border: 4px solid var(--ink);
  z-index: 1;
  filter: saturate(105%) contrast(105%);
}
.fpc-about .img-stack .badge {
  position: absolute;
  bottom: -28px; right: -28px;
  width: 180px; height: 180px;
  border-radius: 50%;
  background: var(--ink);
  color: #fff;
  display: grid;
  place-items: center;
  border: 3px solid #fff;
  box-shadow: 6px 6px 0 0 var(--accent);
  z-index: 2;
  text-align: center;
  font-family: var(--display);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 14px;
  animation: spin 22s linear infinite;
}
.fpc-about .img-stack .badge .num {
  font-style: italic;
  font-size: 44px;
  display: block;
  line-height: 1;
  color: var(--accent-2);
  margin-bottom: 2px;
}
@keyframes spin {
  /* not actually spinning the text — keeping legible */
}
.fpc-about .img-stack .tape {
  top: -14px;
  left: 32px;
}

.fpc-about h2 {
  font-family: var(--display);
  font-style: italic;
  font-weight: 800;
  font-size: clamp(48px, 6.5vw, 104px);
  line-height: 0.9;
  margin: 12px 0 24px;
  text-transform: uppercase;
}
.fpc-about h2 .accent { color: var(--accent); }
.fpc-about p.body { color: #2a2f37; margin: 0 0 16px; font-size: 17px; line-height: 1.65; }

.values {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin: 28px 0 32px;
}
.value {
  background: #fff;
  border: 2px solid var(--ink);
  box-shadow: 4px 4px 0 0 var(--ink);
  padding: 16px 18px;
}
.value .ic {
  width: 32px; height: 32px;
  display: grid; place-items: center;
  background: var(--accent);
  color: #fff;
  margin-bottom: 10px;
}
.value h4 {
  margin: 0 0 4px;
  font: 700 italic 18px/1.2 var(--body);
  letter-spacing: 0.02em;
}
.value p {
  margin: 0;
  font-size: 13px;
  color: #4a5260;
  line-height: 1.5;
}

@media (max-width: 980px) {
  .fpc-about .inner { grid-template-columns: 1fr; gap: 56px; }
  .values { grid-template-columns: 1fr; }
}
`;

function About() {
  return (
    <React.Fragment>
      <style>{aboutStyles}</style>
      <section id="about" className="fpc-about">
        <div className="inner">
          <div className="img-stack">
            <div className="tape">Est. NWA</div>
            <div className="frame" />
            <div className="photo" style={{ backgroundImage: 'url(assets/family-portrait.jpg)' }} />
            <div className="badge">
              <div>
                <span className="num">100%</span>
                Family<br />Owned
              </div>
            </div>
          </div>

          <div>
            <div className="eyebrow on-light">About Flex</div>
            <h2>
              Built for the<br />
              families <span className="accent">we live next to.</span>
            </h2>
            <p className="body">
              We started Flex because we were tired of pest companies that treated customers like a number. We&rsquo;re your neighbors &mdash; we coach the same little league, shop at the same Walmart, send our kids to the same schools.
            </p>
            <p className="body">
              The job is simple: show up on time, use products we&rsquo;d use in our own homes, and stand behind the work. That&rsquo;s how 1,600+ NWA families turned into reviewers, then referrers, then friends.
            </p>

            <div className="values">
              <div className="value">
                <div className="ic"><Ic.Shield width="16" height="16" /></div>
                <h4>Do what&rsquo;s right.</h4>
                <p>We use products we&rsquo;d use in our own homes &mdash; and we&rsquo;re honest when you don&rsquo;t need us.</p>
              </div>
              <div className="value">
                <div className="ic"><Ic.Bolt width="16" height="16" /></div>
                <h4>Be the wow factor.</h4>
                <p>Same-day response, premium service, and techs who actually care how it looks when they leave.</p>
              </div>
              <div className="value">
                <div className="ic"><Ic.House width="16" height="16" /></div>
                <h4>Build people.</h4>
                <p>We invest in our crew so you get a tech who&rsquo;s sharp, kind, and proud to be here.</p>
              </div>
              <div className="value">
                <div className="ic"><Ic.Check width="16" height="16" /></div>
                <h4>Be sincere.</h4>
                <p>Straight prices, straight talk, no fine print, no high-pressure sales. Ever.</p>
              </div>
            </div>

            <a className="btn" href="#quote">
              See Why NWA Picks Flex <Ic.Arrow />
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

window.About = About;
