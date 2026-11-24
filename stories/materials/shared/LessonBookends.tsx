import courseGoals from '../Course/course-goals81.json'
import type { ReactNode } from 'react'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { MobileFrame } from '../../../src/components/Device/MobileFrame'
import { MessagePhoneFrame } from '../../../src/components/Device/MessagePhoneFrame'
import { MessageBubble } from '../../../src/components/Message/MessageBubble'
import { Avatar } from '../../../src/components/Avatar/Avatar'
import langyProfile from '../../../src/assets/brand/profile.png'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import catalog from '../Standalone/catalog.json'
import type { LessonOpeningProps } from './LessonBookends.types'
import { hasLessonOpeningReview } from './lessonOpeningPolicy.data'
import { LessonPractice } from './LessonPractice'

const covers = import.meta.glob('../*/assets/*cover*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>
const goals: Readonly<Record<string, string>> = {
  ...Object.fromEntries(Object.values(courseGoals).map((x) => [x.key, x.goal])),
  'a1-01': 'Say who you are, where you’re from and how you feel',
  'a1-02': 'Share, spell and check names and phone numbers',
  'a1-03': 'Introduce the people in your life',
  'a1-04': 'Talk about your routine and arrange a time to meet',
  'a1-05': 'Talk about food you like and shop at a market',
  'a1-06': 'Talk about pets and where things are at home',
  'a2-01': 'Compare what is happening now with your usual routine',
  'b1-01': 'Catch up with a friend about recent activities and results',
  'b2-01': 'Tell a travel story and explain what happened before the problem',
  'c1-01': 'Give clear, constructive feedback and negotiate a next step',
  'trial-a1-a2': 'Meet your teacher and talk about what you like',
  'trial-b1':
    'Talk about a trip, deal with a change of plans and keep the conversation going',
  'trial-b2':
    'Explore work-life boundaries, weigh trade-offs and defend a nuanced point of view',
  'tema-frontend':
    'Explain a bug, share a work update and practise an interview',
}

export function LessonOpening({
  materialKey,
  review,
  reviewTitle,
  instruction,
  closing = false,
  children,
}: LessonOpeningProps) {
  if (review && !hasLessonOpeningReview(materialKey))
    throw new Error(
      `Opening review must identify earlier content: ${materialKey}`,
    )
  const sideContent = closing ? children : review?.content
  const sideTitle = closing
    ? reviewTitle
    : review
      ? `Review: ${review.title}`
      : undefined
  const sideInstruction = closing ? instruction : review?.instruction
  const entry = catalog.find((item) => item.key === materialKey)
  if (!entry) throw new Error(`Missing lesson cover: ${materialKey}`)
  const src =
    covers['../' + entry.coverSource.replace('stories/materials/', '')]
  if (!src) throw new Error(`Missing approved cover asset: ${materialKey}`)
  return (
    <SlidePage
      title={closing ? 'Sua aula experimental chegou ao fim!' : entry.title}
      lang={closing ? 'pt-BR' : undefined}
      eyebrow={
        materialKey.startsWith('trial-')
          ? `${entry.levels.join(' / ')} · Trial lesson`
          : entry.code
      }
      instruction={
        closing
          ? 'Vamos continuar? Fale com a equipe da Langy para começar seu curso de inglês'
          : goals[materialKey]
      }
      cover={{ src, alt: `Illustration for ${entry.title}` }}
      coverPlacement="after-heading"
      layout={sideContent ? 'split' : 'stacked'}
      width={sideContent ? 'expanded' : { mediaAspectRatio: 16 / 9 }}
      density="compact"
    >
      {sideContent ? (
        <Common.Stack>
          <Common.Heading $align={closing ? 'center' : undefined}>
            {sideTitle}
          </Common.Heading>
          {sideInstruction ? (
            <Common.Hint>{sideInstruction}</Common.Hint>
          ) : null}
          {sideContent}
        </Common.Stack>
      ) : null}
    </SlidePage>
  )
}

export function LessonPracticePlan({
  tasks,
  example,
}: {
  tasks: readonly { title: string; description: string }[]
  example?: ReactNode
}) {
  return (
    <MobileFrame
      title="Langy · Practice"
      aria-label="Your practice before the next class"
    >
      {tasks.map((task) => (
        <Common.Surface as="article" key={task.title}>
          <strong>{task.title}</strong>
          <Common.Paragraph>{task.description}</Common.Paragraph>
        </Common.Surface>
      ))}
      {example ? (
        <Common.Surface>
          <strong>Example</strong>
          <Common.Paragraph>{example}</Common.Paragraph>
        </Common.Surface>
      ) : null}
    </MobileFrame>
  )
}

/** Regular-course practice uses the same cover, grid and mobile frame as the rest of the library. */
export function LessonPracticeClosing({
  materialKey,
  active,
}: {
  materialKey: string
  active: boolean
}) {
  const entry = catalog.find((item) => item.key === materialKey)
  if (!entry) throw new Error(`Missing lesson cover: ${materialKey}`)
  const src =
    covers['../' + entry.coverSource.replace('stories/materials/', '')]
  if (!src) throw new Error(`Missing approved cover asset: ${materialKey}`)
  return (
    <SlidePage
      title="You’ve finished today’s lesson"
      instruction="Keep practising with these two activities before our next class"
      eyebrow={entry.code + ' · Practice'}
      cover={{ src, alt: `Illustration for ${entry.title}` }}
      coverPlacement="after-heading"
      coverSize="compact"
      layout="split"
      splitRatio="one-two"
      width="expanded"
      density="compact"
    >
      <LessonPractice materialKey={materialKey} active={active} />
    </SlidePage>
  )
}

export function TrialNextSteps({ materialKey }: { materialKey: string }) {
  return (
    <LessonOpening
      materialKey={materialKey}
      reviewTitle="Mande uma mensagem para a Langy"
      closing
    >
      <MessagePhoneFrame
        contact={
          <Avatar
            imageUrl={langyProfile}
            initials="L"
            name="Langy"
            namePosition="beside"
            textTone="inherit"
            size="sm"
          />
        }
        size="large"
        composerPlaceholder="Mensagem"
        aria-label="Exemplo de mensagem para a Langy"
        lang="pt-BR"
      >
        <MessageBubble side="outgoing" appearance="messaging" timestamp="9:41">
          Oi! Quero fechar o curso de inglês com vocês 😊
        </MessageBubble>
      </MessagePhoneFrame>
    </LessonOpening>
  )
}
