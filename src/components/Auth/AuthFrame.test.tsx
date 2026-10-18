import { render, screen } from '@testing-library/react'
import { AuthFrame } from './AuthFrame'

it('preserves the named regions, native form and scroll panel with composed brand and footer', () => {
  render(
    <AuthFrame
      brand={<h1>Marca de exemplo</h1>}
      brandLabel="Marca"
      mobileLogo={<span>Logo</span>}
      formAriaLabel="Entrar"
      topAction={<a href="/cadastro">Cadastrar</a>}
      footer={<p>Termos do produto</p>}
    >
      <form aria-label="Telefone">
        <label htmlFor="phone">Celular</label>
        <input id="phone" />
      </form>
    </AuthFrame>,
  )

  expect(screen.getByLabelText('Marca')).toContainElement(
    screen.getByRole('heading', { name: 'Marca de exemplo', hidden: true }),
  )

  const form = screen.getByRole('region', { name: 'Entrar' })

  expect(form).toHaveAttribute('data-auth-scroll-panel', '')
  expect(form).toContainElement(screen.getByRole('form', { name: 'Telefone' }))
  expect(form).toContainElement(screen.getByText('Termos do produto'))
  expect(screen.getByLabelText('Celular')).toHaveAttribute('id', 'phone')
  expect(
    screen.getAllByRole('link', { name: 'Cadastrar', hidden: true }),
  ).toHaveLength(2)
})
