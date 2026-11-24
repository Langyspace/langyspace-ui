export interface C101LessonProps {
  initialPageId?: string
  studentPortalOrigin?: string
}
export type C101Audio = ReturnType<typeof import('./C101.audio').useC101Audio>

export interface ExpressionsProps {
  group?: number
  active?: boolean
}
