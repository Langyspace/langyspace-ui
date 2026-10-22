import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-quiz-prompt-header',
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing[3]};

  @media (max-width: ${theme.breakpoints.sm}) {
    align-items: flex-start;
    flex-direction: column;
    gap: ${theme.spacing[2]};
  }
`
