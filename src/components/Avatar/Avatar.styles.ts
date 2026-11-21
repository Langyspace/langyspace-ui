import { resolveTheme } from '../../foundations/theme/resolveTheme'
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

/** Shared portrait/name identity for dialogue, contacts and compact participant rows. */
export const Identity = styled.span<{ $position: 'below' | 'beside' }>`
  display: inline-flex;
  flex-direction: ${(p) => (p.$position === 'below' ? 'column' : 'row')};
  align-items: center;
  flex-shrink: 0;
  gap: ${theme.spacing[1]};
  font-family: ${theme.typography.fontFamily.sans};
`
export const IdentityText = styled.span<{ $position: 'below' | 'beside' }>`
  display: grid;
  min-width: 0;
  max-width: ${theme.spacing[32]};
  gap: ${theme.spacing[1]};
  text-align: ${(p) => (p.$position === 'below' ? 'center' : 'left')};
`
export const Name = styled.span<{ $tone: AvatarTone; $inherit?: boolean }>`
  color: ${(p) => (p.$inherit ? 'inherit' : p.$tone === 'inverse' ? theme.colors.palette.white : (resolveTheme(p).colors?.text.primary ?? theme.colors.text.primary))};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.semibold};
  line-height: 1.35;
  overflow-wrap: anywhere;
`
export const Description = styled.span<{ $inherit?: boolean }>`
  color: ${(p) => (p.$inherit ? 'inherit' : (resolveTheme(p).colors?.text.secondary ?? theme.colors.text.secondary))};
  font-size: ${theme.typography.fontSize['2xs']};
  font-weight: ${theme.typography.fontWeight.medium};
  line-height: 1.3;
`
