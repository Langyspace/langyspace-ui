/** Material media can be logical publication keys or URLs already resolved by Vite. */
export function resolvePracticeImage(
  source: string | undefined,
  images: Readonly<Record<string, string>>,
): string | undefined {
  if (!source) return undefined
  if (images[source]) return images[source]
  // Do not turn an unmapped logical publication key into a broken relative request.
  if (
    /^(?:(?:\.\/|\/)?assets\/|\/stories\/|https:\/\/|data:image\/)/.test(source)
  )
    return source
  return undefined
}
