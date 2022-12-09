export function useLocalStorage(key: string, defaultValue = '') {
  let value: string = defaultValue

  if (typeof window !== 'undefined') {
    value = localStorage ? JSON.parse(localStorage.getItem(key) as string) : defaultValue
  }

  const setValue = (newValue: unknown) => {
    if (localStorage) {
      if (newValue || typeof newValue === 'boolean') {
        localStorage?.setItem(key, JSON.stringify(newValue))
      } else {
        localStorage?.removeItem(key)
      }
    }
  }

  return [value, setValue]
}

export const getLocalStorage = (key: string, defaultValue = null) => {
  const value = localStorage.getItem(key)
  if (value) {
    return JSON.parse(value)
  }
  return defaultValue
}
