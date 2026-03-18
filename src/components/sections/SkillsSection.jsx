import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const skills = [
  { src: "/images/technologies/html.png", alt: "HTML" },
  { src: "/images/technologies/css.png", alt: "CSS" },
  { src: "/images/technologies/js.png", alt: "JavaScript" },
  { src: "/images/technologies/java.png", alt: "Java" },
  { src: "/images/technologies/bootstrap.png", alt: "Bootstrap" },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    alt: "Tailwind CSS",
  },
  { src: "/images/technologies/react.png", alt: "React" },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
    alt: "Vite",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    alt: "Node.js",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    alt: "Express",
  },
  { src: "/images/technologies/mongo.png", alt: "MongoDB" },
  { src: "/images/technologies/mysql.png", alt: "MySQL" },
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

  return (
    <section ref={ref} id="Skills" className="elements-animation-hidden">
      <div className="px-6 mt-12 md:px-16 lg:px-24 xl:px-60 xl:py-2 xl:mt-0 text-center">
        <h1 className="header-text-3 accent">My Skills</h1>
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
