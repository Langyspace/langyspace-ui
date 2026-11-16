import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { Pressable } from '../Pressable'
import * as Common from '../Exercise/Material.shared.styles'
export const Root = styled.section.withConfig({
  componentId: 'lsui-sc-branching-conversation',
})`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: ${theme.spacing[6]};
  font-family: ${theme.typography.fontFamily.sans};
  min-width: 0;
  color: ${(p) => Common.recipe(p).foreground};
`
export const Phone = styled.div`
  width: 280px;
  max-width: 100%;
  height: 540px;
  border: 10px solid ${theme.voiceMessage.frame};
  border-radius: 36px;
  background: ${theme.voiceMessage.canvas};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  color: ${theme.voiceMessage.foreground};
  box-sizing: border-box;
`
export const Header = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px 12px;
  background: ${theme.voiceMessage.surface};
  font-size: 14px;
  img {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    object-fit: cover;
  }
  small {
    display: block;
    color: ${theme.voiceMessage.muted};
    font-size: 11px;
  }
`
export const Chat = styled.div`
  flex: 1;
  overflow-y: auto;
  overscroll-behavior: contain;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
  min-height: 0;
`
export const Message = styled.div<{ $mine: boolean }>`
  align-self: ${(p) => (p.$mine ? 'flex-end' : 'flex-start')};
  background: ${(p) => (p.$mine ? theme.simulations.outgoingMessage : theme.voiceMessage.surface)};
  padding: 8px 10px;
  border-radius: 12px;
  max-width: 92%;
  font-size: 13px;
  line-height: 1.4;
  overflow-wrap: anywhere;
  time {
    display: block;
    text-align: right;
    font-size: 9px;
    color: ${theme.voiceMessage.muted};
  }
`
export const Choice = styled(Pressable)`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  border: 1.5px solid ${theme.voiceMessage.border};
  border-radius: 12px;
  background: ${theme.voiceMessage.surface};
  color: ${theme.voiceMessage.foreground};
  padding: 8px;
  font: inherit;
  font-size: 13px;
  line-height: 1.4;
  text-align: left;
  cursor: pointer;
  min-height: 40px;
  &:focus-visible {
    outline: 3px solid ${theme.slides.accent};
    outline-offset: 2px;
  }
`
export const Composer = styled.form`
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${theme.voiceMessage.surface};
  padding: 8px;
  input {
    min-width: 0;
    flex: 1;
    border: 1px solid ${theme.voiceMessage.border};
    border-radius: ${theme.radius.pill};
    padding: 8px;
    font: inherit;
    font-size: 12px;
    background: ${theme.voiceMessage.surface};
    color: ${theme.voiceMessage.foreground};
  }
`
export const Aside = styled(Common.Stack)`
  flex: 1;
  min-width: 200px;
  max-width: 360px;
`
