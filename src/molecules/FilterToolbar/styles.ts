import { styled } from 'styled-components'
import { tokens } from '../../foundations/tokens'

export const Container = styled.div.withConfig({
  componentId: 'lsui-sc-filter-toolbar',
})`
  display: flex;
  min-width: 0;
  flex-wrap: wrap;
  align-items: center;
  gap: ${tokens.spacing[3]};

  @media (max-width: 900px) {
    align-items: stretch;
    gap: ${tokens.spacing[2]};
  }
`
