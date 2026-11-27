import type { ReactNode } from 'react'
export type NotesCapability =
  | { mode: 'teacher-popup'; popupUrl: string }
  | { mode: 'preview-local' | 'pending' }
export interface NotesHostProviderProps {
  materialKey: string
  children: ReactNode
}
