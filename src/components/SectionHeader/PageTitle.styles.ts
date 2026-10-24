import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.h1.withConfig({ componentId: 'lsui-sc-page-title' })`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  color: ${theme.colors.text.primary};
  font-size: 32px;
  font-weight: ${theme.typography.fontWeight.bold};
  line-height: 1.1;
  letter-spacing: 0;
`
