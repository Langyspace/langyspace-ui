import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SelectInput } from '../../atoms/SelectInput'
import { TextareaInput } from '../../atoms/TextareaInput'
import { TextInput } from '../../atoms/TextInput'
import { FieldRoot } from '../FieldRoot'
import { CompoundControl } from '.'

describe('CompoundControl', () => {
  it.each([
    ['input', TextInput],
    ['select', SelectInput],
    ['textarea', TextareaInput],
  ] as const)(
    'preserves naming and native refs for %s inside both field contexts',
    (_name, Control) => {
      let forwardedControl: HTMLElement | null = null
      const ref = (node: HTMLElement | null) => {
        forwardedControl = node
      }
      const { rerender } = render(
        <FieldRoot
          controlId="person"
          label="Pessoa"
          hint="Dica"
          error="Obrigatório"
        >
          <CompoundControl disabled invalid size="lg">
            <Control
              aria-describedby="external-hint"
              id="person"
              ref={ref}
              size="sm"
            />
          </CompoundControl>
        </FieldRoot>,
      )

      const control = screen.getByLabelText('Pessoa')

      expect(forwardedControl).toBe(control)
      expect(control).toBeDisabled()
      expect(control).toHaveAttribute('aria-invalid', 'true')
      expect(control).toHaveAttribute(
        'aria-describedby',
        'external-hint person-hint person-error',
      )

      rerender(
        <FieldRoot controlId="person" label="Pessoa" hint="Dica">
          <CompoundControl>
            <Control ref={ref} />
          </CompoundControl>
        </FieldRoot>,
      )

      expect(screen.getByLabelText('Pessoa')).toBe(control)
      expect(control).not.toBeDisabled()
      expect(control).not.toHaveAttribute('aria-invalid')
      expect(control).toHaveAttribute('aria-describedby', 'person-hint')
    },
  )

  it('owns one visual surface with explicit adornment semantics', () => {
    render(
      <CompoundControl invalid leading={<svg />} trailing={<span>kg</span>}>
        <input aria-label="Peso" />
      </CompoundControl>,
    )

    const compound = screen.getByRole('textbox', { name: 'Peso' }).parentElement

    expect(compound).toHaveClass('lsui-sc-compound-control')
    expect(compound).toHaveAttribute('data-invalid', 'true')
    expect(compound?.querySelectorAll('svg')).toHaveLength(1)
  })

  it('owns disabled, invalid and size for package field controls', () => {
    render(
      <>
        <CompoundControl disabled invalid size="lg">
          <TextInput aria-label="Nome" />
        </CompoundControl>
        <CompoundControl disabled>
          <SelectInput aria-label="Nível">
            <option>B1</option>
          </SelectInput>
        </CompoundControl>
        <CompoundControl disabled>
          <TextareaInput aria-label="Notas" />
        </CompoundControl>
      </>,
    )

    const name = screen.getByRole('textbox', { name: 'Nome' })

    expect(name.parentElement).toHaveStyle({
      borderRadius: '0.625rem',
      minHeight: '3.5rem',
    })
    expect(name).toBeDisabled()
    expect(name).toHaveAttribute('aria-invalid', 'true')
    expect(name).toHaveStyle({ minHeight: '3.5rem' })
    expect(screen.getByRole('combobox', { name: 'Nível' })).toBeDisabled()
    expect(screen.getByRole('textbox', { name: 'Notas' })).toBeDisabled()
  })
})
