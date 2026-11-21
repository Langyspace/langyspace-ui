import { css, styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { resolveTheme } from '../../foundations/theme/resolveTheme'
import { Phone } from '../VoiceMessage/VoiceMessageExercise.styles'

/** Shares the listening phone recipe, including theme, proportions and chrome. */
export const Root = styled(Phone).withConfig({
  componentId: 'lsui-sc-message-phone-frame',
})<{ $size: 'default' | 'large' }>`
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
`
