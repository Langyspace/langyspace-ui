import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { Phone } from '../VoiceMessage/VoiceMessageExercise.styles'

/** Shares the listening phone recipe, including theme, proportions and chrome. */
export const Root = styled(Phone).withConfig({
  componentId: 'lsui-sc-message-phone-frame',
})`
  font-family: ${theme.typography.fontFamily.sans};
`
