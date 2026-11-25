export interface DevMeetingTurn {
  id: string
  speakerId: string
  text: string
  cue?: string
  hint?: string
  example?: string
}
export type DevMeetingMode = 'intro' | 'planning' | 'review'

export interface DevOralTurn {
  id: string
  question?: string
  cue: string
  hint: string
  example: string
}
