import type { ComponentPropsWithRef } from 'react'

export interface ShadowingActivePhraseProps extends ComponentPropsWithRef<'div'> {
  density?: 'regular' | 'compact'
  tone?: 'default' | 'material'
  /** The consumer resolves the active phrase's speaker; legacy phrases can omit identity. */
  speaker?: { name: string; imageUrl?: string; accentLabel?: string }
}
