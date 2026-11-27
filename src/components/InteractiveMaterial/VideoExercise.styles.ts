import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import * as Common from './Material.shared.styles'
export const Root = styled(Common.Stack).withConfig({
  componentId: 'lsui-sc-video-exercise',
})`
  font-family: ${theme.typography.fontFamily.sans};
  color: ${(p) => Common.recipe(p).foreground};
`
export const Media = styled.div`
  border-radius: 18px;
  overflow: hidden;
  background: ${theme.simulations.canvas};
  color: ${theme.simulations.foreground};
  video,
  iframe {
    display: block;
    width: 100%;
    border: 0;
    aspect-ratio: 16/9;
  }
`

export const PlayerHost = styled.div`
  width: 100%;
  min-height: 12.5rem;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: ${theme.radius.xl};
  background: ${(p) => Common.recipe(p).surface};
  > iframe {
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
  }
`
export const PlayerFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${theme.spacing[2]};
  min-width: 0;
  > ${Common.Row} {
    flex-shrink: 0;
    margin-inline-start: auto;
  }
`
export const Caption = styled.span`
  flex: 1;
  min-width: 0;
  overflow-wrap: anywhere;
  color: ${(p) => Common.recipe(p).foreground};
  font-size: ${theme.typography.fontSize.sm};
  line-height: 1.4;
`
export const Source = styled.a`
  color: ${(p) => Common.recipe(p).muted};
  font-family: ${theme.typography.fontFamily.sans};
  font-size: ${theme.typography.fontSize.xs};
  line-height: 1.4;
  text-underline-offset: 0.15em;
`
