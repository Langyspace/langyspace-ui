import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-document-header-content',
})`
  display: flex;
  width: min(100%, 73.75rem);
  align-items: center;
  justify-content: space-between;
  gap: ${token.spacing4};
  margin: 0 auto;
  padding: ${token.spacing4} ${token.spacing5};
  @media (min-width: 768px) {
    padding: ${token.spacing5} ${token.spacing8};
  }
`
