import { Button } from '../../../src/components/Button/Button'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { LessonShell, LessonIntro } from '../shared/LessonShell'
import {
  SourceQuestions,
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
  GrammarSection,
} from './A201.practice'
import {
  YourVersionSection,
  ListeningSection,
  RolePlaySection,
} from './A201.conversation'
import { content, order, dialogue, image } from './A201.data'
function audioTool(speech: LessonSpeech, part?: number) {
  const lines =
    part === undefined
      ? dialogue
      : part === 0
        ? dialogue.slice(0, 4)
        : dialogue.slice(4)
  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={() =>
        lines.some((l) => l.id === speech.playingId)
          ? speech.togglePause()
          : speech.speak(lines)
      }
    >
      {speech.playingId?.startsWith('D.')
        ? speech.paused
          ? 'Resume'
          : 'Pause'
        : 'Listen to the dialogue'}
    </Button>
  )
}
export function A201Lesson({ initialPageId }: LessonProps) {
  return (
    <LessonShell
      initialPageId={initialPageId}
      label="A2.01 · This week I’m working in Porto"
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
                  instruction="Responda às perguntas da sua professora sobre a aula passada."
                  lead={
                    <LessonIntro
                      level="A2"
                      lesson="Lesson 01"
                      before="This week I’m"
                      accent="working in Porto"
                      goal="Dizer o que você faz normalmente e o que está fazendo agora, e pedir para repetir quando a ligação falha."
                    />
                  }
                >
                  <SourceQuestions
                    items={[
                      'How’s the weather today?',
                      'Let’s go to the park on Saturday! Maybe at ten?',
                      'Agora proponha você um passeio e pergunte: Where do we meet? What time?',
                    ].map((question) => ({ question }))}
                  />
                </SlidePage>
              ),
            }
          if (id === 's2' || id === 's4') {
            const action = id === 's4'
            return {
              id,
              label: `Vocabulary · ${action ? 'What are you doing?' : 'A work trip'}`,
              content: (
                <SlidePage
                  eyebrow="Vocabulary"
                  width="exercise"
                  density="dense"
                  title={action ? 'What are you doing?' : 'A work trip'}
                  instruction={
                    action
                      ? 'Olhe a imagem. Você é essa pessoa: diga o que você está fazendo.'
                      : 'Olhe a imagem e tente dizer o nome em inglês.'
                  }
                >
                  <VocabularySection speech={speech} action={action} />
                </SlidePage>
              ),
            }
          }
          if (id === 's31' || id === 's32' || id === 's33')
            return {
              id,
              label: `Warm up · ${id.slice(2)}`,
              content: (
                <SlidePage
                  eyebrow="Warm up"
                  title="Choose the correct answer."
                  instruction="A Kim liga para a Ana e faz uma pergunta. Escolha o que a Ana responde. Depois responda sobre você."
                >
                  <WarmUpSection
                    index={Number(id.slice(2)) - 1}
                    speech={speech}
                  />
                </SlidePage>
              ),
            }
          if (id === 's51' || id === 's52') {
            const index = id === 's51' ? 0 : 1,
              pair = content.pronunciation[index]!
            return {
              id,
              label: `Pronunciation · ${pair.t}`,
              content: (
                <SlidePage
                  width="reading"
                  eyebrow="Pronunciation"
                  title={pair.t}
                  instruction="Ouça e diga qual você ouviu."
                >
                  <PronunciationPractice
                    index={index}
                    pair={pair}
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
              label: `Dialogue · A video call from Porto (${part + 1}/2)`,
              content: (
                <SlidePage
                  width="reading"
                  density="dense"
                  eyebrow="Dialogue"
                  title={`A video call from Porto (${part + 1}/2)`}
                  instruction={
                    part
                      ? 'A ligação continua. Escute e leia junto.'
                      : 'A Ana está em Porto a trabalho. A Kim, que acabou de se mudar para São Paulo, liga por vídeo. Escute e leia junto.'
                  }
                  tools={audioTool(speech, part)}
                >
                  <DialoguePractice
                    speech={speech}
                    lines={
                      part
                        ? content.dialogue.slice(4)
                        : content.dialogue.slice(0, 4)
                    }
                  />
                </SlidePage>
              ),
            }
          }
          if (id === 's61')
            return {
              id,
              label: 'Dialogue · Questions',
              content: (
                <SlidePage
                  width="reading"
                  eyebrow="Dialogue"
                  title="Questions"
                  instruction="Diga se as frases estão certas. Se não, diga o certo."
                  tools={audioTool(speech)}
                >
                  <ComprehensionPractice items={content.comprehension} />
                </SlidePage>
              ),
            }
          if (id === 's7')
            return {
              id,
              label: 'Grammar · I work or I’m working?',
              content: (
                <SlidePage
                  density="dense"
                  eyebrow="Grammar"
                  title="I work or I’m working?"
                  instruction="Diga a palavra antes de clicar na linha."
                >
                  <GrammarSection speech={speech} />
                </SlidePage>
              ),
            }
          if (id === 's8')
            return {
              id,
              label: 'Your version · A video call with Kim',
              content: (
                <SlidePage
                  density="dense"
                  width="conversation"
                  eyebrow="Your version"
                  title="A video call with Kim"
                  instruction="A mesma ligação, com a sua vida de verdade."
                >
                  <YourVersionSection speech={speech} />
                </SlidePage>
              ),
            }
          if (id === 's9')
            return {
              id,
              label: 'Listening · A message from Kim',
              content: (
                <SlidePage
                  density="dense"
                  eyebrow="Listening"
                  title="A message from Kim"
                  instruction="A ligação caiu. Um minuto depois, a Kim manda um áudio. Leia as frases, ouça e diga se estão certas. Se não, diga o certo."
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
                  title="Right or wrong?"
                  density="dense"
                  instruction="A frase está certa? Se não, diga do jeito certo."
                >
                  <CorrectionPractice
                    items={content.corrections}
                    speech={speech}
                    ownInstruction="A professora diz uma frase sua de hoje."
                  />
                </SlidePage>
              ),
            }
          if (id === 's11')
            return {
              id,
              label: 'Role play · What are you doing now?',
              content: (
                <SlidePage
                  density="dense"
                  width="expanded"
                  eyebrow="Role play"
                  title="What are you doing now?"
                  instruction="A Kim liga com a câmera desligada. Descubra onde ela está e o que está fazendo. Depois é a vez dela."
                >
                  <RolePlaySection active={activeId === id} />
                </SlidePage>
              ),
            }
          return {
            id,
            label: 'Homework · Before next class',
            content: (
              <SlidePage
                width="reading"
                eyebrow="Homework"
                title="Before next class"
                instruction="Suas três tarefas na plataforma. A professora manda os links pelo chat."
              >
                <LessonHomework
                  lesson="A2.01 · This week I’m working in Porto"
                  items={content.homework}
                  image={image('bridge')}
                />
              </SlidePage>
            ),
          }
        })
      }
    />
  )
}
