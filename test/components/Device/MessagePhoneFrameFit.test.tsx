import { act, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { MessagePhoneFrame } from '../../../src/components/Device/MessagePhoneFrame'

let availableHeight = 240
let messageHeight = 480
let observers: (() => void)[]
beforeEach(() => {
  observers = []
  availableHeight = 240
  messageHeight = 480
  vi.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockImplementation(
    () => availableHeight,
  )
  vi.spyOn(HTMLElement.prototype, 'scrollHeight', 'get').mockImplementation(
    () => messageHeight,
  )
  vi.stubGlobal(
    'ResizeObserver',
    class {
      constructor(callback: () => void) {
        observers.push(callback)
      }
      observe() {}
      disconnect() {}
    },
  )
})
afterEach(() => {
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
})

it('fits the conversation rather than growing or scaling the outer device, retaining every message', () => {
  const { container } = render(
    <div data-slide-fit="true">
      <MessagePhoneFrame contact="Teacher" contentSizing="fit">
        <p>Send me a voice note</p>
        <p>Include one change and one question</p>
      </MessagePhoneFrame>
    </div>,
  )
  expect(screen.getByText('Send me a voice note')).toBeInTheDocument()
  expect(
    screen.getByText('Include one change and one question'),
  ).toBeInTheDocument()
  const body = container.querySelector('[data-message-fit-content]')!
  expect(getComputedStyle(body).transform).toContain('scale(0.5)')
  expect(container.querySelector('[data-device-frame]')).toHaveAttribute(
    'data-content-sizing',
    'fit',
  )
  expect(
    getComputedStyle(container.querySelector('[data-device-frame]')!).transform,
  ).not.toContain('scale')
  messageHeight = 960
  act(() => observers.forEach((notify) => notify()))
  expect(getComputedStyle(body).transform).toContain('scale(0.25)')
})

it('never magnifies short content and recalculates when the available area changes', () => {
  availableHeight = 720
  const { container } = render(
    <MessagePhoneFrame contact="Teacher" contentSizing="fit">
      <p>A short task</p>
    </MessagePhoneFrame>,
  )
  const body = container.querySelector('[data-message-fit-content]')!
  expect(getComputedStyle(body).transform).toContain('scale(1)')
  availableHeight = 120
  act(() => observers.forEach((notify) => notify()))
  expect(getComputedStyle(body).transform).toContain('scale(0.25)')
})

it('leaves the existing natural-height conversation unchanged unless explicitly requested', () => {
  const { container } = render(
    <MessagePhoneFrame contact="Teacher">
      <p>Original message</p>
    </MessagePhoneFrame>,
  )
  expect(screen.getByText('Original message')).toBeInTheDocument()
  expect(container.querySelector('[data-message-fit]')).toBeNull()
  expect(observers).toHaveLength(0)
})
