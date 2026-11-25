export const formatDate = (d) =>
  new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })

export const dayMonth = (d) => ({
  day: new Date(d).toLocaleDateString('en-GB', { day: 'numeric', timeZone: 'UTC' }),
  month: new Date(d).toLocaleDateString('en-GB', { month: 'short', timeZone: 'UTC' }),
})

// Full class strings so Tailwind can detect them
export const categoryStyles = {
  Workshop: { bar: 'border-t-blue-600', badge: 'bg-blue-50 text-blue-700', link: 'text-blue-700' },
  Recruitment: { bar: 'border-t-orange-500', badge: 'bg-orange-50 text-orange-700', link: 'text-orange-700' },
  Training: { bar: 'border-t-green-600', badge: 'bg-green-50 text-green-700', link: 'text-green-700' },
  Event: { bar: 'border-t-purple-600', badge: 'bg-purple-50 text-purple-700', link: 'text-purple-700' },
  Announcement: { bar: 'border-t-slate-600', badge: 'bg-slate-100 text-slate-700', link: 'text-slate-700' },
}
