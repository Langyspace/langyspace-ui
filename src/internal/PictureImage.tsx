import * as S from './PictureImage.styles'
import type { PictureImageProps } from './PictureImage.types'

/** A viewport over an unchanged source atlas. No new bitmap is produced. */
export function PictureImage({ src, alt, region }: PictureImageProps) {
  const valid =
    region &&
    [region.columns, region.rows, region.column, region.row].every(
      Number.isInteger,
    ) &&
    region.columns > 0 &&
    region.rows > 0 &&
    region.column >= 0 &&
    region.row >= 0 &&
    region.column < region.columns &&
    region.row < region.rows &&
    Number.isFinite(region.sourceAspectRatio) &&
    region.sourceAspectRatio > 0
  return region && valid ? (
    <S.Region
      $src={src}
      $region={region}
      role={alt ? 'img' : undefined}
      aria-label={alt || undefined}
      aria-hidden={!alt || undefined}
    />
  ) : (
    <S.Image src={src} alt={alt} draggable={false} />
  )
}
