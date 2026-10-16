import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-shadowing-control-dock',
})`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  gap: ${token.spacing3};
  padding: 0.75rem 1.25rem 1rem;
  border-top: 1px solid ${token.colorSurfaceBorderSubtle};
  background: ${token.colorNeutral0};

  @media (max-width: 900px) {
    padding-bottom: ${token.spacing4};
  }

  @media (min-width: 640px) and (max-width: 900px) and (min-height: 761px) {
    gap: ${token.spacing4};
    padding-top: ${token.spacing4};
    padding-bottom: ${token.spacing5};
  }

  @media (min-width: 640px) and (max-width: 900px) and (max-height: 500px) {
    grid-column: 2;
    grid-row: 2;
    min-height: 0;
    justify-content: center;
    gap: ${token.spacing2};
    padding-block: ${token.spacing1};
  }
`
