import type { AuthTopLinkProps } from './AuthTopLink.types'
import * as Styled from './AuthTopLink.styles'

export function AuthTopLink({
  children,
  highlight,
  ...props
}: AuthTopLinkProps) {
  return (
    <Styled.Link {...props}>
      {children}
      {highlight != null && (
        <>
          {' '}
          <Styled.Highlight>{highlight}</Styled.Highlight>
        </>
      )}
    </Styled.Link>
  )
}
