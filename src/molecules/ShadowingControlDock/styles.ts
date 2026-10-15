import { styled } from 'styled-components'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-shadowing-control-dock',
})`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem 1rem;
  border-top: 1px solid #ececea;
  background: #ffffff;

  @media (max-width: 900px) {
    padding-bottom: 1rem;
  }

  @media (min-width: 640px) and (max-width: 900px) and (min-height: 761px) {
    gap: 1rem;
    padding-top: 1rem;
    padding-bottom: 1.25rem;
  }
`
