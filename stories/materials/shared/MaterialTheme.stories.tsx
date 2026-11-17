import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../../../src/components/Button/Button'
import { TextInput } from '../../../src/components/Form/TextInput'
import { TextareaInput } from '../../../src/components/Form/TextareaInput'
import { QuizOption } from '../../../src/components/Quiz/QuizOption'
import { QuizFeedback } from '../../../src/components/Quiz/QuizFeedback'
import { ChoiceCard } from '../../../src/components/ChoiceCard/ChoiceCard'
import { LearningDialogue } from '../../../src/components/Exercise/LearningDialogue'
import { VoiceMessageDemo } from '../../components/VoiceMessage/VoiceMessageDemo'
import { MaterialTheme } from './MaterialTheme'
import * as S from './Lesson.styles'
function ThemePreview() {
  return (
    <MaterialTheme>
      <S.Surface>
        <h2>Material escuro</h2>
        <S.Row>
          <Button>Ouvir</Button>
          <Button variant="secondary">Repetir</Button>
        </S.Row>
        <TextInput aria-label="Resposta" placeholder="Escreva sua resposta" />
        <TextareaInput aria-label="Notas da aula" placeholder="Anote aqui" />
        <TextInput aria-label="Somente leitura" readOnly value="In the end" />
        <TextInput aria-label="Indisponível" disabled value="Indisponível" />
        <ChoiceCard>Aula</ChoiceCard>
        <ChoiceCard variant="lesson" aria-pressed>
          Aula selecionada
        </ChoiceCard>
        <QuizOption letter="A">I’d been walking.</QuizOption>
        <QuizOption density="compact" letter="B" state="correct">
          I’d been waiting.
        </QuizOption>
        <QuizOption density="compact" letter="C" state="wrong">
          I was walking since.
        </QuizOption>
        <QuizFeedback tone="correct">Correto</QuizFeedback>
        <QuizFeedback tone="wrong">Tente novamente</QuizFeedback>
        <LearningDialogue
          completedIds={['one']}
          lines={[
            {
              id: 'one',
              speaker: 'You',
              side: 'end',
              content: 'I’d been waiting.',
              actionLabel: 'Mark response',
            },
          ]}
          onComplete={() => {}}
        />
        <VoiceMessageDemo />
      </S.Surface>
    </MaterialTheme>
  )
}
const meta = {
  title: 'Materials/Theme',
  component: ThemePreview,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof ThemePreview>
export default meta
export const DarkControls: StoryObj<typeof meta> = {}
