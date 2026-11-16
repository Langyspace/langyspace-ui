import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
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
  gap: ${theme.spacing[6]};
  @container (max-width: ${theme.breakpoints.sm}) {
    gap: ${theme.spacing[2]};
  }
`
export const Match = styled(Pressable)<{
  $matched: boolean
  $incorrect: boolean
}>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  min-width: 0;
  min-height: ${theme.sizes.control.lg};
  padding: ${theme.spacing[2]};
  border: 1px solid
    ${(p) => (p.$matched ? theme.semantic.status.success.foreground : p.$incorrect ? theme.semantic.status.danger.foreground : recipe(p).border)};
  border-radius: ${theme.radius.lg};
  background: ${(p) => (p.$matched ? theme.semantic.status.success.background : p.$incorrect ? theme.semantic.status.danger.background : recipe(p).surface)};
  color: ${(p) => recipe(p).foreground};
  font: inherit;
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
  @container (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.typography.fontSize.sm};
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
  min-height: ${theme.spacing[6]};
  margin: ${theme.spacing[2]} 0 0;
`
