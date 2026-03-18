import ProjectDetailLayout from '../ProjectDetailLayout'

const technologies = [
  { src: '/images/technologies/java.png', alt: 'Java' },
  { src: '/images/technologies/mysql.png', alt: 'MySQL' },
]

export default function ProjectAQL() {
  return (
    <ProjectDetailLayout title="AQL Generator - IDS" technologies={technologies}>
      <div className="image-and-description">
        <img src="/images/projects-covers/AQL.png" alt="AQL Generator - IDS" />
        <div className="line-vertical"></div>
        <div className="text-body">
          <h1 className="header-text-4">What's this project about?</h1>
          <p className="mv-text">
            This is an AQL document generator app. AQL documents are required by the company's
            clients to certify the quality of their orders. The idea is to{' '}
            <span className="accent">simplify internal processes</span> to make their creation
            more <span className="accent">efficient</span> and less prone to human error.
            <br />
            <br />
            For privacy policies, the project can't be showed to the public, only with special
            permissions. This is due to <span className="accent">safeguard</span> the company's
            sensitive data.
          </p>
        </div>
      </div>

      <div className="description-and-video">
        <div className="text-body">
          <h1 className="header-text-4">Technical Details</h1>
          <p className="mv-text">
            This application was built using <span className="accent">Java</span> for the backend
            logic and <span className="accent">MySQL</span> for data management. The system
            automates the generation of AQL (Acceptance Quality Limit) documents, which are
            crucial for quality control processes in manufacturing and production environments.
            <br />
            <br />
            The application streamlines the document creation workflow, reducing manual errors and
            improving overall efficiency in quality assurance procedures.
          </p>
        </div>
      </div>
    </ProjectDetailLayout>
  )
}
