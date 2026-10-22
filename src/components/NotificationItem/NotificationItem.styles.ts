import { styled } from 'styled-components'
import { Pressable } from '../Pressable'
import { theme } from '../../foundations/theme/theme'

export const Root = styled(Pressable).withConfig({
  componentId: 'lsui-sc-notification-item',
})`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  width: 100%;
  gap: ${theme.spacing[3]};
  padding-top: ${theme.spacing[3]};
  padding-right: ${theme.spacing[3]};
  padding-bottom: ${theme.spacing[3]};
  padding-left: ${theme.spacing[3]};
  border: 1px solid ${theme.colors.border.subtle};
  border-radius: ${theme.radius.xl};
  color: ${theme.colors.text.primary};
  background: ${theme.colors.palette.white};
  text-align: left;
  transition:
    color 150ms cubic-bezier(0.2, 0, 0, 1),
    background-color 150ms cubic-bezier(0.2, 0, 0, 1),
    border-color 150ms cubic-bezier(0.2, 0, 0, 1),
    box-shadow 200ms cubic-bezier(0.2, 0, 0, 1),
    transform 200ms cubic-bezier(0.2, 0, 0, 1);

  &:hover {
    border-color: ${theme.semantic.border.strong};
    background: ${theme.colors.palette.neutral[100]};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px ${theme.colors.focusRing};
  }

  @media (max-width: ${theme.breakpoints.mobileShell}) {
    grid-template-columns: auto minmax(0, 1fr);
  }
`

export const Content = styled.span.withConfig({
  componentId: 'lsui-sc-notification-content',
})`
  min-width: 0;
`

export const ItemTitle = styled.span.withConfig({
  componentId: 'lsui-sc-notification-itemtitle',
})`
  display: block;
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.semibold};
  line-height: ${theme.typography.lineHeight.snug};
`

export const ItemBody = styled.span.withConfig({
  componentId: 'lsui-sc-notification-itembody',
})`
  display: block;
  margin-top: ${theme.spacing[1]};
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.normal};
`

export const ItemMeta = styled.span.withConfig({
  componentId: 'lsui-sc-notification-itemmeta',
})`
  display: block;
  margin-top: ${theme.spacing[1]};
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.xs};
  line-height: ${theme.typography.lineHeight.snug};
`

export const ItemAction = styled.span.withConfig({
  componentId: 'lsui-sc-notification-itemaction',
})`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  gap: ${theme.spacing[1]};
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.semibold};
  white-space: nowrap;

  @media (max-width: ${theme.breakpoints.mobileShell}) {
    display: none;
  }
`
