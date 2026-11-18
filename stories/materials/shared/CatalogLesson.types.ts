import type { LessonProps, SpeechProps } from './Lesson.types'

type CatalogImage = { src: string; alt: string }
type ImageResolver = (key: string, alt?: string) => CatalogImage
type CatalogAudioLine = { id: string; who: string; text: string; g: string }
type GapBank = Readonly<Record<string, { o: readonly string[]; a: string }>>
type UrlMap = Readonly<Record<string, string | undefined>>

interface CatalogChoice {
  t: string
  o: readonly string[]
  a: number
  im?: string
  alt?: string
  id?: string
  now?: string
  why?: Readonly<Record<number, string | undefined>>
}

interface CatalogPrompt {
  q: string
  a?: string
  ic?: string
}

export interface CatalogWord {
  ic?: string
  en: string
  pt: string
  id?: string
  hint?: string
}

interface CatalogRole {
  txt: string
  img: string
  alt: string
  ck: readonly string[]
  sup: readonly string[]
}

export interface ChoiceProps extends SpeechProps {
  item: CatalogChoice
  image: ImageResolver
}

export interface PromptProps {
  items: readonly CatalogPrompt[]
  image: ImageResolver
}

export interface ModelProps {
  question: string
  models: readonly string[]
  cue?: string
  alt?: string
  context?: string
  image: ImageResolver
}

export interface DialogueProps extends SpeechProps {
  practice?: boolean
  lines: readonly CatalogAudioLine[]
  bank: GapBank
  gaps: Readonly<Record<string, string | undefined>>
  portraits: UrlMap
}

export interface RoleProps {
  showDescription?: boolean
  role: CatalogRole
  image: ImageResolver
}

export interface WordProps {
  words: readonly CatalogWord[]
  image: ImageResolver
}

interface CatalogPage {
  id: string
  title: string
  eyebrow: string
  instruction: string
  choices?: readonly CatalogChoice[]
  prompts?: readonly CatalogPrompt[]
  words?: readonly CatalogWord[]
  vocab?: {
    items: ReadonlyArray<CatalogWord & { ic: string }>
    letterHint: boolean
  }
  chips?: readonly { id: string; b: string; s?: string }[]
  model?: {
    question: string
    model: readonly string[]
    image?: string
    alt?: string
    context?: string
  }
  grammar?: {
    explanations: readonly { label: string; text: string }[]
    cols: readonly string[]
    rows: readonly {
      cells: readonly string[]
      audio?: string
      spoken?: string
    }[]
  }
  tip?: { image: string; text: string }
  role?: CatalogRole
  script?: { items: readonly string[]; art: readonly string[] }
  dialogue?: 'read' | 'practice'
}

export interface CatalogLessonData {
  code: string
  number: number
  title: string
  before: string
  accent: string
  goal: string
  pages: readonly CatalogPage[]
  lines: readonly CatalogAudioLine[]
  bank: GapBank
  gaps: Readonly<Record<string, string | undefined>>
  media: Readonly<
    Record<
      string,
      | { file: string; alt: Readonly<Record<string, string | undefined>> }
      | undefined
    >
  >
}

export interface CatalogLessonProps extends LessonProps {
  data: CatalogLessonData
  assets: UrlMap
  shared: UrlMap
}

export interface CatalogVocabularyProps extends SpeechProps {
  vocabulary: NonNullable<CatalogPage['vocab']>
  image: ImageResolver
}
