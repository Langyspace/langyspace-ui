import { useSyncExternalStore } from 'react'

const subscribe = () => () => undefined

// False during SSR and hydration, true once the DOM is available.
export function useIsClient() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  )
}
