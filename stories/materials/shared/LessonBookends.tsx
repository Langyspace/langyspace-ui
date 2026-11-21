import type { ReactNode } from 'react'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { MobileFrame } from '../../../src/components/Device/MobileFrame'
import { MessagePhoneFrame } from '../../../src/components/Device/MessagePhoneFrame'
import { MessageBubble } from '../../../src/components/Message/MessageBubble'
import { Avatar } from '../../../src/components/Avatar/Avatar'
import langyProfile from '../../../src/assets/brand/profile.png'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import catalog from '../Standalone/catalog.json'

const covers = import.meta.glob('../*/assets/catalog-cover40.webp', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>
const goals: Readonly<Record<string, string>> = {
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
  'trial-b1': 'Share a memorable trip and ask about someone else’s experience',
  'trial-b2': 'Explore your opinions about work and life',
  'tema-frontend':
    'Explain a bug, share a work update and practise an interview',
}

export function LessonOpening({
  materialKey,
  reviewTitle = 'Review',
  instruction,
  closing = false,
  children,
}: {
  materialKey: string
  reviewTitle?: string
  instruction?: ReactNode
  closing?: boolean
  children?: ReactNode
}) {
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
      coverPlacement={closing ? 'after-heading' : undefined}
      layout={children ? 'split' : 'stacked'}
      width={children ? 'expanded' : { mediaAspectRatio: 16 / 9 }}
      density="compact"
    >
      {children ? (
        <Common.Stack>
          <Common.Heading $align={closing ? 'center' : undefined}>
            {reviewTitle}
          </Common.Heading>
          {instruction ? <Common.Hint>{instruction}</Common.Hint> : null}
          {children}
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
