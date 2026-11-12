import { useState } from "react";

const DEFAULT_NOTE = { text: "We only email program updates. Unsubscribe anytime.", status: "subscribe-note" };

// Footer with the front-end only "Get updates" form (no backend).
function Footer() {
  const [email, setEmail] = useState("");
  const [note, setNote] = useState(DEFAULT_NOTE);

  function handleSubmit(event) {
    event.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

    if (valid) {
      setNote({ text: "Thanks! You are on the list.", status: "subscribe-note ok" });
      setEmail("");
    } else {
      setNote({ text: "Please enter a valid email address.", status: "subscribe-note bad" });
    }
  }

  return (
    <footer className="site-footer">
        <div className="footer-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none"><path d="M0 0H1440V20C1200 70 900 80 720 80C480 80 200 55 0 20Z" fill="#d3ebdc"/></svg>
        </div>
        <div className="footer-inner">
          <div className="footer-cta">
            <div className="footer-cta-text">
              <h2>Questions before you apply?</h2>
              <p>Call or email the YSSE team. Tap a card to start.</p>
            </div>
            <a className="contact-card" href="tel:01713143739">
              <span className="contact-icon"><svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/></svg></span>
              <span className="contact-text"><small>Call us</small><strong>01713-143739</strong></span>
            </a>
            <a className="contact-card" href="mailto:ysseglobal@gmail.com">
              <span className="contact-icon"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></svg></span>
              <span className="contact-text"><small>Email us</small><strong>ysseglobal@gmail.com</strong></span>
            </a>
          </div>

          <div className="footer-grid">
            <div className="footer-brand">
              <img src="/images/logo.png" alt="YSSE Stage of Innovation" />
              <p>Learn, build, grow.</p>
              <div className="socials">
                <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.3-1.5 1.6-1.5h1.7V3.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.4H7.7V13h2.7v8z"/></svg></a>
                <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none"/></svg></a>
                <a href="#" aria-label="X"><svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.3l-4.9-6.4L5.2 21H2.1l7.3-8.3L2 3h6.4l4.4 5.9zm-1.1 16.2h1.7L7.4 4.7H5.5z"/></svg></a>
                <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M4.5 9h3.6v11H4.5zM6.3 3.5a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2zM10 9h3.4v1.5c.5-.9 1.7-1.8 3.5-1.8 3.7 0 4.4 2.4 4.4 5.6V20h-3.6v-5c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6v5.1H10z"/></svg></a>
                <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.200 0-7.800.4A2.600 2.600 0 0 0 2.400 7.200C2 8.800 2 12 2 12s0 3.200.4 4.800a2.600 2.600 0 0 0 1.800 1.800C5.800 19 12 19 12 19s6.200 0 7.800-.4a2.600 2.600 0 0 0 1.800-1.800c.4-1.600.4-4.800.4-4.800s0-3.200-.4-4.800zM10 15V9l5.200 3z"/></svg></a>
              </div>
            </div>

            <nav className="footer-col" aria-label="Explore">
              <h3>Explore</h3>
              <a href="#/">Home</a>
              <a href="#">Notices</a>
              <a href="#">About</a>
              <a href="#">Programs</a>
              <a href="#">Impact</a>
              <a href="#">FAQ</a>
              <a href="#">Partner</a>
              <a href="#">Contact</a>
            </nav>

            <nav className="footer-col" aria-label="Get involved">
              <h3>Get involved</h3>
              <a href="#">Virtual internship</a>
              <a href="#">Youth ambassador</a>
              <a href="#">Membership</a>
              <a href="#">Partner with us</a>
            </nav>

            <div className="footer-col footer-updates">
            <h3>Get updates</h3>
            <form className="subscribe" onSubmit={handleSubmit} noValidate>
              <input
                type="email"
                placeholder="you@example.com"
                aria-label="Email address"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button type="submit" aria-label="Subscribe">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M21.5 2.5 2.8 10.2a.8.8 0 0 0 0 1.5l5.500 2.200 2.200 5.500a.8.8 0 0 0 1.500 0z" /></svg>
              </button>
            </form>
            <p className={note.status}>{note.text}</p>
          </div>
          </div>

          <p className="footer-bottom">&copy; YSSE</p>
        </div>
      </footer>
  );
}

export default Footer;
