import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Container = styled.div.withConfig({
  componentId: 'lsui-sc-filter-toolbar',
})`
  display: flex;
  min-width: 0;
  flex-wrap: wrap;
  align-items: center;
  gap: ${theme.spacing[3]};

  @media (max-width: ${theme.breakpoints.mobileShell}) {
    align-items: stretch;
    gap: ${theme.spacing[2]};
  }
`
