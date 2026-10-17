import { keyframes, styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
import { Pressable } from '../../primitives/Pressable'
import type { ToastTone } from './types'

const tones = {
  neutral: {
    border: token.colorSurfaceBorderSubtle,
    icon: token.colorContentDefault,
  },
  success: {
    border: token.colorStatusSuccessIndicator,
    icon: token.colorStatusSuccessIndicator,
  },
  danger: {
    border: token.colorFeedbackDanger,
    icon: token.colorFeedbackDanger,
  },
  warning: {
    border: token.colorStatusWarningIndicator,
    icon: token.colorStatusWarningIndicator,
  },
  brand: {
    border: token.colorAccentDefault,
    icon: token.colorAccentDefault,
  },
} as const satisfies Record<ToastTone, { border: string; icon: string }>

const appear = keyframes`
  from { opacity: 0; transform: translateY(0.5rem); }
  to { opacity: 1; transform: translateY(0); }
`

export const Item = styled(Pressable).withConfig({
  componentId: 'lsui-sc-toast-item',
})<{ $tone: ToastTone }>`
  display: inline-flex;
  align-items: flex-start;
  gap: ${token.spacing2};
  min-height: 3rem;
  padding: ${token.spacing3} ${token.spacing4};
  border: 1px solid ${({ $tone }) => tones[$tone].border};
  border-radius: ${token.radiusCard};
  color: ${token.colorContentDefault};
  background: ${token.colorNeutral0};
  box-shadow:
    0 10px 30px rgba(10, 10, 10, 0.1),
    0 2px 6px rgba(10, 10, 10, 0.06);
  font-size: ${token.typographyFontSizeSm};
  font-weight: ${token.typographyFontWeightMedium};
  pointer-events: auto;
  text-align: left;
  animation: ${appear} 250ms ${token.motionEasingInteractive};
  transition:
    transform ${token.motionDurationInteractive}
      ${token.motionEasingInteractive},
    border-color ${token.motionDurationInteractive}
      ${token.motionEasingInteractive},
    box-shadow ${token.motionDurationInteractive}
      ${token.motionEasingInteractive};
  &:hover {
    transform: translateY(-1px);
    border-color: ${token.colorContentDefault};
  }
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px #00f2ea52;
  }
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: none;
  }
`

export const Icon = styled.span.withConfig({
  componentId: 'lsui-sc-toast-icon',
})<{ $tone: ToastTone }>`
  display: inline-flex;
  flex-shrink: 0;
  margin-top: 0.125rem;
  color: ${({ $tone }) => tones[$tone].icon};
`

export const Text = styled.span.withConfig({
  componentId: 'lsui-sc-toast-text',
})`
  min-width: 0;
  overflow-wrap: anywhere;
`

export const Title = styled.span.withConfig({
  componentId: 'lsui-sc-toast-title',
})`
  display: block;
  color: ${token.colorContentDefault};
  font-size: ${token.typographyFontSizeSm};
  font-weight: ${token.typographyFontWeightSemibold};
  line-height: ${token.typographyLineHeightSnug};
`

export const Message = styled.span.withConfig({
  componentId: 'lsui-sc-toast-message',
})`
  display: block;
  color: ${token.colorContentMuted};
  font-size: ${token.typographyFontSizeSm};
  line-height: ${token.typographyLineHeightNormal};
`

export const Action = styled.span.withConfig({
  componentId: 'lsui-sc-toast-action',
})`
  display: block;
  margin-top: ${token.spacing1};
  color: ${token.colorBrandDefault};
  font-size: ${token.typographyFontSizeXs};
  font-weight: ${token.typographyFontWeightSemibold};
  line-height: ${token.typographyLineHeightSnug};
`
