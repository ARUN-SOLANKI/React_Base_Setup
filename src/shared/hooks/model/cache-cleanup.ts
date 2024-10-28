import { useEffect, useRef } from 'react'

import { ForceAny } from 'shared/typescript'

/**
 * Custom hook to cleanup cache when component unmounts but not when data changes.
 */
export function useCacheCleanup<TData>(
  data: TData,
  cleanup: (data: TData) => void,
  deps: ForceAny[] = []
) {
  const dataRef = useRef(data)

  useEffect(() => {
    dataRef.current = data
  }, [data])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => cleanup(dataRef.current), deps)
}
