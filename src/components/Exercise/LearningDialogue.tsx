import { Avatar } from '../Avatar/Avatar'
import { VocabularyControls } from './VocabularyControls'
import { Fragment, useState } from 'react'
import * as Gap from './LearningDialogueGap.styles'
import { IconButton } from '../IconButton/IconButton'
import * as Styled from './LearningDialogue.styles'
import type {
  LearningDialogueActionProps,
  LearningDialogueProps,
} from './LearningDialogue.types'

function DialogueAction({
  content,
  completed,
  label,
  expanded,
  pressed,
  onActivate,
}: LearningDialogueActionProps) {
  const text = (
    <>
      {content}
      {completed ? <span aria-hidden="true"> ✓</span> : null}
    </>
  )
  const accessibility = {
    'aria-label': label,
    'aria-expanded': expanded,
    'aria-pressed': pressed,
  }
  if (typeof content === 'string' || typeof content === 'number')
    return (
      <Styled.Translate type="button" {...accessibility} onClick={onActivate}>
        {text}
      </Styled.Translate>
    )
  return (
    <Styled.RichTranslate
      role="button"
      tabIndex={0}
      {...accessibility}
      onClick={(event) => {
        const control = (event.target as Element).closest?.(
          'button, a, input, select, textarea, [role="button"]',
        )
        if (control && control !== event.currentTarget) return
        onActivate()
      }}
      onKeyDown={(event) => {
        if (event.target !== event.currentTarget) return
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onActivate()
        }
      }}
    >
      {text}
    </Styled.RichTranslate>
  )
}

export function LearningDialogue({
  lines,
  learnerIdentity,
  guidance,
  sequentialGuidance,
  density = 'regular',
  presentation = 'dialogue',
  speakerLabels = 'visible',
  translatedIds,
  playingId,
  onTranslate,
  onPlay,
  revealedGapIds = [],
  onRevealGap,
  completedIds,
  onComplete,
  ...props
}: LearningDialogueProps) {
  const [failedLearnerAvatar, setFailedLearnerAvatar] = useState<string>()
  const learnerName = learnerIdentity?.firstName.trim().split(/\s+/u)[0]
  const learnerPhoto = learnerIdentity?.avatarUrl.trim()
  const hasLearner = Boolean(
    learnerName && learnerPhoto && failedLearnerAvatar !== learnerPhoto,
  )
  const sequential = sequentialGuidance
  const levelGuidance = sequential ? undefined : guidance
  const supportedLines = lines.filter((line) => line.cue || line.hint)
  const nextHint =
    sequential &&
    supportedLines.find(
      (line) =>
        !sequential.hintedLineIds.includes(line.id) &&
        !sequential.revealedLineIds.includes(line.id),
    )
  const nextModel =
    sequential &&
    supportedLines.find((line) => !sequential.revealedLineIds.includes(line.id))
  const visibleHints =
    sequential &&
    supportedLines.some(
      (line) =>
        sequential.hintedLineIds.includes(line.id) &&
        !sequential.revealedLineIds.includes(line.id),
    )
  const modelLabel = nextModel
    ? `Show next model (${supportedLines.indexOf(nextModel) + 1}/${supportedLines.length})`
    : 'Hide models'
  const hintLabel = nextHint
    ? `Show next tip (${supportedLines.indexOf(nextHint) + 1}/${supportedLines.length})`
    : visibleHints
      ? 'Hide tips'
      : 'Models are already shown'
  const dialogue = (
    <Styled.Dialogue {...props} $paired={presentation === 'paired'}>
      {lines.map((line, index) => {
        const hasSupport = Boolean(
          (levelGuidance || sequential) && (line.cue || line.hint),
        )
        const inlineGuidance = hasSupport && levelGuidance?.placement === 'line'
        const level = sequential
          ? sequential.revealedLineIds.includes(line.id)
            ? 'full'
            : sequential.hintedLineIds.includes(line.id)
              ? 'hint'
              : 'cue'
          : inlineGuidance && levelGuidance?.activeLineId !== line.id
            ? 'cue'
            : (levelGuidance?.level ?? 'cue')
        const supportContext = line.guidanceLabel ?? line.speaker
        const isLearner = line.participant === 'learner'
        const speaker = isLearner
          ? hasLearner
            ? learnerName!
            : 'You'
          : line.speaker
        const avatarUrl = isLearner
          ? hasLearner
            ? learnerPhoto
            : undefined
          : line.avatarUrl
        const content =
          (levelGuidance || sequential) && (line.cue || line.hint) ? (
            <Styled.GuidedText>
              {(['cue', 'hint', 'full'] as const).map((layer) => (
                <Styled.GuidedLayer
                  key={layer}
                  $visible={level === layer}
                  aria-hidden={level !== layer}
                  inert={level !== layer}
                >
                  {layer === 'cue'
                    ? (line.cue ?? line.content)
                    : layer === 'hint'
                      ? (line.hint ?? line.content)
                      : line.content}
                </Styled.GuidedLayer>
              ))}
            </Styled.GuidedText>
          ) : line.parts ? (
            line.parts.map((part, index) =>
              typeof part === 'string' ? (
                <Fragment key={index}>{part}</Fragment>
              ) : (
                <Gap.DialogueGap
                  key={part.id}
                  type="button"
                  variant="text"
                  $revealed={revealedGapIds.includes(part.id)}
                  aria-expanded={revealedGapIds.includes(part.id)}
                  aria-label={`Reveal answer ${index + 1}`}
                  onClick={() => onRevealGap?.(part.id, line.id)}
                >
                  <Gap.DialogueGapAnswer
                    $revealed={revealedGapIds.includes(part.id)}
                  >
                    {part.answer}
                  </Gap.DialogueGapAnswer>
                </Gap.DialogueGap>
              ),
            )
          ) : (
            line.content
          )
        return (
          <Styled.DialogueLine
            key={line.id}
            $side={line.side}
            $exchangeStart={
              presentation === 'paired' && index > 0 && index % 2 === 0
            }
          >
            <Avatar
              size={density === 'compact' ? 'sm' : 'md'}
              imageUrl={avatarUrl}
              onImageError={isLearner ? setFailedLearnerAvatar : undefined}
              initials={
                isLearner
                  ? hasLearner
                    ? speaker.slice(0, 1)
                    : 'Yo'
                  : (line.initials ?? speaker.slice(0, 2))
              }
              name={speakerLabels === 'visible' ? speaker : undefined}
              namePosition="below"
              role={speakerLabels === 'hidden' ? 'img' : undefined}
              aria-hidden={false}
              aria-label={speakerLabels === 'hidden' ? speaker : undefined}
            />
            <Styled.Speech
              aria-current={playingId === line.id ? 'true' : undefined}
              $compact={density === 'compact'}
              $inlineGuidance={inlineGuidance}
              $playing={playingId === line.id}
              $side={line.side}
              $completed={completedIds?.includes(line.id) ?? false}
              $hasAudio={Boolean(onPlay && line.audioLabel)}
            >
              <Styled.Message>
                {onComplete && line.actionLabel ? (
                  <DialogueAction
                    content={content}
                    completed={completedIds?.includes(line.id)}
                    label={line.actionLabel}
                    pressed={completedIds?.includes(line.id) ?? false}
                    onActivate={() => onComplete(line.id)}
                  />
                ) : onTranslate && line.translation ? (
                  <DialogueAction
                    content={content}
                    expanded={translatedIds?.includes(line.id) ?? false}
                    onActivate={() => onTranslate(line.id)}
                  />
                ) : (
                  <div>{content}</div>
                )}
              </Styled.Message>
              {(translatedIds?.includes(line.id) ?? false) ? (
                <Styled.Translation>{line.translation}</Styled.Translation>
              ) : null}
              {inlineGuidance && levelGuidance ? (
                <Styled.LineControls
                  $afterAudio={Boolean(onPlay && line.audioLabel)}
                  role="group"
                  aria-label={`Support: ${supportContext}`}
                >
                  <VocabularyControls
                    density="compact"
                    showInitial={level === 'hint'}
                    showAll={level === 'full'}
                    onToggleInitial={() =>
                      levelGuidance.onChange(
                        level === 'hint' ? 'cue' : 'hint',
                        line.id,
                      )
                    }
                    onToggleAll={() =>
                      levelGuidance.onChange(
                        level === 'full' ? 'cue' : 'full',
                        line.id,
                      )
                    }
                    labels={{
                      hint: `${level === 'hint' ? 'Hide' : 'Show'} tip: ${supportContext}`,
                      showAll: `Show model: ${supportContext}`,
                      hideAll: `Hide model: ${supportContext}`,
                    }}
                  />
                </Styled.LineControls>
              ) : null}
              {onPlay && line.audioLabel ? (
                <IconButton
                  size="sm"
                  variant="subtle"
                  aria-label={line.audioLabel}
                  aria-pressed={playingId === line.id}
                  onClick={() => onPlay(line.id)}
                >
                  <svg
                    aria-hidden="true"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
                    <path d="M16 9a5 5 0 0 1 0 6M19.364 18.364a9 9 0 0 0 0-12.728" />
                  </svg>
                </IconButton>
              ) : null}
            </Styled.Speech>
          </Styled.DialogueLine>
        )
      })}
    </Styled.Dialogue>
  )
  if (sequential && supportedLines.length)
    return (
      <Styled.DialogueSection>
        {dialogue}
        <VocabularyControls
          interaction="progressive"
          showInitial={Boolean(visibleHints)}
          showAll={supportedLines.some((line) =>
            sequential.revealedLineIds.includes(line.id),
          )}
          hintDisabled={!nextHint && !visibleHints}
          onToggleInitial={() => sequential.onRevealHint(nextHint?.id)}
          onToggleAll={() => sequential.onRevealModel(nextModel?.id)}
          labels={{ hint: hintLabel, showAll: modelLabel, hideAll: modelLabel }}
        />
      </Styled.DialogueSection>
    )
  return levelGuidance && levelGuidance.placement !== 'line' ? (
    <Styled.DialogueSection>
      {dialogue}
      <VocabularyControls
        showInitial={levelGuidance.level === 'hint'}
        showAll={levelGuidance.level === 'full'}
        onToggleInitial={() =>
          levelGuidance.onChange(
            levelGuidance.level === 'hint' ? 'cue' : 'hint',
          )
        }
        onToggleAll={() =>
          levelGuidance.onChange(
            levelGuidance.level === 'full' ? 'cue' : 'full',
          )
        }
        labels={{
          hint: levelGuidance.level === 'hint' ? 'Hide tips' : 'Show tips',
          showAll: 'Show model dialogue',
          hideAll: 'Hide model dialogue',
        }}
      />
    </Styled.DialogueSection>
  ) : (
    dialogue
  )
}
