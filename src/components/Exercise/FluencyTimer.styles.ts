import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import * as Common from '../Exercise/Material.shared.styles'
export const Root = styled(Common.Surface).withConfig({
  componentId: 'lsui-sc-fluency-timer',
})`
  align-items: center;
  text-align: center;
  padding: ${theme.spacing[6]};
`
export const Clock = styled.div`
  display: grid;
  place-items: center;
  width: 160px;
  height: 160px;
  border: 6px solid ${(p) => Common.recipe(p).accent};
  border-radius: ${theme.radius.circle};
  font: 700 40px ${theme.slides.displayFontFamily};
  font-variant-numeric: tabular-nums;
`
export const Progress = styled.progress`
  width: 100%;
  max-width: 320px;
  accent-color: ${(p) => Common.recipe(p).accent};
  height: 6px;
`
