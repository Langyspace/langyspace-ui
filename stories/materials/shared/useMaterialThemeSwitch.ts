import { useState } from 'react'

const key = 'langyspace.materials.theme'

export function useMaterialThemeSwitch(enabled = true) {
  const [light, setLight] = useState(() => {
    try {
      return enabled && window.localStorage.getItem(key) === 'light'
    } catch {
      return false
    }
  })
  const toggle = () => {
    try {
      window.localStorage.setItem(key, light ? 'dark' : 'light')
    } catch {
      // Keep the preference in memory if storage is unavailable.
    }
    setLight(!light)
  }
  return { light, toggle }
}
