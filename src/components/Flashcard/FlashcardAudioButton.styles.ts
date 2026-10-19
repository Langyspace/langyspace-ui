import { keyframes, styled } from 'styled-components'
import { Pressable } from '../Pressable'
import * as token from '../../foundations/tokenValues'
import type { FlashcardAudioButtonProps } from './FlashcardAudioButton'

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.14); }
`

export const Button = styled(Pressable).withConfig({
  componentId: 'lsui-sc-flashcard-audio-button',
})<{
  $placement: NonNullable<FlashcardAudioButtonProps['placement']>
  $playing: boolean
}>`
  position: ${({ $placement }) => ($placement === 'term' ? 'static' : 'absolute')};
  right: ${({ $placement }) => ($placement === 'term' ? 'auto' : '0.75rem')};
  bottom: ${({ $placement }) => ($placement === 'term' ? 'auto' : '0.75rem')};
  z-index: 4;
  display: inline-flex;
  width: ${({ $placement }) => ($placement === 'term' ? '1.875rem' : '2.75rem')};
  height: ${({ $placement }) => ($placement === 'term' ? '1.875rem' : '2.75rem')};
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 50%;
  color: ${token.colorNeutral0};
  background: ${({ $playing }) => ($playing ? 'var(--fc-pink)' : 'var(--fc-ink)')};
  box-shadow: ${({ $placement }) => ($placement === 'term' ? 'none' : '0 6px 14px rgba(0, 0, 0, 0.22)')};
  transition:
    transform 0.15s ease,
    background 0.15s ease;
  animation: ${({ $playing }) => ($playing ? pulse : 'none')} 0.6s ease;

  &:active {
    transform: scale(0.9);
  }
  &:focus-visible {
    outline: 3px solid ${token.colorFocus};
    outline-offset: 2px;
  }
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: none;
  }
`
