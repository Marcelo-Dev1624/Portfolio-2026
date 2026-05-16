import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MobileLogo from '../components/MobileLogo'
import Reveal from '../components/Reveal'

export default function ContactPage() {
  const [copied, setCopied] = useState(false)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@marcelodev.es').then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    const form = e.currentTarget
    const payload = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      company: form.company.value.trim(),
      message: form.message.value.trim(),
      website: form.website.value, // honeypot
    }

    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/send.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json().catch(() => ({}))

      if (!res.ok || !json.ok) {
        throw new Error(json.error || 'Something went wrong. Please try again.')
      }

      setStatus('success')
      form.reset()
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message || 'Network error')
    }
  }

  return (
    <>
      <Navbar />
      <MobileLogo />

      <section className="contact-v2-section" id="Contact">

        <Reveal className="contact-v2-header">
          <p className="about-v2-tag accent">Get in touch</p>
          <h1 className="header-text-3 secondary">
            Let's build something{' '}
            <span className="accent">great together.</span>
          </h1>
          <p className="mv-text contact-v2-subtitle">
            Ready to bring your project to life? I'm open to clients, collaborations and new ideas.
          </p>
        </Reveal>

        <div className="contact-v2-body">

          <Reveal
            as="form"
            index={1}
            onSubmit={handleSubmit}
            noValidate
            className="contact-v2-form glassmorphism"
          >
            {/* Honeypot — hidden from real users, bots will fill it */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
            />

            <div className="contact-v2-row">
              <div className="contact-v2-field">
                <label htmlFor="name" className="contact-v2-label">Your name</label>
                <input type="text" id="name" name="name" required placeholder="Marcelo Villalobos" className="form-input glassmorphism" />
              </div>
              <div className="contact-v2-field">
                <label htmlFor="email" className="contact-v2-label">Your email</label>
                <input type="email" id="email" name="email" required placeholder="hello@example.com" className="form-input glassmorphism" />
              </div>
            </div>

            <div className="contact-v2-field">
              <label htmlFor="company" className="contact-v2-label">Company / Organization</label>
              <input type="text" id="company" name="company" placeholder="Your company name" className="form-input glassmorphism" />
            </div>

            <div className="contact-v2-field">
              <label htmlFor="message" className="contact-v2-label">How can I help you?</label>
              <textarea id="message" name="message" rows="5" required placeholder="Tell me about your project..." className="form-input glassmorphism" />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn outlined-accent accent mv-h3 contact-v2-submit"
            >
              {status === 'sending' ? 'Sending…' : status === 'success' ? 'Sent ✓' : 'Send message'}
            </button>

            {status === 'success' && (
              <p className="contact-v2-feedback contact-v2-feedback-success">
                Thanks! Your message is on its way. I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="contact-v2-feedback contact-v2-feedback-error">
                {errorMsg}
              </p>
            )}
          </Reveal>

          <div className="contact-v2-aside">

            <Reveal className="contact-v2-aside-block" index={2}>
              <p className="about-v2-tag accent">Email</p>
              <button onClick={handleCopyEmail} className="contact-v2-copy-btn">
                <i className="fa-solid fa-envelope accent"></i>
                <span className="mv-text">contact@marcelodev.es</span>
              </button>
              {copied && <span className="contact-v2-copied accent">Copied!</span>}
            </Reveal>

            <Reveal className="contact-v2-aside-block" index={3}>
              <p className="about-v2-tag accent">Resume</p>
              <a href="/Marcelo Villalobos - Resume.pdf" download="Marcelo Villalobos - Resume.pdf" className="btn glassmorphism secondary mv-h3">
                Download CV
              </a>
            </Reveal>

            <Reveal className="contact-v2-aside-block" index={4}>
              <p className="about-v2-tag accent">Socials</p>
              <div className="contact-v2-socials">
                <a href="https://github.com/marcelo-dev1624" target="_blank" rel="noreferrer" className="social-media-icon secondary glassmorphism">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://instagram.com/marcelo.v1624" target="_blank" rel="noreferrer" className="social-media-icon secondary glassmorphism">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/marcelo-villalobos-400965244/" target="_blank" rel="noreferrer" className="social-media-icon secondary glassmorphism">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}