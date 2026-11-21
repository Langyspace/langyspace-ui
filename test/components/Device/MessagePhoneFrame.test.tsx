import { createRef } from 'react'
import { fireEvent } from '@testing-library/react'
import { render, screen } from '@testing-library/react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet, ThemeProvider } from 'styled-components'
import { expect, it, vi } from 'vitest'
import { MessagePhoneFrame } from '../../../src/components/Device/MessagePhoneFrame'
import { MessageBubble } from '../../../src/components/Message/MessageBubble'
import { createTheme } from '../../../src/foundations/theme/createTheme'

it('presents consumer-owned contact and outgoing content without fake send controls', () => {
  const ref = createRef<HTMLElement>()
  render(
    <MessagePhoneFrame
      ref={ref}
      contact="School team"
      aria-label="Prepared message"
      composerPlaceholder="Mensagem"
    >
      <MessageBubble side="outgoing" timestamp="10:30">
        I’d like to join the course
      </MessageBubble>
    </MessagePhoneFrame>,
  )
  expect(ref.current).toBe(
    screen.getByRole('region', { name: 'Prepared message' }),
  )
  expect(screen.getByText('School team')).toBeVisible()
  expect(
    screen.getByText('I’d like to join the course').closest('article'),
  ).toHaveAttribute('data-side', 'outgoing')
  expect(screen.queryByRole('button')).not.toBeInTheDocument()
  expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
  expect(screen.queryByRole('link')).not.toBeInTheDocument()
  expect(document.querySelector('audio, video')).toBeNull()
})

it('provides the larger listening proportions through a prop without replacing contact or content', () => {
  const sheet = new ServerStyleSheet()
  try {
    renderToString(
      sheet.collectStyles(
        <MessagePhoneFrame size="large" contact="Langy">
          <p>One message</p>
        </MessagePhoneFrame>,
      ),
    )
    expect(sheet.getStyleTags()).toContain('36rem')
    expect(sheet.getStyleTags()).toContain('18rem')
    expect(sheet.getStyleTags()).toContain('100dvh')
  } finally {
    sheet.seal()
  }
})

it('preserves the native conversation ref and consumer-provided composer action', () => {
  const ref = createRef<HTMLDivElement>()
  const onReply = vi.fn()
  render(
    <MessagePhoneFrame
      contact="Ana"
      conversationProps={{
        ref,
        role: 'region',
        'aria-label': 'Conversation with Ana',
        tabIndex: 0,
      }}
      composerAction={<button onClick={onReply}>Reply</button>}
    >
      <p>Audio content</p>
    </MessagePhoneFrame>,
  )
  expect(ref.current).toBe(
    screen.getByRole('region', { name: 'Conversation with Ana' }),
  )
  expect(ref.current).toHaveAttribute('tabindex', '0')
  fireEvent.click(screen.getByRole('button', { name: 'Reply' }))
  expect(onReply).toHaveBeenCalledOnce()
})

it('uses the voice-message phone theme and stays width-bounded during server rendering', () => {
  const sheet = new ServerStyleSheet()
  try {
    const html = renderToString(
      sheet.collectStyles(
        <ThemeProvider
          theme={createTheme({
            voiceMessage: {
              phoneWidth: '16rem',
              phoneHeight: '32rem',
              canvas: '#123456',
            },
          })}
        >
          <MessagePhoneFrame contact="A longer contact name" time="10:30">
            <p>Prepared message</p>
          </MessagePhoneFrame>
        </ThemeProvider>,
      ),
    )
    expect(html).toContain('lsui-sc-message-phone-frame')
    expect(html).toContain('10:30')
    expect(sheet.getStyleTags()).toMatch(/width:min\(100%,\s*16rem\)/)
    expect(sheet.getStyleTags()).toContain('height:32rem')
    expect(sheet.getStyleTags()).toContain('#123456')
    expect(html).not.toContain('<button')
  } finally {
    sheet.seal()
  }
})
