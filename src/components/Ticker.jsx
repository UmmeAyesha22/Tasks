import { useState } from 'react'
import { Link } from 'react-router-dom'
import notices from '../data/notices'

export default function Ticker() {
  const [paused, setPaused] = useState(false)
  const items = notices.slice(0, 3)
  const loop = [...items, ...items]
  return (
    <div className="ticker">
      <div className="container ticker-in">
        <span className="live">LATEST</span>
        <div className="ticker-track">
          <div className={`ticker-move ${paused ? 'paused' : ''}`}>
            {loop.map((n, i) => (
              <Link key={`${n.id}-${i}`} to={`/notices/${n.id}`} className="t-item">
                <b className="tag">{n.category}</b> {n.title}
              </Link>
            ))}
          </div>
        </div>
        <button className="pill-btn" onClick={() => setPaused(!paused)}>{paused ? 'Play' : 'Pause'}</button>
        <Link to="/notices" className="all">All notices</Link>
      </div>
    </div>
  )
}
