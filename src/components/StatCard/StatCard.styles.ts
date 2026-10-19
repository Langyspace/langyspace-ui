import * as token from '../../foundations/tokenValues'
import { styled } from 'styled-components'

export const Root = styled.div.withConfig({ componentId: 'lsui-sc-stat-card' })`
  position: relative;
  display: flex;
  min-width: 0;
  min-height: 82px;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #e4e1da;
  border-radius: 14px;
  background: ${token.colorNeutral0};
  box-shadow: 0 1px 0 rgba(10, 10, 10, 0.03);
  padding: 12px 14px;
  &::before {
    position: absolute;
    inset: 0 0 auto;
    height: 3px;
    background: #d8d6d2;
    content: '';
  }
  &[data-tone='brand'] {
    border-color: rgba(255, 31, 92, 0.2);
    background: #fff7fa;
    &::before {
      background: #ff1f5c;
    }
  }
`

export const Value = styled.div.withConfig({
  componentId: 'lsui-sc-stat-value',
})`
  font-size: 22px;
  font-weight: 800;
  line-height: 1;
  overflow-wrap: anywhere;
  [data-ui-stat-action] + & {
    padding-right: 78px;
  }
`

export const Label = styled.div.withConfig({
  componentId: 'lsui-sc-stat-label',
})`
  margin-top: 7px;
  color: ${token.colorContentMuted};
  font-size: 10px;
  font-weight: ${token.typographyFontWeightBold};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  [data-tone='brand'] & {
    color: #9d174d;
  }
`

export const Action = styled.div.withConfig({
  componentId: 'lsui-sc-stat-action',
})`
  position: absolute;
  z-index: 1;
  top: 12px;
  right: 12px;
`
