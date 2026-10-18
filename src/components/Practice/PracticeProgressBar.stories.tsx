import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { styled } from 'styled-components'
import { PracticeProgressBar } from './PracticeProgressBar'
import { Button } from '../Button/Button'

const Frame = styled.div`
  display: grid;
  gap: 0.5rem;
  width: 100%;
  max-width: 20rem;
`

const NarrowFrame = styled(Frame)`
  max-width: 8rem;
`

const meta = {
  title: 'Practice/PracticeProgressBar',
  component: PracticeProgressBar,
  tags: ['visual-review'],
  args: { value: 0.375 },
} satisfies Meta<typeof PracticeProgressBar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Frame>
      <span>3/8 cards · 38%</span>
      <PracticeProgressBar {...args} />
    </Frame>
  ),
}

export const Zero: Story = {
  args: { value: 0 },
  render: (args) => (
    <Frame>
      <span>Não iniciada</span>
      <PracticeProgressBar {...args} />
    </Frame>
  ),
}

export const Complete: Story = {
  args: { value: 1 },
  render: (args) => (
    <Frame>
      <span>Concluída</span>
      <PracticeProgressBar {...args} />
    </Frame>
  ),
}

export const Narrow: Story = {
  render: (args) => (
    <NarrowFrame>
      <span>Revisão de vocabulário cotidiano · 3/8 cards</span>
      <PracticeProgressBar {...args} />
    </NarrowFrame>
  ),
}

function ChangingProgress() {
  const [value, setValue] = useState(0)

  return (
    <Frame>
      <span>{Math.round(value * 100)}% concluído</span>
      <PracticeProgressBar value={value} />
      <Button onClick={() => setValue(value === 0 ? 1 : 0)}>
        Atualizar progresso
      </Button>
    </Frame>
  )
}

export const ChangingValue: Story = { render: () => <ChangingProgress /> }
