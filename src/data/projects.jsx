// Single source of truth for all project metadata.
// Localized copy (title + description) lives in src/i18n/locales/*.json
// under `projects.<id>.title` and `projects.<id>.cardDescription`.

export const featuredProjects = [
  {
    id: 'puntus',
    style: 'style-1',
    image: '/images/projects-covers/puntus-org.jpg',
    technologies: [
      { src: '/images/technologies/nextjs-icon.svg', alt: 'Next.js' },
      { src: '/images/technologies/NestJS.svg', alt: 'NestJS' },
      { src: '/images/technologies/Typescript_logo_2020.png', alt: 'TypeScript' },
      { src: '/images/technologies/postgresql.png', alt: 'PostgreSQL' },
      { src: '/images/technologies/tailwind.png', alt: 'Tailwind CSS' },
    ],
    link: '/projects/puntus',
  },
  {
    id: 'coc',
    style: 'style-2',
    image: '/images/projects-covers/IDS.png',
    technologies: [
      { src: '/images/technologies/java.png', alt: 'Java' },
      { src: '/images/technologies/mysql.png', alt: 'MySQL' },
      { src: '/images/technologies/mongo.png', alt: 'MongoDB' },
    ],
    link: '/projects/coc',
  },
  {
    id: 'aql',
    style: 'style-1',
    image: '/images/projects-covers/AQL.png',
    technologies: [
      { src: '/images/technologies/java.png', alt: 'Java' },
      { src: '/images/technologies/mysql.png', alt: 'MySQL' },
    ],
    link: '/projects/aql',
  },
]

// "Early Work" — projects from when learning the basics.
// Kept separate from main work so the portfolio doesn't dilute the strong ones,
// but still shown on /projects under their own clearly-labelled section.
export const earlyProjects = [
  {
    id: 'calorie-calculator',
    style: 'style-2',
    image: '/images/projects-covers/Calorie_Calculator.png',
    technologies: [
      { src: '/images/technologies/react.png', alt: 'React' },
      { src: '/images/technologies/bootstrap.png', alt: 'Bootstrap' },
      { src: '/images/technologies/js.png', alt: 'JavaScript' },
    ],
    link: '/projects/calorie-calculator',
  },
  {
    id: 'aesthetic-clock',
    style: 'style-1',
    image: '/images/projects-covers/aesthethic-clock.png',
    technologies: [
      { src: '/images/technologies/html.png', alt: 'HTML' },
      { src: '/images/technologies/css.png', alt: 'CSS' },
      { src: '/images/technologies/js.png', alt: 'JavaScript' },
    ],
    link: '/projects/aesthetic-clock',
  },
]

// Convenience export combining everything — used wherever both sets are needed.
export const allProjects = [...featuredProjects, ...earlyProjects]
