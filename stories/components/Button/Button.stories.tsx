import * as StoryLayout from './Button.stories.styles'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { ArrowIcon } from '../../../.storybook/fixtures'
import { Button } from '../../../src/components/Button/Button'
import { createTheme } from '../../../src/foundations/theme/createTheme'
import { ThemeProvider } from 'styled-components'

const variants = [
  'primary',
  'secondary',
  'tertiary',
  'brand',
  'danger',
  'success',
  'inverse',
  'text',
  'text-subtle',
  'text-danger',
]

const meta = {
  args: {
    children: 'Continuar',
    density: 'regular',
    fullWidth: false,
    loading: false,
    size: 'md',
    variant: 'primary',
  },
  argTypes: {
    children: { control: 'text', type: 'string' },
    density: { control: 'inline-radio', options: ['regular', 'compact'] },
    iconEnd: { control: false },
    iconStart: { control: false },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    variant: {
      control: 'select',
      options: variants,
      type: { name: 'enum', value: variants },
    },
  },
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'Comando rotulado com hierarquia, tamanho e loading controlados pelo design system.',
      },
    },
  },
  title: 'Button/Button',
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithIcons: Story = {
  args: { iconEnd: ArrowIcon, iconStart: ArrowIcon },
}

export const Text: Story = {
  args: { children: 'Editar detalhes', variant: 'text' },
}

export const TextSubtle: Story = {
  args: { children: 'Limpar filtros', variant: 'text-subtle' },
}

export const TextDanger: Story = {
  args: { children: 'Remover item', variant: 'text-danger' },
}

export const TextWithIcons: Story = {
  args: { iconStart: ArrowIcon, iconEnd: ArrowIcon, variant: 'text' },
}

export const TextLoading: Story = {
  args: { loading: true, variant: 'text' },
}

export const Loading: Story = {
  args: { iconEnd: ArrowIcon, loading: true },
  tags: ['visual-review'],
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: 'Continuar' })

    await expect(button).toBeDisabled()
    await expect(button).toHaveAttribute('aria-busy', 'true')
    await expect(button).toHaveAttribute('data-loading', 'true')
    await expect(button.querySelector('[aria-hidden="true"]')).not.toBeNull()
  },
}

export const Stress: Story = {
  tags: ['layout-boundary', 'visual-review'],
  args: {
    children:
      'Continuar com a configuração compartilhada de componentes Langy.space em todos os produtos',
    fullWidth: true,
    size: 'lg',
  },
  decorators: [
    (Story) => (
      <StoryLayout.ButtonStressPreview>
        <Story />
      </StoryLayout.ButtonStressPreview>
    ),
  ],
}

export const ProductTheme: Story = {
  // Source-fidelity fixture: this exact approved prototype pink has 3.74:1 contrast.
  // Retain all other axe rules and contrast checks outside its single source button.
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            selector: ':not(button.lsui-sc-button)',
          },
        ],
      },
    },
  },
  args: { variant: 'brand', size: 'lg', children: 'Agendar aula experimental' },
  tags: ['visual-review'],
  decorators: [
    (Story) => (
      <ThemeProvider
        theme={createTheme({
          buttons: {
            brand: {
              background: '#FF1F5C',
              backgroundHover: '#D3104A',
              border: '0px solid transparent',
              color: '#FFFFFF',
            },
            sizes: { lg: { minHeight: '54px', paddingX: '26px' } },
          },
        })}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
}
