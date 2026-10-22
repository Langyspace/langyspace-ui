import { keyframes, styled } from 'styled-components'
import { Pressable } from '../Pressable'
import type { ToastTone } from './ToastItem.types'
import { theme } from '../../foundations/theme/theme'
import { alpha } from '../../foundations/theme/alpha'

const tones = {
  neutral: {
    border: theme.colors.border.subtle,
    icon: theme.colors.text.primary,
  },
  success: {
    border: theme.semantic.status.success.indicator,
    icon: theme.semantic.status.success.indicator,
  },
  danger: {
    border: theme.colors.feedback.danger,
    icon: theme.colors.feedback.danger,
  },
  warning: {
    border: theme.semantic.status.warning.indicator,
    icon: theme.semantic.status.warning.indicator,
  },
  brand: {
    border: theme.colors.accent.primary,
    icon: theme.colors.accent.primary,
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
  gap: ${theme.spacing[2]};
  min-height: 3rem;
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  border: 1px solid ${({ $tone }) => tones[$tone].border};
  border-radius: ${theme.radius.card};
  color: ${theme.colors.text.primary};
  background: ${theme.colors.palette.white};
  box-shadow:
    0 10px 30px ${alpha(theme.colors.palette.neutral[900], 0.1)},
    0 2px 6px ${alpha(theme.colors.palette.neutral[900], 0.06)};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  pointer-events: auto;
  text-align: left;
  animation: ${appear} 250ms ${theme.transitions.easing.standard};
  transition:
    transform ${theme.transitions.duration.fast}
      ${theme.transitions.easing.standard},
    border-color ${theme.transitions.duration.fast}
      ${theme.transitions.easing.standard},
    box-shadow ${theme.transitions.duration.fast}
      ${theme.transitions.easing.standard};
  &:hover {
    transform: translateY(-1px);
    border-color: ${theme.colors.text.primary};
  }
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px ${theme.colors.focusRing};
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
  display: grid;
  gap: ${theme.spacing[2]};
  min-width: 0;
  overflow-wrap: anywhere;
`

export const Title = styled.span.withConfig({
  componentId: 'lsui-sc-toast-title',
})`
  display: block;
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.semibold};
  line-height: ${theme.typography.lineHeight.snug};
`

export const Message = styled.span.withConfig({
  componentId: 'lsui-sc-toast-message',
})`
  display: block;
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.normal};
`

export const Action = styled.span.withConfig({
  componentId: 'lsui-sc-toast-action',
})`
  display: block;
  color: ${theme.semantic.foreground.brand};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.semibold};
  line-height: ${theme.typography.lineHeight.snug};
`
