import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { resolveSlideTheme } from '../../foundations/theme/resolveSlideTheme'
import { presentationMedia } from '../../foundations/layout/presentationMedia'

export const Root = styled.section.withConfig({
  componentId: 'lsui-sc-mobile-frame',
})<{ $compact: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${(p) => (p.$compact ? 'min(100%, 18rem, calc(58cqh * 0.6))' : 'min(100%, 22rem, calc(74cqh * 0.7))')};
  min-height: ${(p) => (p.$compact ? 'min(28rem, 58cqh)' : `min(${presentationMedia.maximumHeight}, 74cqh)`)};
  min-width: 0;
  box-sizing: border-box;
  margin-inline: auto;
  border: ${theme.voiceMessage.frameWidth} solid ${theme.voiceMessage.frame};
  border-radius: ${theme.voiceMessage.phoneRadius};
  box-shadow: 0 0 0 2px ${theme.voiceMessage.frameEdge};
  padding: ${(p) => (p.$compact ? theme.spacing[2] : theme.spacing[3])};
  gap: ${(p) => (p.$compact ? theme.spacing[2] : theme.spacing[3])};
  color: ${(p) => resolveSlideTheme(p).foreground};
  background: ${(p) => resolveSlideTheme(p).canvas};
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
export const Content = styled.div`
  display: grid;
  align-content: start;
  min-width: 0;
  min-height: 0;
  gap: ${theme.spacing[3]};
  flex: 1;
`
export const HomeIndicator = styled.div`
  align-self: center;
  width: ${theme.spacing[16]};
  height: ${theme.spacing[1]};
  margin-top: ${theme.spacing[2]};
  border-radius: ${theme.radius.pill};
  background: ${(p) => resolveSlideTheme(p).muted};
`
