import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import * as Common from '../Exercise/Material.shared.styles'
export const Root = styled(Common.Surface).withConfig({
  componentId: 'lsui-sc-oral-review-result',
})`
  gap: ${theme.spacing[5]};
`
export const Total = styled.strong`
  font-family: ${theme.slides.displayFontFamily};
  font-size: 48px;
  line-height: 1;
`
export const Part = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(60px, 2fr) auto;
  align-items: center;
  gap: ${theme.spacing[3]};
  font-size: 14px;
  progress {
    width: 100%;
    accent-color: ${(p) => Common.recipe(p).accent};
    height: 8px;
  }
`
export const Fields = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
  gap: ${theme.spacing[3]};
  label {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[1]};
    font-size: 14px;
  }
  input,
  textarea {
    font: inherit;
    min-width: 0;
    min-height: 40px;
    box-sizing: border-box;
    padding: ${theme.spacing[2]};
    border: 1.5px solid ${(p) => Common.recipe(p).border};
    border-radius: ${theme.radius.lg};
    background: ${(p) => Common.recipe(p).canvas};
    color: ${(p) => Common.recipe(p).foreground};
  }
  label:last-child {
    grid-column: 1/-1;
  }
  @media (max-width: ${theme.breakpoints.mobileShell}) {
    grid-template-columns: minmax(0, 1fr);
  }
`
