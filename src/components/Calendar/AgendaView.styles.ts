import { styled } from 'styled-components'
import { Pressable } from '../Pressable'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.div`
  display: none;
  @media (max-width: ${theme.breakpoints.mobileShell}) {
    display: grid;
    flex: 1 1 auto;
    min-height: 0;
    gap: ${theme.spacing[3]};
    overflow-y: auto;
    overscroll-behavior-y: contain;
  }
`

export const Card = styled.section`
  display: grid;
  gap: ${theme.spacing[3]};
  padding: ${theme.spacing[4]};
  border: 1px solid ${theme.colors.border.subtle};
  border-radius: ${theme.radius.card};
  background: ${theme.colors.palette.white};
`

export const Header = styled.header`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${theme.spacing[3]};
  > h2 {
    margin: 0;
    font-size: ${theme.typography.fontSize.md};
    font-weight: ${theme.typography.fontWeight.bold};
  }
  > span {
    flex-shrink: 0;
    color: ${theme.colors.text.muted};
    font-size: ${theme.typography.fontSize.xs};
  }
`

export const Stack = styled.div`
  display: grid;
  gap: ${theme.spacing[2]};
`

export const Event = styled(Pressable)`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: ${theme.spacing[3]};
  min-height: 3.25rem;
  padding: ${theme.spacing[3]};
  border: 1px solid ${theme.colors.border.subtle};
  border-radius: ${theme.radius.control};
  color: ${theme.colors.text.primary};
  background: ${theme.colors.palette.neutral[200]};
  text-align: left;
  &:focus-visible {
    outline: 3px solid ${theme.semantic.foreground.brand};
    outline-offset: 2px;
  }
  &[data-tone='success'] {
    background: ${theme.semantic.status.success.background};
    color: ${theme.semantic.status.success.foreground};
  }
  &[data-tone='muted'] {
    color: ${theme.colors.text.muted};
  }
  > span {
    font-variant-numeric: tabular-nums;
    font-size: ${theme.typography.fontSize.xs};
    font-weight: ${theme.typography.fontWeight.bold};
  }
  strong {
    display: block;
    overflow-wrap: anywhere;
    font-size: ${theme.typography.fontSize.sm};
  }
  small {
    color: inherit;
    font-size: ${theme.typography.fontSize.xs};
  }
`

export const Slot = styled(Pressable)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing[2]};
  min-height: 2.75rem;
  padding: ${theme.spacing[2]} ${theme.spacing[3]};
  border: 1px solid ${theme.colors.border.subtle};
  border-radius: ${theme.radius.control};
  background: ${theme.colors.palette.white};
  color: ${theme.colors.text.primary};
  text-align: left;
  font-size: ${theme.typography.fontSize.xs};
  &:focus-visible {
    outline: 3px solid ${theme.semantic.foreground.brand};
    outline-offset: 2px;
  }
  &[data-state='blocked'] {
    color: ${theme.colors.palette.white};
    background: ${theme.colors.text.primary};
  }
  &[data-state='unavailable'] {
    color: ${theme.colors.text.muted};
    background: ${theme.colors.palette.neutral[100]};
  }
`

export const More = styled(Pressable)`
  justify-self: start;
  min-height: 2.75rem;
  border: 0;
  background: transparent;
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.semibold};
  &:focus-visible {
    outline: 3px solid ${theme.semantic.foreground.brand};
  }
`

export const Empty = styled.span`
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.sm};
`
