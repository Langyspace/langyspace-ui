import { useState } from 'react'
import { Button } from '../../../src/components/Button/Button'
import * as Common from '../../../src/components/Exercise/Material.shared.styles'
import * as Styled from './A104.styles'

const days = ['seg', 'ter', 'qua', 'qui', 'sex', 'sáb', 'dom']
const periods = ['manhã', 'noite']
const states = ['vazio', 'ocupado', 'aula']

export function YourWeek() {
  const [slots, setSlots] = useState<Record<string, number>>({})
  const [hour, setHour] = useState<number>()
  return (
    <Common.Surface>
      <Common.Row>
        <Common.Heading>Your week</Common.Heading>
        <Button
          size="sm"
          variant="tertiary"
          onClick={() => {
            setSlots({})
            setHour(undefined)
          }}
        >
          Clear
        </Button>
      </Common.Row>
      <Styled.CalendarScroll>
        <Styled.Calendar aria-label="Agenda da sua semana">
          <thead>
            <tr>
              <th scope="col">Período</th>
              {days.map((day) => (
                <th scope="col" key={day}>
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {periods.map((period) => (
              <tr key={period}>
                <th scope="row">{period}</th>
                {days.map((day) => {
                  const id = `${day}-${period}`
                  const value = slots[id] ?? 0
                  return (
                    <td key={id}>
                      <Styled.Slot
                        $state={value}
                        variant="tertiary"
                        aria-label={`${day}, ${period}: ${states[value]}`}
                        onClick={() =>
                          setSlots((old) => ({ ...old, [id]: (value + 1) % 3 }))
                        }
                      >
                        {value === 2 ? '✦' : value === 1 ? '●' : '–'}
                      </Styled.Slot>
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </Styled.Calendar>
      </Styled.CalendarScroll>
      <Common.Hint>
        – vazio · ● ocupado · ✦ aula. Clique para alternar.
      </Common.Hint>
      <Common.Row aria-label="Hora da aula">
        {Array.from({ length: 12 }, (_, index) => index + 1).map((value) => (
          <Button
            key={value}
            size="sm"
            variant={hour === value ? 'brand' : 'tertiary'}
            aria-pressed={hour === value}
            onClick={() => setHour(hour === value ? undefined : value)}
          >
            {value}
          </Button>
        ))}
      </Common.Row>
    </Common.Surface>
  )
}
