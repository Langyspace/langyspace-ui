import * as Styled from './styles'
import type { AuthTopLinkHighlightProps } from './types'

export function AuthTopLinkHighlight({
  children,
  ...props
}: AuthTopLinkHighlightProps) {
  return <Styled.Highlight {...props}>{children}</Styled.Highlight>
}

export type { AuthTopLinkHighlightProps } from './types'
