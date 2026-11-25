import { css, styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { resolveTheme } from '../../foundations/theme/resolveTheme'
import { Pressable } from '../Pressable'

const recipe = (props: Parameters<typeof resolveTheme>[0]) =>
  resolveTheme(props).voiceMessage ?? theme.voiceMessage

const DeviceControl = styled(Pressable)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: ${theme.radius.pill};
  font-weight: ${theme.typography.fontWeight.semibold};
  line-height: ${theme.typography.lineHeight.normal};
  &:disabled {
    opacity: 0.45;
  }
`

export const Root = styled.section.withConfig({
  componentId: 'lsui-sc-voice-message-exercise',
})`
  container-type: inline-size;
  width: 100%;
  min-width: 0;
  font-family: ${theme.typography.fontFamily.sans};
  color: ${(p) => recipe(p).foreground};
`

export const Layout = styled.div<{
  $balanced?: boolean
  $alignment?: 'start' | 'center' | 'stretch'
}>`
  display: grid;
  grid-template-columns: ${(p) => (p.$balanced ? 'repeat(2, minmax(0, 1fr))' : `minmax(0, ${recipe(p).phoneWidth}) minmax(0, 1fr)`)};
  align-items: ${(p) => p.$alignment ?? (p.$balanced ? 'center' : 'start')};
  gap: ${theme.spacing[8]};
  width: min(100%, ${(p) => recipe(p).contentWidth});
  margin-inline: auto;

  @container (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: minmax(0, 1fr);
    gap: ${theme.spacing[6]};
  }
`

export const Phone = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: min(100%, ${(p) => recipe(p).phoneWidth});
  height: ${(p) => recipe(p).phoneHeight};
  min-width: 0;
  margin-inline: auto;
  box-shadow:
    0 0 0 2px ${(p) => recipe(p).frameEdge},
    ${theme.voiceMessage.phoneShadow};
  border: ${theme.voiceMessage.frameWidth} solid ${(p) => recipe(p).frame};
  border-radius: ${theme.voiceMessage.phoneRadius};
  background: ${(p) => recipe(p).canvas};
  overflow: hidden;
  box-sizing: border-box;
`

export const Contact = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  padding: ${theme.voiceMessage.conversationInset};
  background: ${(p) => recipe(p).surface};
  color: ${(p) => recipe(p).foreground};
  border-bottom: 1px solid ${(p) => recipe(p).border};
`
export const Conversation = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  min-height: 0;
  gap: ${theme.voiceMessage.conversationInset};
  padding: ${theme.spacing[2]} ${theme.voiceMessage.conversationInset};
  overflow-y: auto;
  overscroll-behavior: contain;
  &:focus-visible {
    outline: 2px solid ${(p) => recipe(p).accent};
    outline-offset: -2px;
  }
`
export const Bubble = styled.div`
  width: 86%;
  max-width: 100%;
  padding: ${theme.voiceMessage.bubblePaddingBlock} ${theme.spacing[2]};
  border-radius: ${theme.radius.xl} ${theme.radius.xl} ${theme.radius.xl}
    ${theme.radius.sm};
  color: ${(p) => recipe(p).foreground};
  background: ${(p) => recipe(p).surface};
  box-shadow: ${theme.shadows.xs};
  box-sizing: border-box;
  font-size: ${theme.typography.fontSize.xs};
  line-height: 1.4;
  overflow-wrap: anywhere;
`
export const VoiceBubble = styled(Bubble)`
  width: 86%;
`
export const PhotoBubble = styled(Bubble)`
  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: ${theme.radius.lg};
  }
`
export const Player = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[1]};
  min-width: 0;
`
export const Play = styled(DeviceControl)`
  flex-shrink: 0;
  width: ${theme.sizes.control.sm};
  height: ${theme.sizes.control.sm};
  min-height: ${theme.sizes.control.sm};
  padding: 0;
  background: ${(p) => recipe(p).accent};
  border-color: ${(p) => recipe(p).accent};
  color: ${(p) => recipe(p).onAccent};
`
export const Speed = styled(DeviceControl)`
  flex-shrink: 0;
  min-width: ${theme.voiceMessage.speedHeight};
  height: ${theme.sizes.control.sm};
  min-height: ${theme.sizes.control.sm};
  padding: 2px ${theme.voiceMessage.conversationInset};
  color: ${(p) => recipe(p).foreground};
  background: ${(p) => recipe(p).controlSurface};
  font-size: ${theme.voiceMessage.speedFontSize};
`
export const Wave = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  min-width: 0;
  height: ${theme.voiceMessage.waveformHeight};
  overflow: hidden;
  gap: 1px;
`
export const Bar = styled.i<{ $height: number; $played: boolean }>`
  display: block;
  flex: 1;
  height: ${({ $height }) => $height}px;
  border-radius: ${theme.radius.xs};
  background: ${(p) => (p.$played ? recipe(p).accent : recipe(p).border)};
`
export const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${theme.spacing[2]};
  color: ${(p) => recipe(p).muted};
  font-size: ${theme.voiceMessage.metaFontSize};
  font-variant-numeric: tabular-nums;
`
export const Time = styled.time`
  display: block;
  text-align: right;
  color: ${(p) => recipe(p).muted};
  font-size: ${theme.voiceMessage.metaFontSize};
`
export const Transcript = styled.div<{ $visible: boolean }>`
  border-top: 1px dashed ${(p) => recipe(p).border};
  margin-top: ${theme.voiceMessage.conversationInset};
  padding-top: ${theme.voiceMessage.conversationInset};
  font-size: ${(p) => recipe(p).transcriptFontSize};
  line-height: 1.4;
  white-space: pre-wrap;
  p {
    margin: 0;
  }
  ${({ $visible }) =>
    !$visible &&
    css`
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      border: 0;
      overflow: hidden;
      clip: rect(0 0 0 0);
      white-space: nowrap;
    `}
`
export const Hint = styled.p`
  margin: 0;
  color: ${(p) => recipe(p).muted};
  font-size: ${theme.typography.fontSize.sm};
`
export const Error = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${theme.spacing[2]};
  padding-top: ${theme.spacing[2]};
  color: ${(p) => recipe(p).danger};
  font-size: ${theme.typography.fontSize.sm};
`
export const Side = styled.div<{ $stretch?: boolean }>`
  color: ${(p) => recipe(p).questionForeground ?? recipe(p).foreground};
  ${(p) =>
    p.$stretch
      ? css`
          align-self: stretch;
          > :last-child {
            flex: 1;
          }
        `
      : undefined}
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: ${theme.spacing[2]};
`
export const Question = styled.fieldset`
  > [data-answer-feedback] {
    flex-basis: 100%;
    margin: 0;
    font-size: ${theme.typography.fontSize.sm};
    line-height: 1.4;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${theme.spacing[2]};
  min-width: 0;
  margin: 0;
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  border: 1px solid ${(p) => recipe(p).questionBorder ?? recipe(p).border};
  border-radius: ${theme.radius.lg};
  background: ${(p) => recipe(p).questionSurface ?? recipe(p).surface};
`
export const QuestionText = styled.p`
  flex: 1 1 10rem;
  margin: 0;
  font-size: ${theme.typography.fontSize.md};
  font-weight: ${theme.typography.fontWeight.bold};
  line-height: ${theme.typography.lineHeight.normal};
  overflow-wrap: anywhere;
`
export const Choices = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing[2]};
`
export const Choice = styled(DeviceControl)<{
  $feedback?: 'correct' | 'incorrect'
}>`
  min-height: ${theme.sizes.control.sm};
  padding: 0 ${theme.spacing[3]};
  border: 1px solid;
  font-size: ${theme.typography.fontSize.sm};
  color: ${(p) => (p.$feedback === 'correct' ? recipe(p).success : p.$feedback === 'incorrect' ? recipe(p).danger : (recipe(p).questionForeground ?? recipe(p).foreground))};
  background: ${(p) => (p.$feedback === 'correct' ? recipe(p).successSurface : p.$feedback === 'incorrect' ? recipe(p).dangerSurface : (recipe(p).questionSurface ?? recipe(p).surface))};
  border-color: ${(p) => (p.$feedback === 'correct' ? recipe(p).success : p.$feedback === 'incorrect' ? recipe(p).danger : (recipe(p).questionBorder ?? recipe(p).border))};
  text-decoration: ${({ $feedback }) => ($feedback === 'incorrect' ? 'line-through' : 'none')};
  overflow-wrap: anywhere;
  max-width: 100%;
`

export const StatusBar = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing[1]};
  height: 2.125rem;
  padding: 0 ${theme.spacing[2]};
  background: ${(p) => recipe(p).surface};
  color: ${(p) => recipe(p).foreground};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.semibold};
`
export const Island = styled.span`
  flex: 0 1 4.875rem;
  height: 1.375rem;
  border-radius: ${theme.radius.pill};
  background: ${(p) => recipe(p).frame};
`
export const StatusIcons = styled.span`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 2px;
`
export const Back = styled.span`
  color: ${(p) => recipe(p).muted};
`
export const Composer = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: ${theme.spacing[2]};
  padding: ${theme.spacing[2]} ${theme.spacing[2]} ${theme.spacing[5]};
`
export const MessagePlaceholder = styled.span`
  flex: 1;
  min-width: 0;
  border-radius: ${theme.radius.pill};
  padding: ${theme.spacing[2]} ${theme.spacing[3]};
  background: ${(p) => recipe(p).surface};
  color: ${(p) => recipe(p).muted};
  font-size: ${theme.typography.fontSize.xs};
`
export const Microphone = styled.span`
  display: grid;
  flex-shrink: 0;
  place-items: center;
  width: 2.375rem;
  height: 2.375rem;
  border-radius: ${theme.radius.circle};
  color: ${(p) => recipe(p).onAccent};
  background: ${(p) => recipe(p).composerAccent};
`
export const Reply = styled(DeviceControl)`
  flex-shrink: 0;
  width: ${theme.sizes.control.lg};
  min-height: ${theme.sizes.control.lg};
  padding: 0;
  background: ${(p) => recipe(p).composerAccent};
  color: ${(p) => recipe(p).onAccent};
`
export const HomeIndicator = styled.span`
  position: absolute;
  bottom: 6px;
  left: 50%;
  width: 6rem;
  height: ${theme.spacing[1]};
  transform: translateX(-50%);
  border-radius: ${theme.radius.pill};
  background: ${(p) => recipe(p).frame};
`
