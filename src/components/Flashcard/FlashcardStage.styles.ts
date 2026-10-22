import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-flashcard-stage',
})`
  display: flex;
  min-height: 0;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  padding-block: var(--fc-stage-padding-block);
  padding-inline: var(--fc-stage-padding-inline);
  -webkit-perspective: 1600px;
  perspective: 1600px;

  @media (max-width: ${theme.breakpoints.mobileShell}) {
    flex: 1 1 auto;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme.breakpoints.mobileShell}) and (max-height: ${theme.viewportHeights.xs}) {
    grid-column: 1;
    grid-row: 2;
    min-height: 0;
  }
`
