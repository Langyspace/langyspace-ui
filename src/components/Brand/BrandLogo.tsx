import horizontal from '../../assets/brand/horizontal.svg'
import horizontalInverse from '../../assets/brand/horizontal-inverse.svg'
import stacked from '../../assets/brand/stacked.svg'
import stackedInverse from '../../assets/brand/stacked-inverse.svg'

import type { ComponentPropsWithRef } from 'react'

import { styled } from 'styled-components'

const Root = styled.img.withConfig({
  componentId: 'lsui-sc-brand-logo',
})`
  display: block;
  height: auto;
`

export type BrandLogoAppearance = 'default' | 'inverse'

export type BrandLogoOrientation = 'horizontal' | 'stacked'

export interface BrandLogoProps extends Omit<
  ComponentPropsWithRef<'img'>,
  'src' | 'children'
> {
  appearance?: BrandLogoAppearance
  orientation?: BrandLogoOrientation
}

const sources = {
  horizontal: { default: horizontal, inverse: horizontalInverse },
  stacked: { default: stacked, inverse: stackedInverse },
}

export function BrandLogo({
  appearance = 'default',
  orientation = 'horizontal',
  alt = 'Langy.space',
  ...props
}: BrandLogoProps) {
  return <Root {...props} alt={alt} src={sources[orientation][appearance]} />
}
