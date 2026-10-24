import { styled } from 'styled-components'
import { compactPracticeLayout } from '../../internal/compactPracticeLayout'
import { theme } from '../../foundations/theme/theme'

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

  @media (max-width: ${theme.breakpoints.mobileShell}) {
    width: 100%;
    height: 100%;
    min-height: 0;
    max-height: none;
  }

  &:has(> [data-ui-shadowing-reader]) {
    ${compactPracticeLayout}
  }

  @media (max-width: ${theme.breakpoints.mobileShell}) {
    &:has(> header):not(:has(> [data-ui-shadowing-reader])) {
      overflow: auto;

      > :not(header) {
        flex-shrink: 0;
      }
    }
  }
`
