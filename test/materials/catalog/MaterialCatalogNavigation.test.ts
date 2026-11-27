import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  returnToMaterialCatalog,
  materialCatalogLinkRel,
} from '../../../stories/materials/shared/materialCatalogNavigation'

const portal = 'https://teacher.staging.langy.space'
function tab(href: string) {
  const result = {
    closed: false,
    location: {
      ...new URL(href),
      href,
      origin: new URL(href).origin,
      assign: vi.fn(),
    },
    document: { hasFocus: vi.fn(() => false) },
    focus: vi.fn(),
    setTimeout: window.setTimeout.bind(window),
    opener: null as unknown,
    parent: null as unknown,
  }
  result.parent = result
  return result
}
function back(source: ReturnType<typeof tab>) {
  returnToMaterialCatalog(source as unknown as Window)
}
afterEach(() => vi.useRealTimers())

describe('returning to the original library tab', () => {
  it('focuses the original list without navigation or losing filters', () => {
    const source = tab(`${portal}/materiais/interactive-a1-03/apresentar`)
    const original = tab(`${portal}/materiais?filter=A1`)
    original.focus.mockImplementation(() =>
      original.document.hasFocus.mockReturnValue(true),
    )
    source.opener = original
    back(source)
    expect(original.focus).toHaveBeenCalledOnce()
    expect(original.location.assign).not.toHaveBeenCalled()
    expect(source.location.assign).not.toHaveBeenCalled()
  })

  it.each(['missing', 'closed', 'different route', 'different origin'])(
    'navigates the material tab when the original is %s',
    (state) => {
      const source = tab(`${portal}/materiais/interactive-a1-03/apresentar`)
      const original = tab(
        state === 'different origin'
          ? 'https://example.org/materiais'
          : `${portal}/${state === 'different route' ? 'calendario' : 'materiais'}`,
      )
      original.closed = state === 'closed'
      source.opener = state === 'missing' ? null : original
      back(source)
      expect(original.focus).not.toHaveBeenCalled()
      expect(source.location.assign).toHaveBeenCalledWith(`${portal}/materiais`)
    },
  )

  it('waits briefly for asynchronous browser focus and falls back if denied', () => {
    vi.useFakeTimers()
    const source = tab(`${portal}/materiais/interactive-a1-03/apresentar`)
    source.setTimeout = window.setTimeout.bind(window)
    source.opener = tab(`${portal}/materiais`)
    back(source)
    expect(source.location.assign).not.toHaveBeenCalled()
    vi.advanceTimersByTime(150)
    expect(source.location.assign).toHaveBeenCalledExactlyOnceWith(
      `${portal}/materiais`,
    )
  })

  it('accepts focus completed after the call returns', () => {
    vi.useFakeTimers()
    const source = tab(`${portal}/materiais/interactive-a1-03/apresentar`)
    source.setTimeout = window.setTimeout.bind(window)
    const original = tab(`${portal}/materiais`)
    source.opener = original
    back(source)
    original.document.hasFocus.mockReturnValue(true)
    vi.advanceTimersByTime(150)
    expect(source.location.assign).not.toHaveBeenCalled()
  })

  it('uses the presentation parent opener rather than the iframe opener', () => {
    const frame = tab(`${portal}/interactive-materials/index.html#a1-03`)
    const presentation = tab(`${portal}/materiais/interactive-a1-03/apresentar`)
    const original = tab(`${portal}/materiais`)
    original.document.hasFocus.mockReturnValue(true)
    presentation.opener = original
    frame.parent = presentation
    back(frame)
    expect(original.focus).toHaveBeenCalledOnce()
    expect(presentation.location.assign).not.toHaveBeenCalled()
    expect(frame.location.assign).not.toHaveBeenCalled()
  })

  it('falls back when accessing the opener is blocked', () => {
    const source = tab(`${portal}/materiais/interactive-a1-03/apresentar`)
    Object.defineProperty(source, 'opener', {
      get() {
        throw new DOMException('Blocked', 'SecurityError')
      },
    })
    back(source)
    expect(source.location.assign).toHaveBeenCalledWith(`${portal}/materiais`)
  })

  it('focuses the original local catalog without requiring portal login', () => {
    const source = tab(
      'http://127.0.0.1:8851/?studentPortalOrigin=https%3A%2F%2Fstudent.langy.space#a1-03',
    )
    const original = tab(
      'http://127.0.0.1:8851/?view=catalog&studentPortalOrigin=https%3A%2F%2Fstudent.langy.space',
    )
    original.document.hasFocus.mockReturnValue(true)
    source.opener = original
    back(source)
    expect(original.focus).toHaveBeenCalledOnce()
    expect(source.location.assign).not.toHaveBeenCalled()
  })
})

it('preserves opener only for same-origin preview links', () => {
  expect(materialCatalogLinkRel('/?view=catalog#a1-03', portal)).toBe('opener')
  expect(materialCatalogLinkRel('https://example.org/', portal)).toBe(
    'noopener noreferrer',
  )
  expect(materialCatalogLinkRel('//example.org/', portal)).toBe(
    'noopener noreferrer',
  )
})
