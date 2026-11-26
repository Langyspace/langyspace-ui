import { css, styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { resolveTheme } from '../../foundations/theme/resolveTheme'
import {
  Phone,
  Conversation,
} from '../VoiceMessage/VoiceMessageExercise.styles'

/** Shares the listening phone recipe, including theme, proportions and chrome. */
export const Root = styled(Phone).withConfig({
  componentId: 'lsui-sc-message-phone-frame',
})<{ $size: 'default' | 'large'; $fit: boolean }>`
  font-family: ${theme.typography.fontFamily.sans};
  ${({ $size }) =>
    $size === 'large' &&
    css`
      width: min(
        100%,
        ${(p) => (resolveTheme(p).voiceMessage ?? theme.voiceMessage).largePhoneWidth}
      );
      height: ${(p) => (resolveTheme(p).voiceMessage ?? theme.voiceMessage).largePhoneHeight};
    `}
  ${(p) => {
    if (!p.$fit) return
    const recipe = resolveTheme(p).voiceMessage ?? theme.voiceMessage
    return css`
      :where([data-slide-fit]) && {
        height: ${p.$size === 'large' ? recipe.largePhoneHeight : recipe.phoneHeight};
        min-height: 0;
      }
      ${Conversation} {
        overflow: hidden;
        min-height: 0;
      }
    `
  }}
`

export const FitViewport = styled.div`
  position: relative;
  width: 100%;
  flex: 1;
  min-height: 0;
`

export const FitMessages = styled.div<{ $scale: number }>`
  position: absolute;
  inset-block-start: 0;
  inset-inline-start: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${theme.voiceMessage.conversationInset};
  transform: translateX(-50%) scale(${(p) => p.$scale});
  transform-origin: top center;
`
