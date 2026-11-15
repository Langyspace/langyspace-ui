import * as StoryLayout from './compact-practice-fixtures.styles'
import { useState } from 'react'
import {
  Button,
  FlashcardBack,
  FlashcardDeck,
  FlashcardFace,
  FlashcardFlip,
  FlashcardFlipButton,
  FlashcardFront,
  FlashcardImagePanel,
  FlashcardRatingButton,
  FlashcardStage,
  FlashcardWord,
  PracticePlaybackControls,
  PracticeResultPanel,
  ShadowingActivePhrase,
  ShadowingControlDock,
  ShadowingPhraseStack,
  ShadowingReader,
  ShadowingRepetitions,
  ShadowingTranslation,
} from '../src'

export function BoundedFlashcardExample({
  longContent = false,
}: {
  longContent?: boolean
}) {
  const [flipped, setFlipped] = useState(false)
  return (
    <StoryLayout.BoundedFlashcardPreview>
      <header>
        <Button onClick={() => setFlipped(false)}>Recomeçar</Button>
      </header>
      <FlashcardStage>
        <FlashcardDeck>
          <FlashcardFlip flipped={flipped}>
            <FlashcardFace>
              <FlashcardFront>
                <FlashcardFlipButton
                  label="Virar cartão"
                  onClick={() => setFlipped(true)}
                />
                <FlashcardImagePanel emoji="🐦" />
                <FlashcardWord
                  phonetic={longContent ? undefined : '/bɜːrd/'}
                  example={
                    longContent
                      ? 'We are looking forward to speaking English with confidence during our next international conference.'
                      : 'A bird sings.'
                  }
                >
                  {longContent ? 'international conference' : 'bird'}
                </FlashcardWord>
              </FlashcardFront>
            </FlashcardFace>
            <FlashcardFace side="back">
              <FlashcardBack
                term={longContent ? 'international conference' : 'bird'}
                phonetic={longContent ? undefined : '/bɜːrd/'}
                translation={
                  longContent ? 'conferência internacional' : 'pássaro'
                }
                example={
                  longContent
                    ? 'We are looking forward to speaking English with confidence during our next international conference and sharing everything we have learned together.'
                    : 'A bird sings.'
                }
              />
            </FlashcardFace>
          </FlashcardFlip>
        </FlashcardDeck>
      </FlashcardStage>
      <StoryLayout.FlashcardControls>
        {flipped ? (
          <>
            <p>Você lembra?</p>
            <StoryLayout.FlashcardRatings>
              <FlashcardRatingButton
                grade="again"
                interval="1 min"
                onClick={() => setFlipped(false)}
              >
                Errei
              </FlashcardRatingButton>
              <FlashcardRatingButton
                grade="hard"
                interval="6 min"
                onClick={() => setFlipped(false)}
              >
                Difícil
              </FlashcardRatingButton>
              <FlashcardRatingButton
                grade="good"
                interval="10 min"
                onClick={() => setFlipped(false)}
              >
                Bom
              </FlashcardRatingButton>
              <FlashcardRatingButton
                grade="easy"
                interval="4 dias"
                onClick={() => setFlipped(false)}
              >
                Fácil
              </FlashcardRatingButton>
            </StoryLayout.FlashcardRatings>
          </>
        ) : (
          <p>Toque no cartão para ver a tradução</p>
        )}
      </StoryLayout.FlashcardControls>
    </StoryLayout.BoundedFlashcardPreview>
  )
}

export function BoundedShadowingExample({
  longContent = false,
}: {
  longContent?: boolean
}) {
  const [playing, setPlaying] = useState(false)
  const [translation, setTranslation] = useState(true)
  const [speed, setSpeed] = useState('1x')
  return (
    <StoryLayout.BoundedShadowingPreview>
      <StoryLayout.ShadowingHeader>
        Prática de fala · frase 1/3
      </StoryLayout.ShadowingHeader>
      <ShadowingReader>
        <ShadowingPhraseStack>
          <ShadowingActivePhrase>
            {longContent
              ? 'We are looking forward to speaking English with confidence during our next international conference and sharing everything we have learned together.'
              : 'A practice sentence.'}
          </ShadowingActivePhrase>
        </ShadowingPhraseStack>
        <ShadowingTranslation>
          {translation &&
            (longContent
              ? 'Estamos ansiosos para falar inglês com confiança durante nossa próxima conferência internacional e compartilhar tudo o que aprendemos juntos.'
              : 'Uma frase de prática.')}
        </ShadowingTranslation>
      </ShadowingReader>
      <ShadowingControlDock>
        <ShadowingRepetitions total={3} value={0}>
          0/3 escutas
        </ShadowingRepetitions>
        <PracticePlaybackControls
          playing={playing}
          playLabel={playing ? 'Pausar frase' : 'Tocar frase'}
          onPlay={() => setPlaying(!playing)}
          speed={speed}
          speedOptions={['0.5x', '0.75x', '1x']}
          onSpeedChange={setSpeed}
          translationVisible={translation}
          onTranslationToggle={() => setTranslation(!translation)}
        />
      </ShadowingControlDock>
    </StoryLayout.BoundedShadowingPreview>
  )
}

export function BoundedCompletionExample() {
  return (
    <StoryLayout.BoundedFlashcardPreview>
      <header>
        <Button>Voltar</Button>
      </header>
      <PracticeResultPanel
        heading="Sessão concluída!"
        description="Você revisou todos os cartões desta sessão."
        actions={
          <>
            <Button>Refazer sessão</Button>
            <Button variant="secondary">Voltar para lições</Button>
          </>
        }
      />
    </StoryLayout.BoundedFlashcardPreview>
  )
}

export function ShadowingCompletionExample() {
  return (
    <StoryLayout.BoundedShadowingPreview>
      <header>
        <Button>Voltar</Button>
      </header>
      <PracticeResultPanel
        heading="Sessão concluída!"
        description="Você revisou todos os cartões desta sessão."
        actions={
          <>
            <Button>Refazer sessão</Button>
            <Button variant="secondary">Voltar para lições</Button>
          </>
        }
      />
    </StoryLayout.BoundedShadowingPreview>
  )
}
