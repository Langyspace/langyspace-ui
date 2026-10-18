import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-shadowing-translation',
})`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  min-height: 1.75rem;
  align-items: center;
  justify-content: center;
  text-align: center;

  > [data-ui-shadowing-translation-content] {
    display: flex;
    width: 100%;
    max-width: 22rem;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    color: ${token.colorContentMuted};
    font-size: ${token.typographyFontSizeSm};
    line-height: ${token.typographyLineHeightNormal};

    &::before {
      content: '';
      display: block;
      width: 1.875rem;
      height: 0.1875rem;
      margin: 0 auto 0.5rem;
      border-radius: ${token.radiusPill};
      background: #ff1f5c;
    }
  }

  @media (min-width: 640px) and (max-width: 900px) and (min-height: 761px) {
    > [data-ui-shadowing-translation-content] {
      max-width: 32rem;
      font-size: ${token.typographyFontSizeMd};

      &::before {
        width: 2.5rem;
        margin-bottom: ${token.spacing3};
      }
    }
  }
`
