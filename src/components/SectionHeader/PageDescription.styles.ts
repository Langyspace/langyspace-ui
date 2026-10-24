import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.p.withConfig({
  componentId: 'lsui-sc-page-description',
})`
  margin: 4px 0 0;
  color: ${theme.colors.text.muted};
  font-size: 14px;
  line-height: ${theme.typography.lineHeight.normal};
`
