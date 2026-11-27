import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { resolveTheme } from '../../foundations/theme/resolveTheme'
import { recipe } from './Exercise.shared.styles'
import { Pressable } from '../Pressable'
export { Stack, Marker } from './Exercise.shared.styles'
export const MatchRoot = styled.div.withConfig({
  componentId: 'lsui-sc-match-pairs',
})`
  min-width: 0;
`
export const MatchColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${theme.spacing[12]};
  @container (max-width: 560px) {
    grid-template-columns: minmax(0, 1fr);
    gap: ${theme.spacing[4]};
  }
  > div {
    gap: ${theme.spacing[2]};
    @container (max-height: ${theme.viewportHeights.lg}) {
      gap: ${theme.spacing[1]};
    }
  }
`
export const Match = styled(Pressable)<{
  $matched: boolean
  $incorrect: boolean
}>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[4]};
  min-width: 0;
  min-height: 44px;
  padding: ${theme.spacing[1]} ${theme.spacing[4]} ${theme.spacing[1]}
    ${theme.spacing[2]};
  border: 1.5px solid
    ${(p) => (p.$matched ? (resolveTheme(p).semantic?.status.success.foreground ?? theme.semantic.status.success.foreground) : p.$incorrect ? (resolveTheme(p).semantic?.status.danger.foreground ?? theme.semantic.status.danger.foreground) : recipe(p).border)};
  border-radius: ${theme.radius.md};
  background: ${(p) => (p.$matched ? (resolveTheme(p).semantic?.status.success.background ?? theme.semantic.status.success.background) : p.$incorrect ? (resolveTheme(p).semantic?.status.danger.background ?? theme.semantic.status.danger.background) : recipe(p).canvas)};
  color: ${(p) => recipe(p).foreground};
  font: inherit;
  font-size: 1.0625rem;
  text-align: left;
  cursor: pointer;
  overflow-wrap: anywhere;
  &[aria-pressed='true'] {
    outline: 2px solid ${(p) => recipe(p).accent};
  }
  &:focus-visible {
    outline: 2px solid ${(p) => recipe(p).accent};
    outline-offset: 2px;
  }
  &:disabled {
    cursor: default;
  }
  @container (max-height: ${theme.viewportHeights.lg}) {
    min-height: 40px;
  }
`
export const MatchLabel = styled.span`
  flex: 1;
  min-width: 0;
`
export const MatchMark = styled.span`
  margin-left: auto;
  font-weight: ${theme.typography.fontWeight.bold};
`
export const Status = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  margin: ${theme.spacing[2]} 0 0;
  &:empty {
    margin: 0;
  }
`
