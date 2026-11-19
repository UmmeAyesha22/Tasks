import { Link } from 'react-router-dom'
import Button from '../components/Button'
import ProgramCard from '../components/ProgramCard'
import NoticeCard from '../components/NoticeCard'
import programs from '../data/programs'
import notices from '../data/notices'
import { formatDate } from '../utils'

export default function Home() {
  const latest = notices.slice(0, 3)
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <h1>Learn, build, and grow with YSSE</h1>
            <p className="lead">Stay up to date with the latest notices, then explore our courses and start learning. Short, practical programs that get you building from day one.</p>
            <div className="hero-btns">
              <Button to="/programs" variant="mint">Explore programs</Button>
              <Button to="/notices" variant="outline">See all notices</Button>
            </div>
            <div className="hero-stats">
              <span><b>{programs.length}</b>courses</span>
              <span><b>{notices.length}</b>notices</span>
              <span><b>Free</b>options available</span>
            </div>
          </div>
          <aside className="panel">
            <h3>Latest notices</h3>
            <ul>
              {latest.map((n) => (
                <li key={n.id}><Link to={`/notices/${n.id}`}><span className="muted">{formatDate(n.date)} · {n.category}</span><strong>{n.title}</strong></Link></li>
              ))}
            </ul>
            <p style={{ marginTop: 14 }}><Link className="link-arrow" to="/notices">View all notices →</Link></p>
          </aside>
        </div>
      </section>

      <section className="section container">
        <div className="section-head"><h2>About YSSE</h2></div>
        <p style={{ maxWidth: 760, marginBottom: 18 }}>YSSE – Stage of Innovation offers short, practical courses so learners can pick up a skill and use it straight away. (Sample introduction text.)</p>
        <Button to="/about">Learn More</Button>
      </section>

      <section className="section container">
        <div className="section-head"><h2>Featured Programs</h2><Button to="/programs">View All Programs</Button></div>
        <div className="grid">{programs.slice(0, 3).map((p) => <ProgramCard key={p.id} program={p} />)}</div>
      </section>

      <section className="section container">
        <div className="section-head"><h2>Latest Notices</h2><Button to="/notices">View All Notices</Button></div>
        <div className="grid">{latest.map((n) => <NoticeCard key={n.id} notice={n} />)}</div>
      </section>

      <section className="cta container">
        <h2>Ready to get involved?</h2>
        <p>Explore our programs or get in touch with the YSSE team.</p>
        <Button to="/contact" variant="mint">Contact Us</Button>
      </section>
    </>
  )
}
