export type ComponentLayer = 'atom' | 'molecule' | 'primitive'

type Coverage = { status: 'complete' }

export interface ComponentContract {
  browserSmoke: Coverage
  exportName: string
  interactive: boolean
  layer: ComponentLayer
  ownerPath: string
  reference: {
    propsPath: string
    documentation: { path: string; anchor: string }
    // Missing reference means not inventoried; an empty list means no example recorded.
    consumers: readonly { repository: string; path: string }[]
  }
  runtimeMarker: string
  ssrSmoke: Coverage
  story: Coverage & { path: string; title: string }
  test: Coverage & { path: string }
  visual: boolean
}

const complete = { status: 'complete' } as const
export const publicComponentContracts = [
  {
    browserSmoke: complete,
    exportName: 'ScheduleCalendar',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/ScheduleCalendar/index.tsx',
    runtimeMarker: 'lsui-sc-schedule-calendar',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/ScheduleCalendar/ScheduleCalendar.stories.tsx',
      title: 'Molecules/ScheduleCalendar',
    },
    test: {
      ...complete,
      path: 'src/molecules/ScheduleCalendar/ScheduleCalendar.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/ScheduleCalendar/types.ts',
      documentation: {
        path: 'docs/components/calendar.md',
        anchor: 'schedulecalendar',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/MonthCalendar/index.tsx',
        },
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/index.tsx',
        },
      ],
    },
    visual: true,
  },

  {
    browserSmoke: complete,
    exportName: 'FlashcardFlipButton',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/FlashcardFlipButton/index.tsx',
    runtimeMarker: 'lsui-sc-flashcard-flip-button',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/FlashcardFlipButton/FlashcardFlipButton.stories.tsx',
      title: 'Molecules/FlashcardFlipButton',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/FlashcardFlipButton/FlashcardFlipButton.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/FlashcardFlipButton/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'flashcardflipbutton',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/StudentFlashcardSession/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/FlashcardsV2.tsx',
        },
        {
          repository: 'langyspace',
          path: 'src/components/layout/FlashcardBirdShowcase/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'FlashcardAudioButton',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/FlashcardAudioButton/index.tsx',
    runtimeMarker: 'lsui-sc-flashcard-audio-button',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/FlashcardAudioButton/FlashcardAudioButton.stories.tsx',
      title: 'Molecules/FlashcardAudioButton',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/FlashcardAudioButton/FlashcardAudioButton.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/FlashcardAudioButton/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'flashcardaudiobutton',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/StudentFlashcardSession/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/FlashcardsV2.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'FlashcardWordSkeleton',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/FlashcardWordSkeleton/index.tsx',
    runtimeMarker: 'lsui-sc-flashcard-word-skeleton',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/FlashcardWordSkeleton/FlashcardWordSkeleton.stories.tsx',
      title: 'Molecules/FlashcardWordSkeleton',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/FlashcardWordSkeleton/FlashcardWordSkeleton.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/FlashcardWordSkeleton/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'flashcardwordskeleton',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/StudentFlashcardSessionSkeleton/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/FlashcardsV2.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'ShadowingWord',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/ShadowingWord/index.tsx',
    runtimeMarker: 'lsui-sc-shadowing-word',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/ShadowingWord/ShadowingWord.stories.tsx',
      title: 'Molecules/ShadowingWord',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/ShadowingWord/ShadowingWord.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/ShadowingWord/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'shadowingword',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/ShadowingPreviewSession/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
        {
          repository: 'langyspace',
          path: 'src/components/layout/ShadowingCoffeeShowcase/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'CardLink',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/CardLink/index.tsx',
    runtimeMarker: 'lsui-sc-card-link',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/CardLink/CardLink.stories.tsx',
      title: 'Molecules/CardLink',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/CardLink/CardLink.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/CardLink/types.ts',
      documentation: {
        path: 'docs/components/data-feedback.md',
        anchor: 'cardlink',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/MaterialCard/MaterialLink/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'ConnectionNotice',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/ConnectionNotice/index.tsx',
    runtimeMarker: 'lsui-sc-connection-notice',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/ConnectionNotice/ConnectionNotice.stories.tsx',
      title: 'Molecules/ConnectionNotice',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/ConnectionNotice/ConnectionNotice.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/ConnectionNotice/types.ts',
      documentation: {
        path: 'docs/components/navigation-overlays-messaging.md',
        anchor: 'connectionnotice',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/Messages/components/ConversationThread/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/StudentMessages/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'QuizBadge',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/QuizBadge/index.tsx',
    runtimeMarker: 'lsui-sc-quiz-badge',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/QuizBadge/QuizBadge.stories.tsx',
      title: 'Molecules/QuizBadge',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/QuizBadge/QuizBadge.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/QuizBadge/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'quizbadge',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/QuizPreviewSession/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'QuizMetadata',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/QuizMetadata/index.tsx',
    runtimeMarker: 'lsui-sc-quiz-metadata',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/QuizMetadata/QuizMetadata.stories.tsx',
      title: 'Molecules/QuizMetadata',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/QuizMetadata/QuizMetadata.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/QuizMetadata/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'quizmetadata',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/QuizPreviewSessionSkeleton/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'QuizPromptHeader',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/QuizPromptHeader/index.tsx',
    runtimeMarker: 'lsui-sc-quiz-prompt-header',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/QuizPromptHeader/QuizPromptHeader.stories.tsx',
      title: 'Molecules/QuizPromptHeader',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/QuizPromptHeader/QuizPromptHeader.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/QuizPromptHeader/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'quizpromptheader',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/QuizPreviewSessionSkeleton/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'FlashcardProgressSegment',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/FlashcardProgressSegment/index.tsx',
    runtimeMarker: 'lsui-sc-flashcard-progress-segment',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/FlashcardProgressSegment/FlashcardProgressSegment.stories.tsx',
      title: 'Molecules/FlashcardProgressSegment',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/FlashcardProgressSegment/FlashcardProgressSegment.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/FlashcardProgressSegment/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'flashcardprogresssegment',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/StudentFlashcardSession/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/FlashcardsV2.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'FlashcardCounter',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/FlashcardCounter/index.tsx',
    runtimeMarker: 'lsui-sc-flashcard-counter',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/FlashcardCounter/FlashcardCounter.stories.tsx',
      title: 'Molecules/FlashcardCounter',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/FlashcardCounter/FlashcardCounter.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/FlashcardCounter/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'flashcardcounter',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/StudentFlashcardSessionSkeleton/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/FlashcardsV2.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'FlashcardProgressTrack',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/FlashcardProgressTrack/index.tsx',
    runtimeMarker: 'lsui-sc-flashcard-progress-track',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/FlashcardProgressTrack/FlashcardProgressTrack.stories.tsx',
      title: 'Molecules/FlashcardProgressTrack',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/FlashcardProgressTrack/FlashcardProgressTrack.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/FlashcardProgressTrack/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'flashcardprogresstrack',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/StudentFlashcardSessionSkeleton/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/FlashcardsV2.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'QuizBlank',
    interactive: false,
    layer: 'atom',
    ownerPath: 'src/atoms/QuizBlank/index.tsx',
    runtimeMarker: 'lsui-sc-quiz-blank',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/atoms/QuizBlank/QuizBlank.stories.tsx',
      title: 'Atoms/QuizBlank',
    },
    test: {
      status: 'complete',
      path: 'src/atoms/QuizBlank/QuizBlank.test.tsx',
    },
    reference: {
      propsPath: 'src/atoms/QuizBlank/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'quizblank',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/QuizPreviewSession/utils.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'QuizQuestion',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/QuizQuestion/index.tsx',
    runtimeMarker: 'lsui-sc-quiz-question',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/QuizQuestion/QuizQuestion.stories.tsx',
      title: 'Molecules/QuizQuestion',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/QuizQuestion/QuizQuestion.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/QuizQuestion/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'quizquestion',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/QuizPreviewSessionSkeleton/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'PracticeCoverLabel',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/PracticeCoverLabel/index.tsx',
    runtimeMarker: 'lsui-sc-practice-cover-label',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/PracticeCoverLabel/PracticeCoverLabel.stories.tsx',
      title: 'Molecules/PracticeCoverLabel',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/PracticeCoverLabel/PracticeCoverLabel.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/PracticeCoverLabel/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'practicecoverlabel',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/SavedVocabularyPreviewCard/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'PracticeCoverValue',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/PracticeCoverValue/index.tsx',
    runtimeMarker: 'lsui-sc-practice-cover-value',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/PracticeCoverValue/PracticeCoverValue.stories.tsx',
      title: 'Molecules/PracticeCoverValue',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/PracticeCoverValue/PracticeCoverValue.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/PracticeCoverValue/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'practicecovervalue',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/SavedVocabularyPreviewCard/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'PracticeLevelBadge',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/PracticeLevelBadge/index.tsx',
    runtimeMarker: 'lsui-sc-practice-level-badge',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/PracticeLevelBadge/PracticeLevelBadge.stories.tsx',
      title: 'Molecules/PracticeLevelBadge',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/PracticeLevelBadge/PracticeLevelBadge.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/PracticeLevelBadge/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'practicelevelbadge',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/SavedVocabularyPreviewCard/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'PracticeCardCover',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/PracticeCardCover/index.tsx',
    runtimeMarker: 'lsui-sc-practice-card-cover',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/PracticeCardCover/PracticeCardCover.stories.tsx',
      title: 'Molecules/PracticeCardCover',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/PracticeCardCover/PracticeCardCover.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/PracticeCardCover/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'practicecardcover',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/SavedVocabularyPreviewCard/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'PracticeCard',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/PracticeCard/index.tsx',
    runtimeMarker: 'lsui-sc-practice-card',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/PracticeCard/PracticeCard.stories.tsx',
      title: 'Molecules/PracticeCard',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/PracticeCard/PracticeCard.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/PracticeCard/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'practicecard',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/SavedVocabularyPreviewCard/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'ScheduleRow',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/ScheduleRow/index.tsx',
    runtimeMarker: 'lsui-sc-schedule-row',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/ScheduleRow/ScheduleRow.stories.tsx',
      title: 'Molecules/ScheduleRow',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/ScheduleRow/ScheduleRow.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/ScheduleRow/types.ts',
      documentation: {
        path: 'docs/components/data-feedback.md',
        anchor: 'schedulerow',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/ClassRow/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'CalendarTimeSlot',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/CalendarTimeSlot/index.tsx',
    runtimeMarker: 'lsui-sc-calendar-time-slot',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/CalendarTimeSlot/CalendarTimeSlot.stories.tsx',
      title: 'Molecules/CalendarTimeSlot',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/CalendarTimeSlot/CalendarTimeSlot.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/CalendarTimeSlot/types.ts',
      documentation: {
        path: 'docs/components/calendar.md',
        anchor: 'calendartimeslot',
      },
      consumers: [
        {
          repository: 'langyspace-ui',
          path: 'src/molecules/ScheduleCalendar/Week.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'SessionProgress',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/SessionProgress/index.tsx',
    runtimeMarker: 'lsui-sc-session-progress',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/SessionProgress/SessionProgress.stories.tsx',
      title: 'Molecules/SessionProgress',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/SessionProgress/SessionProgress.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/SessionProgress/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'sessionprogress',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/ShadowingPreviewSessionSkeleton/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'PageDescription',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/PageDescription/index.tsx',
    runtimeMarker: 'lsui-sc-page-description',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/PageDescription/PageDescription.stories.tsx',
      title: 'Molecules/PageDescription',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/PageDescription/PageDescription.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/PageDescription/types.ts',
      documentation: {
        path: 'docs/components/data-feedback.md',
        anchor: 'pagedescription',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/Topbar/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'PageTitle',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/PageTitle/index.tsx',
    runtimeMarker: 'lsui-sc-page-title',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/PageTitle/PageTitle.stories.tsx',
      title: 'Molecules/PageTitle',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/PageTitle/PageTitle.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/PageTitle/types.ts',
      documentation: {
        path: 'docs/components/data-feedback.md',
        anchor: 'pagetitle',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/Topbar/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/AdminPageChrome.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'AuthLegalText',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/AuthLegalText/index.tsx',
    runtimeMarker: 'lsui-sc-auth-legal-text',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/AuthLegalText/AuthLegalText.stories.tsx',
      title: 'Molecules/AuthLegalText',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/AuthLegalText/AuthLegalText.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/AuthLegalText/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'authlegaltext',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/RegisterTeacher/sections/DetailsStep/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/RegisterStudent/sections/DetailsStep/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'AuthTokenLabel',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/AuthTokenLabel/index.tsx',
    runtimeMarker: 'lsui-sc-auth-token-label',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/AuthTokenLabel/AuthTokenLabel.stories.tsx',
      title: 'Molecules/AuthTokenLabel',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/AuthTokenLabel/AuthTokenLabel.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/AuthTokenLabel/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'authtokenlabel',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/Login/sections/TokenStep/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/Login/sections/TokenStep/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'AuthChannelIcon',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/AuthChannelIcon/index.tsx',
    runtimeMarker: 'lsui-sc-auth-channel-icon',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/AuthChannelIcon/AuthChannelIcon.stories.tsx',
      title: 'Molecules/AuthChannelIcon',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/AuthChannelIcon/AuthChannelIcon.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/AuthChannelIcon/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'authchannelicon',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/Login/sections/PhoneStep/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/Login/sections/PhoneStep/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'AuthChannelHint',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/AuthChannelHint/index.tsx',
    runtimeMarker: 'lsui-sc-auth-channel-hint',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/AuthChannelHint/AuthChannelHint.stories.tsx',
      title: 'Molecules/AuthChannelHint',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/AuthChannelHint/AuthChannelHint.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/AuthChannelHint/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'authchannelhint',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/Login/sections/PhoneStep/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/Login/sections/PhoneStep/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'ShadowingRepetitions',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/ShadowingRepetitions/index.tsx',
    runtimeMarker: 'lsui-sc-shadowing-repetitions',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/ShadowingRepetitions/ShadowingRepetitions.stories.tsx',
      title: 'Molecules/ShadowingRepetitions',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/ShadowingRepetitions/ShadowingRepetitions.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/ShadowingRepetitions/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'shadowingrepetitions',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/ShadowingPreviewSessionSkeleton/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'Skeleton',
    interactive: false,
    layer: 'primitive',
    ownerPath: 'src/primitives/Skeleton/index.tsx',
    runtimeMarker: 'lsui-sc-skeleton',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/primitives/Skeleton/Skeleton.stories.tsx',
      title: 'Primitives/Skeleton',
    },
    test: {
      status: 'complete',
      path: 'src/primitives/Skeleton/Skeleton.test.tsx',
    },
    reference: {
      propsPath: 'src/primitives/Skeleton/types.ts',
      documentation: {
        path: 'docs/components/data-feedback.md',
        anchor: 'skeleton',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/PracticePreviewCardSkeleton/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/StudentClasses/index.tsx',
        },
        {
          repository: 'langyspace-cupom',
          path: 'src/pages/CouponMetricsPage/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'ChoiceCard',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/ChoiceCard/index.tsx',
    runtimeMarker: 'lsui-sc-choice-card',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/ChoiceCard/ChoiceCard.stories.tsx',
      title: 'Molecules/ChoiceCard',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/ChoiceCard/ChoiceCard.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/ChoiceCard/types.ts',
      documentation: {
        path: 'docs/components/controls.md',
        anchor: 'choicecard',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/base/AvailabilityPeriodSelector/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'ToggleButton',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/ToggleButton/index.tsx',
    runtimeMarker: 'lsui-sc-toggle-button',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/ToggleButton/ToggleButton.stories.tsx',
      title: 'Molecules/ToggleButton',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/ToggleButton/ToggleButton.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/ToggleButton/types.ts',
      documentation: {
        path: 'docs/components/controls.md',
        anchor: 'togglebutton',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/base/AvailabilityDaySelector/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'RadioButton',
    interactive: true,
    layer: 'atom',
    ownerPath: 'src/atoms/RadioButton/index.tsx',
    runtimeMarker: 'lsui-sc-radio-button',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/atoms/RadioButton/RadioButton.stories.tsx',
      title: 'Atoms/RadioButton',
    },
    test: {
      status: 'complete',
      path: 'src/atoms/RadioButton/RadioButton.test.tsx',
    },
    reference: {
      propsPath: 'src/atoms/RadioButton/types.ts',
      documentation: {
        path: 'docs/components/controls.md',
        anchor: 'radiobutton',
      },
      consumers: [
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'Checkbox',
    interactive: true,
    layer: 'atom',
    ownerPath: 'src/atoms/Checkbox/index.tsx',
    runtimeMarker: 'lsui-sc-checkbox',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/atoms/Checkbox/Checkbox.stories.tsx',
      title: 'Atoms/Checkbox',
    },
    test: {
      status: 'complete',
      path: 'src/atoms/Checkbox/Checkbox.test.tsx',
    },
    reference: {
      propsPath: 'src/atoms/Checkbox/types.ts',
      documentation: {
        path: 'docs/components/controls.md',
        anchor: 'checkbox',
      },
      consumers: [
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'WeeklyCountChart',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/WeeklyCountChart/index.tsx',
    runtimeMarker: 'lsui-sc-weekly-count-chart',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/WeeklyCountChart/WeeklyCountChart.stories.tsx',
      title: 'Molecules/WeeklyCountChart',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/WeeklyCountChart/WeeklyCountChart.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/WeeklyCountChart/types.ts',
      documentation: {
        path: 'docs/components/data-feedback.md',
        anchor: 'weeklycountchart',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/WeeklyBarChart/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'GroupedBarChart',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/GroupedBarChart/index.tsx',
    runtimeMarker: 'lsui-sc-grouped-bar-chart',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/GroupedBarChart/GroupedBarChart.stories.tsx',
      title: 'Molecules/GroupedBarChart',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/GroupedBarChart/GroupedBarChart.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/GroupedBarChart/types.ts',
      documentation: {
        path: 'docs/components/data-feedback.md',
        anchor: 'groupedbarchart',
      },
      consumers: [
        {
          repository: 'langyspace-cupom',
          path: 'src/pages/CouponMetricsPage/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'KeyValueList',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/KeyValueList/index.tsx',
    runtimeMarker: 'lsui-sc-key-value-list',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/KeyValueList/KeyValueList.stories.tsx',
      title: 'Molecules/KeyValueList',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/KeyValueList/KeyValueList.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/KeyValueList/types.ts',
      documentation: {
        path: 'docs/components/data-feedback.md',
        anchor: 'keyvaluelist',
      },
      consumers: [
        {
          repository: 'langyspace-cupom',
          path: 'src/pages/CouponMetricsPage/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'ShadowingControlCluster',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/ShadowingControlCluster/index.tsx',
    runtimeMarker: 'lsui-sc-shadowing-control-cluster',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/ShadowingControlCluster/ShadowingControlCluster.stories.tsx',
      title: 'Molecules/ShadowingControlCluster',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/ShadowingControlCluster/ShadowingControlCluster.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/ShadowingControlCluster/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'shadowingcontrolcluster',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/ShadowingPreviewSessionSkeleton/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'ShadowingControlDock',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/ShadowingControlDock/index.tsx',
    runtimeMarker: 'lsui-sc-shadowing-control-dock',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/ShadowingControlDock/ShadowingControlDock.stories.tsx',
      title: 'Molecules/ShadowingControlDock',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/ShadowingControlDock/ShadowingControlDock.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/ShadowingControlDock/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'shadowingcontroldock',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/ShadowingPreviewSessionSkeleton/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
        {
          repository: 'langyspace',
          path: 'src/components/layout/ShadowingCoffeeShowcase/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'ShadowingTranslation',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/ShadowingTranslation/index.tsx',
    runtimeMarker: 'lsui-sc-shadowing-translation',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/ShadowingTranslation/ShadowingTranslation.stories.tsx',
      title: 'Molecules/ShadowingTranslation',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/ShadowingTranslation/ShadowingTranslation.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/ShadowingTranslation/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'shadowingtranslation',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/ShadowingPreviewSessionSkeleton/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'ShadowingActivePhrase',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/ShadowingActivePhrase/index.tsx',
    runtimeMarker: 'lsui-sc-shadowing-active-phrase',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/ShadowingActivePhrase/ShadowingActivePhrase.stories.tsx',
      title: 'Molecules/ShadowingActivePhrase',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/ShadowingActivePhrase/ShadowingActivePhrase.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/ShadowingActivePhrase/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'shadowingactivephrase',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/ShadowingPreviewSessionSkeleton/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
        {
          repository: 'langyspace',
          path: 'src/components/layout/ShadowingCoffeeShowcase/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'ShadowingContextPhrase',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/ShadowingContextPhrase/index.tsx',
    runtimeMarker: 'lsui-sc-shadowing-context-phrase',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/ShadowingContextPhrase/ShadowingContextPhrase.stories.tsx',
      title: 'Molecules/ShadowingContextPhrase',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/ShadowingContextPhrase/ShadowingContextPhrase.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/ShadowingContextPhrase/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'shadowingcontextphrase',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/ShadowingPreviewSession/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
        {
          repository: 'langyspace',
          path: 'src/components/layout/ShadowingCoffeeShowcase/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'ShadowingPhraseStack',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/ShadowingPhraseStack/index.tsx',
    runtimeMarker: 'lsui-sc-shadowing-phrase-stack',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/ShadowingPhraseStack/ShadowingPhraseStack.stories.tsx',
      title: 'Molecules/ShadowingPhraseStack',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/ShadowingPhraseStack/ShadowingPhraseStack.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/ShadowingPhraseStack/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'shadowingphrasestack',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/ShadowingPreviewSessionSkeleton/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
        {
          repository: 'langyspace',
          path: 'src/components/layout/ShadowingCoffeeShowcase/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'ShadowingReader',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/ShadowingReader/index.tsx',
    runtimeMarker: 'lsui-sc-shadowing-reader',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/ShadowingReader/ShadowingReader.stories.tsx',
      title: 'Molecules/ShadowingReader',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/ShadowingReader/ShadowingReader.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/ShadowingReader/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'shadowingreader',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/ShadowingPreviewSessionSkeleton/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
        {
          repository: 'langyspace',
          path: 'src/components/layout/ShadowingCoffeeShowcase/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'FlashcardFeedback',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/FlashcardFeedback/index.tsx',
    runtimeMarker: 'lsui-sc-flashcard-feedback',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/FlashcardFeedback/FlashcardFeedback.stories.tsx',
      title: 'Molecules/FlashcardFeedback',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/FlashcardFeedback/FlashcardFeedback.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/FlashcardFeedback/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'flashcardfeedback',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/StudentFlashcardSession/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/FlashcardsV2.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'FlashcardSwiper',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/FlashcardSwiper/index.tsx',
    runtimeMarker: 'lsui-sc-flashcard-swiper',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/FlashcardSwiper/FlashcardSwiper.stories.tsx',
      title: 'Molecules/FlashcardSwiper',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/FlashcardSwiper/FlashcardSwiper.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/FlashcardSwiper/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'flashcardswiper',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/StudentFlashcardSessionSkeleton/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/FlashcardsV2.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'FlashcardFlip',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/FlashcardFlip/index.tsx',
    runtimeMarker: 'lsui-sc-flashcard-flip',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/FlashcardFlip/FlashcardFlip.stories.tsx',
      title: 'Molecules/FlashcardFlip',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/FlashcardFlip/FlashcardFlip.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/FlashcardFlip/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'flashcardflip',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/StudentFlashcardSessionSkeleton/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/FlashcardsV2.tsx',
        },
        {
          repository: 'langyspace',
          path: 'src/components/layout/FlashcardBirdShowcase/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'FlashcardGhost',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/FlashcardGhost/index.tsx',
    runtimeMarker: 'lsui-sc-flashcard-ghost',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/FlashcardGhost/FlashcardGhost.stories.tsx',
      title: 'Molecules/FlashcardGhost',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/FlashcardGhost/FlashcardGhost.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/FlashcardGhost/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'flashcardghost',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/StudentFlashcardSessionSkeleton/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/FlashcardsV2.tsx',
        },
        {
          repository: 'langyspace',
          path: 'src/components/layout/FlashcardBirdShowcase/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'FlashcardFace',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/FlashcardFace/index.tsx',
    runtimeMarker: 'lsui-sc-flashcard-face',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/FlashcardFace/FlashcardFace.stories.tsx',
      title: 'Molecules/FlashcardFace',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/FlashcardFace/FlashcardFace.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/FlashcardFace/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'flashcardface',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/StudentFlashcardSessionSkeleton/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/FlashcardsV2.tsx',
        },
        {
          repository: 'langyspace',
          path: 'src/components/layout/FlashcardBirdShowcase/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'FlashcardFlipHint',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/FlashcardFlipHint/index.tsx',
    runtimeMarker: 'lsui-sc-flashcard-flip-hint',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/FlashcardFlipHint/FlashcardFlipHint.stories.tsx',
      title: 'Molecules/FlashcardFlipHint',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/FlashcardFlipHint/FlashcardFlipHint.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/FlashcardFlipHint/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'flashcardfliphint',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/StudentFlashcardSessionSkeleton/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/FlashcardsV2.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'FlashcardBack',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/FlashcardBack/index.tsx',
    runtimeMarker: 'lsui-sc-flashcard-back',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/FlashcardBack/FlashcardBack.stories.tsx',
      title: 'Molecules/FlashcardBack',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/FlashcardBack/FlashcardBack.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/FlashcardBack/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'flashcardback',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/StudentFlashcardSession/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/FlashcardsV2.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'FlashcardWord',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/FlashcardWord/index.tsx',
    runtimeMarker: 'lsui-sc-flashcard-word',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/FlashcardWord/FlashcardWord.stories.tsx',
      title: 'Molecules/FlashcardWord',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/FlashcardWord/FlashcardWord.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/FlashcardWord/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'flashcardword',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/StudentFlashcardSession/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/FlashcardsV2.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'FlashcardImagePanel',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/FlashcardImagePanel/index.tsx',
    runtimeMarker: 'lsui-sc-flashcard-image-panel',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/FlashcardImagePanel/FlashcardImagePanel.stories.tsx',
      title: 'Molecules/FlashcardImagePanel',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/FlashcardImagePanel/FlashcardImagePanel.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/FlashcardImagePanel/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'flashcardimagepanel',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/StudentFlashcardSession/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/FlashcardsV2.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'FlashcardFront',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/FlashcardFront/index.tsx',
    runtimeMarker: 'lsui-sc-flashcard-front',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/FlashcardFront/FlashcardFront.stories.tsx',
      title: 'Molecules/FlashcardFront',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/FlashcardFront/FlashcardFront.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/FlashcardFront/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'flashcardfront',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/StudentFlashcardSessionSkeleton/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/FlashcardsV2.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'FlashcardDeck',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/FlashcardDeck/index.tsx',
    runtimeMarker: 'lsui-sc-flashcard-deck',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/FlashcardDeck/FlashcardDeck.stories.tsx',
      title: 'Molecules/FlashcardDeck',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/FlashcardDeck/FlashcardDeck.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/FlashcardDeck/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'flashcarddeck',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/StudentFlashcardSessionSkeleton/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/FlashcardsV2.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'FlashcardStage',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/FlashcardStage/index.tsx',
    runtimeMarker: 'lsui-sc-flashcard-stage',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/FlashcardStage/FlashcardStage.stories.tsx',
      title: 'Molecules/FlashcardStage',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/FlashcardStage/FlashcardStage.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/FlashcardStage/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'flashcardstage',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/StudentFlashcardSessionSkeleton/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/FlashcardsV2.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'FlashcardFrame',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/FlashcardFrame/index.tsx',
    runtimeMarker: 'lsui-sc-flashcard-frame',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/FlashcardFrame/FlashcardFrame.stories.tsx',
      title: 'Molecules/FlashcardFrame',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/FlashcardFrame/FlashcardFrame.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/FlashcardFrame/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'flashcardframe',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/StudentFlashcardSessionSkeleton/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/FlashcardsV2.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'TimelineEvent',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/TimelineEvent/index.tsx',
    runtimeMarker: 'lsui-sc-timeline-event',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/TimelineEvent/TimelineEvent.stories.tsx',
      title: 'Molecules/TimelineEvent',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/TimelineEvent/TimelineEvent.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/TimelineEvent/types.ts',
      documentation: {
        path: 'docs/components/calendar.md',
        anchor: 'timelineevent',
      },
      consumers: [
        {
          repository: 'langyspace-ui',
          path: 'src/molecules/ScheduleCalendar/Week.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'CalendarEvent',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/CalendarEvent/index.tsx',
    runtimeMarker: 'lsui-sc-calendar-event',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/CalendarEvent/CalendarEvent.stories.tsx',
      title: 'Molecules/CalendarEvent',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/CalendarEvent/CalendarEvent.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/CalendarEvent/types.ts',
      documentation: {
        path: 'docs/components/calendar.md',
        anchor: 'calendarevent',
      },
      consumers: [
        {
          repository: 'langyspace-ui',
          path: 'src/molecules/ScheduleCalendar/Month.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'CalendarDayNumber',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/CalendarDayNumber/index.tsx',
    runtimeMarker: 'lsui-sc-calendar-day-number',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/CalendarDayNumber/CalendarDayNumber.stories.tsx',
      title: 'Molecules/CalendarDayNumber',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/CalendarDayNumber/CalendarDayNumber.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/CalendarDayNumber/types.ts',
      documentation: {
        path: 'docs/components/calendar.md',
        anchor: 'calendardaynumber',
      },
      consumers: [
        {
          repository: 'langyspace-ui',
          path: 'src/molecules/ScheduleCalendar/Month.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'CalendarDay',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/CalendarDay/index.tsx',
    runtimeMarker: 'lsui-sc-calendar-day',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/CalendarDay/CalendarDay.stories.tsx',
      title: 'Molecules/CalendarDay',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/CalendarDay/CalendarDay.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/CalendarDay/types.ts',
      documentation: {
        path: 'docs/components/calendar.md',
        anchor: 'calendarday',
      },
      consumers: [
        {
          repository: 'langyspace-ui',
          path: 'src/molecules/ScheduleCalendar/Month.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'CalendarWeekGrid',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/CalendarWeekGrid/index.tsx',
    runtimeMarker: 'lsui-sc-calendar-week-grid',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/CalendarWeekGrid/CalendarWeekGrid.stories.tsx',
      title: 'Molecules/CalendarWeekGrid',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/CalendarWeekGrid/CalendarWeekGrid.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/CalendarWeekGrid/types.ts',
      documentation: {
        path: 'docs/components/calendar.md',
        anchor: 'calendarweekgrid',
      },
      consumers: [
        {
          repository: 'langyspace-ui',
          path: 'src/molecules/ScheduleCalendar/Week.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'CalendarMonthGrid',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/CalendarMonthGrid/index.tsx',
    runtimeMarker: 'lsui-sc-calendar-month-grid',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/CalendarMonthGrid/CalendarMonthGrid.stories.tsx',
      title: 'Molecules/CalendarMonthGrid',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/CalendarMonthGrid/CalendarMonthGrid.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/CalendarMonthGrid/types.ts',
      documentation: {
        path: 'docs/components/calendar.md',
        anchor: 'calendarmonthgrid',
      },
      consumers: [
        {
          repository: 'langyspace-ui',
          path: 'src/molecules/ScheduleCalendar/Month.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'CalendarScroller',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/CalendarScroller/index.tsx',
    runtimeMarker: 'lsui-sc-calendar-scroller',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/CalendarScroller/CalendarScroller.stories.tsx',
      title: 'Molecules/CalendarScroller',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/CalendarScroller/CalendarScroller.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/CalendarScroller/types.ts',
      documentation: {
        path: 'docs/components/calendar.md',
        anchor: 'calendarscroller',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/CalendarScroller/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'BottomNavigationLink',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/BottomNavigationLink/index.tsx',
    runtimeMarker: 'lsui-sc-bottom-navigation-link',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/BottomNavigationLink/BottomNavigationLink.stories.tsx',
      title: 'Molecules/BottomNavigationLink',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/BottomNavigationLink/BottomNavigationLink.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/BottomNavigationLink/types.ts',
      documentation: {
        path: 'docs/components/navigation-overlays-messaging.md',
        anchor: 'bottomnavigationlink',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/TeacherBottomNavigation/BottomAnchor.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'BottomNavigation',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/BottomNavigation/index.tsx',
    runtimeMarker: 'lsui-sc-bottom-navigation',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/BottomNavigation/BottomNavigation.stories.tsx',
      title: 'Molecules/BottomNavigation',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/BottomNavigation/BottomNavigation.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/BottomNavigation/types.ts',
      documentation: {
        path: 'docs/components/navigation-overlays-messaging.md',
        anchor: 'bottomnavigation',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/TeacherBottomNavigation/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'ConversationRow',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/ConversationRow/index.tsx',
    runtimeMarker: 'lsui-sc-conversation-row',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/ConversationRow/ConversationRow.stories.tsx',
      title: 'Molecules/ConversationRow',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/ConversationRow/ConversationRow.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/ConversationRow/types.ts',
      documentation: {
        path: 'docs/components/navigation-overlays-messaging.md',
        anchor: 'conversationrow',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/Messages/components/ConversationList/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'NotificationItem',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/NotificationItem/index.tsx',
    runtimeMarker: 'lsui-sc-notification-item',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/NotificationItem/NotificationItem.stories.tsx',
      title: 'Molecules/NotificationItem',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/NotificationItem/NotificationItem.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/NotificationItem/types.ts',
      documentation: {
        path: 'docs/components/navigation-overlays-messaging.md',
        anchor: 'notificationitem',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/NotificationDrawer/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'NavigationButton',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/NavigationButton/index.tsx',
    runtimeMarker: 'lsui-sc-navigation-button',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/NavigationButton/NavigationButton.stories.tsx',
      title: 'Molecules/NavigationButton',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/NavigationButton/NavigationButton.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/NavigationButton/types.ts',
      documentation: {
        path: 'docs/components/navigation-overlays-messaging.md',
        anchor: 'navigationbutton',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/Sidebar/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/layout/Sidebar/index.tsx',
        },
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/AdminPageChrome.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'NavigationLink',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/NavigationLink/index.tsx',
    runtimeMarker: 'lsui-sc-navigation-link',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/NavigationLink/NavigationLink.stories.tsx',
      title: 'Molecules/NavigationLink',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/NavigationLink/NavigationLink.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/NavigationLink/types.ts',
      documentation: {
        path: 'docs/components/navigation-overlays-messaging.md',
        anchor: 'navigationlink',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/Sidebar/NavigationAnchor.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/layout/Sidebar/NavigationAnchor.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'SidebarNavigation',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/SidebarNavigation/index.tsx',
    runtimeMarker: 'lsui-sc-sidebar-navigation',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/SidebarNavigation/SidebarNavigation.stories.tsx',
      title: 'Molecules/SidebarNavigation',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/SidebarNavigation/SidebarNavigation.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/SidebarNavigation/types.ts',
      documentation: {
        path: 'docs/components/navigation-overlays-messaging.md',
        anchor: 'sidebarnavigation',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/Sidebar/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/layout/Sidebar/index.tsx',
        },
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/AdminPageChrome.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'SidebarFrame',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/SidebarFrame/index.tsx',
    runtimeMarker: 'lsui-sc-sidebar-frame',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/SidebarFrame/SidebarFrame.stories.tsx',
      title: 'Molecules/SidebarFrame',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/SidebarFrame/SidebarFrame.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/SidebarFrame/types.ts',
      documentation: {
        path: 'docs/components/navigation-overlays-messaging.md',
        anchor: 'sidebarframe',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/Sidebar/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/layout/Sidebar/index.tsx',
        },
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/AdminPageChrome.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'MetricLabel',
    interactive: false,
    layer: 'atom',
    ownerPath: 'src/atoms/MetricLabel/index.tsx',
    runtimeMarker: 'lsui-sc-metric-label',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/atoms/MetricLabel/MetricLabel.stories.tsx',
      title: 'Atoms/MetricLabel',
    },
    test: {
      status: 'complete',
      path: 'src/atoms/MetricLabel/MetricLabel.test.tsx',
    },
    reference: {
      propsPath: 'src/atoms/MetricLabel/types.ts',
      documentation: {
        path: 'docs/components/data-feedback.md',
        anchor: 'metriclabel',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/QuizPreviewSession/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'MetricValue',
    interactive: false,
    layer: 'atom',
    ownerPath: 'src/atoms/MetricValue/index.tsx',
    runtimeMarker: 'lsui-sc-metric-value',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/atoms/MetricValue/MetricValue.stories.tsx',
      title: 'Atoms/MetricValue',
    },
    test: {
      status: 'complete',
      path: 'src/atoms/MetricValue/MetricValue.test.tsx',
    },
    reference: {
      propsPath: 'src/atoms/MetricValue/types.ts',
      documentation: {
        path: 'docs/components/data-feedback.md',
        anchor: 'metricvalue',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/QuizPreviewSession/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'MetricSummary',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/MetricSummary/index.tsx',
    runtimeMarker: 'lsui-sc-metric-summary',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/MetricSummary/MetricSummary.stories.tsx',
      title: 'Molecules/MetricSummary',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/MetricSummary/MetricSummary.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/MetricSummary/types.ts',
      documentation: {
        path: 'docs/components/data-feedback.md',
        anchor: 'metricsummary',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/QuizPreviewSession/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'TextButton',
    interactive: true,
    layer: 'atom',
    ownerPath: 'src/atoms/TextButton/index.tsx',
    runtimeMarker: 'lsui-sc-text-button',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/atoms/TextButton/TextButton.stories.tsx',
      title: 'Atoms/TextButton',
    },
    test: {
      status: 'complete',
      path: 'src/atoms/TextButton/TextButton.test.tsx',
    },
    reference: {
      propsPath: 'src/atoms/TextButton/types.ts',
      documentation: {
        path: 'docs/components/controls.md',
        anchor: 'textbutton',
      },
      consumers: [
        {
          repository: 'langyspace-student',
          path: 'src/pages/StudentPayment/index.tsx',
        },
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/PortalAction.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'DetailRow',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/DetailRow/index.tsx',
    runtimeMarker: 'lsui-sc-detail-row',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/DetailRow/DetailRow.stories.tsx',
      title: 'Molecules/DetailRow',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/DetailRow/DetailRow.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/DetailRow/types.ts',
      documentation: {
        path: 'docs/components/data-feedback.md',
        anchor: 'detailrow',
      },
      consumers: [
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'DefinitionItem',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/DefinitionItem/index.tsx',
    runtimeMarker: 'lsui-sc-definition-item',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/DefinitionItem/DefinitionItem.stories.tsx',
      title: 'Molecules/DefinitionItem',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/DefinitionItem/DefinitionItem.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/DefinitionItem/types.ts',
      documentation: {
        path: 'docs/components/data-feedback.md',
        anchor: 'definitionitem',
      },
      consumers: [
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/StudentCommunicationDrawer/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'StatAction',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/StatAction/index.tsx',
    runtimeMarker: 'lsui-sc-stat-action',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/StatAction/StatAction.stories.tsx',
      title: 'Molecules/StatAction',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/StatAction/StatAction.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/StatAction/types.ts',
      documentation: {
        path: 'docs/components/data-feedback.md',
        anchor: 'stataction',
      },
      consumers: [
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'StatLabel',
    interactive: false,
    layer: 'atom',
    ownerPath: 'src/atoms/StatLabel/index.tsx',
    runtimeMarker: 'lsui-sc-stat-label',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/atoms/StatLabel/StatLabel.stories.tsx',
      title: 'Atoms/StatLabel',
    },
    test: {
      status: 'complete',
      path: 'src/atoms/StatLabel/StatLabel.test.tsx',
    },
    reference: {
      propsPath: 'src/atoms/StatLabel/types.ts',
      documentation: {
        path: 'docs/components/data-feedback.md',
        anchor: 'statlabel',
      },
      consumers: [
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'StatValue',
    interactive: false,
    layer: 'atom',
    ownerPath: 'src/atoms/StatValue/index.tsx',
    runtimeMarker: 'lsui-sc-stat-value',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/atoms/StatValue/StatValue.stories.tsx',
      title: 'Atoms/StatValue',
    },
    test: {
      status: 'complete',
      path: 'src/atoms/StatValue/StatValue.test.tsx',
    },
    reference: {
      propsPath: 'src/atoms/StatValue/types.ts',
      documentation: {
        path: 'docs/components/data-feedback.md',
        anchor: 'statvalue',
      },
      consumers: [
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'StatCard',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/StatCard/index.tsx',
    runtimeMarker: 'lsui-sc-stat-card',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/StatCard/StatCard.stories.tsx',
      title: 'Molecules/StatCard',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/StatCard/StatCard.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/StatCard/types.ts',
      documentation: {
        path: 'docs/components/data-feedback.md',
        anchor: 'statcard',
      },
      consumers: [
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'InlineNotice',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/InlineNotice/index.tsx',
    runtimeMarker: 'lsui-sc-inline-notice',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/InlineNotice/InlineNotice.stories.tsx',
      title: 'Molecules/InlineNotice',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/InlineNotice/InlineNotice.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/InlineNotice/types.ts',
      documentation: {
        path: 'docs/components/data-feedback.md',
        anchor: 'inlinenotice',
      },
      consumers: [
        {
          repository: 'langyspace-student',
          path: 'src/pages/StudentClasses/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'FileInput',
    interactive: true,
    layer: 'atom',
    ownerPath: 'src/atoms/FileInput/index.tsx',
    runtimeMarker: 'lsui-sc-file-input',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/atoms/FileInput/FileInput.stories.tsx',
      title: 'Atoms/FileInput',
    },
    test: {
      status: 'complete',
      path: 'src/atoms/FileInput/FileInput.test.tsx',
    },
    reference: {
      propsPath: 'src/atoms/FileInput/types.ts',
      documentation: {
        path: 'docs/components/controls.md',
        anchor: 'fileinput',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/Payouts/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'FilterSelect',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/FilterSelect/index.tsx',
    runtimeMarker: 'lsui-sc-filter-select',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/FilterSelect/FilterSelect.stories.tsx',
      title: 'Molecules/FilterSelect',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/FilterSelect/FilterSelect.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/FilterSelect/types.ts',
      documentation: {
        path: 'docs/components/navigation-overlays-messaging.md',
        anchor: 'filterselect',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/Materials/index.tsx',
        },
        {
          repository: 'langyspace-admin',
          path: 'src/components/base/FilterSelect/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'FormActions',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/FormActions/index.tsx',
    runtimeMarker: 'lsui-sc-form-actions',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/FormActions/FormActions.stories.tsx',
      title: 'Molecules/FormActions',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/FormActions/FormActions.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/FormActions/types.ts',
      documentation: {
        path: 'docs/components/controls.md',
        anchor: 'formactions',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/ProblemReportDrawer/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/StudentProfile/Edit.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'FormError',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/FormError/index.tsx',
    runtimeMarker: 'lsui-sc-form-error',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/FormError/FormError.stories.tsx',
      title: 'Molecules/FormError',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/FormError/FormError.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/FormError/types.ts',
      documentation: {
        path: 'docs/components/controls.md',
        anchor: 'formerror',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/ProblemReportDrawer/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/StudentProfile/ProblemReportDrawer.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'FieldCounter',
    interactive: false,
    layer: 'atom',
    ownerPath: 'src/atoms/FieldCounter/index.tsx',
    runtimeMarker: 'lsui-sc-field-counter',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/atoms/FieldCounter/FieldCounter.stories.tsx',
      title: 'Atoms/FieldCounter',
    },
    test: {
      status: 'complete',
      path: 'src/atoms/FieldCounter/FieldCounter.test.tsx',
    },
    reference: {
      propsPath: 'src/atoms/FieldCounter/types.ts',
      documentation: {
        path: 'docs/components/controls.md',
        anchor: 'fieldcounter',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/ProblemReportDrawer/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/StudentProfile/ProblemReportDrawer.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'FieldLabelRow',
    interactive: false,
    layer: 'atom',
    ownerPath: 'src/atoms/FieldLabelRow/index.tsx',
    runtimeMarker: 'lsui-sc-field-label-row',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/atoms/FieldLabelRow/FieldLabelRow.stories.tsx',
      title: 'Atoms/FieldLabelRow',
    },
    test: {
      status: 'complete',
      path: 'src/atoms/FieldLabelRow/FieldLabelRow.test.tsx',
    },
    reference: {
      propsPath: 'src/atoms/FieldLabelRow/types.ts',
      documentation: {
        path: 'docs/components/controls.md',
        anchor: 'fieldlabelrow',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/ProblemReportDrawer/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/StudentProfile/ProblemReportDrawer.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'FormStack',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/FormStack/index.tsx',
    runtimeMarker: 'lsui-sc-form-stack',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/FormStack/FormStack.stories.tsx',
      title: 'Molecules/FormStack',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/FormStack/FormStack.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/FormStack/types.ts',
      documentation: {
        path: 'docs/components/controls.md',
        anchor: 'formstack',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/ProblemReportDrawer/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/StudentProfile/ProblemReportDrawer.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'DocumentNavigationLink',
    interactive: true,
    layer: 'atom',
    ownerPath: 'src/atoms/DocumentNavigationLink/index.tsx',
    runtimeMarker: 'lsui-sc-document-navigation-link',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/atoms/DocumentNavigationLink/DocumentNavigationLink.stories.tsx',
      title: 'Atoms/DocumentNavigationLink',
    },
    test: {
      status: 'complete',
      path: 'src/atoms/DocumentNavigationLink/DocumentNavigationLink.test.tsx',
    },
    reference: {
      propsPath: 'src/atoms/DocumentNavigationLink/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'documentnavigationlink',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/LegalPage/links/DocumentAnchor/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/LegalPage/links/DocumentAnchor/index.tsx',
        },
        {
          repository: 'langyspace',
          path: 'src/pages/LegalPage/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'BrandLink',
    interactive: true,
    layer: 'atom',
    ownerPath: 'src/atoms/BrandLink/index.tsx',
    runtimeMarker: 'lsui-sc-brand-link',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/atoms/BrandLink/BrandLink.stories.tsx',
      title: 'Atoms/BrandLink',
    },
    test: {
      status: 'complete',
      path: 'src/atoms/BrandLink/BrandLink.test.tsx',
    },
    reference: {
      propsPath: 'src/atoms/BrandLink/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'brandlink',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/LegalPage/links/BrandAnchor/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/LegalPage/links/BrandAnchor/index.tsx',
        },
        {
          repository: 'langyspace',
          path: 'src/pages/LegalPage/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'DocumentNavigation',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/DocumentNavigation/index.tsx',
    runtimeMarker: 'lsui-sc-document-navigation',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/DocumentNavigation/DocumentNavigation.stories.tsx',
      title: 'Molecules/DocumentNavigation',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/DocumentNavigation/DocumentNavigation.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/DocumentNavigation/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'documentnavigation',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/LegalPage/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/LegalPage/index.tsx',
        },
        {
          repository: 'langyspace',
          path: 'src/pages/LegalPage/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'DocumentHeaderContent',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/DocumentHeaderContent/index.tsx',
    runtimeMarker: 'lsui-sc-document-header-content',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/DocumentHeaderContent/DocumentHeaderContent.stories.tsx',
      title: 'Molecules/DocumentHeaderContent',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/DocumentHeaderContent/DocumentHeaderContent.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/DocumentHeaderContent/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'documentheadercontent',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/LegalPage/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/LegalPage/index.tsx',
        },
        {
          repository: 'langyspace',
          path: 'src/pages/LegalPage/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'DocumentHeader',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/DocumentHeader/index.tsx',
    runtimeMarker: 'lsui-sc-document-header',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/DocumentHeader/DocumentHeader.stories.tsx',
      title: 'Molecules/DocumentHeader',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/DocumentHeader/DocumentHeader.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/DocumentHeader/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'documentheader',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/LegalPage/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/LegalPage/index.tsx',
        },
        {
          repository: 'langyspace',
          path: 'src/pages/LegalPage/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'AuthFeature',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/AuthFeature/index.tsx',
    runtimeMarker: 'lsui-sc-auth-feature',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/AuthFeature/AuthFeature.stories.tsx',
      title: 'Molecules/AuthFeature',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/AuthFeature/AuthFeature.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/AuthFeature/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'authfeature',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/AuthShell/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/layout/AuthShell/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'AuthFooterLink',
    interactive: true,
    layer: 'atom',
    ownerPath: 'src/atoms/AuthFooterLink/index.tsx',
    runtimeMarker: 'lsui-sc-auth-footer-link',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/atoms/AuthFooterLink/AuthFooterLink.stories.tsx',
      title: 'Atoms/AuthFooterLink',
    },
    test: {
      status: 'complete',
      path: 'src/atoms/AuthFooterLink/AuthFooterLink.test.tsx',
    },
    reference: {
      propsPath: 'src/atoms/AuthFooterLink/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'authfooterlink',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/AuthShell/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/layout/AuthShell/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'AuthMobileFooter',
    interactive: false,
    layer: 'atom',
    ownerPath: 'src/atoms/AuthMobileFooter/index.tsx',
    runtimeMarker: 'lsui-sc-auth-mobile-footer',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/atoms/AuthMobileFooter/AuthMobileFooter.stories.tsx',
      title: 'Atoms/AuthMobileFooter',
    },
    test: {
      status: 'complete',
      path: 'src/atoms/AuthMobileFooter/AuthMobileFooter.test.tsx',
    },
    reference: {
      propsPath: 'src/atoms/AuthMobileFooter/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'authmobilefooter',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/AuthShell/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'AuthBrandFooter',
    interactive: false,
    layer: 'atom',
    ownerPath: 'src/atoms/AuthBrandFooter/index.tsx',
    runtimeMarker: 'lsui-sc-auth-brand-footer',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/atoms/AuthBrandFooter/AuthBrandFooter.stories.tsx',
      title: 'Atoms/AuthBrandFooter',
    },
    test: {
      status: 'complete',
      path: 'src/atoms/AuthBrandFooter/AuthBrandFooter.test.tsx',
    },
    reference: {
      propsPath: 'src/atoms/AuthBrandFooter/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'authbrandfooter',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/AuthShell/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/layout/AuthShell/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'AuthFeatureList',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/AuthFeatureList/index.tsx',
    runtimeMarker: 'lsui-sc-auth-feature-list',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/AuthFeatureList/AuthFeatureList.stories.tsx',
      title: 'Molecules/AuthFeatureList',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/AuthFeatureList/AuthFeatureList.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/AuthFeatureList/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'authfeaturelist',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/AuthShell/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/layout/AuthShell/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'AuthBrandDescription',
    interactive: false,
    layer: 'atom',
    ownerPath: 'src/atoms/AuthBrandDescription/index.tsx',
    runtimeMarker: 'lsui-sc-auth-brand-description',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/atoms/AuthBrandDescription/AuthBrandDescription.stories.tsx',
      title: 'Atoms/AuthBrandDescription',
    },
    test: {
      status: 'complete',
      path: 'src/atoms/AuthBrandDescription/AuthBrandDescription.test.tsx',
    },
    reference: {
      propsPath: 'src/atoms/AuthBrandDescription/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'authbranddescription',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/AuthShell/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/layout/AuthShell/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'AuthBrandAccent',
    interactive: false,
    layer: 'atom',
    ownerPath: 'src/atoms/AuthBrandAccent/index.tsx',
    runtimeMarker: 'lsui-sc-auth-brand-accent',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/atoms/AuthBrandAccent/AuthBrandAccent.stories.tsx',
      title: 'Atoms/AuthBrandAccent',
    },
    test: {
      status: 'complete',
      path: 'src/atoms/AuthBrandAccent/AuthBrandAccent.test.tsx',
    },
    reference: {
      propsPath: 'src/atoms/AuthBrandAccent/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'authbrandaccent',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/AuthShell/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/layout/AuthShell/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'AuthBrandTitle',
    interactive: false,
    layer: 'atom',
    ownerPath: 'src/atoms/AuthBrandTitle/index.tsx',
    runtimeMarker: 'lsui-sc-auth-brand-title',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/atoms/AuthBrandTitle/AuthBrandTitle.stories.tsx',
      title: 'Atoms/AuthBrandTitle',
    },
    test: {
      status: 'complete',
      path: 'src/atoms/AuthBrandTitle/AuthBrandTitle.test.tsx',
    },
    reference: {
      propsPath: 'src/atoms/AuthBrandTitle/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'authbrandtitle',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/AuthShell/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/layout/AuthShell/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'BrandLogo',
    interactive: false,
    layer: 'atom',
    ownerPath: 'src/atoms/BrandLogo/index.tsx',
    runtimeMarker: 'lsui-sc-brand-logo',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/atoms/BrandLogo/BrandLogo.stories.tsx',
      title: 'Atoms/BrandLogo',
    },
    test: {
      status: 'complete',
      path: 'src/atoms/BrandLogo/BrandLogo.test.tsx',
    },
    reference: {
      propsPath: 'src/atoms/BrandLogo/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'brandlogo',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/base/Logo/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/base/Logo/index.tsx',
        },
        {
          repository: 'langyspace-admin',
          path: 'src/components/base/BrandLogo/index.tsx',
        },
        {
          repository: 'langyspace',
          path: 'src/components/base/VerticalLogo/index.tsx',
        },
        {
          repository: 'langyspace-cupom',
          path: 'src/pages/CouponRedirectPage/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'PracticeResultActions',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/PracticeResultActions/index.tsx',
    runtimeMarker: 'lsui-sc-practice-result-actions',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/PracticeResultActions/PracticeResultActions.stories.tsx',
      title: 'Molecules/PracticeResultActions',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/PracticeResultActions/PracticeResultActions.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/PracticeResultActions/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'practiceresultactions',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/QuizPreviewSession/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'PracticeResultDescription',
    interactive: false,
    layer: 'atom',
    ownerPath: 'src/atoms/PracticeResultDescription/index.tsx',
    runtimeMarker: 'lsui-sc-practice-result-description',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/atoms/PracticeResultDescription/PracticeResultDescription.stories.tsx',
      title: 'Atoms/PracticeResultDescription',
    },
    test: {
      status: 'complete',
      path: 'src/atoms/PracticeResultDescription/PracticeResultDescription.test.tsx',
    },
    reference: {
      propsPath: 'src/atoms/PracticeResultDescription/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'practiceresultdescription',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/QuizPreviewSession/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'PracticeResultTitle',
    interactive: false,
    layer: 'atom',
    ownerPath: 'src/atoms/PracticeResultTitle/index.tsx',
    runtimeMarker: 'lsui-sc-practice-result-title',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/atoms/PracticeResultTitle/PracticeResultTitle.stories.tsx',
      title: 'Atoms/PracticeResultTitle',
    },
    test: {
      status: 'complete',
      path: 'src/atoms/PracticeResultTitle/PracticeResultTitle.test.tsx',
    },
    reference: {
      propsPath: 'src/atoms/PracticeResultTitle/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'practiceresulttitle',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/QuizPreviewSession/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'PracticeResultMark',
    interactive: false,
    layer: 'atom',
    ownerPath: 'src/atoms/PracticeResultMark/index.tsx',
    runtimeMarker: 'lsui-sc-practice-result-mark',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/atoms/PracticeResultMark/PracticeResultMark.stories.tsx',
      title: 'Atoms/PracticeResultMark',
    },
    test: {
      status: 'complete',
      path: 'src/atoms/PracticeResultMark/PracticeResultMark.test.tsx',
    },
    reference: {
      propsPath: 'src/atoms/PracticeResultMark/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'practiceresultmark',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/QuizPreviewSession/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'AuthSuccessState',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/AuthSuccessState/index.tsx',
    runtimeMarker: 'lsui-sc-auth-success-state',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/AuthSuccessState/AuthSuccessState.stories.tsx',
      title: 'Molecules/AuthSuccessState',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/AuthSuccessState/AuthSuccessState.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/AuthSuccessState/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'authsuccessstate',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/Login/sections/SuccessStep/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/RegisterStudent/sections/SuccessStep/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'AuthTopLink',
    interactive: true,
    layer: 'atom',
    ownerPath: 'src/atoms/AuthTopLink/index.tsx',
    runtimeMarker: 'lsui-sc-auth-top-link',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/atoms/AuthTopLink/AuthTopLink.stories.tsx',
      title: 'Atoms/AuthTopLink',
    },
    test: {
      status: 'complete',
      path: 'src/atoms/AuthTopLink/AuthTopLink.test.tsx',
    },
    reference: {
      propsPath: 'src/atoms/AuthTopLink/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'authtoplink',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/AuthTopLink/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/layout/AuthTopLink/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'AuthSubmitButton',
    interactive: true,
    layer: 'atom',
    ownerPath: 'src/atoms/AuthSubmitButton/index.tsx',
    runtimeMarker: 'lsui-sc-auth-submit-button',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/atoms/AuthSubmitButton/AuthSubmitButton.stories.tsx',
      title: 'Atoms/AuthSubmitButton',
    },
    test: {
      status: 'complete',
      path: 'src/atoms/AuthSubmitButton/AuthSubmitButton.test.tsx',
    },
    reference: {
      propsPath: 'src/atoms/AuthSubmitButton/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'authsubmitbutton',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/RegisterTeacher/sections/AvailabilityStep/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/RegisterStudent/sections/ClaimStep/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'AuthProgress',
    interactive: false,
    layer: 'atom',
    ownerPath: 'src/atoms/AuthProgress/index.tsx',
    runtimeMarker: 'lsui-sc-auth-progress',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/atoms/AuthProgress/AuthProgress.stories.tsx',
      title: 'Atoms/AuthProgress',
    },
    test: {
      status: 'complete',
      path: 'src/atoms/AuthProgress/AuthProgress.test.tsx',
    },
    reference: {
      propsPath: 'src/atoms/AuthProgress/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'authprogress',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/Login/sections/SuccessStep/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/RegisterStudent/sections/SuccessStep/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'AuthSuccessIcon',
    interactive: false,
    layer: 'atom',
    ownerPath: 'src/atoms/AuthSuccessIcon/index.tsx',
    runtimeMarker: 'lsui-sc-auth-success-icon',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/atoms/AuthSuccessIcon/AuthSuccessIcon.stories.tsx',
      title: 'Atoms/AuthSuccessIcon',
    },
    test: {
      status: 'complete',
      path: 'src/atoms/AuthSuccessIcon/AuthSuccessIcon.test.tsx',
    },
    reference: {
      propsPath: 'src/atoms/AuthSuccessIcon/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'authsuccessicon',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/Login/sections/SuccessStep/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/RegisterStudent/sections/SuccessStep/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'AuthResendButton',
    interactive: true,
    layer: 'atom',
    ownerPath: 'src/atoms/AuthResendButton/index.tsx',
    runtimeMarker: 'lsui-sc-auth-resend-button',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/atoms/AuthResendButton/AuthResendButton.stories.tsx',
      title: 'Atoms/AuthResendButton',
    },
    test: {
      status: 'complete',
      path: 'src/atoms/AuthResendButton/AuthResendButton.test.tsx',
    },
    reference: {
      propsPath: 'src/atoms/AuthResendButton/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'authresendbutton',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/Login/sections/TokenStep/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/Login/sections/TokenStep/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'AuthResendAction',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/AuthResendAction/index.tsx',
    runtimeMarker: 'lsui-sc-auth-resend-action',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/AuthResendAction/AuthResendAction.stories.tsx',
      title: 'Molecules/AuthResendAction',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/AuthResendAction/AuthResendAction.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/AuthResendAction/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'authresendaction',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/Login/sections/TokenStep/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/Login/sections/TokenStep/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'AuthBackButton',
    interactive: true,
    layer: 'atom',
    ownerPath: 'src/atoms/AuthBackButton/index.tsx',
    runtimeMarker: 'lsui-sc-auth-back-button',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/atoms/AuthBackButton/AuthBackButton.stories.tsx',
      title: 'Atoms/AuthBackButton',
    },
    test: {
      status: 'complete',
      path: 'src/atoms/AuthBackButton/AuthBackButton.test.tsx',
    },
    reference: {
      propsPath: 'src/atoms/AuthBackButton/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'authbackbutton',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/RegisterTeacher/sections/AvailabilityStep/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/Login/sections/TokenStep/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'AuthForm',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/AuthForm/index.tsx',
    runtimeMarker: 'lsui-sc-auth-form',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/molecules/AuthForm/AuthForm.stories.tsx',
      title: 'Molecules/AuthForm',
    },
    test: {
      status: 'complete',
      path: 'src/molecules/AuthForm/AuthForm.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/AuthForm/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'authform',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/RegisterTeacher/sections/AvailabilityStep/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/RegisterStudent/sections/ClaimStep/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'AuthTopLinkHighlight',
    interactive: false,
    layer: 'atom',
    ownerPath: 'src/atoms/AuthTopLinkHighlight/index.tsx',
    runtimeMarker: 'lsui-sc-auth-top-link-highlight',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/atoms/AuthTopLinkHighlight/AuthTopLinkHighlight.stories.tsx',
      title: 'Atoms/AuthTopLinkHighlight',
    },
    test: {
      status: 'complete',
      path: 'src/atoms/AuthTopLinkHighlight/AuthTopLinkHighlight.test.tsx',
    },
    reference: {
      propsPath: 'src/atoms/AuthTopLinkHighlight/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'authtoplinkhighlight',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/Login/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/Login/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'AuthEyebrow',
    interactive: false,
    layer: 'atom',
    ownerPath: 'src/atoms/AuthEyebrow/index.tsx',
    runtimeMarker: 'lsui-sc-auth-eyebrow',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/atoms/AuthEyebrow/AuthEyebrow.stories.tsx',
      title: 'Atoms/AuthEyebrow',
    },
    test: {
      status: 'complete',
      path: 'src/atoms/AuthEyebrow/AuthEyebrow.test.tsx',
    },
    reference: {
      propsPath: 'src/atoms/AuthEyebrow/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'autheyebrow',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/Login/sections/PhoneStep/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/RegisterStudent/sections/ClaimStep/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'PracticeResultPanel',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/PracticeResultPanel/index.tsx',
    runtimeMarker: 'lsui-sc-practice-result-panel',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/PracticeResultPanel/PracticeResultPanel.stories.tsx',
      title: 'Molecules/PracticeResultPanel',
    },
    test: {
      ...complete,
      path: 'src/molecules/PracticeResultPanel/PracticeResultPanel.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/PracticeResultPanel/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'practiceresultpanel',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/QuizPreviewSession/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
      ],
    },
    visual: true,
  },

  {
    browserSmoke: complete,
    exportName: 'QuizSessionHeader',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/QuizSessionHeader/index.tsx',
    runtimeMarker: 'lsui-sc-quiz-session-header',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/QuizSessionHeader/QuizSessionHeader.stories.tsx',
      title: 'Molecules/QuizSessionHeader',
    },
    test: {
      ...complete,
      path: 'src/molecules/QuizSessionHeader/QuizSessionHeader.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/QuizSessionHeader/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'quizsessionheader',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/QuizPreviewSessionSkeleton/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
      ],
    },
    visual: true,
  },

  {
    browserSmoke: complete,
    exportName: 'PracticeCardBody',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/PracticeCardBody/index.tsx',
    runtimeMarker: 'lsui-sc-practice-card-body',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/PracticeCardBody/PracticeCardBody.stories.tsx',
      title: 'Molecules/PracticeCardBody',
    },
    test: {
      ...complete,
      path: 'src/molecules/PracticeCardBody/PracticeCardBody.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/PracticeCardBody/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'practicecardbody',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/SavedVocabularyPreviewCard/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'QuizOption',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/QuizOption/index.tsx',
    runtimeMarker: 'lsui-sc-quiz-option',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/QuizOption/QuizOption.stories.tsx',
      title: 'Molecules/QuizOption',
    },
    test: { ...complete, path: 'src/molecules/QuizOption/QuizOption.test.tsx' },
    reference: {
      propsPath: 'src/molecules/QuizOption/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'quizoption',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/QuizPreviewSession/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
        {
          repository: 'langyspace',
          path: 'src/components/layout/QuizVerbToBeShowcase/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'QuizFeedback',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/QuizFeedback/index.tsx',
    runtimeMarker: 'lsui-sc-quiz-feedback',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/QuizFeedback/QuizFeedback.stories.tsx',
      title: 'Molecules/QuizFeedback',
    },
    test: {
      ...complete,
      path: 'src/molecules/QuizFeedback/QuizFeedback.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/QuizFeedback/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'quizfeedback',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/QuizPreviewSession/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
        {
          repository: 'langyspace',
          path: 'src/components/layout/QuizVerbToBeShowcase/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'FlashcardRatingButton',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/FlashcardRatingButton/index.tsx',
    runtimeMarker: 'lsui-sc-flashcard-rating-button',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/FlashcardRatingButton/FlashcardRatingButton.stories.tsx',
      title: 'Molecules/FlashcardRatingButton',
    },
    test: {
      ...complete,
      path: 'src/molecules/FlashcardRatingButton/FlashcardRatingButton.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/FlashcardRatingButton/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'flashcardratingbutton',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/StudentFlashcardSession/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/FlashcardsV2.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'PracticePlaybackControls',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/PracticePlaybackControls/index.tsx',
    runtimeMarker: 'lsui-sc-practice-playback-controls',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/PracticePlaybackControls/PracticePlaybackControls.stories.tsx',
      title: 'Molecules/PracticePlaybackControls',
    },
    test: {
      ...complete,
      path: 'src/molecules/PracticePlaybackControls/PracticePlaybackControls.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/PracticePlaybackControls/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'practiceplaybackcontrols',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/ShadowingPreviewSession/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'CalendarControls',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/CalendarControls/index.tsx',
    runtimeMarker: 'lsui-sc-calendar-controls',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/CalendarControls/CalendarControls.stories.tsx',
      title: 'Molecules/CalendarControls',
    },
    test: {
      ...complete,
      path: 'src/molecules/CalendarControls/CalendarControls.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/CalendarControls/types.ts',
      documentation: {
        path: 'docs/components/calendar.md',
        anchor: 'calendarcontrols',
      },
      consumers: [
        {
          repository: 'langyspace-ui',
          path: 'src/molecules/ScheduleCalendar/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'AuthFrame',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/AuthFrame/index.tsx',
    runtimeMarker: 'lsui-sc-auth-frame',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/AuthFrame/AuthFrame.stories.tsx',
      title: 'Molecules/Auth/AuthFrame',
    },
    test: { ...complete, path: 'src/molecules/AuthFrame/AuthFrame.test.tsx' },
    reference: {
      propsPath: 'src/molecules/AuthFrame/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'authframe',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/AuthShell/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/layout/AuthShell/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'PhoneField',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/PhoneField/index.tsx',
    runtimeMarker: 'lsui-sc-phone-field',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/PhoneField/PhoneField.stories.tsx',
      title: 'Molecules/Fields/PhoneField',
    },
    test: { ...complete, path: 'src/molecules/PhoneField/PhoneField.test.tsx' },
    reference: {
      propsPath: 'src/molecules/PhoneField/types.ts',
      documentation: {
        path: 'docs/components/controls.md',
        anchor: 'phonefield',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/base/PhoneField/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/base/PhoneField/index.tsx',
        },
      ],
    },
    visual: true,
  },

  {
    browserSmoke: complete,
    exportName: 'PracticeProgressBar',
    interactive: false,
    layer: 'atom',
    ownerPath: 'src/atoms/PracticeProgressBar/index.tsx',
    runtimeMarker: 'lsui-sc-practice-progress-bar',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/atoms/PracticeProgressBar/PracticeProgressBar.stories.tsx',
      title: 'Atoms/PracticeProgressBar',
    },
    test: {
      ...complete,
      path: 'src/atoms/PracticeProgressBar/PracticeProgressBar.test.tsx',
    },
    reference: {
      propsPath: 'src/atoms/PracticeProgressBar/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'practiceprogressbar',
      },
      consumers: [
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'PracticeCardSkeletonBody',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/PracticeCardSkeletonBody/index.tsx',
    runtimeMarker: 'lsui-sc-practice-card-skeleton-body',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/PracticeCardSkeletonBody/PracticeCardSkeletonBody.stories.tsx',
      title: 'Molecules/Loading/PracticeCardSkeletonBody',
    },
    test: {
      ...complete,
      path: 'src/molecules/PracticeCardSkeletonBody/PracticeCardSkeletonBody.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/PracticeCardSkeletonBody/types.ts',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'practicecardskeletonbody',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/PracticePreviewCardSkeleton/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'FilterToolbar',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/FilterToolbar/index.tsx',
    runtimeMarker: 'lsui-sc-filter-toolbar',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/FilterToolbar/FilterToolbar.stories.tsx',
      title: 'Molecules/Layout/FilterToolbar',
    },
    test: {
      ...complete,
      path: 'src/molecules/FilterToolbar/FilterToolbar.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/FilterToolbar/types.ts',
      documentation: {
        path: 'docs/components/navigation-overlays-messaging.md',
        anchor: 'filtertoolbar',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/Materials/index.tsx',
        },
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/MessagingPage/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'Card',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/Card/index.tsx',
    runtimeMarker: 'lsui-sc-card',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/Card/Card.stories.tsx',
      title: 'Molecules/Layout/Card',
    },
    test: { ...complete, path: 'src/molecules/Card/Card.test.tsx' },
    reference: {
      propsPath: 'src/molecules/Card/types.ts',
      documentation: {
        path: 'docs/components/data-feedback.md',
        anchor: 'card',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/Today/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/FinanceOverview/index.tsx',
        },
        {
          repository: 'langyspace-cupom',
          path: 'src/pages/CouponMetricsPage/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'ToastItem',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/ToastItem/index.tsx',
    runtimeMarker: 'lsui-sc-toast-item',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/ToastItem/ToastItem.stories.tsx',
      title: 'Molecules/Feedback/ToastItem',
    },
    test: { ...complete, path: 'src/molecules/ToastItem/ToastItem.test.tsx' },
    reference: {
      propsPath: 'src/molecules/ToastItem/types.ts',
      documentation: {
        path: 'docs/components/navigation-overlays-messaging.md',
        anchor: 'toastitem',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/base/ToastViewport/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/base/ToastViewport/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'ToastViewport',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/ToastViewport/index.tsx',
    runtimeMarker: 'lsui-sc-toast-viewport',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/ToastViewport/ToastViewport.stories.tsx',
      title: 'Molecules/Feedback/ToastViewport',
    },
    test: {
      ...complete,
      path: 'src/molecules/ToastViewport/ToastViewport.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/ToastViewport/types.ts',
      documentation: {
        path: 'docs/components/navigation-overlays-messaging.md',
        anchor: 'toastviewport',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/base/ToastViewport/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/base/ToastViewport/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'NoticeBanner',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/NoticeBanner/index.tsx',
    runtimeMarker: 'lsui-sc-notice-banner',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/NoticeBanner/NoticeBanner.stories.tsx',
      title: 'Molecules/Feedback/NoticeBanner',
    },
    test: {
      ...complete,
      path: 'src/molecules/NoticeBanner/NoticeBanner.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/NoticeBanner/types.ts',
      documentation: {
        path: 'docs/components/data-feedback.md',
        anchor: 'noticebanner',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/ShellNotice/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/layout/ShellNotice/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'DocumentLayout',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/DocumentLayout/index.tsx',
    runtimeMarker: 'lsui-sc-document-layout',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/DocumentLayout/DocumentLayout.stories.tsx',
      title: 'Molecules/Layout/DocumentLayout',
    },
    test: {
      ...complete,
      path: 'src/molecules/DocumentLayout/DocumentLayout.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/DocumentLayout/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'documentlayout',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/LegalPage/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/LegalPage/index.tsx',
        },
      ],
    },
    visual: true,
  },

  {
    browserSmoke: complete,
    exportName: 'AuthAccent',
    interactive: false,
    layer: 'atom',
    ownerPath: 'src/atoms/AuthAccent/index.tsx',
    runtimeMarker: 'lsui-sc-auth-accent',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/atoms/AuthAccent/AuthAccent.stories.tsx',
      title: 'Atoms/Auth/AuthAccent',
    },
    test: {
      ...complete,
      path: 'src/atoms/AuthAccent/AuthAccent.test.tsx',
    },
    reference: {
      propsPath: 'src/atoms/AuthAccent/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'authaccent',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/Login/sections/PhoneStep/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/Login/sections/PhoneStep/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'AuthDescription',
    interactive: false,
    layer: 'atom',
    ownerPath: 'src/atoms/AuthDescription/index.tsx',
    runtimeMarker: 'lsui-sc-auth-description',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/atoms/AuthDescription/AuthDescription.stories.tsx',
      title: 'Atoms/Auth/AuthDescription',
    },
    test: {
      ...complete,
      path: 'src/atoms/AuthDescription/AuthDescription.test.tsx',
    },
    reference: {
      propsPath: 'src/atoms/AuthDescription/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'authdescription',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/Login/sections/PhoneStep/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/Login/sections/PhoneStep/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'AuthTitle',
    interactive: false,
    layer: 'atom',
    ownerPath: 'src/atoms/AuthTitle/index.tsx',
    runtimeMarker: 'lsui-sc-auth-title',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/atoms/AuthTitle/AuthTitle.stories.tsx',
      title: 'Atoms/Auth/AuthTitle',
    },
    test: {
      ...complete,
      path: 'src/atoms/AuthTitle/AuthTitle.test.tsx',
    },
    reference: {
      propsPath: 'src/atoms/AuthTitle/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'authtitle',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/Login/sections/PhoneStep/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/Login/sections/PhoneStep/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'AvailabilityCalendar',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/AvailabilityCalendar/index.tsx',
    runtimeMarker: 'lsui-sc-availability-calendar',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/AvailabilityCalendar/AvailabilityCalendar.stories.tsx',
      title: 'Molecules/Scheduling/AvailabilityCalendar',
    },
    test: {
      ...complete,
      path: 'src/molecules/AvailabilityCalendar/AvailabilityCalendar.test.tsx',
    },
    reference: {
      propsPath: 'src/molecules/AvailabilityCalendar/types.ts',
      documentation: {
        path: 'docs/components/calendar.md',
        anchor: 'availabilitycalendar',
      },
      consumers: [
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/EnrollmentSchedulePage/index.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'ActionLink',
    interactive: true,
    layer: 'atom',
    ownerPath: 'src/atoms/ActionLink/index.tsx',
    runtimeMarker: 'lsui-sc-action-link',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/atoms/ActionLink/ActionLink.stories.tsx',
      title: 'Atoms/Actions/ActionLink',
    },
    test: {
      ...complete,
      path: 'src/atoms/ActionLink/ActionLink.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/atoms/ActionLink/types.ts',
      documentation: {
        path: 'docs/components/controls.md',
        anchor: 'actionlink',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/base/PillButton/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/StudentHandoff/index.tsx',
        },
        {
          repository: 'langyspace',
          path: 'src/pages/NotFoundPage/index.tsx',
        },
      ],
    },
  },
  {
    browserSmoke: complete,
    exportName: 'AuthNotice',
    interactive: false,
    layer: 'atom',
    ownerPath: 'src/atoms/AuthNotice/index.tsx',
    runtimeMarker: 'lsui-sc-auth-notice',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/atoms/AuthNotice/AuthNotice.stories.tsx',
      title: 'Atoms/Feedback/AuthNotice',
    },
    test: {
      ...complete,
      path: 'src/atoms/AuthNotice/AuthNotice.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/atoms/AuthNotice/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'authnotice',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/RegisterTeacher/sections/AvailabilityStep/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/RegisterStudent/sections/ClaimStep/index.tsx',
        },
      ],
    },
  },
  {
    browserSmoke: complete,
    exportName: 'Avatar',
    interactive: false,
    layer: 'atom',
    ownerPath: 'src/atoms/Avatar/index.tsx',
    runtimeMarker: 'lsui-sc-avatar',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/atoms/Avatar/Avatar.stories.tsx',
      title: 'Atoms/Identity/Avatar',
    },
    test: {
      ...complete,
      path: 'src/atoms/Avatar/Avatar.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/atoms/Avatar/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'avatar',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/NotificationDrawer/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/StudentHome/index.tsx',
        },
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/AdminPageChrome.tsx',
        },
      ],
    },
  },
  {
    browserSmoke: complete,
    exportName: 'Button',
    interactive: true,
    layer: 'atom',
    ownerPath: 'src/atoms/Button/index.tsx',
    runtimeMarker: 'lsui-sc-button',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/atoms/Button/Button.stories.tsx',
      title: 'Atoms/Actions/Button',
    },
    test: {
      ...complete,
      path: 'src/atoms/Button/Button.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/atoms/Button/types.ts',
      documentation: {
        path: 'docs/components/controls.md',
        anchor: 'button',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/base/PillButton/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/layout/InstallAppInvite/index.tsx',
        },
        {
          repository: 'langyspace-admin',
          path: 'src/components/auth/RequireAuth/index.tsx',
        },
        {
          repository: 'langyspace',
          path: 'src/components/layout/Hero/index.tsx',
        },
      ],
    },
  },
  {
    browserSmoke: complete,
    exportName: 'IconButton',
    interactive: true,
    layer: 'atom',
    ownerPath: 'src/atoms/IconButton/index.tsx',
    runtimeMarker: 'lsui-sc-icon-button',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/atoms/IconButton/IconButton.stories.tsx',
      title: 'Atoms/Actions/IconButton',
    },
    test: {
      ...complete,
      path: 'src/atoms/IconButton/IconButton.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/atoms/IconButton/types.ts',
      documentation: {
        path: 'docs/components/controls.md',
        anchor: 'iconbutton',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/PartnerCounters/sections/CounterCard/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/layout/Sidebar/index.tsx',
        },
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/FinanceClassificationEditor/index.tsx',
        },
        {
          repository: 'langyspace',
          path: 'src/components/layout/Footer/index.tsx',
        },
      ],
    },
  },
  {
    browserSmoke: complete,
    exportName: 'SelectInput',
    interactive: true,
    layer: 'atom',
    ownerPath: 'src/atoms/SelectInput/index.tsx',
    runtimeMarker: 'lsui-sc-select-input',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/atoms/SelectInput/SelectInput.stories.tsx',
      title: 'Atoms/Fields/SelectInput',
    },
    test: {
      ...complete,
      path: 'src/atoms/SelectInput/SelectInput.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/atoms/SelectInput/types.ts',
      documentation: {
        path: 'docs/components/controls.md',
        anchor: 'selectinput',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/ProblemReportDrawer/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/StudentProfile/ProblemReportDrawer.tsx',
        },
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/EnrollmentSchedulePage/DispatchReconciliation.tsx',
        },
      ],
    },
  },
  {
    browserSmoke: complete,
    exportName: 'StatusChip',
    interactive: false,
    layer: 'atom',
    ownerPath: 'src/atoms/StatusChip/index.tsx',
    runtimeMarker: 'lsui-sc-status-chip',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/atoms/StatusChip/StatusChip.stories.tsx',
      title: 'Atoms/Feedback/StatusChip',
    },
    test: {
      ...complete,
      path: 'src/atoms/StatusChip/StatusChip.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/atoms/StatusChip/types.ts',
      documentation: {
        path: 'docs/components/data-feedback.md',
        anchor: 'statuschip',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/ClassRow/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/StudentClasses/index.tsx',
        },
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/FinanceImportDialog/index.tsx',
        },
      ],
    },
  },
  {
    browserSmoke: complete,
    exportName: 'TextareaInput',
    interactive: true,
    layer: 'atom',
    ownerPath: 'src/atoms/TextareaInput/index.tsx',
    runtimeMarker: 'lsui-sc-textarea-input',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/atoms/TextareaInput/TextareaInput.stories.tsx',
      title: 'Atoms/Fields/TextareaInput',
    },
    test: {
      ...complete,
      path: 'src/atoms/TextareaInput/TextareaInput.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/atoms/TextareaInput/types.ts',
      documentation: {
        path: 'docs/components/controls.md',
        anchor: 'textareainput',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/ProblemReportDrawer/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/StudentProfile/ProblemReportDrawer.tsx',
        },
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/EnrollmentSchedulePage/DispatchReconciliation.tsx',
        },
      ],
    },
  },
  {
    browserSmoke: complete,
    exportName: 'TextInput',
    interactive: true,
    layer: 'atom',
    ownerPath: 'src/atoms/TextInput/index.tsx',
    runtimeMarker: 'lsui-sc-text-input',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/atoms/TextInput/TextInput.stories.tsx',
      title: 'Atoms/Fields/TextInput',
    },
    test: {
      ...complete,
      path: 'src/atoms/TextInput/TextInput.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/atoms/TextInput/types.ts',
      documentation: {
        path: 'docs/components/controls.md',
        anchor: 'textinput',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/Calendar/components/SlotActionDrawer/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/RegisterStudent/sections/DetailsStep/index.tsx',
        },
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/StudentPaymentAccessActions/index.tsx',
        },
        {
          repository: 'langyspace',
          path: 'src/components/layout/TrialLessonForm/index.tsx',
        },
      ],
    },
  },
  {
    browserSmoke: complete,
    exportName: 'ActionMenu',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/ActionMenu/index.tsx',
    runtimeMarker: 'lsui-sc-action-menu',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/ActionMenu/ActionMenu.stories.tsx',
      title: 'Molecules/Actions/ActionMenu',
    },
    test: {
      ...complete,
      path: 'src/molecules/ActionMenu/ActionMenu.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/molecules/ActionMenu/types.ts',
      documentation: {
        path: 'docs/components/navigation-overlays-messaging.md',
        anchor: 'actionmenu',
      },
      consumers: [
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/index.tsx',
        },
      ],
    },
  },
  {
    browserSmoke: complete,
    exportName: 'AuthTokenDigits',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/AuthTokenDigits/index.tsx',
    runtimeMarker: 'lsui-sc-auth-token-digits',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/AuthTokenDigits/AuthTokenDigits.stories.tsx',
      title: 'Molecules/Auth/AuthTokenDigits',
    },
    test: {
      ...complete,
      path: 'src/molecules/AuthTokenDigits/AuthTokenDigits.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/molecules/AuthTokenDigits/types.ts',
      documentation: {
        path: 'docs/components/auth-brand-documents.md',
        anchor: 'authtokendigits',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/Login/sections/TokenStep/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/Login/sections/TokenStep/index.tsx',
        },
      ],
    },
  },
  {
    browserSmoke: complete,
    exportName: 'CompoundControl',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/CompoundControl/index.tsx',
    runtimeMarker: 'lsui-sc-compound-control',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/CompoundControl/CompoundControl.stories.tsx',
      title: 'Molecules/Fields/CompoundControl',
    },
    test: {
      ...complete,
      path: 'src/molecules/CompoundControl/CompoundControl.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/molecules/CompoundControl/types.ts',
      documentation: {
        path: 'docs/components/controls.md',
        anchor: 'compoundcontrol',
      },
      consumers: [
        {
          repository: 'langyspace-admin',
          path: 'src/pages/Login/index.tsx',
        },
      ],
    },
  },
  {
    browserSmoke: complete,
    exportName: 'ControlledField',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/ControlledField/index.tsx',
    reference: {
      propsPath: 'src/molecules/ControlledField/types.ts',
      documentation: {
        path: 'docs/components/controls.md',
        anchor: 'controlledfield',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/RegisterTeacher/sections/DetailsStep/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/RegisterStudent/sections/DetailsStep/index.tsx',
        },
      ],
    },
    runtimeMarker: 'lsui-sc-field-root',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/ControlledField/ControlledField.stories.tsx',
      title: 'Molecules/Fields/ControlledField',
    },
    test: {
      ...complete,
      path: 'src/molecules/ControlledField/ControlledField.test.tsx',
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'Dialog',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/Dialog/index.tsx',
    runtimeMarker: 'lsui-sc-modal-panel',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/Dialog/Dialog.stories.tsx',
      title: 'Molecules/Overlays/Dialog',
    },
    test: {
      ...complete,
      path: 'src/molecules/Dialog/Dialog.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/molecules/Dialog/types.ts',
      documentation: {
        path: 'docs/components/navigation-overlays-messaging.md',
        anchor: 'dialog',
      },
      consumers: [
        {
          repository: 'langyspace-student',
          path: 'src/pages/ChoosePlan/sections/CheckoutDialog/index.tsx',
        },
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/FinanceImportDialog/index.tsx',
        },
      ],
    },
  },
  {
    browserSmoke: complete,
    exportName: 'Drawer',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/Drawer/index.tsx',
    runtimeMarker: 'lsui-sc-modal-panel',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/Drawer/Drawer.stories.tsx',
      title: 'Molecules/Overlays/Drawer',
    },
    test: {
      ...complete,
      path: 'src/molecules/Drawer/Drawer.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/molecules/Drawer/types.ts',
      documentation: {
        path: 'docs/components/navigation-overlays-messaging.md',
        anchor: 'drawer',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/NotificationDrawer/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/layout/NotificationDrawer/index.tsx',
        },
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/StudentCommunicationDrawer/index.tsx',
        },
      ],
    },
  },
  {
    browserSmoke: complete,
    exportName: 'EmptyState',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/EmptyState/index.tsx',
    runtimeMarker: 'lsui-sc-state-panel',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/EmptyState/EmptyState.stories.tsx',
      title: 'Molecules/State/EmptyState',
    },
    test: {
      ...complete,
      path: 'src/molecules/EmptyState/EmptyState.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/molecules/EmptyState/types.ts',
      documentation: {
        path: 'docs/components/data-feedback.md',
        anchor: 'emptystate',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/NotificationDrawer/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/components/layout/NotificationDrawer/index.tsx',
        },
      ],
    },
  },
  {
    browserSmoke: complete,
    exportName: 'FieldRoot',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/FieldRoot/index.tsx',
    runtimeMarker: 'lsui-sc-field-root',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/FieldRoot/FieldRoot.stories.tsx',
      title: 'Molecules/Fields/FieldRoot',
    },
    test: {
      ...complete,
      path: 'src/molecules/FieldRoot/FieldRoot.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/molecules/FieldRoot/types.ts',
      documentation: {
        path: 'docs/components/controls.md',
        anchor: 'fieldroot',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/ProblemReportDrawer/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/StudentProfile/ProblemReportDrawer.tsx',
        },
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/EnrollmentSchedulePage/DispatchReconciliation.tsx',
        },
      ],
    },
  },
  {
    browserSmoke: complete,
    exportName: 'FilterPills',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/FilterPills/index.tsx',
    runtimeMarker: 'lsui-sc-filter-pills',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/FilterPills/FilterPills.stories.tsx',
      title: 'Molecules/Selection/FilterPills',
    },
    test: {
      ...complete,
      path: 'src/molecules/FilterPills/FilterPills.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/molecules/FilterPills/types.ts',
      documentation: {
        path: 'docs/components/navigation-overlays-messaging.md',
        anchor: 'filterpills',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/base/FilterPills/index.tsx',
        },
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPage/index.tsx',
        },
      ],
    },
  },
  {
    browserSmoke: complete,
    exportName: 'LoadingState',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/LoadingState/index.tsx',
    runtimeMarker: 'lsui-sc-state-panel',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/LoadingState/LoadingState.stories.tsx',
      title: 'Molecules/State/LoadingState',
    },
    test: {
      ...complete,
      path: 'src/molecules/LoadingState/LoadingState.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/molecules/LoadingState/types.ts',
      documentation: {
        path: 'docs/components/data-feedback.md',
        anchor: 'loadingstate',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/LearningPreviewShell/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/StudentMessages/index.tsx',
        },
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/MessagingPage/index.tsx',
        },
      ],
    },
  },
  {
    browserSmoke: complete,
    exportName: 'MessageBubble',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/MessageBubble/index.tsx',
    runtimeMarker: 'lsui-sc-message-bubble',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/MessageBubble/MessageBubble.stories.tsx',
      title: 'Molecules/Messaging/MessageBubble',
    },
    test: {
      ...complete,
      path: 'src/molecules/MessageBubble/MessageBubble.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/molecules/MessageBubble/types.ts',
      documentation: {
        path: 'docs/components/navigation-overlays-messaging.md',
        anchor: 'messagebubble',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/Messages/components/ConversationThread/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/StudentMessages/index.tsx',
        },
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/MessagingPage/index.tsx',
        },
      ],
    },
  },
  {
    browserSmoke: complete,
    exportName: 'MessageComposer',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/MessageComposer/index.tsx',
    runtimeMarker: 'lsui-sc-message-composer',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/MessageComposer/MessageComposer.stories.tsx',
      title: 'Molecules/Messaging/MessageComposer',
    },
    test: {
      ...complete,
      path: 'src/molecules/MessageComposer/MessageComposer.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/molecules/MessageComposer/types.ts',
      documentation: {
        path: 'docs/components/navigation-overlays-messaging.md',
        anchor: 'messagecomposer',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/Messages/components/ConversationThread/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/StudentMessages/index.tsx',
        },
      ],
    },
  },
  {
    browserSmoke: complete,
    exportName: 'MessageThread',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/MessageThread/index.tsx',
    runtimeMarker: 'lsui-sc-message-thread',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/MessageThread/MessageThread.stories.tsx',
      title: 'Molecules/Messaging/MessageThread',
    },
    test: {
      ...complete,
      path: 'src/molecules/MessageThread/MessageThread.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/molecules/MessageThread/types.ts',
      documentation: {
        path: 'docs/components/navigation-overlays-messaging.md',
        anchor: 'messagethread',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/Messages/components/ConversationThread/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/StudentMessages/index.tsx',
        },
      ],
    },
  },
  {
    browserSmoke: complete,
    exportName: 'MessageThreadHeader',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/MessageThreadHeader/index.tsx',
    runtimeMarker: 'lsui-sc-message-thread-header',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/MessageThreadHeader/MessageThreadHeader.stories.tsx',
      title: 'Molecules/Messaging/MessageThreadHeader',
    },
    test: {
      ...complete,
      path: 'src/molecules/MessageThreadHeader/MessageThreadHeader.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/molecules/MessageThreadHeader/types.ts',
      documentation: {
        path: 'docs/components/navigation-overlays-messaging.md',
        anchor: 'messagethreadheader',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/Messages/components/ConversationThread/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/StudentMessages/index.tsx',
        },
      ],
    },
  },
  {
    browserSmoke: complete,
    exportName: 'OperationalList',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/OperationalList/index.tsx',
    reference: {
      propsPath: 'src/molecules/OperationalList/types.ts',
      documentation: {
        path: 'docs/components/data-feedback.md',
        anchor: 'operationallist',
      },
      consumers: [
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/FinanceImportDialog/index.tsx',
        },
      ],
    },
    runtimeMarker: 'lsui-sc-operational-list',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/OperationalList/OperationalList.stories.tsx',
      title: 'Molecules/Data/OperationalList',
    },
    test: {
      ...complete,
      path: 'src/molecules/OperationalList/OperationalList.test.tsx',
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'SearchInput',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/SearchInput/index.tsx',
    reference: {
      propsPath: 'src/molecules/SearchInput/types.ts',
      documentation: {
        path: 'docs/components/controls.md',
        anchor: 'searchinput',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/base/SearchField/index.tsx',
        },
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/AdminGlobalSearch/index.tsx',
        },
      ],
    },
    runtimeMarker: 'lsui-sc-search-input',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/SearchInput/SearchInput.stories.tsx',
      title: 'Molecules/Fields/SearchInput',
    },
    test: {
      ...complete,
      path: 'src/molecules/SearchInput/SearchInput.test.tsx',
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'SectionHeader',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/SectionHeader/index.tsx',
    runtimeMarker: 'lsui-sc-section-header',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/SectionHeader/SectionHeader.stories.tsx',
      title: 'Molecules/Layout/SectionHeader',
    },
    test: {
      ...complete,
      path: 'src/molecules/SectionHeader/SectionHeader.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/molecules/SectionHeader/types.ts',
      documentation: {
        path: 'docs/components/data-feedback.md',
        anchor: 'sectionheader',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/Today/index.tsx',
        },
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/FinanceOverview/index.tsx',
        },
      ],
    },
  },
  {
    browserSmoke: complete,
    exportName: 'SegmentedControl',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/SegmentedControl/index.tsx',
    runtimeMarker: 'lsui-sc-segmented-control',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/SegmentedControl/SegmentedControl.stories.tsx',
      title: 'Molecules/Selection/SegmentedControl',
    },
    test: {
      ...complete,
      path: 'src/molecules/SegmentedControl/SegmentedControl.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/molecules/SegmentedControl/types.ts',
      documentation: {
        path: 'docs/components/navigation-overlays-messaging.md',
        anchor: 'segmentedcontrol',
      },
      consumers: [
        {
          repository: 'langyspace-admin',
          path: 'src/testing/DesignSystemAudit/index.tsx',
        },
        {
          repository: 'langyspace-cupom',
          path: 'src/pages/CouponMetricsPage/index.tsx',
        },
      ],
    },
  },
  {
    browserSmoke: complete,
    exportName: 'StatePanel',
    interactive: false,
    layer: 'molecule',
    ownerPath: 'src/molecules/StatePanel/index.tsx',
    runtimeMarker: 'lsui-sc-state-panel',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/molecules/StatePanel/StatePanel.stories.tsx',
      title: 'Molecules/State/StatePanel',
    },
    test: {
      ...complete,
      path: 'src/molecules/StatePanel/StatePanel.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/molecules/StatePanel/types.ts',
      documentation: {
        path: 'docs/components/data-feedback.md',
        anchor: 'statepanel',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/LearningPreviewShell/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/StudentMessages/index.tsx',
        },
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/FinanceImportDialog/index.tsx',
        },
      ],
    },
  },
  {
    browserSmoke: complete,
    exportName: 'Pressable',
    interactive: true,
    layer: 'primitive',
    ownerPath: 'src/primitives/Pressable/index.tsx',
    runtimeMarker: 'lsui-sc-pressable',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/primitives/Pressable/Pressable.stories.tsx',
      title: 'Primitives/Pressable',
    },
    test: {
      ...complete,
      path: 'src/primitives/Pressable/Pressable.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/primitives/Pressable/types.ts',
      documentation: {
        path: 'docs/components/controls.md',
        anchor: 'pressable',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/LessonPreviewTabs/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/ChoosePlan/sections/BrandBar/index.tsx',
        },
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/PortalAction.tsx',
        },
        {
          repository: 'langyspace',
          path: 'src/components/layout/LessonShowcaseBottomNav/index.tsx',
        },
      ],
    },
  },
  {
    browserSmoke: complete,
    exportName: 'Spinner',
    interactive: false,
    layer: 'primitive',
    ownerPath: 'src/primitives/Spinner/index.tsx',
    runtimeMarker: 'lsui-sc-spinner',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/primitives/Spinner/Spinner.stories.tsx',
      title: 'Primitives/Spinner',
    },
    test: {
      ...complete,
      path: 'src/primitives/Spinner/Spinner.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/primitives/Spinner/types.ts',
      documentation: {
        path: 'docs/components/data-feedback.md',
        anchor: 'spinner',
      },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/NotificationDrawer/index.tsx',
        },
        {
          repository: 'langyspace-student',
          path: 'src/pages/StudentLive/LiveChat.tsx',
        },
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/AdminGlobalSearch/index.tsx',
        },
      ],
    },
  },
] as const satisfies readonly ComponentContract[]
