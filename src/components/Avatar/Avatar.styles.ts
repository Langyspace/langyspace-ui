import { css, styled } from 'styled-components'
import type { AvatarSize, AvatarTone } from './Avatar.types'
import { theme } from '../../foundations/theme/theme'

const sizeStyles = {
  xs: css`
    width: 1.5rem;
    height: 1.5rem;
    font-size: ${theme.typography.fontSize['2xs']};
  `,
  sm: css`
    width: 2rem;
    height: 2rem;
    font-size: ${theme.typography.fontSize.xs};
  `,
  md: css`
    width: 2.5rem;
    height: 2.5rem;
    font-size: ${theme.typography.fontSize.sm};
  `,
  lg: css`
    width: 3.5rem;
    height: 3.5rem;
    font-size: ${theme.typography.fontSize.lg};
  `,
  xl: css`
    width: 4rem;
    height: 4rem;
    font-size: ${theme.typography.fontSize.xl};
  `,
} satisfies Record<AvatarSize, ReturnType<typeof css>>

const toneStyles = {
  neutral: css`
    border-color: ${theme.semantic.border.default};
    color: ${theme.colors.text.primary};
    background: ${theme.semantic.background.muted};
  `,
  brand: css`
    border-color: transparent;
    color: ${theme.semantic.status.brand.foreground};
    background: ${theme.semantic.status.brand.background};
  `,
  inverse: css`
    border-color: transparent;
    color: ${theme.colors.palette.white};
    background: ${theme.colors.palette.neutral[900]};
  `,
} satisfies Record<AvatarTone, ReturnType<typeof css>>

export const Avatar = styled.span.withConfig({
  componentId: 'lsui-sc-avatar',
})<{
  $size: AvatarSize
  $tone: AvatarTone
}>`
  position: relative;
  display: inline-flex;
  box-sizing: border-box;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-width: 1px;
  border-style: solid;
  border-radius: ${theme.radius.pill};
  font-weight: ${theme.typography.fontWeight.bold};
  line-height: 1;
  white-space: nowrap;

  ${({ $size }) => sizeStyles[$size]}
  ${({ $tone }) => toneStyles[$tone]}
`

export const Image = styled.img`
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
