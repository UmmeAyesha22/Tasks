import Badge from './Badge'
import Button from './Button'

export default function ProgramCard({ program }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex h-40 items-center justify-center text-5xl text-white sm:h-44" style={{ background: program.theme }} aria-hidden="true">{program.icon}</div>
      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <Badge>{program.category}</Badge>
        <h3 className="text-xl font-bold leading-snug">{program.title}</h3>
        <p className="text-slate-600">{program.description}</p>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-slate-100 text-slate-700">{program.level}</Badge>
          <Badge className="bg-slate-100 text-slate-700">{program.duration}</Badge>
          {program.free && <Badge>Free</Badge>}
        </div>
        <Button to={`/programs/${program.id}`} className="mt-auto self-start">View Details</Button>
      </div>
    </article>
  )
}
