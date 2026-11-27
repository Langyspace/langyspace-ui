import { theme } from '../../foundations/theme/theme'
import type {
  QuestionRouletteTopic,
  RouletteEntry,
  RouletteRoundState,
  RouletteRoundAction,
  RouletteSegment,
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
      (topic.weight !== undefined &&
        (!Number.isFinite(topic.weight) || topic.weight <= 0)) ||
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
  if (!remaining.length) return undefined
  if (!bank.some((entry) => entry.topic.weight !== undefined)) {
    return remaining[
      Math.min(
        remaining.length - 1,
        Math.max(0, Math.floor(random * remaining.length)),
      )
    ]
  }
  const groups = new Map<number, RouletteEntry[]>()
  for (const entry of remaining) {
    const items = groups.get(entry.topicIndex)
    if (items) items.push(entry)
    else groups.set(entry.topicIndex, [entry])
  }
  const options = [...groups.values()].map((items) => ({
    items,
    weight: items[0]!.topic.weight ?? items.length,
  }))
  const maximum = Math.max(...options.map((option) => option.weight))
  const total = options.reduce(
    (sum, option) => sum + option.weight / maximum,
    0,
  )
  let cursor = Math.min(1 - Number.EPSILON, Math.max(0, random)) * total
  for (const option of options) {
    const weight = option.weight / maximum
    if (cursor < weight)
      return option.items[
        Math.min(
          option.items.length - 1,
          Math.floor((cursor / weight) * option.items.length),
        )
      ]
    cursor -= weight
  }
  return remaining[remaining.length - 1]
}

/** Authored sector sizes remain fixed for the entire round, including mirrored pairs. */
export function rouletteSegments(
  bank: readonly RouletteEntry[],
): RouletteSegment[] {
  if (!bank.length) return []
  const counts = new Map<
    number,
    { topic: QuestionRouletteTopic; topicIndex: number; count: number }
  >()
  for (const entry of bank) {
    const current = counts.get(entry.topicIndex)
    if (current) current.count += 1
    else
      counts.set(entry.topicIndex, {
        topic: entry.topic,
        topicIndex: entry.topicIndex,
        count: 1,
      })
  }
  const groups = [...counts.values()]
  const maximum = Math.max(
    ...groups.map((group) => group.topic.weight ?? group.count),
  )
  const total = groups.reduce(
    (sum, group) => sum + (group.topic.weight ?? group.count) / maximum,
    0,
  )
  const widths = groups.map(
    (group) => ((group.topic.weight ?? group.count) / maximum / total) * 360,
  )
  let start = -widths[0]! / 2
  return groups.map((group, index) => {
    const end = start + widths[index]!
    const segment = { ...group, start, end, center: (start + end) / 2 }
    start = end
    return segment
  })
}

export function rouletteAngle(previous: number, center: number): number {
  const target = (((360 - center) % 360) + 360) % 360
  return (
    previous +
    theme.exercises.rouletteSpinTurns * 360 +
    ((target - (previous % 360) + 360) % 360)
  )
}

/** A soft tick for each sector boundary passing the pointer, using the visual easing token. */
export function rouletteTickTimes(
  from: number,
  to: number,
  segments: readonly RouletteSegment[],
): number[] {
  const easing = theme.exercises.rouletteSpinEasing
  const [x1, y1, x2, y2] = easing.match(/[\d.]+/g)!.map(Number) as [
    number,
    number,
    number,
    number,
  ]
  const bezier = (t: number, a: number, b: number) =>
    3 * (1 - t) ** 2 * t * a + 3 * (1 - t) * t ** 2 * b + t ** 3
  const angles: number[] = []
  for (const segment of segments) {
    let crossing = Math.floor((from + segment.start) / 360) + 1
    while (crossing * 360 - segment.start < to) {
      angles.push(crossing * 360 - segment.start)
      crossing++
    }
  }
  return angles
    .sort((a, b) => a - b)
    .map((angle) => {
      const progress = (angle - from) / (to - from)
      let low = 0
      let high = 1
      for (let i = 0; i < 24; i++) {
        const mid = (low + high) / 2
        if (bezier(mid, y1, y2) < progress) low = mid
        else high = mid
      }
      return (bezier((low + high) / 2, x1, x2) * rouletteSpinDuration) / 1_000
    })
}

export function rouletteSector(start: number, end: number): string {
  const arc = end - start
  if (arc >= 360 - 0.000001)
    return 'M160 8a152 152 0 1 1 0 304a152 152 0 1 1 0-304'
  const point = (angle: number) => [
    160 + 152 * Math.cos(((angle - 90) * Math.PI) / 180),
    160 + 152 * Math.sin(((angle - 90) * Math.PI) / 180),
  ]
  const first = point(start)
  const last = point(end)
  return `M160 160L${first.join(' ')}A152 152 0 ${arc > 180 ? 1 : 0} 1 ${last.join(' ')}Z`
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
