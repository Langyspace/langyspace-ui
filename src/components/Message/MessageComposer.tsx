import { useId, useLayoutEffect, useRef, useState } from 'react'
import type { KeyboardEvent, SubmitEvent } from 'react'
import { IconButton } from '../IconButton/IconButton'
import * as Styled from './MessageComposer.styles'
import type { MessageComposerProps } from './MessageComposer.types'

const defaultMaxLength = 1000

export function MessageComposer({
  autoComplete = 'off',
  autoFocus = false,
  disabled = false,
  error,
  helperText,
  submitting = false,
  maxLength = defaultMaxLength,
  name,
  onSubmit,
  onValueChange,
  placeholder,
  rows = 1,
  submitIcon,
  submitLabel,
  textareaLabel,
  value,
  ref,
  ...formProps
}: MessageComposerProps) {
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const [measurement, setMeasurement] = useState({ height: 0, value })
  const measuredHeight = measurement.value === value ? measurement.height : 0
  const supportId = useId()
  const errorId = `${supportId}-error`
  const helperId = `${supportId}-helper`
  const counterId = `${supportId}-counter`
  const overLimit = value.length > maxLength
  const isEmpty = value.trim().length === 0
  const describedBy = [
    error ? errorId : null,
    helperText ? helperId : null,
    counterId,
  ]
    .filter(Boolean)
    .join(' ')

  useLayoutEffect(() => {
    const input = inputRef.current
    if (!input) return

    // The value-keyed render first releases the prior height, so scrollHeight can shrink.
    const resolvedMaxHeight = getComputedStyle(input).maxHeight
    const maxHeight = resolvedMaxHeight.endsWith('px')
      ? Number.parseFloat(resolvedMaxHeight)
      : Number.NaN
    const height = Number.isFinite(maxHeight)
      ? Math.min(input.scrollHeight, maxHeight)
      : input.scrollHeight
    setMeasurement((current) =>
      current.value === value && current.height === height
        ? current
        : { height, value },
    )
  }, [value])

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (disabled) return
    if (isEmpty || overLimit) {
      inputRef.current?.focus()

      return
    }

    onSubmit()
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (
      event.key !== 'Enter' ||
      event.shiftKey ||
      event.nativeEvent.isComposing
    )
      return

    event.preventDefault()
    event.currentTarget.form?.requestSubmit()
  }

  return (
    <Styled.Form
      {...formProps}
      ref={ref}
      aria-busy={submitting || undefined}
      data-ui-message-composer="true"
      onSubmit={handleSubmit}
    >
      <Styled.InputRow>
        <Styled.Input
          $height={measuredHeight}
          ref={inputRef}
          aria-describedby={describedBy}
          aria-invalid={Boolean(error) || overLimit || undefined}
          aria-label={textareaLabel}
          autoComplete={autoComplete}
          // The consumer opts in when the composer is the screen's primary task.
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus={autoFocus}
          disabled={disabled}
          maxLength={maxLength}
          name={name}
          onChange={(event) => {
            onValueChange(event.target.value)
          }}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          rows={rows}
          value={value}
        />
        <IconButton
          aria-label={submitLabel}
          disabled={disabled}
          shape="rounded"
          size="lg"
          type="submit"
          variant="brand"
        >
          {submitIcon}
        </IconButton>
      </Styled.InputRow>
      {error ? (
        <Styled.Error id={errorId} role="alert">
          {error}
        </Styled.Error>
      ) : null}
      <Styled.Support>
        {helperText ? (
          <Styled.Helper id={helperId}>{helperText}</Styled.Helper>
        ) : null}
        <Styled.Counter $invalid={overLimit} id={counterId}>
          {value.length}/{maxLength}
        </Styled.Counter>
      </Styled.Support>
    </Styled.Form>
  )
}
