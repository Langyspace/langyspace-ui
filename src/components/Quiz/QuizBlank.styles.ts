import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.span.withConfig({
  componentId: 'lsui-sc-quiz-blank',
})`
  display: inline-block;
  width: 58px;
  height: 3px;
  margin: 0 5px;
  border-radius: ${theme.radius.pill};
  background: var(--quiz-line-strong, ${theme.colors.palette.neutral[400]});
  vertical-align: baseline;
  @media (max-width: ${theme.breakpoints.sm}) {
    width: 48px;
  }
`
