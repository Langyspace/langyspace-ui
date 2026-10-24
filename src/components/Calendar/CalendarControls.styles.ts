import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Container = styled.div.withConfig({
  componentId: 'lsui-sc-calendar-controls',
})`
  display: flex;
  min-width: 0;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  gap: ${theme.spacing[2]};
  margin-bottom: ${theme.spacing[3]};
`

export const Label = styled.div`
  min-width: 0;
  margin-left: ${theme.spacing[1]};
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.md};
  font-weight: ${theme.typography.fontWeight.bold};
`
