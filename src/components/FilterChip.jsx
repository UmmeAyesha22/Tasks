export default function FilterChip({ active, onClick, children }) {
  return (
    <button type="button" onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:px-5 ${active ? 'border-brand bg-brand text-white' : 'border-slate-300 bg-white text-ink hover:border-brand hover:text-brand'}`}>
      {children}
    </button>
  )
}
