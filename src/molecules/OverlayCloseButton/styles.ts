import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

export const Glyph = styled.span`
  position: relative;
  display: block;
  width: 1rem;
  height: 1rem;

  &::before,
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0.75rem;
    height: 1.5px;
    border-radius: ${token.radiusPill};
    background: currentColor;
    content: '';
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`
