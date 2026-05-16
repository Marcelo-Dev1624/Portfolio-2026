import { useNavigate } from 'react-router-dom'
import Reveal from '../Reveal'

const stats = [
  { value: '4+', label: 'Years coding' },
  { value: '5+', label: 'Projects built' },
  { value: '5+',  label: 'Happy client' },
]

export default function AboutSection() {
  const navigate = useNavigate()

  return (
    <section className="section px-4" id="About">
      <div className="about-v2">

        {/* Photo */}
        <Reveal className="about-v2-photo">
          <div className="about-v2-photo-ring">
            <img src="/images/marcelo_2.jpg" alt="Marcelo Villalobos" />
          </div>
        </Reveal>

        {/* Content */}
        <div className="about-v2-content">
          <Reveal as="p" index={1} className="about-v2-tag accent">Junior Full-Stack Developer</Reveal>

          <Reveal as="h1" index={2} className="header-text-3 secondary">
            Passionate about building things that{' '}
            <span className="accent">look great</span> and{' '}
            <span className="accent">work great.</span>
          </Reveal>

          <Reveal as="p" index={3} className="mv-text about-v2-bio">
            I'm <span className="accent">Marcelo Villalobos</span>, based in Costa Rica and
            currently finishing my Computer Science degree. My passion lives in front-end and
            design — but when it comes to building, I go end-to-end.
            <br /><br />
            I have real-world experience through <span className="accent">IDS</span>, and this
            year I'm expanding into collaborative projects, supporting friends' products, and
            taking on my own clients.
          </Reveal>

          {/* Stats */}
          <Reveal className="about-v2-stats" index={4}>
            {stats.map((s) => (
              <div key={s.label} className="about-v2-stat">
                <span className="about-v2-stat-value accent">{s.value}</span>
                <span className="about-v2-stat-label">{s.label}</span>
              </div>
            ))}
          </Reveal>

          <Reveal index={5}>
            <button
              onClick={() => navigate('/contact')}
              className="btn glassmorphism mv-h3 accent about-v2-btn"
            >
              Contact Me
            </button>
          </Reveal>
        </div>

      </div>
    </section>
  )
}