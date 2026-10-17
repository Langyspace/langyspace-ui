import type { ComponentPropsWithRef } from 'react'

export interface ShadowingWordProps extends ComponentPropsWithRef<'span'> {
  state?: 'pending' | 'current' | 'spoken'
}
