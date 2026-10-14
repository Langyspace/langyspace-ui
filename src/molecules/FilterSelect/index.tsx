import { CompoundControl } from '../CompoundControl'
import { useFieldControlAttributes } from '../../internal/FieldControlContext'
import * as Styled from './styles'
import type { FilterSelectProps } from './types'
export function FilterSelect({
  className,
  children,
  disabled = false,
  size = 'md',
  ...props
}: FilterSelectProps) {
  const field = useFieldControlAttributes(props)
  const invalid =
    field['aria-invalid'] === true || field['aria-invalid'] === 'true'
  return (
    <CompoundControl
      className={className}
      disabled={disabled}
      size={size}
      invalid={invalid}
      trailing={
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      }
    >
      <Styled.Root
        {...props}
        {...field}
        disabled={disabled}
        $controlSize={size}
      >
        {children}
      </Styled.Root>
    </CompoundControl>
  )
}
export type { FilterSelectProps } from './types'
