import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { Button } from '../Button/Button'
import * as Common from '../Exercise/Material.shared.styles'
export const Root = styled.section.withConfig({
  componentId: 'lsui-sc-call-simulation',
})`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing[6]};
  font-family: ${theme.typography.fontFamily.sans};
  min-width: 0;
  color: ${(p) => Common.recipe(p).foreground};
  > div:last-child {
    flex: 1;
    min-width: min(100%, 200px);
  }
`
export const Phone = styled.div`
  width: 280px;
  max-width: 100%;
  min-height: 540px;
  border: 10px solid ${theme.voiceMessage.frame};
  border-radius: 36px;
  background: ${theme.simulations.callBackground};
  color: ${theme.simulations.foreground};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 28px 16px 20px;
  text-align: center;
  margin-inline: auto;
  box-sizing: border-box;
  h3 {
    font-family: ${theme.slides.displayFontFamily};
    font-size: 22px;
    line-height: 1.1;
    margin: 0;
    color: inherit;
    overflow-wrap: anywhere;
  }
`
export const Avatar = styled.div`
  width: 84px;
  height: 84px;
  display: grid;
  place-items: center;
  border-radius: ${theme.radius.circle};
  background: ${theme.simulations.callAvatar};
  font: 700 30px ${theme.slides.displayFontFamily};
`
export const Status = styled.div`
  font-size: 12px;
  color: ${theme.simulations.muted};
  font-variant-numeric: tabular-nums;
`
export const Caption = styled.div`
  background: ${theme.simulations.callCaption};
  border-radius: 14px;
  padding: 10px 12px;
  font-size: 13px;
  line-height: 1.45;
  text-align: left;
  align-self: stretch;
  min-height: 64px;
  overflow-wrap: anywhere;
  small {
    display: block;
    color: ${theme.simulations.muted};
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
`
export const Keypad = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 52px);
  gap: 10px 18px;
  margin-top: auto;
`
export const Key = styled(Button)<{ $pressed: boolean }>`
  width: 52px;
  min-width: 0;
  height: 52px;
  padding: 0;
  border: 0;
  border-radius: ${theme.radius.circle};
  background: ${(p) => (p.$pressed ? theme.simulations.foreground : theme.simulations.callKey)};
  color: ${(p) => (p.$pressed ? theme.simulations.canvas : theme.simulations.foreground)};
  font: 600 20px ${theme.slides.displayFontFamily};
  &:not(:disabled):hover {
    background: ${theme.simulations.callKeyHover};
    color: ${theme.simulations.foreground};
  }
`
export const CallButton = styled(Button)<{ $start: boolean }>`
  width: 58px;
  min-width: 0;
  height: 58px;
  border: 0;
  padding: 0;
  border-radius: ${theme.radius.circle};
  background: ${(p) => (p.$start ? theme.simulations.accept : theme.simulations.end)};
  color: ${theme.simulations.foreground};
  margin-top: auto;
  &:not(:disabled):hover {
    background: ${(p) => (p.$start ? theme.simulations.accept : theme.simulations.end)};
  }
`
