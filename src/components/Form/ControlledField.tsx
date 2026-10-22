import { useController, useFormContext } from 'react-hook-form'
import type { FieldValues } from 'react-hook-form'
import { FieldRoot } from './FieldRoot'
import { TextInput } from './TextInput'
import type { ControlledFieldProps } from './ControlledField.types'

const toOptionalError = (error: unknown) =>
  typeof error === 'string' ? error : undefined

export function ControlledField<TFieldValues extends FieldValues = FieldValues>(
  props: ControlledFieldProps<TFieldValues>,
) {
  const { control } = useFormContext<TFieldValues>()
  const {
    controlId,
    hint,
    label,
    labelVariant,
    name,
    rules,
    error: externalError,
    ...inputProps
  } = props
  const {
    field,
    fieldState: { error: fieldError },
  } = useController({
    control,
    name,
    rules,
  })

  const fieldId = controlId ?? name
  const resolvedError = externalError ?? toOptionalError(fieldError?.message)

  return (
    <FieldRoot
      controlId={fieldId}
      error={resolvedError}
      hint={hint}
      label={label}
      labelVariant={labelVariant}
    >
      <TextInput
        id={fieldId}
        {...inputProps}
        {...field}
        aria-invalid={Boolean(resolvedError)}
      />
    </FieldRoot>
  )
}
