import { useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { QuizOption } from '../../../src/components/Quiz/QuizOption'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
import { ExercisePanel } from '../../../src/components/Exercise/ExercisePanel'
import { LearningDialogue } from '../../../src/components/Exercise/LearningDialogue'
import { RolePlayExercise } from '../../../src/components/InteractiveMaterial/RolePlayExercise'
import { AnswerDisclosure } from '../shared/AnswerDisclosure'
import { toggleId } from '../shared/lessonState'
import type { SpeechProps } from '../shared/Lesson.types'
import content from './A108.content.json'
import media from './image-scenes.json'
import * as S from '../shared/Lesson.styles'
import * as Styled from './A108.styles'
import type { ChoiceItem, Word } from './A108.types'

const files = import.meta.glob<string>('./assets/*', {
  eager: true,
  query: '?url',
  import: 'default',
})
const assetMap: Readonly<Record<string, string>> = content.assets
const gapBank: Readonly<Record<string, { o: string[]; a: string }>> =
  content.bank
const sentences: Readonly<Record<string, string>> = content.gaps
const avatarKeys: Readonly<Record<string, string>> = {
  ana: 'bust_ana',
  kim: 'bust_kim',
}
const asset = (key: string) => files['./assets/' + assetMap[key]]
function imageFor(key: string, slide: string, fallback = '') {
  const image = media.images.find((item) => item.sourceKey === key)
  const alt: Record<string, string | undefined> | undefined =
    image?.altByExercise
  return { src: asset(key)!, alt: alt?.[slide] ?? fallback }
}
const plain = (rich: string) => rich.replace(/<[^>]+>/g, '')

export function CafeVocabulary({
  speech,
  tray = false,
}: SpeechProps & { tray?: boolean }) {
  const [revealed, setRevealed] = useState<string[]>([])
  const [hint, setHint] = useState(false)
  const stock = tray ? content.cafeVocabulary : content.food
  const slide = tray ? 's6' : 's5'
  const items = stock.map(({ ic, en, pt, id }) => {
    const info = imageFor(ic, slide)
    return {
      id,
      word: en,
      translation: pt,
      imageUrl: info.src,
      imageAlt: info.alt,
    }
  })
  return (
    <S.Stack>
      <VocabularyGrid
        items={items}
        density="compact"
        revealedIds={revealed}
        showInitial={hint}
        revealOnHover={false}
        revealVariant="tooltip"
        onReveal={(id) => setRevealed((old) => toggleId(old, id))}
        onPlay={(id) => {
          const item = items.find((word) => word.id === id)
          if (item) speech.speak([{ id, text: item.word }])
        }}
      />
      {!tray ? (
        <S.Row>
          <Button
            variant="secondary"
            size="sm"
            aria-pressed={hint}
            onClick={() => setHint(!hint)}
          >
            Dica: primeira letra
          </Button>
        </S.Row>
      ) : null}
      <S.Surface>
        {tray
          ? 'Frases do atendente: What can I get you? (o que vai ser?), Here you are (aqui está), Anything else? (mais alguma coisa?).'
          : 'No café, bebida vira coisa que se conta: a coffee = um café, two coffees = dois cafés.'}
      </S.Surface>
    </S.Stack>
  )
}

export function CafeChoice({
  item,
  slide,
  speech,
}: SpeechProps & { item: ChoiceItem; slide: string }) {
  const [attempted, setAttempted] = useState<number[]>([])
  const done = attempted.includes(item.a)
  const last = attempted.at(-1)
  const cue = item.im ? imageFor(item.im, slide, item.alt) : undefined
  return (
    <ExercisePanel
      title={item.t}
      media={cue ? <Styled.Cue src={cue.src} alt={cue.alt} /> : undefined}
    >
      {item.o.map((label, i) => (
        <QuizOption
          key={label}
          letter={String.fromCharCode(65 + i)}
          density="compact"
          state={
            attempted.includes(i)
              ? i === item.a
                ? 'correct'
                : 'wrong'
              : 'default'
          }
          disabled={done}
          aria-pressed={attempted.includes(i)}
          onClick={() => {
            setAttempted((old) => [...old, i])
            if (i === item.a && item.id)
              speech.speak([{ id: item.id, text: label }])
          }}
        >
          {label}
        </QuizOption>
      ))}
      <AnswerDisclosure question={item.t} answer={item.o[item.a]} />
      {last !== undefined ? (
        <S.Hint role="status">
          {done
            ? (item.now ?? 'Correto!')
            : (item.why?.[last] ?? 'Tente novamente.')}
        </S.Hint>
      ) : null}
    </ExercisePanel>
  )
}

export function CafePrompts({
  items,
}: {
  items: readonly { q: string; a?: string }[]
}) {
  return (
    <S.Questions>
      {items.map((item, i) => (
        <S.Question key={item.q}>
          <S.Number>{i + 1}</S.Number>
          <S.Stack>
            <strong>{item.q}</strong>
            {item.a ? (
              <AnswerDisclosure question={item.q} answer={item.a} />
            ) : null}
          </S.Stack>
        </S.Question>
      ))}
    </S.Questions>
  )
}

export function CafeModel({
  slide,
  question,
  image,
  alt,
  models,
}: {
  slide: string
  question: string
  image?: string
  alt?: string
  models: readonly string[]
}) {
  const cue = image ? imageFor(image, slide, alt) : undefined
  return (
    <ExercisePanel
      title={question}
      media={cue ? <Styled.Cue src={cue.src} alt={cue.alt} /> : undefined}
    >
      {models.map((sentence) => (
        <p key={sentence}>{sentence.replace(/\{[^}]+\}/g, '____')}</p>
      ))}
      <AnswerDisclosure
        question={question}
        answer={models.map((sentence) => (
          <span key={sentence}>
            {sentence.replace(/[{}]/g, '')}
            <br />
          </span>
        ))}
      />
    </ExercisePanel>
  )
}

export function CafeDialogue({
  speech,
  fill = false,
}: SpeechProps & { fill?: boolean }) {
  const [translated, setTranslated] = useState<string[]>([])
  const [solved, setSolved] = useState<string[]>([])
  const [mistake, setMistake] = useState<string>()
  const current = Object.keys(gapBank).find((key) => !solved.includes(key))
  const all = content.lines.every((line) => translated.includes(line.id))
  const speaking = speech.playingId?.startsWith('D01.')
  const speakLine = (id: string) => {
    const line = content.lines.find((entry) => entry.id === id)
    if (line) speech.speak([{ id, text: line.en, speaker: line.who }])
  }
  return (
    <S.Stack>
      <S.Row>
        {!fill ? (
          <>
            <Button
              variant="secondary"
              size="sm"
              onClick={() =>
                speaking
                  ? speech.togglePause()
                  : speech.speak(
                      content.lines.map((line) => ({
                        id: line.id,
                        text: line.en,
                        speaker: line.who,
                      })),
                    )
              }
            >
              {speaking
                ? speech.paused
                  ? 'Resume'
                  : 'Pause'
                : 'Listen to the dialogue'}
            </Button>
            <Button
              variant="secondary"
              size="sm"
              aria-expanded={all}
              onClick={() =>
                setTranslated(all ? [] : content.lines.map((line) => line.id))
              }
            >
              {all ? 'Ocultar tradução' : 'Ver em português'}
            </Button>
          </>
        ) : (
          <S.Hint role="status">
            {solved.length}/{Object.keys(gapBank).length}
          </S.Hint>
        )}
      </S.Row>
      <LearningDialogue
        density="compact"
        lines={content.lines.map((line) => {
          const template = sentences[line.id] ?? line.en
          const gap = /\{(\d+)\}/.exec(template)?.[1]
          const active = fill && gap && current === gap
          const answer = gap ? gapBank[gap] : undefined
          return {
            id: line.id,
            speaker: line.who === 'ana' ? 'Ana' : 'Kim',
            side: line.who === 'ana' ? 'start' : 'end',
            avatarUrl: asset(avatarKeys[line.who] ?? ''),
            translation: fill ? undefined : line.g,
            audioLabel:
              fill && gap && !solved.includes(gap)
                ? undefined
                : `Ouvir: ${line.en}`,
            content: fill ? (
              <S.Stack>
                <span>
                  {template.replace(/\{(\d+)\}/g, (_, key: string) =>
                    solved.includes(key) ? (gapBank[key]?.a ?? '____') : '____',
                  )}
                </span>
                {active && answer ? (
                  <>
                    <S.Row role="group" aria-label="Opções da lacuna">
                      {answer.o.map((option) => (
                        <Button
                          variant={mistake === option ? 'danger' : 'secondary'}
                          key={option}
                          size="sm"
                          onClick={() => {
                            if (option === answer.a) {
                              setSolved((old) => [...old, current])
                              setMistake(undefined)
                            } else setMistake(option)
                          }}
                        >
                          {option}
                        </Button>
                      ))}
                    </S.Row>
                    <AnswerDisclosure
                      question={template.replace(/\{\d+\}/, '____')}
                      answer={answer.a}
                    />
                  </>
                ) : null}
              </S.Stack>
            ) : (
              line.en
            ),
          }
        })}
        translatedIds={translated}
        onTranslate={
          fill ? undefined : (id) => setTranslated((old) => toggleId(old, id))
        }
        playingId={speech.playingId}
        onPlay={speakLine}
      />
    </S.Stack>
  )
}

export function CafeGrammar({
  speech,
  pay = false,
}: SpeechProps & { pay?: boolean }) {
  const group = pay ? content.payGrammar : content.startGrammar
  return (
    <S.Stack>
      {group.rules.map(([title, text]) => (
        <S.Surface key={title}>
          <strong>{title}</strong>
          <p>{plain(text ?? '')}</p>
        </S.Surface>
      ))}
      <S.Surface>
        {pay ? (
          <Styled.TableWrap>
            <Styled.Table>
              <thead>
                <tr>
                  <th scope="col">Waiter</th>
                  <th scope="col">Yes</th>
                  <th scope="col">No</th>
                </tr>
              </thead>
              <tbody>
                {group.examples.map(([waiter, yes, no]) => (
                  <tr key={waiter}>
                    <th scope="row">{waiter}</th>
                    <td>{yes}</td>
                    <td>{no}</td>
                  </tr>
                ))}
              </tbody>
            </Styled.Table>
          </Styled.TableWrap>
        ) : (
          <S.Stack>
            {group.examples.map(([label, example, id]) => (
              <S.Row key={id}>
                <b>{label}</b>
                <Button
                  size="sm"
                  variant="text"
                  onClick={() =>
                    speech.speak([{ id: id ?? 'grammar', text: example ?? '' }])
                  }
                >
                  {example}
                </Button>
              </S.Row>
            ))}
          </S.Stack>
        )}
      </S.Surface>
      {pay ? <S.Hint>{plain(content.payGrammar.hint)}</S.Hint> : null}
    </S.Stack>
  )
}

export function CafeTalk({
  words,
  items,
  slide,
}: {
  words: readonly Word[]
  items: readonly { q: string; a: string }[]
  slide: string
}) {
  return (
    <S.Stack>
      <S.Row>
        {words.map((word) => {
          const image = imageFor(word.ic, slide)
          return (
            <Styled.WordCard key={word.en}>
              <img src={image.src} alt={image.alt} />
              <div>
                <strong>{word.en}</strong>
                <S.Hint>{word.pt}</S.Hint>
              </div>
            </Styled.WordCard>
          )
        })}
      </S.Row>
      <CafePrompts items={items} />
    </S.Stack>
  )
}

export function CafeRolePlay() {
  const [done, setDone] = useState<string[]>([])
  const [support, setSupport] = useState(false)
  const role = content.roleplay
  return (
    <RolePlayExercise
      situation={role.txt}
      image={imageFor(role.img, 's11', role.alt)}
      support={role.sup}
      supportVisible={support}
      onSupportToggle={() => setSupport(!support)}
      steps={role.ck.map((line) => ({ id: line, label: line }))}
      completedIds={done}
      onStepToggle={(id) => setDone((old) => toggleId(old, id))}
      presentation="tracker"
      density="compact"
    >
      <S.Hint>
        Cardápio: coffee, tea, orange juice, water, cheese bread, sandwich, cake
        e salad.
      </S.Hint>
    </RolePlayExercise>
  )
}
