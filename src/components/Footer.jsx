import { Trans, useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer id="footer" className="footer">
      <div className="footer-inner">

        <div className="footer-brand">
          <img src="/images/logo_completo_blanco.png" alt="MarceloDev" />
          <p className="footer-tagline mv-text">
            <Trans i18nKey="footer.tagline" components={{ accent: <span className="accent" /> }} />
          </p>
        </div>

        <div className="footer-col">
          <h2 className="footer-col-title accent">{t('footer.socialsTitle')}</h2>
          <ul className="footer-links">
            <li>
              <a href="https://github.com/marcelo-dev1624" target="_blank" rel="noreferrer">
                <i className="fab fa-github" />
                <span>Github</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/marcelo.v1624" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram" />
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/marcelo-villalobos-400965244/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin" />
                <span>LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h2 className="footer-col-title accent">{t('footer.ctaTitle')}</h2>
          <p className="footer-col-text mv-text">{t('footer.ctaText')}</p>
          <a href="/contact" className="btn glassmorphism accent outlined-accent footer-cta">
            {t('footer.cta')}
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">{t('footer.copyright')}</p>
      </div>
    </footer>
  )
}
