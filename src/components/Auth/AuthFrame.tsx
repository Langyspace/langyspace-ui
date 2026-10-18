import * as Styled from './AuthFrame.styles'

import type { ReactNode } from 'react'

export interface AuthFrameProps {
  children: ReactNode
  brand: ReactNode
  brandLabel: string
  mobileLogo: ReactNode
  formAriaLabel: string
  topAction: ReactNode
  footer?: ReactNode
}

export function AuthFrame({
  children,
  brand,
  brandLabel,
  mobileLogo,
  formAriaLabel,
  topAction,
  footer,
}: AuthFrameProps) {
  return (
    <Styled.Page>
      <Styled.BrandPanel aria-label={brandLabel}>
        <Styled.BrandInner>{brand}</Styled.BrandInner>
      </Styled.BrandPanel>
      <Styled.FormPanel aria-label={formAriaLabel} data-auth-scroll-panel="">
        <Styled.MobileHeader>{mobileLogo}</Styled.MobileHeader>
        <Styled.TopBar>{topAction}</Styled.TopBar>
        <Styled.Content>
          <Styled.Card>
            {children}
            <Styled.MobileCardAction>{topAction}</Styled.MobileCardAction>
          </Styled.Card>
        </Styled.Content>
        {footer}
      </Styled.FormPanel>
    </Styled.Page>
  )
}
