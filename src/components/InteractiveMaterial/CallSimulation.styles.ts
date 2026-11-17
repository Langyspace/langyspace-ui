import { css, styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { resolveTheme } from '../../foundations/theme/resolveTheme'
import * as Common from './Material.shared.styles'
import { ConnectionSignal } from './ConnectionSignal'
const device = (props: Parameters<typeof resolveTheme>[0]) =>
  resolveTheme(props).voiceMessage ?? theme.voiceMessage
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
export const Phone = styled.div<{ $video?: boolean }>`
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
  ${(p) =>
    p.$video
      ? css`
          padding: ${theme.spacing[4]} ${theme.spacing[3]};
          width: ${device(p).phoneWidth};
          min-height: ${device(p).phoneHeight};
          border-radius: ${device(p).phoneRadius};
          border-width: ${device(p).frameWidth};
        `
      : undefined}
  h3 {
    font-family: ${theme.slides.displayFontFamily};
    font-size: 22px;
    line-height: 1.1;
    margin: 0;
    color: inherit;
    overflow-wrap: anywhere;
  }
`
export const Avatar = styled.div<{ $poor?: boolean; $video?: boolean }>`
  width: 84px;
  height: 84px;
  display: grid;
  place-items: center;
  border-radius: ${theme.radius.circle};
  background: ${theme.simulations.callAvatar};
  font: 700 30px ${theme.slides.displayFontFamily};
  position: relative;
  overflow: ${(p) => (p.$video ? 'visible' : 'hidden')};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${theme.radius.circle};
    filter: ${(p) => (p.$video ? (p.$poor ? 'grayscale(1) brightness(.6) blur(4px)' : 'grayscale(1) brightness(.75)') : 'none')};
  }
`
export const CameraBadge = styled.span`
  position: absolute;
  right: -4px;
  bottom: -4px;
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border: 2px solid ${theme.voiceMessage.frame};
  border-radius: ${theme.radius.circle};
  background: ${theme.simulations.callAvatar};
  svg {
    width: 20px;
    height: 20px;
  }
  &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    transform: rotate(45deg);
    background: ${theme.simulations.foreground};
  }
`
export const SignalButton = styled(Common.DeviceControl)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  min-height: 44px;
  padding: ${theme.spacing[2]} ${theme.spacing[3]};
  border-radius: ${theme.radius.pill};
  background: ${theme.simulations.callKey};
  color: ${theme.simulations.foreground};
  font-size: ${theme.typography.fontSize.sm};
  margin-top: auto;
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
export const Key = styled(Common.DeviceControl)<{ $pressed: boolean }>`
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
export const CallButton = styled(Common.DeviceControl)<{ $start: boolean }>`
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

export const PoorSignal = styled(ConnectionSignal)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 56px;
  height: 56px;
  padding: 6px;
  border-radius: ${theme.radius.lg};
  background: ${theme.colors.palette.white};
  box-shadow: ${theme.shadows.sm};
  i {
    width: 8px;
  }
  i:nth-child(1) {
    height: 10px;
  }
  i:nth-child(2) {
    height: 20px;
  }
  i:nth-child(3) {
    height: 30px;
  }
  i:nth-child(4) {
    height: 40px;
  }
`
