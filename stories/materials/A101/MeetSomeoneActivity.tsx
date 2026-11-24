import { useState } from 'react'
import { Avatar } from '../../../src/components/Avatar/Avatar'
import { KeyValueList } from '../../../src/components/Details/KeyValueList'
import { RolePlayExercise } from '../../../src/components/InteractiveMaterial/RolePlayExercise'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import { MaterialQuestions } from '../shared/MaterialQuestions'
import { ana, kim } from '../shared/characterPortraits'

const profiles = [
  { name: 'Ana', country: 'Brazil', feeling: 'hungry', avatar: ana },
  {
    name: 'Kim',
    country: 'South Korea',
    feeling: 'tired and happy',
    avatar: kim,
  },
] as const

export function MeetSomeoneActivity() {
  const [index, select] = useState(0)
  const person = profiles[index]!
  return (
    <Common.Stack>
      <Common.Row $justify="center" aria-label="Example profiles">
        {profiles.map((profile, i) => (
          <Common.Action
            key={profile.name}
            variant="secondary"
            size="sm"
            aria-pressed={index === i}
            onClick={() => select(i)}
          >
            {profile.name}
          </Common.Action>
        ))}
      </Common.Row>
      <RolePlayExercise
        presentation="instructions"
        situation=""
        steps={[]}
        completedIds={[]}
        onStepToggle={() => undefined}
        tracker={
          <MaterialQuestions
            items={[
              {
                id: 'name',
                question: 'What’s your name?',
                cue: 'Use the name on the card and ask me',
                hint: 'My name is … What’s your name?',
              },
              {
                id: 'country',
                question: 'Where are you from?',
                cue: 'Use the country on the card and ask me',
                hint: 'I’m from … Where are you from?',
              },
              {
                id: 'feeling',
                question: 'How are you?',
                cue: 'Say how you feel and ask me',
                hint: 'I’m … And you?',
              },
            ]}
          />
        }
      >
        <Common.Surface>
          <Common.Row>
            <Avatar size="lg" imageUrl={person.avatar} initials={person.name} />
            <Common.Heading>{person.name}</Common.Heading>
          </Common.Row>
          <KeyValueList
            tone="material"
            density="compact"
            items={[
              { id: 'name', label: 'Name', value: person.name },
              { id: 'country', label: 'From', value: person.country },
              { id: 'feeling', label: 'Feeling', value: person.feeling },
            ]}
          />
        </Common.Surface>
      </RolePlayExercise>
    </Common.Stack>
  )
}
