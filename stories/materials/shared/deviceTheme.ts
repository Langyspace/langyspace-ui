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

/** Phone proportions used by the reviewed B1/B2/C1 listening compositions. */
export const lessonVoiceMessageTheme = withVoiceMessageLayout({
  contentWidth: '65rem',
  phoneWidth: 'clamp(11.875rem, calc((100dvh - 15.625rem) / 2), 16.875rem)',
  phoneHeight: 'clamp(23.75rem, calc(100dvh - 15.625rem), 33.75rem)',
  transcriptFontSize: 'clamp(0.75rem, 1.8cqw, 0.8125rem)',
})
