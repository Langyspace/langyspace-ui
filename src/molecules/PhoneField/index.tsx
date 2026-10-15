import { forwardRef, useId, useMemo, useRef, useState } from 'react'
import * as Styled from './styles'
import type { PhoneFieldProps } from './types'

export const PhoneField = forwardRef<HTMLInputElement, PhoneFieldProps>(
  function PhoneField(
    {
      countries,
      country,
      errorMessage,
      id,
      label,
      onCountryChange,
      ...inputProps
    },
    ref,
  ) {
    const generatedId = useId()
    const inputId = id ?? generatedId
    const errorId = errorMessage ? `${inputId}-error` : undefined
    const buttonRef = useRef<HTMLButtonElement>(null)
    const [search, setSearch] = useState('')
    const [open, setOpen] = useState(false)
    const filteredCountries = useMemo(
      () =>
        countries.filter((option) =>
          `${option.name} ${option.dialCode} ${option.code}`
            .toLowerCase()
            .includes(search.toLowerCase()),
        ),
      [countries, search],
    )

    return (
      <Styled.Container
        onKeyDown={(event) => {
          if (event.key === 'Escape' && open) {
            event.preventDefault()
            setOpen(false)
            buttonRef.current?.focus()
          }
        }}
      >
        <Styled.Label htmlFor={inputId}>{label}</Styled.Label>
        <Styled.Group>
          <Styled.CountryButton
            ref={buttonRef}
            $hasError={Boolean(errorMessage)}
            $isOpen={open}
            aria-expanded={open}
            aria-haspopup="listbox"
            disabled={inputProps.disabled}
            type="button"
            onClick={() => setOpen((value) => !value)}
          >
            {country.flag} {country.dialCode}
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </Styled.CountryButton>
          <Styled.InputWrap $hasError={Boolean(errorMessage)}>
            <Styled.Input
              autoComplete="tel"
              inputMode="tel"
              placeholder={country.placeholder}
              {...inputProps}
              ref={ref}
              id={inputId}
              aria-describedby={
                [inputProps['aria-describedby'], errorId]
                  .filter(Boolean)
                  .join(' ') || undefined
              }
              aria-invalid={errorMessage ? true : inputProps['aria-invalid']}
              data-ui-field="true"
            />
          </Styled.InputWrap>
          {open && !inputProps.disabled && (
            <Styled.CountryPopover>
              <Styled.CountrySearch
                aria-label="buscar pais"
                placeholder="buscar pais"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') event.preventDefault()
                }}
                data-ui-field="true"
              />
              <Styled.CountryList
                role="listbox"
                aria-label="País"
                onKeyDown={(event) => {
                  if (
                    !['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)
                  )
                    return
                  event.preventDefault()
                  const options = [
                    ...event.currentTarget.querySelectorAll<HTMLButtonElement>(
                      'button',
                    ),
                  ]
                  const current = options.indexOf(
                    event.target as HTMLButtonElement,
                  )
                  const next =
                    event.key === 'Home'
                      ? 0
                      : event.key === 'End'
                        ? options.length - 1
                        : (current +
                            (event.key === 'ArrowDown' ? 1 : -1) +
                            options.length) %
                          options.length
                  options[next]?.focus()
                }}
              >
                {filteredCountries.map((option) => (
                  <Styled.CountryRow
                    key={option.code}
                    $isActive={option.code === country.code}
                    role="option"
                    aria-label={`${option.name} ${option.dialCode}`}
                    aria-selected={option.code === country.code}
                    type="button"
                    onClick={() => {
                      onCountryChange(option)
                      setSearch('')
                      setOpen(false)
                      buttonRef.current?.focus()
                    }}
                  >
                    <span>{option.flag}</span>
                    <Styled.CountryName>{option.name}</Styled.CountryName>
                    <Styled.CountryDial>{option.dialCode}</Styled.CountryDial>
                  </Styled.CountryRow>
                ))}
              </Styled.CountryList>
            </Styled.CountryPopover>
          )}
        </Styled.Group>
        {errorMessage && (
          <Styled.ErrorText id={errorId}>{errorMessage}</Styled.ErrorText>
        )}
      </Styled.Container>
    )
  },
)

export type { PhoneFieldProps, PhoneCountryOption } from './types'
