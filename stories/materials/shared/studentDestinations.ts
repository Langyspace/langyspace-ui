/** Bind authored homework paths to the consumer portal without changing the reference defaults. */
export function bindStudentDestinations(message: string, origin?: string) {
  if (!origin) return message
  return message.replace(
    /(?:https?:\/\/[^/\s]+)?\/licoes[^\s]*/g,
    (link) => new URL(link.replace(/^https?:\/\/[^/]+/, ''), origin).href,
  )
}
