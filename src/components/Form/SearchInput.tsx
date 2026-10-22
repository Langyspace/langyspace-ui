import { useRef } from 'react'
import type { SVGProps } from 'react'
import { IconButton } from '../IconButton/IconButton'
import { useMergedRef } from '../../internal/useMergedRef'
import { CompoundControl } from './CompoundControl'
import * as Styled from './SearchInput.styles'
import type { SearchIconProps, SearchInputProps } from './SearchInput.types'

const iconSizes = { lg: 18, md: 16, sm: 15 } as const

function SearchIcon({ size }: SearchIconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
      <path
        d="m21 21-4.35-4.35"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  )
}

function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="13"
      viewBox="0 0 24 24"
      width="13"
      {...props}
    >
      <path
        d="m18 6-12 12M6 6l12 12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  )
}

export function SearchInput({
  className,
  clearLabel = 'Clear search',
  disabled = false,
  onClear,
  size = 'md',
  surface = 'surface',
  value,
  ref: forwardedRef,
  ...inputProps
}: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const setInputRef = useMergedRef(inputRef, forwardedRef)
  const hasValue = Array.isArray(value)
    ? value.length > 0
    : String(value ?? '').length > 0

  return (
    <CompoundControl
      className={className}
      disabled={disabled}
      onClick={(event) => {
        if (
          disabled ||
          event.defaultPrevented ||
          (event.target instanceof Element &&
            event.target.closest('input, button'))
        )
          return
        inputRef.current?.focus({ preventScroll: true })
      }}
      leading={<SearchIcon size={iconSizes[size]} />}
      size={size}
      surface={surface}
      trailing={
        onClear && clearLabel && hasValue ? (
          <IconButton
            aria-label={clearLabel}
            disabled={disabled}
            size="sm"
            variant="subtle"
            onClick={() => {
              onClear()
              inputRef.current?.focus({ preventScroll: true })
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null
      }
    >
      <Styled.Input
        {...inputProps}
        ref={setInputRef}
        disabled={disabled}
        type="search"
        value={value}
        $size={size}
        data-ui-field="true"
      />
    </CompoundControl>
  )
}
