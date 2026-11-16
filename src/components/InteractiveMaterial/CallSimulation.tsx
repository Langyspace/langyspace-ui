import { SimulationIcon } from './SimulationIcon'
import * as Common from './Material.shared.styles'
import * as Styled from './CallSimulation.styles'
import type { CallSimulationProps } from './CallSimulation.types'
export function CallSimulation({
  contactName,
  initials,
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
    idle: 'Toque para ligar',
    ringing: 'Calling…',
    menu: 'Ouça o menu e diga o número.',
    ended: 'Call ended',
    call: 'Ligar',
    callAgain: 'Ligar de novo',
    hangUp: 'Desligar',
    keypad: 'Teclado da ligação',
    ...labels,
  }
  const start = state === 'idle' || state === 'ended'
  return (
    <Styled.Root as="section" {...props}>
      <Styled.Phone>
        {state !== 'menu' ? (
          <Styled.Avatar aria-hidden="true">{initials}</Styled.Avatar>
        ) : null}
        <h3>{contactName}</h3>
        <Styled.Status role="status">
          {state === 'idle'
            ? text.idle
            : state === 'ringing'
              ? text.ringing
              : state === 'ended'
                ? `${text.ended} · ${elapsedLabel}`
                : elapsedLabel}
        </Styled.Status>
        {caption || state === 'menu' ? (
          <Styled.Caption>
            <small>{captionLabel}</small>
            {caption ?? text.menu}
            {pressedKey ? <div>{pressedKey}</div> : null}
          </Styled.Caption>
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
        <Styled.CallButton
          type="button"
          $start={start}
          disabled={disabled}
          aria-label={
            start
              ? state === 'ended'
                ? text.callAgain
                : text.call
              : text.hangUp
          }
          onClick={start ? onCall : onHangUp}
        >
          <SimulationIcon name={start ? 'phone' : 'hangup'} />
        </Styled.CallButton>
      </Styled.Phone>
      <Common.Stack>
        {status ? <Common.Hint role="status">{status}</Common.Hint> : null}
        {children}
      </Common.Stack>
    </Styled.Root>
  )
}
