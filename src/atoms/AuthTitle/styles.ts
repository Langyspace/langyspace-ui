import { styled } from 'styled-components'
import { tokens } from '../../foundations/tokens'

const authTitleSize = { mobile: '1.75rem', desktop: '2.375rem' } as const
const authTitleBreakpoint = '768px'
const authTitleLineHeight = 1.1

export const Title = styled.h2.withConfig({
  componentId: 'lsui-sc-auth-title',
})`
  margin: 0;
  color: ${tokens.color.content.default};
  font-size: ${authTitleSize.mobile};
  font-weight: ${tokens.typography.fontWeight.bold};
  letter-spacing: 0;
  line-height: ${authTitleLineHeight};

  @media (min-width: ${authTitleBreakpoint}) {
    font-size: ${authTitleSize.desktop};
  }
`
