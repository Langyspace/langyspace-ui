export interface ChoiceItem {
  t: string
  o: readonly string[]
  a: number
  im?: string
  alt?: string
  id?: string
  now?: string
  why?: Readonly<Record<string, string | undefined>>
}

export interface Word {
  ic: string
  en: string
  pt: string
}
