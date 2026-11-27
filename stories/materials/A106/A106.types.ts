export interface A106LessonProps {
  initialPageId?: string
  learnerName?: string
  studentPortalOrigin?: string
}

export interface PetConversationProps {
  part: 0 | 1
  swapped?: boolean
  onSwap?: () => void
  completed?: readonly string[]
  onComplete?: (id: string) => void
}
