import { useParams } from 'react-router-dom'
import Container from '../components/Container'
import PageHeader from '../components/PageHeader'
import Button from '../components/Button'
import Badge from '../components/Badge'
import EmptyState from '../components/EmptyState'
import notices from '../data/notices'
import { formatDate, categoryStyles } from '../utils'

export default function NoticeDetails() {
  const { id } = useParams()
  const n = notices.find((x) => String(x.id) === id)

  if (!n) {
    return (
      <Container className="space-y-5 py-16 text-center">
        <EmptyState>Notice not found. No notice exists with ID "{id}".</EmptyState>
        <Button to="/notices">Back to Notices</Button>
      </Container>
    )
  }
  const s = categoryStyles[n.category] || categoryStyles.Announcement
  return (
    <>
      <PageHeader title={n.title} subtitle={`${n.category} · ${formatDate(n.date)}`} />
      <Container className="py-8">
        <article className={`max-w-3xl space-y-4 rounded-2xl border-t-4 bg-white p-6 shadow-sm sm:p-8 ${s.bar}`}>
          <Badge className={s.badge}>{n.category}</Badge>
          {n.details.map((para, i) => <p key={i} className="text-slate-700">{para}</p>)}
          <p className="text-sm text-slate-500">Sample notice for a design exercise.</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button to="/notices">← Back to Notices</Button>
            <Button to="/contact" variant="ghost">Ask a Question</Button>
          </div>
        </article>
      </Container>
    </>
  )
}
