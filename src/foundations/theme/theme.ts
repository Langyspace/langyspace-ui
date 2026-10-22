const palette = {
  white: '#FFFFFF',
  black: '#000000',
  neutral: {
    50: '#FFFFFF',
    100: '#FAFAF9',
    200: '#F1F1EF',
    300: '#ECECEA',
    400: '#D9D9D6',
    500: '#9A9A9A',
    600: '#6B6B6B',
    700: '#2A2A2A',
    800: '#1A1A1A',
    900: '#0A0A0A',
  },
  accent: {
    pink: '#FF1F5C',
    pinkHover: '#E31B52',
    pinkSoft: '#FFE1EC',
    pinkTint: '#FFF4F7',
    aqua: '#00F2EA',
    aquaHover: '#00D9D2',
    aquaSoft: '#E8FFFE',
  },
  // Single-purpose hues used by specific component recipes (charts, flashcards, quiz).
  extended: {
    ink: '#111111',
    snow: '#FCFCFB',
    paper: '#FFFDFC',
    paperWarm: '#FFFDFB',
    stone100: '#F6F6F3',
    stone200: '#EEECE8',
    stone250: '#ECEAE6',
    stone300: '#E4E1DA',
    stone350: '#D8D6D2',
    stone600: '#5B5B58',
    rose50: '#FEF0F2',
    rose600: '#E11D48',
    red50: '#FEF2F2',
    red600: '#DC2626',
    red700: '#B91C1C',
    pink50: '#FFF7FA',
    pink600: '#F10F4D',
    pink800: '#9D174D',
    orange50: '#FFF3E0',
    yellow800: '#854D0E',
    teal700: '#007F78',
  },
  feedback: {
    success: '#16A34A',
    successSoft: '#DCFCE7',
    warning: '#D97706',
    warningSoft: '#FEF3C7',
    danger: '#C62828',
    dangerSoft: '#FDECEC',
    info: '#006C9A',
    infoSoft: '#E8F7FC',
  },
} as const

const breakpoints = {
  xs: '360px',
  sm: '640px',
  md: '768px',
  mobileShell: '900px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

// Height thresholds for short landscape phones and tall tablets in practice layouts.
const viewportHeights = {
  xs: '500px',
  sm: '620px',
  md: '700px',
  lg: '760px',
  tall: '761px',
  xl: '880px',
} as const

const typography = {
  fontFamily: {
    sans: "'Montserrat', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    heading:
      "'Montserrat', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",
  },
  fontSize: {
    '2xs': '0.6875rem',
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    '4xl': '2.5rem',
    '5xl': '3.5rem',
    '6xl': '4.5rem',
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.1,
    snug: 1.25,
    normal: 1.5,
    relaxed: 1.7,
  },
  letterSpacing: {
    normal: '0',
    wide: '0.01em',
  },
} as const

const baseSpacing = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  32: '8rem',
} as const

type BaseSpacingKey = keyof typeof baseSpacing

const fluidBlockSpace = (
  min: BaseSpacingKey,
  preferred: string,
  max: BaseSpacingKey,
) => `clamp(${baseSpacing[min]}, ${preferred}, ${baseSpacing[max]})`

const spacing = {
  ...baseSpacing,
  responsive: {
    // Fluid block-axis rhythm for page, panel, section, and large form spacing.
    block: {
      xs: fluidBlockSpace(2, '1.5svh', 3),
      sm: fluidBlockSpace(4, '2.5svh', 5),
      md: fluidBlockSpace(4, '2.5svh', 6),
      lg: fluidBlockSpace(4, '3svh', 6),
      xl: fluidBlockSpace(6, '4svh', 8),
      '2xl': fluidBlockSpace(6, '4svh', 10),
      '3xl': fluidBlockSpace(8, '5svh', 10),
      '4xl': fluidBlockSpace(12, '8svh', 20),
    },
    // Tighter block-axis rhythm for mobile shells and short viewports.
    compactBlock: {
      xs: fluidBlockSpace(2, '1.25svh', 3),
      sm: fluidBlockSpace(3, '2svh', 4),
      md: fluidBlockSpace(3, '2.5svh', 5),
      lg: fluidBlockSpace(3, '3svh', 5),
      xl: fluidBlockSpace(4, '3.5svh', 8),
      '2xl': fluidBlockSpace(5, '4svh', 10),
      '3xl': fluidBlockSpace(6, '5svh', 12),
      '4xl': fluidBlockSpace(8, '6svh', 16),
    },
  },
} as const

const radius = {
  none: '0',
  xs: '0.125rem',
  sm: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  control: '0.625rem',
  card: '0.875rem',
  pill: '999px',
  circle: '50%',
} as const

const semantic = {
  background: {
    canvas: '#F4F4F1',
    page: '#FFFFFF',
    surface: '#FFFFFF',
    surfaceSubtle: '#FBFBFA',
    muted: '#F8F8F6',
    inverse: '#0A0A0A',
    brandSubtle: '#FFE1EC',
    overlay: 'rgba(10, 10, 10, 0.42)',
    overlayStrong: 'rgba(0, 0, 0, 0.56)',
  },
  foreground: {
    default: '#0A0A0A',
    successStrong: '#14532D',
    secondary: '#2A2A2A',
    muted: '#6B6B6B',
    subtle: '#737373',
    inverse: '#FFFFFF',
    brand: '#CC0F45',
    brandHover: '#B01343',
    placeholder: '#737373',
  },
  border: {
    subtle: '#E8E5DF',
    default: '#D8D4CB',
    strong: '#0A0A0A',
    brand: '#CC0F45',
    danger: '#C62828',
  },
  focus: {
    ring: 'rgba(0, 242, 234, 0.72)',
    inner: '#FFFFFF',
    outer: '#0A0A0A',
    brandHalo: '#FF1F5C2E',
    innerWidth: '2px',
    outerWidth: '4px',
  },
  inverse: {
    border: 'rgba(255, 255, 255, 0.18)',
    contentMuted: 'rgba(255, 255, 255, 0.72)',
    surface: 'rgba(255, 255, 255, 0.18)',
  },
  status: {
    neutral: {
      foreground: '#404040',
      background: '#F1F1EF',
      indicator: '#737373',
    },
    info: {
      foreground: '#075985',
      background: '#E8F7FC',
      indicator: '#006C9A',
    },
    success: {
      foreground: '#166534',
      background: '#DCFCE7',
      indicator: '#16A34A',
    },
    warning: {
      foreground: '#92400E',
      background: '#FEF3C7',
      indicator: '#A85505',
    },
    danger: {
      foreground: '#991B1B',
      background: '#FDECEC',
      indicator: '#C62828',
    },
    brand: {
      foreground: '#CC0F45',
      background: '#FFE1EC',
      indicator: '#CC0F45',
    },
  },
  severity: {
    neutral: {
      foreground: '#2A2A2A',
      background: '#F8F8F6',
      indicator: '#737373',
    },
    warning: {
      foreground: '#7B4D00',
      background: '#FEF3C7',
      indicator: '#A85505',
    },
    danger: {
      foreground: '#C62828',
      background: '#FDECEC',
      indicator: '#C62828',
    },
  },
  feedback: {
    info: {
      foreground: '#075985',
      background: '#E8F7FC',
      indicator: '#006C9A',
    },
    success: {
      foreground: '#166534',
      background: '#DCFCE7',
      indicator: '#16A34A',
    },
    warning: {
      foreground: '#92400E',
      background: '#FEF3C7',
      indicator: '#A85505',
    },
    danger: {
      foreground: '#991B1B',
      background: '#FDECEC',
      indicator: '#C62828',
    },
  },
} as const

const colors = {
  palette,
  background: palette.white,
  foreground: palette.neutral[900],
  logo: {
    primary: palette.neutral[900],
    muted: palette.neutral[700],
    mark: palette.neutral[900],
  },
  accent: {
    primary: palette.accent.pink,
    primaryHover: palette.accent.pinkHover,
    primarySoft: palette.accent.pinkSoft,
    primaryTint: palette.accent.pinkTint,
    secondary: palette.accent.aqua,
    secondaryHover: palette.accent.aquaHover,
    secondarySoft: palette.accent.aquaSoft,
    onSecondary: palette.black,
  },
  surface: {
    canvas: palette.white,
    page: palette.white,
    raised: palette.white,
    muted: palette.neutral[100],
    subtle: palette.neutral[200],
    inverse: palette.black,
  },
  text: {
    primary: palette.neutral[900],
    secondary: palette.neutral[700],
    muted: palette.neutral[600],
    subtle: palette.neutral[500],
    inverse: palette.white,
    link: palette.neutral[900],
    onAccent: palette.neutral[900],
    success: palette.feedback.success,
    warning: palette.feedback.warning,
    danger: palette.feedback.danger,
    info: palette.feedback.info,
  },
  border: {
    subtle: palette.neutral[300],
    default: palette.neutral[400],
    strong: palette.neutral[500],
    inverse: palette.neutral[900],
    accent: palette.accent.pink,
    accentAlternative: palette.accent.aqua,
    focus: palette.accent.aqua,
  },
  brand: {
    logo: palette.neutral[900],
    primary: palette.neutral[900],
    primaryHover: palette.neutral[800],
    primaryActive: palette.neutral[900],
    onPrimary: palette.white,
    secondary: palette.white,
    onSecondary: palette.black,
    accent: palette.accent.pink,
    accentAlternative: palette.accent.aqua,
    accentSoft: palette.accent.pinkSoft,
    accentAlternativeSoft: palette.accent.aquaSoft,
  },
  action: {
    primary: palette.neutral[900],
    primaryHover: palette.neutral[800],
    primaryActive: palette.neutral[900],
    primaryText: palette.white,
    primaryBorder: palette.neutral[900],
    secondary: palette.white,
    secondaryHover: palette.neutral[100],
    secondaryActive: palette.neutral[200],
    secondaryText: palette.neutral[900],
    secondaryBorder: palette.neutral[400],
    highlight: palette.accent.aqua,
    highlightHover: palette.accent.aquaHover,
    highlightText: palette.neutral[900],
    highlightBorder: palette.accent.aqua,
  },
  highlight: {
    text: palette.neutral[900],
    icon: palette.accent.pink,
    background: palette.accent.aquaSoft,
    backgroundAlternative: palette.accent.pinkSoft,
    border: palette.accent.aqua,
    indicator: palette.accent.pink,
  },
  selection: {
    text: palette.neutral[900],
    icon: palette.accent.pink,
    background: palette.accent.aquaSoft,
    backgroundHover: palette.accent.pinkSoft,
    border: palette.accent.aqua,
    indicator: palette.accent.pink,
  },
  feedback: {
    success: palette.feedback.success,
    successSubtle: palette.feedback.successSoft,
    warning: palette.feedback.warning,
    warningSubtle: palette.feedback.warningSoft,
    danger: palette.feedback.danger,
    dangerSubtle: palette.feedback.dangerSoft,
    info: palette.feedback.info,
    infoSubtle: palette.feedback.infoSoft,
  },
  focusRing: '#00F2EA52',
  overlay: 'rgba(0, 0, 0, 0.56)',
} as const

const borders = {
  width: {
    none: '0',
    thin: '1px',
    medium: '2px',
  },
  style: {
    solid: 'solid',
  },
  subtle: `1px solid ${colors.border.subtle}`,
  default: `1px solid ${colors.border.default}`,
  strong: `1px solid ${colors.border.strong}`,
  inverse: `1px solid ${colors.border.inverse}`,
  accent: `1px solid ${colors.border.accent}`,
  focus: `2px solid ${colors.border.focus}`,
} as const

const shadows = {
  none: 'none',
  xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
  sm: '0 4px 12px rgba(0, 0, 0, 0.07)',
  md: '0 12px 32px rgba(0, 0, 0, 0.1)',
  lg: '0 24px 64px rgba(0, 0, 0, 0.14)',
  focus: `0 0 0 3px ${colors.focusRing}`,
  focusHalo: `0 0 0 2px ${palette.white}, 0 0 0 5px ${semantic.focus.ring}`,
  floating: '0 20px 60px rgba(10, 10, 10, 0.18)',
  accent: '0 10px 30px rgba(0, 242, 234, 0.28)',
  card: '0 1px 0 rgba(10, 10, 10, 0.04), 0 1px 2px rgba(10, 10, 10, 0.04)',
  pop: '0 10px 30px rgba(10, 10, 10, 0.1), 0 2px 6px rgba(10, 10, 10, 0.06)',
  surface:
    '0 1px 0 rgba(10, 10, 10, 0.045), 0 12px 28px rgba(10, 10, 10, 0.05)',
  surfaceSoft:
    '0 1px 2px rgba(10, 10, 10, 0.04), 0 8px 18px rgba(10, 10, 10, 0.045)',
  popover:
    '0 16px 44px rgba(10, 10, 10, 0.16), 0 2px 8px rgba(10, 10, 10, 0.08)',
  drawer: '-16px 0 40px rgba(10, 10, 10, 0.1)',
} as const

const transitions = {
  duration: {
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
    spinner: '0.8s',
  },
  easing: {
    standard: 'cubic-bezier(0.2, 0, 0, 1)',
    entrance: 'cubic-bezier(0, 0, 0, 1)',
    exit: 'cubic-bezier(0.4, 0, 1, 1)',
  },
  property: {
    colors:
      'color 150ms cubic-bezier(0.2, 0, 0, 1), background-color 150ms cubic-bezier(0.2, 0, 0, 1), border-color 150ms cubic-bezier(0.2, 0, 0, 1)',
    shadow: 'box-shadow 200ms cubic-bezier(0.2, 0, 0, 1)',
    transform: 'transform 200ms cubic-bezier(0.2, 0, 0, 1)',
    interactive:
      'color 150ms cubic-bezier(0.2, 0, 0, 1), background-color 150ms cubic-bezier(0.2, 0, 0, 1), border-color 150ms cubic-bezier(0.2, 0, 0, 1), box-shadow 200ms cubic-bezier(0.2, 0, 0, 1), transform 200ms cubic-bezier(0.2, 0, 0, 1)',
  },
} as const

const sizes = {
  container: {
    xs: '20rem',
    sm: '30rem',
    md: '48rem',
    lg: '70.375rem',
    xl: '86rem',
  },
  headerHeight: '4.6rem',
  sidebarWidth: '15.5rem',
  densityRow: '4rem',
  control: {
    sm: '2rem',
    md: '2.5rem',
    lg: '3rem',
    xl: '3.5rem',
  },
  field: {
    sm: '2.5rem',
    md: '2.75rem',
    lg: '3.5rem',
  },
  icon: {
    xs: '0.875rem',
    sm: '1rem',
    md: '1.25rem',
    lg: '1.5rem',
  },
} as const

const buttons = {
  base: {
    borderRadius: radius.pill,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.snug,
    transition: transitions.property.interactive,
    focusShadow: shadows.focus,
    disabledOpacity: 0.48,
  },
  sizes: {
    sm: {
      minHeight: sizes.control.sm,
      paddingX: spacing[3],
      gap: spacing[2],
      fontSize: typography.fontSize.sm,
      borderRadius: radius.pill,
    },
    md: {
      minHeight: sizes.control.md,
      paddingX: spacing[5],
      gap: spacing[2],
      fontSize: typography.fontSize.md,
      borderRadius: radius.pill,
    },
    lg: {
      minHeight: sizes.control.lg,
      paddingX: spacing[6],
      gap: spacing[3],
      fontSize: typography.fontSize.md,
      borderRadius: radius.pill,
    },
  },
  primary: {
    background: colors.action.primary,
    backgroundHover: colors.action.primaryHover,
    backgroundActive: colors.action.primaryActive,
    color: colors.action.primaryText,
    borderColor: colors.action.primaryBorder,
    border: `1px solid ${colors.action.primaryBorder}`,
    shadow: shadows.none,
    shadowHover: shadows.sm,
  },
  brand: {
    background: semantic.foreground.brand,
    backgroundHover: semantic.foreground.brandHover,
    backgroundActive: semantic.foreground.brandHover,
    color: semantic.foreground.inverse,
    borderColor: semantic.border.brand,
    border: `1px solid ${semantic.border.brand}`,
    shadow: shadows.none,
    shadowHover: shadows.sm,
  },
  secondary: {
    background: colors.action.secondary,
    backgroundHover: colors.action.secondaryHover,
    backgroundActive: colors.action.secondaryActive,
    color: colors.action.secondaryText,
    borderColor: colors.action.secondaryBorder,
    border: `1px solid ${colors.action.secondaryBorder}`,
    shadow: shadows.none,
    shadowHover: shadows.xs,
  },
  danger: {
    background: semantic.border.danger,
    backgroundHover: semantic.status.danger.foreground,
    backgroundActive: semantic.status.danger.foreground,
    color: semantic.foreground.inverse,
    borderColor: semantic.border.danger,
    border: `1px solid ${semantic.border.danger}`,
    shadow: shadows.none,
    shadowHover: shadows.sm,
  },
  ghost: {
    background: 'transparent',
    backgroundHover: semantic.background.muted,
    backgroundActive: palette.neutral[200],
    color: semantic.foreground.default,
    borderColor: 'transparent',
    border: '1px solid transparent',
    shadow: shadows.none,
    shadowHover: shadows.none,
  },
  highlight: {
    background: colors.action.highlight,
    backgroundHover: colors.action.highlightHover,
    backgroundActive: colors.action.highlightHover,
    color: colors.action.highlightText,
    borderColor: colors.action.highlightBorder,
    border: `1px solid ${colors.action.highlightBorder}`,
    shadow: shadows.none,
    shadowHover: shadows.accent,
  },
} as const

const chips = {
  pink: {
    background: palette.accent.pinkSoft,
    color: palette.accent.pink,
  },
  green: {
    background: palette.feedback.successSoft,
    color: palette.feedback.success,
  },
  amber: {
    background: palette.feedback.warningSoft,
    color: palette.feedback.warning,
  },
  grey: {
    background: palette.neutral[200],
    color: palette.neutral[600],
  },
  ink: {
    background: palette.neutral[900],
    color: palette.white,
  },
} as const

const gradients = {
  pinkRadial: `radial-gradient(circle at 30% 30%, ${palette.accent.pink} 0%, transparent 60%)`,
  darkHero: 'linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 50%, #2A0A14 100%)',
  profileRing:
    'conic-gradient(from 0deg, #FF1F5C 0deg, #F97316 120deg, #7C3AED 240deg, #FF1F5C 360deg)',
  profileAvatar: 'linear-gradient(135deg, #FF1F5C 0%, #F97316 100%)',
  deckWork: 'linear-gradient(135deg, #FF1F5C 0%, #F97316 100%)',
  deckAcademic: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)',
  deckTravel: 'linear-gradient(135deg, #0EA5E9 0%, #0369A1 100%)',
  deckDaily: 'linear-gradient(135deg, #16A34A 0%, #15803D 100%)',
  deckGrammar: 'linear-gradient(135deg, #EA580C 0%, #C2410C 100%)',
  deckNumbers: 'linear-gradient(135deg, #0A0A0A 0%, #2A2A2A 100%)',
  storyFlash: 'linear-gradient(135deg, #FFE1EC 0%, #FFB3CD 100%)',
  storyShadow: 'linear-gradient(135deg, #E8FFFE 0%, #B3F0EC 100%)',
  storyChat: 'linear-gradient(135deg, #FEF3C7 0%, #FCD34D 100%)',
  storyLive: 'linear-gradient(135deg, #DCFCE7 0%, #86EFAC 100%)',
  storyMaterials: 'linear-gradient(135deg, #E8F7FC 0%, #93C5FD 100%)',
  storyQuiz: 'linear-gradient(135deg, #F3E8FF 0%, #C4B5FD 100%)',
} as const

export const theme = {
  semantic,
  colors,
  typography,
  spacing,
  space: spacing,
  radius,
  radii: radius,
  borders,
  shadows,
  buttons,
  chips,
  gradients,
  sizes,
  breakpoints,
  viewportHeights,
  media: {
    xs: `(min-width: ${breakpoints.xs})`,
    sm: `(min-width: ${breakpoints.sm})`,
    md: `(min-width: ${breakpoints.md})`,
    lg: `(min-width: ${breakpoints.lg})`,
    xl: `(min-width: ${breakpoints.xl})`,
    '2xl': `(min-width: ${breakpoints['2xl']})`,
  },
  zIndex: {
    base: 0,
    dropdown: 100,
    sticky: 200,
    overlay: 800,
    modal: 900,
    toast: 1000,
    tooltip: 1100,
    popover: 1200,
  },
  transitions,
  opacity: {
    disabled: 0.48,
    muted: 0.72,
    overlay: 0.64,
  },
} as const

export type LangyTheme = typeof theme
