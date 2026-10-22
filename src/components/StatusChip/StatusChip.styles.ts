import { css, styled } from 'styled-components'
import type { StatusChipSize, StatusChipTone } from './StatusChip.types'
import { theme } from '../../foundations/theme/theme'

const sizeStyles = {
  md: css`
    font-size: ${theme.typography.fontSize.xs};
  `,
  sm: css`
    font-size: ${theme.typography.fontSize['2xs']};
  `,
} satisfies Record<StatusChipSize, ReturnType<typeof css>>

export const Chip = styled.span.withConfig({
  componentId: 'lsui-sc-status-chip',
})<{
  $size: StatusChipSize
  $tone: StatusChipTone
}>`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  max-width: 100%;
  gap: 0.375rem;
  padding: ${theme.spacing[1]} 0.625rem;
  border-radius: ${theme.radius.pill};
  color: ${({ $tone }) => theme.semantic.status[$tone].foreground};
  background: ${({ $tone }) => theme.semantic.status[$tone].background};
  font-weight: ${theme.typography.fontWeight.semibold};
  line-height: ${theme.typography.lineHeight.snug};
  white-space: nowrap;

  ${({ $size }) => sizeStyles[$size]}

  svg {
    flex-shrink: 0;
  }
`

export const Icon = styled.span`
  display: inline-flex;
  flex-shrink: 0;
`

export const Label = styled.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Indicator = styled.span<{ $tone: StatusChipTone }>`
  width: 0.375rem;
  height: 0.375rem;
  flex-shrink: 0;
  border-radius: ${theme.radius.pill};
  background: ${({ $tone }) => theme.semantic.status[$tone].indicator};
`
