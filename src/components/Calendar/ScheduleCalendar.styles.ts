import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
import { CalendarTimeSlot } from './CalendarElements'
import { TimelineEvent } from './CalendarElements'
import { CalendarEvent } from './CalendarElements'
import { Pressable } from '../Pressable'

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
  padding: ${token.spacing3} ${token.spacing2};
  border-right: 1px solid ${token.colorSurfaceBorderSubtle};
  border-bottom: 1px solid ${token.colorSurfaceBorderSubtle};
  color: ${({ $today }) => ($today ? token.colorBrandDefault : token.colorContentDefault)};
  background: ${token.colorNeutral0};
`

export const Weekday = styled.div`
  color: ${token.colorContentMuted};
  font-family: ${"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace"};
  font-size: 0.625rem;
  letter-spacing: 0.08em;
`

export const DayNumber = styled.div`
  display: flex;
  align-items: center;
  gap: ${token.spacing1};
  margin-top: ${token.spacing1};
  font-size: ${token.typographyFontSizeLg};
  font-weight: ${token.typographyFontWeightBold};
`

export const TodayDot = styled.span`
  width: 0.375rem;
  height: 0.375rem;
  border-radius: ${token.radiusPill};
  background: ${token.colorAccentDefault};
`

export const HourColumn = styled.div`
  border-right: 1px solid ${token.colorSurfaceBorderSubtle};
`

export const Time = styled.div`
  height: 1.75rem;
  box-sizing: border-box;
  padding: ${token.spacing1} ${token.spacing2};
  border-bottom: 1px solid ${token.colorSurfaceBorderSubtle};
  color: ${token.colorContentDefault};
  font-size: ${token.typographyFontSizeXs};
  font-variant-numeric: tabular-nums;
  &:nth-child(even) {
    color: ${token.colorContentMuted};
  }
`

export const Column = styled.div`
  position: relative;
  border-right: 1px solid ${token.colorSurfaceBorderSubtle};
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
    outline: 3px solid ${token.colorBrandDefault};
    outline-offset: -3px;
  }
  &[aria-pressed='true'] {
    box-shadow: inset 0 0 0 2px ${token.colorBrandDefault};
  }
`

export const Event = styled(TimelineEvent)`
  box-sizing: border-box;
  min-height: 1.5rem;
  padding: ${token.spacing1} ${token.spacing2};
  line-height: 1.25;
  &:focus-visible {
    outline: 3px solid ${token.colorBrandDefault};
    outline-offset: -3px;
  }
  &[data-compact='true'] {
    display: flex;
    align-items: center;
    gap: ${token.spacing1};
    padding-top: 0;
    padding-bottom: 0;
  }
`

export const EventTime = styled.span`
  flex-shrink: 0;
  font-size: ${token.typographyFontSizeXs};
  font-weight: ${token.typographyFontWeightBold};
  font-variant-numeric: tabular-nums;
`

export const EventName = styled.span`
  display: block;
  min-width: 0;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: ${token.typographyFontWeightSemibold};
`

export const EventDetail = styled.div`
  margin-top: ${token.spacing1};
  font-size: ${token.typographyFontSizeXs};
  opacity: 0.8;
`

export const MonthWeekdays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(7.5rem, 1fr));
  min-width: 52.5rem;
  background: ${token.colorNeutral100};
`

export const MonthWeekday = styled.div`
  padding: ${token.spacing3};
  border-right: 1px solid ${token.colorSurfaceBorderSubtle};
  color: ${token.colorContentMuted};
  font-size: ${token.typographyFontSizeXs};
  font-weight: ${token.typographyFontWeightSemibold};
`

export const MonthEvents = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: ${token.spacing1};
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
    outline: 3px solid ${token.colorBrandDefault};
    outline-offset: 2px;
  }
`

export const Badge = styled.span`
  flex-shrink: 0;
  padding: 0 ${token.spacing1};
  border: 1px solid currentColor;
  border-radius: ${'0.25rem'};
  font-size: 0.625rem;
  font-weight: ${token.typographyFontWeightSemibold};
`

export const More = styled(Pressable)`
  align-self: flex-start;
  margin-top: ${token.spacing1};
  padding: 0;
  border: 0;
  background: transparent;
  color: ${token.colorContentMuted};
  font-size: ${token.typographyFontSizeXs};
`
