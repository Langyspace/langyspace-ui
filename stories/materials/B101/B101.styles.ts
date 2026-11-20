export * from '../shared/Lesson.styles'
import { styled } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'
import { resolveSlideTheme } from '../../../src/foundations/theme/resolveSlideTheme'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
export const Page = styled(SlidePage)`
  h2 em {
    color: ${(p) => resolveSlideTheme(p).foreground};
    font-family: ${(p) => resolveSlideTheme(p).accentFontFamily};
    font-weight: ${theme.typography.fontWeight.regular};
  }
`
