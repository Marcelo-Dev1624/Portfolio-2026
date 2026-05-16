export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-inner">

        <div className="footer-brand">
          <img src="/images/logo_completo_blanco.png" alt="MarceloDev" />
          <p className="footer-tagline mv-text">
            Building things that <span className="accent">look great</span> and <span className="accent">work great.</span>
          </p>
        </div>

        <div className="footer-col">
          <h2 className="footer-col-title accent">My Socials</h2>
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
          <h2 className="footer-col-title accent">Wanna work together?</h2>
          <p className="footer-col-text mv-text">
            Open to clients, collaborations and new ideas.
          </p>
          <a href="/contact" className="btn glassmorphism accent outlined-accent footer-cta">
            ¡Contact Me!
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2025 · Marcelo Villalobos · San Jose, Costa Rica
        </p>
      </div>
    </footer>
  )
}
