import { keyframes, styled } from 'styled-components'
import { Pressable } from '../Pressable'
import * as token from '../../foundations/tokenValues'
import type { FlashcardGrade } from './FlashcardRatingButton'

const rise = keyframes`
 from {opacity:0;transform:translateY(.625rem);}
 to {opacity:1;transform:translateY(0);}
`

const tones = {
  again: {
    fill: '#fef0f2',
    border: '#e11d48',
    text: '#991b1b',
    glow: 'rgba(225,29,72,.12)',
    hover: 'rgba(225,29,72,.5)',
  },
  hard: {
    fill: '#fff3e0',
    border: '#d97706',
    text: '#854d0e',
    glow: 'rgba(217,119,6,.12)',
    hover: 'rgba(217,119,6,.5)',
  },
  good: {
    fill: '#dcfce7',
    border: '#16a34a',
    text: '#166534',
    glow: 'rgba(22,163,74,.12)',
    hover: 'rgba(22,163,74,.5)',
  },
  easy: {
    fill: '#fff4f7',
    border: '#ff1f5c',
    text: token.colorBrandDefault,
    glow: 'rgba(255,31,92,.12)',
    hover: 'rgba(255,31,92,.5)',
  },
}

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
    ${({ $selected, $grade }) => ($selected ? tones[$grade].border : '#eceae6')};
  border-radius: 1.0625rem;
  color: ${token.colorContentDefault};
  background: ${({ $selected, $grade }) => ($selected ? tones[$grade].fill : '#f6f6f3')};
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
  .label {
    color: ${({ $selected, $grade }) => ($selected ? tones[$grade].text : '#5b5b58')};
    font-size: 0.96875rem;
    font-weight: ${token.typographyFontWeightBold};
    letter-spacing: 0;
  }
  .interval {
    color: ${token.colorContentMuted};
    font-family:
      'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
    font-size: 0.65625rem;
    font-weight: ${token.typographyFontWeightMedium};
  }
  &:active {
    transform: scale(0.96);
  }
  @media (hover: hover) {
    &:hover {
      border-color: ${({ $grade }) => tones[$grade].hover};
      background: ${token.colorNeutral0};
    }
    &:hover .label {
      color: ${({ $grade }) => tones[$grade].text};
    }
  }
  @media (max-width: 900px) and (max-height: 880px) {
    min-height: 3.5rem;
    padding: 0.625rem 0.25rem;
  }
  @media (max-width: 900px) and (max-height: 760px) {
    min-height: 3.25rem;
    padding: 0.5rem 0.25rem;
    .label {
      font-size: ${token.typographyFontSizeSm};
    }
    .interval {
      font-size: 0.625rem;
    }
  }
  @media (max-width: 900px) and (max-height: 700px) {
    min-height: 3rem;
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    animation: none;
  }
`
