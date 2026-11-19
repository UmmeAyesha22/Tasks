import { Link } from 'react-router-dom'
import programs from '../data/programs'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="contact-row">
          <div><h2>Questions before you enrol?</h2><p>Call or email the YSSE team.</p></div>
          <a className="c-card" href="tel:01713143739"><i>☎</i><span>Call us<b>01713-143739</b></span></a>
          <a className="c-card" href="mailto:ysseglobal@gmail.com"><i>✉</i><span>Email us<b>ysseglobal@gmail.com</b></span></a>
        </div>
        <div className="f-cols">
          <div>
            <h4>YSSE – Stage of Innovation</h4>
            <p>Short, practical courses that help you learn a skill and use it straight away.</p>
            <div className="socials">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">ig</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">▶</a>
            </div>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link to="/">Home</Link></li><li><Link to="/about">About</Link></li>
              <li><Link to="/programs">Programs</Link></li><li><Link to="/notices">Notices</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Courses</h4>
            <ul>{programs.map((p) => <li key={p.id}><Link to={`/programs/${p.id}`}>{p.title}</Link></li>)}</ul>
          </div>
        </div>
      </div>
      <p className="copy">© {new Date().getFullYear()} YSSE. Course and notice details on this site are sample content for a design exercise.</p>
    </footer>
  )
}
