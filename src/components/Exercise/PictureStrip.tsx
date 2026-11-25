import { PictureImage } from '../../internal/PictureImage'
import * as S from './PictureStrip.styles'
import type { PictureStripProps } from './PictureStrip.types'

/** Consecutive visual prompts with authored captions; no implicit answer or grading. */
export function PictureStrip({ items, ...props }: PictureStripProps) {
  return (
    <S.Root {...props} $count={Math.max(1, Math.min(3, items.length))}>
      {items.map((item) => (
        <S.Figure key={item.id}>
          <S.Media>
            <PictureImage src={item.src} alt={item.alt} region={item.region} />
            {item.imageBadge ? (
              <S.Badge src={item.imageBadge.src} alt={item.imageBadge.alt} />
            ) : null}
          </S.Media>
          <S.Caption>{item.caption}</S.Caption>
        </S.Figure>
      ))}
    </S.Root>
  )
}
