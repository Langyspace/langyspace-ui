import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
export const Root = styled.span`
  display: inline-flex;
  align-items: flex-end;
  gap: 2px;
  height: ${theme.spacing[5]};
  flex-shrink: 0;
  i {
    width: 4px;
    border: 1px solid ${theme.slides.muted};
    border-radius: 1px;
    background: transparent;
  }
  i:nth-child(1) {
    height: 5px;
    background: ${theme.semantic.status.danger.foreground};
  }
  i:nth-child(2) {
    height: 10px;
  }
  i:nth-child(3) {
    height: 15px;
  }
  i:nth-child(4) {
    height: 20px;
  }
`
