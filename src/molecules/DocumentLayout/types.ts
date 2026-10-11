import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export interface DocumentSection {
  title: string
  body: readonly string[]
}

export interface DocumentLayoutProps extends Omit<
  ComponentPropsWithoutRef<'div'>,
  'children' | 'title'
> {
  title: string
  eyebrow?: string
  meta?: ReactNode
  summary?: readonly string[]
  intro?: readonly string[]
  sections: readonly DocumentSection[]
}
