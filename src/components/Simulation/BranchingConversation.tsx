import { EMPTY_LIST } from '../Exercise/Material.constants'
import { useEffect, useRef } from 'react'
import * as Common from '../Exercise/Material.shared.styles'
import * as Styled from './BranchingConversation.styles'
import type { BranchingConversationProps } from './BranchingConversation.types'
export function BranchingConversation({
  contact,
  messages,
  choices = EMPTY_LIST,
  onChoice,
  mode = 'choices',
  draft = '',
  onDraftChange,
  onSend,
  onRestart,
  ended = false,
  disabled = false,
  status,
  labels,
  children,
  ...props
}: BranchingConversationProps) {
  const text = {
    send: 'Enviar',
    message: 'Sua mensagem',
    choose: 'Escolha uma opção',
    restart: 'Recomeçar',
    history: 'Histórico da conversa',
    ...labels,
  }
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages.length, choices.length])
  return (
    <Styled.Root as="section" {...props}>
      <Styled.Phone>
        <Styled.Header>
          {contact.imageUrl ? <img src={contact.imageUrl} alt="" /> : null}
          <div>
            <b>{contact.name}</b>
            <small>{contact.status ?? 'online'}</small>
          </div>
        </Styled.Header>
        <Styled.Chat ref={ref} role="log" aria-label={text.history}>
          {messages.map((message) => (
            <Styled.Message
              key={message.id}
              $mine={message.side === 'outgoing'}
            >
              {message.content}
              {message.timeLabel ? <time>{message.timeLabel}</time> : null}
            </Styled.Message>
          ))}
          {choices.map((choice, i) => (
            <Styled.Choice
              key={choice.id}
              type="button"
              disabled={disabled || ended || !onChoice}
              onClick={() => onChoice?.(choice.id)}
            >
              <b aria-hidden="true">{String.fromCharCode(65 + i)}</b>
              {choice.label}
            </Styled.Choice>
          ))}
        </Styled.Chat>
        <Styled.Composer
          onSubmit={(event) => {
            event.preventDefault()
            if (!disabled && !ended && draft.trim()) onSend?.()
          }}
        >
          {mode === 'free' ? (
            <>
              <input
                value={draft}
                onChange={(event) => onDraftChange?.(event.currentTarget.value)}
                aria-label={text.message}
                placeholder={text.message}
                disabled={disabled || ended}
              />
              <Common.Action
                type="submit"
                size="sm"
                variant="brand"
                disabled={disabled || ended || !draft.trim() || !onSend}
              >
                {text.send}
              </Common.Action>
            </>
          ) : (
            <Common.Hint>{text.choose}</Common.Hint>
          )}
        </Styled.Composer>
      </Styled.Phone>
      <Styled.Aside>
        {status ? (
          <Common.Surface role="status">{status}</Common.Surface>
        ) : null}
        {children}
        {onRestart ? (
          <Common.Action type="button" variant="secondary" onClick={onRestart}>
            {text.restart}
          </Common.Action>
        ) : null}
      </Styled.Aside>
    </Styled.Root>
  )
}
