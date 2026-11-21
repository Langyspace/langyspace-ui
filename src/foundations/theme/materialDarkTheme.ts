import { createTheme } from './createTheme'
// Updated Claude shared theme,17 November2026; immutable source hashes in the epic.
export const materialDarkTheme = createTheme({
  slides: {
    canvas: '#0B0B0C',
    surface: '#1A1A1C',
    foreground: '#F7F7F7',
    muted: '#A9A4A6',
    border: '#2E2E31',
    accent: '#FF1F5C',
    indicator: '#FF1F5C',
    headerSurface: 'rgba(11,11,12,.92)',
    inverseCanvas: '#F7F7F7',
    inverseForeground: '#0B0B0C',
    inverseMuted: '#5B5659',
    inverseBorder: '#D7D3D5',
  },
  colors: {
    text: { primary: '#F7F7F7', secondary: '#F7F7F7', muted: '#A9A4A6' },
    surface: { canvas: '#111113' },
    palette: {
      neutral: { 100: '#232326' },
      accent: { pinkSoft: '#350A17' },
      feedback: { successSoft: '#0F2E22' },
      extended: { red50: '#3A0F1C', red700: '#FFADB8' },
    },
  },
  semantic: {
    border: { default: '#3A3A3E', strong: '#8A8588' },
    background: { muted: '#232326', surfaceSubtle: '#111113' },
    foreground: { default: '#F7F7F7', placeholder: '#A9A4A6' },
    status: {
      success: { foreground: '#8FE2BB', background: '#0F2E22' },
      danger: { foreground: '#FFADB8', background: '#3A0F1C' },
      info: { foreground: '#A6C8FF' },
    },
  },
  buttons: {
    secondary: {
      background: '#1A1A1C',
      backgroundHover: '#2E2E31',
      backgroundActive: '#232326',
      color: '#F7F7F7',
      colorHover: '#F7F7F7',
      borderColor: '#3A3A3E',
      borderColorHover: '#8A8588',
      border: '1px solid #3A3A3E',
    },
    tertiary: {
      color: '#F7F7F7',
      backgroundHover: '#232326',
      backgroundActive: '#2E2E31',
    },
  },
  voiceMessage: {
    questionSurface: '#1A1A1C',
    questionForeground: '#F7F7F7',
    questionBorder: '#2E2E31',
    success: '#8FE2BB',
    successSurface: '#0F2E22',
    danger: '#FFADB8',
    dangerSurface: '#3A0F1C',
  },
})
