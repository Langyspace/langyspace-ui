import { Fragment } from 'react'
import * as Styled from './AuthFooter.styles'
import type { AuthFooterProps } from './AuthFooter.types'

export function AuthFooter({
  children,
  links,
  placement = 'brand',
  ...props
}: AuthFooterProps) {
  const Root = placement === 'mobile' ? Styled.Mobile : Styled.Brand

  return (
    <Root {...props}>
      {children}
      {links.map(({ href, label }) => (
        <Fragment key={href}>
          {' · '}
          <Styled.Link href={href}>{label}</Styled.Link>
        </Fragment>
      ))}
    </Root>
  )
}
