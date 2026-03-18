import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ContactPage() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('marcelodev1624@gmail.com').then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  return (
    <>
      <Navbar />

      <section className="contact-v2-section" id="Contact">

        <div className="contact-v2-header">
          <p className="about-v2-tag accent">Get in touch</p>
          <h1 className="header-text-3 secondary">
            Let's build something{' '}
            <span className="accent">great together.</span>
          </h1>
          <p className="mv-text contact-v2-subtitle">
            Ready to bring your project to life? I'm open to clients, collaborations and new ideas.
          </p>
        </div>

        <div className="contact-v2-body">

          <form
            action="https://formsubmit.co/marcelodev1624@gmail.com"
            method="POST"
            className="contact-v2-form glassmorphism"
          >
            <input type="hidden" name="_captcha" value="false" />

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
              <input type="text" id="company" name="company" required placeholder="Your company name" className="form-input glassmorphism" />
            </div>

            <div className="contact-v2-field">
              <label htmlFor="message" className="contact-v2-label">How can I help you?</label>
              <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." className="form-input glassmorphism" />
            </div>

            <button type="submit" className="btn outlined-accent accent mv-h3 contact-v2-submit">
              Send message
            </button>
          </form>

          <div className="contact-v2-aside">

            <div className="contact-v2-aside-block">
              <p className="about-v2-tag accent">Email</p>
              <button onClick={handleCopyEmail} className="contact-v2-copy-btn">
                <i className="fa-solid fa-envelope accent"></i>
                <span className="mv-text">marcelodev1624@gmail.com</span>
              </button>
              {copied && <span className="contact-v2-copied accent">Copied!</span>}
            </div>

            <div className="contact-v2-aside-block">
              <p className="about-v2-tag accent">Resume</p>
              <a href="/Marcelo Villalobos - Resume.pdf" download="Marcelo Villalobos - Resume.pdf" className="btn glassmorphism secondary mv-h3">
                Download CV
              </a>
            </div>

            <div className="contact-v2-aside-block">
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
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}