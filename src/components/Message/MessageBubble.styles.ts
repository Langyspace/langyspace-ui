import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
import type {
  MessageBubbleSide,
  MessageBubbleStatus,
} from './MessageBubble.types'

interface MessageBubbleStyleProps {
  $side: MessageBubbleSide
  $status?: MessageBubbleStatus
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
  padding: ${token.spacing3} ${token.spacing4};
  border: 1px solid
    ${({ $side, $status }) => {
      if ($status === 'failed') return token.colorFeedbackDanger
      if ($side === 'outgoing') return token.colorBrandDefault

      return token.colorSurfaceBorderSubtle
    }};
  border-radius: ${({ $side }) =>
    $side === 'outgoing'
      ? `${token.radiusRounded} ${token.radiusRounded} ${token.spacing1} ${token.radiusRounded}`
      : `${token.radiusRounded} ${token.radiusRounded} ${token.radiusRounded} ${token.spacing1}`};
  color: ${({ $side, $status }) => {
    if ($status === 'failed') return token.colorFeedbackDangerStrong
    if ($side === 'outgoing') return token.colorNeutral0

    return token.colorContentDefault
  }};
  background: ${({ $side, $status }) => {
    if ($status === 'failed') return token.colorFeedbackDangerSoft
    if ($side === 'outgoing') return token.colorBrandDefault

    return token.colorSurfaceMuted
  }};
  box-shadow: ${token.shadowSubtle};
  overflow-wrap: anywhere;
`

export const Content = styled.div`
  font-size: ${token.typographyFontSizeSm};
  line-height: ${token.typographyLineHeightNormal};
  white-space: pre-wrap;
`

export const Meta = styled.footer<MessageBubbleStyleProps>`
  display: flex;
  min-width: 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: ${token.spacing2};
  margin-top: ${token.spacing1};
  color: ${({ $side, $status }) => {
    if ($status === 'failed') return token.colorFeedbackDangerStrong
    if ($side === 'outgoing') return token.colorNeutral0

    return token.colorContentMuted
  }};
  font-size: ${token.typographyFontSize2xs};
  line-height: ${token.typographyLineHeightNormal};
`

export const Timestamp = styled.time`
  white-space: nowrap;
`

export const Status = styled.span`
  font-weight: ${token.typographyFontWeightMedium};
`
