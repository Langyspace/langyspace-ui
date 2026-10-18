import type { Meta, StoryObj } from '@storybook/react-vite'
import { styled } from 'styled-components'
import { PracticeCardSkeletonBody } from '../../../src/components/Practice/PracticeCardSkeletonBody'

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 20rem;
  border: 1px solid #ececea;
  border-radius: 0.875rem;
`

const NarrowFrame = styled(Frame)`
  max-width: 8rem;
`

const TallFrame = styled(Frame)`
  height: 12rem;
`

const meta = {
  title: 'Practice/PracticeCardSkeletonBody',
  component: PracticeCardSkeletonBody,
  tags: ['visual-review'],
} satisfies Meta<typeof PracticeCardSkeletonBody>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Frame>
      <PracticeCardSkeletonBody />
    </Frame>
  ),
}

export const Narrow: Story = {
  render: () => (
    <NarrowFrame>
      <PracticeCardSkeletonBody />
    </NarrowFrame>
  ),
}

export const ReservedSpace: Story = {
  render: () => (
    <TallFrame>
      <PracticeCardSkeletonBody />
    </TallFrame>
  ),
}
