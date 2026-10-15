import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
export const Container = styled.div.withConfig({
  componentId: 'lsui-sc-calendar-controls',
})`
  display: flex;
  min-width: 0;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  gap: ${token.spacing2};
  margin-bottom: ${token.spacing3};
`
export const Label = styled.div`
  min-width: 0;
  margin-left: ${token.spacing1};
  color: ${token.colorContentDefault};
  font-size: ${token.typographyFontSizeMd};
  font-weight: ${token.typographyFontWeightBold};
`
