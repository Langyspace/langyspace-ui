import { keyframes, styled } from 'styled-components'
import { Pressable } from '../Pressable'
import type { FlashcardGrade } from './FlashcardRatingButton.types'
import { theme } from '../../foundations/theme/theme'
import { alpha } from '../../foundations/theme/alpha'

const rise = keyframes`
 from {opacity:0;transform:translateY(.625rem);}
 to {opacity:1;transform:translateY(0);}
`

const tones = {
  again: {
    fill: theme.colors.palette.extended.rose50,
    border: theme.colors.palette.extended.rose600,
    text: theme.semantic.status.danger.foreground,
    glow: alpha(theme.colors.palette.extended.rose600, 0.12),
    hover: alpha(theme.colors.palette.extended.rose600, 0.5),
  },
  hard: {
    fill: theme.colors.palette.extended.orange50,
    border: theme.colors.palette.feedback.warning,
    text: theme.colors.palette.extended.yellow800,
    glow: alpha(theme.colors.palette.feedback.warning, 0.12),
    hover: alpha(theme.colors.palette.feedback.warning, 0.5),
  },
  good: {
    fill: theme.colors.palette.feedback.successSoft,
    border: theme.colors.palette.feedback.success,
    text: theme.semantic.status.success.foreground,
    glow: alpha(theme.colors.palette.feedback.success, 0.12),
    hover: alpha(theme.colors.palette.feedback.success, 0.5),
  },
  easy: {
    fill: theme.colors.palette.accent.pinkTint,
    border: theme.colors.palette.accent.pink,
    text: theme.semantic.foreground.brand,
    glow: alpha(theme.colors.palette.accent.pink, 0.12),
    hover: alpha(theme.colors.palette.accent.pink, 0.5),
  },
}

export const Label = styled.span``

export const Interval = styled.span``

export const Button = styled(Pressable).withConfig({
  componentId: 'lsui-sc-flashcard-rating-button',
})<{ $grade: FlashcardGrade; $selected: boolean }>`
  display: flex;
  min-height: 3.875rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.1875rem;
  padding: 0.75rem 0.25rem;
  border: 1.5px solid
    ${({ $selected, $grade }) => ($selected ? tones[$grade].border : theme.colors.palette.extended.stone250)};
  border-radius: 1.0625rem;
  color: ${theme.colors.text.primary};
  background: ${({ $selected, $grade }) => ($selected ? tones[$grade].fill : theme.colors.palette.extended.stone100)};
  box-shadow: ${({ $selected, $grade }) => ($selected ? `0 0 0 3px ${tones[$grade].glow}` : 'none')};
  transition:
    transform 0.14s ease,
    border-color 0.15s ease,
    background 0.15s ease,
    box-shadow 0.18s ease;
  animation: ${rise} 0.3s ease both;
  &:nth-child(1) {
    animation-delay: 0.02s;
  }
  &:nth-child(2) {
    animation-delay: 0.06s;
  }
  &:nth-child(3) {
    animation-delay: 0.1s;
  }
  &:nth-child(4) {
    animation-delay: 0.14s;
  }
  ${Label} {
    color: ${({ $selected, $grade }) => ($selected ? tones[$grade].text : theme.colors.palette.extended.stone600)};
    font-size: 0.96875rem;
    font-weight: ${theme.typography.fontWeight.bold};
    letter-spacing: 0;
  }
  ${Interval} {
    color: ${theme.colors.text.muted};
    font-family: ${theme.typography.fontFamily.mono};
    font-size: 0.65625rem;
    font-weight: ${theme.typography.fontWeight.medium};
  }
  &:active {
    transform: scale(0.96);
  }
  @media (hover: hover) {
    &:hover {
      border-color: ${({ $grade }) => tones[$grade].hover};
      background: ${theme.colors.palette.white};
    }
    &:hover ${Label} {
      color: ${({ $grade }) => tones[$grade].text};
    }
  }
  @media (max-width: ${theme.breakpoints.mobileShell}) and (max-height: ${theme.viewportHeights.xl}) {
    min-height: 3.5rem;
    padding: 0.625rem 0.25rem;
  }
  @media (max-width: ${theme.breakpoints.mobileShell}) and (max-height: ${theme.viewportHeights.lg}) {
    min-height: 3.25rem;
    padding: 0.5rem 0.25rem;
    ${Label} {
      font-size: ${theme.typography.fontSize.sm};
    }
    ${Interval} {
      font-size: 0.625rem;
    }
  }
  @media (max-width: ${theme.breakpoints.mobileShell}) and (max-height: ${theme.viewportHeights.md}) {
    min-height: 3rem;
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    animation: none;
  }
`
