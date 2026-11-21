import { KeyValueList } from '../../../src/components/Details/KeyValueList'
import { RevealCard } from '../../../src/components/Exercise/RevealCard'
import {
  CalendarDay,
  CalendarMonthGrid,
} from '../../../src/components/Calendar/CalendarElements'
import type { RevealGuidanceLevel } from '../../../src/components/Exercise/RevealCard.types'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
import { MaterialLearningDialogue as LearningDialogue } from './MaterialLearningDialogue'
import { SceneExplorer } from '../../../src/components/InteractiveMaterial/SceneExplorer'
import { Avatar } from '../../../src/components/Avatar/Avatar'
import { GrammarTable } from '../../../src/components/InteractiveMaterial/GrammarTable'
import { RolePlayExercise } from '../../../src/components/InteractiveMaterial/RolePlayExercise'
import { VoiceMessageExercise } from '../../../src/components/VoiceMessage/VoiceMessageExercise'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import { useRecordedAudio } from '../../../src/internal/useRecordedAudio'
import { MaterialSlideDeck } from './MaterialSlideDeck'
import { PromptExercise } from './LessonExercises'
import { useLessonPage } from './useLessonPage'
import { useLessonNotesPopup } from './useLessonNotesPopup'
import { LessonNotes } from './LessonNotes'
import { LessonNotesTrigger } from './LessonNotesTrigger'
import { withVoiceMessageLayout } from './deviceTheme'
import * as Shell from './Lesson.styles'
import { ana as anaAvatar, kim as kimAvatar } from './characterPortraits'
import type {
  ReviewedPage,
  ReviewedLessonProps,
  ReviewedDialogueProps,
  ReviewedPageContentProps,
} from './ReviewedLesson.types'

const portraits = { Ana: anaAvatar, Kim: kimAvatar }
const phoneTheme = withVoiceMessageLayout({
  contentWidth: '47.5rem',
  phoneWidth: 'clamp(11.875rem, calc((100dvh - 13.75rem) / 2), 16.875rem)',
  phoneHeight: 'clamp(23.75rem, calc(100dvh - 13.75rem), 33.75rem)',
  transcriptFontSize: 'clamp(0.75rem, 1.8cqw, 0.8125rem)',
})
const toggle = (ids: readonly string[], id: string) =>
  ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id]

function Dialogue({ lines, speech, guidance = false }: ReviewedDialogueProps) {
  const [translated, setTranslated] = useState<string[]>([])
  const [revealed, setRevealed] = useState<string[]>([])
  const [level, setLevel] = useState<'cue' | 'hint' | 'full'>('cue')
  return (
    <LearningDialogue
      density="compact"
      guidance={guidance ? { level, onChange: setLevel } : undefined}
      lines={lines.map((line) => ({
        ...line,
        content: line.text,
        avatarUrl: portraits[line.speaker],
        side: line.speaker === 'Kim' ? 'start' : 'end',
        audioLabel: guidance ? undefined : `Listen to ${line.speaker}`,
      }))}
      translatedIds={translated}
      onTranslate={
        guidance ? undefined : (id) => setTranslated((ids) => toggle(ids, id))
      }
      playingId={speech.playingId}
      onPlay={
        guidance
          ? undefined
          : (id) => {
              const line = lines.find((x) => x.id === id)
              if (line) speech.speak([line])
            }
      }
      revealedGapIds={revealed}
      onRevealGap={(id, lineId) => {
        setRevealed((ids) => (ids.includes(id) ? ids : [...ids, id]))
        const line = lines.find((x) => x.id === lineId)
        if (line) speech.speak([line])
      }}
    />
  )
}

/** Data adapters only: every visible exercise uses the reviewed UI Library. */
function PageContent({
  page,
  speech,
  active,
  recordings,
}: ReviewedPageContentProps) {
  const [revealed, setRevealed] = useState<string[]>([])
  const [initial, setInitial] = useState(false)
  const [all, setAll] = useState(false)
  const [selected, setSelected] = useState<string>()
  const [helpLevel, setHelpLevel] = useState<RevealGuidanceLevel>('cue')
  if (page.kind === 'prompts') return <PromptExercise items={page.items} />
  if (page.kind === 'vocabulary')
    return (
      <VocabularyGrid
        items={page.items}
        imageVariant={page.isolated ? 'isolated' : 'scene'}
        imageFit="contain"
        surface={page.isolated ? 'plain' : 'card'}
        revealOnHover={false}
        revealVariant="tooltip"
        density="regular"
        revealedIds={revealed}
        showAll={all}
        showInitial={initial}
        controls={{
          showAll: all,
          showInitial: initial,
          onToggleAll: () => setAll(!all),
          onToggleInitial: () => setInitial(!initial),
        }}
        onReveal={(id) =>
          setRevealed((ids) => (ids.includes(id) ? ids : [...ids, id]))
        }
        onPlay={(id) => {
          const item = page.items.find((x) => x.id === id)
          if (item) speech.speak([{ id, text: item.word }])
        }}
      />
    )
  if (page.kind === 'calendar')
    return (
      <Common.Surface>
        <CalendarMonthGrid
          density="compact"
          role="group"
          aria-label={page.title}
        >
          {page.items.map((item) => (
            <CalendarDay
              key={item.id}
              presentation="vocabulary"
              selected={selected === item.id}
              day={item.word}
              openLabel={`Listen to ${item.word}`}
              onOpen={() => {
                setSelected(item.id)
                speech.speak([{ id: item.id, text: item.word }])
              }}
            >
              <Common.Hint hidden={selected !== item.id}>
                {item.example}
              </Common.Hint>
            </CalendarDay>
          ))}
        </CalendarMonthGrid>
      </Common.Surface>
    )
  if (page.kind === 'words')
    return (
      <GrammarTable
        title={page.title}
        captionVisibility="screen-reader"
        columns={{ subject: 'Clue', verb: 'English', example: 'Example' }}
        hiddenAnswers
        revealedIds={revealed}
        rows={page.items.map((x) => ({
          id: x.id,
          subject: x.clue,
          verb: x.word,
          example: x.example,
        }))}
        onReveal={(id) => {
          setRevealed((ids) => (ids.includes(id) ? ids : [...ids, id]))
          const item = page.items.find((x) => x.id === id)
          if (item) speech.speak([{ id, text: item.word }])
        }}
        onPlay={(id) => {
          const item = page.items.find((x) => x.id === id)
          if (item) speech.speak([{ id, text: item.word }])
        }}
      />
    )
  if (page.kind === 'scene')
    return (
      <Common.Stack>
        {page.context ? (
          <Common.Row>
            <Avatar size="sm" initials="Ana" imageUrl={anaAvatar} />
            <Common.Hint>{page.context}</Common.Hint>
          </Common.Row>
        ) : null}
        <SceneExplorer
          imageSizing="presentation"
          imageUrl={page.image.src}
          imageAlt={page.image.alt}
          hotspots={page.hotspots}
          connections={page.connections}
          selectedId={selected}
          visitedIds={revealed}
          playingId={
            page.hotspots.find((h) => h.audioId === speech.playingId)?.id
          }
          onSelect={(id) => {
            setSelected(id)
            setRevealed((ids) => (ids.includes(id) ? ids : [...ids, id]))
          }}
          onPlayHotspot={(id) => {
            const h = page.hotspots.find((item) => item.id === id)
            if (h) speech.speak([{ id: h.audioId, text: h.audioText }])
          }}
          labels={{ initial: '', play: 'Listen' }}
        />
      </Common.Stack>
    )
  if (page.kind === 'grammar')
    return (
      <Common.Stack>
        <GrammarTable
          title={page.title}
          captionVisibility="screen-reader"
          columns={
            page.columns ?? {
              subject: 'Who / When',
              verb: 'Form',
              example: 'Example',
            }
          }
          rows={page.rows}
        />
        {page.note ? <Common.Hint>{page.note}</Common.Hint> : null}
      </Common.Stack>
    )
  if (page.kind === 'dialogue')
    return <Dialogue lines={page.lines} speech={speech} />
  if (page.kind === 'listening')
    return (
      <ThemeProvider theme={phoneTheme}>
        <VoiceMessageExercise
          contact={{ name: 'Kim', avatarUrl: kimAvatar, status: 'online' }}
          greeting={{
            text: page.greeting ?? 'Hi! I have a message for you.',
            timestamp: '21:10',
          }}
          attachment={page.image}
          audio={{
            id: 'L.1',
            src: recordings.find(
              (x) => x.id === 'L.1' && x.text === page.message,
            )?.src,
            transcript: page.message,
            timestamp: '21:11',
          }}
          active={active}
          questions={[]}
          onAnswer={() => undefined}
          transcriptReveal="third-listen"
          labels={{
            play: 'Listen to Kim',
            pause: 'Pause',
            loading: 'Loading audio',
            replay: 'Listen again',
            speed: 'Speed',
            transcript: 'Transcript',
            transcriptHidden: 'The transcript appears on the third listen.',
            audioUnavailable: 'Audio is unavailable.',
            audioError: 'The audio could not play.',
            retry: 'Try again',
            questions: 'Questions about Kim',
            conversation: 'Conversation',
          }}
          footer={<PromptExercise items={page.items} />}
        />
      </ThemeProvider>
    )
  if (page.kind === 'introductions') {
    const choice =
      page.choices.find((item) => item.id === selected) ?? page.choices[0]
    return (
      <RolePlayExercise
        presentation="instructions"
        situation=""
        steps={[]}
        completedIds={[]}
        onStepToggle={() => undefined}
        tracker={
          choice ? (
            <Common.Stack>
              <RevealCard
                presentation="prompt"
                revealed={helpLevel === 'full'}
                answerMinLines={3}
                answer={`${choice.introduction} ${choice.detail}`}
                guidance={{
                  level: helpLevel,
                  hint: choice.hint,
                  onChange: setHelpLevel,
                }}
              >
                Introduce them. Add a job or a city.
              </RevealCard>
              <Common.Surface>
                <Common.Heading>{choice.label}</Common.Heading>
                <KeyValueList
                  tone="material"
                  items={choice.facts.map((fact, index) => ({
                    ...fact,
                    id: String(index),
                  }))}
                />
              </Common.Surface>
            </Common.Stack>
          ) : undefined
        }
      >
        <SceneExplorer
          presentation="labels"
          labelVisibility="always"
          imageSizing="presentation"
          imageUrl={page.image.src}
          imageAlt={page.image.alt}
          hotspots={page.choices.map((item) => ({ ...item, prompt: null }))}
          selectedId={choice?.id}
          visitedIds={choice ? [choice.id] : []}
          onSelect={(id) => {
            setSelected(id)
            setHelpLevel('cue')
          }}
        />
      </RolePlayExercise>
    )
  }
  if (page.kind === 'roleplay')
    return (
      <RolePlayExercise
        presentation="instructions"
        situation=""
        image={page.image}
        steps={page.steps.map((label, i) => ({ id: String(i), label }))}
        completedIds={[]}
        onStepToggle={() => undefined}
        tracker={
          page.lines ? (
            <Dialogue lines={page.lines} speech={speech} guidance />
          ) : page.items ? (
            <PromptExercise items={page.items} />
          ) : undefined
        }
      />
    )
  return (
    <Common.Stack>
      {page.tasks.map((task) => (
        <Common.Surface key={task.title}>
          <Common.Heading>{task.title}</Common.Heading>
          <p>{task.description}</p>
        </Common.Surface>
      ))}
    </Common.Stack>
  )
}

export function ReviewedLesson({
  code,
  title,
  pages: authoredPages,
  recordings,
  initialPageId,
  learnerName = '',
}: ReviewedLessonProps) {
  const mergedQuestionIds = new Set<string>()
  const pages: readonly ReviewedPage[] = authoredPages.flatMap(
    (page, index) => {
      if (mergedQuestionIds.has(page.id)) return []
      const next = authoredPages[index + 1]
      if (
        page.kind === 'dialogue' &&
        next?.kind === 'prompts' &&
        next.eyebrow === 'Guided conversation'
      ) {
        mergedQuestionIds.add(next.id)
        return [
          {
            ...page,
            minutes: page.minutes + next.minutes,
            questions: next.items,
          },
        ]
      }
      return [page]
    },
  )
  const [pageId, setPageId] = useLessonPage(
    initialPageId,
    code.toLowerCase().replace('.', '-'),
    pages.map((x) => x.id),
  )
  const speech = useRecordedAudio(recordings)
  const notes = useLessonNotesPopup('langy-material-notes-' + code)
  return (
    <Shell.Stage>
      <MaterialSlideDeck
        label={`${code} · ${title}${learnerName ? ' · ' + learnerName : ''}`}
        pageId={pageId}
        onPageChange={(id) => {
          speech.stop()
          setPageId(id)
        }}
        pages={pages.map((page) => {
          const lines = page.kind === 'dialogue' ? page.lines : undefined
          const playing = lines?.some((x) => x.id === speech.playingId)
          return {
            id: page.id,
            label: `${page.eyebrow} · ${page.title}`,
            content: (
              <SlidePage
                title={page.title}
                questions={
                  page.kind === 'dialogue' && page.questions ? (
                    <PromptExercise items={page.questions} />
                  ) : undefined
                }
                eyebrow={page.eyebrow}
                instruction={page.instruction}
                density={page.kind === 'dialogue' ? 'compact' : 'regular'}
                width={
                  page.kind === 'vocabulary' ||
                  page.kind === 'roleplay' ||
                  page.kind === 'scene' ||
                  page.kind === 'introductions'
                    ? 'wide'
                    : 'reading'
                }
                titleAudio={
                  lines
                    ? {
                        context: page.title,
                        status: playing
                          ? speech.paused
                            ? 'paused'
                            : 'playing'
                          : 'idle',
                        disabled:
                          pageId !== page.id || !lines.every(speech.has),
                        onClick: () =>
                          playing ? speech.togglePause() : speech.speak(lines),
                      }
                    : undefined
                }
              >
                <PageContent
                  page={page}
                  speech={speech}
                  active={pageId === page.id}
                  recordings={recordings}
                />
              </SlidePage>
            ),
          }
        })}
        overlay={
          <LessonNotes
            storageKey={'langy-material-notes-' + code}
            open={notes.isOpen}
            popupWindow={notes.popup}
            preview={notes.preview}
            error={notes.error}
            onClose={notes.close}
          />
        }
        actions={
          <LessonNotesTrigger
            ref={(element) => {
              notes.trigger(element)
            }}
            open={notes.isOpen}
            onClick={notes.open}
          />
        }
      />
      {speech.error ? (
        <Shell.AudioError role="status">{speech.error}</Shell.AudioError>
      ) : null}
    </Shell.Stage>
  )
}
