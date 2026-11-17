import { createBrowserStorage } from '../helpers/browserStorage'
import { beforeEach, afterEach } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import { useLessonPage } from '../../stories/materials/shared/useLessonPage'
let browserStorage: ReturnType<typeof createBrowserStorage>
beforeEach(() => {
  browserStorage = createBrowserStorage()
  vi.stubGlobal('localStorage', browserStorage.storage)
})
afterEach(() => {
  vi.unstubAllGlobals()
  browserStorage.dispose()
})
it('resumes only a valid saved page and honors an explicit starting page', () => {
  window.localStorage.setItem('langy-page:a2', 'two')
  const ids = ['one', 'two']
  const saved = renderHook(() => useLessonPage(undefined, 'a2', ids))
  expect(saved.result.current[0]).toBe('two')
  saved.unmount()
  const explicit = renderHook(() => useLessonPage('one', 'a2', ids))
  expect(explicit.result.current[0]).toBe('one')
  act(() => explicit.result.current[1]('two'))
  expect(window.localStorage.getItem('langy-page:a2')).toBe('two')
  window.localStorage.setItem('langy-page:a2', 'removed')
  const stale = renderHook(() => useLessonPage(undefined, 'a2', ids))
  expect(stale.result.current[0]).toBe('one')
  window.localStorage.removeItem('langy-page:a2')
})
it('preserves navigation without browser persistence', () => {
  const read = vi
      .spyOn(Object.getPrototypeOf(window.localStorage) as Storage, 'getItem')
      .mockImplementation(() => {
        throw Error('blocked')
      }),
    write = vi
      .spyOn(Object.getPrototypeOf(window.localStorage) as Storage, 'setItem')
      .mockImplementation(() => {
        throw Error('blocked')
      })
  try {
    const { result } = renderHook(() =>
      useLessonPage(undefined, 'a2', ['one', 'two']),
    )
    act(() => result.current[1]('two'))
    expect(result.current[0]).toBe('two')
    act(() => result.current[1]('removed'))
    expect(result.current[0]).toBe('two')
  } finally {
    read.mockRestore()
    write.mockRestore()
  }
})
