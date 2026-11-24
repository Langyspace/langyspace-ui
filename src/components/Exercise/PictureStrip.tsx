import { PictureImage } from '../../internal/PictureImage'
import * as S from './PictureStrip.styles'
import type { PictureStripProps } from './PictureStrip.types'

/** Consecutive visual prompts with authored captions; no implicit answer or grading. */
export function PictureStrip({
  items,
  density = 'regular',
  ...props
}: PictureStripProps) {
  return (
    <S.Root
      {...props}
      $compact={density === 'compact'}
      $count={Math.max(1, Math.min(3, items.length))}
    >
      {items.map((item) => (
        <S.Figure key={item.id}>
          <PictureImage src={item.src} alt={item.alt} region={item.region} />
          <S.Caption>{item.caption}</S.Caption>
        </S.Figure>
      ))}
    </S.Root>
  )
}
