import { useEffect, useRef } from 'react'

export function useScrollInView(show = true) {
  const ref = useRef(null)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any
      ;(ref.current as any)?.scrollIntoView({ behavior: 'smooth' })
    }, 0)

    return () => clearTimeout(timeoutId)
  }, [show])

  return { ref }
}
