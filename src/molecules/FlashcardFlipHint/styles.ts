import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-flashcard-flip-hint',
})`
  display: inline-flex;
  align-items: center;
  align-self: center;
  gap: 0.4375rem;
  padding-top: 0.375rem;
  color: var(--fc-muted-2);
  font-size: ${token.typographyFontSizeXs};
  font-weight: ${token.typographyFontWeightMedium};

  svg {
    opacity: 0.7;
  }
`
