import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
export const Root = styled.span.withConfig({
  componentId: 'lsui-sc-quiz-badge',
})`
  display: inline-flex;
  align-items: center;
  min-height: 1.75rem;
  padding: 0 0.75rem;
  border-radius: ${token.radiusPill};
  color: ${token.colorNeutral0};
  background: var(--quiz-ink, #0a0a0a);
  font-size: ${token.typographyFontSizeXs};
  font-weight: ${token.typographyFontWeightBold};
`
