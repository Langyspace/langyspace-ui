import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it, vi } from 'vitest'
import { createRef, type FormEvent } from 'react'
import {
  AuthActions,
  AuthBrandContent,
  AuthFooter,
  AuthHeader,
  AuthLegalText,
  AuthResendAction,
  Button,
} from '../../../src'

it('composes brand content and legal navigation from product-owned copy', () => {
  render(
    <AuthBrandContent
      logo={<span>Marca</span>}
      title="Sua próxima aula "
      highlight="começa aqui."
      description="Acesse seus materiais."
      features={['Agenda', 'Materiais']}
      footer={
        <AuthFooter links={[{ href: '/termos', label: 'Termos' }]}>
          © 2026 Escola
        </AuthFooter>
      }
    />,
  )

  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    'Sua próxima aula começa aqui.',
  )
  expect(
    within(screen.getByRole('list', { hidden: true })).getAllByRole(
      'listitem',
      { hidden: true },
    ),
  ).toHaveLength(2)
  expect(screen.getByRole('link', { name: 'Termos' })).toHaveAttribute(
    'href',
    '/termos',
  )
  expect(screen.getByText(/© 2026 Escola/)).toHaveTextContent(
    '© 2026 Escola · Termos',
  )
})

it('keeps form submission and back actions native in the header/actions composition', async () => {
  const user = userEvent.setup()
  const back = vi.fn()
  const submit = vi.fn((event: FormEvent) => event.preventDefault())
  render(
    <form onSubmit={submit}>
      <AuthHeader
        title="Confira seu "
        highlight="celular."
        paragraphs={['Informe o código.', 'O código expira em breve.']}
        backAction={
          <Button variant="secondary" size="sm" onClick={back}>
            Trocar número
          </Button>
        }
      />
      <AuthActions>
        <Button type="submit" fullWidth size="lg">
          Entrar
        </Button>
      </AuthActions>
    </form>,
  )

  await user.click(screen.getByRole('button', { name: 'Trocar número' }))
  expect(back).toHaveBeenCalledOnce()
  expect(submit).not.toHaveBeenCalled()
  await user.click(screen.getByRole('button', { name: 'Entrar' }))
  expect(submit).toHaveBeenCalledOnce()
  expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
    'Confira seu celular.',
  )
  expect(screen.getByText('Informe o código.').tagName).toBe('P')
  expect(screen.getByText('O código expira em breve.').tagName).toBe('P')
})

it('owns resend activation while the product controls its countdown and disabled state', async () => {
  const user = userEvent.setup()
  const resend = vi.fn()
  const { rerender } = render(
    <AuthResendAction onResend={resend} resendLabel="Reenviar código" disabled>
      Reenviar em 00:30
    </AuthResendAction>,
  )
  await user.click(screen.getByRole('button', { name: 'Reenviar código' }))
  expect(resend).not.toHaveBeenCalled()
  rerender(
    <AuthResendAction onResend={resend} resendLabel="Reenviar código">
      Não recebeu?
    </AuthResendAction>,
  )
  await user.click(screen.getByRole('button', { name: 'Reenviar código' }))
  expect(resend).toHaveBeenCalledOnce()
  expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
})

it('forwards heading attributes and ref without wrapping rich title content', () => {
  const ref = createRef<HTMLHeadingElement>()
  render(
    <AuthHeader
      ref={ref}
      id="login-title"
      title={<>Bom te ver de </>}
      highlight={<strong>volta.</strong>}
    />,
  )
  const heading = screen.getByRole('heading', {
    level: 2,
    name: 'Bom te ver de volta.',
  })
  expect(ref.current).toBe(heading)
  expect(heading).toHaveAttribute('id', 'login-title')
  expect(heading).toHaveClass('lsui-sc-auth-title')
  expect(heading).toHaveStyle({ margin: '0', fontSize: '1.75rem' })
})

it('preserves legal-copy spacing when the submit action has its own container', () => {
  render(
    <form>
      <AuthLegalText>Ao confirmar, você aceita os termos.</AuthLegalText>
      <AuthActions>
        <Button type="submit" fullWidth size="lg">
          Continuar
        </Button>
      </AuthActions>
    </form>,
  )
  expect(screen.getByRole('button', { name: 'Continuar' })).toHaveStyle({
    marginTop: '1rem',
  })
})
