import type { ComponentPropsWithRef, ReactNode } from 'react'

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type AvatarTone = 'neutral' | 'brand' | 'inverse'

export interface AvatarProps extends Omit<
  ComponentPropsWithRef<'span'>,
  'color'
> {
  imageUrl?: string
  /** Optional visible identity, styled together with the portrait instead of ad-hoc adjacent text. */
  name?: string
  namePosition?: 'below' | 'beside'
  description?: ReactNode
  /** Use the enclosing surface’s foreground for an identity inside a differently themed device. */
  textTone?: 'theme' | 'inherit'
  initials: string
  size?: AvatarSize
  tone?: AvatarTone
}
