import { useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import { TextInput } from '../../../src/components/Form/TextInput'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import * as Styled from './A103.styles'

const labels = ['Nome', 'Quem é', 'Profissão ou de onde é']
const storageKey = 'langy-a103-your-people'

export function YourPeople() {
  const [namesOnly, setNamesOnly] = useState(false)
  const [values, setValues] = useState<Record<string, string>>(() => {
    try {
      const saved: unknown = JSON.parse(
        sessionStorage.getItem(storageKey) ?? '{}',
      )
      if (!saved || typeof saved !== 'object' || Array.isArray(saved)) return {}
      return Object.fromEntries(
        Object.entries(saved).filter(([, value]) => typeof value === 'string'),
      )
    } catch {
      return {}
    }
  })
  const update = (next: Record<string, string>) => {
    setValues(next)
    try {
      sessionStorage.setItem(storageKey, JSON.stringify(next))
    } catch {
      /* The worksheet stays usable when storage is unavailable. */
    }
  }
  return (
    <Common.Surface>
      <Common.Row>
        <Common.Heading>Your people</Common.Heading>
        <Button
          size="sm"
          variant="tertiary"
          aria-pressed={namesOnly}
          onClick={() => setNamesOnly(!namesOnly)}
        >
          {namesOnly ? 'Show all' : 'Names only'}
        </Button>
        <Button size="sm" variant="tertiary" onClick={() => update({})}>
          Clear
        </Button>
      </Common.Row>
      <Styled.Worksheet>
        {[0, 1, 2].map((person) => (
          <Styled.Person key={person}>
            <legend>Pessoa {person + 1}</legend>
            {labels.map((label, field) => (
              <label key={label}>
                {label}
                {namesOnly && field > 0 ? (
                  <span aria-label={`${label}: escondido`}>•••</span>
                ) : (
                  <TextInput
                    size="sm"
                    aria-label={`Pessoa ${person + 1}: ${label}`}
                    autoComplete="off"
                    value={values[`${person}-${field}`] ?? ''}
                    onChange={(event) =>
                      update({
                        ...values,
                        [`${person}-${field}`]: event.target.value,
                      })
                    }
                  />
                )}
              </label>
            ))}
          </Styled.Person>
        ))}
      </Styled.Worksheet>
    </Common.Surface>
  )
}
