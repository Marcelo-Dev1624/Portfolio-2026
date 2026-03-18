import ProjectDetailLayout from '../ProjectDetailLayout'

const technologies = [
  { src: '/images/technologies/java.png', alt: 'Java' },
  { src: '/images/technologies/mysql.png', alt: 'MySQL' },
  { src: '/images/technologies/mongo.png', alt: 'MongoDB' },
]

export default function ProjectCOC() {
  return (
    <ProjectDetailLayout title="COC Generator - IDS" technologies={technologies}>
      <div className="image-and-description">
        <img src="/images/projects-covers/IDS.png" alt="COC Generator - IDS" />
        <div className="line-vertical"></div>
        <div className="text-body">
          <h1 className="header-text-4">What's this project about?</h1>
          <p className="mv-text">
            This document generator app main purpose is to{' '}
            <span className="accent">simplify internal processes</span> to make them more{' '}
            <span className="accent">efficient</span> and less prone to human error.
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
          <h1 className="header-text-4">Want to learn more?</h1>
          <p className="mv-text">
            Here is a <span className="accent">promotional video</span> made for the company's
            media, talking about the project, where you can see a little bit of it being used,
            simulating a real case scenario.
          </p>
        </div>
        <iframe
          className="project-video"
          src="https://www.youtube.com/embed/F39hUFckLeE?si=cdehciAtfCLp60Pq&start=1"
          title="COC Generator - IDS video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </ProjectDetailLayout>
  )
}
