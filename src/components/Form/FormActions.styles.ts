import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-form-actions',
})`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: ${theme.spacing[3]};
  @media (max-width: ${theme.breakpoints.mobileShell}) {
    flex-direction: column;
    > button {
      width: 100%;
    }
  }
`
