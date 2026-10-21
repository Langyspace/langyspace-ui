import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  CardDetailsFields,
  type CardDetailsValue,
} from '../../../src/components/Form/CardDetailsFields'

const empty: CardDetailsValue = {
  holderName: '',
  number: '',
  expiry: '',
  securityCode: '',
  documentNumber: '',
  email: '',
  postalCode: '',
  addressNumber: '',
  phone: '',
}
const meta = {
  component: CardDetailsFields,
  title: 'Form/CardDetailsFields',
  args: { value: empty, onChange: () => {} },
  render: function Controlled(args) {
    const [value, setValue] = useState(args.value)
    return (
      <div style={{ maxWidth: 560, margin: 'auto' }}>
        <CardDetailsFields {...args} value={value} onChange={setValue} />
      </div>
    )
  },
} satisfies Meta<typeof CardDetailsFields>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
export const AddressFound: Story = {
  args: {
    postalCodeLookup: {
      status: 'found',
      address: 'Praça da Sé — Sé, São Paulo/SP',
    },
  },
}
export const LookingUp: Story = {
  args: { postalCodeLookup: { status: 'loading' } },
}
export const AddressMissing: Story = {
  args: { postalCodeLookup: { status: 'not_found' } },
}
export const LookupUnavailable: Story = {
  args: { postalCodeLookup: { status: 'error' }, onRetryPostalCode: () => {} },
}
export const Disabled: Story = { args: { disabled: true } }
export const LongAddress: Story = {
  tags: ['layout-boundary', 'visual-review'],
  args: {
    postalCodeLookup: {
      status: 'found',
      address:
        'Avenida com nome muito extenso de endereço encontrado e complemento descritivo — Bairro com nome extenso, Município de São Paulo/SP',
    },
  },
}
