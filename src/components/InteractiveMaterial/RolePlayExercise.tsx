import { EMPTY_LIST } from './Material.constants'
import { useId } from 'react'
import * as Common from './Material.shared.styles'
import * as Styled from './RolePlayExercise.styles'
import type { RolePlayExerciseProps } from './RolePlayExercise.types'
export function RolePlayExercise({
  situation,
  image,
  imageFit = 'contain',
  roles = EMPTY_LIST,
  support = EMPTY_LIST,
  supportVisible = false,
  onSupportToggle,
  steps,
  completedIds,
  onStepToggle,
  tracker,
  density = 'regular',
  presentation = 'default',
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
    joiner: '/',
    ...labels,
  }
  const count = steps.filter((s) => completedIds.includes(s.id)).length
  const next = steps.find((s) => !completedIds.includes(s.id))?.id
  const guided = presentation === 'tracker'
  if (presentation === 'instructions')
    return (
      <Styled.Root as="section" {...props}>
        <Styled.Scene
          $plain
          $imageFit={imageFit}
          $compact={density === 'compact'}
        >
          {image ? <img src={image.src} alt={image.alt} /> : null}
          {situation ? <p>{situation}</p> : null}
          {roles.length ? (
            <Common.Row>
              {roles.map((role) => (
                <Common.Chip key={role}>{role}</Common.Chip>
              ))}
            </Common.Row>
          ) : null}
          {children}
        </Styled.Scene>
        <Common.Stack>
          {tracker}
          {steps.length ? (
            <Styled.Instructions>
              {steps.map((step, i) => (
                <li key={step.id}>
                  <Common.Number aria-hidden="true">{i + 1}</Common.Number>
                  <span>{step.label}</span>
                </li>
              ))}
            </Styled.Instructions>
          ) : null}
          {support.length ? (
            <Common.Hint>{support.join(' · ')}</Common.Hint>
          ) : null}
        </Common.Stack>
      </Styled.Root>
    )
  const Header = guided ? Styled.TrackerHeader : Common.Row
  const Support = guided ? Common.Row : Common.Stack
  const supportControl =
    support.length && onSupportToggle ? (
      <Common.Action
        type="button"
        variant="secondary"
        size={guided ? 'sm' : undefined}
        aria-label={supportVisible ? text.hide : text.show}
        aria-controls={id}
        aria-expanded={supportVisible}
        onClick={onSupportToggle}
      >
        {supportVisible ? text.hide : text.show}
      </Common.Action>
    ) : null
  const supportContent = supportVisible ? (
    <Support id={id}>
      {support.map((line) => (
        <Common.Chip key={line}>{line}</Common.Chip>
      ))}
    </Support>
  ) : null
  return (
    <Styled.Root as="section" {...props}>
      <Styled.Scene
        $plain={guided}
        $imageFit={imageFit}
        $compact={density === 'compact'}
      >
        {image ? <img src={image.src} alt={image.alt} /> : null}
        {situation ? <p>{situation}</p> : null}
        <Common.Row>
          {roles.map((role) => (
            <Common.Chip key={role}>{role}</Common.Chip>
          ))}
        </Common.Row>
        {!guided ? supportControl : null}
        {!guided ? supportContent : null}
        {children}
      </Styled.Scene>
      <Common.Stack>
        {tracker}
        <Header>
          {guided ? (
            <Common.Hint>{text.steps}</Common.Hint>
          ) : (
            <Common.Tag>{text.steps}</Common.Tag>
          )}
          <Common.Hint role="status">
            {count} {text.joiner} {steps.length} {text.progress}
          </Common.Hint>
          {guided ? supportControl : null}
        </Header>
        {steps.map((step, i) => (
          <Styled.Step
            $compact={density === 'compact'}
            type="button"
            key={step.id}
            $done={completedIds.includes(step.id)}
            $tracker={guided}
            $current={guided && next === step.id}
            aria-current={guided && next === step.id ? 'step' : undefined}
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
        {guided ? supportContent : null}
      </Common.Stack>
    </Styled.Root>
  )
}
