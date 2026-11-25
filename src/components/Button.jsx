import { Link } from 'react-router-dom'

const base = 'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:text-base'
const variants = {
  primary: 'bg-brand text-white hover:bg-deep',
  mint: 'bg-mint text-deep hover:bg-emerald-200',
  outline: 'border-2 border-white/70 text-white hover:bg-white/10',
  ghost: 'border-2 border-brand text-brand hover:bg-brand hover:text-white',
}

export default function Button({ to, children, onClick, type = 'button', variant = 'primary', className = '' }) {
  const cls = `${base} ${variants[variant]} ${className}`
  if (to) return <Link to={to} className={cls}>{children}</Link>
  return <button type={type} onClick={onClick} className={cls}>{children}</button>
}
