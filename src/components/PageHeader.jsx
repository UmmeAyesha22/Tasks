export default function PageHeader({ title, subtitle }) {
  return (
    <header className="page-head container">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </header>
  )
}
