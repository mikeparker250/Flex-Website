// Sticky header with logo, nav, phone CTA. Compacts on scroll.
const headerStyles = `
.fpc-header {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 60;
  background: var(--ink);
  border-bottom: 1px solid rgba(255,255,255,0.06);
  color: #fff;
  transition: padding 200ms ease, background 200ms ease;
}
.fpc-header.scrolled {
  background: rgba(2,2,2,0.92);
  backdrop-filter: blur(12px) saturate(140%);
  -webkit-backdrop-filter: blur(12px) saturate(140%);
}
.fpc-header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px var(--pad-x);
  gap: 24px;
  max-width: 1600px;
  margin: 0 auto;
  transition: padding 200ms ease;
}
.fpc-header.scrolled .fpc-header-inner { padding-top: 10px; padding-bottom: 10px; }
.fpc-logo {
  height: 44px; width: auto;
  display: block;
  filter: brightness(0) saturate(100%) invert(57%) sepia(96%) saturate(2185%) hue-rotate(176deg) brightness(102%) contrast(101%);
  transition: filter 200ms ease, height 200ms ease;
}
.fpc-logo--current { filter: none; }
.fpc-header.scrolled .fpc-logo { height: 34px; }

.fpc-nav {
  display: flex;
  align-items: center;
  gap: 32px;
  font-family: var(--body);
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.fpc-nav a {
  position: relative;
  padding: 8px 2px;
  color: rgba(255,255,255,0.78);
  transition: color 180ms ease;
}
.fpc-nav a:hover { color: #fff; }
.fpc-nav a::after {
  content: "";
  position: absolute;
  left: 0; right: 0; bottom: 2px;
  height: 2px;
  background: var(--accent-2);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 220ms ease;
}
.fpc-nav a:hover::after { transform: scaleX(1); }

.fpc-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}
.fpc-phone {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  border: 2px solid #fff;
  border-radius: 2px;
  font-family: var(--body);
  font-weight: 800;
  font-style: italic;
  font-size: 15px;
  letter-spacing: 0.02em;
  color: #fff;
  transition: background 180ms ease, color 180ms ease;
}
.fpc-phone:hover { background: #fff; color: var(--ink); }
.fpc-phone svg { color: var(--accent-2); }
.fpc-phone:hover svg { color: var(--accent); }

@media (max-width: 980px) {
  .fpc-nav { display: none; }
}
@media (max-width: 540px) {
  .fpc-phone span { display: none; }
}
`;

function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <React.Fragment>
      <style>{headerStyles}</style>
      <header className={`fpc-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="fpc-header-inner">
          <a href="#top" aria-label="Flex Pest Control — home" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img className="fpc-logo fpc-logo--current" src="assets/logo-blue-on-black.png" alt="Flex" />
            <span style={{ display: 'none' }}>Flex Pest Control</span>
          </a>

          <nav className="fpc-nav">
            <a href="#services">Services</a>
            <a href="#quote">Get a Quote</a>
            <a href="#areas">Service Area</a>
            <a href="#about">About</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="fpc-actions">
            <a className="fpc-phone" href="tel:4794040800">
              <Ic.Phone />
              <span>(479) 404-0800</span>
            </a>
            <a className="btn btn--on-dark btn--sm" href="#quote" style={{ background: 'var(--accent)' }}>
              Free Quote
              <Ic.Arrow width="14" height="14" />
            </a>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

window.Header = Header;
