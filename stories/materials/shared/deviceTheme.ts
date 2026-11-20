import type { DefaultTheme } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'
import { resolveTheme } from '../../../src/foundations/theme/resolveTheme'
export const withVoiceMessageLayout =
  (layout: {
    contentWidth: string
    phoneWidth: string
    phoneHeight: string
    transcriptFontSize?: string
  }) =>
  (parent: DefaultTheme) => ({
    ...parent,
    voiceMessage: {
      ...theme.voiceMessage,
      ...resolveTheme({ theme: parent }).voiceMessage,
      ...layout,
    },
  })
