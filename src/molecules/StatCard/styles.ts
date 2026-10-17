import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

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
