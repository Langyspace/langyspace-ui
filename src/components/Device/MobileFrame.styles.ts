import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { resolveSlideTheme } from '../../foundations/theme/resolveSlideTheme'
import { presentationMedia } from '../../foundations/layout/presentationMedia'

export const Root = styled.section.withConfig({
  componentId: 'lsui-sc-mobile-frame',
})<{ $application?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${(p) => (p.$application ? 'min(100%, 18rem)' : 'min(100%, 22rem, calc(74cqh * 0.7))')};
  height: ${(p) => (p.$application ? 'clamp(24rem, calc(100cqh - 15.625rem), 33.75rem)' : undefined)};
  min-height: ${(p) => (p.$application ? '0' : `min(${presentationMedia.maximumHeight}, 74cqh)`)};
  min-width: 0;
  box-sizing: border-box;
  margin-inline: auto;
  border: ${theme.voiceMessage.frameWidth} solid ${theme.voiceMessage.frame};
  border-radius: ${theme.voiceMessage.phoneRadius};
  box-shadow: 0 0 0 2px ${theme.voiceMessage.frameEdge};
  padding: ${theme.spacing[3]};
  gap: ${theme.spacing[3]};
  color: ${(p) => (p.$application ? theme.colors.text.primary : resolveSlideTheme(p).foreground)};
  background: ${(p) => (p.$application ? theme.colors.surface.canvas : resolveSlideTheme(p).canvas)};
  font-family: ${theme.typography.fontFamily.sans};
  overflow-wrap: anywhere;
`
export const Camera = styled.div`
  align-self: center;
  width: ${theme.spacing[12]};
  height: ${theme.spacing[2]};
  border-radius: ${theme.radius.pill};
  background: ${theme.voiceMessage.frame};
`
export const Title = styled.h3`
  margin: 0;
  font: ${theme.typography.fontWeight.bold} ${theme.typography.fontSize.lg} /
    1.3 ${theme.typography.fontFamily.sans};
  color: inherit;
`
export const Content = styled.div<{ $application?: boolean }>`
  display: grid;
  align-content: ${(p) => (p.$application ? 'stretch' : 'start')};
  grid-template-rows: ${(p) => (p.$application ? 'minmax(0, 1fr)' : undefined)};
  min-width: 0;
  gap: ${theme.spacing[3]};
  flex: 1;
  min-height: 0;
  overflow: ${(p) => (p.$application ? 'hidden' : undefined)};
`
export const HomeIndicator = styled.div`
  align-self: center;
  width: ${theme.spacing[16]};
  height: ${theme.spacing[1]};
  margin-top: ${theme.spacing[2]};
  border-radius: ${theme.radius.pill};
  background: ${(p) => resolveSlideTheme(p).muted};
`
