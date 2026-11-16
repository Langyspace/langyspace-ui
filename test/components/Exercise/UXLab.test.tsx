import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { createTheme } from '../../../src/foundations/theme/createTheme'
import { ExercisePanel } from '../../../src/components/Exercise/ExercisePanel'
import { renderToString } from 'react-dom/server'
import { describe, expect, it, vi } from 'vitest'
import { CallSimulation } from '../../../src/components/InteractiveMaterial/CallSimulation'
import { InterviewSimulation } from '../../../src/components/InteractiveMaterial/InterviewSimulation'
import { AudioSequenceControls } from '../../../src/components/InteractiveMaterial/AudioSequenceControls'
import { GrammarTable } from '../../../src/components/InteractiveMaterial/GrammarTable'
import { GapFillExercise } from '../../../src/components/InteractiveMaterial/GapFillExercise'
import { RolePlayExercise } from '../../../src/components/InteractiveMaterial/RolePlayExercise'
import { SceneExplorer } from '../../../src/components/InteractiveMaterial/SceneExplorer'
import { MinimalPairExercise } from '../../../src/components/InteractiveMaterial/MinimalPairExercise'
import { FluencyTimer } from '../../../src/components/InteractiveMaterial/FluencyTimer'
import { BranchingConversation } from '../../../src/components/InteractiveMaterial/BranchingConversation'
import { VideoExercise } from '../../../src/components/InteractiveMaterial/VideoExercise'
import { OralReview } from '../../../src/components/InteractiveMaterial/OralReview'
import { OralReviewResult } from '../../../src/components/InteractiveMaterial/OralReviewResult'
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

describe('material exercise states and accessibility', () => {
  it('keeps empty and loading transports inert and retains supplied status and children', () => {
    const next = vi.fn()
    const props = {
      index: 0,
      count: 3,
      onNext: next,
      onPrevious: noop,
      onReplay: noop,
    }
    const { rerender } = render(
      <AudioSequenceControls {...props} loading status="Loading media">
        <span>Transcript available below</span>
      </AudioSequenceControls>,
    )
    expect(screen.getByRole('status')).toHaveTextContent('Loading media')
    screen
      .getAllByRole('button')
      .forEach((button) => expect(button).toBeDisabled())
    fireEvent.click(
      screen.getByRole('button', { name: 'Tocar o próximo áudio' }),
    )
    expect(next).not.toHaveBeenCalled()
    rerender(<AudioSequenceControls {...props} index={2} disabled />)
    expect(screen.getByRole('img')).toHaveAccessibleName('Áudios: 3 / 3')
  })
  it('delegates all interview toggles and shows a caption only when requested', () => {
    const camera = vi.fn(),
      captions = vi.fn(),
      hand = vi.fn(),
      previous = vi.fn(),
      replay = vi.fn(),
      end = vi.fn()
    const props = {
      ...interview,
      turnIndex: 1,
      turnCount: 3,
      caption: 'Please describe your experience.',
      onCameraChange: camera,
      onCaptionsChange: captions,
      onHandChange: hand,
      onPrevious: previous,
      onReplay: replay,
      onEnd: end,
    }
    const { rerender } = render(
      <InterviewSimulation {...props} playing>
        <span>Interviewer notes</span>
      </InterviewSimulation>,
    )
    expect(screen.getByText('Please describe your experience.')).toBeVisible()
    for (const label of [
      'Câmera',
      'Legenda',
      'Levantar a mão',
      'Áudio anterior',
      'Tocar de novo',
      'Sair da chamada',
    ])
      fireEvent.click(screen.getByRole('button', { name: label }))
    expect(camera).toHaveBeenCalledWith(false)
    expect(captions).toHaveBeenCalledWith(false)
    expect(hand).toHaveBeenCalledWith(true)
    expect(previous).toHaveBeenCalledOnce()
    expect(replay).toHaveBeenCalledOnce()
    expect(end).toHaveBeenCalledOnce()
    rerender(
      <InterviewSimulation
        {...props}
        captionsEnabled={false}
        microphoneEnabled={false}
        cameraEnabled={false}
        handRaised
        ended
      />,
    )
    expect(screen.queryByText('Please describe your experience.')).toBeNull()
    expect(screen.getByText('Call ended')).toBeVisible()
    expect(screen.getByRole('button', { name: 'Microfone' })).toBeDisabled()
  })
  it('keeps a disabled menu inert, renders the active caption and supports calling again', () => {
    const start = vi.fn(),
      key = vi.fn()
    const props = {
      contactName: 'Support',
      initials: 'S',
      onCall: start,
      onHangUp: noop,
      onKeyPress: key,
    }
    const { rerender } = render(
      <CallSimulation
        {...props}
        state="menu"
        disabled
        caption="Press one for support."
        pressedKey="1"
        status="Try another option"
      />,
    )
    expect(screen.getByText('Press one for support.')).toBeVisible()
    fireEvent.click(screen.getByRole('button', { name: '1' }))
    expect(key).not.toHaveBeenCalled()
    rerender(<CallSimulation {...props} state="ringing" />)
    expect(screen.getByText('Calling…')).toBeVisible()
    rerender(<CallSimulation {...props} state="ended" elapsedLabel="1:12" />)
    expect(screen.getByText('Call ended · 1:12')).toBeVisible()
    fireEvent.click(screen.getByRole('button', { name: 'Ligar de novo' }))
    expect(start).toHaveBeenCalledOnce()
    rerender(
      <CallSimulation {...props} state="connected" caption="How can I help?" />,
    )
    expect(screen.queryByRole('group')).toBeNull()
  })
  it.each(['affirmative', 'negative', 'question'] as const)(
    'supports %s grammar with verb, translation, audio and an empty alternative',
    (tone) => {
      const play = vi.fn()
      const props = {
        title: 'Examples',
        tone,
        columns: { subject: 'Who', verb: 'Be', example: 'Sentence' },
        rows: [
          {
            id: 'you',
            subject: 'You',
            verb: 'are',
            example: 'You are ready.',
            translation: 'Você está pronta.',
            audioLabel: 'Listen to the example',
          },
        ],
      }
      const { rerender } = render(<GrammarTable {...props} onPlay={play} />)
      fireEvent.click(
        screen.getByRole('button', { name: 'Listen to the example' }),
      )
      expect(play).toHaveBeenCalledWith('you')
      expect(screen.getByText('Você está pronta.')).toBeVisible()
      expect(screen.getByRole('columnheader', { name: 'Be' })).toBeVisible()
      rerender(<GrammarTable {...props} />)
      expect(screen.queryByRole('button')).toBeNull()
      expect(screen.getByText('You are ready.')).toBeVisible()
      rerender(
        <GrammarTable
          title="Examples"
          rows={[]}
          emptyMessage="No examples yet."
        />,
      )
      expect(screen.getByText('No examples yet.')).toBeVisible()
      rerender(<GrammarTable {...props} hiddenAnswers />)
      expect(
        screen.getByRole('button', { name: 'Mostrar resposta: you' }),
      ).toBeDisabled()
      expect(screen.queryByText('You are ready.')).toBeNull()
    },
  )
  it('retains filled gaps and prevents unavailable options from dispatching', () => {
    const select = vi.fn()
    const { rerender } = render(
      <GapFillExercise
        items={[
          { id: 'a', before: 'She ', answer: 'is', after: ' ready.' },
          { id: 'b', before: 'They ', after: ' ready.' },
        ]}
        activeId="b"
        choices={[{ id: 'are', label: 'are', disabled: true }]}
        onSelect={select}
      />,
    )
    expect(screen.getByText('She is ready.')).toBeVisible()
    fireEvent.click(screen.getByRole('button', { name: 'A are' }))
    expect(select).not.toHaveBeenCalled()
    rerender(<GapFillExercise items={[]} choices={[]} onSelect={select} />)
    expect(screen.getByText('Nenhuma frase.')).toBeVisible()
  })
  it('reveals role-play support independently of the completed checklist', () => {
    const support = vi.fn(),
      step = vi.fn()
    render(
      <RolePlayExercise
        situation="Talk about your photos"
        image={{ src: '/photos.webp', alt: 'Family photos' }}
        roles={['Learner', 'Teacher']}
        support={['This is my…']}
        supportVisible
        onSupportToggle={support}
        steps={[{ id: 'intro', label: 'Introduce a person' }]}
        completedIds={['intro']}
        onStepToggle={step}
      >
        Extra instructions
      </RolePlayExercise>,
    )
    expect(screen.getByText('This is my…')).toBeVisible()
    expect(screen.getByRole('img')).toHaveAccessibleName('Family photos')
    expect(
      screen.getByRole('button', { name: /Introduce a person/ }),
    ).toHaveAttribute('aria-pressed', 'true')
    fireEvent.click(screen.getByRole('button', { name: 'Esconder apoio' }))
    expect(support).toHaveBeenCalledOnce()
    expect(screen.getByRole('status')).toHaveTextContent('1 / 1 concluídos')
  })
  it('shows selected scene help, counts only known visited objects and can hide the answer', () => {
    const help = vi.fn()
    const props = {
      imageUrl: '/room.webp',
      imageAlt: 'Room',
      hotspots: [
        {
          id: 'bag',
          xPercent: 25,
          yPercent: 50,
          label: 'Bag',
          prompt: 'Where is it?',
          answer: 'On the chair.',
        },
      ],
      selectedId: 'bag',
      visitedIds: ['bag', 'unknown'],
      onSelect: noop,
      onAnswerToggle: help,
    }
    const { rerender } = render(<SceneExplorer {...props} answerVisible />)
    expect(screen.getByText(/On the chair\./)).toBeVisible()
    expect(screen.getByText('1 / 1 explorados')).toBeVisible()
    expect(screen.getByRole('button', { name: 'Bag' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    fireEvent.click(screen.getByRole('button', { name: 'Esconder resposta' }))
    expect(help).toHaveBeenCalledOnce()
    rerender(<SceneExplorer {...props} answerVisible={false} />)
    expect(screen.queryByText(/On the chair\./)).toBeNull()
  })
  it.each(['correct', 'incorrect'] as const)(
    'renders %s pair feedback and delegates listen, mode and next',
    (feedback) => {
      const mode = vi.fn(),
        listen = vi.fn(),
        next = vi.fn()
      const props = {
        mode: 'listen' as const,
        onModeChange: mode,
        onListen: listen,
        onNext: next,
        onSelect: noop,
        choices: [
          {
            id: 'ship',
            word: 'ship',
            imageUrl: '/ship.png',
            imageAlt: 'Ship',
            phonetic: '/ʃɪp/',
          },
        ],
        selectedId: 'ship',
        feedback,
        hint: 'Listen for the short vowel.',
        score: [{ id: '1', result: feedback }],
      }
      const { rerender } = render(<MinimalPairExercise {...props} />)
      fireEvent.click(screen.getByRole('button', { name: 'Listen' }))
      fireEvent.click(screen.getByRole('button', { name: 'You say' }))
      fireEvent.click(screen.getByRole('button', { name: 'You listen' }))
      fireEvent.click(screen.getByRole('button', { name: 'Próximo par' }))
      expect(listen).toHaveBeenCalledOnce()
      expect(mode.mock.calls).toEqual([['speak'], ['listen']])
      expect(next).toHaveBeenCalledOnce()
      expect(screen.getByRole('img', { name: /Placar/ })).toHaveAccessibleName(
        `Placar: ${feedback === 'correct' ? 1 : 0} / 1`,
      )
      rerender(<MinimalPairExercise {...props} disabled />)
      expect(screen.getByRole('button', { name: /ship.*ʃɪp/ })).toBeDisabled()
    },
  )
  it('renders later rounds, audience and finish without starting an internal clock', () => {
    const reset = vi.fn()
    const props = {
      title: 'Your weekend',
      description: 'Speak again, with less time.',
      rounds: [
        { id: 'a', seconds: 120, audience: 'A friend' },
        { id: 'b', seconds: 60, audience: 'A colleague' },
      ],
      onToggle: noop,
      onReset: reset,
    }
    const { rerender } = render(
      <FluencyTimer
        {...props}
        roundIndex={0}
        remainingSeconds={Infinity}
        running
        support={['First…', 'Then…']}
      />,
    )
    expect(screen.getByRole('timer')).toHaveTextContent('0:00')
    expect(screen.getByText('2 min')).toBeVisible()
    expect(screen.getByRole('button', { name: 'Parar' })).toBeVisible()
    rerender(
      <FluencyTimer
        {...props}
        roundIndex={1}
        remainingSeconds={60}
        running={false}
      />,
    )
    expect(screen.getByText('A colleague')).toBeVisible()
    expect(screen.getByText('✓ 2 min')).toBeVisible()
    rerender(
      <FluencyTimer
        {...props}
        roundIndex={2}
        remainingSeconds={0}
        running={false}
      />,
    )
    fireEvent.click(screen.getByRole('button', { name: 'Recomeçar' }))
    expect(reset).toHaveBeenCalledOnce()
    rerender(
      <FluencyTimer
        {...props}
        rounds={[]}
        roundIndex={0}
        remainingSeconds={0}
        running={false}
      />,
    )
    expect(screen.getByText('Nenhuma rodada.')).toBeVisible()
    expect(screen.getByRole('button')).toBeDisabled()
  })
  it('submits edited conversation text, blocks ended forms and delegates restart', () => {
    const edit = vi.fn(),
      send = vi.fn(),
      restart = vi.fn()
    const props = {
      contact: { name: 'Kim', imageUrl: '/kim.png', status: 'typing…' },
      messages: [
        {
          id: 'a',
          side: 'incoming' as const,
          content: 'Can we talk?',
          timeLabel: '10:20',
        },
        { id: 'b', side: 'outgoing' as const, content: 'Sure.' },
      ],
      mode: 'free' as const,
      draft: 'Yes, at noon.',
      onDraftChange: edit,
      onSend: send,
      onRestart: restart,
      status: 'Choose a time.',
    }
    const { rerender } = render(<BranchingConversation {...props} />)
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'At one.' },
    })
    expect(edit).toHaveBeenCalledWith('At one.')
    fireEvent.submit(
      screen.getByRole('button', { name: 'Enviar' }).closest('form')!,
    )
    expect(send).toHaveBeenCalledOnce()
    fireEvent.click(screen.getByRole('button', { name: 'Recomeçar' }))
    expect(restart).toHaveBeenCalledOnce()
    rerender(<BranchingConversation {...props} ended />)
    expect(screen.getByRole('textbox')).toBeDisabled()
    fireEvent.submit(
      screen.getByRole('button', { name: 'Enviar' }).closest('form')!,
    )
    expect(send).toHaveBeenCalledOnce()
    rerender(<BranchingConversation {...props} disabled />)
    fireEvent.submit(
      screen.getByRole('button', { name: 'Enviar' }).closest('form')!,
    )
    expect(send).toHaveBeenCalledOnce()
  })
  it('displays discussion content and disables chapter seeking when no player is connected', () => {
    const page = vi.fn()
    const props = {
      title: 'Lesson video',
      media: <span>Player</span>,
      onPageChange: page,
      chapters: [{ id: 'a', seconds: 75, label: 'The plan' }],
    }
    const { rerender } = render(
      <VideoExercise {...props} page="discuss">
        Discuss the plan.
      </VideoExercise>,
    )
    expect(screen.queryByText('Player')).toBeNull()
    expect(screen.getByText('Discuss the plan.')).toBeVisible()
    fireEvent.click(screen.getByRole('button', { name: '1 · Watch' }))
    expect(page).toHaveBeenCalledWith('watch')
    rerender(
      <VideoExercise
        {...props}
        page="watch"
        activeChapterId="a"
        beforeWatch="What will happen?"
      />,
    )
    expect(
      screen.getByRole('button', { name: '1. The plan · 1:15' }),
    ).toBeDisabled()
    expect(screen.getByText('What will happen?')).toBeVisible()
  })
  it('renders manual oral ratings, reveals examples and blocks stars when disabled', () => {
    const rate = vi.fn(),
      reveal = vi.fn()
    const props = {
      questions: [
        {
          id: 'q',
          level: 'Easy',
          prompt: 'Who is he?',
          example: 'He is my brother.',
        },
      ],
      ratings: { q: 2 },
      onRate: rate,
      onReveal: reveal,
      revealedIds: ['q'],
    }
    const { rerender } = render(<OralReview {...props} />)
    expect(screen.getByText('He is my brother.')).toBeVisible()
    expect(
      screen.getByRole('button', { name: '2 estrelas: q' }),
    ).toHaveAttribute('aria-pressed', 'true')
    fireEvent.click(screen.getByRole('button', { name: 'Esconder exemplo' }))
    expect(reveal).toHaveBeenCalledWith('q')
    rerender(<OralReview {...props} disabled />)
    fireEvent.click(screen.getByRole('button', { name: '1 estrelas: q' }))
    expect(rate).not.toHaveBeenCalled()
    rerender(<OralReview questions={[]} ratings={{}} onRate={rate} />)
    expect(screen.getByText('Nenhuma pergunta.')).toBeVisible()
  })
  it('edits every result field independently and blocks duplicate exports while exporting', () => {
    const change = vi.fn(),
      clear = vi.fn()
    const { rerender } = render(
      <OralReviewResult
        {...results}
        onFieldChange={change}
        onClear={clear}
        exporting
        status="Preparing PDF…"
      />,
    )
    fireEvent.change(screen.getByLabelText('Aluna'), {
      target: { value: 'Maria' },
    })
    fireEvent.change(screen.getByLabelText('Professora'), {
      target: { value: 'Ana' },
    })
    fireEvent.change(screen.getByLabelText('Data'), {
      target: { value: '2026-11-16' },
    })
    fireEvent.change(screen.getByLabelText('Comentários (opcional)'), {
      target: { value: 'Keep practising.' },
    })
    expect(change.mock.calls).toEqual([
      ['studentName', 'Maria'],
      ['teacherName', 'Ana'],
      ['date', '2026-11-16'],
      ['notes', 'Keep practising.'],
    ])
    expect(screen.getByRole('button', { name: 'Baixar PDF' })).toBeDisabled()
    fireEvent.click(screen.getByRole('button', { name: 'Limpar notas' }))
    expect(clear).toHaveBeenCalledOnce()
    expect(screen.getByRole('status')).toHaveTextContent('Preparing PDF…')
    rerender(
      <OralReviewResult
        {...results}
        parts={[]}
        completedQuestions={0}
        totalQuestions={1}
      />,
    )
    expect(screen.getByRole('button', { name: 'Baixar PDF' })).toBeDisabled()
  })
  it('renders themed grammar, selected pairs and support without leaking hidden content', () => {
    render(
      <ThemeProvider
        theme={createTheme({
          slides: {
            canvas: '#121212',
            surface: '#1F1F1F',
            foreground: '#F7F7F7',
            muted: '#B8B8B8',
            border: '#555555',
            accent: '#FF8AA8',
          },
        })}
      >
        <GrammarTable
          title="Questions"
          tone="question"
          columns={{ subject: 'Who', verb: 'Verb', example: 'Question' }}
          rows={[
            {
              id: 'a',
              subject: 'You',
              verb: 'Are',
              example: <strong>Are you ready?</strong>,
            },
          ]}
        />
        <GapFillExercise
          items={[{ id: 'a', before: 'We ', after: ' ready.' }]}
          activeId="a"
          optionsVisible
          choices={[]}
          onSelect={noop}
        />
        <RolePlayExercise
          situation="Talk"
          steps={[{ id: 'a', label: 'Greet' }]}
          completedIds={['a']}
          onStepToggle={noop}
        />
        <MinimalPairExercise
          mode="speak"
          choices={[{ id: 'a', word: 'ship', phonetic: '/ʃɪp/' }]}
          selectedId="a"
          feedback="correct"
          onSelect={noop}
        />
      </ThemeProvider>,
    )
    expect(screen.getByRole('table')).toHaveAccessibleName('Questions')
    expect(screen.getByRole('button', { name: /ship.*ʃɪp/ })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
  })
  it('omits an empty panel heading and supports independent title, counter and media slots', () => {
    const { rerender } = render(
      <ExercisePanel>Exercise instructions</ExercisePanel>,
    )
    expect(screen.queryByRole('heading')).toBeNull()
    rerender(
      <ExercisePanel
        title="Prompt"
        media={<img src="/scene.webp" alt="Scene" />}
      >
        Instructions
      </ExercisePanel>,
    )
    expect(screen.getByRole('heading')).toHaveTextContent('Prompt')
    expect(screen.getByRole('img')).toHaveAccessibleName('Scene')
    rerender(<ExercisePanel counter="2 / 4">Instructions</ExercisePanel>)
    expect(screen.getByText('2 / 4')).toBeVisible()
    expect(screen.queryByRole('heading')).toBeNull()
  })
})
