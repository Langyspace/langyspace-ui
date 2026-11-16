import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { recipe } from './Exercise.shared.styles'
import { Pressable } from '../Pressable'
export const Dialogue = styled.div.withConfig({
  componentId: 'lsui-sc-learning-dialogue',
})`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[3]};
  min-width: 0;
`
export const DialogueLine = styled.div<{ $side: 'start' | 'end' }>`
  display: flex;
  flex-direction: ${(p) => (p.$side === 'start' ? 'row' : 'row-reverse')};
  align-items: flex-start;
  justify-content: flex-start;
  gap: ${theme.spacing[3]};
  min-width: 0;
`
export const Speaker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  gap: ${theme.spacing[1]};
  small {
    font-size: ${theme.typography.fontSize.xs};
  }
`
export const Speech = styled.div<{ $playing: boolean }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${theme.spacing[1]};
  max-width: 86%;
  min-width: 0;
  padding: ${theme.spacing[2]} ${theme.spacing[3]};
  border: 1px solid ${(p) => (p.$playing ? recipe(p).accent : recipe(p).border)};
  border-radius: ${theme.radius.xl};
  background: ${(p) => recipe(p).surface};
  color: ${(p) => recipe(p).foreground};
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
