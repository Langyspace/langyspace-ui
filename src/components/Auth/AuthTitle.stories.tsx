import type { Meta, StoryObj } from '@storybook/react-vite'
import { NarrowSurface } from '../../../.storybook/fixtures'
import { AuthAccent } from './AuthAccent'
import { AuthDescription } from './AuthDescription'
import { AuthTitle } from './AuthTitle'

const meta = {
  args: {
    children: (
      <>
        Bom te ver de <AuthAccent>volta.</AuthAccent>
      </>
    ),
  },
  component: AuthTitle,
  tags: ['visual-review'],
  title: 'Auth/AuthTitle',
} satisfies Meta<typeof AuthTitle>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const StudentToken: Story = {
  render: () => (
    <NarrowSurface>
      <AuthTitle>
        Confira seu <AuthAccent>celular.</AuthAccent>
      </AuthTitle>
      <AuthDescription>
        Enviamos um código para +353 87 123 4567 por SMS ou WhatsApp. O que
        chegar primeiro vale.
      </AuthDescription>
    </NarrowSurface>
  ),
}

export const TeacherToken: Story = {
  render: () => (
    <NarrowSurface>
      <AuthTitle>
        Confirme seu <AuthAccent>número.</AuthAccent>
      </AuthTitle>
      <AuthDescription>
        Enviamos um código para +353 87 123 4567 por SMS ou WhatsApp. O que
        chegar primeiro vale.
      </AuthDescription>
    </NarrowSurface>
  ),
}

export const NarrowLongContent: Story = {
  tags: ['layout-boundary'],
  decorators: [
    (Story) => (
      <NarrowSurface>
        <Story />
      </NarrowSurface>
    ),
  ],
  args: {
    children: (
      <>
        Confira as instruções para recuperar seu{' '}
        <AuthAccent>acesso à plataforma.</AuthAccent>
      </>
    ),
  },
}
