export function readStudentPortalOrigin(search: string) {
  const value = new URLSearchParams(search).get('studentPortalOrigin')
  if (!value) return undefined
  try {
    const url = new URL(value)
    const allowed =
      /^(?:student(?:\.staging)?\.langy\.space|langyspace-student(?:-staging)?\.web\.app)$/.test(
        url.hostname,
      )
    return allowed &&
      url.protocol === 'https:' &&
      !url.username &&
      !url.password &&
      !url.port &&
      url.pathname === '/' &&
      !url.search &&
      !url.hash
      ? url.origin
      : undefined
  } catch {
    return undefined
  }
}
