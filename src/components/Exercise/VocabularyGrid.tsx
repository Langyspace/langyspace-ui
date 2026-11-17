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
  imageFit,
  columns,
  density = 'compact',
  revealVariant = 'overlay',
  revealLabel = 'Mostrar palavra',
  activeId,
  markRevealed = false,
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
            $completed={markRevealed && revealedIds.includes(item.id)}
            $scene={imageVariant === 'scene'}
            $regular={density === 'regular'}
            key={item.id}
            type="button"
            aria-label={
              revealed
                ? `${item.word}: ${item.translation}`
                : `${revealLabel} ${index + 1}: ${item.imageAlt}`
            }
            aria-expanded={
              activeId !== undefined && revealVariant === 'tooltip'
                ? showAll || (activeId === item.id && revealed)
                : revealed
            }
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
              $fit={imageFit}
              $scene={imageVariant === 'scene'}
              $regular={density === 'regular'}
              src={item.imageUrl}
              alt=""
            />
            {item.badge ? (
              <Styled.WordBadge>{item.badge}</Styled.WordBadge>
            ) : null}
            {revealVariant === 'overlay' ||
            (markRevealed && revealedIds.includes(item.id)) ? (
              <Styled.QuestionMark
                $completed={markRevealed && revealedIds.includes(item.id)}
                aria-hidden="true"
              >
                {markRevealed && revealedIds.includes(item.id)
                  ? '✓'
                  : showInitial && !revealed
                    ? (item.initialHint ?? item.word[0])
                    : '?'}
              </Styled.QuestionMark>
            ) : null}
            {revealVariant === 'tooltip' &&
            (showAll ||
              (activeId === undefined && revealedIds.includes(item.id)) ||
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
                : activeId !== undefined
                  ? activeId === item.id && revealed
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
