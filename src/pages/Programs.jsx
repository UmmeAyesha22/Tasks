import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import ProgramCard from '../components/ProgramCard'
import programs from '../data/programs'

const filters = [
  { label: 'All courses', test: () => true },
  { label: 'Beginner', test: (p) => p.level === 'Beginner' },
  { label: 'Intermediate', test: (p) => p.level === 'Intermediate' },
  { label: 'Free', test: (p) => p.free },
]

export default function Programs() {
  const [active, setActive] = useState(0)
  const shown = programs.filter(filters[active].test)
  return (
    <>
      <PageHeader title="Programs" subtitle="Pick a topic, learn at your own pace, and build skills you can use right away. (Sample content.)" />
      <section className="container">
        <div className="toolbar">
          {filters.map((f, i) => (
            <button key={f.label} className={`chip ${i === active ? 'on' : ''}`} onClick={() => setActive(i)}>
              {f.label} ({programs.filter(f.test).length})
            </button>
          ))}
        </div>
        <p className="count">Showing {shown.length} of {programs.length} courses</p>
        {shown.length === 0 ? (
          <p className="empty">No programs available right now.</p>
        ) : (
          <div className="grid">{shown.map((p) => <ProgramCard key={p.id} program={p} />)}</div>
        )}
      </section>
    </>
  )
}
