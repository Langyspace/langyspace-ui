import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-shadowing-active-phrase',
})`
  max-width: 22rem;
  color: ${token.colorContentDefault};
  font-size: ${token.typographyFontSize2xl};
  font-weight: ${token.typographyFontWeightBold};
  line-height: 1.34;
  text-wrap: balance;

  [data-ui-skeleton] {
    margin-right: auto;
    margin-left: auto;
  }

  [data-ui-skeleton] + [data-ui-skeleton] {
    margin-top: ${token.spacing2};
  }

  @media (max-width: 640px) {
    font-size: ${token.typographyFontSize2xl};
  }

  @media (min-width: 640px) and (max-width: 900px) and (min-height: 761px) {
    max-width: 34rem;
    font-size: ${token.typographyFontSize3xl};
    line-height: 1.28;
  }
`
