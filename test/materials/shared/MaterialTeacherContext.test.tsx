import { act, cleanup, render, screen } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import {
  MaterialTeacherProvider,
  useMaterialTeacher,
} from '../../../stories/materials/shared/MaterialTeacherContext'
import { resolveMaterialTeacherIdentity } from '../../../stories/materials/shared/materialTeacherIdentity'
import { HomeworkVoiceNote } from '../../../stories/materials/shared/HomeworkVoiceNote'
import { TrialIntroduction } from '../../../stories/materials/shared/TrialIntroduction'
import copy from '../../../stories/materials/TrialB1/TrialB1.content.json'

let hostFrame: HTMLIFrameElement | undefined
afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
  hostFrame?.remove()
  hostFrame = undefined
})

it.each([
  undefined,
  { name: '' },
  { name: 'Teacher' },
  { name: 'Your teacher' },
])(
  'keeps a neutral role for missing or legacy placeholder identity %j',
  (profile) => {
    expect(resolveMaterialTeacherIdentity(profile)).toMatchObject({
      name: 'Teacher',
      identified: false,
    })
  },
)

it('uses the same first name and photo across a live conversation and homework phone as the host changes', () => {
  vi.stubGlobal('__MATERIAL_SOURCE_COMMIT__', 'identity96')
  hostFrame = document.createElement('iframe')
  document.body.append(hostFrame)
  const host = hostFrame.contentWindow!
  vi.spyOn(window, 'parent', 'get').mockReturnValue(host)
  const { container } = render(
    <MaterialTeacherProvider materialKey="trial-b1">
      <TrialIntroduction prompts={copy.introduction.prompts} />
      <HomeworkVoiceNote
        prompt="Send me an introduction"
        duration="30 seconds"
        starters={['I’m…']}
        closing="Ask one question"
      />
    </MaterialTeacherProvider>,
  )
  const send = (teacher: { name: string; avatarUrl?: string }, source = host) =>
    act(() => {
      window.dispatchEvent(
        new MessageEvent('message', {
          source,
          origin: window.location.origin,
          data: {
            type: 'langy.material.teacher-context',
            version: 1,
            materialKey: 'trial-b1',
            sourceCommit: 'identity96',
            teacher,
          },
        }),
      )
    })
  expect(screen.getAllByText('Teacher', { exact: true })).toHaveLength(4)
  expect(screen.queryByText(/I’m Teacher/)).toBeNull()
  send({ name: 'Untrusted Name' }, window)
  expect(screen.queryByText('Untrusted')).toBeNull()
  send({
    name: ' Adriana Nogueira ',
    avatarUrl: 'https://example.org/adriana.jpg',
  })
  expect(screen.getAllByText('Adriana', { exact: true })).toHaveLength(4)
  expect(screen.queryByText('Adriana Nogueira', { exact: true })).toBeNull()
  expect(
    screen.getByText(
      `Hi, I’m Adriana. ${copy.introduction.prompts[0]!.question}`,
    ),
  ).toBeVisible()
  expect(
    container.querySelectorAll('img[src="https://example.org/adriana.jpg"]'),
  ).toHaveLength(4)
  send({ name: 'Margarida Martins Freitas Pereira' })
  expect(screen.getAllByText('Margarida', { exact: true })).toHaveLength(4)
  expect(
    container.querySelectorAll('img[src="https://example.org/adriana.jpg"]'),
  ).toHaveLength(0)
  send({ name: 'Your teacher' })
  expect(screen.getAllByText('Teacher', { exact: true })).toHaveLength(4)
  expect(screen.queryByText(/I’m Teacher/)).toBeNull()
})

it('receives only matching teacher timezone/country facts and clears them when the profile changes', () => {
  vi.stubGlobal('__MATERIAL_SOURCE_COMMIT__', 'facts114')
  hostFrame = document.createElement('iframe')
  document.body.append(hostFrame)
  const host = hostFrame.contentWindow!
  vi.spyOn(window, 'parent', 'get').mockReturnValue(host)
  function Profile() {
    const teacher = useMaterialTeacher()
    return (
      <output>
        {teacher.timeZone ?? 'device'} / {teacher.countryCode ?? 'unknown'}
      </output>
    )
  }
  render(
    <MaterialTeacherProvider materialKey="a1-01">
      <Profile />
    </MaterialTeacherProvider>,
  )
  const send = (teacher: object, source: Window = host) =>
    act(() => {
      window.dispatchEvent(
        new MessageEvent('message', {
          source,
          origin: window.location.origin,
          data: {
            type: 'langy.material.teacher-context',
            version: 1,
            materialKey: 'a1-01',
            sourceCommit: 'facts114',
            teacher,
          },
        }),
      )
    })
  send(
    { name: 'Adriana', timeZone: 'America/Sao_Paulo', countryCode: 'BR' },
    window,
  )
  expect(screen.getByText('device / unknown')).toBeVisible()
  send({ name: 'Adriana', timeZone: 'America/Sao_Paulo', countryCode: 'BR' })
  expect(screen.getByText('America/Sao_Paulo / BR')).toBeVisible()
  send({ name: 'Margarida' })
  expect(screen.getByText('device / unknown')).toBeVisible()
})
