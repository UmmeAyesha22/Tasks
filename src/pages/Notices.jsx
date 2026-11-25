import { useState } from 'react'
import Container from '../components/Container'
import PageHeader from '../components/PageHeader'
import NoticeCard from '../components/NoticeCard'
import FilterChip from '../components/FilterChip'
import EmptyState from '../components/EmptyState'
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
      <Container className="py-8">
        <div className="mb-3 flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center">
          <input type="search" placeholder="Search notices" value={query} onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-full border border-slate-300 bg-white px-5 py-3 transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30 md:max-w-xs" />
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => <FilterChip key={c} active={c === category} onClick={() => setCategory(c)}>{c}</FilterChip>)}
          </div>
        </div>
        <p className="mb-5 text-sm text-slate-500">Showing {shown.length} of {notices.length} notices</p>
        {shown.length === 0 ? (
          <EmptyState>No notices match your search.</EmptyState>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((n) => <NoticeCard key={n.id} notice={n} />)}
          </div>
        )}
      </Container>
    </>
  )
}
