import { useState } from 'react'
import Container from '../components/Container'
import PageHeader from '../components/PageHeader'
import Button from '../components/Button'

const empty = { name: '', email: '', subject: '', message: '' }

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Full name is required.'
  if (!v.email.trim()) e.email = 'Email is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid email address.'
  if (!v.subject.trim()) e.subject = 'Subject is required.'
  if (!v.message.trim()) e.message = 'Message is required.'
  return e
}

const inputBase = 'w-full rounded-xl border bg-white px-4 py-3 text-ink placeholder:text-slate-400 transition hover:border-slate-400 focus:outline-none focus:ring-2'

export default function Contact() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | success | error

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
    setStatus('idle')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) { setStatus('error'); return }
    setStatus('success')
    setValues(empty)
  }

  const field = (name, label, placeholder, Tag = 'input', extra = {}) => (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold">{label}</label>
      <Tag id={name} name={name} value={values[name]} onChange={handleChange} placeholder={placeholder}
        aria-invalid={Boolean(errors[name])}
        className={`${inputBase} ${errors[name] ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-brand focus:ring-brand/30'}`} {...extra} />
      {errors[name] && <p className="mt-1 text-sm text-red-600">{errors[name]}</p>}
    </div>
  )

  return (
    <>
      <PageHeader title="Contact Us" subtitle="Inquiry form (frontend demo – no message is sent or stored)." />
      <Container className="grid gap-8 py-8 lg:grid-cols-3">
        <aside className="space-y-4">
          <div className="rounded-2xl bg-white p-5 shadow-sm"><h3 className="font-bold">Call us</h3><a className="text-brand hover:underline" href="tel:01713143739">01713-143739</a></div>
          <div className="rounded-2xl bg-white p-5 shadow-sm"><h3 className="font-bold">Email us</h3><a className="break-all text-brand hover:underline" href="mailto:ysseglobal@gmail.com">ysseglobal@gmail.com</a></div>
        </aside>
        <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-2xl bg-white p-5 shadow-md sm:p-8 lg:col-span-2">
          {status === 'success' && (
            <div role="status" className="rounded-xl bg-emerald-50 px-4 py-3 text-emerald-800">Form validated successfully. (Demo only: no message was sent or stored.)</div>
          )}
          {status === 'error' && (
            <div role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-red-700">Please fix the highlighted fields and try again.</div>
          )}
          <div className="grid gap-5 sm:grid-cols-2">
            {field('name', 'Full Name', 'Your full name')}
            {field('email', 'Email Address', 'you@example.com', 'input', { type: 'email' })}
          </div>
          {field('subject', 'Subject', 'What is this about?')}
          {field('message', 'Message', 'Write your message here', 'textarea', { rows: 5 })}
          <Button type="submit" className="w-full sm:w-auto">Submit</Button>
        </form>
      </Container>
    </>
  )
}
