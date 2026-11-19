import { Link } from 'react-router-dom'
import { formatDate } from '../utils'

export default function NoticeCard({ notice }) {
  return (
    <article className={`card notice-card cat-${notice.category.toLowerCase()}`}>
      <div className="card-body">
        <div className="row">
          <span className="tag">{notice.category}</span>
          <span className="muted">{formatDate(notice.date)}</span>
        </div>
        <h3>{notice.title}</h3>
        <p className="muted">{notice.description}</p>
        <Link to={`/notices/${notice.id}`} className="more">Read full notice →</Link>
      </div>
    </article>
  )
}
