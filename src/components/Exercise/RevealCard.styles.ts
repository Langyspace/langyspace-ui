import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { recipe } from './Exercise.shared.styles'
import { Pressable } from '../Pressable'
export { Marker } from './Exercise.shared.styles'
export const Reveal = styled(Pressable).withConfig({
  componentId: 'lsui-sc-reveal-card',
})`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto minmax(0, 1fr);
  align-items: center;
  gap: ${theme.spacing[4]};
  width: 100%;
  min-width: 0;
  min-height: 52px;
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  border: 1.5px solid ${(p) => recipe(p).border};
  border-radius: ${theme.radius.xl};
  background: ${(p) => recipe(p).surface};
  color: ${(p) => recipe(p).foreground};
  text-align: left;
  font: inherit;
  font-size: ${theme.typography.fontSize.lg};
  cursor: pointer;
  overflow-wrap: anywhere;
  @container (max-height: ${theme.viewportHeights.lg}) {
    min-height: 44px;
    padding-block: ${theme.spacing[1]};
  }
  &:focus-visible {
    outline: 2px solid ${(p) => recipe(p).accent};
    outline-offset: 2px;
  }
  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
  @container (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: auto minmax(0, 1fr);
    gap: ${theme.spacing[2]};
  }
`
export const Answer = styled.span`
  font-weight: ${theme.typography.fontWeight.semibold};
`
