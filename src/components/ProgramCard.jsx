import Button from './Button'

export default function ProgramCard({ program }) {
  return (
    <article className="card p-card">
      <div className="thumb" style={{ background: program.theme }} aria-hidden="true">{program.icon}</div>
      <div className="card-body p-body">
        <span className="tag">{program.category}</span>
        <h3>{program.title}</h3>
        <p className="muted">{program.description}</p>
        <div className="p-meta">
          <span className="tag">{program.level}</span>
          <span className="tag">{program.duration}</span>
          {program.free && <span className="tag">Free</span>}
        </div>
        <Button to={`/programs/${program.id}`}>View Details</Button>
      </div>
    </article>
  )
}
