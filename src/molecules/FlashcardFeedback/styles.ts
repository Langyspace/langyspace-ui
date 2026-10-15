import type { FlashcardGrade } from '../FlashcardRatingButton/types'
import { styled, keyframes } from 'styled-components'
import * as token from '../../foundations/tokenValues'
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
  again: { color: 'var(--fc-red)', glow: 'rgba(225, 29, 72, 0.30)' },
  hard: { color: 'var(--fc-amber)', glow: 'rgba(217, 119, 6, 0.30)' },
  good: { color: 'var(--fc-green)', glow: 'rgba(22, 163, 74, 0.30)' },
  easy: { color: 'var(--fc-pink)', glow: 'rgba(255, 31, 92, 0.30)' },
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
  gap: ${token.spacing4};
  overflow: hidden;
  border-radius: 1.625rem;
  background: rgba(255, 255, 255, 0.92);
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
  color: ${token.colorNeutral0};
  animation: ${pop} 0.46s cubic-bezier(0.2, 1.45, 0.4, 1);
`

export const Message = styled.div.withConfig({
  componentId: 'lsui-sc-flashcardfeedback-message',
})<{ $grade: FlashcardGrade }>`
  color: ${({ $grade }) => feedbackTones[$grade].color};
  padding: 0 1.625rem;
  font-size: 1.625rem;
  font-weight: ${token.typographyFontWeightBold};
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
  font-weight: ${token.typographyFontWeightMedium};
  white-space: nowrap;
  animation: ${rise} 0.34s ease both 0.13s;
`
