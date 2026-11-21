import {
  withLessonOpeningPages,
  withLessonOpeningPageIds,
} from '../shared/lessonOpeningPolicy'
import { LessonPracticePlan } from '../shared/LessonBookends'
import { useLessonNotesPopup } from '../shared/useLessonNotesPopup'

import { DialoguePlaybackAction } from '../shared/DialoguePlaybackAction'
import { DialogueTitle } from '../shared/DialogueTitle'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { MaterialSlideDeck } from '../shared/MaterialSlideDeck'
import { LessonNotes } from '../shared/LessonNotes'
import { LessonNotesTrigger } from '../shared/LessonNotesTrigger'
import { useLessonPage } from '../shared/useLessonPage'
import {
  Vocabulary,
  Questions,
  WarmUp,
  Pronunciation,
  Corrections,
} from './Frontend.practice'
import { Dialogue, Comprehension, Grammar } from './Frontend.dialogue'
import { YourVersion, Listening, Interview } from './Frontend.conversation'
import { useFrontendAudio } from './useFrontendAudio'
import { order, content, review, yourWork, homework } from './Frontend.data'
import type { FrontendLessonProps } from './Frontend.types'
import * as S from './Frontend.styles'
export function FrontendLesson({ initialPageId }: FrontendLessonProps) {
  const notePopup = useLessonNotesPopup('langy-notes:tema-frontend')
  const [pageId, setPageId] = useLessonPage(
      initialPageId,
      'tema-frontend',
      withLessonOpeningPageIds('tema-frontend', order),
    ),
    { audioRef, events, ...media } = useFrontendAudio()

  const dialogueTool = (part?: number) => {
    const ids = (
      part === undefined
        ? content.dialogue
        : content.dialogue.slice(part * 5, part * 5 + 5)
    ).map((line) => line.id)
    const busy =
      ids.includes(media.playingId ?? '') &&
      (media.status === 'playing' || media.status === 'loading')
    return (
      <DialoguePlaybackAction
        context="Kim and Ana before the launch"
        status={
          busy ? 'playing' : media.status === 'paused' ? 'paused' : 'idle'
        }
        onClick={() => media.play(ids)}
      />
    )
  }
  const pages = order.map((id) => {
    let title = '',
      eyebrow = '',
      instruction = '',
      tools,
      titleAction,
      lead,
      element
    if (id === 's1') {
      return {
        id,
        label: 'Warm up · Your work',
        content: (
          <SlidePage
            width="conversation"
            density="compact"
            eyebrow="Warm up"
            title={'Your work'}
            instruction={
              'Answer your teacher’s questions. Then ask question 4.'
            }
          >
            <Questions items={review} />
          </SlidePage>
        ),
      }
    } else if (id === 's2') {
      title = 'Parts of a page'
      eyebrow = 'Vocabulary'
      instruction =
        'The things you talk about in a meeting. Look at the picture and say the word.'
      element = <Vocabulary media={media} />
    } else if (['s31', 's32', 's33'].includes(id)) {
      title = [
        'A problem on mobile',
        'Kim’s progress update',
        'Kim’s JavaScript experience',
      ][Number(id.slice(2)) - 1]!
      eyebrow = 'Warm up'
      instruction = 'Look at the information and choose the correct answer'
      element = <WarmUp index={Number(id.slice(2)) - 1} media={media} />
    } else if (id === 's4') {
      title = 'Your work with the web'
      eyebrow = 'Now you'
      instruction = 'Answer about your work or your studies. You can invent.'
      element = <Questions items={yourWork} />
    } else if (id === 's51' || id === 's52') {
      const index = id === 's51' ? 0 : 1
      title = content.pronunciation[index]!.t
      eyebrow = 'Pronunciation'
      instruction = 'Listen. Which one did you hear? Say it, then click it.'
      element = <Pronunciation index={index} media={media} />
    } else if (id === 's6' || id === 's62') {
      const index = id === 's6' ? 0 : 1
      title = `A bug before the launch (${index + 1}/2)`
      eyebrow = 'Dialogue'
      instruction = index
        ? 'The talk goes on. Listen and read along.'
        : 'Listen to Kim and Ana plan a fix before Friday’s launch.'
      titleAction = dialogueTool(index)
      element = (
        <S.Stack>
          {!index ? (
            <S.Hint>Select a line to read its translation.</S.Hint>
          ) : null}
          <Dialogue index={index} media={media} />
        </S.Stack>
      )
    } else if (id === 's61') {
      title = 'Questions'
      eyebrow = 'Dialogue'
      instruction =
        'Answer the questions about Kim and Ana’s talk. If you don’t remember, listen again.'
      tools = dialogueTool()
      element = <Comprehension />
    } else if (id === 's7') {
      title = 'I’ve fixed it, I fixed it yesterday'
      eyebrow = 'Grammar'
      instruction =
        'Compare completed work, unfinished work, duration and finished past times'
      element = <Grammar media={media} />
    } else if (id === 's8') {
      title = 'Your bug, with Ana'
      eyebrow = 'Your version'
      instruction =
        'Tell Ana about a bug from your work or a course project. You can invent the details'
      element = <YourVersion media={media} />
    } else if (id === 's9') {
      title = 'A message from Leo'
      eyebrow = 'Listening'
      instruction =
        'Leo, the tech lead, sends Kim a voice message. Read, listen, and say Yes or No. If it’s No, say what’s right.'
      element = <Listening active={pageId === id} />
    } else if (id === 's10') {
      title = 'Right or wrong?'
      eyebrow = 'Review'
      instruction = 'Is the sentence right? If not, say it the right way.'
      element = <Corrections media={media} />
    } else if (id === 's11') {
      title = 'The interview'
      eyebrow = 'Role play'
      instruction = 'Press play. Answer Jun’s question. Then press play again.'
      element = <Interview media={media} />
    } else {
      title = 'Practice at home'
      eyebrow = 'Homework'
      instruction = 'Practise offline and bring an example to your next class.'
      element = (
        <LessonPracticePlan
          tasks={homework.map(([title, description]) => ({
            title: title!,
            description: description!,
          }))}
        />
      )
    }
    return {
      id,
      label: `${eyebrow} · ${title}`,
      content: (
        <SlidePage
          title={
            titleAction ? (
              <DialogueTitle title={title} action={titleAction} />
            ) : (
              title
            )
          }
          eyebrow={eyebrow}
          instruction={instruction}
          questions={
            id === 's6' || id === 's62' ? (
              <Comprehension part={id === 's6' ? 0 : 1} />
            ) : undefined
          }
          tools={tools}
          lead={lead}
          layout={id === 's12' ? 'split' : 'stacked'}
          density={
            ['s6', 's62', 's7', 's8', 's9', 's11'].includes(id)
              ? 'dense'
              : 'regular'
          }
          width={
            id === 's2' || ['s6', 's62', 's61', 's10'].includes(id)
              ? 'reading'
              : ['s31', 's32', 's33'].includes(id)
                ? 'wide'
                : ['s51', 's52', 's4'].includes(id)
                  ? 'focused'
                  : ['s7', 's9', 's11'].includes(id)
                    ? 'expanded'
                    : id === 's8'
                      ? 'conversation'
                      : 'standard'
          }
        >
          {element}
        </SlidePage>
      ),
    }
  })
  return (
    <S.Stage>
      <MaterialSlideDeck
        label="B1 Tech · Frontend"
        pageId={pageId}
        onPageChange={(next) => {
          if (next !== pageId) media.stop()
          setPageId(next)
        }}
        pages={withLessonOpeningPages('tema-frontend', pages)}
        previousPageLabel="Back"
        overlay={
          <LessonNotes
            storageKey="langy-notes:tema-frontend"
            open={notePopup.isOpen}
            popupWindow={notePopup.popup}
            preview={notePopup.preview}
            error={notePopup.error}
            onClose={notePopup.close}
          />
        }
        actions={
          <LessonNotesTrigger
            ref={(element) => {
              notePopup.trigger(element)
            }}
            open={notePopup.isOpen}
            onClick={notePopup.open}
          />
        }
      />
      {/* Every native clip has its source text in the controlled vocabulary, dialogue or interview; this single element prevents overlapping playback. */}
      <audio ref={audioRef} preload="metadata" {...events} aria-hidden="true" />
      {media.status === 'error' || media.status === 'loading' ? (
        <S.AudioStatus role={media.status === 'error' ? 'alert' : 'status'}>
          {media.status === 'loading'
            ? 'Loading recording…'
            : 'Could not play the recording.'}
          {media.status === 'error' ? (
            <Button size="sm" variant="secondary" onClick={media.retry}>
              Try again
            </Button>
          ) : null}
          <Button size="sm" variant="secondary" onClick={media.stop}>
            {media.status === 'loading' ? 'Cancel playback' : 'Close'}
          </Button>
        </S.AudioStatus>
      ) : null}
    </S.Stage>
  )
}
