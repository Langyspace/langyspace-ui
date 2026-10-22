import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-quiz-question',
})`
  margin: 0;
  padding: 4px 2px 2px;
  flex: 1;
  min-width: 0;
  color: var(--quiz-ink, ${theme.colors.palette.neutral[900]});
  font-size: 23px;
  font-weight: ${theme.typography.fontWeight.bold};
  line-height: 1.4;
  text-wrap: pretty;
  [data-ui-skeleton] + [data-ui-skeleton] {
    margin-top: 8px;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: 20px;
  }
`
