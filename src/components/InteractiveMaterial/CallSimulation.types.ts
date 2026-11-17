import type { ComponentPropsWithRef, ReactNode } from 'react'
export type CallSimulationState =
  'idle' | 'ringing' | 'menu' | 'connected' | 'ended'
export interface CallSimulationProps extends Omit<
  ComponentPropsWithRef<'section'>,
  'children' | 'onKeyPress'
> {
  contactName: string
  initials: string
  /** Video-call exercise presentation. No camera or microphone is requested. */
  presentation?: 'audio' | 'video'
  avatarUrl?: string
  signalPoor?: boolean
  onSignalToggle?: () => void
  state: CallSimulationState
  elapsedLabel?: string
  caption?: ReactNode
  captionLabel?: string
  pressedKey?: string
  status?: ReactNode
  children?: ReactNode
  onCall: () => void
  onHangUp: () => void
  onKeyPress?: (key: string) => void
  disabled?: boolean
  labels?: Partial<{
    idle: string
    ringing: string
    menu: string
    ended: string
    call: string
    callAgain: string
    hangUp: string
    keypad: string
    cameraOff: string
    signalPoor: string
    signalGood: string
  }>
}
