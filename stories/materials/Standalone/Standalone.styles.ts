import { createGlobalStyle } from 'styled-components'
import montserrat400 from '@fontsource/montserrat/files/montserrat-latin-400-normal.woff2'
import montserrat500 from '@fontsource/montserrat/files/montserrat-latin-500-normal.woff2'
import montserrat600 from '@fontsource/montserrat/files/montserrat-latin-600-normal.woff2'
import montserrat700 from '@fontsource/montserrat/files/montserrat-latin-700-normal.woff2'
import space500 from '@fontsource/space-grotesk/files/space-grotesk-latin-500-normal.woff2'
import space600 from '@fontsource/space-grotesk/files/space-grotesk-latin-600-normal.woff2'
import space700 from '@fontsource/space-grotesk/files/space-grotesk-latin-700-normal.woff2'
import instrument from '@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff2'
const fonts = [
  ['Montserrat', 400, 'normal', montserrat400],
  ['Montserrat', 500, 'normal', montserrat500],
  ['Montserrat', 600, 'normal', montserrat600],
  ['Montserrat', 700, 'normal', montserrat700],
  ['Space Grotesk', 500, 'normal', space500],
  ['Space Grotesk', 600, 'normal', space600],
  ['Space Grotesk', 700, 'normal', space700],
  ['Instrument Serif', 400, 'italic', instrument],
] as const
export const FontStyles = createGlobalStyle`
  ${fonts.map(([family, weight, style, url]) => `@font-face {font-family: '${family}';font-style:${style};font-weight:${weight};font-display:swap;src:url('${url}') format('woff2');}`).join('\n')}
  #material-root { width:100%; min-width:0; height:100dvh; }
`
