import { styled } from 'styled-components'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-flashcard-deck',
})`
  position: relative;
  width: 100%;
  max-width: 20.125rem;
  height: clamp(
    var(--fc-card-min-height),
    var(--fc-card-fluid-height),
    var(--fc-card-max-height)
  );
`
