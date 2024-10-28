import { useCallback, useState } from 'react'

export const useToggleState = (initialValue: boolean) => {
  const [value, setValue] = useState<boolean>(initialValue)

  const toggleValue = useCallback(() => {
    setValue((prevValue) => !prevValue)
  }, [])

  return [value, toggleValue, setValue] as const
}
