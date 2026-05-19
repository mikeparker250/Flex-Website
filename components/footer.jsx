// Footer.
const footerStyles = `
.fpc-footer {
  background: #06080a;
  color: rgba(255,255,255,0.7);
  padding: 80px var(--pad-x) 32px;
  border-top: 1px solid rgba(255,255,255,0.06);
}
.fpc-footer .top {
  max-width: 1280px;
  margin: 0 auto 56px;
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 48px;
}
.fpc-footer h5 {
  font-family: var(--display);
  font-style: italic;
  font-weight: 700;
  font-size: 18px;
  color: #fff;
  margin: 0 0 18px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.fpc-footer a { color: rgba(255,255,255,0.7); display: block; padding: 4px 0; font-size: 14px; }
.fpc-footer a:hover { color: var(--accent-2); }

.footer-brand img {
  height: 56px; width: auto;
  filter: brightness(0) saturate(100%) invert(57%) sepia(96%) saturate(2185%) hue-rotate(176deg) brightness(102%) contrast(101%);
  margin-bottom: 16px;
}
.footer-brand p {
  font-size: 14px;
  line-height: 1.5;
  max-width: 320px;
  margin: 0 0 18px;
}

.footer-social {
  display: flex; gap: 10px;
}
.footer-social a {
  width: 36px; height: 36px;
  display: grid; place-items: center;
  border: 1.5px solid rgba(255,255,255,0.18);
  color: rgba(255,255,255,0.7);
  padding: 0;
  transition: border 160ms ease, color 160ms ease, background 160ms ease;
}
.footer-social a:hover {
  border-color: var(--accent-2);
  color: var(--accent-2);
  background: rgba(53,178,255,0.08);
}

.footer-contact .row { display: flex; align-items: flex-start; gap: 10px; padding: 6px 0; font-size: 14px; color: rgba(255,255,255,0.85); }
.footer-contact .row svg { color: var(--accent-2); flex-shrink: 0; margin-top: 3px; }
.footer-contact .row a { display: inline; padding: 0; color: inherit; }
.footer-contact .row a:hover { color: var(--accent-2); }

.fpc-footer .bottom {
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 24px;
  border-top: 1px solid rgba(255,255,255,0.08);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: rgba(255,255,255,0.4);
}
.fpc-footer .bottom a { color: rgba(255,255,255,0.55); display: inline; padding: 0; }

@media (max-width: 900px) {
  .fpc-footer .top { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 540px) {
  .fpc-footer .top { grid-template-columns: 1fr; }
}
`;

const SocialIcon = ({ kind }) => {
  if (kind === 'fb') return <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M22 12a10 10 0 1 0-11.6 9.9V14.9h-2.5V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.5 2.9h-2.4v6.9A10 10 0 0 0 22 12z"/></svg>;
  if (kind === 'ig') return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>;
  if (kind === 'yt') return <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M23 12s0-3.7-.5-5.4a2.7 2.7 0 0 0-2-2C18.7 4 12 4 12 4s-6.7 0-8.5.6a2.7 2.7 0 0 0-2 2C1 8.3 1 12 1 12s0 3.7.5 5.4a2.7 2.7 0 0 0 2 2c1.8.6 8.5.6 8.5.6s6.7 0 8.5-.6a2.7 2.7 0 0 0 2-2C23 15.7 23 12 23 12zM10 15.5v-7l6 3.5-6 3.5z"/></svg>;
  if (kind === 'gg') return <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M21.6 12.2c0-.7 0-1.3-.2-2H12v3.8h5.4c-.2 1.2-.9 2.3-2 3l3.3 2.5c1.9-1.8 3-4.4 3-7.3z"/><path d="M12 22c2.7 0 5-1 6.7-2.5l-3.3-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.7-5.6-4H3v2.5A10 10 0 0 0 12 22z" opacity="0.85"/><path d="M6.4 14c-.2-.6-.4-1.3-.4-2s.2-1.4.4-2V7.5H3a10 10 0 0 0 0 9L6.4 14z" opacity="0.7"/><path d="M12 6c1.5 0 2.8.5 3.8 1.5l2.9-2.9A10 10 0 0 0 3 7.5L6.4 10c.8-2.3 3-4 5.6-4z" opacity="0.55"/></svg>;
  return null;
};

function Footer() {
  return (
    <React.Fragment>
      <style>{footerStyles}</style>
      <footer className="fpc-footer">
        <div className="top">
          <div className="footer-brand">
            <img src="assets/logo-blue-on-black.png" alt="Flex Pest Control" />
            <p>Premium pest control delivered. Family-owned, NWA-based, and built around one promise: keep your family&rsquo;s home pest-free, or come back free.</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><SocialIcon kind="fb" /></a>
              <a href="#" aria-label="Instagram"><SocialIcon kind="ig" /></a>
              <a href="#" aria-label="YouTube"><SocialIcon kind="yt" /></a>
              <a href="#" aria-label="Google"><SocialIcon kind="gg" /></a>
            </div>
          </div>

          <div>
            <h5>Services</h5>
            <a href="#services">General Pest Control</a>
            <a href="#services">Termite Defense</a>
            <a href="#services">Wildlife Removal</a>
            <a href="#services">Commercial</a>
            <a href="#services">Mosquito Service</a>
          </div>

          <div>
            <h5>Company</h5>
            <a href="#about">About Flex</a>
            <a href="#areas">Service Area</a>
            <a href="#faq">FAQ</a>
            <a href="#quote">Get a Free Quote</a>
            <a href="#">Careers</a>
          </div>

          <div className="footer-contact">
            <h5>Contact</h5>
            <div className="row"><Ic.Phone /> <a href="tel:4794040800">(479) 404-0800</a></div>
            <div className="row"><Ic.Pin /> <span>2928 N McKee Cir, Unit 122<br />Fayetteville, AR 72703</span></div>
            <div className="row"><Ic.Calendar width="14" height="14" /> <span>Mon–Sat: Available 24 hours<br />Sun: Closed</span></div>
          </div>
        </div>

        <div className="bottom">
          <span>© 2026 Flex Pest Control. All rights reserved.</span>
          <span>
            <a href="#">Privacy</a> &nbsp;·&nbsp; <a href="#">Terms</a> &nbsp;·&nbsp; <a href="#">Sitemap</a>
          </span>
        </div>
      </footer>
    </React.Fragment>
  );
}

window.Footer = Footer;
