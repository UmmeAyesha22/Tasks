import { Link } from 'react-router-dom'
import Container from '../components/Container'
import Button from '../components/Button'
import SectionHeader from '../components/SectionHeader'
import ProgramCard from '../components/ProgramCard'
import NoticeCard from '../components/NoticeCard'
import EventCard from '../components/EventCard'
import programs from '../data/programs'
import notices from '../data/notices'
import events from '../data/events'
import { formatDate } from '../utils'

export default function Home() {
  const latest = notices.slice(0, 3)
  return (
    <>
      <section className="rounded-b-[2rem] bg-gradient-to-br from-deep to-[#1c4a30] py-12 text-white sm:rounded-b-[3rem] sm:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Learn, build, and grow with YSSE</h1>
            <p className="mt-5 max-w-xl text-base text-emerald-100 sm:text-lg">Stay up to date with the latest notices, then explore our courses and start learning. Short, practical programs that get you building from day one.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button to="/programs" variant="mint">Explore programs</Button>
              <Button to="/notices" variant="outline">See all notices</Button>
            </div>
            <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/20 pt-6">
              <div><dt className="sr-only">Courses</dt><dd><b className="font-serif text-3xl">{programs.length}</b> courses</dd></div>
              <div><dt className="sr-only">Notices</dt><dd><b className="font-serif text-3xl">{notices.length}</b> notices</dd></div>
              <div><dt className="sr-only">Free</dt><dd><b className="font-serif text-3xl">Free</b> options available</dd></div>
            </dl>
          </div>
          <aside className="rounded-3xl bg-white p-5 text-ink shadow-xl sm:p-7">
            <h3 className="text-xl font-bold">Latest notices</h3>
            <ul className="mt-3 divide-y divide-slate-200">
              {latest.map((n) => (
                <li key={n.id}>
                  <Link to={`/notices/${n.id}`} className="group block py-3">
                    <span className="text-sm text-slate-500">{formatDate(n.date)} · {n.category}</span>
                    <strong className="block transition group-hover:text-brand">{n.title}</strong>
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/notices" className="mt-3 inline-block font-semibold text-brand hover:underline">View all notices →</Link>
          </aside>
        </Container>
      </section>

      <Container className="py-12 sm:py-16">
        <SectionHeader title="About YSSE" />
        <p className="mb-5 max-w-3xl text-slate-700">YSSE – Stage of Innovation offers short, practical courses so learners can pick up a skill and use it straight away. (Sample introduction text.)</p>
        <Button to="/about">Learn More</Button>
      </Container>

      <Container className="pb-12 sm:pb-16">
        <SectionHeader title="Programs & Activities" action={<Button to="/programs" variant="ghost">View All Programs</Button>} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.slice(0, 3).map((p) => <ProgramCard key={p.id} program={p} />)}
        </div>
      </Container>

      <Container className="pb-12 sm:pb-16">
        <SectionHeader title="Latest Notices" action={<Button to="/notices" variant="ghost">View All Notices</Button>} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((n) => <NoticeCard key={n.id} notice={n} />)}
        </div>
      </Container>

      <Container className="pb-12 sm:pb-16">
        <SectionHeader title="Upcoming Events" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => <EventCard key={e.id} event={e} />)}
        </div>
        <p className="mt-3 text-sm text-slate-500">Sample events for a design exercise.</p>
      </Container>

      <Container>
        <section className="rounded-3xl bg-gradient-to-br from-deep to-[#1c4a30] px-6 py-12 text-center text-white">
          <h2 className="text-2xl font-bold sm:text-3xl">Ready to get involved?</h2>
          <p className="mx-auto mt-2 mb-6 max-w-xl text-emerald-100">Explore our programs or get in touch with the YSSE team.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button to="/programs" variant="mint">Explore Programs</Button>
            <Button to="/contact" variant="outline">Contact Us</Button>
          </div>
        </section>
      </Container>
    </>
  )
}
