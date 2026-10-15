import { TextInput } from '../../atoms/TextInput'
import { Button } from '../../atoms/Button'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthForm } from '.'
const meta = {
  title: 'Molecules/AuthForm',
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
