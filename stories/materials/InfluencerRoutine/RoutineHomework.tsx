import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Avatar } from '../../../src/components/Avatar/Avatar'
import { MobileFrame } from '../../../src/components/Device/MobileFrame'
import { MessagePhoneFrame } from '../../../src/components/Device/MessagePhoneFrame'
import { DeviceGallery } from '../../../src/components/Device/DeviceGallery'
import { MessageBubble } from '../../../src/components/Message/MessageBubble'
import { IconButton } from '../../../src/components/IconButton/IconButton'
import { FlashcardProgress } from '../../../src/components/Flashcard/FlashcardProgress'
import { FlashcardStage } from '../../../src/components/Flashcard/FlashcardStage'
import { FlashcardDeck } from '../../../src/components/Flashcard/FlashcardDeck'
import { FlashcardGhost } from '../../../src/components/Flashcard/FlashcardGhost'
import { FlashcardFlip } from '../../../src/components/Flashcard/FlashcardFlip'
import { FlashcardSwiper } from '../../../src/components/Flashcard/FlashcardSwiper'
import { FlashcardFace } from '../../../src/components/Flashcard/FlashcardFace'
import { FlashcardFront } from '../../../src/components/Flashcard/FlashcardFront'
import { FlashcardBack } from '../../../src/components/Flashcard/FlashcardBack'
import { FlashcardWord } from '../../../src/components/Flashcard/FlashcardWord'
import { FlashcardImagePanel } from '../../../src/components/Flashcard/FlashcardImagePanel'
import { FlashcardAudioButton } from '../../../src/components/Flashcard/FlashcardAudioButton'
import { FlashcardFlipButton } from '../../../src/components/Flashcard/FlashcardFlipButton'
import { FlashcardFlipHint } from '../../../src/components/Flashcard/FlashcardFlipHint'
import { FlashcardRatingButton } from '../../../src/components/Flashcard/FlashcardRatingButton'
import { SessionProgress } from '../../../src/components/SessionProgress/SessionProgress'
import { ShadowingReader } from '../../../src/components/Shadowing/ShadowingReader'
import { ShadowingPhraseStack } from '../../../src/components/Shadowing/ShadowingPhraseStack'
import { ShadowingContextPhrase } from '../../../src/components/Shadowing/ShadowingContextPhrase'
import { ShadowingActivePhrase } from '../../../src/components/Shadowing/ShadowingActivePhrase'
import { ShadowingWord } from '../../../src/components/Shadowing/ShadowingWord'
import { ShadowingTranslation } from '../../../src/components/Shadowing/ShadowingTranslation'
import { ShadowingControlDock } from '../../../src/components/Shadowing/ShadowingControlDock'
import { ShadowingRepetitions } from '../../../src/components/Shadowing/ShadowingRepetitions'
import { PracticePlaybackControls } from '../../../src/components/Practice/PracticePlaybackControls'
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
  const cardAudio = (
    <FlashcardAudioButton
      label="Ouvir"
      playing={audio.playingId === card.id}
      onClick={() => audio.play(card.id, card.audioText)}
    />
  )
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
              <S.Cards aria-label="Flashcards: Your daily routine">
                <S.Header>
                  <IconButton
                    aria-label="Recomeçar os flashcards"
                    size="sm"
                    onClick={() => {
                      audio.stop()
                      setCard(0)
                      flip(false)
                    }}
                  >
                    ↶
                  </IconButton>
                  <FlashcardProgress
                    label={`${cardIndex + 1} de ${cards.length}`}
                    current={cardIndex + 1}
                    total={cards.length}
                    revealed={flipped}
                  />
                </S.Header>
                <FlashcardStage>
                  <FlashcardDeck>
                    <FlashcardGhost
                      layer={2}
                      obscured={flipped}
                      aria-hidden="true"
                    />
                    <FlashcardGhost
                      layer={1}
                      obscured={flipped}
                      aria-hidden="true"
                    />
                    <FlashcardSwiper>
                      <FlashcardFlip flipped={flipped}>
                        <FlashcardFace side="front">
                          <FlashcardFront>
                            <FlashcardFlipButton
                              label="Virar cartão"
                              onClick={() => flip(!flipped)}
                            />
                            <FlashcardImagePanel>
                              <S.Picture
                                src={card.image}
                                alt="A moment from Ana’s routine"
                              />
                              {cardAudio}
                            </FlashcardImagePanel>
                            <FlashcardWord example={card.example}>
                              {card.label}
                            </FlashcardWord>
                            <FlashcardFlipHint>
                              Toque para virar
                            </FlashcardFlipHint>
                          </FlashcardFront>
                        </FlashcardFace>
                        <FlashcardFace side="back">
                          {flipped && (
                            <FlashcardBack
                              term={
                                <>
                                  {cardAudio}
                                  {card.label}
                                </>
                              }
                              translation={translations[cardIndex]}
                              example={card.example}
                            />
                          )}
                        </FlashcardFace>
                      </FlashcardFlip>
                    </FlashcardSwiper>
                  </FlashcardDeck>
                </FlashcardStage>
                <S.Rating>
                  {flipped ? (
                    <>
                      <span>Lembrou?</span>
                      <S.RatingRow>
                        {(['again', 'hard', 'good', 'easy'] as const).map(
                          (grade, i) => (
                            <FlashcardRatingButton
                              key={grade}
                              grade={grade}
                              interval=""
                              onClick={nextCard}
                            >
                              {['De novo', 'Difícil', 'Bom', 'Fácil'][i]}
                            </FlashcardRatingButton>
                          ),
                        )}
                      </S.RatingRow>
                    </>
                  ) : (
                    <span>Pense no significado e vire o cartão</span>
                  )}
                </S.Rating>
                {audio.error && <S.Error role="alert">{audio.error}</S.Error>}
              </S.Cards>
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
              <S.Shadow>
                <S.Header>
                  <IconButton
                    aria-label="Recomeçar o shadowing"
                    size="sm"
                    onClick={() => {
                      audio.stop()
                      setPhrase(0)
                      repeat(0)
                    }}
                  >
                    ↶
                  </IconButton>
                  <SessionProgress
                    name="A day in my life"
                    counter={`${phraseIndex + 1} / ${phrases.length}`}
                    value={(phraseIndex / phrases.length) * 100}
                  />
                </S.Header>
                <ShadowingReader>
                  <ShadowingPhraseStack>
                    <ShadowingContextPhrase>
                      {phrases[phraseIndex - 1]?.text ?? ''}
                    </ShadowingContextPhrase>
                    <ShadowingActivePhrase
                      speaker={{
                        name: phrase.speaker,
                        imageUrl: characterPortrait(phrase.speaker),
                      }}
                    >
                      {phrase.text.split(' ').map((word, i) => (
                        <span key={i}>
                          <ShadowingWord>{word}</ShadowingWord>{' '}
                        </span>
                      ))}
                    </ShadowingActivePhrase>
                    <ShadowingContextPhrase>
                      {phrases[phraseIndex + 1]?.text ?? ''}
                    </ShadowingContextPhrase>
                  </ShadowingPhraseStack>
                  <ShadowingTranslation>
                    {translation ? phrase.translation : null}
                  </ShadowingTranslation>
                </ShadowingReader>
                <ShadowingControlDock>
                  <ShadowingRepetitions
                    total={3}
                    value={repetitions}
                    playing={shadowPlaying}
                  >
                    Ouça e repita · {repetitions} / 3
                  </ShadowingRepetitions>
                  <PracticePlaybackControls
                    playing={shadowPlaying}
                    playLabel={shadowPlaying ? 'Pausar' : 'Ouvir e repetir'}
                    onPlay={playShadow}
                    speed={speed}
                    speedOptions={['0.75x', '1x']}
                    onSpeedChange={(value) => {
                      audio.stop()
                      setSpeed(value)
                    }}
                    translationVisible={translation}
                    onTranslationToggle={() => translate(!translation)}
                  />
                </ShadowingControlDock>
                {audio.error && <S.Error role="alert">{audio.error}</S.Error>}
              </S.Shadow>
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
