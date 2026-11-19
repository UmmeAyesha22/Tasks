import { useState } from 'react'
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

export default function Contact() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
    setSuccess(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) return
    setSuccess(true)
    setValues(empty)
  }

  const field = (name, label, Tag = 'input', extra = {}) => (
    <div className={`field ${errors[name] ? 'invalid' : ''}`}>
      <label htmlFor={name}>{label}</label>
      <Tag id={name} name={name} value={values[name]} onChange={handleChange} {...extra} />
      {errors[name] && <span className="error">{errors[name]}</span>}
    </div>
  )

  return (
    <>
      <PageHeader title="Contact Us" subtitle="Inquiry form (frontend demo)" />
      <section className="container" style={{ paddingTop: 20 }}>
        <form className="form" onSubmit={handleSubmit} noValidate>
          {success && <div className="success">Form validated successfully. (Demo only: no message was sent or stored.)</div>}
          {field('name', 'Full Name')}
          {field('email', 'Email Address', 'input', { type: 'email' })}
          {field('subject', 'Subject')}
          {field('message', 'Message', 'textarea', { rows: 5 })}
          <Button type="submit">Submit</Button>
        </form>
      </section>
    </>
  )
}
