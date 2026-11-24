import { useState } from 'react'
import { BackIcon, FlipHintIcon } from '../../internal/PracticeSession/BackIcon'
import { FlashcardProgress } from './FlashcardProgress'
import { FlashcardStage } from './FlashcardStage'
import { FlashcardDeck } from './FlashcardDeck'
import { FlashcardGhost } from './FlashcardGhost'
import { FlashcardSwiper } from './FlashcardSwiper'
import { FlashcardFlip } from './FlashcardFlip'
import { FlashcardFace } from './FlashcardFace'
import { FlashcardFront } from './FlashcardFront'
import { FlashcardBack } from './FlashcardBack'
import { FlashcardImagePanel } from './FlashcardImagePanel'
import { FlashcardWord } from './FlashcardWord'
import { FlashcardAudioButton } from './FlashcardAudioButton'
import { FlashcardFlipButton } from './FlashcardFlipButton'
import { FlashcardFlipHint } from './FlashcardFlipHint'
import { FlashcardRatingButton } from './FlashcardRatingButton'
import type { FlashcardSessionProps } from './FlashcardSession.types'
import * as S from './FlashcardSession.styles'

/** The Student session renderer. Products supply controlled data, audio and review actions. */
export function FlashcardSession({
  progress,
  backAction,
  card,
  flipped = false,
  onFlip,
  flipButtonRef,
  audio,
  labels,
  ratings,
  onRate,
  selectedGrade,
  firstRatingRef,
  disabled = false,
  ratingDisabled = false,
  exit,
  obscured,
  feedback,
  children,
  ...props
}: FlashcardSessionProps) {
  const [failedImage, setFailedImage] = useState<string>()
  const imageKey = card?.image ? `${card.id}:${card.image.src}` : undefined
  const showImage = card?.image && failedImage !== imageKey
  return (
    <S.Root {...props} layout="session" data-ui-flashcard-session="true">
      <S.Header>
        <S.BackButton
          aria-label={backAction.label}
          onClick={backAction.onClick}
          type="button"
        >
          <BackIcon />
        </S.BackButton>
        <FlashcardProgress {...progress} />
      </S.Header>
      {card && (
        <>
          <FlashcardStage>
            <FlashcardDeck>
              <FlashcardGhost
                layer={2}
                obscured={obscured ?? (flipped || Boolean(exit || feedback))}
                aria-hidden="true"
              />
              <FlashcardGhost
                layer={1}
                obscured={obscured ?? (flipped || Boolean(exit || feedback))}
                aria-hidden="true"
              />
              <FlashcardSwiper
                key={card.id}
                exit={exit}
                aria-disabled={disabled || undefined}
              >
                <FlashcardFlip flipped={flipped}>
                  <FlashcardFace side="front">
                    <FlashcardFront>
                      <FlashcardFlipButton
                        ref={flipButtonRef}
                        label={labels.flip}
                        onClick={onFlip}
                        disabled={disabled}
                      />
                      <FlashcardImagePanel
                        emoji={!showImage ? (card.emoji ?? '💬') : undefined}
                      >
                        {showImage && (
                          <S.Picture
                            src={card.image!.src}
                            alt={card.image!.alt ?? ''}
                            aria-hidden={!card.image!.alt || undefined}
                            onError={() => setFailedImage(imageKey)}
                          />
                        )}
                        {audio && (
                          <FlashcardAudioButton
                            label={audio.label}
                            playing={audio.playing}
                            onClick={audio.onFrontPlay}
                            disabled={disabled}
                          />
                        )}
                      </FlashcardImagePanel>
                      <FlashcardWord
                        phonetic={card.phonetic}
                        example={card.example}
                      >
                        {card.word}
                      </FlashcardWord>
                      <FlashcardFlipHint aria-hidden="true">
                        <FlipHintIcon />
                        {labels.flipHint}
                      </FlashcardFlipHint>
                    </FlashcardFront>
                  </FlashcardFace>
                  <FlashcardFace side="back">
                    {flipped && (
                      <FlashcardBack
                        term={
                          <>
                            {audio && (
                              <FlashcardAudioButton
                                placement="term"
                                label={audio.label}
                                playing={audio.playing}
                                onClick={audio.onBackPlay}
                                disabled={disabled}
                              />
                            )}
                            {card.word}
                          </>
                        }
                        phonetic={card.phonetic}
                        translation={card.translation}
                        example={card.backExample}
                      />
                    )}
                  </FlashcardFace>
                </FlashcardFlip>
              </FlashcardSwiper>
              {feedback}
            </FlashcardDeck>
          </FlashcardStage>
          {flipped && ratings && (
            <S.Footer>
              <S.RateQuestion>{labels.rateQuestion}</S.RateQuestion>
              <S.RateRow>
                {ratings.map((rating, index) => (
                  <FlashcardRatingButton
                    key={rating.grade}
                    ref={index === 0 ? firstRatingRef : undefined}
                    grade={rating.grade}
                    selected={selectedGrade === rating.grade}
                    interval={rating.interval}
                    aria-label={rating.ariaLabel}
                    disabled={disabled || ratingDisabled}
                    onClick={() => onRate?.(rating.grade)}
                    type="button"
                  >
                    {rating.label}
                  </FlashcardRatingButton>
                ))}
              </S.RateRow>
            </S.Footer>
          )}
        </>
      )}
      {children}
    </S.Root>
  )
}
