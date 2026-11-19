import { useEffect } from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { GuidedConversation } from '../../stories/materials/shared/GuidedConversation'
import { MaterialTheme } from '../../stories/materials/shared/MaterialTheme'
import { guidedConversation } from '../../stories/materials/TrialA1/TrialA1.guided'

afterEach(cleanup)

it('releases the model before rehearsal and reports the mode to an external player', () => {
  const release = vi.fn()
  const modeChange = vi.fn()
  function Model() {
    useEffect(() => release, [])
    return <p>Recorded model</p>
  }
  render(
    <MaterialTheme>
      <GuidedConversation {...guidedConversation} onModeChange={modeChange}>
        <Model />
      </GuidedConversation>
    </MaterialTheme>,
  )
  fireEvent.click(screen.getByRole('button', { name: '2. Ensaio' }))
  expect(release).toHaveBeenCalledTimes(1)
  expect(modeChange).toHaveBeenLastCalledWith('rehearse')
  expect(screen.queryByText('Recorded model')).not.toBeInTheDocument()
  fireEvent.click(screen.getByRole('button', { name: '3. Sem roteiro' }))
  expect(modeChange).toHaveBeenLastCalledWith('independent')
  expect(screen.queryByText('Do you like music?')).not.toBeInTheDocument()
  expect(screen.queryByRole('button', { name: /Ver apoio:/ })).toBeNull()
  fireEvent.click(screen.getByRole('button', { name: '1. Modelo' }))
  expect(screen.getByText('Recorded model')).toBeVisible()
  expect(modeChange).toHaveBeenLastCalledWith('model')
})

it('shows one exchange, resets optional support and bounds turn navigation', () => {
  render(
    <MaterialTheme>
      <GuidedConversation {...guidedConversation} defaultMode="rehearse">
        Model
      </GuidedConversation>
    </MaterialTheme>,
  )
  expect(screen.getByRole('button', { name: 'Voltar' })).toBeDisabled()
  expect(screen.getByText('Do you like music?')).toBeVisible()
  const support = screen.getByRole('button', { name: /Ver apoio:/ })
  expect(support).toHaveAttribute('aria-expanded', 'false')
  fireEvent.click(support)
  expect(screen.getByText('Yes, I do. / No, I don’t. And you?')).toBeVisible()
  fireEvent.click(screen.getByRole('button', { name: 'Próximo turno' }))
  expect(screen.queryByText('Do you like music?')).not.toBeInTheDocument()
  expect(screen.getByRole('button', { name: /Ver apoio:/ })).toHaveAttribute(
    'aria-expanded',
    'false',
  )
  expect(screen.getByRole('status')).toHaveTextContent('Turno 2 de 3')
  fireEvent.click(screen.getByRole('button', { name: 'Próximo turno' }))
  expect(screen.getByRole('button', { name: 'Próximo turno' })).toBeDisabled()
  fireEvent.click(screen.getByRole('button', { name: 'Voltar' }))
  expect(screen.getByRole('status')).toHaveTextContent('Turno 2 de 3')
})
