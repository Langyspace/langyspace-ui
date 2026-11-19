import { useRef, useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { GapFillExercise } from '../../../src/components/InteractiveMaterial/GapFillExercise'
import { ConnectionSignal } from '../../../src/components/InteractiveMaterial/ConnectionSignal'
import { QuizFeedback } from '../../../src/components/Quiz/QuizFeedback'
import {
  SourceQuestions,
  ComprehensionPractice,
} from '../shared/LessonPractice'
import { content, vocabulary, ana, kim } from './A201.data'
import type {
  VocabularySectionProps,
  GrammarSectionProps,
  ComprehensionSectionProps,
} from './A201.types'
import * as S from '../shared/Lesson.styles'
import * as A from './A201.styles'
export function VocabularySection({ group = 0 }: VocabularySectionProps) {
  const [ids, setIds] = useState<string[]>([])
  const [all, setAll] = useState(false)
  const [initial, setInitial] = useState(false)
  return (
    <S.Stack>
      <A.Vocabulary
        items={vocabulary[group] ?? []}
        columns={2}
        density="regular"
        imageVariant="scene"
        imageFit="contain"
        revealOnHover={false}
        revealVariant="tooltip"
        revealedIds={ids}
        showAll={all}
        showInitial={initial}
        onReveal={(id) =>
          setIds((old) => (old.includes(id) ? old : [...old, id]))
        }
      />
      <S.Center>
        <Button
          variant="secondary"
          size="sm"
          aria-pressed={initial}
          onClick={() => setInitial(!initial)}
        >
          Initial letters
        </Button>
        <Button
          variant="secondary"
          size="sm"
          aria-pressed={all}
          onClick={() => setAll(!all)}
        >
          {all ? 'Hide words' : 'Show all'}
        </Button>
      </S.Center>
      <S.Hint>
        {group === 0
          ? content.vocabulary1.oralPromptAfterReveal
          : content.vocabulary2.oralPromptAfterReveal}
      </S.Hint>
    </S.Stack>
  )
}
export function GrammarSection({ questions = false }: GrammarSectionProps) {
  const d = content.affirmative,
    q = content.questions
  if (questions)
    return (
      <S.Stack>
        <A.Formula>
          Subject + <b>am / is / are + not</b> + <A.NoWrap>verb-ing</A.NoWrap>
        </A.Formula>
        <A.Info>
          {q.negativeExamples.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </A.Info>
        <A.Formula>
          <b>Am / Is / Are</b> + subject + <A.NoWrap>verb-ing?</A.NoWrap>
        </A.Formula>
        <A.Grammar
          $questions
          title="Questions and short answers"
          tone="question"
          columns={{ subject: 'Question', example: 'Short answers' }}
          rows={q.questionRows.map((row, i) => ({
            id: String(i),
            subject: row[0],
            example: (
              <>
                {row[1]}
                <br />
                {row[2]}
              </>
            ),
          }))}
        />
        <A.Info>
          <p>
            <b>{q.whQuestion}</b>
          </p>
          <p>{q.whAnswer}</p>
        </A.Info>
        <S.Hint>{q.oralPrompt}</S.Hint>
      </S.Stack>
    )
  return (
    <S.Stack>
      <A.Columns>
        <A.Info>
          <b>{d.use[0]!.label}</b>
          <p>{d.use[0]!.example}</p>
        </A.Info>
        <A.Info>
          <b>{d.use[1]!.label}</b>
          <p>{d.use[1]!.usual}</p>
          <p>{d.use[1]!.temporary}</p>
          <S.Hint>{d.use[1]!.gloss}</S.Hint>
        </A.Info>
      </A.Columns>
      <A.Formula>
        Subject + <b>am / is / are</b> + <A.NoWrap>verb-ing</A.NoWrap>
      </A.Formula>
      <A.Grammar
        title="Present continuous"
        columns={{ subject: 'Subject + be', example: 'Example' }}
        rows={d.rows.map((row, i) => ({
          id: String(i),
          subject: row[0],
          example: row[1],
        }))}
      />
      <S.Hint>{d.oralPrompt}</S.Hint>
    </S.Stack>
  )
}
export function DialogueSection() {
  const [help, setHelp] = useState(false)
  return (
    <S.Stack>
      <A.Dialogue
        density="compact"
        lines={content.dialogue.dialogue.map((line, i) => ({
          id: String(i),
          speaker: line.speaker,
          side: line.speaker === 'Kim' ? ('start' as const) : ('end' as const),
          avatarUrl: line.speaker === 'Kim' ? kim : ana,
          content: (
            <>
              {line.text}
              {'cue' in line ? <ConnectionSignal /> : null}
            </>
          ),
        }))}
      />
      <S.Row>
        <Button
          variant="secondary"
          size="sm"
          aria-expanded={help}
          onClick={() => setHelp(!help)}
        >
          Word help
        </Button>
      </S.Row>
      {help ? (
        <S.Support>
          {Object.entries(content.dialogue.optionalGlosses).map(([en, pt]) => (
            <span key={en}>
              {en} = {pt}
            </span>
          ))}
        </S.Support>
      ) : null}
    </S.Stack>
  )
}
export function ComprehensionSection({
  second = false,
}: ComprehensionSectionProps) {
  const d = second ? content.comprehension2 : content.comprehension1
  return (
    <S.Stack>
      <ComprehensionPractice items={d.comprehension} />
      <SourceQuestions items={d.personal.map((question) => ({ question }))} />
    </S.Stack>
  )
}
export function GapSection() {
  const [solved, setSolved] = useState<string[]>([])
  const [wrong, setWrong] = useState<string[]>([])
  const [visible, setVisible] = useState(true)
  const root = useRef<HTMLDivElement>(null)
  const gap = content.gaps.gaps[solved.length]
  return (
    <S.Stack ref={root}>
      <S.Hint>{content.gaps.context}</S.Hint>
      <GapFillExercise
        items={content.gaps.dialogue.map((line, i) => {
          const match = line.text.match(/\{(\d)\}/),
            id = match?.[1]
          if (!id)
            return {
              id: 'line-' + i,
              speaker: line.speaker,
              before: line.text,
              answer: '',
            }
          const [before, after] = line.text.split('{' + id + '}')
          return {
            id,
            speaker: line.speaker,
            before,
            after,
            answer: solved.includes(id)
              ? content.gaps.gaps[Number(id) - 1]!.answer
              : undefined,
          }
        })}
        activeId={gap ? String(gap.id) : undefined}
        choices={
          gap
            ? gap.options.map((label) => ({
                id: label,
                label,
                state: wrong.includes(label) ? 'wrong' : undefined,
              }))
            : []
        }
        optionsVisible={visible}
        onOptionsToggle={() => setVisible(!visible)}
        onSelect={(_, choice) => {
          if (!gap) return
          if (choice !== gap.answer) {
            setWrong((old) => [...old, choice])
            return
          }
          setSolved((old) => [...old, String(gap.id)])
          setWrong([])
          setVisible(true)
          requestAnimationFrame(() =>
            root.current
              ?.querySelectorAll<HTMLButtonElement>('button')[1]
              ?.focus(),
          )
        }}
        status={
          gap
            ? `${solved.length} of 6`
            : 'Complete. Read the conversation with your teacher.'
        }
      />
      {wrong.length ? (
        <QuizFeedback tone="wrong">Try again.</QuizFeedback>
      ) : null}
    </S.Stack>
  )
}
