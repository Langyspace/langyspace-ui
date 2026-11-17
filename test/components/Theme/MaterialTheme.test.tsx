import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { materialDarkTheme } from '../../../src/foundations/theme/materialDarkTheme'
import { TextInput } from '../../../src/components/Form/TextInput'
import { QuizOption } from '../../../src/components/Quiz/QuizOption'
it('themes an existing field and quiz through the provider while retaining default colors outside it', () => {
  const { rerender } = render(
    <ThemeProvider theme={materialDarkTheme}>
      <TextInput aria-label="Notes" />
      <QuizOption letter="A">Answer</QuizOption>
    </ThemeProvider>,
  )
  expect(screen.getByRole('textbox', { name: 'Notes' })).toHaveStyle({
    backgroundColor: '#111113',
    color: '#F7F7F7',
  })
  expect(screen.getByText('Answer')).toHaveStyle({ color: '#F7F7F7' })
  rerender(
    <>
      <TextInput aria-label="Notes" />
      <QuizOption letter="A">Answer</QuizOption>
    </>,
  )
  expect(screen.getByRole('textbox', { name: 'Notes' })).toHaveStyle({
    backgroundColor: '#FFFFFF',
    color: '#0A0A0A',
  })
  expect(screen.getByText('Answer')).toHaveStyle({ color: '#0A0A0A' })
})
