import { useEffect, useRef, useState } from 'react'
import type { ClipboardEvent } from 'react'
import * as Styled from './AuthTokenDigits.styles'
import { getEmptyDigits, getTokenDigits } from './utils'
import type { AuthTokenDigitsProps } from './AuthTokenDigits.types'

export function AuthTokenDigits({
  autoFocus = true,
  digitLabel,
  disabled = false,
  defaultValue = '',
  idPrefix,
  invalid = false,
  length,
  onValueChange,
  value,
  ...props
}: AuthTokenDigitsProps) {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([])
  const previousLengthRef = useRef(length)
  const [internalDigits, setInternalDigits] = useState<string[]>(() =>
    defaultValue
      ? getTokenDigits(defaultValue, length)
      : getEmptyDigits(length),
  )
  const digits =
    value === undefined
      ? getTokenDigits(internalDigits.join(''), length)
      : getTokenDigits(value, length)

  useEffect(() => {
    if (!autoFocus || disabled) return
    const focusTimeoutId = window.setTimeout(
      () => inputsRef.current[0]?.focus(),
      80,
    )

    return () => {
      window.clearTimeout(focusTimeoutId)
    }
  }, [autoFocus, disabled])

  useEffect(() => {
    if (previousLengthRef.current === length) return

    setInternalDigits((currentDigits) =>
      getTokenDigits(currentDigits.join(''), length),
    )
    inputsRef.current.length = length
    previousLengthRef.current = length
  }, [length])

  const updateDigits = (nextDigits: string[]) => {
    setInternalDigits(nextDigits)
    onValueChange(nextDigits.join(''))
  }

  const handleDigitChange = (index: number, nextInput: string) => {
    const nextValue = nextInput.replace(/\D/g, '')

    if (nextValue.length > 1) {
      const nextDigits = [...digits]
      const inserted = nextValue.slice(0, length - index)
      Array.from(inserted).forEach((digit, digitIndex) => {
        nextDigits[index + digitIndex] = digit
      })
      updateDigits(nextDigits)
      inputsRef.current[Math.min(index + inserted.length, length) - 1]?.focus()

      return
    }

    const nextDigits = [...digits]
    const nextDigit = nextValue.slice(-1)
    nextDigits[index] = nextDigit
    updateDigits(nextDigits)
    if (nextDigit && index < length - 1) inputsRef.current[index + 1]?.focus()
  }

  const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault()
    const pastedDigits = event.clipboardData
      .getData('text')
      .replace(/\D/g, '')
      .slice(0, length)
    if (!pastedDigits) return

    const nextDigits = Array.from(
      { length },
      (_, index) => pastedDigits[index] ?? '',
    )
    updateDigits(nextDigits)
    inputsRef.current[Math.min(pastedDigits.length, length) - 1]?.focus()
  }

  return (
    <Styled.Row {...props}>
      {digits.map((digit, index) => (
        <Styled.Input
          // Each input is a fixed position of the token.
          // eslint-disable-next-line @eslint-react/no-array-index-key
          key={index}
          ref={(input) => {
            inputsRef.current[index] = input
          }}
          $invalid={invalid}
          $isFilled={Boolean(digit)}
          aria-invalid={invalid || undefined}
          aria-label={`${digitLabel} ${index + 1}`}
          autoComplete={index === 0 ? 'one-time-code' : 'off'}
          disabled={disabled}
          id={`${idPrefix}-${index}`}
          inputMode="numeric"
          maxLength={index === 0 ? length : 1}
          value={digit}
          onChange={(event) => {
            handleDigitChange(index, event.target.value)
          }}
          onKeyDown={(event) => {
            const focusIndex = (nextIndex: number) => {
              event.preventDefault()
              inputsRef.current[nextIndex]?.focus()
            }

            if (event.key === 'ArrowLeft') {
              focusIndex(Math.max(0, index - 1))
            } else if (event.key === 'ArrowRight') {
              focusIndex(Math.min(length - 1, index + 1))
            } else if (event.key === 'Home') {
              focusIndex(0)
            } else if (event.key === 'End') {
              focusIndex(length - 1)
            } else if (
              event.key === 'Backspace' &&
              !digits[index] &&
              index > 0
            ) {
              focusIndex(index - 1)
            }
          }}
          onPaste={handlePaste}
          data-ui-field="true"
        />
      ))}
    </Styled.Row>
  )
}
