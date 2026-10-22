import * as Styled from './AuthFrame.styles'
import type { AuthFrameProps } from './AuthFrame.types'

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
