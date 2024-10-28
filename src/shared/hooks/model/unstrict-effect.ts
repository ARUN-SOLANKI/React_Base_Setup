import { DependencyList, useEffect, useRef } from 'react'

type UseRestrictEffect = typeof useEffect

export const useRestrictEffect: UseRestrictEffect = (cb, deps) => {
  const ref = useRef<DependencyList>()

  useEffect(() => {
    const isTrue = deps?.every((d, i) => d === ref.current?.[i])
    if (!isTrue) {
      cb()
    }
    ref.current = deps
  }, [deps])
}
