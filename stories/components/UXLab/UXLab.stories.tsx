import { A102Lesson } from '../../materials/A102/A102Lesson'
import { A103Lesson } from '../../materials/A103/A103Lesson'
import { useState } from 'react'
import { withVoiceMessageLayout } from '../../materials/shared/deviceTheme'
import { LabTile } from './LabTile'
import {
  VideoCallDemo,
  LabeledSceneDemo,
  GuidedRolePlayDemo,
} from './MaterialVariants'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { ThemeProvider } from 'styled-components'
import { createTheme } from '../../../src/foundations/theme/createTheme'
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
import { CallDemo } from './CallDemo'
import { InterviewDemo } from './InterviewDemo'
import { ConversationDemo } from './ConversationDemo'
import {
  GrammarDemo,
  GrammarFormsDemo,
  GapsDemo,
  RolePlayDemo,
  SceneDemo,
  PairsDemo,
  FluencyDemo,
  OralDemo,
  OralResultDemo,
  VideoDemo,
  ShadowingDemo,
} from './PracticeDemos'
import {
  MultipleChoiceDemo,
  RevealsDemo,
  VocabularyDemo,
  DialogueDemo,
  GuessWhoDemo,
  ListeningDemo,
  QuestionsAndDialogue,
  QuickCheckDemo,
  YourTurnDemo,
  RightOrWrongDemo,
  HomeworkDemo,
  LessonIntroDemo,
  ReceivedVideoDemo,
} from './ReuseDemos'
import * as Styled from './UXLab.stories.styles'
const meta = {
  title: 'Exercise/UX Lab',
  parameters: { layout: 'fullscreen' },
  subcomponents: {
    CallSimulation,
    InterviewSimulation,
    AudioSequenceControls,
    GrammarTable,
    GapFillExercise,
    RolePlayExercise,
    SceneExplorer,
    MinimalPairExercise,
    FluencyTimer,
    BranchingConversation,
    VideoExercise,
    OralReview,
    OralReviewResult,
  },
  decorators: [
    (Story, context) => (
      <Styled.Stage>
        <LabTile name={context.name}>
          <Story />
        </LabTile>
      </Styled.Stage>
    ),
  ],
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>
export const Interview: Story = { render: () => <InterviewDemo /> }
export const AdvancedInterview: Story = {
  render: () => <InterviewDemo level="c2" />,
}
export const Call: Story = { render: () => <CallDemo /> }
export const AdvancedCall: Story = { render: () => <CallDemo level="c2" /> }
export const VideoCall: Story = { render: () => <VideoCallDemo /> }
export const LabeledScene: Story = { render: () => <LabeledSceneDemo /> }
export const GuidedRolePlay: Story = { render: () => <GuidedRolePlayDemo /> }
export const Grammar: Story = { render: () => <GrammarDemo /> }
export const GrammarForms: Story = { render: () => <GrammarFormsDemo /> }
export const HiddenGrammar: Story = { render: () => <GrammarDemo hidden /> }
export const FillInTheBlanks: Story = { render: () => <GapsDemo /> }
export const RolePlay: Story = { render: () => <RolePlayDemo /> }
export const ExploreTheScene: Story = { render: () => <SceneDemo /> }
export const AdvancedScene: Story = {
  render: () => <SceneDemo level="c2" practice />,
}
export const MinimalPairs: Story = { render: () => <PairsDemo /> }
export const Fluency: Story = { render: () => <FluencyDemo /> }
export const AdvancedFluency: Story = {
  render: () => <FluencyDemo level="c2" />,
}
export const Conversation: Story = { render: () => <ConversationDemo /> }
export const FreeConversation: Story = {
  render: () => <ConversationDemo level="c2" />,
}
export const Video: Story = { render: () => <VideoDemo /> }
export const OralAssessment: Story = { render: () => <OralDemo /> }
export const OralResult: Story = { render: () => <OralResultDemo /> }
export const Shadowing: Story = { render: () => <ShadowingDemo /> }
export const AdvancedShadowing: Story = {
  render: () => <ShadowingDemo level="c2" />,
}
export const MultipleChoice: Story = { render: () => <MultipleChoiceDemo /> }
export const QuickCheck: Story = { render: () => <QuickCheckDemo /> }
export const Vocabulary: Story = { render: () => <VocabularyDemo /> }
export const GuidedConversation: Story = { render: () => <DialogueDemo /> }
export const ChatRolePlay: Story = { render: () => <DialogueDemo rolePlay /> }
export const Comprehension: Story = { render: () => <RevealsDemo /> }
export const MakeYourExamples: Story = {
  render: () => <RevealsDemo kind="examples" />,
}
export const Review: Story = { render: () => <RevealsDemo kind="review" /> }
export const Challenge: Story = {
  render: () => <RevealsDemo kind="challenge" />,
}
export const GuessWho: Story = { render: () => <GuessWhoDemo /> }
export const Listening: Story = { render: () => <ListeningDemo /> }
export const DialogueAndQuestions: Story = {
  render: () => <QuestionsAndDialogue />,
}
export const YourTurn: Story = { render: () => <YourTurnDemo /> }
export const RightOrWrong: Story = { render: () => <RightOrWrongDemo /> }
export const Homework: Story = { render: () => <HomeworkDemo /> }
export const LessonIntro: Story = { render: () => <LessonIntroDemo /> }
export const NameTheseThings: Story = { render: () => <VocabularyDemo /> }
export const PairsInLesson: Story = { render: () => <PairsDemo /> }
export const ReceivedVideo: Story = { render: () => <ReceivedVideoDemo /> }
export const SequenceEmpty: Story = {
  render: () => (
    <AudioSequenceControls
      index={-1}
      count={0}
      onNext={() => {}}
      onPrevious={() => {}}
      onReplay={() => {}}
      status="Nenhum áudio disponível."
    />
  ),
}
export const SequenceLoading: Story = {
  render: () => (
    <AudioSequenceControls
      index={0}
      count={3}
      loading
      onNext={() => {}}
      onPrevious={() => {}}
      onReplay={() => {}}
      status="Carregando áudio…"
    />
  ),
}
export const DarkComponents: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider
        theme={createTheme({
          colors: { text: { primary: '#F7F7F7', muted: '#B8B8B8' } },
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
        <Story />
      </ThemeProvider>
    ),
  ],
  render: () => (
    <Styled.ThemeCanvas>
      <Styled.Sheet>
        <GrammarDemo />
        <GrammarFormsDemo />
        <PairsDemo />
        <RolePlayDemo />
        <GapsDemo />
        <SceneDemo />
        <InterviewDemo />
        <CallDemo />
        <OralDemo />
      </Styled.Sheet>
    </Styled.ThemeCanvas>
  ),
}
export const NarrowComponents: Story = {
  render: () => (
    <Styled.Narrow>
      <Styled.Sheet>
        <GrammarDemo hidden />
        <PairsDemo />
        <RolePlayDemo />
        <GapsDemo />
        <InterviewDemo />
        <CallDemo />
        <OralResultDemo />
      </Styled.Sheet>
    </Styled.Narrow>
  ),
}

function CompactCallPreview() {
  const [connected, setConnected] = useState(false)
  return (
    <ThemeProvider
      theme={withVoiceMessageLayout({
        contentWidth: '47.5rem',
        phoneWidth: '11.875rem',
        phoneHeight: '23.75rem',
      })}
    >
      <CallSimulation
        density="compact"
        contactName="Kim"
        initials="K"
        state={connected ? 'connected' : 'idle'}
        elapsedLabel=""
        caption={
          connected
            ? 'Your phone number is 984 221 517. Is that right?'
            : undefined
        }
        onCall={() => setConnected(true)}
        onHangUp={() => setConnected(false)}
        labels={{
          idle: 'Answer Kim’s call',
          call: 'Answer',
          hangUp: 'End call',
        }}
      >
        <p>Listen and correct the contact details.</p>
      </CallSimulation>
    </ThemeProvider>
  )
}
export const CompactContactCall: Story = {
  render: () => <CompactCallPreview />,
}

export const ContextualFamilyScene: Story = {
  render: () => <A103Lesson initialPageId="s4" />,
  tags: ['visual-review'],
}
export const ConversationAndComprehension: Story = {
  render: () => <A103Lesson initialPageId="s71" />,
  tags: ['visual-review'],
}

export const ReceptionMonitor: Story = {
  render: () => <A102Lesson initialPageId="s13" />,
  tags: ['visual-review'],
}
export const AskYourTeacherOnThePhone: Story = {
  render: () => <A102Lesson initialPageId="s15" />,
  tags: ['visual-review'],
}
