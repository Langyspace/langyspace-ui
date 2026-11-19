import { MaterialTheme } from '../shared/MaterialTheme'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { B201Shell } from './B201Shell'
import {
  PronunciationPractice,
  ComprehensionPractice,
} from '../shared/LessonPractice'
import type { LessonProps } from '../shared/Lesson.types'
import {
  VocabularySection,
  WarmUpSection,
  WordTableSection,
  CorrectionSection,
  DialogueSection,
} from './B201.practice'
import {
  YourVersionSection,
  ListeningSection,
  RolePlaySection,
} from './B201.conversation'
import { content, order, comprehension, reviewImages } from './B201.data'
import * as S from './B201.styles'
const review = [
  'If you could choose, would you work at home or in an office? Why?',
  'Your teacher doesn’t agree. Answer: I see your point, but …',
  'Now ask your teacher: Home or office? Why?',
  'Ask your teacher about her week and follow up on one detail.',
]
function B201LessonContent({ initialPageId }: LessonProps) {
  return (
    <B201Shell
      materialKey="b2-01"
      pageIds={order}
      initialPageId={initialPageId}
      label="B2.01 · Dead phone, no charger"
      pages={(speech, activeId) =>
        order.map((id) => {
          if (id === 's1')
            return {
              id,
              label: 'Review · Dead phone, no charger',
              content: (
                <SlidePage
                  eyebrow="Review"
                  title="Dead phone, no charger"
                  instruction="Reconnect with last class: give reasons, respond and ask follow-up questions."
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
                  instruction="Name the object, then explain how it could help on a trip."
                >
                  <VocabularySection />
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
                  <WarmUpSection index={Number(id.at(-1)) - 1} />
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
                  <WordTableSection />
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
                  instruction={
                    part === 0
                      ? 'Ana is back in São Paulo. Kim asks about her trip. Read with your teacher.'
                      : 'The talk goes on. Read with your teacher.'
                  }
                >
                  <DialogueSection
                    lines={
                      part === 0
                        ? content.dialogue.slice(0, 6)
                        : content.dialogue.slice(6)
                    }
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
                  instruction="Answer the questions about the talk. Give reasons and refer to the dialogue when needed."
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
                  <WordTableSection grammar />
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
                  instruction="Create your version with your teacher, then swap roles."
                >
                  <YourVersionSection />
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
                  instruction="Listen to Raj’s message; decide what he said and correct the false statements."
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
                  <CorrectionSection
                    items={content.corrections.map((r) => ({
                      ...r,
                      a: r.ok ? undefined : r.a,
                    }))}
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
                instruction="Rehearse a new story and bring it to your next class."
              >
                <S.Questions>
                  <S.Question>
                    <S.Number>1</S.Number>
                    <div>
                      <b>Recall the words</b>
                      <p>
                        Look around you. Name five objects from today and
                        explain when you might need them.
                      </p>
                    </div>
                  </S.Question>
                  <S.Question>
                    <S.Number>2</S.Number>
                    <div>
                      <b>Rehearse a story</b>
                      <p>
                        Tell a one-minute story about a journey that went wrong.
                        Explain what had happened and what you’d been doing
                        before the problem.
                      </p>
                    </div>
                  </S.Question>
                  <S.Question>
                    <S.Number>3</S.Number>
                    <div>
                      <b>Prepare to ask</b>
                      <p>
                        Bring two follow-up questions for your teacher. Use “How
                        long had you been …?” in one of them.
                      </p>
                    </div>
                  </S.Question>
                </S.Questions>
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
