import { useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MobileLogo from '../components/MobileLogo'
import Reveal from '../components/Reveal'

export default function ContactPage() {
  const { t } = useTranslation()
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
        throw new Error(json.error || t('contact.form.errorFallback'))
      }

      setStatus('success')
      form.reset()
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message || t('contact.form.errorFallback'))
    }
  }

  const submitLabel =
    status === 'sending' ? t('contact.form.sending')
    : status === 'success' ? t('contact.form.sent')
    : t('contact.form.submit')

  // WhatsApp deeplink with a pre-filled message in the current language
  const whatsappUrl = `https://wa.me/50686627095?text=${encodeURIComponent(t('contact.whatsappMessage'))}`

  return (
    <>
      <Navbar />
      <MobileLogo />

      <section className="contact-v2-section" id="Contact">

        <Reveal eager className="contact-v2-header">
          <p className="about-v2-tag accent">{t('contact.tag')}</p>
          <h1 className="header-text-3 secondary">
            <Trans i18nKey="contact.title" components={{ accent: <span className="accent" /> }} />
          </h1>
          <p className="mv-text contact-v2-subtitle">{t('contact.subtitle')}</p>
        </Reveal>

        <div className="contact-v2-body">

          <Reveal
            eager
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
                <label htmlFor="name" className="contact-v2-label">{t('contact.form.name')}</label>
                <input
                  type="text" id="name" name="name" required
                  placeholder={t('contact.form.namePlaceholder')}
                  className="form-input glassmorphism"
                />
              </div>
              <div className="contact-v2-field">
                <label htmlFor="email" className="contact-v2-label">{t('contact.form.email')}</label>
                <input
                  type="email" id="email" name="email" required
                  placeholder={t('contact.form.emailPlaceholder')}
                  className="form-input glassmorphism"
                />
              </div>
            </div>

            <div className="contact-v2-field">
              <label htmlFor="company" className="contact-v2-label">{t('contact.form.company')}</label>
              <input
                type="text" id="company" name="company"
                placeholder={t('contact.form.companyPlaceholder')}
                className="form-input glassmorphism"
              />
            </div>

            <div className="contact-v2-field">
              <label htmlFor="message" className="contact-v2-label">{t('contact.form.message')}</label>
              <textarea
                id="message" name="message" rows="5" required
                placeholder={t('contact.form.messagePlaceholder')}
                className="form-input glassmorphism"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn outlined-accent accent mv-h3 contact-v2-submit"
            >
              {submitLabel}
            </button>

            {status === 'success' && (
              <p className="contact-v2-feedback contact-v2-feedback-success">
                {t('contact.form.successMsg')}
              </p>
            )}
            {status === 'error' && (
              <p className="contact-v2-feedback contact-v2-feedback-error">
                {errorMsg}
              </p>
            )}
          </Reveal>

          <div className="contact-v2-aside">

            <Reveal eager className="contact-v2-aside-block" index={2}>
              <p className="about-v2-tag accent">{t('contact.aside.emailLabel')}</p>
              <button onClick={handleCopyEmail} className="contact-v2-copy-btn">
                <i className="fa-solid fa-envelope accent"></i>
                <span className="mv-text">contact@marcelodev.es</span>
              </button>
              {copied && <span className="contact-v2-copied accent">{t('contact.aside.copied')}</span>}
            </Reveal>

            <Reveal eager className="contact-v2-aside-block" index={3}>
              <p className="about-v2-tag accent">{t('contact.aside.resumeLabel')}</p>
              <a href="/Marcelo Villalobos - Resume.pdf" download="Marcelo Villalobos - Resume.pdf" className="btn glassmorphism secondary mv-h3">
                {t('contact.aside.downloadCV')}
              </a>
            </Reveal>

            <Reveal eager className="contact-v2-aside-block" index={4}>
              <p className="about-v2-tag accent">{t('contact.aside.socialsLabel')}</p>
              <div className="contact-v2-socials">
                <a href="https://github.com/marcelo-dev1624" target="_blank" rel="noreferrer" className="social-media-icon secondary glassmorphism" aria-label="GitHub">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://instagram.com/marcelo.v1624" target="_blank" rel="noreferrer" className="social-media-icon secondary glassmorphism" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/marcelo-villalobos-400965244/" target="_blank" rel="noreferrer" className="social-media-icon secondary glassmorphism" aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="social-media-icon secondary glassmorphism" aria-label="WhatsApp">
                  <i className="fab fa-whatsapp"></i>
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
