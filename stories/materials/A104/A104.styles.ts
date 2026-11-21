import { styled } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'
import { Button } from '../../../src/components/Button/Button'
import { recipe } from '../../../src/components/InteractiveMaterial/Material.shared.styles'

export const CalendarScroll = styled.div`
  max-width: 100%;
  overflow-x: auto;
`
export const Calendar = styled.table`
  width: 100%;
  border-spacing: ${theme.spacing[1]};
  table-layout: fixed;
  min-width: 400px;
  th {
    font-size: ${theme.typography.fontSize.xs};
    font-weight: ${theme.typography.fontWeight.bold};
  }
  th:first-child {
    width: 56px;
  }
`
export const Slot = styled(Button)<{ $state: number }>`
  min-width: 0;
  width: 100%;
  min-height: ${theme.spacing[10]};
  padding: ${theme.spacing[1]};
  border-radius: ${theme.radius.md};
  background: ${(p) => (p.$state === 0 ? recipe(p).surface : p.$state === 1 ? recipe(p).accent : recipe(p).foreground)};
  color: ${(p) => (p.$state === 0 ? recipe(p).foreground : recipe(p).canvas)};
  border: 1px solid ${(p) => recipe(p).border};
`
export const TimeTag = styled.p`
  margin: 0;
  align-self: center;
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  border-radius: ${theme.radius.md};
  background: ${(p) => recipe(p).foreground};
  color: ${(p) => recipe(p).canvas};
  font-weight: ${theme.typography.fontWeight.bold};
  text-align: center;
`
export const Scene = styled.img`
  display: block;
  width: min(100%, 340px);
  max-height: 340px;
  aspect-ratio: 1;
  object-fit: cover;
  margin-inline: auto;
  border-radius: ${theme.radius.md};
`
