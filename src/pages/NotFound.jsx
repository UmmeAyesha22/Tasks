import Container from '../components/Container'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <Container className="py-20 text-center">
      <h1 className="font-serif text-7xl font-bold text-brand sm:text-8xl">404</h1>
      <p className="mt-3 mb-6 text-lg text-slate-600">Oops! The page you are looking for does not exist.</p>
      <Button to="/">Go Home</Button>
    </Container>
  )
}
