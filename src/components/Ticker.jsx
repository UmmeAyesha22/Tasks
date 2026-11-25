import { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'
import notices from '../data/notices'

export default function Ticker() {
  const [paused, setPaused] = useState(false)
  const items = notices.slice(0, 3)
  const loop = [...items, ...items]
  return (
    <div className="bg-deep text-sm text-white">
      <Container className="flex items-center gap-3 py-2.5">
        <span className="shrink-0 rounded-full bg-mint px-3 py-1 text-xs font-extrabold tracking-wide text-deep">● LATEST</span>
        <div className="min-w-0 flex-1 overflow-hidden whitespace-nowrap">
          <div className={`inline-flex gap-10 animate-ticker ${paused ? '[animation-play-state:paused]' : ''}`}>
            {loop.map((n, i) => (
              <Link key={`${n.id}-${i}`} to={`/notices/${n.id}`} className="inline-flex items-center gap-2 hover:underline">
                <span className="rounded-full bg-mint px-2 py-0.5 text-xs font-semibold text-deep">{n.category}</span>
                {n.title}
              </Link>
            ))}
          </div>
        </div>
        <button type="button" onClick={() => setPaused(!paused)} className="shrink-0 rounded-full border border-white px-3 py-1 text-xs transition hover:bg-white/10">{paused ? 'Play' : 'Pause'}</button>
        <Link to="/notices" className="hidden shrink-0 underline hover:text-mint sm:block">All notices</Link>
      </Container>
    </div>
  )
}
