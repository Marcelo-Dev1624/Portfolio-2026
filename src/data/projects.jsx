// Single source of truth for all project data.
// To add a new project: add an entry here and it shows up everywhere automatically.

export const featuredProjects = [
  {
    id: 'coc',
    title: 'COC Generator - IDS',
    style: 'style-2',
    image: '/images/projects-covers/IDS.png',
    technologies: [
      { src: '/images/technologies/java.png', alt: 'Java' },
      { src: '/images/technologies/mysql.png', alt: 'MySQL' },
      { src: '/images/technologies/mongo.png', alt: 'MongoDB' },
    ],
    description: (
      <>
        This document generator app main purpose is to{' '}
        <span className="accent">simplify internal processes</span> to make them{' '}
        <span className="accent">efficient</span> and less prone to human error.
        <br /><br />
        For privacy policies, the project can't be showed to the public, only with special
        permissions. This is due to <span className="accent">safeguard</span> the company's
        sensitive data.
      </>
    ),
    link: '/projects/coc',
  },
  {
    id: 'aql',
    title: 'AQL Generator - IDS',
    style: 'style-1',
    image: '/images/projects-covers/AQL.png',
    technologies: [
      { src: '/images/technologies/java.png', alt: 'Java' },
      { src: '/images/technologies/mysql.png', alt: 'MySQL' },
    ],
    description: (
      <>
        This is an AQL document generator app. AQL documents are required by the company's
        clients to certify the quality of their orders. Again, the idea is to{' '}
        <span className="accent">simplify internal processes</span> to make their creation more{' '}
        <span className="accent">efficient</span> and less prone to human error.
        <br /><br />
        For privacy policies, the project can't be showed to the public, only with special
        permissions. This is due to <span className="accent">safeguard</span> the company's
        sensitive data.
      </>
    ),
    link: '/projects/aql',
  },
]

export const allProjects = [
  ...featuredProjects,
  {
    id: 'calorie-calculator',
    title: 'Calorie Calculator',
    style: 'style-2',
    image: '/images/projects-covers/Calorie_Calculator.png',
    technologies: [
      { src: '/images/technologies/react.png', alt: 'React' },
      { src: '/images/technologies/bootstrap.png', alt: 'Bootstrap' },
      { src: '/images/technologies/js.png', alt: 'JavaScript' },
    ],
    description: (
      <>
        A simple app you can use to convert macronutrients, such as{' '}
        <span className="accent">Carbs, Protein, Fat and Alcohol</span> to their equivalent
        values in <span className="accent">Calories</span>.
      </>
    ),
    link: '/projects/calorie-calculator',
  },
  {
    id: 'aesthetic-clock',
    title: 'Aesthetic Clock',
    style: 'style-1',
    image: '/images/projects-covers/aesthethic-clock.png',
    technologies: [
      { src: '/images/technologies/html.png', alt: 'HTML' },
      { src: '/images/technologies/css.png', alt: 'CSS' },
      { src: '/images/technologies/js.png', alt: 'JavaScript' },
    ],
    description: (
      <>
        A simple clock designed to be your company while being{' '}
        <span className="accent">productive</span>.
        <br /><br />
        You can have it running in the background to get you in the{' '}
        <span className="accent">flow</span>, and also be aware of the time. 😃
      </>
    ),
    link: '/projects/aesthetic-clock',
  },
]
