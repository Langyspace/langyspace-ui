import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { resolveSlideTheme } from '../../foundations/theme/resolveSlideTheme'

export const Root = styled.section.withConfig({
  componentId: 'lsui-sc-picture-strip',
})<{ $count: number }>`
  display: grid;
  grid-template-columns: repeat(${(p) => p.$count}, minmax(0, 1fr));
  gap: ${theme.spacing[3]};
  min-width: 0;
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
export const Media = styled.div<{ $compact: boolean }>`
  position: relative;
  min-width: 0;
  width: 100%;
  max-width: ${(p) => (p.$compact ? 'clamp(10rem, 28cqh, 16rem)' : 'none')};
  margin-inline: auto;
`
export const Badge = styled.img`
  position: absolute;
  inset-block-start: ${theme.spacing[2]};
  inset-inline-start: ${theme.spacing[2]};
  width: ${theme.spacing[8]};
  height: ${theme.spacing[6]};
  object-fit: contain;
`
export const Caption = styled.figcaption`
  white-space: pre-line;
  text-align: center;
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.semibold};
  line-height: 1.35;
`
