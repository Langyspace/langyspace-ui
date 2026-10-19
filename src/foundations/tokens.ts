import * as token from './tokenValues'

export const tokens = {
  color: {
    accent: {
      default: token.colorAccentDefault,
      tint: token.colorAccentTint,
    },
    content: {
      default: token.colorContentDefault,
      muted: token.colorContentMuted,
      placeholder: token.colorContentPlaceholder,
      secondary: token.colorContentSecondary,
    },
    brand: {
      default: token.colorBrandDefault,
      hover: token.colorBrandHover,
    },
    feedback: {
      danger: token.colorFeedbackDanger,
      dangerSoft: token.colorFeedbackDangerSoft,
      dangerStrong: token.colorFeedbackDangerStrong,
      info: token.colorFeedbackInfo,
      infoSoft: token.colorFeedbackInfoSoft,
      success: token.colorFeedbackSuccess,
      successStrong: token.colorFeedbackSuccessStrong,
    },
    status: {
      brand: {
        background: token.colorStatusBrandBackground,
        foreground: token.colorStatusBrandForeground,
        indicator: token.colorStatusBrandIndicator,
      },
      danger: {
        background: token.colorStatusDangerBackground,
        foreground: token.colorStatusDangerForeground,
        indicator: token.colorStatusDangerIndicator,
      },
      info: {
        background: token.colorStatusInfoBackground,
        foreground: token.colorStatusInfoForeground,
        indicator: token.colorStatusInfoIndicator,
      },
      neutral: {
        background: token.colorStatusNeutralBackground,
        foreground: token.colorStatusNeutralForeground,
        indicator: token.colorStatusNeutralIndicator,
      },
      success: {
        background: token.colorStatusSuccessBackground,
        foreground: token.colorStatusSuccessForeground,
        indicator: token.colorStatusSuccessIndicator,
      },
      warning: {
        background: token.colorStatusWarningBackground,
        foreground: token.colorStatusWarningForeground,
        indicator: token.colorStatusWarningIndicator,
      },
    },
    focus: token.colorFocus,
    inverse: {
      borderSubtle: token.colorInverseBorderSubtle,
      contentMuted: token.colorInverseContentMuted,
      surfaceSubtle: token.colorInverseSurfaceSubtle,
    },
    neutral: {
      0: token.colorNeutral0,
      50: token.colorNeutral50,
      100: token.colorNeutral100,
      300: token.colorNeutral300,
      500: token.colorNeutral500,
      600: token.colorNeutral600,
      900: token.colorNeutral900,
      950: token.colorNeutral950,
    },
    overlay: {
      default: token.colorOverlayDefault,
    },
    surfaceBorder: {
      default: token.colorSurfaceBorderDefault,
      strong: token.colorSurfaceBorderStrong,
      subtle: token.colorSurfaceBorderSubtle,
    },
    surface: {
      muted: token.colorSurfaceMuted,
      subtle: token.colorSurfaceSubtle,
    },
  },
  control: {
    height: {
      lg: token.controlHeightLg,
      md: token.controlHeightMd,
      sm: token.controlHeightSm,
    },
  },
  field: {
    height: {
      lg: token.fieldHeightLg,
      md: token.fieldHeightMd,
      sm: token.fieldHeightSm,
    },
  },
  motion: {
    duration: {
      interactive: token.motionDurationInteractive,
      spinner: token.motionDurationSpinner,
    },
    easing: {
      interactive: token.motionEasingInteractive,
    },
  },
  radius: {
    card: token.radiusCard,
    control: token.radiusControl,
    lg: token.radiusLg,
    pill: token.radiusPill,
    rounded: token.radiusRounded,
  },
  shadow: {
    drawer: token.shadowDrawer,
    focus: token.shadowFocus,
    popover: token.shadowPopover,
    raised: token.shadowRaised,
    subtle: token.shadowSubtle,
  },
  spacing: {
    1: token.spacing1,
    2: token.spacing2,
    3: token.spacing3,
    4: token.spacing4,
    5: token.spacing5,
    6: token.spacing6,
    8: token.spacing8,
    16: token.spacing16,
  },
  typography: {
    fontSize: {
      '2xs': token.typographyFontSize2xs,
      md: token.typographyFontSizeMd,
      lg: token.typographyFontSizeLg,
      xl: token.typographyFontSizeXl,
      '2xl': token.typographyFontSize2xl,
      '3xl': token.typographyFontSize3xl,
      sm: token.typographyFontSizeSm,
      xs: token.typographyFontSizeXs,
    },
    fontWeight: {
      bold: token.typographyFontWeightBold,
      medium: token.typographyFontWeightMedium,
      semibold: token.typographyFontWeightSemibold,
    },
    lineHeight: {
      normal: token.typographyLineHeightNormal,
      snug: token.typographyLineHeightSnug,
    },
  },
} as const

export type DesignTokens = typeof tokens
