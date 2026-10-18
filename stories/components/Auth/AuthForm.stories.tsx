import { TextInput } from '../../../src/components/Form/TextInput'
import { Button } from '../../../src/components/Button/Button'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthForm } from '../../../src/components/Auth/AuthForm'

const meta = {
  title: 'Auth/AuthForm',
  component: AuthForm,
  tags: ['visual-review'],
  args: {
    children: (
      <>
        <label>
          Celular
          <TextInput aria-label="Celular" />
        </label>
        <Button type="submit">Enviar</Button>
      </>
    ),
  },
} satisfies Meta<typeof AuthForm>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
