/** Keep an opener only for a catalog link into this same application origin. */
export function materialCatalogLinkRel(href: string, origin: string): string {
  try {
    return new URL(href, origin).origin === origin
      ? 'opener'
      : 'noopener noreferrer'
  } catch {
    return 'noopener noreferrer'
  }
}

/** Product routing stays outside the shared SlideDeck component. */
export function materialCatalogUrl(href: string): string {
  const current = new URL(href)
  if (
    ['localhost', '127.0.0.1', '[::1]'].includes(current.hostname) &&
    !/^\/materiais(?:\/|$)/.test(current.pathname)
  ) {
    const destination = new URL('./', current)
    destination.searchParams.set('view', 'catalog')
    const studentPortalOrigin = current.searchParams.get('studentPortalOrigin')
    if (studentPortalOrigin)
      destination.searchParams.set('studentPortalOrigin', studentPortalOrigin)
    return destination.href
  }
  return new URL('/materiais', current).href
}

function isOriginalCatalog(candidate: Window, destination: string): boolean {
  if (candidate.closed) return false
  const expected = new URL(destination)
  const actual = new URL(candidate.location.href)
  return (
    actual.origin === expected.origin &&
    actual.pathname === expected.pathname &&
    (!expected.searchParams.has('view') ||
      actual.searchParams.get('view') === 'catalog')
  )
}

/** Focus is best-effort: confirm it before abandoning the same-tab fallback. */
export function returnToMaterialCatalog(source: Window = window) {
  let presentation = source
  try {
    if (
      source.parent !== source &&
      source.parent.location.origin === source.location.origin
    )
      presentation = source.parent
  } catch {
    // An unrelated embed cannot grant access to its parent.
  }
  const destination = materialCatalogUrl(presentation.location.href)
  const fallback = () => presentation.location.assign(destination)
  try {
    const original = presentation.opener as Window | null
    if (!original || !isOriginalCatalog(original, destination)) {
      fallback()
      return
    }
    original.focus()
    if (original.document.hasFocus()) return
    // Browsers can complete focus asynchronously or ignore the request entirely.
    presentation.setTimeout(() => {
      try {
        if (
          isOriginalCatalog(original, destination) &&
          original.document.hasFocus()
        )
          return
      } catch {
        // The original tab may close or navigate away while focus is pending.
      }
      fallback()
    }, 150)
  } catch {
    fallback()
  }
}
