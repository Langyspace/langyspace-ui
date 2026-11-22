export interface TrialIntroductionPrompt {
  id: string
  question: string
  translation?: string
  /** Introduce the logged-in teacher before asking the first question. */
  introduceTeacher?: boolean
  cue: string
  hint: string
  model: string
}

export interface TrialIntroductionCopy {
  title: string
  instruction: string
  prompts: readonly TrialIntroductionPrompt[]
}

export interface TrialIntroductionProps {
  prompts: readonly TrialIntroductionPrompt[]
}
