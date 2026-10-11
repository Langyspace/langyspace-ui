import { styled } from 'styled-components'
import { tokens } from '../../foundations/tokens'

export const Notice = styled.aside.withConfig({
  componentId: 'lsui-sc-notice-banner',
})`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  column-gap: ${tokens.spacing[3]};
  padding: ${tokens.spacing[3]} ${tokens.spacing[4]};
  border: 1px solid ${tokens.color.surfaceBorder.subtle};
  border-radius: ${tokens.radius.lg};
  background: ${tokens.color.neutral[50]};
  box-shadow:
    0 1px 0 rgba(10, 10, 10, 0.04),
    0 1px 2px rgba(10, 10, 10, 0.04);
  @media (max-width: 768px) {
    grid-template-columns: auto minmax(0, 1fr);
    align-items: flex-start;
  }
`
export const Icon = styled.span.withConfig({
  componentId: 'lsui-sc-notice-icon',
})`
  display: inline-flex;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: ${tokens.radius.pill};
  background: ${tokens.color.neutral[100]};
  color: ${tokens.color.content.secondary};
`
export const Copy = styled.div.withConfig({
  componentId: 'lsui-sc-notice-copy',
})`
  min-width: 0;
`
export const Actions = styled.div.withConfig({
  componentId: 'lsui-sc-notice-actions',
})`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${tokens.spacing[2]};
  @media (max-width: 768px) {
    grid-column: 1 / -1;
    justify-self: end;
    margin-top: ${tokens.spacing[3]};
  }
`
export const Title = styled.strong.withConfig({
  componentId: 'lsui-sc-notice-title',
})`
  display: block;
  color: ${tokens.color.content.default};
  font-size: ${tokens.typography.fontSize.sm};
  font-weight: ${tokens.typography.fontWeight.bold};
  line-height: ${tokens.typography.lineHeight.snug};
`
export const Text = styled.span.withConfig({
  componentId: 'lsui-sc-notice-text',
})`
  display: block;
  margin-top: ${tokens.spacing[1]};
  color: ${tokens.color.content.secondary};
  font-size: ${tokens.typography.fontSize.sm};
  line-height: ${tokens.typography.lineHeight.normal};
`
