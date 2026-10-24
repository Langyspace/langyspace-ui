import { css, styled } from 'styled-components'
import { Pressable } from '../Pressable'
import type { FilterPillsOverflow, FilterPillsSize } from './FilterPills.types'
import { theme } from '../../foundations/theme/theme'

const sizeStyles = {
  md: css`
    min-height: ${theme.sizes.control.md};
    padding-right: ${theme.spacing[4]};
    padding-left: ${theme.spacing[4]};
    font-size: ${theme.typography.fontSize.sm};
    font-weight: ${theme.typography.fontWeight.bold};
  `,
  sm: css`
    min-height: ${theme.sizes.control.sm};
    padding-right: ${theme.spacing[3]};
    padding-left: ${theme.spacing[3]};
    font-size: ${theme.typography.fontSize.xs};
    font-weight: ${theme.typography.fontWeight.medium};
  `,
} satisfies Record<FilterPillsSize, ReturnType<typeof css>>

export const Group = styled.div.withConfig({
  componentId: 'lsui-sc-filter-pills',
})<{ $overflow: FilterPillsOverflow }>`
  display: flex;
  width: 100%;
  min-width: 0;
  flex-wrap: ${({ $overflow }) => ($overflow === 'wrap' ? 'wrap' : 'nowrap')};
  gap: ${theme.spacing[2]};
  overflow-x: ${({ $overflow }) => ($overflow === 'scroll' ? 'auto' : 'visible')};
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Item = styled(Pressable)<{
  $active: boolean
  $size: FilterPillsSize
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  gap: ${theme.spacing[2]};
  border: 1px solid
    ${({ $active }) =>
      $active ? theme.colors.text.primary : theme.semantic.border.default};
  border-radius: ${theme.radius.pill};
  color: ${({ $active }) =>
    $active ? theme.colors.palette.white : theme.colors.text.secondary};
  background: ${({ $active }) =>
    $active ? theme.colors.text.primary : theme.colors.palette.white};
  white-space: nowrap;
  transition:
    color ${theme.transitions.duration.fast}
      ${theme.transitions.easing.standard},
    background-color ${theme.transitions.duration.fast}
      ${theme.transitions.easing.standard},
    border-color ${theme.transitions.duration.fast}
      ${theme.transitions.easing.standard};

  ${({ $size }) => sizeStyles[$size]}

  &:hover:not(:disabled) {
    border-color: ${theme.semantic.border.strong};
  }

  &:focus-visible {
    outline: none;
    box-shadow: ${theme.shadows.focusHalo};
  }

  &:disabled {
    opacity: 0.55;
    cursor: default;
  }
`

export const Count = styled.span`
  min-width: 1.375rem;
  border-radius: ${theme.radius.pill};
  background: ${theme.semantic.inverse.surface};
  color: inherit;
  font-size: ${theme.typography.fontSize['2xs']};
  line-height: 1;
  padding: ${theme.spacing[1]} 0.4375rem;
  text-align: center;
`
