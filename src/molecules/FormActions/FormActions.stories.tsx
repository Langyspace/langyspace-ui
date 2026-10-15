import { Button } from '../../atoms/Button'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { FormActions } from '.'
const meta = {
  title: 'Molecules/FormActions',
  component: FormActions,
  tags: ['visual-review'],
  args: {
    children: (
      <>
        <Button type="button">Cancelar</Button>
        <Button type="button">Enviar</Button>
      </>
    ),
  },
} satisfies Meta<typeof FormActions>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
