import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

const authTitleSize = { mobile: '1.75rem', desktop: '2.375rem' } as const

const authTitleBreakpoint = '768px'

const authTitleLineHeight = 1.1

export const Title = styled.h2.withConfig({
  componentId: 'lsui-sc-auth-title',
})`
  margin: 0;
  color: ${theme.colors.text.primary};
  font-size: ${authTitleSize.mobile};
  font-weight: ${theme.typography.fontWeight.bold};
  letter-spacing: 0;
  line-height: ${authTitleLineHeight};

  @media (min-width: ${authTitleBreakpoint}) {
    font-size: ${authTitleSize.desktop};
  }
`

export const Accent = styled.span.withConfig({
  componentId: 'lsui-sc-auth-accent',
})`
  color: ${theme.colors.accent.primary};
`

const authDescriptionWidth = '25rem'

const authDescriptionLineHeight = 1.55

const authDescriptionSpacing = `clamp(${theme.spacing[2]}, 1.5svh, ${theme.spacing[3]})`

export const Description = styled.p.withConfig({
  componentId: 'lsui-sc-auth-description',
})`
  max-width: ${authDescriptionWidth};
  margin: 0;
  margin-top: ${authDescriptionSpacing};
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${authDescriptionLineHeight};
`

export const BackAction = styled.div.withConfig({
  componentId: 'lsui-sc-auth-back-action',
})`
  display: contents;
  > button {
    margin-bottom: ${theme.spacing[5]};
    @media (min-width: ${theme.breakpoints.md}) {
      margin-bottom: ${theme.spacing[6]};
    }
  }
`
