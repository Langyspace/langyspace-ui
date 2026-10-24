import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Actions = styled.div.withConfig({
  componentId: 'lsui-sc-auth-actions',
})`
  display: contents;

  > button {
    margin-top: clamp(${theme.spacing[4]}, 3svh, ${theme.spacing[6]});

    @media (max-width: ${theme.breakpoints.mobileShell}) {
      margin-top: clamp(${theme.spacing[3]}, 2.5svh, ${theme.spacing[5]});
    }
  }
`
