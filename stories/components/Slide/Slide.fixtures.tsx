import { SlidePage } from '../../../src/components/Slide/SlidePage'
import type { SlideDeckPage } from '../../../src/components/Slide/SlideDeck.types'
import { WarmUp, Conversation } from './Slide.fixtures.components'
import * as Styled from './Slide.stories.styles'

export const lessonPages: readonly SlideDeckPage[] = [
  {
    id: 'intro',
    label: 'Introduce yourself',
    content: (
      <SlidePage
        eyebrow="A1 · Lesson 01"
        title="Introduce yourself"
        width="focused"
        tone="inverse"
      >
        <Styled.Intro>
          <Styled.Goal>Goal</Styled.Goal>
          <p>Dizer o seu nome, de onde você é e como você está.</p>
        </Styled.Intro>
      </SlidePage>
    ),
  },
  {
    id: 'warm-up',
    label: 'Warm up',
    content: (
      <SlidePage
        eyebrow="Warm up"
        title="Choose the correct answer."
        instruction="Escolha a resposta correta de acordo com a imagem."
        width="focused"
      >
        <WarmUp />
      </SlidePage>
    ),
  },
  {
    id: 'conversation',
    label: 'Let’s talk',
    content: (
      <SlidePage
        eyebrow="Conversation"
        title="Let’s talk"
        instruction="Responda sobre você e devolva a pergunta: And you?"
        width="focused"
      >
        <Conversation />
      </SlidePage>
    ),
  },
]

export const longPage: SlideDeckPage = {
  id: 'long-content',
  label: 'Conteúdo longo',
  content: (
    <SlidePage
      eyebrow="Conversation"
      title="Let’s talk"
      instruction="Escolham as perguntas e conversem."
      width="focused"
    >
      <Styled.Stack>
        {Array.from({ length: 14 }, (_, index) => (
          <Styled.Panel key={index}>
            <Styled.Question>
              {index + 1}. {index % 2 ? 'Where are you from?' : 'How are you?'}
            </Styled.Question>
          </Styled.Panel>
        ))}
      </Styled.Stack>
    </SlidePage>
  ),
}
