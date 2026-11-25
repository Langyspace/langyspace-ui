import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'
import { VocabularyControls } from '../../../src/components/Exercise/VocabularyControls'
import { SimulationIcon } from '../../../src/components/InteractiveMaterial/SimulationIcon'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import { InterviewSimulation } from '../../../src/components/InteractiveMaterial/InterviewSimulation'
import { MaterialLearningDialogue } from '../shared/MaterialLearningDialogue'
import { useMaterialLearner } from '../shared/MaterialLearnerContext'
import { useMaterialTeacher } from '../shared/MaterialTeacherContext'
import { usePracticePlayback } from '../shared/usePracticePlayback'
import { characterPortrait } from '../shared/characterPortraits'
import { devRecordings } from './DevFirstDay.recordings'
import {
  RegistrationDemoScreen,
  PasswordResetDemoScreen,
  AuthApiScreen,
  LoginDemoScreen,
} from './DevWork'
import source from './DevFirstDay.content.json'
import cover from './assets/cover95.png'
import owen from '../Practice/assets/characters/owen-harris.webp'
import priya from '../Practice/assets/characters/priya-nair.webp'
import niamh from '../Practice/assets/characters/niamh-murphy.webp'
import ruby from '../Practice/assets/characters/ruby-bennett.webp'
import type {
  DevMeetingMode,
  DevMeetingTurn,
  DevOralTurn,
} from './DevGuidedCall.types'

const portraits: Readonly<Record<string, string>> = {
  kim: characterPortrait('Kim')!,
  owen,
  priya,
  niamh,
  ruby,
}
function DevOralPractice({ turns }: { turns: readonly DevOralTurn[] }) {
  const [step, setStep] = useState(0)
  const teacher = useMaterialTeacher()
  const teacherName =
    teacher.name === 'Your teacher'
      ? 'Teacher'
      : teacher.name.trim().split(/\s+/u)[0] || 'Teacher'
  const totalSteps = turns.length * 2
  const supportControl = (
    <VocabularyControls
      interaction="progressive"
      density="compact"
      showInitial={step > 0}
      onToggleInitial={() => setStep((value) => (value + 1) % (totalSteps + 1))}
      labels={{
        hint:
          step === totalSteps
            ? 'Hide speaking support'
            : step % 2 === 0
              ? 'Show speaking hint'
              : 'Show example answer',
      }}
    />
  )
  return (
    <MaterialLearningDialogue
      density="compact"
      footerAction={supportControl}
      lines={turns.flatMap((turn, index) => {
        const level = Math.min(2, Math.max(0, step - index * 2))
        return [
          ...(turn.question
            ? [
                {
                  id: turn.id + '-question',
                  speaker: teacherName,
                  avatarUrl: teacher.avatarUrl,
                  side: 'start' as const,
                  content: turn.question,
                },
              ]
            : []),
          {
            id: turn.id + '-reply',
            speaker: 'You',
            participant: 'learner' as const,
            side: 'end' as const,
            content:
              level === 2 ? turn.example : level === 1 ? turn.hint : turn.cue,
          },
        ]
      })}
    />
  )
}
export function DevOralReply({
  cue,
  hint,
  example,
  opening,
}: {
  cue: string
  hint: string
  example: string
  opening?: string
}) {
  return (
    <DevOralPractice
      turns={[{ id: 'reply', question: opening, cue, hint, example }]}
    />
  )
}
export function DevDailyConversation() {
  return <DevOralPractice turns={source.daily} />
}
function LearnerCaption({ name, text }: { name: string; text: string }) {
  return (
    <>
      <b>{name}</b>
      <Common.Paragraph>{text}</Common.Paragraph>
    </>
  )
}
function RecordedMeeting({
  active,
  mode,
}: {
  active: boolean
  mode: DevMeetingMode
}) {
  const [index, setIndex] = useState(0)
  const [started, setStarted] = useState(false)
  const [finished, setFinished] = useState(false)
  const [supportStep, setSupportStep] = useState(0)
  const learner = useMaterialLearner()
  const audio = usePracticePlayback(active, devRecordings)
  const turns: readonly DevMeetingTurn[] =
    mode === 'intro'
      ? source.call.map((turn) => ({ ...turn, speakerId: 'kim' }))
      : mode === 'planning'
        ? source.planningCall
        : source.reviewCall
  const turn = turns[index]!
  const person = source.team.find((member) => member.id === turn.speakerId)!
  const reply = finished && turn.cue
  const learnerText =
    supportStep === 2 ? turn.example : supportStep === 1 ? turn.hint : turn.cue
  useEffect(() => {
    if (!active) {
      setIndex(0)
      setStarted(false)
      setFinished(false)
      setSupportStep(0)
    }
  }, [active])
  const play = (next: number) => {
    const selected = turns[next]
    if (!selected) return
    setIndex(next)
    setStarted(true)
    setSupportStep(0)
    setFinished(false)
    audio.play(selected.id, selected.text, 1, () => setFinished(true))
  }
  const state = audio.error
    ? 'error'
    : audio.paused
      ? 'paused'
      : audio.playingId
        ? 'playing'
        : 'idle'
  const roster =
    mode === 'intro'
      ? undefined
      : [
          ...source.team.map((member) => ({
            id: member.id,
            name: member.name,
            imageUrl: portraits[member.id],
          })),
          {
            id: 'learner',
            name: learner?.firstName ?? 'You',
            imageUrl: learner?.avatarUrl,
          },
        ]
  return (
    <InterviewSimulation
      presentation="guided-call"
      title={
        mode === 'intro'
          ? 'First team call'
          : mode === 'planning'
            ? 'Team planning'
            : 'Team review'
      }
      interviewer={{
        name: person.name,
        imageUrl: mode === 'intro' ? cover : portraits[person.id]!,
      }}
      learnerName={learner?.firstName ?? 'You'}
      learnerAvatarUrl={learner?.avatarUrl}
      participants={roster}
      activeParticipantId={reply ? 'learner' : turn.speakerId}
      sharedContent={
        mode === 'review' ? (
          <ThemeProvider theme={theme}>
            {index === 0 ? (
              <RegistrationDemoScreen />
            ) : index === 1 ? (
              <PasswordResetDemoScreen />
            ) : index === 2 ? (
              <AuthApiScreen />
            ) : (
              <LoginDemoScreen />
            )}
          </ThemeProvider>
        ) : undefined
      }
      sharedContentLabel={
        mode === 'review'
          ? index === 0
            ? 'Owen is presenting · Registration'
            : index === 1
              ? 'Ruby is presenting · Password reset'
              : index === 2
                ? 'Priya is presenting · Backend'
                : `${learner?.firstName ?? 'You'} ${learner?.firstName ? 'is' : 'are'} presenting · Login`
          : undefined
      }
      caption={
        started ? (
          <>
            <b>{person.name}</b>
            <br />
            {turn.text}
          </>
        ) : undefined
      }
      learnerCaption={
        reply ? (
          <LearnerCaption
            key={turn.id}
            name={learner?.firstName ?? 'You'}
            text={learnerText ?? turn.cue!}
          />
        ) : undefined
      }
      turnIndex={index}
      turnCount={turns.length}
      onNext={() => play(index + 1)}
      onPrevious={() => play(index - 1)}
      onReplay={() => play(index)}
      playing={state === 'playing'}
      playback={{
        state,
        onToggle: () => (audio.playingId ? audio.togglePause() : play(index)),
      }}
      status={audio.error || undefined}
      supportAction={{
        label:
          supportStep === 0
            ? 'Show speaking hint'
            : supportStep === 1
              ? 'Show example answer'
              : 'Hide speaking support',
        icon: <SimulationIcon name="hint" />,
        pressed: supportStep > 0,
        disabled: !reply,
        onClick: () => setSupportStep((step) => (step + 1) % 3),
      }}
      labels={{
        previous: 'Previous part',
        next: 'Next part',
        play: 'Play current part',
        pause: 'Pause current part',
        resume: 'Resume current part',
      }}
    />
  )
}
export function DevGuidedCall({ active }: { active: boolean }) {
  return <RecordedMeeting active={active} mode="intro" />
}
export function DevTeamMeeting({
  active,
  mode,
}: {
  active: boolean
  mode: 'planning' | 'review'
}) {
  return <RecordedMeeting active={active} mode={mode} />
}
