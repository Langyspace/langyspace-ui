import { theme } from '../../foundations/theme/theme'
import type {
  QuestionRouletteTopic,
  RouletteEntry,
  RouletteRoundState,
  RouletteRoundAction,
} from './QuestionRoulette.types'

/** The same suspense token governs visual deceleration and question reveal. */
export const rouletteSpinDuration =
  Number.parseFloat(theme.exercises.rouletteSpinDuration) * 1_000

export function rouletteBank(
  topics: readonly QuestionRouletteTopic[],
): RouletteEntry[] {
  if (!topics.length || topics.length > 8) return []
  const topicIds = new Set<string>()
  const entries: RouletteEntry[] = []
  for (const [topicIndex, topic] of topics.entries()) {
    if (
      !topic.id.trim() ||
      !topic.label.trim() ||
      !topic.questions.length ||
      topicIds.has(topic.id)
    )
      return []
    topicIds.add(topic.id)
    const questionIds = new Set<string>()
    for (const question of topic.questions) {
      if (
        !question.id.trim() ||
        !question.prompt.trim() ||
        questionIds.has(question.id)
      )
        return []
      questionIds.add(question.id)
      entries.push({
        key: JSON.stringify([topic.id, question.id]),
        topic,
        question,
        topicIndex,
      })
    }
  }
  return entries
}

export function nextRouletteEntry(
  bank: readonly RouletteEntry[],
  used: ReadonlySet<string>,
  random: number,
): RouletteEntry | undefined {
  const remaining = bank.filter((entry) => !used.has(entry.key))
  return remaining[
    Math.min(
      remaining.length - 1,
      Math.max(0, Math.floor(random * remaining.length)),
    )
  ]
}

export function rouletteAngle(
  previous: number,
  index: number,
  topicCount: number,
): number {
  const target = (((360 - (index * 360) / topicCount) % 360) + 360) % 360
  return (
    previous +
    theme.exercises.rouletteSpinTurns * 360 +
    ((target - (previous % 360) + 360) % 360)
  )
}

export function rouletteSector(index: number, count: number): string {
  if (count === 1) return 'M160 8a152 152 0 1 1 0 304a152 152 0 1 1 0-304'
  const arc = 360 / count
  const point = (angle: number) => [
    160 + 152 * Math.cos((angle * Math.PI) / 180),
    160 + 152 * Math.sin((angle * Math.PI) / 180),
  ]
  const start = point(-90 - arc / 2 + index * arc)
  const end = point(-90 + arc / 2 + index * arc)
  return `M160 160L${start.join(' ')}A152 152 0 ${arc > 180 ? 1 : 0} 1 ${end.join(' ')}Z`
}

export function initialRouletteRound(): RouletteRoundState {
  return { used: new Set(), rotation: 0, settledRotation: 0, hint: false }
}

export function rouletteRoundReducer(
  state: RouletteRoundState,
  action: RouletteRoundAction,
): RouletteRoundState {
  switch (action.type) {
    case 'spin':
      return {
        ...state,
        pending: action.entry,
        rotation: action.rotation,
        hint: false,
      }
    case 'reveal':
      return {
        ...state,
        used: action.used,
        selected: action.entry,
        pending: undefined,
        rotation: action.rotation,
        settledRotation: action.rotation,
      }
    case 'cancel':
      return state.pending
        ? { ...state, pending: undefined, rotation: state.settledRotation }
        : state
    case 'toggleHint':
      return { ...state, hint: !state.hint }
  }
}
