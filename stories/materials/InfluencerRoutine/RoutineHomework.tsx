import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Avatar } from '../../../src/components/Avatar/Avatar'
import { MobileFrame } from '../../../src/components/Device/MobileFrame'
import { MessagePhoneFrame } from '../../../src/components/Device/MessagePhoneFrame'
import { DeviceGallery } from '../../../src/components/Device/DeviceGallery'
import { MessageBubble } from '../../../src/components/Message/MessageBubble'
import { FlashcardSession } from '../../../src/components/Flashcard/FlashcardSession'
import { ShadowingSession } from '../../../src/components/Shadowing/ShadowingSession'
import { ShadowingWord } from '../../../src/components/Shadowing/ShadowingWord'
import { useMaterialTeacher } from '../shared/MaterialTeacherContext'
import { withVoiceMessageLayout } from '../shared/deviceTheme'
import { characterPortrait } from '../shared/characterPortraits'
import { routineScenes } from './RoutineScene'
import { useRoutinePracticeAudio } from './useRoutinePracticeAudio'
import source from './InfluencerRoutine.content.json'
import * as S from './RoutineHomework.styles'

const translations = [
  'acordar',
  'levantar da cama',
  'abrir as cortinas',
  'arrumar a cama',
  'fazer café',
  'tomar café da manhã',
  'escolher uma roupa',
  'se vestir',
  'calçar tênis',
  'prender o cabelo',
  'passar maquiagem',
  'arrumar a bolsa da academia',
  'aquecer',
  'levantar pesos',
  'usar um aparelho',
  'fazer uma pausa',
  'beber água',
  'alongar',
  'tirar a maquiagem',
  'lavar o rosto',
  'passar hidratante',
  'vestir o pijama',
  'colocar o despertador',
  'ir para a cama',
]
const cards = source.blocks.flatMap((block) =>
  block.vocab.map((word) => ({
    ...word,
    image: routineScenes[block.key as keyof typeof routineScenes],
  })),
)
const phrases = source.blocks.flatMap((block) => block.dialogue)
const messageTheme = withVoiceMessageLayout({
  contentWidth: '100%',
  phoneWidth: '18rem',
  phoneHeight: 'clamp(24rem, calc(100cqh - 15.625rem), 33.75rem)',
})

export function RoutineHomework({ active }: { active: boolean }) {
  const teacher = useMaterialTeacher()
  const audio = useRoutinePracticeAudio(active)
  const [cardIndex, setCard] = useState(0)
  const [flipped, flip] = useState(false)
  const [phraseIndex, setPhrase] = useState(0)
  const [translation, translate] = useState(false)
  const [speed, setSpeed] = useState('1x')
  const [repetitions, repeat] = useState(0)
  const card = cards[cardIndex]!
  const phrase = phrases[phraseIndex]!
  const nextCard = () => {
    audio.stop()
    flip(false)
    setCard((cardIndex + 1) % cards.length)
  }
  const shadowPlaying = audio.playingId === phrase.id
  const playShadow = () =>
    audio.play(phrase.id, phrase.text, speed === '0.75x' ? 0.75 : 1, () => {
      if (repetitions >= 2) {
        repeat(0)
        setPhrase((phraseIndex + 1) % phrases.length)
      } else repeat(repetitions + 1)
    })
  return (
    <DeviceGallery
      onActiveIdChange={audio.stop}
      selectionLabel="Choose your homework"
      items={[
        {
          id: 'flashcards',
          label: '1 · Flashcards',
          content: (
            <MobileFrame
              screenMode="application"
              aria-label="Flashcards — your daily routine"
            >
              <FlashcardSession
                aria-label="Flashcards: Your daily routine"
                backAction={{
                  label: 'Recomeçar os flashcards',
                  onClick: () => {
                    audio.stop()
                    setCard(0)
                    flip(false)
                  },
                }}
                progress={{
                  label: `Progresso ${cardIndex + 1} de ${cards.length}`,
                  current: cardIndex + 1,
                  total: cards.length,
                  revealed: flipped,
                }}
                card={{
                  id: card.id,
                  word: card.label,
                  translation: translations[cardIndex],
                  example: card.example,
                  backExample: card.example,
                  image: { src: card.image },
                }}
                flipped={flipped}
                onFlip={() => flip(!flipped)}
                audio={{
                  label: 'Ouvir pronúncia',
                  playing: audio.playingId === card.id,
                  onFrontPlay: () => audio.play(card.id, card.audioText),
                  onBackPlay: () => audio.play(card.id, card.audioText),
                }}
                labels={{
                  flip: 'Virar card',
                  flipHint: 'toque pra virar',
                  rateQuestion: 'Você lembrava?',
                }}
                ratings={(['again', 'hard', 'good', 'easy'] as const).map(
                  (grade, i) => ({
                    grade,
                    label: ['Errei', 'Difícil', 'Bom', 'Fácil'][i]!,
                    interval: '',
                  }),
                )}
                onRate={nextCard}
              />
              {audio.error && <S.Error role="alert">{audio.error}</S.Error>}
            </MobileFrame>
          ),
        },
        {
          id: 'shadowing',
          label: '2 · Shadowing',
          content: (
            <MobileFrame
              screenMode="application"
              aria-label="Shadowing — a day in my life"
            >
              <ShadowingSession
                aria-label="Shadowing: A day in my life"
                backAction={{
                  label: 'Recomeçar o shadowing',
                  onClick: () => {
                    audio.stop()
                    setPhrase(0)
                    repeat(0)
                  },
                }}
                name="A day in my life"
                counter={`Frase ${phraseIndex + 1}/${phrases.length}`}
                progress={(phraseIndex + repetitions / 3) / phrases.length}
                phraseKey={phrase.id}
                previous={phrases[phraseIndex - 1]?.text}
                next={phrases[phraseIndex + 1]?.text}
                speaker={{
                  name: phrase.speaker,
                  imageUrl: characterPortrait(phrase.speaker),
                }}
                phrase={phrase.text.split(' ').map((word, i) => (
                  <span key={i}>
                    <ShadowingWord>{word}</ShadowingWord>{' '}
                  </span>
                ))}
                translation={translation ? phrase.translation : undefined}
                repetitions={{
                  total: 3,
                  value: repetitions,
                  label: `${repetitions}/3 escutas`,
                }}
                controls={{
                  playing: shadowPlaying,
                  playLabel: shadowPlaying ? 'Pausar frase' : 'Tocar frase',
                  onPlay: playShadow,
                  speed,
                  speedOptions: ['0.75x', '1x'],
                  onSpeedChange: (value) => {
                    audio.stop()
                    setSpeed(value)
                  },
                  translationVisible: translation,
                  onTranslationToggle: () => translate(!translation),
                }}
              />
              {audio.error && <S.Error role="alert">{audio.error}</S.Error>}
            </MobileFrame>
          ),
        },
        {
          id: 'voice',
          label: '3 · Voice note',
          content: (
            <ThemeProvider theme={messageTheme}>
              <MessagePhoneFrame
                aria-label="Voice-note assignment for your teacher"
                time="20:30"
                contact={
                  <Avatar
                    name={teacher.name}
                    imageUrl={teacher.avatarUrl}
                    initials={teacher.name.trim().slice(0, 1)}
                    namePosition="beside"
                    size="sm"
                    textTone="inherit"
                  />
                }
                composerPlaceholder="Record your voice note in WhatsApp"
              >
                <MessageBubble
                  side="incoming"
                  appearance="messaging"
                  timestamp="20:30"
                >
                  Tell me about your day 🌙 What do you do in the morning,
                  before the gym and before bed?
                </MessageBubble>
                <MessageBubble
                  side="outgoing"
                  appearance="messaging"
                  timestamp=""
                >
                  <S.Assignment>
                    <strong>Your voice note · 45–60 seconds</strong>
                    <p>
                      I usually…
                      <br />
                      Before the gym, I…
                      <br />
                      In the evening, I…
                    </p>
                    <p>Finish with two questions for your teacher</p>
                  </S.Assignment>
                </MessageBubble>
              </MessagePhoneFrame>
            </ThemeProvider>
          ),
        },
      ]}
    />
  )
}
