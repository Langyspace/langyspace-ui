import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

const authTitleSize = { mobile: '1.75rem', desktop: '2.375rem' } as const

const authTitleBreakpoint = '768px'

const authTitleLineHeight = 1.1

export const Title = styled.h2.withConfig({
  componentId: 'lsui-sc-auth-title',
})`
  margin: 0;
  color: ${token.colorContentDefault};
  font-size: ${authTitleSize.mobile};
  font-weight: ${token.typographyFontWeightBold};
  letter-spacing: 0;
  line-height: ${authTitleLineHeight};

  @media (min-width: ${authTitleBreakpoint}) {
    font-size: ${authTitleSize.desktop};
  }
`

export const Accent = styled.span.withConfig({
  componentId: 'lsui-sc-auth-accent',
})`
  color: ${token.colorAccentDefault};
`

const authDescriptionWidth = '25rem'

const authDescriptionLineHeight = 1.55

const authDescriptionSpacing = `clamp(${token.spacing2}, 1.5svh, ${token.spacing3})`

export const Description = styled.p.withConfig({
  componentId: 'lsui-sc-auth-description',
})`
  max-width: ${authDescriptionWidth};
  margin: 0;
  margin-top: ${authDescriptionSpacing};
  color: ${token.colorContentMuted};
  font-size: ${token.typographyFontSizeSm};
  line-height: ${authDescriptionLineHeight};
`

export const BackAction = styled.div.withConfig({
  componentId: 'lsui-sc-auth-back-action',
})`
  display: contents;
  > button {
    margin-bottom: ${token.spacing5};
    @media (min-width: 768px) {
      margin-bottom: ${token.spacing6};
    }
  }
`
