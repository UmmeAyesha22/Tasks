import { useParams } from 'react-router-dom'
import Container from '../components/Container'
import PageHeader from '../components/PageHeader'
import Button from '../components/Button'
import Badge from '../components/Badge'
import EmptyState from '../components/EmptyState'
import programs from '../data/programs'

export default function ProgramDetails() {
  const { id } = useParams()
  const p = programs.find((x) => String(x.id) === id)

  if (!p) {
    return (
      <Container className="space-y-5 py-16 text-center">
        <EmptyState>Program not found. No program exists with ID "{id}".</EmptyState>
        <Button to="/programs">Back to Programs</Button>
      </Container>
    )
  }
  return (
    <>
      <PageHeader title={p.title} subtitle={p.category} />
      <Container className="py-8">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div className="flex h-56 items-center justify-center rounded-3xl text-6xl text-white sm:h-72 md:h-80" style={{ background: p.theme }} aria-hidden="true">{p.icon}</div>
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge>{p.category}</Badge>
              <Badge className="bg-slate-100 text-slate-700">{p.level}</Badge>
              {p.free && <Badge>Free</Badge>}
            </div>
            <p className="mt-4 text-slate-700">{p.details}</p>
            <dl className="mt-4 space-y-1">
              <div><dt className="inline font-semibold">Duration: </dt><dd className="inline">{p.duration}</dd></div>
              <div><dt className="inline font-semibold">Cost: </dt><dd className="inline">{p.free ? 'Free' : 'To be announced'}</dd></div>
            </dl>
            <h3 className="mt-5 text-lg font-bold">What you will cover</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">{p.topics.map((t) => <li key={t}>{t}</li>)}</ul>
            <p className="mt-4 text-sm text-slate-500">Sample information for a design exercise.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button to="/programs">← Back to Programs</Button>
              <Button to="/contact" variant="ghost">Ask About This Course</Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
