import { styled } from 'styled-components'
import { Pressable } from '../Pressable'
import { theme } from '../../foundations/theme/theme'

export const Root = styled(Pressable).withConfig({
  componentId: 'lsui-sc-conversation-row',
})<{ $selected: boolean }>`
  display: flex;
  width: 100%;
  min-width: 0;
  align-items: center;
  gap: ${theme.spacing[3]};
  padding: 0.75rem 1rem;
  border: 0;
  background: ${({ $selected }) => ($selected ? theme.colors.palette.neutral[100] : 'transparent')};
  cursor: pointer;
  text-align: left;
  transition: background 150ms ease;

  &:hover {
    background: ${theme.colors.palette.neutral[100]};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.palette.accent.aqua};
    outline-offset: -2px;
  }
`

export const Body = styled.span.withConfig({
  componentId: 'lsui-sc-conversation-body',
})`
  display: flex;
  min-width: 0;
  flex: 1 1 auto;
  flex-direction: column;
  gap: ${theme.spacing[1]};
`

export const Top = styled.span.withConfig({
  componentId: 'lsui-sc-conversation-top',
})`
  display: flex;
  min-width: 0;
  align-items: baseline;
  justify-content: space-between;
  gap: ${theme.spacing[2]};
`

export const Title = styled.span.withConfig({
  componentId: 'lsui-sc-conversation-title',
})`
  overflow: hidden;
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.semibold};
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const Meta = styled.span.withConfig({
  componentId: 'lsui-sc-conversation-meta',
})`
  flex: 0 0 auto;
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.xs};
  white-space: nowrap;
`

export const Bottom = styled.span.withConfig({
  componentId: 'lsui-sc-conversation-bottom',
})`
  display: flex;
  min-width: 0;
  align-items: center;
  gap: ${theme.spacing[2]};
`

export const Preview = styled.span.withConfig({
  componentId: 'lsui-sc-conversation-preview',
})<{ $unread: boolean }>`
  overflow: hidden;
  flex: 1 1 auto;
  color: ${({ $unread }) => ($unread ? theme.colors.palette.neutral[900] : theme.colors.palette.neutral[600])};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${({ $unread }) => ($unread ? 500 : 400)};
  text-overflow: ellipsis;
  white-space: nowrap;
`
