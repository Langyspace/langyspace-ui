import { styled } from 'styled-components'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-auth-channel-hint',
})`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1rem;
  border-radius: 0.75rem;
  background-color: #fafaf9;
  padding: 0.75rem 1rem;
  color: #6b6b6b;
  font-size: 0.75rem;
  line-height: 1.45;

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`
