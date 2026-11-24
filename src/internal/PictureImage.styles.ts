import { styled } from 'styled-components'
import type { PictureRegion } from './PictureImage.types'

export const Region = styled.div<{ $src: string; $region: PictureRegion }>`
  width: 100%;
  aspect-ratio: ${(p) => (p.$region.sourceAspectRatio * p.$region.rows) / p.$region.columns};
  background-image: ${(p) => `url(${JSON.stringify(p.$src)})`};
  background-repeat: no-repeat;
  background-size: ${(p) => `${p.$region.columns * 100}% ${p.$region.rows * 100}%`};
  background-position: ${(p) => `${p.$region.columns > 1 ? (p.$region.column / (p.$region.columns - 1)) * 100 : 0}% ${p.$region.rows > 1 ? (p.$region.row / (p.$region.rows - 1)) * 100 : 0}%`};
`
export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
`
