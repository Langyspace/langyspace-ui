import { css, styled } from 'styled-components'
import { resolveSlideTheme } from '../../foundations/theme/resolveSlideTheme'
import { theme } from '../../foundations/theme/theme'

export const Context = styled.div`
  margin-bottom: ${theme.spacing[3]};
  font-size: ${theme.typography.fontSize.md};
  font-weight: ${theme.typography.fontWeight.medium};
  line-height: 1.5;
  color: inherit;
`

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-quiz-question',
})<{ $compact: boolean; $material: boolean }>`
  margin: 0;
  padding: 4px 2px 2px;
  flex: 1;
  min-width: 0;
  color: ${(p) => (p.$material ? resolveSlideTheme(p).foreground : `var(--quiz-ink, ${theme.colors.palette.neutral[900]})`)};
  font-family: ${theme.typography.fontFamily.sans};
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
  ${(p) =>
    p.$compact &&
    css`
      font-size: ${theme.typography.fontSize.md};
      font-weight: ${theme.typography.fontWeight.semibold};
      @media (max-width: ${theme.breakpoints.sm}) {
        font-size: ${theme.typography.fontSize.md};
      }
    `}
`
