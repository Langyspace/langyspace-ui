import type { FlashcardGrade } from './FlashcardRatingButton.types'
import { styled, keyframes } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { alpha } from '../../foundations/theme/alpha'

const rise = keyframes`
  from {
    opacity: 0;
    transform: translateY(0.625rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const pop = keyframes`
  from {
    opacity: 0;
    transform: scale(0.3);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`

const feedbackTones = {
  again: {
    color: 'var(--fc-red)',
    glow: alpha(theme.colors.palette.extended.rose600, 0.3),
  },
  hard: {
    color: 'var(--fc-amber)',
    glow: alpha(theme.colors.palette.feedback.warning, 0.3),
  },
  good: {
    color: 'var(--fc-green)',
    glow: alpha(theme.colors.palette.feedback.success, 0.3),
  },
  easy: {
    color: 'var(--fc-pink)',
    glow: alpha(theme.colors.palette.accent.pink, 0.3),
  },
} satisfies Record<FlashcardGrade, { color: string; glow: string }>

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-flashcard-feedback',
})`
  position: absolute;
  inset: 0;
  z-index: 6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing[4]};
  overflow: hidden;
  border-radius: 1.625rem;
  background: ${alpha(theme.colors.palette.white, 0.92)};
  animation: ${fadeIn} 0.18s ease;
  backdrop-filter: blur(5px);

  @media (prefers-reduced-motion: reduce) {
    &,
    & * {
      animation: none !important;
      transition: none !important;
    }
  }
`

export const Mark = styled.div.withConfig({
  componentId: 'lsui-sc-flashcardfeedback-mark',
})<{ $grade: FlashcardGrade }>`
  background: ${({ $grade }) => feedbackTones[$grade].color};
  box-shadow: 0 14px 34px ${({ $grade }) => feedbackTones[$grade].glow};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  color: ${theme.colors.palette.white};
  animation: ${pop} 0.46s cubic-bezier(0.2, 1.45, 0.4, 1);
`

export const Message = styled.div.withConfig({
  componentId: 'lsui-sc-flashcardfeedback-message',
})<{ $grade: FlashcardGrade }>`
  color: ${({ $grade }) => feedbackTones[$grade].color};
  padding: 0 1.625rem;
  font-size: 1.625rem;
  font-weight: ${theme.typography.fontWeight.bold};
  letter-spacing: 0;
  line-height: 1.15;
  text-align: center;
  animation: ${rise} 0.34s ease both 0.07s;
`

export const Next = styled.div.withConfig({
  componentId: 'lsui-sc-flashcardfeedback-next',
})`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  margin-top: -0.25rem;
  color: var(--fc-muted);
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  font-size: 0.78125rem;
  font-weight: ${theme.typography.fontWeight.medium};
  white-space: nowrap;
  animation: ${rise} 0.34s ease both 0.13s;
`
