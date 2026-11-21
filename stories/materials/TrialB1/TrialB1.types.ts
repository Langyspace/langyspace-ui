interface BasePage {
  id: string
  title: string
  subtitle: string
  minutes: number
  objective: string
  source: string
}
interface GreetingPage extends BasePage {
  kind: 'greeting'
  questions: { q: string; support: string }[]
  ask: string
}
interface ScenePage extends BasePage {
  kind: 'scene'
  imageAlt: string
  hotspots: {
    id: string
    label: string
    xPercent: number
    yPercent: number
    targetBounds?: {
      xPercent: number
      yPercent: number
      widthPercent: number
      heightPercent: number
    }
    prompt: string
    support: string
  }[]
}
interface DialoguePage extends BasePage {
  kind: 'dialogue'
  lines: { who: string; en: string; pt: string }[]
  followup: string
  support: string
}
interface QuestionsPage extends BasePage {
  kind: 'questions'
  questions: { q: string; answer: string }[]
}
interface ChoicePage extends BasePage {
  kind: 'choice'
  choices: string[]
  followup: string
  support: string[]
}
interface StoryPage extends BasePage {
  kind: 'story'
  prompt: string
  steps: string[]
  support: string[]
  extension: string[]
  ask: string
  askSupport: string[]
}
interface ReviewPage extends BasePage {
  kind: 'review'
  starters: string[]
  reflection: string
}
export type TrialB1Page =
  | GreetingPage
  | ScenePage
  | DialoguePage
  | QuestionsPage
  | ChoicePage
  | StoryPage
  | ReviewPage
export interface TrialB1Content {
  revision: string
  title: string
  level: string
  minutes: number
  pages: TrialB1Page[]
}
export interface TrialB1LessonProps {
  initialPageId?: string
}
