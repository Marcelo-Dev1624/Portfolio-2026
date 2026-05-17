import ProjectDetailLayout from '../ProjectDetailLayout'

const technologies = [
  { src: '/images/technologies/react.png', alt: 'React' },
  { src: '/images/technologies/js.png', alt: 'JavaScript' },
  { src: '/images/technologies/mongo.png', alt: 'MongoDB' },
]

export default function ProjectPuntus() {
  return (
    <ProjectDetailLayout title="Puntus — Loyalty Platform" technologies={technologies}>
      <div className="image-and-description">
        <img src="/images/projects-covers/puntus-org.jpg" alt="Puntus" />
        <div className="line-vertical"></div>
        <div className="text-body">
          <h1 className="header-text-4">My biggest project to date</h1>
          <p className="mv-text">
            I'm <span className="accent">co-founder and developer</span> of{' '}
            <span className="accent">Puntus</span> — a SaaS loyalty platform built for Latin
            American small and mid-sized businesses. We let merchants run their own digital{' '}
            <span className="accent">points and rewards programs</span> in minutes, with cards
            customers access directly from <span className="accent">Apple Wallet</span> or{' '}
            <span className="accent">Google Wallet</span> — no extra app to download.
            <br />
            <br />
            This is the project I'm most proud of: not just because of what it does, but
            because I've been involved <span className="accent">end-to-end</span> — from the
            initial idea and product decisions, all the way down to writing the code that
            powers it in production.
          </p>
        </div>
      </div>

      <div className="description-and-video">
        <div className="text-body">
          <h1 className="header-text-4">What I built</h1>
          <p className="mv-text">
            On the engineering side, I worked on a{' '}
            <span className="accent">multi-tenant cloud architecture</span> with{' '}
            <span className="accent">AES-256</span> encryption, a{' '}
            <span className="accent">no-code rule engine</span> that lets merchants define
            point-earning and reward logic without touching a single line of code, real-time
            business analytics, and integrations with popular POS systems in the region.
            <br />
            <br />
            Beyond the tech, Puntus is about giving small businesses the same fidelization
            tools that big chains have — at a price they can actually afford and in their own
            language. Seeing it live, used by real merchants, is the most rewarding part.
          </p>

          <div className="mt-8 text-center">
            <a
              href="https://puntus.net"
              target="_blank"
              rel="noreferrer"
              className="btn glassmorphism accent outlined-accent mv-h3 px-8"
            >
              <i className="fas fa-external-link-alt mr-2"></i>Visit Puntus
            </a>
          </div>
        </div>
      </div>
    </ProjectDetailLayout>
  )
}
