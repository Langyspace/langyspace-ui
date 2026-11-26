import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { InterviewSimulation } from '../../../src/components/InteractiveMaterial/InterviewSimulation'
import { SimulationIcon } from '../../../src/components/InteractiveMaterial/SimulationIcon'
import { theme } from '../../../src/foundations/theme/theme'
import { LoginDemoScreen } from '../DevFirstDay/DevWork'
import { useMaterialLearner } from '../shared/MaterialLearnerContext'
import { characterPortrait } from '../shared/characterPortraits'
import { usePracticePlayback } from '../shared/usePracticePlayback'
import priya from '../Practice/assets/characters/priya-nair.webp'
import { interviewRecordings } from './DevInterviews131.recordings'
import source from './DevInterviews131.content.json'

export function DevInterviewCall({
  active,
  mode,
}: {
  active: boolean
  mode: 'hiring' | 'technical'
}) {
  const [index, setIndex] = useState(0)
  const [started, start] = useState(false)
  const [finished, finish] = useState(false)
  const [support, setSupport] = useState(0)
  const learner = useMaterialLearner()
  const audio = usePracticePlayback(active, interviewRecordings)
  const technical = mode === 'technical'
  const turns = technical ? source.technicalCall : source.hiringCall
  const turn = turns[index]!
  const person = technical ? 'Priya' : 'Kim'
  useEffect(() => {
    if (active) return
    setIndex(0)
    start(false)
    finish(false)
    setSupport(0)
  }, [active])
  const play = (next: number) => {
    const selected = turns[next]
    if (!active || !selected) return
    setIndex(next)
    start(true)
    finish(false)
    setSupport(0)
    audio.play(selected.id, selected.text, 1, () => finish(true))
  }
  return (
    <InterviewSimulation
      presentation="guided-call"
      imageFit="contain"
      title={technical ? 'Technical interview' : 'Hiring-manager interview'}
      interviewer={{
        name: person,
        imageUrl: technical ? priya : characterPortrait('Kim')!,
      }}
      learnerName={learner?.firstName ?? 'You'}
      learnerAvatarUrl={learner?.avatarUrl}
      participants={
        technical
          ? [
              { id: 'priya', name: 'Priya', imageUrl: priya },
              {
                id: 'learner',
                name: learner?.firstName ?? 'You',
                imageUrl: learner?.avatarUrl,
              },
            ]
          : undefined
      }
      activeParticipantId={finished ? 'learner' : person.toLowerCase()}
      caption={
        started ? (
          <>
            <b>{person}</b>
            <br />
            {turn.displayText}
          </>
        ) : undefined
      }
      learnerCaption={
        finished ? (
          <>
            <b>{learner?.firstName ?? 'You'}</b>
            <br />
            {support === 2
              ? turn.example
              : support === 1
                ? turn.hint
                : turn.cue}
          </>
        ) : undefined
      }
      sharedContent={
        technical ? (
          <ThemeProvider theme={theme}>
            <LoginDemoScreen />
          </ThemeProvider>
        ) : undefined
      }
      sharedContentLabel={
        technical ? 'Priya is sharing · Customer portal Login' : undefined
      }
      turnIndex={index}
      turnCount={turns.length}
      onNext={() => play(index + 1)}
      onPrevious={() => play(index - 1)}
      onReplay={() => play(index)}
      playing={Boolean(audio.playingId) && !audio.paused}
      playback={{
        state: audio.error
          ? 'error'
          : audio.paused
            ? 'paused'
            : audio.playingId
              ? 'playing'
              : 'idle',
        onToggle: () => (audio.playingId ? audio.togglePause() : play(index)),
      }}
      status={audio.error || undefined}
      supportAction={{
        label:
          support === 0
            ? 'Show speaking hint'
            : support === 1
              ? 'Show example answer'
              : 'Hide speaking support',
        icon: <SimulationIcon name="hint" />,
        pressed: support > 0,
        feedbackSound: 'hint',
        disabled: !finished,
        onClick: () => setSupport((value) => (value + 1) % 3),
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
