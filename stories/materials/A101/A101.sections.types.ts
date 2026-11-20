import type { VocabularyItem } from '../../../src/components/Exercise/VocabularyGrid.types'
import type { WarmUpData, SpeechLine } from './A101.types'
export interface VocabularySectionProps {
  items: readonly VocabularyItem[]
  imageVariant?: 'isolated' | 'scene'
  speak: (lines: readonly SpeechLine[]) => void
}
export interface WarmUpSectionProps {
  item: WarmUpData
  speak: (lines: readonly SpeechLine[]) => void
}
export interface DialogueSectionProps {
  gaps?: boolean
  playingId?: string
  speak: (lines: readonly SpeechLine[]) => void
}
export interface TranslatedTextProps {
  text: string
  translation: string
}
export interface VerbPhraseProps {
  text: string
}

export interface ConversationSectionProps {
  part?: number
}
