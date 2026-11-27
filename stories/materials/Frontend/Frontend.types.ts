import type { useFrontendAudio } from './useFrontendAudio'
export interface FrontendLessonProps {
  initialPageId?: string
  studentPortalOrigin?: string
}
export interface AudioProps {
  media: Omit<ReturnType<typeof useFrontendAudio>, 'audioRef' | 'events'>
}
export interface IndexedAudioProps extends AudioProps {
  index: number
}
