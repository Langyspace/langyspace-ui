import { styled } from 'styled-components'
import { Button } from '../../../src/components/Button/Button'
import { theme } from '../../../src/foundations/theme/theme'
import { recipe } from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import type { DialogueGapStyleProps } from './DialogueGap.types'

export const DialogueGap = styled(Button)<DialogueGapStyleProps>`
  && {
    position: relative;
    min-width: ${theme.spacing[16]};
    min-height: ${theme.sizes.control.sm};
    padding: 0 ${theme.spacing[1]};
    border: 0;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    color: ${(p) => (p.$revealed ? theme.colors.palette.feedback.success : recipe(p).foreground)};
    font: inherit;
    font-weight: ${theme.typography.fontWeight.bold};
    vertical-align: baseline;
    text-decoration: none;
    white-space: nowrap;
    &::after {
      content: '';
      position: absolute;
      inset-inline: ${theme.spacing[1]};
      bottom: ${theme.spacing[1]};
      height: ${theme.borders.width.medium};
      background: currentColor;
      visibility: ${(p) => (p.$revealed ? 'hidden' : 'visible')};
      pointer-events: none;
    }
    &:hover,
    &:active {
      background: transparent;
      box-shadow: none;
      color: ${(p) => (p.$revealed ? theme.colors.palette.feedback.success : recipe(p).foreground)};
      text-decoration: none;
      transform: none;
    }
  }
`
export const DialogueGapAnswer = styled.span<DialogueGapStyleProps>`
  visibility: ${(p) => (p.$revealed ? 'visible' : 'hidden')};
`
