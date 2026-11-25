import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Container from './Container'

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
  const linkClass = ({ isActive }) =>
    `block border-b-2 px-3 py-2 font-semibold transition hover:text-brand ${isActive ? 'border-brand text-brand' : 'border-transparent'}`
  return (
    <nav className="sticky top-0 z-20 bg-white shadow-sm">
      <Container className="relative flex min-h-[72px] items-center justify-between">
        <Link to="/" onClick={() => setOpen(false)}>
          {logoOk
            ? <img src="/logo.png" alt="YSSE" className="h-12 w-auto sm:h-14" onError={() => setLogoOk(false)} />
            : <span className="font-serif text-3xl font-extrabold text-brand">YSSE</span>}
        </Link>
        <button type="button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-2xl transition hover:bg-slate-100 md:hidden">{open ? '✕' : '☰'}</button>
        <ul className={`${open ? 'flex' : 'hidden'} absolute inset-x-0 top-full flex-col gap-1 bg-white px-4 py-3 shadow-lg md:static md:flex md:flex-row md:gap-2 md:p-0 md:shadow-none`}>
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.to === '/'} onClick={() => setOpen(false)} className={linkClass}>{l.label}</NavLink>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  )
}
