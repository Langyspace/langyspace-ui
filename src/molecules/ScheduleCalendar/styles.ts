import { styled } from 'styled-components'
import { tokens } from '../../foundations/tokens'
import { CalendarTimeSlot } from '../CalendarTimeSlot'
import { TimelineEvent } from '../TimelineEvent'
import { CalendarDay } from '../CalendarDay'
import { CalendarEvent } from '../CalendarEvent'
import { Pressable } from '../../primitives/Pressable'

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
  @media (max-width: 900px) {
    display: none;
  }
`

export const Header = styled.div<{ $today?: boolean }>`
  position: sticky;
  top: 0;
  z-index: 2;
  padding: ${tokens.spacing[3]} ${tokens.spacing[2]};
  border-right: 1px solid ${tokens.color.surfaceBorder.subtle};
  border-bottom: 1px solid ${tokens.color.surfaceBorder.subtle};
  color: ${({ $today }) => ($today ? tokens.color.brand.default : tokens.color.content.default)};
  background: ${tokens.color.neutral[0]};
`

export const Weekday = styled.div`
  color: ${tokens.color.content.muted};
  font-family: ${"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace"};
  font-size: 0.625rem;
  letter-spacing: 0.08em;
`

export const DayNumber = styled.div`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing[1]};
  margin-top: ${tokens.spacing[1]};
  font-size: ${tokens.typography.fontSize.lg};
  font-weight: ${tokens.typography.fontWeight.bold};
`

export const TodayDot = styled.span`
  width: 0.375rem;
  height: 0.375rem;
  border-radius: ${tokens.radius.pill};
  background: ${tokens.color.accent.default};
`

export const HourColumn = styled.div`
  border-right: 1px solid ${tokens.color.surfaceBorder.subtle};
`

export const Time = styled.div`
  height: 1.75rem;
  box-sizing: border-box;
  padding: ${tokens.spacing[1]} ${tokens.spacing[2]};
  border-bottom: 1px solid ${tokens.color.surfaceBorder.subtle};
  color: ${tokens.color.content.default};
  font-size: ${tokens.typography.fontSize.xs};
  font-variant-numeric: tabular-nums;
  &:nth-child(even) {
    color: ${tokens.color.content.muted};
  }
`

export const Column = styled.div`
  position: relative;
  border-right: 1px solid ${tokens.color.surfaceBorder.subtle};
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
    outline: 3px solid ${tokens.color.brand.default};
    outline-offset: -3px;
  }
  &[aria-pressed='true'] {
    box-shadow: inset 0 0 0 2px ${tokens.color.brand.default};
  }
`

export const Event = styled(TimelineEvent)`
  box-sizing: border-box;
  min-height: 1.5rem;
  padding: ${tokens.spacing[1]} ${tokens.spacing[2]};
  line-height: 1.25;
  &:focus-visible {
    outline: 3px solid ${tokens.color.brand.default};
    outline-offset: -3px;
  }
  &[data-compact='true'] {
    display: flex;
    align-items: center;
    gap: ${tokens.spacing[1]};
    padding-top: 0;
    padding-bottom: 0;
  }
`

export const EventTime = styled.span`
  flex-shrink: 0;
  font-size: ${tokens.typography.fontSize.xs};
  font-weight: ${tokens.typography.fontWeight.bold};
  font-variant-numeric: tabular-nums;
`

export const EventName = styled.span`
  display: block;
  min-width: 0;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: ${tokens.typography.fontWeight.semibold};
`

export const EventDetail = styled.div`
  margin-top: ${tokens.spacing[1]};
  font-size: ${tokens.typography.fontSize.xs};
  opacity: 0.8;
`

export const MonthWeekdays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(7.5rem, 1fr));
  min-width: 52.5rem;
  background: ${tokens.color.neutral[100]};
`

export const MonthWeekday = styled.div`
  padding: ${tokens.spacing[3]};
  border-right: 1px solid ${tokens.color.surfaceBorder.subtle};
  color: ${tokens.color.content.muted};
  font-size: ${tokens.typography.fontSize.xs};
  font-weight: ${tokens.typography.fontWeight.semibold};
`

export const MonthDay = styled(CalendarDay)`
  position: relative;
`

export const DayAction = styled(Pressable)`
  position: absolute;
  inset: 0;
  width: 100%;
  border: 0;
  background: transparent;
  cursor: pointer;
  &:focus-visible {
    outline: 3px solid ${tokens.color.brand.default};
    outline-offset: -3px;
  }
`

export const MonthEvents = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: ${tokens.spacing[1]};
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
    outline: 3px solid ${tokens.color.brand.default};
    outline-offset: 2px;
  }
`

export const Badge = styled.span`
  flex-shrink: 0;
  padding: 0 ${tokens.spacing[1]};
  border: 1px solid currentColor;
  border-radius: ${'0.25rem'};
  font-size: 0.625rem;
  font-weight: ${tokens.typography.fontWeight.semibold};
`

export const More = styled.div`
  margin-top: ${tokens.spacing[1]};
  color: ${tokens.color.content.muted};
  font-size: ${tokens.typography.fontSize.xs};
`
