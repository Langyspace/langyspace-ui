import { styled } from 'styled-components'
import { Pressable } from '../Pressable'
import { theme } from '../../foundations/theme/theme'

export const CalendarMonthGridRoot = styled.div.withConfig({
  componentId: 'lsui-sc-calendar-month-grid',
})`
  display: grid;
  grid-template-columns: repeat(7, minmax(7.5rem, 1fr));
  min-width: 52.5rem;
`

export const CalendarWeekGridRoot = styled.div.withConfig({
  componentId: 'lsui-sc-calendar-week-grid',
})`
  display: grid;
  grid-template-columns: 4rem repeat(7, minmax(7rem, 1fr));
  min-width: 53rem;
  background: ${theme.colors.palette.white};
`

export const CalendarDayNumberRoot = styled.span.withConfig({
  componentId: 'lsui-sc-calendar-day-number',
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  min-width: 24px;
  height: 24px;
  padding: 0 8px;
  border-radius: ${theme.radius.pill};
  color: inherit;
  background: transparent;
  font-size: 12px;
  font-weight: ${theme.typography.fontWeight.semibold};
  &[aria-current='date'] {
    color: ${theme.colors.palette.white};
    background: ${theme.colors.palette.neutral[900]};
  }
`

export const CalendarEventRoot = styled(Pressable).withConfig({
  componentId: 'lsui-sc-calendar-event',
})`
  display: flex;
  align-items: center;
  min-width: 0;
  gap: 4px;
  padding: 3px 8px;
  border: 0;
  border-radius: 6px;
  font-size: 12px;
  font-weight: ${theme.typography.fontWeight.semibold};
  text-align: left;
  color: ${theme.colors.palette.white};
  background: ${theme.colors.palette.neutral[900]};
  &[data-tone='success'] {
    color: ${theme.semantic.status.success.foreground};
    background: ${theme.semantic.status.success.background};
  }
  &[data-tone='muted'] {
    color: ${theme.colors.text.muted};
    background: ${theme.colors.palette.neutral[200]};
    text-decoration: line-through;
  }
`

export const TimelineEventRoot = styled(Pressable).withConfig({
  componentId: 'lsui-sc-timeline-event',
})`
  position: absolute;
  right: 4px;
  left: 4px;
  overflow: hidden;
  padding: 8px 12px;
  border: 0;
  border-left: 3px solid ${theme.semantic.border.strong};
  border-radius: 8px;
  font-size: 12px;
  text-align: left;
  color: ${theme.colors.text.primary};
  background: ${theme.colors.palette.neutral[200]};
  &[data-tone='success'] {
    color: ${theme.semantic.status.success.foreground};
    background: ${theme.semantic.status.success.background};
    border-left-color: ${theme.semantic.status.success.indicator};
  }
  &[data-tone='muted'] {
    color: ${theme.colors.text.muted};
    background: ${theme.colors.palette.neutral[200]};
    border-left-color: ${theme.colors.palette.neutral[500]};
  }
`

export const CalendarTimeSlotRoot = styled(Pressable).withConfig({
  componentId: 'lsui-sc-calendar-time-slot',
})`
  display: block;
  width: 100%;
  height: 56px;
  padding: 4px;
  border: 0;
  border-bottom: 1px solid ${theme.colors.border.subtle};
  color: ${theme.colors.text.muted};
  text-align: left;
  background: ${theme.colors.palette.white};
  cursor: pointer;
  &[aria-disabled='true'] {
    cursor: default;
  }
  &[data-tone='muted'] {
    background: ${theme.colors.palette.neutral[100]};
  }
  &:not([aria-disabled='true']):hover {
    background: ${theme.colors.palette.neutral[100]};
  }
  &[data-selected='true'] {
    color: ${theme.colors.text.primary};
    background: ${theme.colors.palette.accent.aquaSoft};
  }
  &:focus-visible {
    outline: 3px solid ${theme.semantic.focus.ring};
    outline-offset: -3px;
  }
`
