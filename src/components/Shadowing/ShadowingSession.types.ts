import type { ComponentPropsWithRef, ReactNode } from 'react'
import type { PracticePlaybackControlsProps } from '../Practice/PracticePlaybackControls.types'
import type { ShadowingActivePhraseProps } from './ShadowingActivePhrase.types'

export interface ShadowingSessionProps<
  Speed extends string = string,
> extends Omit<ComponentPropsWithRef<'section'>, 'onPlay'> {
  name: ReactNode
  counter: ReactNode
  /** Fraction from 0 to 1, not a percentage. */
  progress: number
  backAction: { label: string; onClick: () => void }
  phrase?: ReactNode
  phraseKey?: string
  previous?: ReactNode
  next?: ReactNode
  rising?: boolean
  speaker?: ShadowingActivePhraseProps['speaker']
  translation?: ReactNode
  repetitions?: { total: number; value: number; label: ReactNode }
  controls?: PracticePlaybackControlsProps<Speed>
}
