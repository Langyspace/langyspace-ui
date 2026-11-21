import { useEffect, useRef } from 'react'
import type { SlideNotesProps } from './SlideNotes.types'
import * as S from './SlideNotes.styles'

export function SlideNotes({
  open,
  value,
  onChange,
  onClose,
  labels,
  className,
}: SlideNotesProps) {
  const inputRef = useRef<HTMLTextAreaElement>(null)
  useEffect(() => {
    if (!open) return
    const previous = document.activeElement
    inputRef.current?.focus()
    return () => {
      if (previous instanceof HTMLElement && previous.isConnected)
        previous.focus({ preventScroll: true })
    }
  }, [open])
  if (!open) return null
  return (
    <S.Panel
      className={className}
      role="dialog"
      aria-label={labels?.title ?? 'Notes'}
      aria-modal={false}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          e.preventDefault()
          e.stopPropagation()
          onClose()
        }
      }}
    >
      <S.Header>
        <S.Heading>
          <span aria-hidden="true">✦</span>
          {labels?.title ?? 'Notes'}
        </S.Heading>
        <S.Action
          size="sm"
          variant="secondary"
          onClick={() => {
            onChange('')
            inputRef.current?.focus()
          }}
        >
          {labels?.clear ?? 'Clear'}
        </S.Action>
        <S.Action
          size="sm"
          variant="secondary"
          aria-label={labels?.close ?? 'Close notes'}
          onClick={onClose}
        >
          ✕
        </S.Action>
      </S.Header>
      <S.Editor
        ref={inputRef}
        aria-label={labels?.input ?? 'Notes'}
        placeholder={
          labels?.placeholder ??
          'Words, sentences, things to remember from this class…'
        }
        value={value}
        onChange={(e) => {
          onChange(e.target.value)
        }}
      />
    </S.Panel>
  )
}
