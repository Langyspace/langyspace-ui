import { useState } from 'react'
import * as Styled from './VocabularyGrid.styles'
import type { VocabularyGridProps } from './VocabularyGrid.types'
export function VocabularyGrid({
  items,
  revealedIds,
  onReveal,
  onPlay,
  showAll = false,
  showInitial = false,
  revealOnHover = true,
  imageVariant = 'isolated',
  columns,
  density = 'compact',
  revealVariant = 'overlay',
  revealLabel = 'Mostrar palavra',
  ...props
}: VocabularyGridProps) {
  const [hovered, setHovered] = useState<string>()
  return (
    <Styled.Vocabulary
      {...props}
      $columns={columns}
      $regularScene={imageVariant === 'scene' && density === 'regular'}
    >
      {items.map((item, index) => {
        const revealed =
          showAll ||
          revealedIds.includes(item.id) ||
          (revealOnHover && hovered === item.id)
        return (
          <Styled.Word
            $scene={imageVariant === 'scene'}
            $regular={density === 'regular'}
            key={item.id}
            type="button"
            aria-label={
              revealed
                ? `${item.word}: ${item.translation}`
                : `${revealLabel} ${index + 1}: ${item.imageAlt}`
            }
            aria-expanded={revealed}
            onPointerEnter={() => {
              setHovered(item.id)
            }}
            onPointerLeave={() => {
              setHovered(undefined)
            }}
            onFocus={() => {
              setHovered(item.id)
            }}
            onBlur={() => {
              setHovered(undefined)
            }}
            onClick={() => {
              onReveal(item.id)
              onPlay?.(item.id)
            }}
          >
            <Styled.WordImage
              $scene={imageVariant === 'scene'}
              $regular={density === 'regular'}
              src={item.imageUrl}
              alt=""
            />
            {revealVariant === 'overlay' ? (
              <Styled.QuestionMark aria-hidden="true">
                {showInitial && !revealed
                  ? (item.initialHint ?? item.word[0])
                  : '?'}
              </Styled.QuestionMark>
            ) : null}
            {revealVariant === 'tooltip' &&
            (showAll ||
              revealedIds.includes(item.id) ||
              (showInitial && !revealed)) ? (
              <Styled.WordCaption>
                {showAll || revealedIds.includes(item.id)
                  ? item.word
                  : (item.initialHint ?? item.word[0])}
              </Styled.WordCaption>
            ) : null}
            {(
              revealVariant === 'overlay'
                ? revealed
                : hovered === item.id && (revealOnHover || revealed)
            ) ? (
              <Styled.WordLabel $floating={revealVariant === 'tooltip'}>
                <b>{item.word}</b>
                <small>{item.translation}</small>
              </Styled.WordLabel>
            ) : null}
          </Styled.Word>
        )
      })}
    </Styled.Vocabulary>
  )
}
