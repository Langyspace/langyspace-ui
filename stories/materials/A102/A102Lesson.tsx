import type { ReactNode } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { GrammarTable } from '../../../src/components/InteractiveMaterial/GrammarTable'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { LessonIntro, LessonShell } from '../shared/LessonShell'
import type { LessonProps } from '../shared/Lesson.types'
import * as S from '../shared/Lesson.styles'
import {
  NameChoice,
  NameDialogue,
  NameModel,
  NameRolePlay,
  NameVocabulary,
  Prompts,
  TalkSupport,
} from './A102.sections'
import data from './A102.content.json'

const groups = [
  ['s31', 's32', 's33', 's34', 's35'],
  ['s41', 's42', 's43', 's44', 's45', 's46'],
  ['s141', 's142', 's143', 's144'],
  ['s161', 's162'],
  ['s91', 's92', 's93'],
]
const order = data.pages.map(({ id }) => id)

export function A102Lesson({ initialPageId }: LessonProps) {
  return (
    <LessonShell
      materialKey="a1-02"
      label="A1.02 · Your name and number"
      initialPageId={initialPageId}
      pageIds={order}
      exerciseGroups={groups}
      themeSwitch
      pages={(speech) => {
        const activities: Record<string, ReactNode> = {
          s1: <Prompts items={data.review.map((q) => ({ q }))} />,
          s7: <NameDialogue speech={speech} />,
          s17: <Prompts items={data.comprehension} />,
          s5: <NameVocabulary speech={speech} />,
          s6: <NameVocabulary speech={speech} numbers />,
          s2: (
            <GrammarTable
              title="Possessives"
              columns={{
                subject: 'Pronome',
                verb: 'Possessivo',
                example: 'Exemplo',
              }}
              rows={data.possessives.map((row) => ({
                ...row,
                audioLabel: 'Ouvir: ' + row.verb,
              }))}
              explanation={
                <S.Stack>
                  {data.possessiveNotes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </S.Stack>
              }
              onPlay={(id) => {
                const row = data.possessives.find(
                  (candidate) => candidate.id === id,
                )
                if (row) speech.speak([{ id, text: row.verb }])
              }}
            />
          ),
          s22: (
            <S.Stack>
              {data.checks.map((item) => (
                <NameChoice
                  key={item.s}
                  speech={speech}
                  item={{ t: item.s, o: item.o, a: item.o.indexOf(item.a) }}
                />
              ))}
            </S.Stack>
          ),
          s23: (
            <Prompts
              items={[
                { q: 'my', a: 'My name is Ana. It’s A-N-A.' },
                {
                  q: 'his / her',
                  a: 'My best friend’s name is Leo. His number is 98765-4321.',
                },
                { q: 'our / their', a: 'Our last name is Silva.' },
              ]}
            />
          ),
          s46: <Prompts items={data.personal} />,
          s13: (
            <GrammarTable
              title="Check and correct"
              tone="question"
              columns={{
                subject: 'Check',
                verb: 'Confirm',
                example: 'Correct',
              }}
              rows={data.corrections}
              explanation={
                <S.Stack>
                  {data.correctionNotes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </S.Stack>
              }
            />
          ),
          s15: (
            <NameModel
              question="Spell it!"
              models={[
                'Kim → {K-I-M}',
                'Grace → {G-R-A-C-E}',
                'Hugo → {H-U-G-O}',
              ]}
            />
          ),
          s8: <NameDialogue speech={speech} practice />,
          s11: <NameRolePlay />,
          s122: <NameChoice speech={speech} item={data.quiz} />,
          s123: (
            <S.Stack>
              <S.Hint>
                Send this audio to your teacher before the next class.
              </S.Hint>
              <Prompts items={data.script.map((q) => ({ q }))} />
            </S.Stack>
          ),
          ...Object.fromEntries(
            data.warm.map((item, i) => [
              's' + (31 + i),
              <NameChoice item={item} speech={speech} />,
            ]),
          ),
          ...Object.fromEntries(
            data.checking.map((item, i) => [
              's' + (141 + i),
              <NameChoice item={item} speech={speech} />,
            ]),
          ),
          ...Object.fromEntries(
            data.models.map((item, i) => [
              's' + (41 + i),
              <NameModel
                question={item.q}
                cue={item.im}
                alt={item.alt}
                models={[item.a]}
              />,
            ]),
          ),
          ...Object.fromEntries(
            data.challenge.map((item, i) => [
              's' + (161 + i),
              <NameModel
                question={item.t}
                cue={item.im}
                alt={item.alt}
                models={[item.a]}
              />,
            ]),
          ),
          ...Object.fromEntries(
            data.talk.map((group, i) => [
              's' + (91 + i),
              <S.Stack>
                <TalkSupport words={group.w} />
                <Prompts items={group.q} />
              </S.Stack>,
            ]),
          ),
        }
        return data.pages.map(({ id, title, instruction, eyebrow }) => ({
          id,
          label:
            id === 's1'
              ? title
              : [eyebrow === title ? '' : eyebrow, title]
                  .filter(Boolean)
                  .join(' · '),
          content: (
            <SlidePage
              title={id === 's1' ? 'Do you remember?' : title}
              eyebrow={eyebrow}
              lead={
                id === 's1' ? (
                  <LessonIntro
                    level="A1.02"
                    lesson="Lesson 2"
                    before="Your name"
                    accent="and number"
                    goal="Dizer, soletrar e confirmar os seus dados e os das pessoas da sua vida: nome, sobrenome e telefone."
                    compact
                  />
                ) : undefined
              }
              instruction={instruction || undefined}
            >
              {activities[id]}
              {id === 's6' && speech.error ? (
                <S.AudioError role="status">
                  {speech.error}
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() =>
                      speech.speak([{ id: 'PH1', text: data.phoneReading }])
                    }
                  >
                    Tentar novamente
                  </Button>
                </S.AudioError>
              ) : null}
            </SlidePage>
          ),
        }))
      }}
    />
  )
}
