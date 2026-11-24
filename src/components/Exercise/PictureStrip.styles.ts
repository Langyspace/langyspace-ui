import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { resolveSlideTheme } from '../../foundations/theme/resolveSlideTheme'

export const Root = styled.section.withConfig({
  componentId: 'lsui-sc-picture-strip',
})<{ $count: number; $compact: boolean }>`
  display: grid;
  grid-template-columns: repeat(${(p) => p.$count}, minmax(0, 1fr));
  gap: ${theme.spacing[3]};
  min-width: 0;
  max-width: ${(p) => (p.$compact ? 'min(100%, 18cqh)' : undefined)};
  margin-inline: ${(p) => (p.$compact ? 'auto' : undefined)};
  color: ${(p) => resolveSlideTheme(p).foreground};
  font-family: ${theme.typography.fontFamily.sans};
`
export const Figure = styled.figure`
  display: grid;
  align-content: start;
  min-width: 0;
  margin: 0;
  padding: ${theme.spacing[2]};
  gap: ${theme.spacing[2]};
  border-radius: ${theme.radius.lg};
  border: 1px solid ${(p) => resolveSlideTheme(p).border};
  background: ${(p) => resolveSlideTheme(p).surface};
`
export const Caption = styled.figcaption`
  white-space: pre-line;
  text-align: center;
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.semibold};
  line-height: 1.35;
`
