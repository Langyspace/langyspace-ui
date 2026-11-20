import type { ComponentPropsWithRef, ReactNode } from 'react'
import type { AudioSequenceControlsProps } from './AudioSequenceControls.types'
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
  /** Compact lesson calls fit the presentation viewport and resolve device dimensions from theme. */
  density?: 'regular' | 'compact'
  direction?: 'outgoing' | 'incoming'
  /** Pause the exercise, including its ringtone, when leaving its slide. */
  active?: boolean
  ringtoneSrc?: string
  /** Restrained notification level, independent of lesson speech volume. */
  ringtoneVolume?: number
  /** Conversation prompts rendered inside the phone using its caption bubbles. */
  messages?: readonly { id: string; text: ReactNode; label?: ReactNode }[]
  /** Recorded-turn controls live immediately beside the phone caption. */
  playback?: AudioSequenceControlsProps
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
    connected: string
    playRingtone: string
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
