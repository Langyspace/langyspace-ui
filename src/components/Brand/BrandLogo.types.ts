import type { ComponentPropsWithRef } from 'react'

export type BrandLogoAppearance = 'default' | 'inverse'

export type BrandLogoOrientation = 'horizontal' | 'stacked'

export interface BrandLogoProps extends Omit<
  ComponentPropsWithRef<'img'>,
  'src' | 'children'
> {
  appearance?: BrandLogoAppearance
  orientation?: BrandLogoOrientation
}
