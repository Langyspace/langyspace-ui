import { styled } from 'styled-components'
import { Button } from '../Button/Button'
import { TextInput } from '../Form/TextInput'
import { resolveTheme } from '../../foundations/theme/resolveTheme'
import { theme } from '../../foundations/theme/theme'
import { recipe } from '../InteractiveMaterial/Material.shared.styles'
import type {
  DialogueGapStyleProps,
  DialogueOpenGapStyleProps,
} from './LearningDialogue.types'

export const DialogueOpenGap = styled(TextInput)<DialogueOpenGapStyleProps>`
  && {
    box-sizing: border-box;
    display: inline-block;
    width: ${(p) => p.$characters}ch;
    max-width: 100%;
    min-height: ${theme.sizes.control.sm};
    padding: 0 ${theme.spacing[1]};
    border: 0;
    border-bottom: 1px dashed ${(p) => recipe(p).muted};
    border-radius: 0;
    background: transparent;
    color: ${(p) => recipe(p).foreground};
    font: inherit;
    vertical-align: baseline;
    &:focus-visible {
      border-color: ${(p) => recipe(p).accent};
      outline: 2px solid ${(p) => recipe(p).accent};
      outline-offset: 2px;
      box-shadow: none;
    }
  }
`

export const DialogueGap = styled(Button)<DialogueGapStyleProps>`
  && {
    position: relative;
    min-width: 0;
    width: max-content;
    min-height: ${theme.sizes.control.sm};
    padding: 0 ${theme.spacing[1]};
    border: 0;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    color: ${(p) => (p.$revealed ? (resolveTheme(p).semantic?.status.success.foreground ?? theme.semantic.status.success.foreground) : recipe(p).foreground)};
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
      color: ${(p) => (p.$revealed ? (resolveTheme(p).semantic?.status.success.foreground ?? theme.semantic.status.success.foreground) : recipe(p).foreground)};
      text-decoration: none;
      transform: none;
    }
  }
`
export const DialogueGapAnswer = styled.span<DialogueGapStyleProps>`
  visibility: ${(p) => (p.$revealed ? 'visible' : 'hidden')};
`
