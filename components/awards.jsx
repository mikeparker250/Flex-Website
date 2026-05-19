// Awards band — real "Best of NWA" badge images, 2024 spotlighted.

const awardsStyles = `
.fpc-awards {
  position: relative;
  background: var(--ink);
  color: #fff;
  padding: 64px var(--pad-x);
  border-top: 1px solid rgba(255,255,255,0.06);
  border-bottom: 1px solid rgba(255,255,255,0.06);
  overflow: hidden;
}
.fpc-awards::before {
  content: "";
  position: absolute; inset: 0;
  background: radial-gradient(ellipse at 78% 50%, rgba(53,178,255,0.10) 0%, transparent 60%);
  pointer-events: none;
}
.fpc-awards-inner {
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 56px;
}
.fpc-awards-copy { max-width: 540px; }
.fpc-awards-copy .eyebrow {
  font-family: var(--display);
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.22em;
  color: var(--accent-2);
  text-transform: uppercase;
  margin-bottom: 12px;
}
.fpc-awards-copy h3 {
  font-family: var(--display);
  font-style: italic;
  font-weight: 800;
  font-size: clamp(34px, 4.4vw, 64px);
  line-height: 0.92;
  margin: 0 0 18px;
  letter-spacing: -0.005em;
  text-transform: uppercase;
}
.fpc-awards-copy h3 .accent { color: var(--accent-2); }
.fpc-awards-copy .src {
  font-family: var(--body);
  font-size: 14px;
  color: rgba(255,255,255,0.6);
  font-style: italic;
  line-height: 1.5;
}

.medals {
  display: flex;
  align-items: center;
  gap: 16px;
}
.past-medals {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.medal {
  display: block;
  width: 100%;
  height: auto;
  filter: drop-shadow(0 6px 14px rgba(0,0,0,0.55));
  transition: transform 220ms ease;
}
.medal.past {
  width: 110px;
}
.medal.hero {
  width: 220px;
  filter: drop-shadow(0 0 24px rgba(53,178,255,0.55)) drop-shadow(0 10px 24px rgba(0,0,0,0.7));
}
.medal:hover { transform: translateY(-3px) rotate(-1deg); }
.medal.hero:hover { transform: translateY(-4px) rotate(-1.5deg); }

@media (max-width: 880px) {
  .fpc-awards-inner {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
    gap: 36px;
  }
  .fpc-awards-copy { text-align: center; }
  .medal.past { width: 84px; }
  .medal.hero { width: 180px; }
}
@media (max-width: 480px) {
  .medals { gap: 10px; }
  .past-medals { gap: 8px; }
  .medal.past { width: 64px; }
  .medal.hero { width: 140px; }
}
`;

function Awards() {
  return (
    <React.Fragment>
      <style>{awardsStyles}</style>
      <section className="fpc-awards" aria-label="Awards">
        <div className="fpc-awards-inner">
          <div className="fpc-awards-copy">
            <div className="eyebrow">Voted Best of NWA</div>
            <h3>
              5 years <span className="accent">running.</span><br />
              Named the best pest control in NWA.
            </h3>
            <div className="src">
              As voted by Northwest Arkansas readers in The Best of NWA awards &mdash; 2020 through 2024.
            </div>
          </div>

          <div className="medals">
            <div className="past-medals">
              <img className="medal past" src="assets/award-2020.png" alt="Best of NWA 2020 Winner" />
              <img className="medal past" src="assets/award-2021.png" alt="Best of NWA 2021 Winner" />
              <img className="medal past" src="assets/award-2022.png" alt="Best of NWA 2022 Winner" />
              <img className="medal past" src="assets/award-2023.png" alt="Best of NWA 2023 Winner" />
            </div>
            <img className="medal hero" src="assets/award-2024.png" alt="Best of NWA 2024 Winner — current year" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

window.Awards = Awards;
