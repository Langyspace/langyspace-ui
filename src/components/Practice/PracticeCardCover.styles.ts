import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-practice-card-cover',
})`
  display: flex;
  min-height: 128px;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  color: ${token.colorNeutral0};
  background: ${token.colorNeutral950};
  @media (max-width: 900px) {
    min-height: 0;
    aspect-ratio: 16 / 9;
  }
`

export const Value = styled.div.withConfig({
  componentId: 'lsui-sc-practice-cover-value',
})`
  color: inherit;
  font-size: 40px;
  font-weight: ${token.typographyFontWeightBold};
  line-height: 1;
  display: flex;
  align-items: center;
`

export const Label = styled.div.withConfig({
  componentId: 'lsui-sc-practice-cover-label',
})`
  color: rgba(255, 255, 255, 0.72);
  font-size: 12px;
  font-weight: ${token.typographyFontWeightSemibold};
  line-height: ${token.typographyLineHeightSnug};
  text-transform: uppercase;
`
