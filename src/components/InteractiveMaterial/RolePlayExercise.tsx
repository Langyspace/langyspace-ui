import { EMPTY_LIST } from './Material.constants'
import { useId } from 'react'
import * as Common from './Material.shared.styles'
import * as Styled from './RolePlayExercise.styles'
import type { RolePlayExerciseProps } from './RolePlayExercise.types'
export function RolePlayExercise({
  situation,
  image,
  roles = EMPTY_LIST,
  support = EMPTY_LIST,
  supportVisible = false,
  onSupportToggle,
  steps,
  completedIds,
  onStepToggle,
  labels,
  children,
  ...props
}: RolePlayExerciseProps) {
  const id = useId()
  const text = {
    show: 'Mostrar apoio',
    hide: 'Esconder apoio',
    steps: 'Passo a passo · a professora marca',
    progress: 'concluídos',
    ...labels,
  }
  const count = steps.filter((s) => completedIds.includes(s.id)).length
  return (
    <Styled.Root as="section" {...props}>
      <Styled.Scene>
        {image ? <img src={image.src} alt={image.alt} /> : null}
        <p>{situation}</p>
        <Common.Row>
          {roles.map((role) => (
            <Common.Chip key={role}>{role}</Common.Chip>
          ))}
        </Common.Row>
        {support.length && onSupportToggle ? (
          <Common.Action
            type="button"
            variant="secondary"
            aria-controls={id}
            aria-expanded={supportVisible}
            onClick={onSupportToggle}
          >
            {supportVisible ? text.hide : text.show}
          </Common.Action>
        ) : null}
        {supportVisible ? (
          <Common.Stack id={id}>
            {support.map((line) => (
              <Common.Chip key={line}>{line}</Common.Chip>
            ))}
          </Common.Stack>
        ) : null}
        {children}
      </Styled.Scene>
      <Common.Stack>
        <Common.Row>
          <Common.Tag>{text.steps}</Common.Tag>
          <Common.Hint role="status">
            {count} / {steps.length} {text.progress}
          </Common.Hint>
        </Common.Row>
        {steps.map((step, i) => (
          <Styled.Step
            type="button"
            key={step.id}
            $done={completedIds.includes(step.id)}
            aria-pressed={completedIds.includes(step.id)}
            onClick={() => {
              onStepToggle(step.id)
            }}
          >
            <Common.Number aria-hidden="true">
              {completedIds.includes(step.id) ? '✓' : i + 1}
            </Common.Number>
            {step.label}
          </Styled.Step>
        ))}
      </Common.Stack>
    </Styled.Root>
  )
}
