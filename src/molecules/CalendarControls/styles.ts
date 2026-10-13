import { styled } from 'styled-components'
import { tokens } from '../../foundations/tokens'
export const Container = styled.div.withConfig({
  componentId: 'lsui-sc-calendar-controls',
})`
  display: flex;
  min-width: 0;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  gap: ${tokens.spacing[2]};
  margin-bottom: ${tokens.spacing[3]};
`
export const Label = styled.div`
  min-width: 0;
  margin-left: ${tokens.spacing[1]};
  color: ${tokens.color.content.default};
  font-size: ${tokens.typography.fontSize.md};
  font-weight: ${tokens.typography.fontWeight.bold};
`
