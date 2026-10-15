import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-auth-channel-hint',
})`
  display: flex;
  align-items: center;
  gap: ${token.spacing3};
  margin-top: ${token.spacing4};
  border-radius: ${token.radiusRounded};
  background-color: ${token.colorNeutral50};
  padding: 0.75rem 1rem;
  color: ${token.colorContentMuted};
  font-size: ${token.typographyFontSizeXs};
  line-height: 1.45;

  @media (min-width: 768px) {
    font-size: ${token.typographyFontSizeSm};
  }
`
