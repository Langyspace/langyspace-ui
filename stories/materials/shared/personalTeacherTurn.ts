import type { MaterialTeacherIdentity } from './MaterialTeacherContext.types'
import type { MaterialPersonalDialogueTurn } from './MaterialPersonalDialogue.types'

/** A ready teacher model, with no personal fact inferred by the presentation layer. */
export function personaliseTeacherTurn(
  line: MaterialPersonalDialogueTurn,
  teacher: MaterialTeacherIdentity,
  now: Date,
): MaterialPersonalDialogueTurn {
  if (line.participant !== 'teacher' || !line.personalisation) return line
  if (line.personalisation === 'greeting') {
    const hour = Number(
      new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        hourCycle: 'h23',
        timeZone: teacher.timeZone,
      }).format(now),
    )
    const greeting = hour < 12 ? 'morning' : hour < 18 ? 'afternoon' : 'evening'
    return {
      ...line,
      content: `Good ${greeting}! Nice to meet you`,
      parts: undefined,
    }
  }
  const country = teacher.countryCode
    ? new Intl.DisplayNames(['en'], { type: 'region' }).of(teacher.countryCode)
    : undefined
  const article = ['US', 'GB', 'AE', 'NL', 'PH'].includes(
    teacher.countryCode ?? '',
  )
    ? 'the '
    : ''
  return {
    ...line,
    content: country
      ? `I'm from ${article}${country}`
      : 'Let me tell you about my hometown',
    parts: undefined,
  }
}
