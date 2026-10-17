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
