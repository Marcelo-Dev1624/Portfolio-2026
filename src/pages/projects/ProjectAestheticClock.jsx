import ProjectDetailLayout from '../ProjectDetailLayout'

const technologies = [
  { src: '/images/technologies/html.png', alt: 'HTML' },
  { src: '/images/technologies/css.png', alt: 'CSS' },
  { src: '/images/technologies/js.png', alt: 'JavaScript' },
]

export default function ProjectAestheticClock() {
  return (
    <ProjectDetailLayout title="Aesthetic Clock" technologies={technologies}>
      <div className="image-and-description">
        <img src="/images/projects-covers/aesthethic-clock.png" alt="Aesthetic Clock" />
        <div className="line-vertical"></div>
        <div className="text-body">
          <h1 className="header-text-4">What's this project about?</h1>
          <p className="mv-text">
            An <span className="accent">aesthetic clock</span> application that combines
            functionality with beautiful design. This project showcases the power of{' '}
            <span className="accent">CSS animations</span> and{' '}
            <span className="accent">JavaScript</span> to create an engaging and visually
            appealing time display.
            <br />
            <br />
            The clock features smooth animations, elegant typography, and a minimalist design that
            makes it both practical and visually stunning.
          </p>
        </div>
      </div>

      <div className="description-and-video">
        <div className="text-body">
          <h1 className="header-text-4">Design &amp; Development</h1>
          <p className="mv-text">
            Built with <span className="accent">HTML5</span>,{' '}
            <span className="accent">CSS3</span>, and{' '}
            <span className="accent">JavaScript</span>, this project demonstrates advanced CSS
            techniques including animations, gradients, and responsive design. The clock updates
            in real-time and features smooth transitions.
            <br />
            <br />
            The design focuses on aesthetics while maintaining functionality, creating a perfect
            balance between form and function.
          </p>

          <div className="mt-8 text-center">
            <a
              href="https://marcelodev.net/aesthetic-clock"
              target="_blank"
              rel="noreferrer"
              className="btn glassmorphism accent outlined-accent mv-h3 px-8"
            >
              <i className="fas fa-external-link-alt mr-2"></i>Visit Live Project
            </a>
          </div>
        </div>
      </div>
    </ProjectDetailLayout>
  )
}
