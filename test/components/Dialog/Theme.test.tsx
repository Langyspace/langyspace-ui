import { render, screen, waitFor } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { expect, it } from 'vitest'
import { Dialog } from '../../../src/components/Dialog/Dialog'
import { createTheme } from '../../../src/foundations/theme/createTheme'

it('applies the dialog contract through the provider and preserves its accessible structure', async () => {
  const productTheme = createTheme({
    dialog: {
      widths: { md: '440px' },
      panel: {
        background: '#fafafa',
        border: '0px solid transparent',
        radius: '28px',
      },
      header: { padding: '30px 24px 0', borderBottom: '0px solid transparent' },
      title: { color: '#123456', fontSize: '27.2px', lineHeight: 1.2 },
      description: { marginTop: '14px', fontSize: '17px' },
      body: { padding: '14px 24px 22px' },
    },
  })
  render(
    <ThemeProvider theme={productTheme}>
      <Dialog
        open
        closeLabel="Close"
        closeIcon={<span aria-hidden="true">×</span>}
        title="Reserve"
        description="Provide your details"
        onClose={() => undefined}
      >
        <p>Dialog content</p>
      </Dialog>
    </ThemeProvider>,
  )
  const panel = await screen.findByRole('dialog', { name: 'Reserve' })
  await waitFor(() =>
    expect(panel).toHaveAccessibleDescription('Provide your details'),
  )
  expect(
    screen.getByRole('button', { name: 'Close', exact: true }),
  ).toHaveTextContent('×')
  const panelCss = getComputedStyle(panel)
  expect(panelCss.backgroundColor).toBe('rgb(250, 250, 250)')
  expect(panelCss.borderRadius).toBe('28px')
  const headingCss = getComputedStyle(
    screen.getByRole('heading', { name: 'Reserve' }),
  )
  expect(headingCss.color).toBe('rgb(18, 52, 86)')
  expect(headingCss.fontSize).toBe('27.2px')
  expect(headingCss.lineHeight).toBe('1.2')
  expect(
    getComputedStyle(screen.getByText('Dialog content').parentElement!).padding,
  ).toBe('14px 24px 22px')
})
