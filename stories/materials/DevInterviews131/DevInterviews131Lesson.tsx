import { ThemeProvider } from 'styled-components'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { GrammarTable } from '../../../src/components/InteractiveMaterial/GrammarTable'
import { ExercisePanel } from '../../../src/components/Exercise/ExercisePanel'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import { theme } from '../../../src/foundations/theme/theme'
import { MaterialSlideDeck } from '../shared/MaterialSlideDeck'
import { FreeConversationPage } from '../shared/FreeConversationPage'
import { MaterialVideoPage } from '../shared/MaterialVideoPage'
import { LessonHomeworkGallery } from '../shared/LessonHomeworkGallery'
import { LessonNotes } from '../shared/LessonNotes'
import { LessonNotesTrigger } from '../shared/LessonNotesTrigger'
import { useLessonNotesPopup } from '../shared/useLessonNotesPopup'
import { useLessonPage } from '../shared/useLessonPage'
import { LoginDemoScreen } from '../DevFirstDay/DevWork'
import * as Shell from '../shared/Lesson.styles'
import { DevInterviewCall } from './DevInterviewCall'
import { InterviewOralPractice } from './InterviewOralPractice'
import { InterviewVocabulary } from './InterviewVocabulary'
import { InterviewGuidedExample } from './InterviewGuidedExample'
import { InterviewRoleBrief, InterviewReference } from './InterviewReference'
import { InterviewVoiceNote } from './InterviewVoiceNote'
import source from './DevInterviews131.content.json'
import practice from './DevInterviews131.practice.json'
import video from './DevInterviews131.video.json'
import cover from './assets/cover131.webp'

export const devInterviewPageIds = [
  'cover',
  'vocabulary',
  'guided',
  'experience',
  'grammar',
  'hiring',
  'clarify',
  'technical',
  'message',
  'next-step',
  'reply',
  'video',
  'free-conversation',
  'homework',
] as const

export function DevInterviews131Lesson({
  initialPageId,
}: {
  initialPageId?: string
}) {
  const [pageId, setPageId] = useLessonPage(
    initialPageId,
    source.materialKey,
    devInterviewPageIds,
  )
  const notes = useLessonNotesPopup('langy-notes:' + source.materialKey, pageId)
  const pages = [
    {
      id: 'cover',
      label: source.title,
      content: (
        <SlidePage
          eyebrow="B1 / B2 · Developer English · 02"
          title={source.title}
          instruction={source.instruction}
          cover={{
            src: cover,
            alt: 'Ana takes part in a developer job interview with Kim over a video call',
          }}
          coverPlacement="after-heading"
          width={{ mediaAspectRatio: 16 / 9 }}
        />
      ),
    },
    {
      id: 'vocabulary',
      label: 'Words for your interview',
      content: (
        <SlidePage
          eyebrow="Vocabulary"
          title="Words for your interview"
          instruction="Describe each scene. Click to check the word and hear its example"
          width={{ vocabularyColumns: 3 }}
        >
          <InterviewVocabulary active={pageId === 'vocabulary'} />
        </SlidePage>
      ),
    },
    {
      id: 'guided',
      label: 'Explain your contribution',
      content: <InterviewGuidedExample active={pageId === 'guided'} />,
    },
    {
      id: 'experience',
      label: 'Introduce your experience',
      content: (
        <SlidePage
          eyebrow="Your experience"
          title="Introduce your experience"
          instruction="Use the example role to choose a real or practice project. Explain the purpose, your contribution and one challenge to your teacher"
          columnAlignment="stretch"
          density="compact"
          questionsTitle={null}
          questions={<InterviewOralPractice group="experience" />}
        >
          <InterviewRoleBrief />
        </SlidePage>
      ),
    },
    {
      id: 'grammar',
      label: 'Make your experience clear',
      content: (
        <SlidePage
          eyebrow="Language support"
          title="Make your experience clear"
          instruction="Compare experience until now, a completed project and a possible approach"
        >
          <Common.Stack>
            <GrammarTable
              title="Experience, actions and approaches"
              captionVisibility="screen-reader"
              layout="patterns"
              columns={{ subject: 'Meaning', verb: 'Form', example: 'Example' }}
              rows={practice.grammarRows.map((row) => ({
                id: row.id,
                subject: row.subject,
                verb: row.form,
                example: row.example,
              }))}
            />
            <InterviewReference />
          </Common.Stack>
        </SlidePage>
      ),
    },
    {
      id: 'hiring',
      label: 'Meet the hiring manager',
      content: (
        <SlidePage
          eyebrow="Interview simulation"
          title="Meet the hiring manager"
          instruction="Answer Kim one part at a time. Use a specific project example and ask a useful question about the team"
          width={{ mediaAspectRatio: 4 / 3 }}
        >
          <DevInterviewCall mode="hiring" active={pageId === 'hiring'} />
        </SlidePage>
      ),
    },
    {
      id: 'clarify',
      label: 'Clarify the Login task',
      content: (
        <SlidePage
          eyebrow="Before the technical interview"
          title="Clarify the Login task"
          instruction="The reported bug opens the portal after an incorrect password. Use the reference screen to ask your teacher about expected behavior and explain your first checks"
          columnAlignment="stretch"
          density="compact"
          questionsTitle={null}
          questions={<InterviewOralPractice group="clarify" />}
        >
          <ThemeProvider theme={theme}>
            <ExercisePanel
              variant="monitor"
              title="Customer portal · Login reference"
              screenAspectRatio={4 / 3}
            >
              <LoginDemoScreen />
            </ExercisePanel>
          </ThemeProvider>
        </SlidePage>
      ),
    },
    {
      id: 'technical',
      label: 'Think aloud with the engineer',
      content: (
        <SlidePage
          eyebrow="Technical interview simulation"
          title="Think aloud with the engineer"
          instruction="Clarify the Login bug with Priya. Explain your investigation, proposed fix and tests without writing code"
          columns={2}
          density="compact"
        >
          <DevInterviewCall mode="technical" active={pageId === 'technical'} />
        </SlidePage>
      ),
    },
    {
      id: 'message',
      label: 'Prepare for the technical interview',
      content: (
        <SlidePage
          eyebrow={`A message from ${source.notes[0]!.speaker}`}
          title="Prepare for the technical interview"
          instruction={`Read ${source.notes[0]!.speaker}’s message and listen to her first note. Explain the task and the expected behavior`}
          columns={2}
          density="compact"
        >
          <InterviewVoiceNote index={0} active={pageId === 'message'} />
        </SlidePage>
      ),
    },
    {
      id: 'next-step',
      label: 'Know the next steps',
      content: (
        <SlidePage
          eyebrow={`${source.notes[1]!.speaker}’s next voice note`}
          title="Know the next steps"
          instruction={`Listen to ${source.notes[1]!.speaker}’s second note. Explain what to prepare and when to expect feedback`}
          columns={2}
          density="compact"
        >
          <InterviewVoiceNote index={1} active={pageId === 'next-step'} />
        </SlidePage>
      ),
    },
    {
      id: 'reply',
      label: 'Confirm your interview',
      content: (
        <SlidePage
          eyebrow="Your reply"
          title="Confirm your interview"
          instruction="Your teacher is Kim. Confirm or change the time, clarify one detail and ask about the team"
        >
          <InterviewOralPractice group="transfer" />
        </SlidePage>
      ),
    },
    {
      id: 'video',
      label: video.title,
      content: (
        <MaterialVideoPage content={video} active={pageId === 'video'} />
      ),
    },
    {
      id: 'free-conversation',
      label: 'Free conversation',
      content: (
        <FreeConversationPage instruction="Talk about your projects, job interviews and working abroad. Ask each other questions, explore different approaches and follow each other’s ideas" />
      ),
    },
    {
      id: 'homework',
      label: 'Class complete — your interview practice',
      content: (
        <SlidePage
          eyebrow="After class"
          title="Class complete — your interview practice"
          instruction="Review twenty interview expressions, practise six useful phrases and send your teacher a short project introduction"
          columns={3}
          density="compact"
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
        label="B1 / B2 · Developer English · Interviews"
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
