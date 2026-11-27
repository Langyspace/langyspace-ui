import { useCallback, useEffect, useRef, useReducer } from 'react'
import { playRouletteSpinSound } from '../../internal/feedbackSounds'
import { VocabularyControls } from './VocabularyControls'
import {
  initialRouletteRound,
  rouletteRoundReducer,
  nextRouletteEntry,
  rouletteAngle,
  rouletteBank,
  rouletteSector,
  rouletteSegments,
  rouletteSpinDuration,
  rouletteTickTimes,
} from './QuestionRoulette.logic'
import type { QuestionRouletteProps } from './QuestionRoulette.types'
import * as S from './QuestionRoulette.styles'

/** A fresh content bank owns a fresh round, independent of array reference identity. */
export function QuestionRoulette(props: QuestionRouletteProps) {
  return <RouletteRound key={JSON.stringify(props.topics)} {...props} />
}

function RouletteRound({
  topics,
  disabled = false,
  labels,
  onDraw,
  ...props
}: QuestionRouletteProps) {
  const bank = rouletteBank(topics)
  const [{ used, selected, pending, rotation, hint }, dispatch] = useReducer(
    rouletteRoundReducer,
    undefined,
    initialRouletteRound,
  )
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const drawingRef = useRef(false)
  const stopSoundRef = useRef<(() => void) | undefined>(undefined)
  const text = {
    spin: 'Spin',
    spinning: 'Spinning',
    newRound: 'New round',
    ready: 'Your next question',
    unavailable: 'No questions available',
    progress: 'Questions drawn',
    hint: 'Show a speaking tip',
    hideHint: 'Hide the speaking tip',
    ...labels,
  }
  const exhausted = bank.length > 0 && used.size === bank.length
  const segments = rouletteSegments(bank)
  const clearPending = useCallback(() => {
    clearTimeout(timerRef.current)
    timerRef.current = undefined
    drawingRef.current = false
    stopSoundRef.current?.()
    stopSoundRef.current = undefined
  }, [])
  useEffect(() => clearPending, [clearPending])
  useEffect(() => {
    if (disabled) {
      clearPending()
      dispatch({ type: 'cancel' })
    }
  }, [disabled, clearPending])

  const draw = () => {
    if (disabled || drawingRef.current || !bank.length) return
    const startingNewRound = exhausted
    const usedKeys = startingNewRound ? new Set<string>() : used
    const next = nextRouletteEntry(bank, usedKeys, Math.random())
    if (!next) return
    const targetSegment = segments.find(
      (segment) => segment.topic.id === next.topic.id,
    )
    if (!targetSegment) return
    drawingRef.current = true
    const finalRotation = rouletteAngle(rotation, targetSegment.center)
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (!reducedMotion)
      stopSoundRef.current = playRouletteSpinSound(
        rouletteTickTimes(rotation, finalRotation, segments),
        rouletteSpinDuration / 1_000,
      )
    dispatch({ type: 'spin', entry: next, rotation: finalRotation })
    const reveal = () => {
      const nextUsed = new Set([...usedKeys, next.key])
      dispatch({
        type: 'reveal',
        entry: next,
        used: nextUsed,
        rotation: finalRotation,
      })
      drawingRef.current = false
      timerRef.current = undefined
      onDraw?.({
        topic: next.topic,
        question: next.question,
        drawNumber: nextUsed.size,
      })
    }
    if (reducedMotion) reveal()
    else timerRef.current = setTimeout(reveal, rouletteSpinDuration)
  }
  return (
    <S.Root {...props} aria-busy={!!pending} data-question-roulette="true">
      <S.Layout>
        <S.Wheel>
          <S.Rotor
            aria-hidden="true"
            viewBox="0 0 320 320"
            $rotation={rotation}
          >
            {segments.map((segment) => {
              const angle = segment.center
              const radians = ((angle - 90) * Math.PI) / 180
              const x = 160 + 108 * Math.cos(radians)
              const y = 160 + 108 * Math.sin(radians)
              return (
                <g key={segment.topic.id}>
                  <S.Sector
                    d={rouletteSector(segment.start, segment.end)}
                    $alternate={segment.topicIndex % 2 === 0}
                  />
                  <S.Topic x={x} y={y} transform={`rotate(${angle} ${x} ${y})`}>
                    {segment.topic.label}
                  </S.Topic>
                </g>
              )
            })}
          </S.Rotor>
          <S.Rim aria-hidden="true" viewBox="0 0 320 320">
            <circle cx="160" cy="160" r="158" />
            {Array.from({ length: 24 }, (_, index) => {
              const angle = (index * Math.PI) / 12
              return (
                <circle
                  key={angle}
                  cx={160 + 156 * Math.cos(angle)}
                  cy={160 + 156 * Math.sin(angle)}
                  r={index % 6 === 0 ? 3.2 : 1.4}
                  data-major={index % 6 === 0 || undefined}
                />
              )
            })}
          </S.Rim>
          <S.Pointer aria-hidden="true" viewBox="0 0 24 24">
            <path d="M3 3h18L12 19z" />
          </S.Pointer>
          <S.Spin
            variant="brand"
            size="lg"
            disabled={disabled || !bank.length}
            aria-disabled={!!pending || undefined}
            onClick={draw}
            aria-label={
              pending ? text.spinning : exhausted ? text.newRound : text.spin
            }
          >
            {exhausted && !pending ? text.newRound : text.spin}
          </S.Spin>
        </S.Wheel>
        <S.Panel>
          <S.Meta>
            <span>
              {pending ? text.spinning : (selected?.topic.label ?? text.ready)}
            </span>
            <span aria-label={text.progress}>
              {used.size} / {bank.length}
            </span>
          </S.Meta>
          <S.Content role="status" aria-live="polite" aria-atomic="true">
            {selected && !pending ? (
              <S.Prompt>{selected.question.prompt}</S.Prompt>
            ) : (
              <S.Placeholder>
                {bank.length ? '?' : text.unavailable}
              </S.Placeholder>
            )}
          </S.Content>
          {!pending && selected?.question.hint && hint ? (
            <S.Hint>{selected.question.hint}</S.Hint>
          ) : null}
          {!pending && selected?.question.hint ? (
            <S.Footer>
              <VocabularyControls
                density="compact"
                showInitial={hint}
                hintDisabled={disabled || !!pending}
                labels={{ hint: hint ? text.hideHint : text.hint }}
                onToggleInitial={() => {
                  dispatch({ type: 'toggleHint' })
                }}
              />
            </S.Footer>
          ) : null}
        </S.Panel>
      </S.Layout>
    </S.Root>
  )
}
