import { MaterialTheme } from '../shared/MaterialTheme'
import { Button } from '../../../src/components/Button/Button'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { LessonShell, LessonIntro } from '../shared/LessonShell'
import {
  PronunciationPractice,
  CorrectionPractice,
  DialoguePractice,
  ComprehensionPractice,
} from '../shared/LessonPractice'
import { LessonHomework } from '../shared/LessonHomework'
import type { LessonProps, LessonSpeech } from '../shared/Lesson.types'
import {
  VocabularySection,
  WarmUpSection,
  WordTableSection,
} from './B201.practice'
import {
  YourVersionSection,
  ListeningSection,
  RolePlaySection,
} from './B201.conversation'
import {
  content,
  order,
  dialogue,
  comprehension,
  homework,
  image,
  reviewImages,
} from './B201.data'
import * as S from './B201.styles'
function audioTool(speech: LessonSpeech, part: number) {
  const lines = part === 0 ? dialogue.slice(0, 6) : dialogue.slice(6)
  const playing = lines.some((line) => line.id === speech.playingId)
  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={() => (playing ? speech.togglePause() : speech.speak(lines))}
    >
      {playing
        ? speech.paused
          ? 'Resume'
          : 'Pause'
        : 'Listen to the dialogue'}
    </Button>
  )
}
const review = [
  'If you could choose, would you work at home or in an office? Why?',
  'Your teacher doesn’t agree. Answer: I see your point, but …',
  'Now ask your teacher: Home or office? Why?',
  'Ask your teacher: How was your week?',
]
function B201LessonContent({
  initialPageId,
  studentPortalOrigin,
}: LessonProps) {
  return (
    <LessonShell
      initialPageId={initialPageId}
      label="B2.01 · Dead phone, no charger"
      pages={(speech, activeId) =>
        order.map((id) => {
          if (id === 's1')
            return {
              id,
              label: 'Review · Last class',
              content: (
                <SlidePage
                  layout="split"
                  eyebrow="Review"
                  title="Last class"
                  instruction="Answer your teacher’s questions about last class. No job? Talk about school, or invent."
                  lead={
                    <LessonIntro
                      level="B2"
                      lesson="Lesson 01"
                      before="Dead phone,"
                      accent="no charger"
                      goal="Contar uma história longa, dizendo o que vinha acontecendo antes de cada fato."
                    />
                  }
                >
                  <S.Questions>
                    {review.map((q, i) => (
                      <S.Question key={q}>
                        <S.Number>{i + 1}</S.Number>
                        <div>
                          {i === 0 ? (
                            <S.RecallImages>
                              {reviewImages.map((pic) => (
                                <img
                                  key={pic.alt}
                                  src={pic.src}
                                  alt={pic.alt}
                                />
                              ))}
                            </S.RecallImages>
                          ) : null}
                          {q}
                        </div>
                      </S.Question>
                    ))}
                  </S.Questions>
                </SlidePage>
              ),
            }
          if (id === 's2')
            return {
              id,
              label: 'Vocabulary · No battery',
              content: (
                <SlidePage
                  eyebrow="Vocabulary"
                  width="expanded"
                  density="dense"
                  title="No battery"
                  instruction="Look at the picture and say the word in English."
                >
                  <VocabularySection speech={speech} />
                </SlidePage>
              ),
            }
          if (id === 's31' || id === 's32' || id === 's33')
            return {
              id,
              label: `Warm up · Choose the correct answer. (${Number(id.at(-1))}/3)`,
              content: (
                <SlidePage
                  eyebrow="Warm up"
                  width="expanded"
                  density="dense"
                  title="Choose the correct answer."
                  instruction={
                    id === 's33'
                      ? 'Kim asks Ana. Choose Ana’s answer. Then answer about you.'
                      : 'Kim asks about Ana’s day in New York. Choose Ana’s answer.'
                  }
                >
                  <WarmUpSection
                    index={Number(id.at(-1)) - 1}
                    speech={speech}
                  />
                </SlidePage>
              ),
            }
          if (id === 's4')
            return {
              id,
              label: 'Vocabulary · Expressions',
              content: (
                <SlidePage
                  eyebrow="Vocabulary"
                  width="expanded"
                  title="Expressions"
                  instruction="Read the Portuguese and say it in English. Then click to check."
                >
                  <WordTableSection speech={speech} />
                </SlidePage>
              ),
            }
          if (id === 's51' || id === 's52') {
            const index = id === 's51' ? 0 : 1
            return {
              id,
              label: `Pronunciation · ${index === 0 ? 'I’d walked or I’d been walking?' : 'I’ve been or I’d been?'}`,
              content: (
                <SlidePage
                  eyebrow="Pronunciation"
                  title={
                    index === 0
                      ? 'I’d walked or I’d been walking?'
                      : 'I’ve been or I’d been?'
                  }
                  instruction="Listen. Which one did you hear? Say it, then click it."
                >
                  <PronunciationPractice
                    index={index}
                    pair={content.pronunciation[index]!}
                    speech={speech}
                  />
                </SlidePage>
              ),
            }
          }
          if (id === 's6' || id === 's62') {
            const part = id === 's6' ? 0 : 1
            return {
              id,
              label: `Dialogue · How was New York? (${part + 1}/2)`,
              content: (
                <SlidePage
                  eyebrow="Dialogue"
                  width="conversation"
                  density="dense"
                  title={`How was New York? (${part + 1}/2)`}
                  tools={audioTool(speech, part)}
                  instruction={
                    part === 0
                      ? 'Ana is back in São Paulo. Kim asks about her trip. Listen and read along.'
                      : 'The talk goes on. Listen and read along.'
                  }
                >
                  <DialoguePractice
                    lines={
                      part === 0
                        ? content.dialogue.slice(0, 6)
                        : content.dialogue.slice(6)
                    }
                    speech={speech}
                  />
                </SlidePage>
              ),
            }
          }
          if (id === 's63')
            return {
              id,
              label: 'Dialogue · Questions',
              content: (
                <SlidePage
                  eyebrow="Dialogue"
                  title="Questions"
                  instruction="Answer the questions about the talk. If you don’t remember, listen again."
                >
                  <ComprehensionPractice items={comprehension} />
                </SlidePage>
              ),
            }
          if (id === 's7')
            return {
              id,
              label: 'Grammar · What had been happening?',
              content: (
                <SlidePage
                  eyebrow="Grammar"
                  width="expanded"
                  title="What had been happening?"
                  instruction="Read Kim’s question. Say Ana’s answer before you click the line."
                >
                  <WordTableSection grammar speech={speech} />
                </SlidePage>
              ),
            }
          if (id === 's8')
            return {
              id,
              label: 'Your version · Your bad day',
              content: (
                <SlidePage
                  eyebrow="Your version"
                  width="conversation"
                  title="Your bad day"
                >
                  <YourVersionSection speech={speech} />
                </SlidePage>
              ),
            }
          if (id === 's9')
            return {
              id,
              label: 'Listening · A message from Raj',
              content: (
                <SlidePage
                  eyebrow="Listening"
                  width="expanded"
                  density="dense"
                  title="A message from Raj"
                  instruction="Ana’s phone is on again. In the taxi, she listens to this message from Raj. Read the sentences, listen and say Yes or No. If No, say the right answer."
                >
                  <ListeningSection active={activeId === id} />
                </SlidePage>
              ),
            }
          if (id === 's10')
            return {
              id,
              label: 'Review · Right or wrong?',
              content: (
                <SlidePage
                  eyebrow="Review"
                  width="expanded"
                  title="Right or wrong?"
                  instruction="Is it right? Does it sound natural? If not, say it the right way."
                >
                  <CorrectionPractice
                    items={content.corrections.map((r) => ({
                      ...r,
                      a: r.ok ? undefined : r.a,
                    }))}
                    speech={speech}
                    ownInstruction="Your teacher says one of your sentences from today."
                  />
                </SlidePage>
              ),
            }
          if (id === 's11')
            return {
              id,
              label: 'Role play · Everything went wrong',
              content: (
                <SlidePage
                  eyebrow="Role play"
                  width="expanded"
                  density="dense"
                  title="Everything went wrong"
                  instruction="Tell Kim about a day when everything went wrong. Then listen to Kim’s day."
                >
                  <RolePlaySection />
                </SlidePage>
              ),
            }
          return {
            id,
            label: 'Homework · Before next class',
            content: (
              <SlidePage
                eyebrow="Homework"
                title="Before next class"
                instruction="Your three tasks on the platform. Your teacher sends the links in the chat."
              >
                <LessonHomework
                  lesson="B2.01 · Dead phone, no charger"
                  items={homework}
                  image={image('power-bank-new')}
                  studentPortalOrigin={studentPortalOrigin}
                />
                <S.Hint>Atividades em preparação na plataforma.</S.Hint>
              </SlidePage>
            ),
          }
        })
      }
    />
  )
}

export function B201Lesson(props: LessonProps) {
  return (
    <MaterialTheme>
      <B201LessonContent {...props} />
    </MaterialTheme>
  )
}
