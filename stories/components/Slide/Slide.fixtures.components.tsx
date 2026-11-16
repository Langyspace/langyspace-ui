import { useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { QuizOption } from '../../../src/components/Quiz/QuizOption'
import tiredImage from './assets/tired.png'
import * as Styled from './Slide.stories.styles'

export function WarmUp() {
  const [selected, setSelected] = useState<string>()
  return (
    <Styled.Panel>
      <Styled.Count>1 / 6</Styled.Count>
      <Styled.Question>How are you?</Styled.Question>
      <Styled.Image src={tiredImage} alt="Uma pessoa bocejando" />
      <Styled.Stack>
        {['I’m tired.', 'I’m cold.', 'I’m happy.'].map((text, index) => (
          <QuizOption
            key={text}
            letter={String.fromCharCode(65 + index)}
            state={
              selected === text
                ? index === 0
                  ? 'correct'
                  : 'wrong'
                : 'default'
            }
            aria-pressed={selected === text}
            onClick={() => setSelected(text)}
          >
            {text}
          </QuizOption>
        ))}
      </Styled.Stack>
    </Styled.Panel>
  )
}

export function Conversation() {
  const [hint, setHint] = useState(false)
  return (
    <Styled.Panel>
      <Styled.Stack>
        <Styled.Question>How are you?</Styled.Question>
        <Button
          variant="secondary"
          aria-pressed={hint}
          onClick={() => setHint(!hint)}
        >
          Frases de apoio
        </Button>
        {hint ? <p>I’m good, thanks. And you?</p> : null}
        <label>
          Seu rascunho <input aria-label="Seu rascunho" />
        </label>
      </Styled.Stack>
    </Styled.Panel>
  )
}
