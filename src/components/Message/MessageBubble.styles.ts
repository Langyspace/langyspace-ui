import { styled } from 'styled-components'
import type {
  MessageBubbleSide,
  MessageBubbleStatus,
} from './MessageBubble.types'
import { theme } from '../../foundations/theme/theme'
import { resolveTheme } from '../../foundations/theme/resolveTheme'

const messaging = (props: Parameters<typeof resolveTheme>[0]) =>
  resolveTheme(props).voiceMessage ?? theme.voiceMessage

interface MessageBubbleStyleProps {
  $side: MessageBubbleSide
  $status?: MessageBubbleStatus
  $appearance: 'brand' | 'messaging'
}

export const Container = styled.article.withConfig({
  componentId: 'lsui-sc-message-bubble',
})<MessageBubbleStyleProps>`
  display: flex;
  width: 100%;
  min-width: 0;
  justify-content: ${({ $side }) =>
    $side === 'outgoing' ? 'flex-end' : 'flex-start'};
`

export const Bubble = styled.div<MessageBubbleStyleProps>`
  width: fit-content;
  max-width: min(80%, 34rem);
  min-width: 0;
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  border: 1px solid
    ${(p) => {
      const { $side, $status, $appearance } = p
      if ($status === 'failed') return theme.colors.feedback.danger
      if ($side === 'outgoing' && $appearance === 'messaging')
        return messaging(p).outgoingSurface
      if ($side === 'outgoing') return theme.semantic.foreground.brand

      return theme.colors.border.subtle
    }};
  border-radius: ${({ $side }) =>
    $side === 'outgoing'
      ? `${theme.radius.xl} ${theme.radius.xl} ${theme.spacing[1]} ${theme.radius.xl}`
      : `${theme.radius.xl} ${theme.radius.xl} ${theme.radius.xl} ${theme.spacing[1]}`};
  color: ${(p) => {
    const { $side, $status, $appearance } = p
    if ($status === 'failed') return theme.semantic.status.danger.foreground
    if ($side === 'outgoing' && $appearance === 'messaging')
      return messaging(p).outgoingForeground
    if ($side === 'outgoing') return theme.colors.palette.white

    return theme.colors.text.primary
  }};
  background: ${(p) => {
    const { $side, $status, $appearance } = p
    if ($status === 'failed') return theme.colors.feedback.dangerSubtle
    if ($side === 'outgoing' && $appearance === 'messaging')
      return messaging(p).outgoingSurface
    if ($side === 'outgoing') return theme.semantic.foreground.brand

    return theme.semantic.background.muted
  }};
  box-shadow: ${theme.shadows.xs};
  overflow-wrap: anywhere;
`

export const Content = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.normal};
  white-space: pre-wrap;
`

export const Meta = styled.footer<MessageBubbleStyleProps>`
  display: flex;
  min-width: 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: ${theme.spacing[2]};
  margin-top: ${theme.spacing[1]};
  color: ${(p) => {
    const { $side, $status, $appearance } = p
    if ($status === 'failed') return theme.semantic.status.danger.foreground
    if ($side === 'outgoing' && $appearance === 'messaging')
      return messaging(p).outgoingMuted
    if ($side === 'outgoing') return theme.colors.palette.white

    return theme.colors.text.muted
  }};
  font-size: ${theme.typography.fontSize['2xs']};
  line-height: ${theme.typography.lineHeight.normal};
`

export const Timestamp = styled.time`
  white-space: nowrap;
`

export const Status = styled.span`
  font-weight: ${theme.typography.fontWeight.medium};
`
