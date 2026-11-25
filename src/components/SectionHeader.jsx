export default function SectionHeader({ title, action }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
      <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
      {action}
    </div>
  )
}
