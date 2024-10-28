import { useState, useEffect, useRef, useMemo } from 'react'

type InputStateOptions = {
  debounceTime?: number
}

export const useInputState = <TValue extends string | number>(
  initialValue: TValue,
  options?: InputStateOptions
) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { debounceTime } = useMemo(
    () => ({
      debounceTime: 2000,
      ...options,
    }),
    [options]
  )

  const [value, setValue] = useState<TValue>(initialValue)
  const [debouncedValue, setDebouncedValue] = useState(initialValue)

  const [isTyping, setIsTyping] = useState(false)
  const isInputEmpty = value === ''

  const typingRef = useRef<NodeJS.Timeout | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as TValue)
    setIsTyping(true)

    // Clear any previous debounce timer
    if (typingRef.current) {
      clearTimeout(typingRef.current)
    }

    // Set a new debounce timer for 2 seconds
    typingRef.current = setTimeout(() => {
      setIsTyping(false)
    }, 2000)
  }

  const setFocus = () => {
    inputRef.current?.focus()
  }

  // Cleanup the timeout on unmount
  useEffect(() => {
    return () => {
      if (typingRef.current) {
        clearTimeout(typingRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, debounceTime)

    // Cleanup the timeout if query changes or component unmounts
    return () => {
      clearTimeout(handler)
    }
  }, [value, debounceTime])

  return {
    value,
    debouncedValue,
    onChange: handleChange,
    isInputEmpty,
    clearInput: () => setValue('' as TValue),
    isTyping,
    inputRef,
    setFocus,
  }
}
