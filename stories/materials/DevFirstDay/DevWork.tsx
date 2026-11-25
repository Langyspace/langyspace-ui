import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'
import { TaskBoard } from '../../../src/components/TaskBoard/TaskBoard'
import { ExercisePanel } from '../../../src/components/Exercise/ExercisePanel'
import type { ExercisePanelProps } from '../../../src/components/Exercise/ExercisePanel.types'
import { KeyValueList } from '../../../src/components/Details/KeyValueList'
import { StatusChip } from '../../../src/components/StatusChip/StatusChip'
import { Button } from '../../../src/components/Button/Button'
import { SegmentedControl } from '../../../src/components/SegmentedControl/SegmentedControl'
import { TextInput } from '../../../src/components/Form/TextInput'
import { FieldRoot } from '../../../src/components/Form/FieldRoot'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'

import { useMaterialLearner } from '../shared/MaterialLearnerContext'
import priyaPortrait from '../Practice/assets/characters/priya-nair.webp'
import accessDenied from './assets/access-padlock95.png'

function WorkMonitor(
  props: Pick<
    ExercisePanelProps,
    'title' | 'children' | 'media' | 'screenTextAlign'
  >,
) {
  return (
    <ThemeProvider theme={theme}>
      <ExercisePanel {...props} variant="monitor" screenAspectRatio={4 / 3} />
    </ThemeProvider>
  )
}

export function RepositoryScreen() {
  return (
    <WorkMonitor
      title="customer-portal"
      screenTextAlign="center"
      media={
        <img
          src={accessDenied}
          alt="A closed pink padlock represents blocked project access"
        />
      }
    >
      <Common.Stack>
        <Common.Heading>Access denied</Common.Heading>
        <Common.Paragraph>Work email: dev@example.com</Common.Paragraph>
      </Common.Stack>
    </WorkMonitor>
  )
}

/** All fields are prepared visual evidence. The learner participates by speaking over screen share. */
function DemoField({
  label,
  value,
  password = false,
  compact = false,
}: {
  label: string
  value: string
  password?: boolean
  compact?: boolean
}) {
  return (
    <FieldRoot label={label}>
      <TextInput
        size={compact ? 'sm' : 'md'}
        value={value}
        readOnly
        type={password ? 'password' : 'text'}
        autoComplete="off"
      />
    </FieldRoot>
  )
}
export function AccountScreen({
  kind,
  teacherControls = false,
  compact = false,
}: {
  kind: 'login' | 'registration' | 'reset'
  teacherControls?: boolean
  compact?: boolean
}) {
  const [phase, setPhase] = useState('form')
  const [resetView, setResetView] = useState(false)
  const screenKind = resetView ? 'reset' : kind
  const customerEmail = compact ? 'test@portal.dev' : 'customer@example.com'
  const Actions = compact ? Common.Row : Common.Stack
  const fields = (
    <>
      {screenKind === 'registration' ? (
        <DemoField label="Name" value="Test customer" compact={compact} />
      ) : null}
      <DemoField label="Email" value={customerEmail} compact={compact} />
      {screenKind !== 'reset' ? (
        <DemoField
          label="Password"
          value="example-password"
          password
          compact={compact}
        />
      ) : null}
    </>
  )
  return (
    <Common.Stack>
      {resetView ? (
        <Button
          variant="text"
          size="sm"
          onClick={() => {
            setResetView(false)
            setPhase('form')
          }}
        >
          Back to sign in
        </Button>
      ) : teacherControls ? (
        <SegmentedControl
          aria-label="Show a login scenario"
          surface={compact ? 'light' : 'inverse'}
          value={phase}
          onValueChange={setPhase}
          options={[
            { value: 'form', label: 'Login form' },
            { value: 'error', label: 'Wrong password' },
            { value: 'done', label: 'Signed in' },
          ]}
        />
      ) : null}
      <Common.Heading>
        {screenKind === 'registration'
          ? 'Create your account'
          : screenKind === 'reset'
            ? 'Reset your password'
            : 'Sign in to your account'}
      </Common.Heading>
      {phase === 'done' ? (
        <Common.Stack>
          <StatusChip tone="success" indicator role="status">
            {screenKind === 'registration'
              ? 'Account created'
              : screenKind === 'reset'
                ? 'Check your inbox'
                : 'You’re signed in'}
          </StatusChip>
          <Common.Paragraph>
            {screenKind === 'reset'
              ? `We sent a password reset link to ${customerEmail}`
              : screenKind === 'registration'
                ? 'Your account is ready. You can now sign in'
                : 'Welcome to the customer portal'}
          </Common.Paragraph>
          <Button variant="text" size="sm" onClick={() => setPhase('form')}>
            Show the form again
          </Button>
        </Common.Stack>
      ) : (
        <>
          {compact ? (
            <Common.Columns>{fields}</Common.Columns>
          ) : (
            <Common.Stack>{fields}</Common.Stack>
          )}
          {phase === 'error' ? (
            <StatusChip tone="danger" role="status">
              Email or password is incorrect
            </StatusChip>
          ) : null}
          <Actions>
            <Button size="sm" onClick={() => setPhase('done')}>
              {screenKind === 'registration'
                ? 'Create account'
                : screenKind === 'reset'
                  ? 'Send reset link'
                  : 'Sign in'}
            </Button>
            {screenKind === 'login' ? (
              <Button
                variant="text"
                size="sm"
                onClick={() => {
                  setResetView(true)
                  setPhase('form')
                }}
              >
                Forgot password?
              </Button>
            ) : null}
          </Actions>
        </>
      )}
    </Common.Stack>
  )
}
export function LoginBrief() {
  return (
    <Common.Stack>
      <Common.Row>
        <Common.Tag>Your task · Login screen</Common.Tag>
        <StatusChip tone="warning">First version: Friday</StatusChip>
      </Common.Row>
      <AccountScreen kind="login" />
    </Common.Stack>
  )
}
export function DailyBoard() {
  const learner = useMaterialLearner()
  const you = {
    name: learner?.firstName ?? 'You',
    imageUrl: learner?.avatarUrl,
  }
  return (
    <WorkMonitor title="Your first-day board">
      <TaskBoard
        aria-label="Your Login task board"
        columns={[
          {
            id: 'todo',
            title: 'To do',
            cards: [
              {
                id: 'connect',
                title: 'Connect Login to the API',
                assignee: you,
              },
            ],
          },
          {
            id: 'waiting',
            title: 'Waiting',
            cards: [
              {
                id: 'api',
                title: 'Test API address',
                assignee: { name: 'Priya', imageUrl: priyaPortrait },
              },
            ],
          },
          {
            id: 'done',
            title: 'Done',
            cards: [
              { id: 'layout', title: 'Login screen layout', assignee: you },
            ],
          },
        ]}
      />
    </WorkMonitor>
  )
}
export function RegistrationDemoScreen() {
  return <AccountScreen kind="registration" compact />
}
export function PasswordResetDemoScreen() {
  return <AccountScreen kind="reset" compact />
}
export function AuthApiScreen() {
  return (
    <Common.Stack>
      <Common.Heading>Account API</Common.Heading>
      <KeyValueList
        tone="material"
        density="compact"
        layout="stacked"
        items={[
          {
            id: 'register',
            label: 'Create account',
            value: 'Name + email + password → new account',
          },
          {
            id: 'login',
            label: 'Sign in',
            value: 'Email + password → session or error',
          },
          { id: 'reset', label: 'Reset password', value: 'Email → reset link' },
        ]}
      />
      <StatusChip tone="success" indicator>
        Ready for the frontend
      </StatusChip>
    </Common.Stack>
  )
}
export function LoginDemoScreen() {
  return <AccountScreen kind="login" teacherControls compact />
}
export function TransferBoard() {
  const learner = useMaterialLearner()
  return (
    <WorkMonitor title="Friday demo">
      <TaskBoard
        aria-label="Friday demo readiness"
        columns={[
          {
            id: 'ready',
            title: 'Ready',
            cards: [
              {
                id: 'login',
                title: 'Login screen',
                assignee: {
                  name: learner?.firstName ?? 'You',
                  imageUrl: learner?.avatarUrl,
                },
              },
            ],
          },
          {
            id: 'blocked',
            title: 'Blocked',
            cards: [
              {
                id: 'account',
                title: 'Activate test account',
                assignee: { name: 'Priya', imageUrl: priyaPortrait },
              },
            ],
          },
        ]}
      />
    </WorkMonitor>
  )
}
