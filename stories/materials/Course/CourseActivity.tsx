import { useState } from 'react'
import { KeyValueList } from '../../../src/components/Details/KeyValueList'
import { RouteMap } from '../../../src/components/InteractiveMaterial/RouteMap'
import { RolePlayExercise } from '../../../src/components/InteractiveMaterial/RolePlayExercise'
import { GroupedBarChart } from '../../../src/components/Charts/GroupedBarChart'
import { VocabularyControls } from '../../../src/components/Exercise/VocabularyControls'
import { PictureStrip } from '../../../src/components/Exercise/PictureStrip'
import { ImageSortBoard } from '../../../src/components/Exercise/ImageSortBoard'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import { PromptExercise } from '../shared/LessonExercises'
import { MaterialQuestions } from '../shared/MaterialQuestions'
import type { CourseActivity as ActivitySpec } from './Course.types'

export function CourseActivity({
  activity,
  image,
  onPlayPlace,
}: {
  activity: ActivitySpec
  image?: string
  onPlayPlace?: (id: string, text: string) => void
}) {
  const [index, setIndex] = useState(0)
  const [assignments, assign] = useState<Record<string, string | undefined>>({})
  const [picture, selectPicture] = useState<string>()
  const [place, setPlace] = useState<string>()
  const [drink, chooseDrink] = useState('tea')
  const [food, chooseFood] = useState('cake')
  const [delivered, deliver] = useState(false)
  const selected = activity.options?.[index]
  const facts = selected?.facts ?? activity.facts ?? []
  const menu = activity.menu ?? []
  const pictures = selected?.pictures ?? activity.pictures
  const grid = activity.pictureGrid ?? {
    columns: 3,
    rows: 2,
    sourceAspectRatio: 1.5,
  }
  const region = (index: number) => ({
    ...grid,
    column: index % grid.columns,
    row: Math.floor(index / grid.columns),
  })
  const [revealed, reveal] = useState<string[]>([])
  const [allPlaces, showAllPlaces] = useState(false)
  const [initialPlaces, showInitialPlaces] = useState(false)
  const map = selected?.map ?? activity.map
  if (activity.type === 'sequence' && image && pictures && activity.stages)
    return (
      <ImageSortBoard
        layout="sequence"
        items={pictures.map((p) => ({
          id: p.id,
          label: p.label,
          imageUrl: image,
          imageAlt: p.label,
          imageRegion: region(p.index),
        }))}
        categories={activity.stages}
        assignments={assignments}
        selectedId={picture}
        onSelect={selectPicture}
        instructions="Choose a picture, then choose its place in the story"
        emptyLabel="Place a picture here"
        onAssign={(id, category) =>
          assign((old) => {
            const next = { ...old }
            const occupant = category
              ? Object.keys(old).find(
                  (key) => key !== id && old[key] === category,
                )
              : undefined
            if (occupant) next[occupant] = old[id]
            next[id] = category
            return next
          })
        }
      />
    )
  const mapView = map ? (
    <RouteMap
      {...map}
      places={map.places.map((p) => ({
        ...p,
        label:
          initialPlaces && !allPlaces && !revealed.includes(p.id)
            ? p.label.slice(0, 1) + '…'
            : p.label,
      }))}
      selectedId={place}
      revealedIds={
        activity.vocabulary
          ? allPlaces || initialPlaces
            ? map.places.map((p) => p.id)
            : revealed
          : undefined
      }
      onSelect={(id) => {
        setPlace(id)
        reveal((ids) => (ids.includes(id) ? ids : [...ids, id]))
        const clip = activity.vocabulary?.[id]
        if (clip) onPlayPlace?.(clip.id, clip.text)
      }}
    />
  ) : null
  if (activity.type === 'map' && !activity.questions.length)
    return (
      <Common.Stack>
        {mapView}
        <Common.Row $justify="center">
          <VocabularyControls
            showInitial={initialPlaces}
            showAll={allPlaces}
            onToggleInitial={() => showInitialPlaces(!initialPlaces)}
            onToggleAll={() => showAllPlaces(!allPlaces)}
          />
        </Common.Row>
      </Common.Stack>
    )
  return (
    <RolePlayExercise
      density="compact"
      presentation="instructions"
      situation=""
      steps={[]}
      completedIds={[]}
      onStepToggle={() => undefined}
      image={
        image &&
        !pictures &&
        activity.type !== 'comparison' &&
        activity.type !== 'menu'
          ? { src: image, alt: activity.title }
          : undefined
      }
      tracker={
        activity.questionPurpose !== 'conversation' ? (
          <PromptExercise
            items={activity.questions.map((item) => ({
              ...item,
              answer:
                item.answer === 'One possible response'
                  ? undefined
                  : item.answer,
            }))}
          />
        ) : (
          <MaterialQuestions
            items={activity.questions.map((q) => ({
              id: q.id,
              question: q.prompt,
              cue: q.cue!,
              hint: q.hint!,
            }))}
          />
        )
      }
    >
      <Common.Stack>
        {pictures &&
        image &&
        activity.options?.length &&
        activity.type !== 'comparison' ? (
          <Common.Hint>{activity.title}</Common.Hint>
        ) : null}
        {activity.options?.length && activity.type !== 'comparison' ? (
          <Common.Row $justify="center">
            {activity.options.map((option, i) => (
              <Common.Action
                key={option.id}
                variant="secondary"
                size="sm"
                aria-pressed={index === i}
                onClick={() => setIndex(i)}
              >
                {option.title}
              </Common.Action>
            ))}
          </Common.Row>
        ) : null}
        {activity.type === 'comparison' && image ? (
          <PictureStrip
            aria-label={activity.title}
            items={(activity.options ?? []).map((option) => ({
              id: option.id,
              src: image,
              alt: option.title,
              region: region(option.pictures?.[0]?.index ?? 0),
              caption: [
                option.title,
                ...option.facts.map((f) => `${f.label}: ${f.value}`),
              ].join('\n'),
            }))}
          />
        ) : pictures && image ? (
          <PictureStrip
            density={activity.options?.length ? 'compact' : 'regular'}
            aria-label={activity.title}
            items={pictures.map((p) => ({
              id: p.id,
              src: image,
              alt: p.label || selected?.title || activity.title,
              region: region(p.index),
              caption: p.label,
            }))}
          />
        ) : activity.type === 'map' && activity.map ? (
          mapView
        ) : activity.type === 'chart' && activity.chart ? (
          <Common.Surface>
            <Common.Heading>{activity.title}</Common.Heading>
            <GroupedBarChart {...activity.chart} />
          </Common.Surface>
        ) : activity.type === 'menu' ? (
          <Common.Surface>
            {!delivered ? (
              <Common.Heading>{activity.title}</Common.Heading>
            ) : null}
            {!delivered ? (
              <>
                <KeyValueList
                  density="compact"
                  tone="material"
                  items={menu.map((item) => ({
                    id: item.id,
                    label: item.label,
                    value: '$' + item.price,
                  }))}
                />
                <Common.Row aria-label="Choose a drink">
                  {menu
                    .filter((item) => item.group === 'drink')
                    .map((item) => (
                      <Common.Action
                        key={item.id}
                        size="sm"
                        variant="secondary"
                        aria-pressed={drink === item.id}
                        onClick={() => {
                          chooseDrink(item.id)
                          deliver(false)
                        }}
                      >
                        {item.label}
                      </Common.Action>
                    ))}
                </Common.Row>
                <Common.Row aria-label="Choose some food">
                  {menu
                    .filter((item) => item.group === 'food')
                    .map((item) => (
                      <Common.Action
                        key={item.id}
                        size="sm"
                        variant="secondary"
                        aria-pressed={food === item.id}
                        onClick={() => {
                          chooseFood(item.id)
                          deliver(false)
                        }}
                      >
                        {item.label}
                      </Common.Action>
                    ))}
                </Common.Row>
              </>
            ) : null}
            <Common.Action
              size="sm"
              variant="secondary"
              onClick={() => deliver(!delivered)}
            >
              {delivered ? 'Order again' : 'Check the tray'}
            </Common.Action>
            {delivered ? (
              <>
                <Common.Hint>
                  You ordered {drink} and {food}
                </Common.Hint>
                {image &&
                menu.every((item) => item.pictureIndex !== undefined) ? (
                  <PictureStrip
                    aria-label="What arrived on your tray"
                    items={[drink === 'tea' ? 'coffee' : 'tea', food].map(
                      (id) => {
                        const item = menu.find((entry) => entry.id === id)!
                        return {
                          id,
                          src: image,
                          alt: item.label,
                          region: region(item.pictureIndex!),
                          caption: '',
                        }
                      },
                    )}
                  />
                ) : (
                  <Common.Hint>
                    On the tray: {drink === 'tea' ? 'coffee' : 'tea'} and {food}
                  </Common.Hint>
                )}
              </>
            ) : null}
          </Common.Surface>
        ) : facts.length ? (
          <Common.Surface>
            <Common.Heading>{selected?.title ?? activity.title}</Common.Heading>
            <KeyValueList
              tone="material"
              density="compact"
              layout="stacked"
              items={facts}
            />
          </Common.Surface>
        ) : null}
        {pictures && image && facts.length ? (
          <KeyValueList
            tone="material"
            density="compact"
            layout="stacked"
            items={facts}
          />
        ) : null}
      </Common.Stack>
    </RolePlayExercise>
  )
}
