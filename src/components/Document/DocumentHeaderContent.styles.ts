import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-document-header-content',
})`
  display: flex;
  width: min(100%, 73.75rem);
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing[4]};
  margin: 0 auto;
  padding: ${theme.spacing[4]} ${theme.spacing[5]};
  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing[5]} ${theme.spacing[8]};
  }
`
