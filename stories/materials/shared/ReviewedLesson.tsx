import { voiceMessageTranscriptLabels } from './voiceMessageLabels'
import {
  withLessonOpeningPages,
  withLessonOpeningPageIds,
  hasLessonOpeningReview,
} from './lessonOpeningPolicy'
import { LessonHomeworkClosing } from './LessonHomeworkClosing'
import { hasLessonHomework } from './LessonHomeworkGallery'
import { LessonOpening, LessonPracticePlan } from './LessonBookends'
import { KeyValueList } from '../../../src/components/Details/KeyValueList'
import { RevealCard } from '../../../src/components/Exercise/RevealCard'
import {
  CalendarDay,
  CalendarMonthGrid,
} from '../../../src/components/Calendar/CalendarElements'
import type { RevealGuidanceLevel } from '../../../src/components/Exercise/RevealCard.types'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { ExercisePanel } from '../../../src/components/Exercise/ExercisePanel'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
import { VideoExercise } from '../../../src/components/InteractiveMaterial/VideoExercise'
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
import { ChoiceExercise, PromptExercise } from './LessonExercises'
import { MaterialQuestions } from './MaterialQuestions'
import { SceneVocabulary } from './SceneVocabulary'
import {
  FreeConversationPage,
  freeConversationPageId,
} from './FreeConversationPage'
import { useLessonPage } from './useLessonPage'
import { useLessonNotesPopup } from './useLessonNotesPopup'
import { LessonNotes } from './LessonNotes'
import { LessonNotesTrigger } from './LessonNotesTrigger'
import { withVoiceMessageLayout } from './deviceTheme'
import * as Shell from './Lesson.styles'
import { characterPortrait } from './characterPortraits'
import type {
  ReviewedPage,
  ReviewedLessonProps,
  ReviewedDialogueProps,
  ReviewedPageContentProps,
  ReviewedPrompt,
} from './ReviewedLesson.types'

const phoneTheme = withVoiceMessageLayout({
  contentWidth: '47.5rem',
  phoneWidth: 'clamp(11.875rem, calc((100dvh - 13.75rem) / 2), 16.875rem)',
  phoneHeight: 'clamp(23.75rem, calc(100dvh - 13.75rem), 33.75rem)',
  transcriptFontSize: 'clamp(0.75rem, 1.8cqw, 0.8125rem)',
})
// Narrow stacked listening reserves room for both conversation bubbles; phone stays 1:2.
const conversationPhoneTheme = withVoiceMessageLayout({
  contentWidth: '100%',
  phoneWidth:
    'clamp(11.875rem, min(calc((100dvh - 13.75rem) / 2), 57.5cqw), 16.875rem)',
  phoneHeight:
    'clamp(23.75rem, min(calc(100dvh - 13.75rem), 115cqw), 33.75rem)',
  transcriptFontSize: 'clamp(0.75rem, 1.8cqw, 0.8125rem)',
})
const toggle = (ids: readonly string[], id: string) =>
  ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id]
const recordingLine = (line: {
  id: string
  text: string
  audioText?: string
}) => ({
  id: line.id,
  text: line.audioText ?? line.text,
})
function Questions({
  items,
  purpose = 'conversation',
  density = 'regular',
}: {
  items: readonly ReviewedPrompt[]
  purpose?: 'conversation' | 'comprehension' | 'review' | 'response'
  density?: 'regular' | 'compact'
}) {
  return purpose === 'conversation' &&
    items.every((item) => item.cue && item.hint) ? (
    <MaterialQuestions
      items={items.map((item) => ({
        id: item.id,
        question: item.prompt,
        cue: item.cue!,
        hint: item.hint!,
      }))}
    />
  ) : (
    <PromptExercise
      density={density}
      items={items.map((item) => ({
        ...item,
        cue: purpose === 'comprehension' ? undefined : item.cue,
        answer:
          item.answer === 'One possible response' ? undefined : item.answer,
      }))}
    />
  )
}

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
        avatarUrl: characterPortrait(line.speaker),
        side:
          line.speaker === 'Kim'
            ? 'start'
            : line.speaker === 'Ana'
              ? 'end'
              : line.speaker === lines[0]?.speaker
                ? 'start'
                : 'end',
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
              if (line) speech.speak([recordingLine(line)])
            }
      }
      revealedGapIds={revealed}
      onRevealGap={(id, lineId) => {
        setRevealed((ids) => (ids.includes(id) ? ids : [...ids, id]))
        const line = lines.find((x) => x.id === lineId)
        if (line) speech.speak([recordingLine(line)])
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
  activity,
  imageChoiceCounter,
  preloadVideo,
}: ReviewedPageContentProps) {
  const [revealed, setRevealed] = useState<string[]>([])
  const [initial, setInitial] = useState(false)
  const [all, setAll] = useState(false)
  const [selected, setSelected] = useState<string>()
  const [helpLevel, setHelpLevel] = useState<RevealGuidanceLevel>('cue')
  if (page.kind === 'prompts' || page.kind === 'questions')
    return <Questions items={page.items} purpose={page.questionPurpose} />
  if (page.kind === 'activity') return activity
  if (page.kind === 'video')
    return (
      <VideoExercise
        title={null}
        presentation="inline"
        playbackControls="replay-only"
        labels={{ replay: 'Recomeçar' }}
        youtube={page.video}
        active={active}
        preload={preloadVideo}
      />
    )
  if (page.kind === 'image-choice')
    return (
      <ChoiceExercise
        presentation="warmup"
        counter={imageChoiceCounter}
        question={page.title}
        image={page.image}
        imageBadge={page.imageBadge}
        options={page.options}
        correctIndex={page.correctIndex}
      />
    )
  if (page.kind === 'source') {
    if (page.presentation === 'article')
      return (
        <ExercisePanel
          variant="reading"
          role="article"
          title={page.subject}
          aria-label={page.subject}
        >
          {page.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </ExercisePanel>
      )
    return (
      <Common.Surface as="article" aria-label={page.subject}>
        <KeyValueList
          tone="material"
          layout="stacked"
          density="compact"
          items={[
            ...(page.author
              ? [{ id: 'author', label: 'From', value: page.author }]
              : []),
            { id: 'subject', label: 'Subject', value: page.subject },
          ]}
        />
        {page.paragraphs.map((paragraph) => (
          <Common.Paragraph key={paragraph}>{paragraph}</Common.Paragraph>
        ))}
      </Common.Surface>
    )
  }
  if (page.kind === 'vocabulary')
    return (
      <VocabularyGrid
        items={page.items}
        revealLabel="Reveal and listen"
        imageVariant={page.isolated ? 'isolated' : 'scene'}
        imageFit="contain"
        imageAspectRatio={page.imageAspectRatio}
        columns={page.columns}
        surface={page.surface ?? (page.isolated ? 'plain' : 'card')}
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
          onReset: () => {
            setRevealed([])
            setAll(false)
            setInitial(false)
            speech.stop()
          },
        }}
        onReveal={(id) =>
          setRevealed((ids) => (ids.includes(id) ? ids : [...ids, id]))
        }
        onPlay={(id) => {
          const item = page.items.find((x) => x.id === id)
          if (item)
            speech.speak([
              { id: item.audioId ?? id, text: item.audioText ?? item.word },
            ])
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
  if (page.kind === 'scene-vocabulary')
    return <SceneVocabulary page={page} speech={speech} />
  if (page.kind === 'scene')
    return (
      <Common.Stack>
        {page.context ? (
          <Common.Row>
            <Avatar
              size="sm"
              initials="Ana"
              imageUrl={characterPortrait('Ana')}
            />
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
          layout={page.layout}
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
      <ThemeProvider
        theme={
          page.items.every((item) => item.cue && item.hint)
            ? conversationPhoneTheme
            : phoneTheme
        }
      >
        <VoiceMessageExercise
          contact={{
            name: 'Kim',
            avatarUrl: characterPortrait('Kim'),
            ...page.contact,
            status: 'online',
          }}
          greeting={{
            text: page.greeting ?? 'Hi! I have a message for you.',
            timestamp: page.greetingTimestamp ?? '21:10',
          }}
          attachment={page.image}
          audio={{
            id: page.audioId ?? 'L.1',
            src: recordings.find(
              (x) =>
                x.id === (page.audioId ?? 'L.1') &&
                x.text === (page.audioText ?? page.message),
            )?.src,
            transcript: page.message,
            timestamp: page.voiceTimestamp ?? '21:11',
          }}
          active={active}
          questions={[]}
          onAnswer={() => undefined}
          transcriptReveal="third-listen"
          labels={{
            play: `Listen to ${page.contact?.name ?? 'Kim'}`,
            pause: 'Pause',
            loading: 'Loading audio',
            replay: 'Listen again',
            speed: 'Speed',
            transcript: 'Transcript',
            ...voiceMessageTranscriptLabels,
            transcriptHidden: 'The transcript appears on the third listen.',
            audioUnavailable: 'Audio is unavailable.',
            audioError: 'The audio could not play.',
            retry: 'Try again',
            questions: `Questions about ${page.contact?.name ?? 'Kim'}`,
            conversation: 'Conversation',
          }}
          footer={<Questions items={page.items} purpose="comprehension" />}
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
                Speaking support
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
            <Questions items={page.items} purpose={page.questionPurpose} />
          ) : undefined
        }
      />
    )
  if (page.kind === 'homework') return <LessonPracticePlan tasks={page.tasks} />
  return null
}

export function ReviewedLesson({
  code,
  title,
  pages: authoredPages,
  recordings,
  initialPageId,
  learnerName = '',
  notesStorageKey = 'langy-material-notes-' + code,
  activities,
  freeConversationInstruction,
}: ReviewedLessonProps) {
  const materialKey = code.toLowerCase().replace('.', '-')
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
    withLessonOpeningPageIds(
      materialKey,
      pages.map((x) => x.id),
    ),
  )
  const speech = useRecordedAudio(recordings)
  const notes = useLessonNotesPopup(notesStorageKey, pageId)
  const activityFor = (id: string) => {
    const activity = activities?.[id]
    return typeof activity === 'function'
      ? activity({ active: pageId === id, speech })
      : activity
  }
  return (
    <Shell.Stage>
      <MaterialSlideDeck
        label={`${code} · ${title}${learnerName ? ' · ' + learnerName : ''}`}
        pageId={pageId}
        onPageChange={(id) => {
          speech.stop()
          setPageId(id)
        }}
        pages={withLessonOpeningPages(
          materialKey,
          pages
            .map((page, index) => {
              const imageChoices =
                page.kind === 'image-choice'
                  ? pages.filter(
                      (item) =>
                        item.kind === 'image-choice' &&
                        item.choiceGroup === page.choiceGroup,
                    )
                  : []
              const imageChoiceCounter = imageChoices.length
                ? `${imageChoices.findIndex((item) => item.id === page.id) + 1}/${imageChoices.length}`
                : undefined
              if (index === 0 && hasLessonOpeningReview(materialKey))
                return {
                  id: page.id,
                  label: `${code} · ${title}`,
                  content: (
                    <LessonOpening
                      materialKey={materialKey}
                      review={{
                        title: page.title,
                        instruction: page.instruction,
                        content: (
                          <PageContent
                            page={page}
                            speech={speech}
                            active={pageId === page.id}
                            recordings={recordings}
                            activity={activityFor(page.id)}
                          />
                        ),
                      }}
                    />
                  ),
                }
              if (page.kind === 'homework' && hasLessonHomework(materialKey))
                return {
                  id: page.id,
                  label: 'Class complete — your homework',
                  content: (
                    <LessonHomeworkClosing
                      materialKey={materialKey}
                      active={pageId === page.id}
                    />
                  ),
                }
              const lines =
                page.kind === 'dialogue'
                  ? page.lines.map(recordingLine)
                  : page.titleAudio
              const playing = lines?.some((x) => x.id === speech.playingId)
              return {
                id: page.id,
                label: `${page.eyebrow} · ${page.title}`,
                content: (
                  <SlidePage
                    layout={page.kind === 'homework' ? 'split' : 'stacked'}
                    title={page.title}
                    questions={
                      (page.kind === 'dialogue' || page.kind === 'source') &&
                      page.questions ? (
                        <Questions
                          items={page.questions}
                          purpose="comprehension"
                        />
                      ) : page.kind === 'video' ? (
                        <Questions
                          items={page.items}
                          purpose="comprehension"
                          density="compact"
                        />
                      ) : undefined
                    }
                    eyebrow={page.eyebrow}
                    instruction={page.instruction}
                    density={
                      page.kind === 'dialogue' ||
                      page.kind === 'video' ||
                      (page.kind === 'source' && page.questions)
                        ? 'compact'
                        : 'regular'
                    }
                    columns={
                      page.columns ??
                      (page.kind === 'dialogue' ||
                      page.kind === 'questions' ||
                      page.kind === 'image-choice'
                        ? 1
                        : undefined)
                    }
                    width={
                      page.kind === 'image-choice'
                        ? 'focused'
                        : page.mediaAspectRatio
                          ? { mediaAspectRatio: page.mediaAspectRatio }
                          : (page.kind === 'scene' ||
                                page.kind === 'scene-vocabulary') &&
                              page.image.aspectRatio
                            ? { mediaAspectRatio: page.image.aspectRatio }
                            : page.kind === 'vocabulary' && page.alignHeading
                              ? { vocabularyColumns: page.columns ?? 3 }
                              : page.kind === 'vocabulary' ||
                                  page.kind === 'roleplay' ||
                                  page.kind === 'activity' ||
                                  page.kind === 'listening' ||
                                  page.kind === 'scene' ||
                                  page.kind === 'introductions'
                                ? 'wide'
                                : 'reading'
                    }
                    titleAudio={
                      lines
                        ? {
                            context: page.title,
                            contentKind:
                              page.kind === 'source' ? 'audio' : undefined,
                            status: playing
                              ? speech.paused
                                ? 'paused'
                                : 'playing'
                              : 'idle',
                            disabled:
                              pageId !== page.id || !lines.every(speech.has),
                            onClick: () =>
                              playing
                                ? speech.togglePause()
                                : speech.speak(lines),
                            onRestart: () => speech.speak(lines),
                          }
                        : undefined
                    }
                  >
                    <PageContent
                      page={page}
                      speech={speech}
                      active={pageId === page.id}
                      recordings={recordings}
                      activity={activityFor(page.id)}
                      imageChoiceCounter={imageChoiceCounter}
                      preloadVideo={pages[index - 1]?.id === pageId}
                    />
                  </SlidePage>
                ),
              }
            })
            .flatMap((page, index, list) =>
              freeConversationInstruction && index === list.length - 1
                ? [
                    {
                      id: freeConversationPageId,
                      label: 'Free conversation',
                      content: (
                        <FreeConversationPage
                          instruction={freeConversationInstruction}
                        />
                      ),
                    },
                    page,
                  ]
                : [page],
            ),
        )}
        overlay={
          <LessonNotes
            storageKey={notesStorageKey}
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
