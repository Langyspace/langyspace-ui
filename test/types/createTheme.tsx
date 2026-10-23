import { createTheme } from '../../src'

// Overrides keep the shared keys typed and add product-only values.
const landing = createTheme({
  colors: { palette: { neutral: { '900': '#000000' } } },
  typography: { fontWeight: { extraBold: 800 } },
})

export const sharedSpacing: string = landing.spacing[3]
export const sharedRadius: string = landing.radius.pill
export const overriddenInk: string = landing.colors.palette.neutral['900']
export const productWeight: number = landing.typography.fontWeight.extraBold
