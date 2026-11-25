import type { ComponentPropsWithRef, ReactNode } from 'react'
import type { MeetingFrameProps } from '../Device/MeetingFrame.types'
import type { AudioSequenceControlsProps } from './AudioSequenceControls.types'
export interface InterviewSimulationProps extends Omit<
  ComponentPropsWithRef<'section'>,
  'title'
> {
  title: ReactNode
  interviewer: { name: string; imageUrl: string }
  learnerName: string
  learnerAvatarUrl?: string
  /** Guided call has one compact transport and no simulated meeting toggles. */
  presentation?: 'interview' | 'guided-call'
  participants?: MeetingFrameProps['participants']
  activeParticipantId?: string
  sharedContent?: ReactNode
  sharedContentLabel?: MeetingFrameProps['sharedContentLabel']
  playback?: AudioSequenceControlsProps['playback']
  supportAction?: AudioSequenceControlsProps['supportAction']
  caption?: ReactNode
  learnerCaption?: ReactNode
  captionsEnabled?: boolean
  onCaptionsChange?: (enabled: boolean) => void
  microphoneEnabled?: boolean
  onMicrophoneChange?: (enabled: boolean) => void
  cameraEnabled?: boolean
  onCameraChange?: (enabled: boolean) => void
  handRaised?: boolean
  onHandChange?: (raised: boolean) => void
  turnIndex: number
  turnCount: number
  onNext: () => void
  onPrevious: () => void
  onReplay: () => void
  onEnd?: () => void
  ended?: boolean
  playing?: boolean
  loading?: boolean
  status?: ReactNode
  labels?: Partial<{
    interview: string
    ended: string
    microphone: string
    camera: string
    captions: string
    hand: string
    end: string
    previous: string
    next: string
    replay: string
    progress: string
    play: string
    pause: string
    resume: string
  }>
}
