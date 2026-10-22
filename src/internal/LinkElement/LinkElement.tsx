import type { LinkElementProps } from './LinkElement.types'

// Styled link roots wrap this element so `render` receives the generated class.
export function LinkElement({ children, render, ...props }: LinkElementProps) {
  return render ? render({ ...props, children }) : <a {...props}>{children}</a>
}
