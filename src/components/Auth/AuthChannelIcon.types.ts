import type { ComponentPropsWithRef } from 'react'

export interface AuthChannelIconProps extends ComponentPropsWithRef<'span'> {
  channel?: 'sms' | 'whatsapp'
}
