import Container from './Container'

export default function PageHeader({ title, subtitle }) {
  return (
    <header className="pb-2 pt-10 sm:pt-14">
      <Container>
        <h1 className="text-3xl font-bold sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-3xl text-base text-slate-600 sm:text-lg">{subtitle}</p>}
      </Container>
    </header>
  )
}
