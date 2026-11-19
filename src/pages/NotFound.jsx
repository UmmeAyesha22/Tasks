import Button from '../components/Button'

export default function NotFound() {
  return (
    <section className="section container" style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '4rem', color: 'var(--green)' }}>404</h1>
      <p style={{ margin: '10px 0 20px' }}>Oops! The page you are looking for does not exist.</p>
      <Button to="/">Go Home</Button>
    </section>
  )
}
