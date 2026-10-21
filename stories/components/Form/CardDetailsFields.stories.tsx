import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  CardDetailsFields,
  type CardDetailsValue,
} from '../../../src/components/Form/CardDetailsFields'
import { PhoneField } from '../../../src/components/Form/PhoneField'

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
export const MobilePhone: Story = {
  args: { value: { ...empty, phone: '11999999999' } },
}
export const CountryCodePhone: Story = {
  args: { value: { ...empty, phone: '5511999999999' } },
}
export const ExistingCountryControl: Story = {
  render: function CountryControl(args) {
    const [value, setValue] = useState({ ...args.value, phone: '831234567' })
    const country = {
      code: 'IE',
      dialCode: '+353',
      flag: 'IE',
      name: 'Irlanda',
      placeholder: '83 123 4567',
    }
    return (
      <div style={{ maxWidth: 560, margin: 'auto' }}>
        <CardDetailsFields
          {...args}
          value={value}
          onChange={setValue}
          phoneField={
            <PhoneField
              label="Telefone do titular"
              countries={[country]}
              country={country}
              onCountryChange={() => {}}
              value={value.phone.replace(
                /^(\d{2})(\d{3})(\d{0,4})$/,
                '$1 $2 $3',
              )}
              onChange={(event) =>
                setValue((current) => ({
                  ...current,
                  phone: event.target.value.replace(/\D/g, ''),
                }))
              }
            />
          }
        />
      </div>
    )
  },
}
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
