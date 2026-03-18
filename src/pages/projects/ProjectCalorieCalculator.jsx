import ProjectDetailLayout from '../ProjectDetailLayout'

const technologies = [
  { src: '/images/technologies/react.png', alt: 'React' },
  { src: '/images/technologies/bootstrap.png', alt: 'Bootstrap' },
  { src: '/images/technologies/js.png', alt: 'JavaScript' },
]

export default function ProjectCalorieCalculator() {
  return (
    <ProjectDetailLayout title="Calorie Calculator" technologies={technologies}>
      <div className="image-and-description">
        <img src="/images/projects-covers/Calorie_Calculator.png" alt="Calorie Calculator" />
        <div className="line-vertical"></div>
        <div className="text-body">
          <h1 className="header-text-4">What's this project about?</h1>
          <p className="mv-text">
            A simple app you can use to convert macronutrients, such as{' '}
            <span className="accent">Carbs, Protein, Fat and Alcohol</span> to their equivalent
            values in <span className="accent">Calories</span>.
            <br />
            <br />
            This tool is perfect for anyone tracking their nutrition or learning about the caloric
            content of different macronutrients. It provides quick and accurate conversions to help
            users make informed dietary decisions.
          </p>
        </div>
      </div>

      <div className="description-and-video">
        <div className="text-body">
          <h1 className="header-text-4">Technical Features</h1>
          <p className="mv-text">
            Built with <span className="accent">React</span> for a dynamic and interactive user
            experience, this calculator features real-time calculations and a clean, intuitive
            interface. The app uses <span className="accent">Bootstrap</span> for responsive design
            and <span className="accent">JavaScript</span> for the calculation logic.
            <br />
            <br />
            The application includes input validation, instant results, and a user-friendly design
            that makes nutrition tracking accessible to everyone.
          </p>

          <div className="mt-8 text-center">
            <a
              href="https://marcelodev.net/calorie-calculator"
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
