import { fireEvent, render, screen } from '@testing-library/react'
import { renderToString } from 'react-dom/server'
import { describe, expect, it, vi } from 'vitest'
import { CallSimulation } from '../../../src/components/Simulation/CallSimulation'
import { InterviewSimulation } from '../../../src/components/Simulation/InterviewSimulation'
import { AudioSequenceControls } from '../../../src/components/Simulation/AudioSequenceControls'
import { GrammarTable } from '../../../src/components/Grammar/GrammarTable'
import { GapFillExercise } from '../../../src/components/Exercise/GapFillExercise'
import { RolePlayExercise } from '../../../src/components/Exercise/RolePlayExercise'
import { SceneExplorer } from '../../../src/components/Exercise/SceneExplorer'
import { MinimalPairExercise } from '../../../src/components/Exercise/MinimalPairExercise'
import { FluencyTimer } from '../../../src/components/Exercise/FluencyTimer'
import { BranchingConversation } from '../../../src/components/Simulation/BranchingConversation'
import { VideoExercise } from '../../../src/components/Exercise/VideoExercise'
import { OralReview } from '../../../src/components/Exercise/OralReview'
import { OralReviewResult } from '../../../src/components/Exercise/OralReviewResult'
const noop = () => {}
const interview = {
  title: 'Receptionist',
  interviewer: { name: 'Jun', imageUrl: '/jun.png' },
  learnerName: 'Maria',
  captionsEnabled: true,
  onCaptionsChange: noop,
  microphoneEnabled: true,
  onMicrophoneChange: noop,
  cameraEnabled: true,
  onCameraChange: noop,
  handRaised: false,
  onHandChange: noop,
  turnIndex: -1,
  turnCount: 2,
  onNext: noop,
  onPrevious: noop,
  onReplay: noop,
  onEnd: noop,
}
const results = {
  parts: [{ id: 'a', label: 'Introductions', score: 3, maximum: 9 }],
  result: 'Review',
  completedQuestions: 3,
  totalQuestions: 3,
  studentName: '',
  teacherName: '',
  date: '',
  notes: '',
  onFieldChange: noop,
  onExport: noop,
  onClear: noop,
}
describe('UX Lab contracts', () => {
  it('keeps grammar answers out of the DOM until the consumer reveals a row', () => {
    const onReveal = vi.fn()
    const props = {
      title: 'Affirmative',
      rows: [
        { id: 'i', subject: 'I', verb: 'am', example: 'Private example.' },
      ],
      hiddenAnswers: true,
      onReveal,
    }
    const { rerender } = render(<GrammarTable {...props} />)
    expect(screen.queryByText('Private example.')).toBeNull()
    fireEvent.click(screen.getByRole('button', { name: 'Mostrar resposta: i' }))
    expect(onReveal).toHaveBeenCalledWith('i')
    expect(screen.queryByText('Private example.')).toBeNull()
    rerender(<GrammarTable {...props} revealedIds={['i']} />)
    expect(screen.getByText('Private example.')).toBeVisible()
  })
  it('delegates dialing and keypad actions without progressing or grading', () => {
    const onCall = vi.fn(),
      onHangUp = vi.fn(),
      onKeyPress = vi.fn()
    const props = {
      contactName: 'Bella Pizza',
      initials: 'BP',
      onCall,
      onHangUp,
      onKeyPress,
    }
    const { rerender } = render(<CallSimulation {...props} state="idle" />)
    fireEvent.click(screen.getByRole('button', { name: 'Ligar' }))
    expect(onCall).toHaveBeenCalledOnce()
    expect(screen.queryByRole('group')).toBeNull()
    rerender(<CallSimulation {...props} state="menu" />)
    fireEvent.click(screen.getByRole('button', { name: '#' }))
    expect(onKeyPress).toHaveBeenCalledWith('#')
    fireEvent.click(screen.getByRole('button', { name: 'Desligar' }))
    expect(onHangUp).toHaveBeenCalledOnce()
    expect(screen.getByRole('group')).toBeVisible()
  })
  it('bounds audio navigation and delegates simulated device controls', () => {
    const onMicrophoneChange = vi.fn(),
      onNext = vi.fn()
    const { rerender } = render(
      <InterviewSimulation
        {...interview}
        onMicrophoneChange={onMicrophoneChange}
        onNext={onNext}
      />,
    )
    expect(
      screen.getByRole('button', { name: 'Áudio anterior' }),
    ).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Tocar de novo' })).toBeDisabled()
    fireEvent.click(screen.getByRole('button', { name: 'Microfone' }))
    expect(onMicrophoneChange).toHaveBeenCalledWith(false)
    fireEvent.click(
      screen.getByRole('button', { name: 'Tocar o próximo áudio' }),
    )
    expect(onNext).toHaveBeenCalledOnce()
    rerender(<InterviewSimulation {...interview} turnIndex={1} />)
    expect(
      screen.getByRole('button', { name: 'Tocar o próximo áudio' }),
    ).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Tocar de novo' })).toBeEnabled()
  })
  it('keeps a gap selection and options reveal controlled', () => {
    const onOptionsToggle = vi.fn(),
      onSelect = vi.fn()
    const props = {
      items: [{ id: 'g', before: 'She ', after: ' a student.' }],
      activeId: 'g',
      choices: [{ id: 'is', label: 'is' }],
      onOptionsToggle,
      onSelect,
    }
    const { rerender } = render(
      <GapFillExercise {...props} optionsVisible={false} />,
    )
    expect(screen.queryByText('is')).toBeNull()
    fireEvent.click(screen.getByRole('button', { name: 'Show options' }))
    expect(onOptionsToggle).toHaveBeenCalledOnce()
    rerender(<GapFillExercise {...props} optionsVisible />)
    fireEvent.click(screen.getByRole('button', { name: 'A is' }))
    expect(onSelect).toHaveBeenCalledWith('g', 'is')
    expect(screen.getByLabelText('Lacuna 1')).toHaveTextContent('___')
  })
  it('reports role-play and scene ids while retaining supplied completion state', () => {
    const onStepToggle = vi.fn(),
      onSelect = vi.fn()
    const { unmount } = render(
      <RolePlayExercise
        situation="Talk"
        steps={[{ id: 'intro', label: 'Introduce yourself' }]}
        completedIds={[]}
        onStepToggle={onStepToggle}
      />,
    )
    fireEvent.click(screen.getByRole('button', { name: /Introduce yourself/ }))
    expect(onStepToggle).toHaveBeenCalledWith('intro')
    expect(
      screen.getByRole('button', { name: /Introduce yourself/ }),
    ).toHaveAttribute('aria-pressed', 'false')
    unmount()
    render(
      <SceneExplorer
        imageUrl="/room.jpg"
        imageAlt="Room"
        hotspots={[
          {
            id: 'keys',
            xPercent: 50,
            yPercent: 50,
            label: 'Keys',
            prompt: 'Where?',
          },
        ]}
        selectedId="keys"
        visitedIds={[]}
        onSelect={onSelect}
      />,
    )
    fireEvent.click(screen.getByRole('button', { name: 'Keys' }))
    expect(onSelect).toHaveBeenCalledWith('keys')
    expect(screen.getByText('0 / 1 explorados')).toBeVisible()
  })
  it('delegates pair choice and does not manufacture correctness', () => {
    const onSelect = vi.fn()
    render(
      <MinimalPairExercise
        mode="speak"
        choices={[
          { id: 'ship', word: 'ship' },
          { id: 'sheep', word: 'sheep' },
        ]}
        onSelect={onSelect}
      />,
    )
    fireEvent.click(screen.getByRole('button', { name: 'ship' }))
    expect(onSelect).toHaveBeenCalledWith('ship')
    expect(screen.getByRole('button', { name: 'ship' })).toHaveAttribute(
      'aria-pressed',
      'false',
    )
  })
  it('submits only nonempty enabled drafts and keeps conversation routing external', () => {
    const onSend = vi.fn(),
      onChoice = vi.fn()
    const props = {
      contact: { name: 'Kim' },
      messages: [{ id: 'hi', side: 'incoming' as const, content: 'Hi!' }],
      mode: 'free' as const,
      onSend,
      onChoice,
    }
    const { rerender } = render(<BranchingConversation {...props} draft=" " />)
    expect(screen.getByRole('button', { name: 'Enviar' })).toBeDisabled()
    rerender(<BranchingConversation {...props} draft="Saturday works." />)
    fireEvent.click(screen.getByRole('button', { name: 'Enviar' }))
    expect(onSend).toHaveBeenCalledOnce()
    rerender(
      <BranchingConversation
        {...props}
        mode="choices"
        choices={[{ id: 'yes', label: 'Yes!' }]}
      />,
    )
    fireEvent.click(screen.getByRole('button', { name: 'Yes!' }))
    expect(onChoice).toHaveBeenCalledWith('yes')
    expect(screen.getByRole('log')).toHaveTextContent('Hi!')
  })
  it('keeps video seeking and page changes delegated to the player owner', () => {
    const onSeek = vi.fn(),
      onPageChange = vi.fn()
    render(
      <VideoExercise
        title="Video"
        media={<div>Player</div>}
        page="watch"
        onPageChange={onPageChange}
        chapters={[{ id: 'plan', seconds: 28, label: 'The plan' }]}
        onSeek={onSeek}
      />,
    )
    fireEvent.click(screen.getByRole('button', { name: /The plan/ }))
    expect(onSeek).toHaveBeenCalledWith(28)
    fireEvent.click(screen.getByRole('button', { name: '2 · Talk about it' }))
    expect(onPageChange).toHaveBeenCalledWith('discuss')
    expect(screen.getByText('Player')).toBeVisible()
  })
  it('requires manual oral ratings and complete assessment before exporting', () => {
    const onRate = vi.fn(),
      onExport = vi.fn()
    const { unmount } = render(
      <OralReview
        questions={[{ id: 'q1', level: 'Easy', prompt: 'Who are you?' }]}
        ratings={{}}
        onRate={onRate}
      />,
    )
    fireEvent.click(screen.getByRole('button', { name: '3 estrelas: q1' }))
    expect(onRate).toHaveBeenCalledWith('q1', 3)
    expect(
      screen.getByRole('button', { name: '3 estrelas: q1' }),
    ).toHaveAttribute('aria-pressed', 'false')
    unmount()
    const { rerender } = render(
      <OralReviewResult
        {...results}
        completedQuestions={2}
        onExport={onExport}
      />,
    )
    expect(screen.getByRole('button', { name: 'Baixar PDF' })).toBeDisabled()
    rerender(<OralReviewResult {...results} onExport={onExport} />)
    fireEvent.click(screen.getByRole('button', { name: 'Baixar PDF' }))
    expect(onExport).toHaveBeenCalledOnce()
  })
  it('renders the clock from supplied time and handles empty sequences', () => {
    const onToggle = vi.fn()
    const { unmount } = render(
      <FluencyTimer
        title="Weekend"
        rounds={[{ id: '1', seconds: 60 }]}
        roundIndex={0}
        remainingSeconds={45}
        running={false}
        onToggle={onToggle}
        onReset={noop}
      />,
    )
    expect(screen.getByRole('timer')).toHaveTextContent('0:45')
    fireEvent.click(screen.getByRole('button', { name: 'Começar rodada 1' }))
    expect(onToggle).toHaveBeenCalledOnce()
    expect(screen.getByRole('timer')).toHaveTextContent('0:45')
    unmount()
    render(
      <AudioSequenceControls
        index={-1}
        count={0}
        onNext={noop}
        onPrevious={noop}
        onReplay={noop}
      />,
    )
    screen
      .getAllByRole('button')
      .forEach((button) => expect(button).toBeDisabled())
  })
  it('server-renders all thirteen public contracts without browser services', () => {
    const html = renderToString(
      <>
        <CallSimulation
          contactName="Call"
          initials="C"
          state="idle"
          onCall={noop}
          onHangUp={noop}
        />
        <InterviewSimulation {...interview} />
        <AudioSequenceControls
          index={-1}
          count={0}
          onNext={noop}
          onPrevious={noop}
          onReplay={noop}
        />
        <GrammarTable title="Grammar" rows={[]} />
        <GapFillExercise items={[]} choices={[]} onSelect={noop} />
        <RolePlayExercise
          situation="Talk"
          steps={[]}
          completedIds={[]}
          onStepToggle={noop}
        />
        <SceneExplorer
          imageUrl="/room.jpg"
          imageAlt="Room"
          hotspots={[]}
          visitedIds={[]}
          onSelect={noop}
        />
        <MinimalPairExercise mode="listen" choices={[]} onSelect={noop} />
        <FluencyTimer
          title="Talk"
          rounds={[]}
          roundIndex={0}
          remainingSeconds={0}
          running={false}
          onToggle={noop}
          onReset={noop}
        />
        <BranchingConversation contact={{ name: 'Kim' }} messages={[]} />
        <VideoExercise
          title="Video"
          media={null}
          page="watch"
          onPageChange={noop}
        />
        <OralReview questions={[]} ratings={{}} onRate={noop} />
        <OralReviewResult {...results} />
      </>,
    )
    for (const marker of [
      'call-simulation',
      'interview-simulation',
      'audio-sequence-controls',
      'grammar-table',
      'gap-fill-exercise',
      'role-play-exercise',
      'scene-explorer',
      'minimal-pair-exercise',
      'fluency-timer',
      'branching-conversation',
      'video-exercise',
      'oral-review',
      'oral-review-result',
    ])
      expect(html).toContain(`lsui-sc-${marker}`)
  })
})
