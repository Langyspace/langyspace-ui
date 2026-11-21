import type { ComponentPropsWithRef, ReactNode } from 'react'
import type { SlideAudioActionProps } from './SlideAudioAction.types'

export interface SlidePageProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'title'
> {
  title: ReactNode
  /** Recorded dialogue playback immediately beside a string title. */
  titleAudio?: SlideAudioActionProps
  eyebrow?: ReactNode
  instruction?: ReactNode
  tools?: ReactNode
  /** Comprehension beside the dialogue; stacks below it in narrow containers. */
  questions?: ReactNode
  questionsTitle?: ReactNode
  /** Optional introductory content before the exercise heading. */
  lead?: ReactNode
  /** Approved lesson artwork; split layout places review content alongside it. */
  cover?: { src: string; alt: string }
  /** Keep the visual and reading order together; defaults to artwork before the heading. */
  coverPlacement?: 'before-heading' | 'after-heading'
  /** Split introductions keep the lesson title and heading beside the exercise. Stacks on narrow screens. */
  layout?: 'stacked' | 'split'
  /** The reference uses 600px for focused tasks, 760px for standard content and 1040px for wider exercises. */
  width?:
    | 'focused'
    | 'standard'
    | 'wide'
    | 'reading'
    | 'exercise'
    | 'conversation'
    | 'expanded'
    /** Single presentation media: header and body share its fitted width. Split/questions layouts retain their total composition width. */
    | { mediaAspectRatio: number }
  density?: 'regular' | 'compact' | 'dense'
  tone?: 'default' | 'inverse'
}
