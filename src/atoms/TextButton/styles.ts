import { styled } from 'styled-components'
import { Pressable } from '../../primitives/Pressable'
import * as token from '../../foundations/tokenValues'

export const Root = styled(Pressable).withConfig({
  componentId: 'lsui-sc-text-button',
})`
  display: inline-flex;
  width: fit-content;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border: 0;
  border-radius: 4px;
  background: transparent;
  padding: 0;
  font: inherit;
  text-align: left;
  cursor: pointer;
  color: ${token.colorContentDefault};
  font-weight: ${token.typographyFontWeightSemibold};
  text-decoration: underline;
  text-underline-offset: 2px;
  &[data-variant='subtle'] {
    color: ${token.colorContentMuted};
    font-weight: ${token.typographyFontWeightMedium};
    text-decoration: none;
  }
  &[data-variant='danger'] {
    color: ${token.colorFeedbackDanger};
  }
  &:hover:not(:disabled) {
    color: ${token.colorBrandDefault};
  }
  &:focus-visible {
    outline: 3px solid ${token.colorFocus};
    outline-offset: 3px;
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
  svg {
    flex-shrink: 0;
  }
`
