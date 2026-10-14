import { styled } from 'styled-components'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-quiz-prompt-header',
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;

  @media (max-width: 640px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.5rem;
  }
`
