import { SimulationIcon } from './SimulationIcon'
import { AudioSequenceControls } from './AudioSequenceControls'
import { IconButton } from '../IconButton/IconButton'
import { useCallRingtone } from '../../internal/useCallRingtone'
import * as Common from './Material.shared.styles'
import * as Styled from './CallSimulation.styles'
import type { CallSimulationProps } from './CallSimulation.types'
export function CallSimulation({
  contactName,
  initials,
  presentation = 'audio',
  density = 'regular',
  direction = 'outgoing',
  active = true,
  ringtoneSrc,
  playback,
  avatarUrl,
  signalPoor = false,
  onSignalToggle,
  state,
  elapsedLabel = '0:00',
  caption,
  captionLabel,
  pressedKey,
  status,
  children,
  onCall,
  onHangUp,
  onKeyPress,
  disabled = false,
  labels,
  ...props
}: CallSimulationProps) {
  const text = {
    idle: direction === 'incoming' ? 'Incoming call' : 'Toque para ligar',
    ringing: direction === 'incoming' ? 'Incoming call' : 'Calling…',
    connected: 'Connected',
    playRingtone: 'Play ringtone',
    menu: 'Ouça o menu e diga o número.',
    ended: 'Call ended',
    call: direction === 'incoming' ? 'Answer' : 'Ligar',
    callAgain: direction === 'incoming' ? 'Answer again' : 'Ligar de novo',
    hangUp: 'Desligar',
    keypad: 'Teclado da ligação',
    cameraOff: 'Camera off',
    signalPoor: 'Bad signal',
    signalGood: 'Signal OK',
    ...labels,
  }
  const waiting = state === 'idle' || state === 'ringing'
  const ringtone = useCallRingtone({
    src: ringtoneSrc,
    playing: active && !disabled && direction === 'incoming' && waiting,
  })
  const start =
    state === 'idle' ||
    state === 'ended' ||
    (direction === 'incoming' && state === 'ringing')
  return (
    <Styled.Root as="section" {...props}>
      <Styled.Phone
        $video={presentation === 'video'}
        $compact={density === 'compact'}
      >
        {state !== 'menu' ? (
          <Styled.Avatar
            aria-hidden="true"
            $compact={density === 'compact'}
            $video={presentation === 'video'}
            $poor={presentation === 'video' && signalPoor}
          >
            {avatarUrl ? <img src={avatarUrl} alt="" /> : initials}
            {presentation === 'video' && signalPoor ? (
              <Styled.PoorSignal aria-hidden="true" />
            ) : null}
            {presentation === 'video' ? (
              <Styled.CameraBadge>
                <SimulationIcon name="camera" />
              </Styled.CameraBadge>
            ) : null}
          </Styled.Avatar>
        ) : null}
        <h3>{contactName}</h3>
        {presentation === 'video' ? (
          <Styled.Status>{text.cameraOff}</Styled.Status>
        ) : null}
        <Styled.Status
          role={
            presentation === 'video' && state === 'connected'
              ? 'timer'
              : 'status'
          }
        >
          {state === 'idle'
            ? text.idle
            : state === 'ringing'
              ? text.ringing
              : state === 'ended'
                ? `${text.ended}${elapsedLabel ? ` · ${elapsedLabel}` : ''}`
                : elapsedLabel || text.connected}
        </Styled.Status>
        {ringtone.blocked && waiting ? (
          <IconButton
            size="sm"
            variant="inverse"
            aria-label={text.playRingtone}
            title={text.playRingtone}
            onClick={ringtone.ring}
          >
            <SimulationIcon name="replay" />
          </IconButton>
        ) : null}
        {caption || state === 'menu' ? (
          <Styled.Caption>
            <small>{captionLabel}</small>
            {caption ?? text.menu}
            {pressedKey ? <div>{pressedKey}</div> : null}
          </Styled.Caption>
        ) : null}
        {state === 'connected' && playback ? (
          <AudioSequenceControls {...playback} density="compact" />
        ) : null}
        {state === 'menu' ? (
          <Styled.Keypad role="group" aria-label={text.keypad}>
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map(
              (key) => (
                <Styled.Key
                  key={key}
                  type="button"
                  $pressed={pressedKey === key}
                  aria-label={key}
                  disabled={disabled || !onKeyPress}
                  onClick={() => onKeyPress?.(key)}
                >
                  {key}
                </Styled.Key>
              ),
            )}
          </Styled.Keypad>
        ) : null}
        {presentation === 'video' && !start && onSignalToggle ? (
          <Styled.SignalButton
            type="button"
            disabled={disabled}
            aria-pressed={signalPoor}
            onClick={onSignalToggle}
          >
            {signalPoor ? text.signalGood : text.signalPoor}
          </Styled.SignalButton>
        ) : null}
        <Styled.CallButton
          type="button"
          $start={start}
          $compact={density === 'compact'}
          disabled={disabled}
          aria-label={
            start
              ? state === 'ended'
                ? text.callAgain
                : text.call
              : text.hangUp
          }
          onClick={() => {
            ringtone.stop()
            if (start) onCall()
            else onHangUp()
          }}
        >
          <SimulationIcon name={start ? 'phone' : 'hangup'} />
        </Styled.CallButton>
        {presentation === 'video' ? (
          <Styled.Status>
            {start
              ? state === 'ended'
                ? text.callAgain
                : text.call
              : text.hangUp}
          </Styled.Status>
        ) : null}
      </Styled.Phone>
      <Common.Stack>
        {status ? <Common.Hint role="status">{status}</Common.Hint> : null}
        {children}
      </Common.Stack>
    </Styled.Root>
  )
}
