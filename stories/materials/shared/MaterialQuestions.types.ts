export interface MaterialQuestion {
  id: string
  question: string
  cue: string
  hint: string
}
export interface MaterialQuestionsProps {
  items: readonly MaterialQuestion[]
  fictionalContact?: boolean
}
