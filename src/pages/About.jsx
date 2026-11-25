import Container from '../components/Container'
import PageHeader from '../components/PageHeader'
import Button from '../components/Button'
import SectionHeader from '../components/SectionHeader'

const activities = [
  { icon: '🎓', title: 'Training', text: 'Sample description of training activities.' },
  { icon: '🧭', title: 'Leadership', text: 'Sample description of leadership development.' },
  { icon: '🤝', title: 'Community', text: 'Sample description of community engagement.' },
]
const impact = ['Participants', 'Programs run', 'Partners']
const card = 'rounded-2xl bg-white p-6 shadow-sm'

export default function About() {
  return (
    <>
      <PageHeader title="About YSSE" subtitle="Who we are and what we do" />
      <Container className="space-y-12 py-10 sm:space-y-16">
        <section>
          <SectionHeader title="Introduction" />
          <p className="max-w-3xl text-slate-700">YSSE is introduced here with sample text. Replace with verified information about its purpose and overall activities.</p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className={`${card} border-l-4 border-brand`}><h3 className="text-xl font-bold">Mission</h3><p className="mt-2 text-slate-600">Sample mission statement.</p></div>
          <div className={`${card} border-l-4 border-mint`}><h3 className="text-xl font-bold">Vision</h3><p className="mt-2 text-slate-600">Sample vision statement.</p></div>
        </section>

        <section>
          <SectionHeader title="What We Do" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((a) => (
              <div key={a.title} className={`${card} transition hover:shadow-md`}>
                <span className="text-3xl" aria-hidden="true">{a.icon}</span>
                <h3 className="mt-2 text-xl font-bold">{a.title}</h3>
                <p className="mt-1 text-slate-600">{a.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title="Our Impact (placeholders)" />
          <div className="grid gap-6 sm:grid-cols-3">
            {impact.map((i) => (
              <div key={i} className={`${card} text-center`}>
                <b className="font-serif text-4xl text-brand">--</b>
                <p className="text-slate-600">{i}: [placeholder]</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-gradient-to-br from-deep to-[#1c4a30] px-6 py-12 text-center text-white">
          <h2 className="text-2xl font-bold sm:text-3xl">Get Involved</h2>
          <p className="mx-auto mt-2 mb-6 max-w-xl text-emerald-100">Explore our programs or reach out to us.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button to="/programs" variant="mint">Programs</Button>
            <Button to="/contact" variant="outline">Contact</Button>
          </div>
        </section>
      </Container>
    </>
  )
}
