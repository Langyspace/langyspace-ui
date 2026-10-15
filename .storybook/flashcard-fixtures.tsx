import { useEffect, useRef, useState, type ReactNode } from 'react'
import {
  Button,
  FlashcardAudioButton,
  FlashcardBack,
  FlashcardDeck,
  FlashcardFace,
  FlashcardFlip,
  FlashcardFlipButton,
  FlashcardFlipHint,
  FlashcardFrame,
  FlashcardFront,
  FlashcardImagePanel,
  FlashcardStage,
  FlashcardWord,
} from '../src'

export function FlashcardCanvas({ children }: { children: ReactNode }) {
  return <FlashcardFrame>{children}</FlashcardFrame>
}

export function FlashcardDeckCanvas({ children }: { children: ReactNode }) {
  return (
    <FlashcardCanvas>
      <FlashcardStage>
        <FlashcardDeck>{children}</FlashcardDeck>
      </FlashcardStage>
    </FlashcardCanvas>
  )
}

export function FlashcardFaceCanvas({ children }: { children: ReactNode }) {
  return (
    <FlashcardDeckCanvas>
      <FlashcardFace>
        <FlashcardFront>{children}</FlashcardFront>
      </FlashcardFace>
    </FlashcardDeckCanvas>
  )
}

export function FlashcardBackCanvas({ children }: { children: ReactNode }) {
  return (
    <FlashcardDeckCanvas>
      <FlashcardFlip flipped>
        <FlashcardFace side="back">{children}</FlashcardFace>
      </FlashcardFlip>
    </FlashcardDeckCanvas>
  )
}

export function FlashcardFrontExample() {
  return (
    <FlashcardFront>
      <FlashcardImagePanel emoji="🐦" />
      <FlashcardWord
        phonetic="/bɜːrd/"
        example={
          <>
            A <b>bird</b> sings.
          </>
        }
      >
        bird
      </FlashcardWord>
    </FlashcardFront>
  )
}

export function FlashcardBackExample() {
  return (
    <FlashcardBack
      term="bird"
      phonetic="/bɜːrd/"
      translation="pássaro"
      example={
        <>
          A <b>bird</b> sings.
        </>
      }
    />
  )
}

export function FlashcardFacesExample() {
  return (
    <>
      <FlashcardFace>
        <FlashcardFrontExample />
      </FlashcardFace>
      <FlashcardFace side="back">
        <FlashcardBackExample />
      </FlashcardFace>
    </>
  )
}

export function FlashcardSessionExample({
  initiallyFlipped = false,
}: {
  initiallyFlipped?: boolean
}) {
  const [flipped, setFlipped] = useState(initiallyFlipped)
  const rating = useRef<HTMLButtonElement | null>(null)
  useEffect(() => {
    if (flipped) rating.current?.focus()
  }, [flipped])
  return (
    <>
      <FlashcardStage>
        <FlashcardDeck>
          <FlashcardFlip flipped={flipped}>
            <FlashcardFace>
              <FlashcardFront>
                <FlashcardFlipButton
                  label="Virar cartão"
                  onClick={() => setFlipped(true)}
                />
                <FlashcardImagePanel emoji="🐦">
                  <FlashcardAudioButton label="Ouvir pronúncia — demonstração sem áudio" />
                </FlashcardImagePanel>
                <FlashcardWord
                  phonetic="/bɜːrd/"
                  example={
                    <>
                      A <b>bird</b> sings.
                    </>
                  }
                >
                  bird
                </FlashcardWord>
              </FlashcardFront>
            </FlashcardFace>
            <FlashcardFace side="back">
              <FlashcardBackExample />
            </FlashcardFace>
          </FlashcardFlip>
        </FlashcardDeck>
      </FlashcardStage>
      {flipped ? (
        <Button ref={rating} onClick={() => setFlipped(false)}>
          Próximo cartão
        </Button>
      ) : (
        <FlashcardFlipHint>
          Toque no cartão para ver a tradução
        </FlashcardFlipHint>
      )}
    </>
  )
}
