import type { ComponentPropsWithRef } from 'react'

export type FileInputProps = Omit<
  ComponentPropsWithRef<'input'>,
  'type' | 'size' | 'value' | 'defaultValue' | 'children'
>
