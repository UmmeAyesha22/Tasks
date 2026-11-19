import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import NoticeCard from '../components/NoticeCard'
import notices from '../data/notices'

const categories = ['All', ...new Set(notices.map((n) => n.category))]

export default function Notices() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const shown = notices.filter((n) =>
    (category === 'All' || n.category === category) &&
    (n.title + n.description).toLowerCase().includes(query.toLowerCase()))

  return (
    <>
      <PageHeader title="Notices" subtitle="The latest news, schedules, and announcements from YSSE (sample content)." />
      <section className="container">
        <div className="toolbar">
          <input className="search" placeholder="Search notices" value={query} onChange={(e) => setQuery(e.target.value)} />
          {categories.map((c) => (
            <button key={c} className={`chip ${c === category ? 'on' : ''}`} onClick={() => setCategory(c)}>{c}</button>
          ))}
        </div>
        <p className="count">Showing {shown.length} of {notices.length} notices</p>
        {shown.length === 0 ? (
          <p className="empty">No notices match your search.</p>
        ) : (
          <div className="grid">{shown.map((n) => <NoticeCard key={n.id} notice={n} />)}</div>
        )}
      </section>
    </>
  )
}
