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
  imageVariant = 'isolated',
  revealLabel = 'Mostrar palavra',
  ...props
}: VocabularyGridProps) {
  const [hovered, setHovered] = useState<string>()
  return (
    <Styled.Vocabulary {...props}>
      {items.map((item, index) => {
        const revealed =
          showAll || revealedIds.includes(item.id) || hovered === item.id
        return (
          <Styled.Word
            $scene={imageVariant === 'scene'}
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
              src={item.imageUrl}
              alt=""
            />
            <Styled.QuestionMark aria-hidden="true">
              {showInitial && !revealed ? item.word[0] : '?'}
            </Styled.QuestionMark>
            {revealed ? (
              <Styled.WordLabel>
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
