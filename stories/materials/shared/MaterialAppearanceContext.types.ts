import type { Dispatch, SetStateAction } from 'react'
export interface MaterialAppearance {
  mode: 'dark' | 'light'
  setMode: Dispatch<SetStateAction<'dark' | 'light'>>
}
