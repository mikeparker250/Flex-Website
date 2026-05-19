// FAQ — accordion.
const faqStyles = `
.fpc-faq {
  padding: var(--section-y) var(--pad-x);
  background: var(--paper);
}
.fpc-faq .inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  gap: 80px;
  align-items: start;
}
.fpc-faq h2 {
  font-family: var(--display);
  font-style: italic;
  font-weight: 800;
  font-size: clamp(48px, 6vw, 96px);
  line-height: 0.9;
  margin: 12px 0 24px;
  text-transform: uppercase;
}
.fpc-faq h2 .accent { color: var(--accent); }
.fpc-faq .lead { color: #2a2f37; font-size: 16px; line-height: 1.6; margin: 0 0 28px; }

.faq-list {
  border-top: 2px solid var(--ink);
}
.faq-item {
  border-bottom: 2px solid var(--ink);
  padding: 6px 0;
}
.faq-q {
  width: 100%;
  background: none; border: none;
  padding: 22px 0;
  text-align: left;
  display: flex; align-items: center; justify-content: space-between;
  gap: 24px;
  font-family: var(--display);
  font-style: italic;
  font-weight: 800;
  font-size: clamp(22px, 2.2vw, 30px);
  line-height: 1.1;
  color: var(--ink);
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0;
}
.faq-q .num {
  font-family: var(--mono);
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.22em;
  color: var(--muted);
  flex-shrink: 0;
  margin-right: 18px;
  align-self: center;
}
.faq-q .icon-btn {
  flex-shrink: 0;
  width: 38px; height: 38px;
  border: 2px solid var(--ink);
  display: grid; place-items: center;
  background: var(--paper);
  transition: background 180ms ease, color 180ms ease, transform 220ms ease;
  color: var(--ink);
}
.faq-item.open .faq-q .icon-btn {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
  transform: rotate(90deg);
}
.faq-a {
  max-height: 0;
  overflow: hidden;
  transition: max-height 320ms cubic-bezier(.2,.7,.2,1), padding 240ms ease;
  padding: 0 56px 0 36px;
}
.faq-item.open .faq-a {
  max-height: 320px;
  padding-bottom: 24px;
}
.faq-a p {
  font-size: 16px;
  line-height: 1.65;
  color: #2a2f37;
  margin: 0;
  max-width: 620px;
}
@media (max-width: 980px) {
  .fpc-faq .inner { grid-template-columns: 1fr; gap: 36px; }
  .faq-q { font-size: 22px; }
}
`;

const FAQS = [
  {
    q: "How much does service actually cost?",
    a: "Recurring service starts at $55/month for most NWA homes. Final pricing depends on your home size and what pest pressures we find on the initial inspection. We give you the exact price upfront — no surprise upcharges, ever."
  },
  {
    q: "Do I have to sign a contract?",
    a: "Yes — service is an ongoing agreement. But you're covered both ways: every visit comes with free re-treats if anything pops up between scheduled visits, and if we still can't fix the problem, we refund your last service. No fine print, no surprise fees."
  },
  {
    q: "Are the products safe around kids and pets?",
    a: "Yes. We use the same EPA-approved, low-impact products we use in our own homes. Treated areas dry within 30 minutes and are safe for re-entry."
  },
  {
    q: "How fast can you come out?",
    a: "Same-day service most days, especially Monday through Friday. For active issues (wasps, termites, rodents) we prioritize you to the front of the line."
  },
  {
    q: "What's covered under the pest-free guarantee?",
    a: "If pests come back between scheduled visits, so do we — at no extra charge, within the same week. No questions, no fine print, no fees."
  },
  {
    q: "What areas do you service?",
    a: "All of Northwest Arkansas — Bentonville, Rogers, Springdale, Fayetteville, Bella Vista, Cave Springs, Lowell, Centerton, Pea Ridge, Farmington, Siloam Springs and the surrounding ZIPs. Not sure? Use the ZIP checker above."
  },
];

function FAQ() {
  const [open, setOpen] = React.useState(0);
  return (
    <React.Fragment>
      <style>{faqStyles}</style>
      <section id="faq" className="fpc-faq">
        <div className="inner">
          <div>
            <div className="eyebrow on-light">FAQ</div>
            <h2>
              Straight<br />
              <span className="accent">answers,</span><br />
              no fine print.
            </h2>
            <p className="lead">
              Still on the fence? Here are the questions we get most. Anything we missed? Call us — we&rsquo;ll answer it straight.
            </p>
            <a className="btn" href="tel:4794040800">
              <Ic.Phone /> (479) 404-0800
            </a>
          </div>

          <div className="faq-list">
            {FAQS.map((f, i) => (
              <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
                <button type="button" className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span className="num">{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ flex: 1 }}>{f.q}</span>
                  <span className="icon-btn">
                    {open === i ? <Ic.Minus width="16" height="16" /> : <Ic.Plus width="16" height="16" />}
                  </span>
                </button>
                <div className="faq-a"><p>{f.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

window.FAQ = FAQ;
