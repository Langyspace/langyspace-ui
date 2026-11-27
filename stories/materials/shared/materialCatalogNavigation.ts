/** Product routing stays outside the shared SlideDeck component. */
export function materialCatalogUrl(href: string): string {
  const current = new URL(href)
  if (['localhost', '127.0.0.1', '[::1]'].includes(current.hostname)) {
    const destination = new URL('./', current)
    destination.searchParams.set('view', 'catalog')
    const studentPortalOrigin = current.searchParams.get('studentPortalOrigin')
    if (studentPortalOrigin)
      destination.searchParams.set('studentPortalOrigin', studentPortalOrigin)
    return destination.href
  }
  return new URL('/materiais', current).href
}

export function returnToMaterialCatalog() {
  const destination = materialCatalogUrl(window.location.href)
  // Teacher serves its material iframe from the same origin as the library.
  // Standalone previews navigate within their own local tab.
  try {
    if (
      window.parent !== window &&
      window.parent.location.origin === window.location.origin
    ) {
      window.parent.location.assign(destination)
      return
    }
  } catch {
    // An unrelated cross-origin embed cannot grant access to its parent.
  }
  window.location.assign(destination)
}
