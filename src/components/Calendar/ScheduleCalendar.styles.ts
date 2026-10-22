import { styled } from 'styled-components'
import {
  CalendarTimeSlot,
  TimelineEvent,
  CalendarEvent,
} from './CalendarElements'
import { Pressable } from '../Pressable'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.section.withConfig({
  componentId: 'lsui-sc-schedule-calendar',
})`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
`

export const Desktop = styled.div`
  display: flex;
  flex: 1 1 auto;
  min-height: 0;
  @media (max-width: ${theme.breakpoints.mobileShell}) {
    display: none;
  }
`

export const Header = styled.div<{ $today?: boolean }>`
  position: sticky;
  top: 0;
  z-index: 2;
  padding: ${theme.spacing[3]} ${theme.spacing[2]};
  border-right: 1px solid ${theme.colors.border.subtle};
  border-bottom: 1px solid ${theme.colors.border.subtle};
  color: ${({ $today }) => ($today ? theme.semantic.foreground.brand : theme.colors.text.primary)};
  background: ${theme.colors.palette.white};
`

export const Weekday = styled.div`
  color: ${theme.colors.text.muted};
  font-family: ${"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace"};
  font-size: 0.625rem;
  letter-spacing: 0.08em;
`

export const DayNumber = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[1]};
  margin-top: ${theme.spacing[1]};
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.bold};
`

export const TodayDot = styled.span`
  width: 0.375rem;
  height: 0.375rem;
  border-radius: ${theme.radius.pill};
  background: ${theme.colors.accent.primary};
`

export const HourColumn = styled.div`
  border-right: 1px solid ${theme.colors.border.subtle};
`

export const Time = styled.div`
  height: 1.75rem;
  box-sizing: border-box;
  padding: ${theme.spacing[1]} ${theme.spacing[2]};
  border-bottom: 1px solid ${theme.colors.border.subtle};
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.xs};
  font-variant-numeric: tabular-nums;
  &:nth-child(even) {
    color: ${theme.colors.text.muted};
  }
`

export const Column = styled.div`
  position: relative;
  border-right: 1px solid ${theme.colors.border.subtle};
  &:last-child {
    border-right: 0;
  }
`

export const Slot = styled(CalendarTimeSlot)`
  height: 1.75rem;
  min-height: 1.75rem;
  padding: 0;
  &:nth-child(odd) {
    border-bottom-style: dashed;
  }
  &:focus-visible {
    outline: 3px solid ${theme.semantic.foreground.brand};
    outline-offset: -3px;
  }
  &[aria-pressed='true'] {
    box-shadow: inset 0 0 0 2px ${theme.semantic.foreground.brand};
  }
`

export const Event = styled(TimelineEvent).attrs<{
  $height: number
  $top: number
}>(({ $height, $top }) => ({ style: { height: $height, top: $top } }))`
  box-sizing: border-box;
  min-height: 1.5rem;
  padding: ${theme.spacing[1]} ${theme.spacing[2]};
  line-height: 1.25;
  &:focus-visible {
    outline: 3px solid ${theme.semantic.foreground.brand};
    outline-offset: -3px;
  }
  &[data-compact='true'] {
    display: flex;
    align-items: center;
    gap: ${theme.spacing[1]};
    padding-top: 0;
    padding-bottom: 0;
  }
`

export const EventTime = styled.span`
  flex-shrink: 0;
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.bold};
  font-variant-numeric: tabular-nums;
`

export const EventName = styled.span`
  display: block;
  min-width: 0;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: ${theme.typography.fontWeight.semibold};
`

export const EventDetail = styled.div`
  margin-top: ${theme.spacing[1]};
  font-size: ${theme.typography.fontSize.xs};
  opacity: 0.8;
`

export const MonthWeekdays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(7.5rem, 1fr));
  min-width: 52.5rem;
  background: ${theme.colors.palette.neutral[200]};
`

export const MonthWeekday = styled.div`
  padding: ${theme.spacing[3]};
  border-right: 1px solid ${theme.colors.border.subtle};
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.semibold};
`

export const MonthEvents = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: ${theme.spacing[1]};
  position: relative;
  pointer-events: none;
  > button {
    pointer-events: auto;
  }
`

export const MonthEvent = styled(CalendarEvent)`
  width: 100%;
  min-height: 1.5rem;
  overflow: hidden;
  &:focus-visible {
    outline: 3px solid ${theme.semantic.foreground.brand};
    outline-offset: 2px;
  }
`

export const Badge = styled.span`
  flex-shrink: 0;
  padding: 0 ${theme.spacing[1]};
  border: 1px solid currentColor;
  border-radius: ${'0.25rem'};
  font-size: 0.625rem;
  font-weight: ${theme.typography.fontWeight.semibold};
`

export const More = styled(Pressable)`
  align-self: flex-start;
  margin-top: ${theme.spacing[1]};
  padding: 0;
  border: 0;
  background: transparent;
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.xs};
`
