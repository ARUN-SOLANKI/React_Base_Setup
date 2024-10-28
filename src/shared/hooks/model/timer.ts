import { useState, useEffect, useRef, useCallback } from 'react'

type UseTimerOptions = {
  /**
   * Whether should auto start
   */
  autoStart?: boolean
  /**
   * Interval in milliseconds
   */
  interval?: number
  /**
   * Callback on each tick
   */
  onTick?: (time: number) => void
  /**
   * Callback when the timer completes
   */
  onComplete?: () => void
}

export const useTimer = (duration: number, options?: UseTimerOptions) => {
  const {
    autoStart = false,
    interval = 1000,
    onTick,
    onComplete,
  } = options || {}

  const [time, setTime] = useState(duration) // Current time in ms
  const [isRunning, setIsRunning] = useState(autoStart)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  const start = useCallback(() => {
    if (!isRunning) {
      setIsRunning(true)
    }
  }, [isRunning])

  const stop = useCallback(() => {
    setIsRunning(false)
    clearTimer()
  }, [clearTimer])

  const reset = useCallback(
    (newDuration?: number) => {
      clearTimer()
      setTime(newDuration ?? duration)
      if (autoStart) setIsRunning(true)
    },
    [clearTimer, autoStart, duration]
  )

  const pause = useCallback(() => {
    clearTimer()
    setIsRunning(false)
  }, [clearTimer])

  useEffect(() => {
    if (isRunning && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => {
          const newTime = prev - interval
          if (newTime <= 0) {
            clearTimer()
            onComplete?.()
            return 0
          }
          onTick?.(newTime)
          return newTime
        })
      }, interval)
    } else {
      clearTimer()
    }

    return clearTimer // Clean up on unmount or when timer stops
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRunning, time, interval, onComplete, clearTimer])

  return { time, isRunning, start, stop, reset, pause }
}
