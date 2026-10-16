import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-flashcard-image-panel',
})`
  position: relative;
  display: flex;
  width: var(--fc-image-panel-width);
  max-width: 100%;
  height: var(--fc-image-panel-height);
  min-height: calc(2.75rem + ${token.spacing6});
  flex-shrink: 1;
  align-items: center;
  align-self: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid var(--fc-line);
  border-radius: 1rem;
  background: linear-gradient(135deg, var(--fc-pink-tint) 0%, #ffffff 100%);

  @media (min-width: 640px) and (max-width: 900px) and (max-height: 500px) {
    align-self: start;
  }

  &::after {
    position: absolute;
    inset: 0;
    z-index: 2;
    border-radius: inherit;
    background: linear-gradient(135deg, var(--fc-pink-tint) 0%, #ffffff 100%);
    content: '';
    opacity: 0.28;
    pointer-events: none;
  }
`

export const Emoji = styled.div.withConfig({
  componentId: 'lsui-sc-flashcardimagepanel-emoji',
})`
  position: relative;
  z-index: 1;
  font-size: 4.75rem;
  filter: drop-shadow(0 6px 10px rgba(0, 0, 0, 0.08));
  line-height: 1;
`
