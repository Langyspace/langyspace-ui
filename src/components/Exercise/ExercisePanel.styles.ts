import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { recipe } from './Exercise.shared.styles'
export { Stack } from './Exercise.shared.styles'
export const Panel = styled.section.withConfig({
  componentId: 'lsui-sc-exercise-panel',
})`
  min-width: 0;
  padding: ${theme.spacing[3]};
  border: 1px solid ${(p) => recipe(p).border};
  border-radius: ${theme.radius.lg};
  background: ${(p) => recipe(p).surface};
  color: ${(p) => recipe(p).foreground};
`
export const PanelHeading = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${theme.spacing[3]};
  margin-bottom: ${theme.spacing[3]};
  h3 {
    margin: 0;
    color: inherit;
    font-weight: ${theme.typography.fontWeight.bold};
    font-size: ${theme.typography.fontSize.lg};
  }
`
export const Counter = styled.span`
  color: ${(p) => recipe(p).muted};
  font-size: ${theme.typography.fontSize.sm};
  flex-shrink: 0;
`
export const Media = styled.div`
  display: grid;
  place-items: center;
  min-width: 0;
  height: ${theme.exercises.mediaHeight};
  margin-bottom: ${theme.spacing[2]};
  border-radius: ${theme.radius.lg};
  background: ${theme.exercises.mediaBackground};
  img {
    min-width: 0;
    min-height: 0;
    max-width: 100%;
    max-height: 100%;
    height: 100%;
    object-fit: contain;
  }
`
