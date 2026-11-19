import { useId, useRef, useState } from 'react'
import type { LessonHintProps } from './LessonHint.types'
import * as S from './LessonHint.styles'

/** Optional scaffolding with one explicit action; the approved exercise owns its payload. */
export function LessonHint({
  children,
  context,
  label = 'Hint',
  hideLabel = 'Hide hint',
  onKeyDown,
  ...props
}: LessonHintProps) {
  const [open, setOpen] = useState(false)
  const id = useId()
  const trigger = useRef<HTMLButtonElement>(null)
  const action = open ? hideLabel : label
  return (
    <S.Root
      {...props}
      data-lesson-hint="true"
      onKeyDown={(event) => {
        onKeyDown?.(event)
        if (!event.defaultPrevented && event.key === 'Escape' && open) {
          event.preventDefault()
          event.stopPropagation()
          setOpen(false)
          trigger.current?.focus({ preventScroll: true })
        }
      }}
    >
      <S.Trigger
        ref={trigger}
        id={`${id}-trigger`}
        type="button"
        variant="tertiary"
        size="sm"
        aria-label={
          context && !action.includes(context)
            ? `${action}: ${context}`
            : action
        }
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={() => setOpen((value) => !value)}
      >
        {action}
      </S.Trigger>
      <S.Panel
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        hidden={!open}
      >
        {children}
      </S.Panel>
    </S.Root>
  )
}
