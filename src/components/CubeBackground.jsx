// Generated once at module load — stable across re-renders, random on each page load.
// Cubes use vh units for vertical position so density stays consistent across
// pages of different lengths. Short pages (e.g., /contact) clip excess cubes
// via overflow:hidden on .cube-bg; long pages show more of them.
function rand(min, max) {
  return Math.random() * (max - min) + min
}

// Spread ~30 cubes across 500vh of vertical space (~one cube every 17vh on average).
// Cubes in the first viewport (top < 100vh) get short delays so the hero section
// fills with motion immediately on page load; later cubes stagger naturally.
const CUBES = Array.from({ length: 30 }, () => {
  const filled  = Math.random() > 0.5
  const opacity = rand(0.14, 0.45)
  const topVh   = rand(2, 500)
  const isHero  = topVh < 100
  return {
    left:     `${rand(2, 96)}%`,
    top:      `${topVh}vh`,
    size:     rand(12, 35),
    opacity,
    scale:    rand(3, 7),
    rotate:   rand(80, 270),
    delay:    `${isHero ? rand(0, 1.5) : rand(2, 14)}s`,
    duration: `${isHero ? rand(6, 11) : rand(9, 19)}s`,
    filled,
  }
})

export default function CubeBackground() {
  return (
    <div className="cube-bg" aria-hidden="true">
      {CUBES.map((cube, i) => (
        <div
          key={i}
          className="cube-bg__cube"
          style={{
            left:            cube.left,
            top:             cube.top,
            width:           `${cube.size}px`,
            height:          `${cube.size}px`,
            border:          `1px solid rgba(77, 226, 151, ${Math.min(cube.opacity * 2.5, 0.7)})`,
            backgroundColor: cube.filled
              ? `rgba(77, 226, 151, ${cube.opacity * 0.5})`
              : 'transparent',
            '--cube-opacity': cube.opacity,
            '--cube-scale':   cube.scale,
            '--cube-rotate':  `${cube.rotate}deg`,
            animationDelay:    cube.delay,
            animationDuration: cube.duration,
          }}
        />
      ))}
    </div>
  )
}
