import { useParams, Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Button from '../components/Button'
import programs from '../data/programs'

export default function ProgramDetails() {
  const { id } = useParams()
  const p = programs.find((x) => String(x.id) === id)

  if (!p) {
    return (
      <section className="section container">
        <p className="empty">Program not found. No program exists with ID "{id}".</p>
        <p style={{ textAlign: 'center', marginTop: 18 }}><Button to="/programs">Back to Programs</Button></p>
      </section>
    )
  }
  return (
    <>
      <PageHeader title={p.title} subtitle={p.category} />
      <section className="section container">
        <div className="detail">
          <div className="thumb" style={{ background: p.theme }} aria-hidden="true">{p.icon}</div>
          <div>
            <p>{p.details}</p>
            <p style={{ margin: '14px 0 4px' }}><strong>Level:</strong> {p.level}</p>
            <p><strong>Duration:</strong> {p.duration}</p>
            <p><strong>Cost:</strong> {p.free ? 'Free' : 'To be announced'}</p>
            <h3 style={{ marginTop: 16 }}>What you will cover</h3>
            <ul>{p.topics.map((t) => <li key={t}>{t}</li>)}</ul>
            <p className="muted" style={{ marginBottom: 18 }}>Sample information for a design exercise.</p>
            <div className="hero-btns">
              <Button to="/programs">Back to Programs</Button>
              <Link to="/contact" className="btn ghost">Ask About This Course</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
