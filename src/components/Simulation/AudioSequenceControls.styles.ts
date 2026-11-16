import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { Button } from '../Button/Button'
import * as Common from '../Exercise/Material.shared.styles'
export const Root = styled(Common.Surface).withConfig({
  componentId: 'lsui-sc-audio-sequence-controls',
})`
  align-items: center;
  padding: 12px 14px;
  gap: 10px;
`
export const Transport = styled(Common.Row)`
  justify-content: center;
  gap: 20px;
`
export const Playback = styled(Button)<{ $primary?: boolean }>`
  width: ${(p) => (p.$primary ? '64px' : '48px')};
  min-width: 0;
  height: ${(p) => (p.$primary ? '64px' : '48px')};
  padding: 0;
  border: 0;
  border-radius: ${theme.radius.circle};
  background: ${(p) => (p.$primary ? Common.recipe(p).accent : Common.recipe(p).border)};
  color: ${(p) => (p.$primary ? Common.recipe(p).canvas : Common.recipe(p).foreground)};
  svg {
    width: ${(p) => (p.$primary ? '28px' : '22px')};
    height: ${(p) => (p.$primary ? '28px' : '22px')};
  }
`
export const Dots = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  justify-content: center;
`
export const Dot = styled.i<{ $state: 'empty' | 'current' | 'done' }>`
  width: 8px;
  height: 8px;
  border-radius: ${theme.radius.circle};
  background: ${(p) => (p.$state === 'current' ? Common.recipe(p).accent : p.$state === 'done' ? theme.semantic.status.success.foreground : Common.recipe(p).border)};
`
