import { styled } from 'styled-components'
import { Pressable } from '../../../primitives/Pressable'
import { tokens } from '../../../foundations/tokens'

export const Root = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: grid;
    flex: 1 1 auto;
    min-height: 0;
    gap: ${tokens.spacing[3]};
    overflow-y: auto;
    overscroll-behavior-y: contain;
  }
`

export const Card = styled.section`
  display: grid;
  gap: ${tokens.spacing[3]};
  padding: ${tokens.spacing[4]};
  border: 1px solid ${tokens.color.surfaceBorder.subtle};
  border-radius: ${tokens.radius.card};
  background: ${tokens.color.neutral[0]};
`

export const Header = styled.header`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${tokens.spacing[3]};
  > h2 {
    margin: 0;
    font-size: ${tokens.typography.fontSize.md};
    font-weight: ${tokens.typography.fontWeight.bold};
  }
  > span {
    flex-shrink: 0;
    color: ${tokens.color.content.muted};
    font-size: ${tokens.typography.fontSize.xs};
  }
`

export const Stack = styled.div`
  display: grid;
  gap: ${tokens.spacing[2]};
`

export const Event = styled(Pressable)`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: ${tokens.spacing[3]};
  min-height: 3.25rem;
  padding: ${tokens.spacing[3]};
  border: 1px solid ${tokens.color.surfaceBorder.subtle};
  border-radius: ${tokens.radius.control};
  color: ${tokens.color.content.default};
  background: ${tokens.color.neutral[100]};
  text-align: left;
  &:focus-visible {
    outline: 3px solid ${tokens.color.brand.default};
    outline-offset: 2px;
  }
  &[data-tone='success'] {
    background: ${tokens.color.status.success.background};
    color: ${tokens.color.status.success.foreground};
  }
  &[data-tone='muted'] {
    color: ${tokens.color.content.muted};
  }
  > span {
    font-variant-numeric: tabular-nums;
    font-size: ${tokens.typography.fontSize.xs};
    font-weight: ${tokens.typography.fontWeight.bold};
  }
  strong {
    display: block;
    overflow-wrap: anywhere;
    font-size: ${tokens.typography.fontSize.sm};
  }
  small {
    color: inherit;
    font-size: ${tokens.typography.fontSize.xs};
  }
`

export const Slot = styled(Pressable)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${tokens.spacing[2]};
  min-height: 2.75rem;
  padding: ${tokens.spacing[2]} ${tokens.spacing[3]};
  border: 1px solid ${tokens.color.surfaceBorder.subtle};
  border-radius: ${tokens.radius.control};
  background: ${tokens.color.neutral[0]};
  color: ${tokens.color.content.default};
  text-align: left;
  font-size: ${tokens.typography.fontSize.xs};
  &:focus-visible {
    outline: 3px solid ${tokens.color.brand.default};
    outline-offset: 2px;
  }
  &[data-state='blocked'] {
    color: ${tokens.color.neutral[0]};
    background: ${tokens.color.content.default};
  }
  &[data-state='unavailable'] {
    color: ${tokens.color.content.muted};
    background: ${tokens.color.neutral[50]};
  }
`

export const More = styled(Pressable)`
  justify-self: start;
  min-height: 2.75rem;
  border: 0;
  background: transparent;
  color: ${tokens.color.content.muted};
  font-size: ${tokens.typography.fontSize.xs};
  font-weight: ${tokens.typography.fontWeight.semibold};
  &:focus-visible {
    outline: 3px solid ${tokens.color.brand.default};
  }
`

export const Empty = styled.span`
  color: ${tokens.color.content.muted};
  font-size: ${tokens.typography.fontSize.sm};
`
