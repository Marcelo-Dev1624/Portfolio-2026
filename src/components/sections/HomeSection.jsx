import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function HomeSection() {
  const ref = useScrollAnimation()

  return (
    <section ref={ref} className="section elements-animation-hidden" id="Home">
      <div className="home-elements lg:mt-16">
        <div className="home-elements-content">
          <h1 className="header-text-1">
            Hello
            <br />
            I'm <span className="accent">Marcelo</span>
          </h1>
          <div className="feature-box home-feature-location glassmorphism">
            <i className="fa-solid fa-location-dot" />
            <p>San Jose, Costa Rica</p>
          </div>
        </div>
        <img src="/images/memoji.png" alt="Marcelo memoji" />
      </div>

      {/* Animated floating background circles */}
      <div className="bg-area-index">
        <ul className="bg-circles">
          {[...Array(10)].map((_, i) => <li key={i} />)}
        </ul>
      </div>
    </section>
  )
}
