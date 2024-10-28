import { useState } from 'react'

import Cookies from 'js-cookie'

/**
 * Define a type for the key used to store the state in local storage
 * Add more keys as needed
 */
type LocalStateKey = string

// Define a type for the value that can be stored in local storage
type LocalStorageValue<T> = T | (() => T)

export const useLocalState = <T>(
  key: LocalStateKey,
  initialValue: LocalStorageValue<T>,
  storageType: 'localStorage' | 'sessionStorage' | 'cookie' = 'localStorage'
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  // Retrieve the initial state from local storage if it exists
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      let item = window.localStorage.getItem(key)
      if (storageType === 'sessionStorage') {
        item = window.sessionStorage.getItem(key)
      } else if (storageType === 'cookie') {
        item = Cookies.get(key) ?? null
      }
      // eslint-disable-next-line no-nested-ternary
      return item
        ? storageType === 'cookie'
          ? item
          : JSON.parse(item)
        : typeof initialValue === 'function'
          ? (initialValue as () => T)()
          : initialValue
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(
        `Error retrieving state for key "${key}" from localStorage:`,
        error
      )
      return initialValue
    }
  })

  // Update both the local state and localStorage
  const setValue: React.Dispatch<React.SetStateAction<T>> = (value) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      // Update state
      setStoredValue(valueToStore)
      // Update localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(
        `Error setting state for key "${key}" in localStorage:`,
        error
      )
    }
  }

  return [storedValue, setValue]
}
