import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/notices', label: 'Notices' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [logoOk, setLogoOk] = useState(true)
  return (
    <nav className="navbar">
      <div className="container nav-in">
        <Link to="/" onClick={() => setOpen(false)}>
          {logoOk
            ? <img className="logo-img" src="/logo.png" alt="YSSE" onError={() => setLogoOk(false)} />
            : <span className="logo-text">YSSE</span>}
        </Link>
        <button className="menu-btn" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.to === '/'} onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? 'active' : '')}>{l.label}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
