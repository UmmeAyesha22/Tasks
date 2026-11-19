import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Button from '../components/Button'
import notices from '../data/notices'
import { formatDate } from '../utils'

export default function NoticeDetails() {
  const { id } = useParams()
  const n = notices.find((x) => String(x.id) === id)

  if (!n) {
    return (
      <section className="section container">
        <p className="empty">Notice not found. No notice exists with ID "{id}".</p>
        <p style={{ textAlign: 'center', marginTop: 18 }}><Button to="/notices">Back to Notices</Button></p>
      </section>
    )
  }
  return (
    <>
      <PageHeader title={n.title} subtitle={`${n.category} · ${formatDate(n.date)}`} />
      <section className="section container">
        <article className={`card notice-card cat-${n.category.toLowerCase()}`}>
          <div className="card-body" style={{ padding: 30, gap: 14 }}>
            <span className="tag">{n.category}</span>
            {n.details.map((para, i) => <p key={i}>{para}</p>)}
            <p className="muted">Sample notice for a design exercise.</p>
            <div className="hero-btns">
              <Button to="/notices">Back to Notices</Button>
              <Link to="/contact" className="btn ghost">Ask a Question</Link>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}
