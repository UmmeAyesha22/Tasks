import { Link } from 'react-router-dom'

export default function Button({ to, children, onClick, type = 'button', variant = '' }) {
  const cls = `btn ${variant}`
  if (to) return <Link to={to} className={cls}>{children}</Link>
  return <button type={type} className={cls} onClick={onClick}>{children}</button>
}
