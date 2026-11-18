import { Button } from '../../../src/components/Button/Button'
import { CatalogArtwork } from '../shared/CatalogLesson.styles'
import {
  CatalogChoice,
  CatalogDialogue,
  CatalogModel,
  CatalogPrompts,
  CatalogRolePlay,
  CatalogWords,
} from '../shared/CatalogExercises'
import type {
  ChoiceProps,
  ModelProps,
  PromptProps,
  WordProps,
} from '../shared/CatalogLesson.types'
import * as S from '../shared/Lesson.styles'
import type { SpeechProps } from '../shared/Lesson.types'
import ana from '../A101/assets/bust_ana.webp'
import kim from '../A101/assets/bust_kim.webp'
import data from './A102.content.json'

const urls = import.meta.glob<string>('./assets/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
})
const files: Readonly<Record<string, string>> = data.images

function image(key: string, alt = '') {
  const src = urls['./assets/' + files[key]]
  if (!src) throw new Error('Imagem ausente: ' + key)
  return { src, alt }
}

export function Prompts(props: Omit<PromptProps, 'image'>) {
  return <CatalogPrompts {...props} image={image} />
}

export function NameChoice(props: Omit<ChoiceProps, 'image'>) {
  return <CatalogChoice {...props} image={image} />
}

export function NameModel(props: Omit<ModelProps, 'image'>) {
  return <CatalogModel {...props} image={image} />
}

const portraits = { ana, kim }

export function NameDialogue(props: SpeechProps & { practice?: boolean }) {
  return (
    <CatalogDialogue
      {...props}
      lines={data.lines}
      gaps={data.gaps}
      bank={data.bank}
      portraits={portraits}
    />
  )
}

export function NameRolePlay() {
  return <CatalogRolePlay role={data.role} image={image} />
}

export function TalkSupport(props: Omit<WordProps, 'image'>) {
  return <CatalogWords {...props} image={image} />
}

export function NameVocabulary({
  speech,
  numbers = false,
}: SpeechProps & { numbers?: boolean }) {
  const sound = (id: string, text: string) => speech.speak([{ id, text }])
  if (numbers) {
    return (
      <S.Stack>
        <S.Row>
          {data.numbers.map((name, index) => (
            <Button
              key={name}
              size="sm"
              variant="secondary"
              onClick={() => sound('N' + index, name)}
            >
              {index} · {name}
            </Button>
          ))}
        </S.Row>
        <S.Surface>
          <CatalogArtwork {...image('x_telephone')} />
          <Button
            variant="secondary"
            size="sm"
            onClick={() => sound('PH1', data.phoneReading)}
          >
            Ouvir: {data.numberAudio}
          </Button>
          {data.numberNotes.slice(1).map((text) => (
            <p key={text}>{text}</p>
          ))}
        </S.Surface>
      </S.Stack>
    )
  }

  return (
    <S.Stack>
      {data.alphabet.map(({ s, l, hot }) => (
        <S.Surface key={s}>
          <strong>{s}</strong>
          <S.Row>
            {[...l].map((letter) => (
              <Button
                key={letter}
                variant={hot?.includes(letter) ? 'brand' : 'secondary'}
                size="sm"
                aria-label={'Ouvir: ' + letter}
                onClick={() => sound('letter-' + letter, letter)}
              >
                {letter}
              </Button>
            ))}
          </S.Row>
        </S.Surface>
      ))}
      <S.Hint>{data.pronunciationNote.at(-1)}</S.Hint>
    </S.Stack>
  )
}
