import { voiceMessageTranscriptLabels } from '../shared/voiceMessageLabels'
import { ThemeProvider } from 'styled-components'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { VoiceMessageExercise } from '../../../src/components/VoiceMessage/VoiceMessageExercise'
import * as Shell from '../shared/Lesson.styles'
import { MaterialSlideDeck } from '../shared/MaterialSlideDeck'
import { FreeConversationPage } from '../shared/FreeConversationPage'
import { MaterialVideoPage } from '../shared/MaterialVideoPage'
import { isUpcomingLessonPage } from '../shared/isUpcomingLessonPage'
import { LessonHomeworkGallery } from '../shared/LessonHomeworkGallery'
import { LessonNotes } from '../shared/LessonNotes'
import { LessonNotesTrigger } from '../shared/LessonNotesTrigger'
import { useLessonNotesPopup } from '../shared/useLessonNotesPopup'
import { useLessonPage } from '../shared/useLessonPage'
import { characterPortrait } from '../shared/characterPortraits'
import { lessonVoiceMessageTheme } from '../shared/deviceTheme'
import { DevToolkit } from './DevToolkit'
import {
  DevGuidedCall,
  DevTeamMeeting,
  DevOralReply,
  DevDailyConversation,
} from './DevGuidedCall'
import { RepositoryScreen, DailyBoard, TransferBoard } from './DevWork'
import { devRecordings } from './DevFirstDay.recordings'
import source from './DevFirstDay.content.json'
import video from './DevFirstDay.video.json'
import cover from './assets/cover95.png'
const voiceLabels = {
  play: 'Play voice note',
  pause: 'Pause voice note',
  replay: 'Replay voice note',
  loading: 'Loading audio',
  speed: 'Speed',
  transcript: 'Transcript',
  ...voiceMessageTranscriptLabels,
  transcriptHidden: 'Transcript after three complete listens',
  audioUnavailable: 'This recording is not available',
  audioError: 'Audio could not play. Please retry',
  retry: 'Retry audio',
  correct: 'Correct',
  incorrect: 'Try again',
  questions: 'Your reply',
  conversation: 'Conversation with Kim',
}
export const devPageIds = [
  'cover',
  'toolkit',
  'team-call',
  'access',
  'planning',
  'daily',
  'demo',
  'feedback',
  'new-situation',
  's_video131',
  'free-conversation',
  'homework',
] as const
export function DevFirstDayLesson({
  initialPageId,
}: {
  initialPageId?: string
}) {
  const [pageId, setPageId] = useLessonPage(
    initialPageId,
    source.materialKey,
    devPageIds,
  )
  const notes = useLessonNotesPopup('langy-notes:' + source.materialKey, pageId)
  const feedback = devRecordings.find((item) => item.id === source.feedback.id)!
  const pages = [
    {
      id: 'cover',
      label: source.title,
      content: (
        <SlidePage
          eyebrow="B1 · Developer English · 03"
          title={source.title}
          instruction={source.instruction}
          cover={{
            src: cover,
            alt: 'Kim welcomes you to the customer portal team from her desk',
          }}
          coverPlacement="after-heading"
          width={{ mediaAspectRatio: 16 / 9 }}
        />
      ),
    },
    {
      id: 'toolkit',
      label: 'Your work toolkit',
      content: (
        <SlidePage
          eyebrow="Vocabulary"
          title="Your work toolkit"
          instruction="Explore your desk. Click each dot to hear a work word and its example, then use it with your teacher"
          width={{ mediaAspectRatio: 16 / 9 }}
        >
          <DevToolkit active={pageId === 'toolkit'} />
        </SlidePage>
      ),
    },
    {
      id: 'team-call',
      label: 'Join your first team call',
      content: (
        <SlidePage
          eyebrow="First conversation"
          title="Join your first team call"
          instruction="Listen to Kim, introduce yourself and find out about your first task: the Login screen"
          width={{ mediaAspectRatio: 4 / 3 }}
        >
          <DevGuidedCall active={pageId === 'team-call'} />
        </SlidePage>
      ),
    },
    {
      id: 'access',
      label: 'Get access to the project',
      content: (
        <SlidePage
          density="compact"
          eyebrow="Ask for help"
          title="Get access to the project"
          columnAlignment="stretch"
          instruction="You’ve joined the team, but the repository is private. Ask your teammate (your teacher) for access"
          questions={
            <DevOralReply
              opening="Can you open the customer-portal repository?"
              cue="Explain the error and ask for access using your work email"
              hint="I can’t open… / Could you give…?"
              example="I can’t open the customer-portal repository — could you give dev@example.com access?"
            />
          }
          questionsTitle={null}
        >
          <RepositoryScreen />
        </SlidePage>
      ),
    },
    {
      id: 'planning',
      label: 'Plan the Login screen',
      content: (
        <SlidePage
          eyebrow="Planning"
          title="Plan the Login screen"
          instruction="Discuss the first version with the team. Explain your choices and agree what can be ready by Friday"
          width={{ mediaAspectRatio: 4 / 3 }}
        >
          <DevTeamMeeting active={pageId === 'planning'} mode="planning" />
        </SlidePage>
      ),
    },
    {
      id: 'daily',
      label: 'Give a useful work update',
      content: (
        <SlidePage
          density="compact"
          eyebrow="Daily update"
          title="Give a useful work update"
          columnAlignment="stretch"
          instruction="Use your Login task board to explain what is ready, what is missing and what you can do next"
          questions={<DevDailyConversation />}
          questionsTitle={null}
        >
          <DailyBoard />
        </SlidePage>
      ),
    },
    {
      id: 'demo',
      label: 'Show your Login screen to the team',
      content: (
        <SlidePage
          eyebrow="Team review"
          title="Show your Login screen to the team"
          instruction="Watch the team’s demos, then talk your teacher through your Login screen"
          columns={2}
          density="compact"
        >
          <DevTeamMeeting active={pageId === 'demo'} mode="review" />
        </SlidePage>
      ),
    },
    {
      id: 'feedback',
      label: 'Respond to feedback on your screen',
      content: (
        <SlidePage
          columns={2}
          eyebrow="After the review"
          title="Respond to feedback on your screen"
          instruction="Listen to Kim. Tell your teacher how you would reply and what you would change"
        >
          <ThemeProvider theme={lessonVoiceMessageTheme}>
            <VoiceMessageExercise
              labels={voiceLabels}
              layout="balanced"
              columnAlignment="stretch"
              active={pageId === 'feedback'}
              contact={{
                name: 'Kim',
                avatarUrl: characterPortrait('Kim'),
                status: 'online',
              }}
              greeting={{
                text: 'Here is my feedback on the Login screen',
                timestamp: '14:09',
              }}
              audio={{
                id: feedback.id,
                src: feedback.src,
                transcript: feedback.text,
                timestamp: '14:10',
              }}
              questions={[]}
              onAnswer={() => {}}
              transcriptReveal="third-listen"
              footer={
                <DevOralReply
                  opening="What did Kim suggest, and how would you respond?"
                  cue="Acknowledge Kim’s feedback and suggest what you’ll do next"
                  hint="Thanks for… / I’ll move… / Then I’ll check…"
                  example="Thanks for the feedback, Kim — I’ll make the link clearer on mobile and check it on a smaller screen"
                />
              }
            />
          </ThemeProvider>
        </SlidePage>
      ),
    },
    {
      id: 'new-situation',
      label: 'Unblock the Login demo',
      content: (
        <SlidePage
          density="compact"
          eyebrow="Before Friday’s demo"
          title="Unblock the Login demo"
          columnAlignment="stretch"
          instruction="Your Login screen is ready, but test@example.com is inactive. Ask Priya (your teacher) to activate it before Friday’s demo"
          questions={
            <DevOralReply
              opening="Can we show the Login screen in Friday’s demo?"
              cue="Explain what is blocked and ask for the help you need"
              hint="The screen is… / Could you activate…? / Once it’s active, I’ll…"
              example="The Login screen is ready, but the test account is inactive — could you activate it so I can test before Friday’s demo?"
            />
          }
          questionsTitle={null}
        >
          <TransferBoard />
        </SlidePage>
      ),
    },
    {
      id: 's_video131',
      label: video.title,
      content: (
        <MaterialVideoPage
          content={video}
          active={pageId === 's_video131'}
          preload={isUpcomingLessonPage(devPageIds, pageId, 's_video131')}
        />
      ),
    },
    {
      id: 'free-conversation',
      label: 'Free conversation',
      content: (
        <FreeConversationPage instruction="Talk about joining a team, building screens, solving problems and asking for help. Share real work experiences and follow each other’s ideas" />
      ),
    },
    {
      id: 'homework',
      label: 'Class complete — your homework',
      content: (
        <SlidePage
          columns={3}
          density="compact"
          eyebrow="After class"
          title="Class complete — your homework"
          instruction="Review twenty work and tech terms, practise six phrases, then record a short update about a screen you are building"
        >
          <LessonHomeworkGallery
            materialKey={source.materialKey}
            active={pageId === 'homework'}
          />
        </SlidePage>
      ),
    },
  ]
  return (
    <Shell.Stage>
      <MaterialSlideDeck
        label="B1 · Developer English · First day"
        pageId={pageId}
        onPageChange={setPageId}
        pages={pages}
        overlay={
          <LessonNotes
            storageKey={'langy-notes:' + source.materialKey}
            open={notes.isOpen}
            popupWindow={notes.popup}
            preview={notes.preview}
            error={notes.error}
            onClose={notes.close}
          />
        }
        actions={
          <LessonNotesTrigger
            ref={(element) => notes.trigger(element)}
            open={notes.isOpen}
            onClick={notes.open}
          />
        }
      />
    </Shell.Stage>
  )
}
