import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const skills = [
  // Languages
  { src: "/images/technologies/html.png", alt: "HTML" },
  { src: "/images/technologies/css.png", alt: "CSS" },
  { src: "/images/technologies/js.png", alt: "JavaScript" },
  { src: "/images/technologies/Typescript_logo_2020.png", alt: "TypeScript" },
  { src: "/images/technologies/java.png", alt: "Java" },

  // Frontend
  { src: "/images/technologies/react.png", alt: "React" },
  { src: "/images/technologies/nextjs-icon.svg", alt: "Next.js" },
  { src: "/images/technologies/tailwind.png", alt: "Tailwind CSS" },
  { src: "/images/technologies/bootstrap.png", alt: "Bootstrap" },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
    alt: "Vite",
  },

  // Backend
  { src: "/images/technologies/NestJS.svg", alt: "NestJS" },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    alt: "Node.js",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    alt: "Express",
  },

  // Databases
  { src: "/images/technologies/postgresql.png", alt: "PostgreSQL" },
  { src: "/images/technologies/mysql.png", alt: "MySQL" },
  { src: "/images/technologies/mongo.png", alt: "MongoDB" },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    alt: "Prisma",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    alt: "Redis",
  },

  // Infra & tools
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    alt: "Docker",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    alt: "Git",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    alt: "GitHub",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    alt: "Postman",
  },
];

// Duplicamos el array para que el loop sea infinito y sin saltos
const track = [...skills, ...skills];

export default function SkillsSection() {
  const ref = useScrollAnimation();
  const { t } = useTranslation();

  return (
    <section ref={ref} id="Skills" className="elements-animation-hidden">
      <div className="px-6 mt-12 md:px-16 lg:px-24 xl:px-60 xl:py-2 xl:mt-0 text-center">
        <h1 className="header-text-3 accent">{t('skills.title')}</h1>
        <div className="line my-6"></div>
      </div>

      {/* Carousel */}
      <div className="px-6 md:px-16 lg:px-24 xl:px-60">
        <div className="skills-carousel-card glassmorphism">
          <div className="skills-carousel-wrapper">
            <div className="skills-carousel-track">
              {track.map((skill, i) => (
                <div key={i} className="skills-carousel-item">
                  <img src={skill.src} alt={skill.alt} />
                  <span>{skill.alt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-16 lg:px-24 xl:px-60">
        <div className="line my-6"></div>
      </div>
    </section>
  );
}
