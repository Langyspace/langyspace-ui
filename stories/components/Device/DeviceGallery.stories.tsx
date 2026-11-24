import type { Meta, StoryObj } from '@storybook/react-vite'
import { DeviceGallery } from '../../../src/components/Device/DeviceGallery'
import { MobileFrame } from '../../../src/components/Device/MobileFrame'

const meta = {
  component: DeviceGallery,
  title: 'Device/DeviceGallery',
  args: {
    items: [
      {
        id: 'cards',
        label: 'Flashcards',
        content: (
          <MobileFrame screenMode="application" title="Flashcards">
            <p>Daily routine</p>
          </MobileFrame>
        ),
      },
      {
        id: 'audio',
        label: 'Shadowing',
        content: (
          <MobileFrame screenMode="application" title="Shadowing">
            <p>Listen and repeat</p>
          </MobileFrame>
        ),
      },
      {
        id: 'voice',
        label: 'Voice note',
        content: (
          <MobileFrame screenMode="application" title="Voice note">
            <p>Tell your teacher about your day</p>
          </MobileFrame>
        ),
      },
    ],
  },
} satisfies Meta<typeof DeviceGallery>
export default meta
type Story = StoryObj<typeof meta>
export const ThreeDevices: Story = { tags: ['visual-review'] }
export const Narrow: Story = {
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  tags: ['visual-review'],
}
