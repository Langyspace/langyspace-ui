export type QuizResponseTone = 'correct' | 'wrong'

// `option` sits at the end of a QuizOption row; `feedback` leads QuizFeedback.
export type QuizResponseMarkVariant = 'feedback' | 'option'

export interface QuizMarkProps {
  correct: boolean
}

export interface QuizResponseMarkProps {
  tone: QuizResponseTone
  variant?: QuizResponseMarkVariant
}
