import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

export const Container = styled.div.withConfig({
  componentId: 'lsui-sc-filter-toolbar',
})`
  display: flex;
  min-width: 0;
  flex-wrap: wrap;
  align-items: center;
  gap: ${token.spacing3};

  @media (max-width: 900px) {
    align-items: stretch;
    gap: ${token.spacing2};
  }
`
