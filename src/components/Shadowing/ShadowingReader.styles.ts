import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-shadowing-reader',
})`
  display: flex;
  min-height: 16.5rem;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: safe center;
  gap: ${theme.spacing[3]};
  overflow-y: auto;
  overscroll-behavior-y: contain;
  padding: 0.75rem 1.25rem;

  @media (max-width: ${theme.breakpoints.mobileShell}) {
    min-height: 0;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 1.25rem 1.25rem;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme.breakpoints.mobileShell}) and (min-height: ${theme.viewportHeights.tall}) {
    gap: ${theme.spacing[5]};
    padding-right: ${theme.spacing[8]};
    padding-left: ${theme.spacing[8]};
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme.breakpoints.mobileShell}) and (max-height: ${theme.viewportHeights.xs}) {
    grid-column: 1;
    grid-row: 2;
    min-height: 0;
  }
`
