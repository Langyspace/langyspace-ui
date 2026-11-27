import { fireEvent, render, screen } from '@testing-library/react'
import { renderToString } from 'react-dom/server'
import { expect, it, vi } from 'vitest'
import { DeviceGallery } from '../../../src/components/Device/DeviceGallery'

it('keeps consumer content intact and reports the selected activity so media can stop', () => {
  const changed = vi.fn()
  render(
    <DeviceGallery
      onActiveIdChange={changed}
      items={[
        { id: 'one', label: 'Cards', content: <p>One exercise</p> },
        { id: 'two', label: 'Shadowing', content: <p>Second exercise</p> },
        { id: 'three', label: 'Message', content: <p>Third exercise</p> },
      ]}
    />,
  )
  fireEvent.click(screen.getByRole('button', { name: 'Message', hidden: true }))
  expect(changed).toHaveBeenCalledWith('three')
  expect(screen.getByText('Third exercise')).toBeInTheDocument()
  expect(screen.queryByTitle('Application preview')).not.toBeInTheDocument()
})
it('supports server rendering without browser globals', () => {
  expect(
    renderToString(
      <DeviceGallery
        items={[
          { id: 'one', label: 'One', content: 'First' },
          { id: 'two', label: 'Two', content: 'Second' },
        ]}
      />,
    ),
  ).toContain('lsui-sc-device-gallery')
})
