import {useState, useRef, useLayoutEffect, FC} from 'react'
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from 'framer-motion'

type ParallaxProps = {
  offset?: number
  clampInitial?: boolean
  clampFinal?: boolean
}

const Parallax: FC<ParallaxProps> = ({
  children,
  offset = 50,
  clampInitial,
  clampFinal,
}) => {
  const prefersReducedMotion = useReducedMotion()
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  const {scrollY} = useViewportScroll()

  const initial = elementTop - clientHeight
  const final = elementTop + offset

  const yRange = useTransform(
    scrollY,
    [initial, final],
    [clampInitial ? 0 : offset, clampFinal ? 0 : -offset]
  )
  const y = useSpring(yRange, {stiffness: 400, damping: 90})

  useLayoutEffect(() => {
    const element = ref.current
    const onResize = () => {
      if (element) {
        setElementTop(
          element.getBoundingClientRect().top + window.scrollY ||
            window.pageYOffset
        )
        setClientHeight(window.innerHeight)
      }
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [ref])

  // Don't parallax if the user has "reduced motion" enabled
  if (prefersReducedMotion) {
    return <>{children}</>
  }

  return (
    <motion.div ref={ref} style={{transform: 'translateZ(0)', y}}>
      {children}
    </motion.div>
  )
}

export default Parallax
