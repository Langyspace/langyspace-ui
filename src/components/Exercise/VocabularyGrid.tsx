import { VocabularyControls } from './VocabularyControls'
import { useState } from 'react'
import { PictureImage } from '../../internal/PictureImage'
import * as Styled from './VocabularyGrid.styles'
import { formatVocabularyHint } from './VocabularyGrid.utils'
import type { VocabularyGridProps } from './VocabularyGrid.types'
export function VocabularyGrid({
  items,
  controls,
  surface = 'card',
  interaction = 'reveal',
  layout = 'cards',
  revealedIds,
  onReveal,
  onPlay,
  showAll = false,
  showInitial = false,
  revealOnHover = false,
  imageVariant = 'isolated',
  imageFit,
  imageAspectRatio,
  columns,
  density = 'compact',
  revealVariant = 'overlay',
  revealLabel = 'Mostrar palavra',
  playLabel = 'Listen to',
  activeId,
  markRevealed = false,
  ...props
}: VocabularyGridProps) {
  const [hovered, setHovered] = useState<string>()
  return (
    <Styled.VocabularySection>
      <Styled.Vocabulary
        {...props}
        $native={items.some((item) => item.visual !== undefined)}
        $columns={columns}
        $reference={layout === 'reference'}
        $regularScene={imageVariant === 'scene' && density === 'regular'}
      >
        {items.map((item, index) => {
          const revealed =
            interaction === 'static' ||
            showAll ||
            (interaction !== 'listen' &&
              (revealedIds.includes(item.id) ||
                (revealOnHover && hovered === item.id)))
          const showLabel =
            interaction === 'static'
              ? true
              : revealVariant === 'overlay'
                ? revealed
                : activeId !== undefined
                  ? activeId === item.id && revealed
                  : hovered === item.id && (revealOnHover || revealed)
          const hint = item.initialHint ?? formatVocabularyHint(item.word)
          const showChip =
            showLabel ||
            (revealVariant === 'tooltip' &&
              (showAll ||
                (activeId === undefined && revealedIds.includes(item.id)) ||
                (showInitial && !revealed)))
          const preview = () => {
            if (
              interaction === 'reveal' &&
              revealOnHover &&
              !showAll &&
              !revealedIds.includes(item.id)
            )
              setHovered(item.id)
          }
          return (
            <Styled.Word
              as={interaction === 'static' ? 'figure' : 'button'}
              $native={item.visual !== undefined}
              $static={interaction === 'static'}
              $symbol={item.symbol !== undefined}
              $reference={layout === 'reference'}
              $plain={surface === 'plain'}
              $completed={markRevealed && revealedIds.includes(item.id)}
              $scene={imageVariant === 'scene'}
              $regular={density === 'regular'}
              $imageAspectRatio={imageAspectRatio}
              key={item.id}
              type={interaction === 'static' ? undefined : 'button'}
              aria-label={
                interaction === 'listen'
                  ? `${playLabel} ${item.imageAlt}${showAll ? `: ${item.word}` : ''}`
                  : revealed
                    ? item.translation
                      ? `${item.word}: ${item.translation}`
                      : item.word
                    : `${revealLabel} ${index + 1}: ${item.imageAlt}`
              }
              aria-expanded={
                interaction !== 'reveal'
                  ? undefined
                  : activeId !== undefined && revealVariant === 'tooltip'
                    ? showAll || (activeId === item.id && revealed)
                    : revealed
              }
              onPointerEnter={interaction === 'static' ? undefined : preview}
              onPointerLeave={() => {
                setHovered(undefined)
              }}
              onFocus={interaction === 'static' ? undefined : preview}
              onBlur={() => {
                setHovered(undefined)
              }}
              onClick={
                interaction === 'static'
                  ? undefined
                  : () => {
                      if (interaction === 'reveal') onReveal?.(item.id)
                      onPlay?.(item.id)
                    }
              }
            >
              {item.visual ? (
                <Styled.WordVisual>{item.visual}</Styled.WordVisual>
              ) : item.symbol !== undefined ? (
                <Styled.WordSymbol aria-hidden="true">
                  {item.symbol}
                </Styled.WordSymbol>
              ) : item.imageRegion && item.imageUrl ? (
                <Styled.WordImageRegion
                  $scene={imageVariant === 'scene'}
                  $regular={density === 'regular'}
                  $aspect={
                    (item.imageRegion.sourceAspectRatio *
                      item.imageRegion.rows *
                      (item.imageRegion.columnSpan ?? 1)) /
                    (item.imageRegion.columns * (item.imageRegion.rowSpan ?? 1))
                  }
                  aria-hidden="true"
                >
                  <PictureImage
                    src={item.imageUrl}
                    alt=""
                    region={item.imageRegion}
                  />
                </Styled.WordImageRegion>
              ) : (
                <Styled.WordImage
                  $fit={imageFit}
                  $scene={imageVariant === 'scene'}
                  $regular={density === 'regular'}
                  src={item.imageUrl}
                  alt=""
                />
              )}
              {item.badge ? (
                <Styled.WordBadge $position={item.badgePosition}>
                  {item.badge}
                </Styled.WordBadge>
              ) : null}
              {(interaction === 'reveal' && revealVariant === 'overlay') ||
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
              {showChip ? (
                <Styled.WordLabel
                  $native={item.visual !== undefined}
                  $revealed={revealed}
                  $reference={layout === 'reference'}
                  $hasExample={revealed && Boolean(item.example)}
                >
                  <b>{revealed ? item.word : hint}</b>
                  {revealed && item.example ? (
                    <Styled.WordExample>{item.example}</Styled.WordExample>
                  ) : null}
                  <small>{item.translation}</small>
                </Styled.WordLabel>
              ) : null}
            </Styled.Word>
          )
        })}
      </Styled.Vocabulary>
      {controls ? <VocabularyControls {...controls} /> : null}
    </Styled.VocabularySection>
  )
}
