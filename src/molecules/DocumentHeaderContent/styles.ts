import { styled } from 'styled-components'
import { tokens } from '../../foundations/tokens'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-document-header-content',
})`
  display: flex;
  width: min(100%, 73.75rem);
  align-items: center;
  justify-content: space-between;
  gap: ${tokens.spacing[4]};
  margin: 0 auto;
  padding: ${tokens.spacing[4]} ${tokens.spacing[5]};
  @media (min-width: 768px) {
    padding: ${tokens.spacing[5]} ${tokens.spacing[8]};
  }
`
