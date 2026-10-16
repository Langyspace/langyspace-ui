import { styled } from 'styled-components'
import { Root as Reader } from '../ShadowingReader/styles'
import { compactPracticeLayout } from '../../internal/compactPracticeLayout'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-shadowing-panel',
})`
  display: flex;
  width: min(40rem, 100%);
  min-height: min(32rem, calc(100svh - 12rem));
  max-height: min(44rem, calc(100svh - 8rem));
  flex-direction: column;
  overflow: hidden;
  background: transparent;

  > header {
    flex-shrink: 0;
  }

  @media (max-width: 900px) {
    width: 100%;
    height: 100%;
    min-height: 0;
    max-height: none;
  }

  &:has(> ${Reader}) {
    ${compactPracticeLayout}
  }

  @media (max-width: 900px) {
    &:has(> header):not(:has(> ${Reader})) {
      overflow: auto;

      > :not(header) {
        flex-shrink: 0;
      }
    }
  }
`
