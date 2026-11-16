import { resolveTheme } from './resolveTheme'
import { theme } from './theme'

export const resolveSlideTheme = (props: Parameters<typeof resolveTheme>[0]) =>
  resolveTheme(props).slides ?? theme.slides
