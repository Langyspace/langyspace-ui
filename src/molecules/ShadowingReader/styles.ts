import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-shadowing-reader',
})`
  display: flex;
  min-height: 16.5rem;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: center;
  gap: ${token.spacing3};
  overflow: hidden;
  padding: 0.75rem 1.25rem;

  @media (max-width: 640px) {
    min-height: 0;
    padding: 1.25rem 1.25rem;
  }

  @media (min-width: 640px) and (max-width: 900px) and (min-height: 761px) {
    gap: ${token.spacing5};
    padding-right: ${token.spacing8};
    padding-left: ${token.spacing8};
  }
`
