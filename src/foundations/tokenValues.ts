// Private, individually tree-shakable values. The public nested API lives in tokens.ts.
export const colorAccentDefault = '#ff1f5c' as const
export const colorAccentTint = '#fff4f7' as const
export const colorContentDefault = '#0a0a0a' as const
export const colorContentMuted = '#6b6b6b' as const
export const colorContentPlaceholder = '#737373' as const
export const colorContentSecondary = '#2a2a2a' as const
export const colorBrandDefault = '#cc0f45' as const
export const colorBrandHover = '#b01343' as const
export const colorFeedbackDanger = '#c62828' as const
export const colorFeedbackDangerSoft = '#fdecec' as const
export const colorFeedbackDangerStrong = '#991b1b' as const
export const colorFeedbackInfo = '#006c9a' as const
export const colorFeedbackInfoSoft = '#e8f7fc' as const
export const colorFeedbackSuccess = '#166534' as const
export const colorFeedbackSuccessStrong = '#14532d' as const
export const colorStatusBrandBackground = '#ffe1ec' as const
export const colorStatusBrandForeground = '#cc0f45' as const
export const colorStatusBrandIndicator = '#cc0f45' as const
export const colorStatusDangerBackground = '#fdecec' as const
export const colorStatusDangerForeground = '#991b1b' as const
export const colorStatusDangerIndicator = '#c62828' as const
export const colorStatusInfoBackground = '#e8f7fc' as const
export const colorStatusInfoForeground = '#075985' as const
export const colorStatusInfoIndicator = '#006c9a' as const
export const colorStatusNeutralBackground = '#f1f1ef' as const
export const colorStatusNeutralForeground = '#404040' as const
export const colorStatusNeutralIndicator = '#737373' as const
export const colorStatusSuccessBackground = '#dcfce7' as const
export const colorStatusSuccessForeground = '#166534' as const
export const colorStatusSuccessIndicator = '#16a34a' as const
export const colorStatusWarningBackground = '#fef3c7' as const
export const colorStatusWarningForeground = '#92400e' as const
export const colorStatusWarningIndicator = '#a85505' as const
export const colorFocus = 'rgba(0, 242, 234, 0.72)' as const
export const colorInverseBorderSubtle = 'rgba(255, 255, 255, 0.18)' as const
export const colorInverseContentMuted = 'rgba(255, 255, 255, 0.72)' as const
export const colorInverseSurfaceSubtle = 'rgba(255, 255, 255, 0.18)' as const
export const colorNeutral0 = '#ffffff' as const
export const colorNeutral50 = '#fafaf9' as const
export const colorNeutral100 = '#f1f1ef' as const
export const colorNeutral300 = '#d9d9d6' as const
export const colorNeutral400 = '#d9d9d6' as const
export const colorNeutral500 = '#9a9a9a' as const
export const colorNeutral600 = '#6b6b6b' as const
export const colorNeutral900 = '#1a1a1a' as const
export const colorNeutral950 = '#0a0a0a' as const
export const colorOverlayDefault = 'rgba(10, 10, 10, 0.42)' as const
export const colorSurfaceBorderDefault = '#d8d4cb' as const
export const colorSurfaceBorderStrong = '#0a0a0a' as const
export const colorSurfaceBorderSubtle = '#ececea' as const
export const colorSurfaceMuted = '#f8f8f6' as const
export const colorSurfaceSubtle = '#fbfbfa' as const
export const controlHeightLg = '3rem' as const
export const controlHeightMd = '2.5rem' as const
export const controlHeightSm = '2rem' as const
export const fieldHeightLg = '3.5rem' as const
export const fieldHeightMd = '2.75rem' as const
export const fieldHeightSm = '2.5rem' as const
export const motionDurationInteractive = '150ms' as const
export const motionDurationSpinner = '0.8s' as const
export const motionEasingInteractive = 'cubic-bezier(0.2, 0, 0, 1)' as const
export const radiusCard = '0.875rem' as const
export const radiusControl = '0.625rem' as const
export const radiusLg = '0.5rem' as const
export const radiusPill = '999px' as const
export const radiusRounded = '0.75rem' as const
export const shadowDrawer = '-16px 0 40px rgba(10, 10, 10, 0.1)' as const
export const shadowFocus =
  '0 0 0 2px #ffffff, 0 0 0 5px rgba(0, 242, 234, 0.72)' as const
export const shadowPopover = '0 20px 60px rgba(10, 10, 10, 0.18)' as const
export const shadowRaised = '0 4px 12px rgba(0, 0, 0, 0.07)' as const
export const shadowSubtle = '0 1px 2px rgba(0, 0, 0, 0.05)' as const
export const spacing1 = '0.25rem' as const
export const spacing2 = '0.5rem' as const
export const spacing3 = '0.75rem' as const
export const spacing4 = '1rem' as const
export const spacing5 = '1.25rem' as const
export const spacing6 = '1.5rem' as const
export const spacing8 = '2rem' as const
export const spacing16 = '4rem' as const
export const typographyFontSize2xs = '0.6875rem' as const
export const typographyFontSizeMd = '1rem' as const
export const typographyFontSizeLg = '1.125rem' as const
export const typographyFontSizeXl = '1.25rem' as const
export const typographyFontSize2xl = '1.5rem' as const
export const typographyFontSize3xl = '2rem' as const
export const typographyFontSizeSm = '0.875rem' as const
export const typographyFontSizeXs = '0.75rem' as const
export const typographyFontWeightBold = 700 as const
export const typographyFontWeightMedium = 500 as const
export const typographyFontWeightSemibold = 600 as const
export const typographyLineHeightNormal = 1.5 as const
export const typographyLineHeightSnug = 1.25 as const

export const colorStatus = {
  brand: {
    background: colorStatusBrandBackground,
    foreground: colorStatusBrandForeground,
    indicator: colorStatusBrandIndicator,
  },
  danger: {
    background: colorStatusDangerBackground,
    foreground: colorStatusDangerForeground,
    indicator: colorStatusDangerIndicator,
  },
  info: {
    background: colorStatusInfoBackground,
    foreground: colorStatusInfoForeground,
    indicator: colorStatusInfoIndicator,
  },
  neutral: {
    background: colorStatusNeutralBackground,
    foreground: colorStatusNeutralForeground,
    indicator: colorStatusNeutralIndicator,
  },
  success: {
    background: colorStatusSuccessBackground,
    foreground: colorStatusSuccessForeground,
    indicator: colorStatusSuccessIndicator,
  },
  warning: {
    background: colorStatusWarningBackground,
    foreground: colorStatusWarningForeground,
    indicator: colorStatusWarningIndicator,
  },
} as const

export const spacing = {
  '1': spacing1,
  '2': spacing2,
  '3': spacing3,
  '4': spacing4,
  '5': spacing5,
  '6': spacing6,
  '8': spacing8,
  '16': spacing16,
} as const

export const typography = {
  fontSize: {
    '2xs': typographyFontSize2xs,
    md: typographyFontSizeMd,
    lg: typographyFontSizeLg,
    xl: typographyFontSizeXl,
    '2xl': typographyFontSize2xl,
    '3xl': typographyFontSize3xl,
    sm: typographyFontSizeSm,
    xs: typographyFontSizeXs,
  },
  fontWeight: {
    bold: typographyFontWeightBold,
    medium: typographyFontWeightMedium,
    semibold: typographyFontWeightSemibold,
  },
  lineHeight: {
    normal: typographyLineHeightNormal,
    snug: typographyLineHeightSnug,
  },
} as const

export const typographyFontSize = {
  '2xs': typographyFontSize2xs,
  md: typographyFontSizeMd,
  lg: typographyFontSizeLg,
  xl: typographyFontSizeXl,
  '2xl': typographyFontSize2xl,
  '3xl': typographyFontSize3xl,
  sm: typographyFontSizeSm,
  xs: typographyFontSizeXs,
} as const

export const typographyFontWeight = {
  bold: typographyFontWeightBold,
  medium: typographyFontWeightMedium,
  semibold: typographyFontWeightSemibold,
} as const

export const typographyLineHeight = {
  normal: typographyLineHeightNormal,
  snug: typographyLineHeightSnug,
} as const
