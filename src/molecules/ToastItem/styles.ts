import { keyframes, styled } from 'styled-components'
import { tokens } from '../../foundations/tokens'
import { Pressable } from '../../primitives/Pressable'
import type { ToastTone } from './types'

const tones = {
  neutral: {
    border: tokens.color.surfaceBorder.subtle,
    icon: tokens.color.content.default,
  },
  success: {
    border: tokens.color.status.success.indicator,
    icon: tokens.color.status.success.indicator,
  },
  danger: {
    border: tokens.color.feedback.danger,
    icon: tokens.color.feedback.danger,
  },
  warning: {
    border: tokens.color.status.warning.indicator,
    icon: tokens.color.status.warning.indicator,
  },
  brand: {
    border: tokens.color.accent.default,
    icon: tokens.color.accent.default,
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
  gap: ${tokens.spacing[2]};
  min-height: 3rem;
  padding: ${tokens.spacing[3]} ${tokens.spacing[4]};
  border: 1px solid ${({ $tone }) => tones[$tone].border};
  border-radius: ${tokens.radius.card};
  color: ${tokens.color.content.default};
  background: ${tokens.color.neutral[0]};
  box-shadow:
    0 10px 30px rgba(10, 10, 10, 0.1),
    0 2px 6px rgba(10, 10, 10, 0.06);
  font-size: ${tokens.typography.fontSize.sm};
  font-weight: ${tokens.typography.fontWeight.medium};
  pointer-events: auto;
  text-align: left;
  animation: ${appear} 250ms ${tokens.motion.easing.interactive};
  transition:
    transform ${tokens.motion.duration.interactive}
      ${tokens.motion.easing.interactive},
    border-color ${tokens.motion.duration.interactive}
      ${tokens.motion.easing.interactive},
    box-shadow ${tokens.motion.duration.interactive}
      ${tokens.motion.easing.interactive};
  &:hover {
    transform: translateY(-1px);
    border-color: ${tokens.color.content.default};
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
  color: ${tokens.color.content.default};
  font-size: ${tokens.typography.fontSize.sm};
  font-weight: ${tokens.typography.fontWeight.semibold};
  line-height: ${tokens.typography.lineHeight.snug};
`
export const Message = styled.span.withConfig({
  componentId: 'lsui-sc-toast-message',
})`
  display: block;
  color: ${tokens.color.content.muted};
  font-size: ${tokens.typography.fontSize.sm};
  line-height: ${tokens.typography.lineHeight.normal};
`
export const Action = styled.span.withConfig({
  componentId: 'lsui-sc-toast-action',
})`
  display: block;
  margin-top: ${tokens.spacing[1]};
  color: ${tokens.color.brand.default};
  font-size: ${tokens.typography.fontSize.xs};
  font-weight: ${tokens.typography.fontWeight.semibold};
  line-height: ${tokens.typography.lineHeight.snug};
`
