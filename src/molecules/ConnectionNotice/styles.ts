import { styled } from 'styled-components'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-connection-notice',
})`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  color: #92400e;
  font-size: 0.875rem;
  line-height: 1.5;

  svg {
    flex: 0 0 auto;
  }
`
