import { useEffect, useRef, useState } from 'react'
import { CallSimulation } from '../../../src/components/Simulation/CallSimulation'
import type { CallSimulationState } from '../../../src/components/Simulation/CallSimulation.types'
import { RolePlayExercise } from '../../../src/components/Exercise/RolePlayExercise'
import * as Common from '../../../src/components/Exercise/Material.shared.styles'
import data from '../../materials/UXLab/lab-data.json'
import { useLabSpeech } from './useLabSpeech'
import type { LabDemoProps } from './UXLab.demo.types'
export function CallDemo({ level = 'a1' }: LabDemoProps) {
  const d = data.CALL[level]
  const [state, setState] = useState<CallSimulationState>('idle')
  const [step, setStep] = useState(0)
  const [hint, setHint] = useState(false)
  const [key, setKey] = useState('')
  const [status, setStatus] = useState('')
  const [seconds, setSeconds] = useState(0)
  const [completed, setCompleted] = useState<string[]>([])
  const transition = useRef<number | undefined>(undefined)
  const { play, stop } = useLabSpeech()
  useEffect(() => () => window.clearTimeout(transition.current), [])
  useEffect(() => {
    if (state !== 'ringing') return
    const timer = window.setTimeout(() => {
      setState('menu')
      play(d.ivr)
    }, 2200)
    return () => window.clearTimeout(timer)
  }, [state, d.ivr, play])
  useEffect(() => {
    if (state !== 'menu' && state !== 'connected') return
    const timer = window.setInterval(
      () => setSeconds((value) => value + 1),
      1000,
    )
    return () => window.clearInterval(timer)
  }, [state])
  const begin = () => {
    window.clearTimeout(transition.current)
    stop()
    setState('ringing')
    setStep(0)
    setSeconds(0)
    setHint(false)
    setKey('')
    setStatus('')
    setCompleted([])
  }
  const hang = () => {
    window.clearTimeout(transition.current)
    stop()
    setState('ended')
    setHint(false)
  }
  const press = (value: string) => {
    window.clearTimeout(transition.current)
    setKey(value)
    if (value === d.key) {
      setStatus('')
      transition.current = window.setTimeout(() => {
        setState('connected')
        setStep(0)
        setHint(false)
        play(d.lines[0]?.[0] ?? '')
      }, 700)
    } else {
      setStatus('Opção errada. O menu vai repetir.')
      const wrong =
        Object.entries(d.wrong).find(([id]) => id === value)?.[1] ??
        'Sorry, that is not a valid option.'
      play(wrong + ' ' + d.ivr)
    }
  }
  const line = d.lines[step]
  const next = () => {
    if (step >= d.lines.length - 1) {
      hang()
      return
    }
    const i = step + 1
    setStep(i)
    setHint(false)
    play(d.lines[i]?.[0] ?? '')
  }
  return (
    <CallSimulation
      contactName={d.place}
      initials={d.ini}
      state={state}
      elapsedLabel={`${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`}
      caption={state === 'connected' ? line?.[0] : undefined}
      captionLabel={
        state === 'connected'
          ? level === 'a1'
            ? 'Tony · legenda'
            : 'Dan · legenda'
          : 'Atendimento automático'
      }
      pressedKey={key}
      status={status}
      onCall={begin}
      onHangUp={hang}
      onKeyPress={press}
    >
      {state === 'ended' ? (
        <RolePlayExercise
          situation={d.task}
          steps={d.sum.map((label, i) => ({ id: String(i), label }))}
          completedIds={completed}
          onStepToggle={(id) =>
            setCompleted((old) =>
              old.includes(id) ? old.filter((x) => x !== id) : [...old, id],
            )
          }
        />
      ) : state === 'menu' || state === 'connected' ? (
        <>
          <Common.Surface>
            <Common.Heading>
              {state === 'menu'
                ? 'Listen. Which number do you press?'
                : `Fala ${step + 1} de ${d.lines.length}`}
            </Common.Heading>
            <Common.Hint>
              {state === 'menu'
                ? 'A aluna diz o número em inglês e a professora toca no teclado do celular.'
                : 'Espere a aluna responder e avance.'}
            </Common.Hint>
          </Common.Surface>
          <Common.Row>
            {state === 'connected' ? (
              <Common.Action type="button" variant="brand" onClick={next}>
                {step === d.lines.length - 1
                  ? 'Encerrar ligação'
                  : 'Próxima fala'}
              </Common.Action>
            ) : null}
            <Common.Action
              type="button"
              variant="secondary"
              onClick={() => play(state === 'menu' ? d.ivr : (line?.[0] ?? ''))}
            >
              {state === 'menu' ? 'Ouvir menu de novo' : 'Ouvir de novo'}
            </Common.Action>
            <Common.Action
              type="button"
              variant="text"
              aria-expanded={hint}
              onClick={() => setHint(!hint)}
            >
              {hint ? 'Esconder apoio' : 'Mostrar apoio'}
            </Common.Action>
          </Common.Row>
          {hint ? (
            <Common.Surface>
              {state === 'menu' ? d.ivr : line?.[1]}
            </Common.Surface>
          ) : null}
        </>
      ) : (
        <Common.Surface>
          <Common.Heading>
            {level === 'a1'
              ? 'Call Bella Pizza and book a table for Saturday.'
              : 'Your internet keeps dropping. Call your provider, get it fixed and get some money back.'}
          </Common.Heading>
          <Common.Hint>
            {level === 'a1'
              ? 'Combine com a aluna o dia, a hora e quantas pessoas antes de ligar.'
              : 'O atendente vai empurrar a culpa. Ela precisa insistir com educação.'}
          </Common.Hint>
        </Common.Surface>
      )}
    </CallSimulation>
  )
}
