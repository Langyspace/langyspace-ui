import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import type {
  RecordedConversationDefinition,
  RecordedConversationState,
} from './RecordedDialoguePlayback.types'

import { resetPreparedAudio, usePreparedAudio } from './usePreparedAudio'

const idle = (): RecordedConversationState => ({ status: 'idle', error: '' })
const dispose = resetPreparedAudio

/** B101/C101's recorded run-next queue, injected once for the six missing models. */
export function useRecordedConversationAudio(
  active: boolean,
  conversation: RecordedConversationDefinition | undefined,
) {
  const preparedAudio = usePreparedAudio(
    conversation?.turns.map((turn) => turn.src) ?? [],
  )
  const [state, setState] = useState<RecordedConversationState>(idle)
  const stateRef = useRef(state)
  const player = useRef<HTMLAudioElement | null>(null)
  const generation = useRef(0)
  const attempt = useRef(0)
  const intent = useRef(false)
  const mounted = useRef(true)
  const advance = useRef<(() => void) | undefined>(undefined)
  const ready = Boolean(
    conversation?.turns.length &&
    new Set(conversation.turns.map((turn) => turn.id)).size ===
      conversation.turns.length &&
    conversation.turns.every(
      (turn) =>
        turn.src &&
        turn.text &&
        turn.speaker &&
        turn.voiceId &&
        /^[a-f0-9]{64}$/.test(turn.sha256) &&
        turn.durationSeconds > 0,
    ),
  )
  const scope = conversation
    ? `${conversation.id}:${conversation.revision}`
    : ''
  const context = useRef({ active, scope, ready })
  const publish = useCallback((next: RecordedConversationState) => {
    if (!mounted.current) return
    stateRef.current = next
    setState(next)
  }, [])
  const release = useCallback(() => {
    generation.current++
    attempt.current++
    intent.current = false
    advance.current = undefined
    const audio = player.current
    player.current = null
    if (audio) dispose(audio)
  }, [])
  const stop = useCallback(() => {
    release()
    publish(idle())
  }, [release, publish])

  useLayoutEffect(() => {
    context.current = { active, scope, ready }
    stop()
    return release
  }, [active, scope, ready, stop, release])
  useEffect(() => {
    mounted.current = true
    const hide = () => {
      if (document.hidden) stop()
    }
    document.addEventListener('visibilitychange', hide)
    return () => {
      mounted.current = false
      document.removeEventListener('visibilitychange', hide)
      release()
    }
  }, [release, stop])

  const toggle = () => {
    if (!active || !ready || !conversation || document.hidden) return
    const owns = (token: number, audio: HTMLAudioElement) =>
      mounted.current &&
      token === generation.current &&
      player.current === audio &&
      context.current.active &&
      context.current.ready &&
      context.current.scope === scope &&
      !document.hidden
    const fail = (token: number, audio: HTMLAudioElement) => {
      if (!owns(token, audio)) return
      release()
      publish({
        status: 'error',
        error: 'Não foi possível tocar o diálogo. Tente novamente.',
      })
    }
    const play = (token: number, audio: HTMLAudioElement) => {
      const transport = ++attempt.current
      try {
        void audio.play().catch(() => {
          if (transport === attempt.current) fail(token, audio)
        })
      } catch {
        if (transport === attempt.current) fail(token, audio)
      }
    }
    const audio = player.current
    if (stateRef.current.status === 'loading') {
      stop()
      return
    }
    if (stateRef.current.status === 'playing' && audio) {
      intent.current = false
      attempt.current++
      audio.pause()
      if (audio.paused) publish({ ...stateRef.current, status: 'paused' })
      return
    }
    if (stateRef.current.status === 'paused' && audio) {
      intent.current = true
      publish({ ...stateRef.current, status: 'loading' })
      if (audio.ended) advance.current?.()
      else play(generation.current, audio)
      return
    }

    release()
    const token = generation.current
    const turns = conversation.turns
    intent.current = true
    const run = (index: number) => {
      if (
        token !== generation.current ||
        !context.current.active ||
        !intent.current ||
        document.hidden
      )
        return
      const turn = turns[index]
      if (!turn) {
        intent.current = false
        advance.current = undefined
        publish({ status: 'ended', error: '' })
        return
      }
      const next = preparedAudio(turn.src)
      player.current = next
      next.playbackRate = 1
      publish({ status: 'loading', currentId: turn.id, error: '' })
      next.onplaying = () => {
        if (!owns(token, next) || !intent.current) {
          next.pause()
          return
        }
        publish({ status: 'playing', currentId: turn.id, error: '' })
      }
      next.onwaiting = () => {
        if (owns(token, next) && intent.current)
          publish({ status: 'loading', currentId: turn.id, error: '' })
      }
      next.onpause = () => {
        if (!owns(token, next) || !next.paused || next.ended || next.error)
          return
        intent.current = false
        attempt.current++
        publish({ status: 'paused', currentId: turn.id, error: '' })
      }
      const end = () => {
        if (!owns(token, next) || !intent.current || !next.ended) return
        player.current = null
        dispose(next)
        run(index + 1)
      }
      advance.current = end
      next.onended = end
      next.onerror = () => fail(token, next)
      play(token, next)
    }
    run(0)
  }
  return { ...state, ready, toggle, stop }
}
