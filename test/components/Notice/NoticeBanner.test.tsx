import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Button } from '../../../src/components/Button/Button'
import { NoticeBanner } from '../../../src/components/Notice/NoticeBanner'

describe('NoticeBanner', () => {
  it('leaves announcement semantics to its caller and forwards native attributes and ref', () => {
    const ref = createRef<HTMLElement>()

    render(
      <NoticeBanner
        ref={ref}
        icon={<span aria-hidden="true">!</span>}
        title="Sem conexão"
        data-shell-notice="offline"
      >
        Conteúdo disponível
      </NoticeBanner>,
    )

    expect(screen.getByRole('complementary')).toBe(ref.current)
    expect(ref.current).toHaveAttribute('data-shell-notice', 'offline')
    expect(ref.current).not.toHaveAttribute('aria-live')
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('preserves action focus, callbacks and disabled state without taking lifecycle ownership', async () => {
    const onUpdate = vi.fn()
    const user = userEvent.setup()
    const { rerender } = render(
      <NoticeBanner
        icon={<span aria-hidden="true">↻</span>}
        title="Versão disponível"
        actions={<Button onClick={onUpdate}>Atualizar</Button>}
      >
        Atualize quando puder.
      </NoticeBanner>,
    )

    await user.tab()

    expect(screen.getByRole('button', { name: 'Atualizar' })).toHaveFocus()
    expect(onUpdate).not.toHaveBeenCalled()

    await user.keyboard('{Enter}')

    expect(onUpdate).toHaveBeenCalledOnce()

    rerender(
      <NoticeBanner
        icon={<span />}
        title="Versão disponível"
        actions={
          <Button disabled onClick={onUpdate}>
            Atualizando
          </Button>
        }
      >
        Aguarde.
      </NoticeBanner>,
    )
    await user.click(screen.getByRole('button', { name: 'Atualizando' }))

    expect(onUpdate).toHaveBeenCalledOnce()
  })
})
