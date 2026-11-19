import PageHeader from '../components/PageHeader'
import Button from '../components/Button'

const activities = [
  { icon: '🎓', title: 'Training', text: 'Sample description of training activities.' },
  { icon: '🧭', title: 'Leadership', text: 'Sample description of leadership development.' },
  { icon: '🤝', title: 'Community', text: 'Sample description of community engagement.' },
]
const impact = ['Participants: [placeholder]', 'Programs: [placeholder]', 'Partners: [placeholder]']

export default function About() {
  return (
    <>
      <PageHeader title="About YSSE" subtitle="Who we are and what we do" />
      <section className="section container">
        <h2 style={{ marginBottom: 12 }}>Introduction</h2>
        <p>YSSE is introduced here with sample text. Replace with verified information about its purpose and overall activities.</p>
      </section>
      <section className="section container">
        <div className="grid">
          <div className="card"><div className="card-body"><h3>Mission</h3><p>Sample mission statement.</p></div></div>
          <div className="card"><div className="card-body"><h3>Vision</h3><p>Sample vision statement.</p></div></div>
        </div>
      </section>
      <section className="section container">
        <h2 style={{ marginBottom: 16 }}>What We Do</h2>
        <div className="grid">
          {activities.map((a) => (
            <div className="card" key={a.title}>
              <div className="card-body"><span style={{ fontSize: '2rem' }}>{a.icon}</span><h3>{a.title}</h3><p>{a.text}</p></div>
            </div>
          ))}
        </div>
      </section>
      <section className="section container">
        <h2 style={{ marginBottom: 16 }}>Our Impact (placeholders)</h2>
        <div className="grid">
          {impact.map((i) => <div className="card" key={i}><div className="card-body stat"><strong>--</strong>{i}</div></div>)}
        </div>
      </section>
      <section className="cta container">
        <div>
          <h2>Get Involved</h2>
          <p style={{ marginBottom: 20 }}>Explore our programs or reach out to us.</p>
          <Button to="/programs" variant="mint">Programs</Button>{' '}
          <Button to="/contact" variant="outline">Contact</Button>
        </div>
      </section>
    </>
  )
}
