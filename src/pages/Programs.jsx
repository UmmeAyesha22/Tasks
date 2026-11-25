import { useState } from 'react'
import Container from '../components/Container'
import PageHeader from '../components/PageHeader'
import ProgramCard from '../components/ProgramCard'
import FilterChip from '../components/FilterChip'
import EmptyState from '../components/EmptyState'
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
      <Container className="py-8">
        <div className="mb-3 flex flex-wrap gap-2">
          {filters.map((f, i) => (
            <FilterChip key={f.label} active={i === active} onClick={() => setActive(i)}>
              {f.label} ({programs.filter(f.test).length})
            </FilterChip>
          ))}
        </div>
        <p className="mb-5 text-sm text-slate-500">Showing {shown.length} of {programs.length} courses</p>
        {shown.length === 0 ? (
          <EmptyState>No programs available right now.</EmptyState>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((p) => <ProgramCard key={p.id} program={p} />)}
          </div>
        )}
      </Container>
    </>
  )
}
