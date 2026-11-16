import type { ComponentPropsWithRef, ReactNode } from 'react'
export interface FluencyRound {
  id: string
  seconds: number
  audience?: ReactNode
}
export interface FluencyTimerProps extends Omit<
  ComponentPropsWithRef<'section'>,
  'title'
> {
  title: ReactNode
  description?: ReactNode
  rounds: readonly FluencyRound[]
  roundIndex: number
  remainingSeconds: number
  running: boolean
  support?: readonly string[]
  onToggle: () => void
  onReset: () => void
  labels?: Partial<{
    start: string
    pause: string
    restart: string
    round: string
    finished: string
    empty: string
  }>
}
