import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface MobileFrameProps extends Omit<
  ComponentPropsWithRef<'section'>,
  'title'
> {
  /** App/screen heading supplied by the consumer; the frame does not invent app actions. */
  title?: ReactNode
  /** Application retains a scaled mobile document; application-responsive uses the real screen size. */
  screenMode?: 'content' | 'application' | 'application-responsive'
  /** A prepared physical-phone illustration; native content is mapped into its blank screen.
   * Coordinates are percentages of the full, uncropped source image. */
  illustration?: {
    src: string
    alt: string
    aspectRatio: number
    screen: { x: number; y: number; width: number; height: number }
  }
}
