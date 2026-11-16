import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
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
export const SpeakerAvatar = styled(Avatar)`
  width: 44px;
  height: 44px;
  border-radius: ${theme.radius.lg};
  background: ${theme.colors.palette.accent.pinkSoft};
  @container (max-width: ${theme.breakpoints.md}) {
    width: ${theme.spacing[10]};
    height: ${theme.spacing[10]};
  }
`
export const Speaker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  gap: 0;
  small {
    font-size: 0.625rem;
  }
  @container (max-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing[1]};
    small {
      line-height: 1.2;
    }
  }
`
export const Speech = styled.div<{ $playing: boolean; $side: 'start' | 'end' }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${theme.spacing[2]};
  max-width: 100%;
  min-width: 0;
  padding: ${theme.spacing[1]} ${theme.spacing[1]} ${theme.spacing[1]} 14px;
  border: 0;
  border-radius: ${(p) => (p.$side === 'start' ? '6px 20px 20px 20px' : '20px 6px 20px 20px')};
  background: ${(p) => (p.$side === 'start' ? `color-mix(in srgb, ${recipe(p).foreground} 3%, ${recipe(p).canvas})` : `color-mix(in srgb, ${recipe(p).indicator} 12%, ${recipe(p).surface})`)};
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
  > div:first-child,
  > button:first-child {
    flex: 1;
    min-width: 0;
  }
`
export const Translate = styled(Pressable)`
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
export const Translation = styled.div`
  flex-basis: 100%;
  font-size: ${theme.typography.fontSize.sm};
  color: ${(p) => recipe(p).muted};
`
