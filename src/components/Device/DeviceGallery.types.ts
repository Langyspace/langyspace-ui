import type { ComponentPropsWithRef, ReactNode } from 'react'
export interface DeviceGalleryItem {
  id: string
  label: string
  content: ReactNode
}
export interface DeviceGalleryProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'children'
> {
  items:
    | readonly [DeviceGalleryItem, DeviceGalleryItem]
    | readonly [DeviceGalleryItem, DeviceGalleryItem, DeviceGalleryItem]
  selectionLabel?: string
  onActiveIdChange?: (id: string) => void
}
