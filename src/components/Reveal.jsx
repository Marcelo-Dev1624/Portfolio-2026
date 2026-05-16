import { useScrollAnimation } from '../hooks/useScrollAnimation'

/**
 * Wraps children with a fade + slide-up + scale reveal-on-scroll animation.
 *
 * Props:
 *  - delay: ms to wait before animating (use with `index` to stagger lists)
 *  - index: shorthand for delay; effective delay = index * step
 *  - step: stagger step in ms (default 90)
 *  - as: tag/element to render (default 'div')
 *  - className: extra classes
 */
export default function Reveal({
  children,
  delay,
  index = 0,
  step = 90,
  as: Tag = 'div',
  className = '',
  style,
  ...rest
}) {
  const ref = useScrollAnimation()
  const computedDelay = delay ?? index * step

  return (
    <Tag
      ref={ref}
      className={`elements-animation-hidden ${className}`.trim()}
      style={{ transitionDelay: `${computedDelay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
