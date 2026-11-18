import { useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
import { GrammarTable } from '../../../src/components/InteractiveMaterial/GrammarTable'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { LessonIntro, LessonShell } from './LessonShell'
import {
  CatalogChoice,
  CatalogDialogue,
  CatalogModel,
  CatalogPrompts,
  CatalogRolePlay,
  CatalogWords,
} from './CatalogExercises'
import type {
  CatalogLessonProps,
  CatalogVocabularyProps,
} from './CatalogLesson.types'
import { CatalogArtwork } from './CatalogLesson.styles'
import { toggleId } from './lessonState'
import * as S from './Lesson.styles'

const groups = [
  ['s31', 's32', 's33', 's34', 's35'],
  ['s41', 's42', 's43', 's44', 's45', 's46'],
  ['s141', 's142', 's143', 's144'],
  ['s161', 's162'],
  ['s91', 's92', 's93'],
]

function CatalogVocabulary({
  vocabulary,
  image,
  speech,
}: CatalogVocabularyProps) {
  const [revealed, setRevealed] = useState<string[]>([])
  const [hint, setHint] = useState(false)
  const items = vocabulary.items.map((word) => {
    const art = image(word.ic)
    return {
      id: word.id ?? word.en,
      word: word.en,
      translation: word.pt,
      imageUrl: art.src,
      imageAlt: art.alt,
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
      {vocabulary.letterHint ? (
        <Button
          variant="secondary"
          size="sm"
          aria-pressed={hint}
          onClick={() => setHint(!hint)}
        >
          Dica: primeira letra
        </Button>
      ) : null}
    </S.Stack>
  )
}

export function CatalogLesson({
  data,
  assets,
  shared,
  initialPageId,
}: CatalogLessonProps) {
  const key = data.code.toLowerCase().replace('.', '-')
  const pageIds = data.pages.map(({ id }) => id)

  return (
    <LessonShell
      materialKey={key}
      label={data.code + ' · ' + data.title}
      pageIds={pageIds}
      initialPageId={initialPageId}
      exerciseGroups={groups}
      themeSwitch
      pages={(speech) =>
        data.pages.map((p) => {
          const image = (assetKey: string, alt = '') => {
            const entry = data.media[assetKey]
            const src =
              shared[assetKey] ?? (entry && assets['./assets/' + entry.file])
            if (!src)
              throw new Error(
                'Imagem ausente em ' + data.code + ': ' + assetKey,
              )
            return { src, alt: entry?.alt[p.id] || alt }
          }
          const cover = p.id === 's1'
          const grammar = p.grammar
          const model = p.model
          return {
            id: p.id,
            label: cover ? data.title : p.title,
            content: (
              <SlidePage
                title={p.title}
                eyebrow={p.eyebrow}
                instruction={p.instruction}
                lead={
                  cover ? (
                    <LessonIntro
                      level={data.code}
                      lesson={'Lesson ' + data.number}
                      before={data.before + ' '}
                      accent={data.accent}
                      goal={data.goal}
                      compact
                    />
                  ) : undefined
                }
              >
                <S.Stack>
                  {p.dialogue ? (
                    <CatalogDialogue
                      speech={speech}
                      practice={p.dialogue === 'practice'}
                      lines={data.lines}
                      gaps={data.gaps}
                      bank={data.bank}
                      portraits={{ ana: shared.bust_ana, kim: shared.bust_kim }}
                    />
                  ) : null}
                  {p.words ? (
                    <CatalogWords words={p.words} image={image} />
                  ) : null}
                  {p.prompts ? (
                    <CatalogPrompts items={p.prompts} image={image} />
                  ) : null}
                  {p.vocab ? (
                    <CatalogVocabulary
                      vocabulary={p.vocab}
                      speech={speech}
                      image={image}
                    />
                  ) : null}
                  {p.chips ? (
                    <S.Row>
                      {p.chips.map(({ id, b, s }) => (
                        <Button
                          key={id}
                          size="sm"
                          variant="secondary"
                          onClick={() => speech.speak([{ id, text: s ?? b }])}
                        >
                          {b}
                          {s ? ' · ' + s : ''}
                        </Button>
                      ))}
                    </S.Row>
                  ) : null}
                  {p.choices?.map((item) => (
                    <CatalogChoice
                      key={item.t}
                      item={item}
                      speech={speech}
                      image={image}
                    />
                  ))}
                  {model ? (
                    <CatalogModel
                      question={model.question}
                      models={model.model}
                      cue={model.image}
                      alt={model.alt}
                      context={model.context}
                      image={image}
                    />
                  ) : null}
                  {grammar ? (
                    <GrammarTable
                      title={p.title}
                      columns={{
                        subject: grammar.cols[0] ?? '',
                        verb:
                          grammar.cols.length === 3
                            ? grammar.cols[1]
                            : undefined,
                        example: grammar.cols.at(-1) ?? '',
                      }}
                      rows={grammar.rows.map(({ cells, audio }, index) => ({
                        id: String(index),
                        subject: cells[0],
                        verb: cells.length === 3 ? cells[1] : undefined,
                        example: cells.at(-1),
                        audioLabel: audio
                          ? 'Ouvir: ' + cells.at(-1)
                          : undefined,
                      }))}
                      onPlay={(id) => {
                        const row = grammar.rows[Number(id)]
                        if (row?.audio && row.spoken)
                          speech.speak([{ id: row.audio, text: row.spoken }])
                      }}
                      explanation={
                        <S.Stack>
                          {grammar.explanations.map(({ label, text }) => (
                            <S.Explanation key={label}>
                              <strong>{label}</strong>
                              <p>{text}</p>
                            </S.Explanation>
                          ))}
                        </S.Stack>
                      }
                    />
                  ) : null}
                  {p.tip ? (
                    <S.Row>
                      <CatalogArtwork {...image(p.tip.image)} />
                      <S.Hint>{p.tip.text}</S.Hint>
                    </S.Row>
                  ) : null}
                  {p.role ? (
                    <CatalogRolePlay
                      role={p.role}
                      image={image}
                      showDescription
                    />
                  ) : null}
                  {p.script ? (
                    <S.Stack>
                      <S.Row>
                        {p.script.art.map((assetKey) => (
                          <CatalogArtwork key={assetKey} {...image(assetKey)} />
                        ))}
                        <S.Hint>
                          Send this audio to your teacher before the next class.
                        </S.Hint>
                      </S.Row>
                      <CatalogPrompts
                        items={p.script.items.map((q) => ({ q }))}
                        image={image}
                      />
                    </S.Stack>
                  ) : null}
                </S.Stack>
              </SlidePage>
            ),
          }
        })
      }
    />
  )
}
