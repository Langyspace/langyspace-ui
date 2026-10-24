import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-shadowing-control-dock',
})`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing[3]};
  padding: 0.75rem 1.25rem 1rem;
  border-top: 1px solid ${theme.colors.border.subtle};
  background: ${theme.colors.palette.white};

  @media (max-width: ${theme.breakpoints.mobileShell}) {
    padding-bottom: ${theme.spacing[4]};
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme.breakpoints.mobileShell}) and (min-height: ${theme.viewportHeights.tall}) {
    gap: ${theme.spacing[4]};
    padding-top: ${theme.spacing[4]};
    padding-bottom: ${theme.spacing[5]};
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme.breakpoints.mobileShell}) and (max-height: ${theme.viewportHeights.xs}) {
    grid-column: 2;
    grid-row: 2;
    min-height: 0;
    justify-content: center;
    gap: ${theme.spacing[2]};
    padding-block: ${theme.spacing[1]};
  }
`
