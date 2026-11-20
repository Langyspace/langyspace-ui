import { css, styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { resolveTheme } from '../../foundations/theme/resolveTheme'
import { recipe } from './Exercise.shared.styles'
import { Pressable } from '../Pressable'
import { Avatar } from '../Avatar/Avatar'
export const Dialogue = styled.div.withConfig({
  componentId: 'lsui-sc-learning-dialogue',
})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
  font-family: ${theme.typography.fontFamily.sans};
  @container (max-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing[2]};
  }
`
export const DialogueLine = styled.div<{ $side: 'start' | 'end' }>`
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
export const SpeakerAvatar = styled(Avatar)<{ $compact: boolean }>`
  width: ${(p) => (p.$compact ? theme.spacing[8] : '44px')};
  height: ${(p) => (p.$compact ? theme.spacing[8] : '44px')};
  border-radius: ${theme.radius.lg};
  background: ${theme.colors.palette.accent.pinkSoft};
  @container (max-width: ${theme.breakpoints.md}) {
    width: ${(p) => (p.$compact ? theme.spacing[8] : theme.spacing[10])};
    height: ${(p) => (p.$compact ? theme.spacing[8] : theme.spacing[10])};
  }
`
export const Speaker = styled.div<{ $compact: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  gap: 0;
  small {
    font-size: 0.625rem;
    display: ${(p) => (p.$compact ? 'none' : 'block')};
  }
  @container (max-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing[1]};
    small {
      line-height: 1.2;
    }
  }
`
export const Speech = styled.div<{
  $playing: boolean
  $side: 'start' | 'end'
  $completed: boolean
  $hasAudio: boolean
}>`
  display: grid;
  grid-template-columns: ${(p) => (p.$hasAudio ? 'minmax(0, 1fr) auto' : 'minmax(0, 1fr)')};
  align-items: start;
  gap: ${theme.spacing[2]};
  max-width: 100%;
  min-width: 0;
  padding: ${theme.spacing[2]} ${theme.spacing[2]} ${theme.spacing[2]} 14px;
  border: 0;
  border-radius: ${(p) => (p.$side === 'start' ? '6px 20px 20px 20px' : '20px 6px 20px 20px')};
  background: ${(p) => (p.$completed ? (resolveTheme(p).semantic?.status.success.background ?? theme.semantic.status.success.background) : p.$side === 'start' ? `color-mix(in srgb, ${recipe(p).foreground} 3%, ${recipe(p).canvas})` : `color-mix(in srgb, ${recipe(p).indicator} 12%, ${recipe(p).surface})`)};
  outline: ${(p) => (p.$playing ? `2px solid ${recipe(p).accent}` : 'none')};
  color: ${(p) => recipe(p).foreground};
  font-size: 1.0625rem;
  font-weight: ${theme.typography.fontWeight.medium};
  line-height: 1.4;
  @container (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing[2]} ${theme.spacing[2]} ${theme.spacing[2]}
      ${theme.spacing[4]};
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
  min-height: ${theme.spacing[10]};
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
