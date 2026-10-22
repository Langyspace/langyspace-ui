import type { Meta, StoryObj } from '@storybook/react-vite'
import { StoryStack } from '../../../.storybook/fixtures'
import { TextInput } from '../../../src/components/Form/TextInput'

const meta = {
  args: {
    'aria-label': 'Nome',
    defaultValue: 'Maria Alves',
    size: 'md',
  },
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
  },
  component: TextInput,
  title: 'Form/TextInput',
} satisfies Meta<typeof TextInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const NativeDate: Story = {
  tags: ['layout-boundary', 'visual-review'],
  render: () => (
    <StoryStack>
      <TextInput aria-label="Data vazia" type="date" size="lg" />
      <TextInput
        aria-label="Data preenchida"
        type="date"
        size="lg"
        defaultValue="1994-08-21"
      />
      <TextInput
        aria-label="Data inválida"
        type="date"
        size="lg"
        aria-invalid="true"
      />
      <TextInput
        aria-label="Data indisponível"
        type="date"
        size="lg"
        defaultValue="1994-08-21"
        disabled
      />
      <TextInput
        aria-label="Data média"
        type="date"
        size="md"
        defaultValue="1994-08-21"
      />
      <TextInput
        aria-label="Data pequena"
        type="date"
        size="sm"
        defaultValue="1994-08-21"
      />
    </StoryStack>
  ),
}

export const States: Story = {
  render: () => (
    <StoryStack>
      <TextInput aria-label="Nome vazio" placeholder="Digite o nome" />
      <TextInput
        aria-label="Nome inválido"
        aria-invalid="true"
        defaultValue="Valor inválido"
      />
      <TextInput aria-label="Nome indisponível" disabled />
    </StoryStack>
  ),
}

export const Stress: Story = {
  tags: ['layout-boundary', 'visual-review'],
  args: {
    defaultValue:
      'umvalorcontinuomuitolongosemespacos000000000000000000000000000000000',
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto', maxWidth: 280, width: '100%' }}>
        <Story />
      </div>
    ),
  ],
}
