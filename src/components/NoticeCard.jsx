import { Link } from 'react-router-dom'
import Badge from './Badge'
import { formatDate, categoryStyles } from '../utils'

export default function NoticeCard({ notice }) {
  const s = categoryStyles[notice.category] || categoryStyles.Announcement
  return (
    <article className={`flex flex-col rounded-2xl border-t-4 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-6 ${s.bar}`}>
      <div className="flex items-center justify-between gap-2">
        <Badge className={s.badge}>{notice.category}</Badge>
        <span className="text-sm text-slate-500">{formatDate(notice.date)}</span>
      </div>
      <h3 className="mt-3 text-xl font-bold leading-snug">{notice.title}</h3>
      <p className="mt-2 flex-1 text-slate-600">{notice.description}</p>
      <Link to={`/notices/${notice.id}`} className={`mt-4 font-semibold hover:underline ${s.link}`}>Read full notice →</Link>
    </article>
  )
}
