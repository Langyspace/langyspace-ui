import { AudioSequenceControls } from './AudioSequenceControls'
import { SimulationIcon } from './SimulationIcon'
import * as Styled from './InterviewSimulation.styles'
import type { InterviewSimulationProps } from './InterviewSimulation.types'
export function InterviewSimulation({
  title,
  interviewer,
  learnerName,
  caption,
  captionsEnabled,
  onCaptionsChange,
  microphoneEnabled,
  onMicrophoneChange,
  cameraEnabled,
  onCameraChange,
  handRaised,
  onHandChange,
  turnIndex,
  turnCount,
  onNext,
  onPrevious,
  onReplay,
  onEnd,
  ended = false,
  playing = false,
  loading = false,
  status,
  labels,
  children,
  ...props
}: InterviewSimulationProps) {
  const text = {
    interview: 'Interview',
    ended: 'Call ended',
    microphone: 'Microfone',
    camera: 'Câmera',
    captions: 'Legenda',
    hand: 'Levantar a mão',
    end: 'Sair da chamada',
    previous: 'Áudio anterior',
    next: 'Tocar o próximo áudio',
    replay: 'Tocar de novo',
    progress: 'Áudios da entrevista',
    ...labels,
  }
  return (
    <Styled.Root as="section" {...props}>
      <Styled.Meet>
        <Styled.Top>
          <span>{title}</span>
          <span role="status">
            {ended ? text.ended : text.interview}
            {playing ? ' · ▶' : ''}
          </span>
        </Styled.Top>
        <Styled.Main>
          <img src={interviewer.imageUrl} alt={interviewer.name} />
          <Styled.Name>{interviewer.name}</Styled.Name>
          {captionsEnabled && caption ? (
            <Styled.Caption aria-live="polite">
              <small>{interviewer.name}</small>
              {caption}
            </Styled.Caption>
          ) : null}
          <Styled.Self>
            <b aria-hidden="true">{learnerName.slice(0, 1).toUpperCase()}</b>
            <span>{learnerName}</span>
          </Styled.Self>
        </Styled.Main>
        <Styled.Bar>
          <Styled.Control
            type="button"
            data-device="microphone"
            aria-label={text.microphone}
            aria-pressed={microphoneEnabled}
            disabled={ended}
            onClick={() => {
              onMicrophoneChange(!microphoneEnabled)
            }}
          >
            <SimulationIcon name="mic" />
          </Styled.Control>
          <Styled.Control
            type="button"
            data-device="camera"
            aria-label={text.camera}
            aria-pressed={cameraEnabled}
            disabled={ended}
            onClick={() => {
              onCameraChange(!cameraEnabled)
            }}
          >
            <SimulationIcon name="camera" />
          </Styled.Control>
          <Styled.Control
            type="button"
            $active={captionsEnabled}
            aria-label={text.captions}
            aria-pressed={captionsEnabled}
            onClick={() => {
              onCaptionsChange(!captionsEnabled)
            }}
          >
            <SimulationIcon name="captions" />
          </Styled.Control>
          <Styled.Control
            type="button"
            $active={handRaised}
            aria-label={text.hand}
            aria-pressed={handRaised}
            disabled={ended}
            onClick={() => {
              onHandChange(!handRaised)
            }}
          >
            <SimulationIcon name="hand" />
          </Styled.Control>
          <Styled.Control
            type="button"
            $end
            aria-label={text.end}
            onClick={onEnd}
            disabled={ended}
          >
            <SimulationIcon name="hangup" />
          </Styled.Control>
        </Styled.Bar>
      </Styled.Meet>
      <AudioSequenceControls
        index={turnIndex}
        count={turnCount}
        onNext={onNext}
        onPrevious={onPrevious}
        onReplay={onReplay}
        disabled={ended}
        loading={loading}
        status={status}
        labels={{
          previous: text.previous,
          next: text.next,
          replay: text.replay,
          progress: text.progress,
        }}
      />
      {children}
    </Styled.Root>
  )
}
