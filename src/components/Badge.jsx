export default function Badge({ children, className = 'bg-emerald-50 text-brand-dark' }) {
  return <span className={`inline-block w-fit rounded-full px-3 py-0.5 text-xs font-semibold ${className}`}>{children}</span>
}
