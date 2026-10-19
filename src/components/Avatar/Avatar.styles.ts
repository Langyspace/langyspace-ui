import { css, styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
import type { AvatarSize, AvatarTone } from './Avatar'

const sizeStyles = {
  xs: css`
    width: 1.5rem;
    height: 1.5rem;
    font-size: ${token.typographyFontSize2xs};
  `,
  sm: css`
    width: 2rem;
    height: 2rem;
    font-size: ${token.typographyFontSizeXs};
  `,
  md: css`
    width: 2.5rem;
    height: 2.5rem;
    font-size: ${token.typographyFontSizeSm};
  `,
  lg: css`
    width: 3.5rem;
    height: 3.5rem;
    font-size: ${token.typographyFontSizeLg};
  `,
  xl: css`
    width: 4rem;
    height: 4rem;
    font-size: ${token.typographyFontSizeXl};
  `,
} satisfies Record<AvatarSize, ReturnType<typeof css>>

const toneStyles = {
  neutral: css`
    border-color: ${token.colorSurfaceBorderDefault};
    color: ${token.colorContentDefault};
    background: ${token.colorSurfaceMuted};
  `,
  brand: css`
    border-color: transparent;
    color: ${token.colorStatusBrandForeground};
    background: ${token.colorStatusBrandBackground};
  `,
  inverse: css`
    border-color: transparent;
    color: ${token.colorNeutral0};
    background: ${token.colorNeutral950};
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
  border-radius: ${token.radiusPill};
  font-weight: ${token.typographyFontWeightBold};
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
