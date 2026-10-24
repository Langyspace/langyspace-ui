import horizontal from '../../assets/brand/horizontal.svg'
import horizontalInverse from '../../assets/brand/horizontal-inverse.svg'
import stacked from '../../assets/brand/stacked.svg'
import stackedInverse from '../../assets/brand/stacked-inverse.svg'
import type { BrandLogoProps } from './BrandLogo.types'
import * as Styled from './BrandLogo.styles'

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
  return (
    <Styled.Root {...props} alt={alt} src={sources[orientation][appearance]} />
  )
}
