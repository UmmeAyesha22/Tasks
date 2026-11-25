import { Link } from 'react-router-dom'
import Container from './Container'
import programs from '../data/programs'

const socials = [
  { label: 'Facebook', short: 'f', href: 'https://www.facebook.com' },
  { label: 'Instagram', short: 'ig', href: 'https://www.instagram.com' },
  { label: 'LinkedIn', short: 'in', href: 'https://www.linkedin.com' },
  { label: 'YouTube', short: '▶', href: 'https://www.youtube.com' },
]
const contactCard = 'flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 transition hover:bg-white/15'
const linkCls = 'transition hover:text-mint'

export default function Footer() {
  return (
    <footer className="mt-16 rounded-t-3xl bg-gradient-to-b from-[#183626] to-deep pt-12 text-emerald-50">
      <Container>
        <div className="grid items-center gap-5 border-b border-white/15 pb-8 lg:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold text-white">Questions before you enrol?</h2>
            <p>Call or email the YSSE team.</p>
          </div>
          <a href="tel:01713143739" className={contactCard}>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-xl text-deep">☎</span>
            <span className="text-sm">Call us<b className="block text-lg text-white">01713-143739</b></span>
          </a>
          <a href="mailto:ysseglobal@gmail.com" className={contactCard}>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-xl text-deep">✉</span>
            <span className="min-w-0 text-sm">Email us<b className="block break-all text-lg text-white">ysseglobal@gmail.com</b></span>
          </a>
        </div>
        <div className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h4 className="mb-3 text-xl font-bold text-white">YSSE – Stage of Innovation</h4>
            <p>Short, practical courses that help you learn a skill and use it straight away.</p>
            <div className="mt-4 flex gap-2">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-bold transition hover:bg-mint hover:text-deep">{s.short}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-3 text-xl font-bold text-white">Explore</h4>
            <ul className="space-y-2">
              <li><Link className={linkCls} to="/">Home</Link></li>
              <li><Link className={linkCls} to="/about">About</Link></li>
              <li><Link className={linkCls} to="/programs">Programs</Link></li>
              <li><Link className={linkCls} to="/notices">Notices</Link></li>
              <li><Link className={linkCls} to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-xl font-bold text-white">Courses</h4>
            <ul className="space-y-2">
              {programs.map((p) => <li key={p.id}><Link className={linkCls} to={`/programs/${p.id}`}>{p.title}</Link></li>)}
            </ul>
          </div>
        </div>
      </Container>
      <p className="bg-black/25 px-4 py-4 text-center text-sm">© {new Date().getFullYear()} YSSE. Course, notice and event details on this site are sample content for a design exercise.</p>
    </footer>
  )
}
