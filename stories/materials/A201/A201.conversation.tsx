import { Fragment, useState } from 'react'
import { CharacterDialogue } from '../shared/CharacterPortraits.styles'
import { ana, kim, leo, raj } from '../shared/characterPortraits'
import { DialogueTitle } from '../shared/DialogueTitle'
import { DialoguePlaybackAction } from '../shared/DialoguePlaybackAction'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import { toggleId } from './A201.data'
import * as S from './A201.styles'
import type { DialogueProps, DialoguePageProps } from './A201.types'

const grammarPhrases =
  /(I'm cooking|I'm watching|Do you usually|I usually|Do you cook|today I'm making)/g
const emphasize = (text: string) =>
  text
    .split(grammarPhrases)
    .map((part, index) =>
      index % 2 ? <S.Emphasis key={index}>{part}</S.Emphasis> : part,
    )
const portraits: Record<string, string> = {
  Anna: ana,
  Emma: kim,
  Ben: leo,
  Lucas: raj,
}

export function DialogueSection({
  lines,
  speech,
  gaps = [],
  onGapToggle,
  emphasis = false,
}: DialogueProps) {
  const [translated, setTranslated] = useState<string[]>([])
  const speakers = [...new Set(lines.map((line) => line.speaker))]
  return (
    <CharacterDialogue
      density="compact"
      lines={lines.map((line) => ({
        id: line.id,
        speaker: line.speaker,
        avatarUrl: portraits[line.speaker],
        side: speakers.indexOf(line.speaker) % 2 ? 'end' : 'start',
        translation: line.translation,
        audioLabel: `Listen to ${line.speaker}'s line`,
        content: line.parts
          ? line.parts.map((part, index) =>
              typeof part === 'string' ? (
                <Fragment key={index}>{part}</Fragment>
              ) : (
                <S.Gap
                  key={part.id}
                  type="button"
                  variant="text"
                  $revealed={gaps.includes(part.id)}
                  aria-expanded={gaps.includes(part.id)}
                  aria-label={`${gaps.includes(part.id) ? 'Hide' : 'Reveal'} answer ${Number(part.id.slice(1))}`}
                  onClick={() => onGapToggle?.(part.id)}
                >
                  {gaps.includes(part.id) ? part.answer : '__________'}
                </S.Gap>
              ),
            )
          : emphasis
            ? emphasize(line.text)
            : line.text,
      }))}
      translatedIds={translated}
      onTranslate={(id) => setTranslated((ids) => toggleId(ids, id))}
      playingId={speech.playingId}
      onPlay={
        lines.every(speech.has)
          ? (id) => {
              const line = lines.find((line) => line.id === id)
              if (line) speech.speak([line])
            }
          : undefined
      }
    />
  )
}

export function DialoguePage({
  active,
  title,
  context,
  children,
  ...props
}: DialoguePageProps) {
  const { lines, speech } = props
  const inDialogue = lines.some((line) => line.id === speech.playingId)
  return (
    <SlidePage
      width="reading"
      density="compact"
      eyebrow="Guided conversation"
      title={
        <DialogueTitle
          title={title}
          action={
            <DialoguePlaybackAction
              context={context}
              disabled={!active || !lines.every(speech.has)}
              status={
                inDialogue
                  ? speech.paused
                    ? 'paused'
                    : 'playing'
                  : speech.error
                    ? 'error'
                    : 'idle'
              }
              onClick={() =>
                inDialogue ? speech.togglePause() : speech.speak(lines)
              }
            />
          }
        />
      }
      instruction={
        props.onGapToggle
          ? 'Read the dialogue. Say each answer, then click the gap to check.'
          : 'Listen, then read with your teacher.'
      }
    >
      <Common.Stack>
        <DialogueSection {...props} />
        {children}
      </Common.Stack>
    </SlidePage>
  )
}
