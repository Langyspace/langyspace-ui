import type { ReactNode } from 'react'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { LessonIntro, LessonShell } from '../shared/LessonShell'
import type { LessonProps } from '../shared/Lesson.types'
import * as S from '../shared/Lesson.styles'
import {
  CafeChoice,
  CafeDialogue,
  CafeGrammar,
  CafeModel,
  CafePrompts,
  CafeRolePlay,
  CafeTalk,
  CafeVocabulary,
} from './A108.sections'
import content from './A108.content.json'

const pageId = (index: number) => `s${index}`
const groups = [
  [31, 32, 33, 34, 35],
  [41, 42, 43, 44, 45, 46],
  [141, 142, 143, 144],
  [161, 162],
  [91, 92, 93],
].map((group) => group.map(pageId))
const order = content.pages.map(pageId)
const headings: Readonly<
  Record<number, { title: string; instruction?: string }>
> = {
  22: { title: 'Quick check', instruction: 'Choose the correct word.' },
  23: {
    title: 'Make your own examples',
    instruction: 'Create 3 orders for you and the people in your life.',
  },
  46: {
    title: 'Now you',
    instruction: 'Answer about you and the people in your life.',
  },
  122: { title: 'Quiz', instruction: 'Answer one quiz question now.' },
  123: { title: 'Challenge' },
  ...Object.fromEntries(content.talk.map(({ t }, i) => [91 + i, { title: t }])),
}

export function A108Lesson({ initialPageId }: LessonProps) {
  return (
    <LessonShell
      materialKey="a1-08"
      label="A1.08 · At the café"
      pageIds={order}
      initialPageId={initialPageId}
      exerciseGroups={groups}
      themeSwitch
      pages={(speech) => {
        const activities: Record<number, ReactNode> = {
          1: (
            <CafePrompts
              items={content.review.map((questions) => ({
                q: questions.join(' '),
              }))}
            />
          ),
          2: <CafeGrammar speech={speech} />,
          5: <CafeVocabulary speech={speech} />,
          6: <CafeVocabulary speech={speech} tray />,
          7: <CafeDialogue speech={speech} />,
          8: <CafeDialogue speech={speech} fill />,
          11: <CafeRolePlay />,
          13: <CafeGrammar speech={speech} pay />,
          15: (
            <CafeModel
              slide="s15"
              question="Your order"
              models={content.yourOrder}
            />
          ),
          17: <CafePrompts items={content.comprehension} />,
          22: (
            <S.Stack>
              {content.quickCheck.map((item) => (
                <CafeChoice
                  key={item.s}
                  slide="s22"
                  speech={speech}
                  item={{ t: item.s, o: item.o, a: item.o.indexOf(item.a) }}
                />
              ))}
            </S.Stack>
          ),
          23: (
            <CafePrompts
              items={content.make.map((item) => ({ q: item.p, a: item.ex }))}
            />
          ),
          46: <CafePrompts items={content.yourPractice} />,
          122: (
            <CafeChoice
              slide="s122"
              speech={speech}
              item={{
                ...content.quiz,
                t: 'Laura wants an orange juice. What does she say?',
                im: 'n8_orange',
              }}
            />
          ),
          123: (
            <S.Stack>
              <S.Hint>
                Send this audio to your teacher before the next class.
              </S.Hint>
              <CafePrompts items={content.homework.map((q) => ({ q }))} />
            </S.Stack>
          ),
          ...Object.fromEntries(
            content.warmUp.map((item, i) => [
              31 + i,
              <CafeChoice slide={pageId(31 + i)} speech={speech} item={item} />,
            ]),
          ),
          ...Object.fromEntries(
            content.practice.map((item, i) => [
              41 + i,
              <CafeModel
                slide={pageId(41 + i)}
                question={item.q}
                image={item.im}
                alt={item.alt}
                models={[item.a]}
              />,
            ]),
          ),
          ...Object.fromEntries(
            content.fixOrder.map((item, i) => [
              141 + i,
              <CafeChoice
                slide={pageId(141 + i)}
                speech={speech}
                item={item}
              />,
            ]),
          ),
          ...Object.fromEntries(
            content.challenge.map((item, i) => [
              161 + i,
              <CafeModel
                slide={pageId(161 + i)}
                question={item.t}
                image={item.im}
                alt={item.alt}
                models={[item.a]}
              />,
            ]),
          ),
          ...Object.fromEntries(
            content.talk.map((group, i) => [
              91 + i,
              <CafeTalk
                slide={pageId(91 + i)}
                items={group.q}
                words={group.w}
              />,
            ]),
          ),
        }
        return content.pages.map((number) => {
          const base = number > 20 ? Math.floor(number / 10) : number
          const [eyebrow = '', defaultTitle = '', defaultInstruction = ''] =
            content.heads[base - 1] ?? []
          const title = headings[number]?.title ?? defaultTitle
          const instruction =
            headings[number]?.instruction ?? defaultInstruction
          return {
            id: pageId(number),
            label: `${eyebrow} · ${title}`,
            content: (
              <SlidePage
                eyebrow={eyebrow}
                title={title}
                instruction={instruction}
                width={number === 11 ? 'expanded' : 'reading'}
                lead={
                  number === 1 ? (
                    <LessonIntro
                      level="A1"
                      lesson="Lesson 08"
                      before="At the "
                      accent="café"
                      goal={content.goal}
                      compact
                    />
                  ) : undefined
                }
              >
                {activities[number]}
              </SlidePage>
            ),
          }
        })
      }}
    />
  )
}
