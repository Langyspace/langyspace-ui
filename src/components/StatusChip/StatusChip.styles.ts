import { css, styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
import type { StatusChipSize, StatusChipTone } from './StatusChip'

const sizeStyles = {
  md: css`
    font-size: ${token.typographyFontSizeXs};
  `,
  sm: css`
    font-size: ${token.typographyFontSize2xs};
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
  padding: ${token.spacing1} 0.625rem;
  border-radius: ${token.radiusPill};
  color: ${({ $tone }) => token.colorStatus[$tone].foreground};
  background: ${({ $tone }) => token.colorStatus[$tone].background};
  font-weight: ${token.typographyFontWeightSemibold};
  line-height: ${token.typographyLineHeightSnug};
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
  border-radius: ${token.radiusPill};
  background: ${({ $tone }) => token.colorStatus[$tone].indicator};
`
