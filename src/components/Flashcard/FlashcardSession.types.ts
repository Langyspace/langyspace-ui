import type { ComponentPropsWithRef, ReactNode, Ref } from 'react'
import type { PictureRegion } from '../../internal/PictureImage.types'
import type { FlashcardProgressProps } from './FlashcardProgress.types'
import type { FlashcardGrade } from './FlashcardRatingButton.types'
import type { FlashcardSwiperExit } from './FlashcardSwiper.types'

/** Display data only. Scheduling, media sources and persistence belong to the consumer. */
export interface FlashcardSessionCard {
  id: string
  word: ReactNode
  phonetic?: ReactNode
  translation: ReactNode
  example?: ReactNode
  backExample?: ReactNode
  image?: { src: string; alt?: string; region?: PictureRegion }
  emoji?: ReactNode
}

export interface FlashcardSessionProps extends Omit<
  ComponentPropsWithRef<'section'>,
  'onPlay'
> {
  progress: FlashcardProgressProps
  backAction: { label: string; onClick: () => void }
  card?: FlashcardSessionCard
  flipped?: boolean
  onFlip?: () => void
  flipButtonRef?: Ref<HTMLButtonElement>
  audio?: {
    label: string
    playing?: boolean
    onFrontPlay: () => void
    onBackPlay: () => void
  }
  labels: { flip: string; flipHint: string; rateQuestion: string }
  ratings?: readonly {
    grade: FlashcardGrade
    label: string
    interval: ReactNode
    ariaLabel?: string
  }[]
  onRate?: (grade: FlashcardGrade) => void
  selectedGrade?: FlashcardGrade
  firstRatingRef?: Ref<HTMLButtonElement>
  disabled?: boolean
  ratingDisabled?: boolean
  exit?: FlashcardSwiperExit | null
  obscured?: boolean
  feedback?: ReactNode
}
