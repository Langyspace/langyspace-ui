import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import * as Common from '../Exercise/Material.shared.styles'
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
