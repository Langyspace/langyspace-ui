const tabbableSelector = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

export const isTabbable = (element: HTMLElement) => {
  if (
    element.hidden ||
    element.closest('[inert]') ||
    element.getAttribute('aria-hidden') === 'true'
  ) {
    return false
  }

  const style = window.getComputedStyle(element)

  return style.display !== 'none' && style.visibility !== 'hidden'
}

export const getTabbableElements = (root: ParentNode) =>
  Array.from(root.querySelectorAll<HTMLElement>(tabbableSelector)).filter(
    isTabbable,
  )
