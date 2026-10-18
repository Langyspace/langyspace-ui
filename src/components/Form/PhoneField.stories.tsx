import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { styled } from 'styled-components'
import { PhoneField } from './PhoneField'

const countries = [
  {
    code: 'BR',
    name: 'Brasil',
    dialCode: '+55',
    flag: 'BR',
    placeholder: '00 00000 0000',
  },
  {
    code: 'IE',
    name: 'Irlanda',
    dialCode: '+353',
    flag: 'IE',
    placeholder: '00 000 0000',
  },
  {
    code: 'US',
    name: 'Estados Unidos',
    dialCode: '+1',
    flag: 'US',
    placeholder: '000 000 0000',
  },
]

const Frame = styled.div`
  width: 100%;
  max-width: 24rem;
`

const meta = {
  title: 'Form/PhoneField',
  component: PhoneField,
  tags: ['visual-review'],
  args: {
    countries,
    country: countries[0],
    label: 'Celular',
    onCountryChange: () => {},
  },
} satisfies Meta<typeof PhoneField>

export default meta

type Story = StoryObj<typeof meta>

function EditableField(args: React.ComponentProps<typeof PhoneField>) {
  const [country, setCountry] = useState(args.country)
  const [value, setValue] = useState('')

  return (
    <Frame>
      <PhoneField
        {...args}
        country={country}
        value={value}
        onCountryChange={setCountry}
        onChange={(event) => setValue(event.target.value)}
      />
    </Frame>
  )
}

export const Default: Story = { render: (args) => <EditableField {...args} /> }

export const Invalid: Story = {
  args: { errorMessage: 'Confira o celular para continuar.' },
  render: (args) => <EditableField {...args} />,
}

export const Disabled: Story = {
  args: { disabled: true, value: '00 00000 0000' },
  render: (args) => (
    <Frame>
      <PhoneField {...args} readOnly />
    </Frame>
  ),
}

export const International: Story = {
  args: { country: countries[1], value: '00 000 0000' },
  render: (args) => (
    <Frame>
      <PhoneField {...args} readOnly />
    </Frame>
  ),
}
