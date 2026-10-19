import { Fragment, type ComponentPropsWithRef, type ReactNode } from 'react'
import * as Styled from './AuthFooter.styles'

export interface AuthFooterProps extends ComponentPropsWithRef<'p'> {
  children: ReactNode
  links: readonly { href: string; label: ReactNode }[]
  placement?: 'brand' | 'mobile'
}

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
