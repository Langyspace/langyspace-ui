import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-metric-summary',
})`
  padding: ${token.spacing3};
  border-radius: ${token.radiusCard};
  background: ${token.colorNeutral50};
  text-align: center;

  [data-ui-metric-value] {
    color: ${token.colorContentDefault};
    font-size: ${token.typographyFontSizeXl};
    font-weight: ${token.typographyFontWeightBold};
  }

  [data-ui-metric-label] {
    margin-top: 0.125rem;
    color: ${token.colorContentMuted};
    font-size: ${token.typographyFontSize2xs};
    font-weight: ${token.typographyFontWeightSemibold};
    text-transform: uppercase;
  }

  @media (max-width: 640px) {
    min-width: 0;
    padding: ${token.spacing2} ${token.spacing1};

    [data-ui-metric-value] {
      font-size: ${token.typographyFontSizeMd};
      line-height: 1.1;
    }

    [data-ui-metric-label] {
      margin-top: 0.0625rem;
      font-size: 0.5625rem;
      line-height: 1.1;
      white-space: nowrap;
    }
  }
`

export const Value = styled.div.withConfig({
  componentId: 'lsui-sc-metric-value',
})`
  min-width: 0;
  overflow-wrap: anywhere;
`

export const Label = styled.div.withConfig({
  componentId: 'lsui-sc-metric-label',
})`
  min-width: 0;
  overflow-wrap: anywhere;
`
