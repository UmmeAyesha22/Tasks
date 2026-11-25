import { dayMonth } from '../utils'

export default function EventCard({ event }) {
  const { day, month } = dayMonth(event.date)
  return (
    <article className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-brand text-white">
        <span className="text-2xl font-bold leading-none">{day}</span>
        <span className="text-xs uppercase">{month}</span>
      </div>
      <div>
        <h3 className="text-lg font-bold leading-snug">{event.title}</h3>
        <p className="text-sm text-slate-500">{event.time} · {event.location}</p>
        <p className="mt-1 text-slate-600">{event.description}</p>
      </div>
    </article>
  )
}
