import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Footer() {
  const ref = useScrollAnimation()

  return (
    <div id="footer" ref={ref} className="footer elements-animation-hidden glassmorphism">
      <div className="footer-logo">
        <img src="/images/logo_completo_blanco.png" alt="MarceloDev" />
      </div>
      <div className="footer-body">
        <div className="footer-col">
          <h2 className="mv-h1 accent">My Socials</h2>
          <ul>
            <li>
              <a href="https://github.com/marcelo-dev1624" target="_blank" rel="noreferrer">
                <i className="fab fa-github mx-1" />Github
              </a>
            </li>
            <div className="line" />
            <li>
              <a href="https://instagram.com/marcelo.v1624" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram mx-1" />Instagram
              </a>
            </li>
            <div className="line" />
            <li>
              <a href="https://www.linkedin.com/in/marcelo-villalobos-400965244/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin mx-1" />LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h1 className="mv-h1 accent">Wanna work together?</h1>
          <a href="/contact" className="btn glassmorphism mo accent">¡Contact Me!</a>
          <p className="footer-copyright mv-text">Copyright, 2025 - San Jose, Costa Rica</p>
        </div>
      </div>
    </div>
  )
}
