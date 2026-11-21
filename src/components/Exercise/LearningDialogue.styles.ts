import { css, styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { resolveTheme } from '../../foundations/theme/resolveTheme'
import { recipe } from './Exercise.shared.styles'
import { Pressable } from '../Pressable'
export const Dialogue = styled.div.withConfig({
  componentId: 'lsui-sc-learning-dialogue',
})<{ $paired?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${(p) => (p.$paired ? theme.spacing[2] : '6px')};
  min-width: 0;
  font-family: ${theme.typography.fontFamily.sans};
  @container (max-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing[2]};
  }
`
export const DialogueLine = styled.div<{
  $side: 'start' | 'end'
  $exchangeStart?: boolean
}>`
  margin-block-start: ${(p) => (p.$exchangeStart ? theme.spacing[4] : undefined)};
  display: flex;
  flex-direction: ${(p) => (p.$side === 'start' ? 'row' : 'row-reverse')};
  align-items: flex-start;
  justify-content: flex-start;
  gap: ${theme.spacing[3]};
  min-width: 0;
  max-width: 88%;
  align-self: ${(p) => (p.$side === 'start' ? 'flex-start' : 'flex-end')};
  @container (max-width: ${theme.breakpoints.md}) {
    max-width: 94%;
    gap: ${theme.spacing[2]};
  }
`
export const Speech = styled.div<{
  $playing: boolean
  $side: 'start' | 'end'
  $completed: boolean
  $hasAudio: boolean
  $compact?: boolean
  $inlineGuidance?: boolean
}>`
  display: grid;
  grid-template-columns:
    minmax(0, 1fr)
    ${(p) => (p.$hasAudio ? 'auto' : '')} ${(p) => (p.$inlineGuidance ? 'auto' : '')};
  align-items: start;
  column-gap: ${theme.spacing[2]};
  row-gap: ${theme.spacing[1]};
  max-width: 100%;
  min-width: 0;
  padding: ${(p) => (p.$compact ? theme.spacing[1] : theme.spacing[3])}
    ${(p) => (p.$compact ? theme.spacing[2] : theme.spacing[4])}
    ${(p) => (p.$compact ? theme.spacing[1] : theme.spacing[3])}
    ${(p) => (p.$compact ? theme.spacing[3] : theme.spacing[4])};
  border: 0;
  box-shadow: inset 0 0 0 1px ${(p) => recipe(p).border};
  border-radius: ${(p) => (p.$side === 'start' ? '6px 20px 20px 20px' : '20px 6px 20px 20px')};
  background: ${(p) => (p.$completed ? (resolveTheme(p).semantic?.status.success.background ?? theme.semantic.status.success.background) : p.$side === 'start' ? recipe(p).surface : `color-mix(in srgb, ${recipe(p).indicator} 12%, ${recipe(p).surface})`)};
  outline: ${(p) => (p.$playing ? `2px solid ${recipe(p).accent}` : 'none')};
  color: ${(p) => recipe(p).foreground};
  font-size: ${(p) => (p.$compact ? `clamp(${theme.typography.fontSize.md}, 2.6cqh, 1.0625rem)` : '1.0625rem')};
  font-weight: ${theme.typography.fontWeight.medium};
  line-height: 1.4;
  @container (max-width: ${theme.breakpoints.md}) {
    padding: ${(p) => (p.$compact ? theme.spacing[1] : theme.spacing[2])}
      ${(p) => (p.$compact ? theme.spacing[2] : theme.spacing[3])}
      ${(p) => (p.$compact ? theme.spacing[1] : theme.spacing[2])}
      ${theme.spacing[3]};
    font-size: ${theme.typography.fontSize.md};
  }
  > button {
    grid-column: 2;
    grid-row: 1;
    align-self: center;
  }
`
export const Message = styled.div`
  grid-column: 1;
  grid-row: 1;
  display: flex;
  align-items: center;
  min-height: ${theme.sizes.control.sm};
  min-width: 0;
  overflow-wrap: anywhere;
  > * {
    flex: 1;
    min-width: 0;
  }
`
const textAction = css`
  border: 0;
  background: transparent;
  padding: 0;
  color: inherit;
  text-align: left;
  font: inherit;
  cursor: pointer;
  &:focus-visible {
    outline: 2px solid ${(p) => recipe(p).accent};
    outline-offset: 3px;
  }
`
export const Translate = styled(Pressable)`
  ${textAction}
`
export const RichTranslate = styled.div`
  ${textAction}
`
export const Translation = styled.div`
  grid-column: 1;
  grid-row: 2;
  min-width: 0;
  contain: inline-size;
  font-size: ${theme.typography.fontSize.sm};
  color: ${(p) => recipe(p).muted};
`

export const DialogueSection = styled.div`
  display: grid;
  gap: ${theme.spacing[3]};
  min-width: 0;
`
export const GuidedText = styled.div`
  display: grid;
  min-width: 0;
`
export const GuidedLayer = styled.span<{ $visible: boolean }>`
  grid-area: 1 / 1;
  align-self: center;
  min-width: 0;
  visibility: ${(p) => (p.$visible ? 'visible' : 'hidden')};
  pointer-events: ${(p) => (p.$visible ? 'auto' : 'none')};
`

export const LineControls = styled.div<{ $afterAudio: boolean }>`
  grid-column: ${(p) => (p.$afterAudio ? 3 : 2)};
  grid-row: 1;
  align-self: center;
  min-width: 0;
`
