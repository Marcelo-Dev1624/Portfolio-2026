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
        <img src="/images/projects-covers/puntus.png" alt="Puntus" />
        <div className="line-vertical"></div>
        <div className="text-body">
          <h1 className="header-text-4">What's Puntus?</h1>
          <p className="mv-text">
            <span className="accent">Puntus</span> is a SaaS loyalty platform built for Latin
            American small and mid-sized businesses. We let merchants run their own digital{' '}
            <span className="accent">points and rewards programs</span> in minutes — customers
            access their cards directly from <span className="accent">Apple Wallet</span> or{' '}
            <span className="accent">Google Wallet</span>, with no extra app to download.
            <br />
            <br />
            I'm <span className="accent">co-founder</span> and part of the team driving the
            product end to end — from architecture decisions to the customer-facing experience.
          </p>
        </div>
      </div>

      <div className="description-and-video">
        <div className="text-body">
          <h1 className="header-text-4">What's inside</h1>
          <p className="mv-text">
            A multi-tenant cloud architecture with{' '}
            <span className="accent">AES-256</span> encryption, a{' '}
            <span className="accent">no-code rule engine</span> that lets merchants define
            point-earning and reward logic without touching code, real-time business analytics,
            and integrations with popular POS systems in the region.
            <br />
            <br />
            Beyond tech, Puntus is about giving small businesses the same kind of fidelization
            tools that big chains have — at a price they can actually afford and in their own
            language.
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
