// GlobalStyle uses the browser entry here; the Node/CJS entry does not install client rules.
import { useState } from 'react'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderToString } from 'react-dom/server'
import { hydrateRoot, type Root } from 'react-dom/client'
import { describe, it, expect, vi } from 'vitest'
import { Button } from '../../src/components/Button/Button'
import { ActionMenu } from '../../src/components/ActionMenu/ActionMenu'
import type { ActionMenuItem } from '../../src/components/ActionMenu/ActionMenu.types'
import { Dialog } from '../../src/components/Dialog/Dialog'
import { Drawer } from '../../src/components/Drawer/Drawer'
import * as Composition from './styled-only.styles'
import { WeekView } from '../../src/components/Calendar/WeekView'
import { modalScrollLockAttribute } from '../../src/internal/ModalLayer/stack'

export default function DialogHarness({
  onClose = () => undefined,
}: {
  onClose?: () => void
}) {
  const [open, setOpen] = useState(false)
  const close = () => {
    onClose()
    setOpen(false)
  }

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Abrir decisão
      </button>
      <Dialog
        closeLabel="Fechar decisão"
        description="Revise os dados antes de continuar."
        footer={<Button onClick={close}>Confirmar</Button>}
        onClose={close}
        open={open}
        title="Confirmar decisão"
      >
        <button data-overlay-initial-focus="true" type="button">
          Cancelar
        </button>
        <button type="button">Continuar</button>
      </Dialog>
    </>
  )
}
const glyph = <svg data-testid="item-icon" />
const createItems = (
  onSelect: (id: string) => void = () => undefined,
): readonly ActionMenuItem[] => [
  {
    icon: glyph,
    id: 'open',
    label: 'Abrir cadastro',
    onSelect: () => onSelect('open'),
  },
  {
    disabled: true,
    id: 'disabled',
    label: 'Ação indisponível',
    onSelect: () => onSelect('disabled'),
  },
  {
    id: 'archive',
    label: 'Arquivar registro',
    onSelect: () => onSelect('archive'),
    tone: 'danger',
  },
  {
    loading: true,
    id: 'loading',
    label: 'Atualizando registro',
    onSelect: () => onSelect('loading'),
  },
]
it('names the layer, traps focus and restores the trigger after Escape', async () => {
  const onClose = vi.fn()
  const user = userEvent.setup()

  render(<DialogHarness onClose={onClose} />)

  const trigger = screen.getByRole('button', { name: 'Abrir decisão' })

  await user.click(trigger)

  const dialog = screen.getByRole('dialog', { name: 'Confirmar decisão' })
  const initial = screen.getByRole('button', { name: 'Cancelar' })
  await waitFor(() => expect(initial).toHaveFocus())

  expect(dialog).toHaveAccessibleDescription(
    'Revise os dados antes de continuar.',
  )
  expect(getComputedStyle(document.body).overflow).toBe('hidden')

  screen.getByRole('button', { name: 'Confirmar' }).focus()
  await user.tab()

  expect(screen.getByRole('button', { name: 'Fechar decisão' })).toHaveFocus()

  await user.keyboard('{Escape}')

  expect(onClose).toHaveBeenCalledTimes(1)

  await waitFor(() => expect(trigger).toHaveFocus())

  expect(document.body.style.overflow).toBe('')
})

it('keeps only the top nested layer interactive and preserves the document lock', async () => {
  const closeDrawer = vi.fn()
  const closeDialog = vi.fn()
  const user = userEvent.setup()
  const { rerender } = render(
    <>
      <Drawer
        closeLabel="Fechar cobrança"
        onClose={closeDrawer}
        open
        title="Cobrança"
      >
        <button type="button">Ação da cobrança</button>
      </Drawer>
      <Dialog
        closeLabel="Fechar confirmação"
        onClose={closeDialog}
        open
        title="Confirmar baixa"
      >
        <button type="button">Cancelar baixa</button>
      </Dialog>
    </>,
  )

  const backdrops = document.querySelectorAll<HTMLElement>(
    '[data-ui-modal-backdrop="true"]',
  )
  await waitFor(() => expect(backdrops[0]!.inert).toBe(true))

  expect(backdrops[1]!.inert).toBe(false)

  await user.keyboard('{Escape}')

  expect(closeDialog).toHaveBeenCalledTimes(1)
  expect(closeDrawer).not.toHaveBeenCalled()

  rerender(
    <Drawer
      closeLabel="Fechar cobrança"
      onClose={closeDrawer}
      open
      title="Cobrança"
    >
      <button type="button">Ação da cobrança</button>
    </Drawer>,
  )

  await waitFor(() => {
    expect(
      document.querySelector<HTMLElement>('[data-ui-modal-backdrop="true"]')
        ?.inert,
    ).toBe(false)
  })

  expect(getComputedStyle(document.body).overflow).toBe('hidden')

  await user.keyboard('{Escape}')

  expect(closeDrawer).toHaveBeenCalledTimes(1)
})

describe.each([
  ['dialog', Dialog],
  ['drawer', Drawer],
] as const)('%s hydration', (_kind, Overlay) => {
  it('activates an initially open server-rendered layer and restores document state on unmount', async () => {
    const appRoot = document.createElement('div')
    appRoot.id = 'root'
    document.body.append(appRoot)
    const content = (
      <Overlay closeLabel="Fechar" onClose={() => undefined} open title="Ajuda">
        <button type="button">Confirmar</button>
      </Overlay>
    )
    appRoot.innerHTML = renderToString(content)
    let root: Root | undefined

    try {
      await act(async () => {
        root = hydrateRoot(appRoot, content)
      })

      expect(screen.getByRole('dialog', { name: 'Ajuda' })).toBeVisible()
      expect(appRoot.inert).toBe(true)
      expect(getComputedStyle(document.body).overflow).toBe('hidden')
      expect(screen.getByRole('button', { name: 'Fechar' })).toHaveFocus()
    } finally {
      await act(async () => {
        root?.unmount()
      })
      appRoot.remove()
    }

    expect(document.body.style.overflow).not.toBe('hidden')
  })
})

it('keeps host inline overflow and marker intact through nested layers and cleanup', () => {
  const initialStyle = document.body.getAttribute('style')
  const initialMarker = document.body.getAttribute(modalScrollLockAttribute)
  document.body.style.overflow = 'scroll'
  document.body.setAttribute(modalScrollLockAttribute, 'host-marker')
  const content = (child: boolean) => (
    <>
      <Drawer
        open
        closeLabel="Fechar pai"
        onClose={() => undefined}
        title="Pai"
      >
        Conteúdo
      </Drawer>
      {child ? (
        <Dialog
          open
          closeLabel="Fechar filho"
          onClose={() => undefined}
          title="Filho"
        >
          Confirmação
        </Dialog>
      ) : null}
    </>
  )
  const view = render(content(true))
  try {
    expect(document.body.style.overflow).toBe('scroll')
    expect(getComputedStyle(document.body).overflow).toBe('hidden')
    expect(document.body.getAttribute(modalScrollLockAttribute)).toBe('locked')
    const layers = [
      ...document.querySelectorAll<HTMLElement>('[data-ui-modal-backdrop]'),
    ]
    expect(layers[0]?.inert).toBe(true)
    expect(layers[1]?.inert).toBe(false)
    expect(Number(getComputedStyle(layers[1]!).zIndex)).toBeGreaterThan(
      Number(getComputedStyle(layers[0]!).zIndex),
    )
    expect(layers.every((layer) => layer.style.zIndex === '')).toBe(true)
    view.rerender(content(false))
    expect(screen.getByRole('dialog', { name: 'Pai' })).toBeVisible()
    expect(getComputedStyle(document.body).overflow).toBe('hidden')
    view.unmount()
    expect(document.body.style.overflow).toBe('scroll')
    expect(document.body.getAttribute(modalScrollLockAttribute)).toBe(
      'host-marker',
    )
    expect(getComputedStyle(document.body).overflow).toBe('scroll')
  } finally {
    view.unmount()
    if (initialStyle === null) document.body.removeAttribute('style')
    else document.body.setAttribute('style', initialStyle)
    if (initialMarker === null)
      document.body.removeAttribute(modalScrollLockAttribute)
    else document.body.setAttribute(modalScrollLockAttribute, initialMarker)
  }
})

it('reuses the menu class while updating private position rules and removes its rule on close', async () => {
  let triggerLeft = 250
  const rectangle = (
    left: number,
    top: number,
    width: number,
    height: number,
  ) => ({
    bottom: top + height,
    height,
    left,
    right: left + width,
    top,
    width,
    x: left,
    y: top,
    toJSON: () => undefined,
  })
  const rectangles = vi
    .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
    .mockImplementation(function getRect(this: HTMLElement) {
      return this.matches('[data-ui-action-menu="true"]')
        ? rectangle(0, 0, 220, 200)
        : rectangle(triggerLeft, 20, 32, 32)
    })
  const { unmount, rerender } = render(
    <ActionMenu defaultOpen items={createItems()} triggerLabel="Menu móvel" />,
  )
  try {
    const menu = await screen.findByRole('menu')
    await waitFor(() => expect(getComputedStyle(menu).left).toBe('62px'))
    const className = menu.className
    const positionRules = () =>
      [...document.styleSheets]
        .flatMap((sheet) => [...sheet.cssRules])
        .filter((rule) => rule.cssText.includes(`#${menu.id}`))
    expect(positionRules()).toHaveLength(1)
    for (const left of [270, 290, 310]) {
      triggerLeft = left
      rerender(
        <ActionMenu
          defaultOpen
          items={createItems()}
          triggerLabel="Menu móvel"
        />,
      )
      await waitFor(() =>
        expect(getComputedStyle(menu).left).toBe(`${left - 188}px`),
      )
      expect(menu.className).toBe(className)
      expect(menu.style.left).toBe('')
      expect(positionRules()).toHaveLength(1)
    }
    fireEvent.resize(window)
    await waitFor(() =>
      expect(screen.queryByRole('menu')).not.toBeInTheDocument(),
    )
    expect(screen.getByRole('button', { name: 'Menu móvel' })).toHaveFocus()
    expect(document.querySelectorAll('[data-ui-action-menu]')).toHaveLength(0)
    expect(positionRules()).toHaveLength(0)
  } finally {
    unmount()
    rectangles.mockRestore()
  }
})

it('preserves Composer growth and shrink under ordinary consumer composition', async () => {
  const props = {
    onSubmit: () => undefined,
    onValueChange: () => undefined,
    submitIcon: <span aria-hidden>↑</span>,
    submitLabel: 'Enviar composição',
    textareaLabel: 'Mensagem composta',
  }
  const view = render(
    <Composition.ComposedComposer
      {...props}
      value={Array.from({ length: 20 }, () => 'Linha local').join('\n')}
    />,
  )
  const input = screen.getByRole('textbox', { name: 'Mensagem composta' })
  await waitFor(() => expect(getComputedStyle(input).height).toBe('144px'))
  expect(input.style.height).toBe('')
  view.rerender(<Composition.ComposedComposer {...props} value="Curta" />)
  await waitFor(() => expect(getComputedStyle(input).height).toBe('48px'))
})

it('preserves finite chart, progress, calendar and Swiper measures under consumer CSS', () => {
  const view = render(
    <>
      <Composition.ComposedChart
        data-testid="composed-chart"
        items={[
          {
            id: 'day',
            label: 'Dia',
            description: 'Série local',
            values: [1, 2],
          },
        ]}
      />
      <Composition.ComposedProgress
        data-testid="composed-progress"
        value={0.5}
      />
      <Composition.ComposedSwiper
        data-testid="composed-swiper"
        exit={{ x: '120%', y: '-1rem', rotate: '12deg' }}
      />
      <Composition.CalendarSurface>
        <WeekView
          days={[
            {
              id: 'day',
              dateKey: '2026-11-15',
              label: 'Domingo',
              shortLabel: 'Dom',
              dayNumber: 15,
            },
          ]}
          events={[
            {
              id: 'event',
              dateKey: '2026-11-15',
              startMinute: 540,
              durationMinutes: 60,
              timeLabel: '09:00',
              title: 'Aula local',
              label: 'Aula composta',
            },
          ]}
          slots={[]}
          timeRange={{ startMinute: 480, endMinute: 600 }}
          onOpenEvent={() => undefined}
        />
      </Composition.CalendarSurface>
    </>,
  )
  const bars = screen.getByTestId('composed-chart').querySelectorAll('span')
  expect(getComputedStyle(bars[0]!).height).toBe('88px')
  expect(getComputedStyle(bars[1]!).height).toBe('176px')
  const progress = screen.getByTestId('composed-progress')
  expect(progress.firstElementChild!.getBoundingClientRect().width).toBeCloseTo(
    progress.getBoundingClientRect().width / 2,
  )
  const event = screen.getByRole('button', { name: 'Aula composta' })
  expect(getComputedStyle(event).height).toBe('54px')
  expect(getComputedStyle(event).top).toBe('56px')
  const swiper = screen.getByTestId('composed-swiper')
  expect(getComputedStyle(swiper).getPropertyValue('--tx')).toBe('120%')
  expect(getComputedStyle(swiper).getPropertyValue('--ty')).toBe('-1rem')
  expect(getComputedStyle(swiper).getPropertyValue('--tr')).toBe('12deg')
  view.rerender(
    <Composition.ComposedSwiper
      data-testid="composed-swiper"
      exit={{ x: '', y: '', rotate: '' }}
    />,
  )
  // Blank exit values emit no own declarations, so the same consumer values remain available.
  expect(
    getComputedStyle(screen.getByTestId('composed-swiper')).getPropertyValue(
      '--tx',
    ),
  ).toBe('1px')
})
