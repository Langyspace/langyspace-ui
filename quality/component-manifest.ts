type Coverage = { status: 'complete' }

export interface ComponentContract {
  compatibilityFor?: string
  browserSmoke: Coverage
  exportName: string
  interactive: boolean
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
    ownerPath: 'src/components/Calendar/ScheduleCalendar.tsx',
    runtimeMarker: 'lsui-sc-schedule-calendar',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Calendar/ScheduleCalendar.stories.tsx',
      title: 'Calendar/ScheduleCalendar',
    },
    test: {
      ...complete,
      path: 'src/components/Calendar/ScheduleCalendar.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Calendar/ScheduleCalendar.types.ts',
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
    ownerPath: 'src/components/Flashcard/FlashcardFlipButton.tsx',
    runtimeMarker: 'lsui-sc-flashcard-flip-button',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardFlipButton.stories.tsx',
      title: 'Flashcard/FlashcardFlipButton',
    },
    test: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardFlipButton.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Flashcard/FlashcardFlipButton.tsx',
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
    ownerPath: 'src/components/Flashcard/FlashcardAudioButton.tsx',
    runtimeMarker: 'lsui-sc-flashcard-audio-button',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardAudioButton.stories.tsx',
      title: 'Flashcard/FlashcardAudioButton',
    },
    test: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardAudioButton.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Flashcard/FlashcardAudioButton.tsx',
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
    ownerPath: 'src/components/Flashcard/FlashcardWordSkeleton.tsx',
    runtimeMarker: 'lsui-sc-flashcard-word-skeleton',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardWordSkeleton.stories.tsx',
      title: 'Flashcard/FlashcardWordSkeleton',
    },
    test: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardWordSkeleton.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Flashcard/FlashcardWordSkeleton.tsx',
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
    ownerPath: 'src/components/Shadowing/ShadowingWord.tsx',
    runtimeMarker: 'lsui-sc-shadowing-word',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Shadowing/ShadowingWord.stories.tsx',
      title: 'Shadowing/ShadowingWord',
    },
    test: {
      status: 'complete',
      path: 'src/components/Shadowing/ShadowingWord.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Shadowing/ShadowingWord.tsx',
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
    ownerPath: 'src/components/Card/CardLink.tsx',
    runtimeMarker: 'lsui-sc-card-link',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Card/CardLink.stories.tsx',
      title: 'Card/CardLink',
    },
    test: {
      status: 'complete',
      path: 'src/components/Card/CardLink.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Card/CardLink.tsx',
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
    ownerPath: 'src/components/Notice/ConnectionNotice.tsx',
    runtimeMarker: 'lsui-sc-connection-notice',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Notice/ConnectionNotice.stories.tsx',
      title: 'Notice/ConnectionNotice',
    },
    test: {
      status: 'complete',
      path: 'src/components/Notice/ConnectionNotice.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Notice/ConnectionNotice.tsx',
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
    ownerPath: 'src/components/Quiz/QuizBadge.tsx',
    runtimeMarker: 'lsui-sc-quiz-badge',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Quiz/QuizBadge.stories.tsx',
      title: 'Quiz/QuizBadge',
    },
    test: {
      status: 'complete',
      path: 'src/components/Quiz/QuizBadge.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Quiz/QuizBadge.tsx',
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
    ownerPath: 'src/components/Quiz/QuizMetadata.tsx',
    runtimeMarker: 'lsui-sc-quiz-metadata',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Quiz/QuizMetadata.stories.tsx',
      title: 'Quiz/QuizMetadata',
    },
    test: {
      status: 'complete',
      path: 'src/components/Quiz/QuizMetadata.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Quiz/QuizMetadata.tsx',
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
    ownerPath: 'src/components/Quiz/QuizPromptHeader.tsx',
    runtimeMarker: 'lsui-sc-quiz-prompt-header',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Quiz/QuizPromptHeader.stories.tsx',
      title: 'Quiz/QuizPromptHeader',
    },
    test: {
      status: 'complete',
      path: 'src/components/Quiz/QuizPromptHeader.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Quiz/QuizPromptHeader.tsx',
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
    ownerPath: 'src/components/Flashcard/FlashcardProgressSegment.tsx',
    runtimeMarker: 'lsui-sc-flashcard-progress-segment',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardProgressSegment.stories.tsx',
      title: 'Flashcard/FlashcardProgressSegment',
    },
    test: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardProgressSegment.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Flashcard/FlashcardProgressSegment.tsx',
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
    ownerPath: 'src/components/Flashcard/FlashcardCounter.tsx',
    runtimeMarker: 'lsui-sc-flashcard-counter',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardCounter.stories.tsx',
      title: 'Flashcard/FlashcardCounter',
    },
    test: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardCounter.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Flashcard/FlashcardCounter.tsx',
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
    ownerPath: 'src/components/Flashcard/FlashcardProgressTrack.tsx',
    runtimeMarker: 'lsui-sc-flashcard-progress-track',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardProgressTrack.stories.tsx',
      title: 'Flashcard/FlashcardProgressTrack',
    },
    test: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardProgressTrack.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Flashcard/FlashcardProgressTrack.tsx',
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
    ownerPath: 'src/components/Quiz/QuizBlank.tsx',
    runtimeMarker: 'lsui-sc-quiz-blank',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Quiz/QuizBlank.stories.tsx',
      title: 'Quiz/QuizBlank',
    },
    test: {
      status: 'complete',
      path: 'src/components/Quiz/QuizBlank.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Quiz/QuizBlank.tsx',
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
    ownerPath: 'src/components/Quiz/QuizQuestion.tsx',
    runtimeMarker: 'lsui-sc-quiz-question',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Quiz/QuizQuestion.stories.tsx',
      title: 'Quiz/QuizQuestion',
    },
    test: {
      status: 'complete',
      path: 'src/components/Quiz/QuizQuestion.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Quiz/QuizQuestion.tsx',
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
    ownerPath: 'src/components/Practice/PracticeCoverLabel.tsx',
    runtimeMarker: 'lsui-sc-practice-cover-label',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Practice/PracticeCoverLabel.stories.tsx',
      title: 'Practice/PracticeCoverLabel',
    },
    test: {
      status: 'complete',
      path: 'src/components/Practice/PracticeCoverLabel.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Practice/PracticeCoverLabel.tsx',
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
    ownerPath: 'src/components/Practice/PracticeCoverValue.tsx',
    runtimeMarker: 'lsui-sc-practice-cover-value',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Practice/PracticeCoverValue.stories.tsx',
      title: 'Practice/PracticeCoverValue',
    },
    test: {
      status: 'complete',
      path: 'src/components/Practice/PracticeCoverValue.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Practice/PracticeCoverValue.tsx',
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
    ownerPath: 'src/components/Practice/PracticeLevelBadge.tsx',
    runtimeMarker: 'lsui-sc-practice-level-badge',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Practice/PracticeLevelBadge.stories.tsx',
      title: 'Practice/PracticeLevelBadge',
    },
    test: {
      status: 'complete',
      path: 'src/components/Practice/PracticeLevelBadge.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Practice/PracticeLevelBadge.tsx',
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
    ownerPath: 'src/components/Practice/PracticeCardCover.tsx',
    runtimeMarker: 'lsui-sc-practice-card-cover',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Practice/PracticeCardCover.stories.tsx',
      title: 'Practice/PracticeCardCover',
    },
    test: {
      status: 'complete',
      path: 'src/components/Practice/PracticeCardCover.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Practice/PracticeCardCover.tsx',
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
    ownerPath: 'src/components/Practice/PracticeCard.tsx',
    runtimeMarker: 'lsui-sc-practice-card',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Practice/PracticeCard.stories.tsx',
      title: 'Practice/PracticeCard',
    },
    test: {
      status: 'complete',
      path: 'src/components/Practice/PracticeCard.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Practice/PracticeCard.tsx',
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
    ownerPath: 'src/components/Calendar/ScheduleRow.tsx',
    runtimeMarker: 'lsui-sc-schedule-row',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Calendar/ScheduleRow.stories.tsx',
      title: 'Calendar/ScheduleRow',
    },
    test: {
      status: 'complete',
      path: 'src/components/Calendar/ScheduleRow.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Calendar/ScheduleRow.tsx',
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
    compatibilityFor: 'ScheduleCalendar',
    interactive: true,
    ownerPath: 'src/components/Calendar/CalendarParts.tsx',
    runtimeMarker: 'lsui-sc-calendar-time-slot',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Calendar/CalendarTimeSlot.stories.tsx',
      title: 'Compatibility/CalendarTimeSlot',
    },
    test: {
      status: 'complete',
      path: 'src/components/Calendar/CalendarTimeSlot.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Calendar/CalendarParts.tsx',
      documentation: {
        path: 'docs/components/calendar.md',
        anchor: 'calendartimeslot',
      },
      consumers: [
        {
          repository: 'langyspace-ui',
          path: 'src/components/Calendar/WeekView.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'SessionProgress',
    interactive: false,
    ownerPath: 'src/components/SessionProgress/SessionProgress.tsx',
    runtimeMarker: 'lsui-sc-session-progress',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/SessionProgress/SessionProgress.stories.tsx',
      title: 'SessionProgress',
    },
    test: {
      status: 'complete',
      path: 'src/components/SessionProgress/SessionProgress.test.tsx',
    },
    reference: {
      propsPath: 'src/components/SessionProgress/SessionProgress.tsx',
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
    ownerPath: 'src/components/SectionHeader/PageDescription.tsx',
    runtimeMarker: 'lsui-sc-page-description',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/SectionHeader/PageDescription.stories.tsx',
      title: 'SectionHeader/PageDescription',
    },
    test: {
      status: 'complete',
      path: 'src/components/SectionHeader/PageDescription.test.tsx',
    },
    reference: {
      propsPath: 'src/components/SectionHeader/PageDescription.tsx',
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
    ownerPath: 'src/components/SectionHeader/PageTitle.tsx',
    runtimeMarker: 'lsui-sc-page-title',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/SectionHeader/PageTitle.stories.tsx',
      title: 'SectionHeader/PageTitle',
    },
    test: {
      status: 'complete',
      path: 'src/components/SectionHeader/PageTitle.test.tsx',
    },
    reference: {
      propsPath: 'src/components/SectionHeader/PageTitle.tsx',
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
    ownerPath: 'src/components/Auth/AuthLegalText.tsx',
    runtimeMarker: 'lsui-sc-auth-legal-text',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Auth/AuthLegalText.stories.tsx',
      title: 'Auth/AuthLegalText',
    },
    test: {
      status: 'complete',
      path: 'src/components/Auth/AuthLegalText.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Auth/AuthLegalText.tsx',
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
    ownerPath: 'src/components/Auth/AuthTokenLabel.tsx',
    runtimeMarker: 'lsui-sc-auth-token-label',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Auth/AuthTokenLabel.stories.tsx',
      title: 'Auth/AuthTokenLabel',
    },
    test: {
      status: 'complete',
      path: 'src/components/Auth/AuthTokenLabel.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Auth/AuthTokenLabel.tsx',
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
    ownerPath: 'src/components/Auth/AuthChannelIcon.tsx',
    runtimeMarker: 'lsui-sc-auth-channel-icon',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Auth/AuthChannelIcon.stories.tsx',
      title: 'Auth/AuthChannelIcon',
    },
    test: {
      status: 'complete',
      path: 'src/components/Auth/AuthChannelIcon.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Auth/AuthChannelIcon.tsx',
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
    ownerPath: 'src/components/Auth/AuthChannelHint.tsx',
    runtimeMarker: 'lsui-sc-auth-channel-hint',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Auth/AuthChannelHint.stories.tsx',
      title: 'Auth/AuthChannelHint',
    },
    test: {
      status: 'complete',
      path: 'src/components/Auth/AuthChannelHint.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Auth/AuthChannelHint.tsx',
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
    ownerPath: 'src/components/Shadowing/ShadowingRepetitions.tsx',
    runtimeMarker: 'lsui-sc-shadowing-repetitions',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Shadowing/ShadowingRepetitions.stories.tsx',
      title: 'Shadowing/ShadowingRepetitions',
    },
    test: {
      status: 'complete',
      path: 'src/components/Shadowing/ShadowingRepetitions.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Shadowing/ShadowingRepetitions.tsx',
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
    ownerPath: 'src/components/Skeleton/Skeleton.tsx',
    runtimeMarker: 'lsui-sc-skeleton',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Skeleton/Skeleton.stories.tsx',
      title: 'Skeleton',
    },
    test: {
      status: 'complete',
      path: 'src/components/Skeleton/Skeleton.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Skeleton/Skeleton.tsx',
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
    ownerPath: 'src/components/ChoiceCard/ChoiceCard.tsx',
    runtimeMarker: 'lsui-sc-choice-card',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/ChoiceCard/ChoiceCard.stories.tsx',
      title: 'ChoiceCard',
    },
    test: {
      status: 'complete',
      path: 'src/components/ChoiceCard/ChoiceCard.test.tsx',
    },
    reference: {
      propsPath: 'src/components/ChoiceCard/ChoiceCard.tsx',
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
    ownerPath: 'src/components/ToggleButton/ToggleButton.tsx',
    runtimeMarker: 'lsui-sc-toggle-button',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/ToggleButton/ToggleButton.stories.tsx',
      title: 'ToggleButton',
    },
    test: {
      status: 'complete',
      path: 'src/components/ToggleButton/ToggleButton.test.tsx',
    },
    reference: {
      propsPath: 'src/components/ToggleButton/ToggleButton.tsx',
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
    ownerPath: 'src/components/RadioButton/RadioButton.tsx',
    runtimeMarker: 'lsui-sc-radio-button',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/RadioButton/RadioButton.stories.tsx',
      title: 'RadioButton',
    },
    test: {
      status: 'complete',
      path: 'src/components/RadioButton/RadioButton.test.tsx',
    },
    reference: {
      propsPath: 'src/components/RadioButton/RadioButton.tsx',
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
    ownerPath: 'src/components/Checkbox/Checkbox.tsx',
    runtimeMarker: 'lsui-sc-checkbox',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Checkbox/Checkbox.stories.tsx',
      title: 'Checkbox',
    },
    test: {
      status: 'complete',
      path: 'src/components/Checkbox/Checkbox.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Checkbox/Checkbox.tsx',
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
    ownerPath: 'src/components/Charts/WeeklyCountChart.tsx',
    runtimeMarker: 'lsui-sc-weekly-count-chart',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Charts/WeeklyCountChart.stories.tsx',
      title: 'Charts/WeeklyCountChart',
    },
    test: {
      status: 'complete',
      path: 'src/components/Charts/WeeklyCountChart.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Charts/WeeklyCountChart.tsx',
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
    ownerPath: 'src/components/Charts/GroupedBarChart.tsx',
    runtimeMarker: 'lsui-sc-grouped-bar-chart',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Charts/GroupedBarChart.stories.tsx',
      title: 'Charts/GroupedBarChart',
    },
    test: {
      status: 'complete',
      path: 'src/components/Charts/GroupedBarChart.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Charts/GroupedBarChart.tsx',
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
    ownerPath: 'src/components/Details/KeyValueList.tsx',
    runtimeMarker: 'lsui-sc-key-value-list',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Details/KeyValueList.stories.tsx',
      title: 'Details/KeyValueList',
    },
    test: {
      status: 'complete',
      path: 'src/components/Details/KeyValueList.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Details/KeyValueList.tsx',
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
    ownerPath: 'src/components/Shadowing/ShadowingControlCluster.tsx',
    runtimeMarker: 'lsui-sc-shadowing-control-cluster',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Shadowing/ShadowingControlCluster.stories.tsx',
      title: 'Shadowing/ShadowingControlCluster',
    },
    test: {
      status: 'complete',
      path: 'src/components/Shadowing/ShadowingControlCluster.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Shadowing/ShadowingControlCluster.tsx',
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
    ownerPath: 'src/components/Shadowing/ShadowingControlDock.tsx',
    runtimeMarker: 'lsui-sc-shadowing-control-dock',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Shadowing/ShadowingControlDock.stories.tsx',
      title: 'Shadowing/ShadowingControlDock',
    },
    test: {
      status: 'complete',
      path: 'src/components/Shadowing/ShadowingControlDock.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Shadowing/ShadowingControlDock.tsx',
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
    ownerPath: 'src/components/Shadowing/ShadowingTranslation.tsx',
    runtimeMarker: 'lsui-sc-shadowing-translation',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Shadowing/ShadowingTranslation.stories.tsx',
      title: 'Shadowing/ShadowingTranslation',
    },
    test: {
      status: 'complete',
      path: 'src/components/Shadowing/ShadowingTranslation.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Shadowing/ShadowingTranslation.tsx',
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
    ownerPath: 'src/components/Shadowing/ShadowingActivePhrase.tsx',
    runtimeMarker: 'lsui-sc-shadowing-active-phrase',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Shadowing/ShadowingActivePhrase.stories.tsx',
      title: 'Shadowing/ShadowingActivePhrase',
    },
    test: {
      status: 'complete',
      path: 'src/components/Shadowing/ShadowingActivePhrase.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Shadowing/ShadowingActivePhrase.tsx',
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
    ownerPath: 'src/components/Shadowing/ShadowingContextPhrase.tsx',
    runtimeMarker: 'lsui-sc-shadowing-context-phrase',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Shadowing/ShadowingContextPhrase.stories.tsx',
      title: 'Shadowing/ShadowingContextPhrase',
    },
    test: {
      status: 'complete',
      path: 'src/components/Shadowing/ShadowingContextPhrase.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Shadowing/ShadowingContextPhrase.tsx',
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
    ownerPath: 'src/components/Shadowing/ShadowingPhraseStack.tsx',
    runtimeMarker: 'lsui-sc-shadowing-phrase-stack',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Shadowing/ShadowingPhraseStack.stories.tsx',
      title: 'Shadowing/ShadowingPhraseStack',
    },
    test: {
      status: 'complete',
      path: 'src/components/Shadowing/ShadowingPhraseStack.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Shadowing/ShadowingPhraseStack.tsx',
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
    exportName: 'ShadowingPanel',
    interactive: false,
    ownerPath: 'src/components/Shadowing/ShadowingPanel.tsx',
    runtimeMarker: 'lsui-sc-shadowing-panel',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Shadowing/ShadowingPanel.stories.tsx',
      title: 'Shadowing/ShadowingPanel',
    },
    test: {
      status: 'complete',
      path: 'src/components/Shadowing/ShadowingPanel.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Shadowing/ShadowingPanel.tsx',
      documentation: {
        path: 'docs/components/practice.md',
        anchor: 'shadowingpanel',
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
    exportName: 'ShadowingReader',
    interactive: false,
    ownerPath: 'src/components/Shadowing/ShadowingReader.tsx',
    runtimeMarker: 'lsui-sc-shadowing-reader',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Shadowing/ShadowingReader.stories.tsx',
      title: 'Shadowing/ShadowingReader',
    },
    test: {
      status: 'complete',
      path: 'src/components/Shadowing/ShadowingReader.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Shadowing/ShadowingReader.tsx',
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
    ownerPath: 'src/components/Flashcard/FlashcardFeedback.tsx',
    runtimeMarker: 'lsui-sc-flashcard-feedback',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardFeedback.stories.tsx',
      title: 'Flashcard/FlashcardFeedback',
    },
    test: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardFeedback.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Flashcard/FlashcardFeedback.tsx',
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
    ownerPath: 'src/components/Flashcard/FlashcardSwiper.tsx',
    runtimeMarker: 'lsui-sc-flashcard-swiper',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardSwiper.stories.tsx',
      title: 'Flashcard/FlashcardSwiper',
    },
    test: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardSwiper.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Flashcard/FlashcardSwiper.tsx',
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
    ownerPath: 'src/components/Flashcard/FlashcardFlip.tsx',
    runtimeMarker: 'lsui-sc-flashcard-flip',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardFlip.stories.tsx',
      title: 'Flashcard/FlashcardFlip',
    },
    test: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardFlip.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Flashcard/FlashcardFlip.tsx',
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
    ownerPath: 'src/components/Flashcard/FlashcardGhost.tsx',
    runtimeMarker: 'lsui-sc-flashcard-ghost',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardGhost.stories.tsx',
      title: 'Flashcard/FlashcardGhost',
    },
    test: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardGhost.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Flashcard/FlashcardGhost.tsx',
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
    ownerPath: 'src/components/Flashcard/FlashcardFace.tsx',
    runtimeMarker: 'lsui-sc-flashcard-face',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardFace.stories.tsx',
      title: 'Flashcard/FlashcardFace',
    },
    test: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardFace.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Flashcard/FlashcardFace.tsx',
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
    ownerPath: 'src/components/Flashcard/FlashcardFlipHint.tsx',
    runtimeMarker: 'lsui-sc-flashcard-flip-hint',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardFlipHint.stories.tsx',
      title: 'Flashcard/FlashcardFlipHint',
    },
    test: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardFlipHint.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Flashcard/FlashcardFlipHint.tsx',
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
    ownerPath: 'src/components/Flashcard/FlashcardBack.tsx',
    runtimeMarker: 'lsui-sc-flashcard-back',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardBack.stories.tsx',
      title: 'Flashcard/FlashcardBack',
    },
    test: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardBack.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Flashcard/FlashcardBack.tsx',
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
    ownerPath: 'src/components/Flashcard/FlashcardWord.tsx',
    runtimeMarker: 'lsui-sc-flashcard-word',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardWord.stories.tsx',
      title: 'Flashcard/FlashcardWord',
    },
    test: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardWord.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Flashcard/FlashcardWord.tsx',
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
    ownerPath: 'src/components/Flashcard/FlashcardImagePanel.tsx',
    runtimeMarker: 'lsui-sc-flashcard-image-panel',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardImagePanel.stories.tsx',
      title: 'Flashcard/FlashcardImagePanel',
    },
    test: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardImagePanel.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Flashcard/FlashcardImagePanel.tsx',
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
    ownerPath: 'src/components/Flashcard/FlashcardFront.tsx',
    runtimeMarker: 'lsui-sc-flashcard-front',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardFront.stories.tsx',
      title: 'Flashcard/FlashcardFront',
    },
    test: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardFront.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Flashcard/FlashcardFront.tsx',
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
    ownerPath: 'src/components/Flashcard/FlashcardDeck.tsx',
    runtimeMarker: 'lsui-sc-flashcard-deck',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardDeck.stories.tsx',
      title: 'Flashcard/FlashcardDeck',
    },
    test: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardDeck.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Flashcard/FlashcardDeck.tsx',
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
    ownerPath: 'src/components/Flashcard/FlashcardStage.tsx',
    runtimeMarker: 'lsui-sc-flashcard-stage',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardStage.stories.tsx',
      title: 'Flashcard/FlashcardStage',
    },
    test: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardStage.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Flashcard/FlashcardStage.tsx',
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
    ownerPath: 'src/components/Flashcard/FlashcardFrame.tsx',
    runtimeMarker: 'lsui-sc-flashcard-frame',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardFrame.stories.tsx',
      title: 'Flashcard/FlashcardFrame',
    },
    test: {
      status: 'complete',
      path: 'src/components/Flashcard/FlashcardFrame.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Flashcard/FlashcardFrame.tsx',
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
    compatibilityFor: 'ScheduleCalendar',
    interactive: true,
    ownerPath: 'src/components/Calendar/CalendarParts.tsx',
    runtimeMarker: 'lsui-sc-timeline-event',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Calendar/TimelineEvent.stories.tsx',
      title: 'Compatibility/TimelineEvent',
    },
    test: {
      status: 'complete',
      path: 'src/components/Calendar/TimelineEvent.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Calendar/CalendarParts.tsx',
      documentation: {
        path: 'docs/components/calendar.md',
        anchor: 'timelineevent',
      },
      consumers: [
        {
          repository: 'langyspace-ui',
          path: 'src/components/Calendar/WeekView.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'CalendarEvent',
    compatibilityFor: 'ScheduleCalendar',
    interactive: true,
    ownerPath: 'src/components/Calendar/CalendarParts.tsx',
    runtimeMarker: 'lsui-sc-calendar-event',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Calendar/CalendarEvent.stories.tsx',
      title: 'Compatibility/CalendarEvent',
    },
    test: {
      status: 'complete',
      path: 'src/components/Calendar/CalendarEvent.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Calendar/CalendarParts.tsx',
      documentation: {
        path: 'docs/components/calendar.md',
        anchor: 'calendarevent',
      },
      consumers: [
        {
          repository: 'langyspace-ui',
          path: 'src/components/Calendar/MonthView.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'CalendarDayNumber',
    compatibilityFor: 'ScheduleCalendar',
    interactive: false,
    ownerPath: 'src/components/Calendar/CalendarParts.tsx',
    runtimeMarker: 'lsui-sc-calendar-day-number',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Calendar/CalendarDayNumber.stories.tsx',
      title: 'Compatibility/CalendarDayNumber',
    },
    test: {
      status: 'complete',
      path: 'src/components/Calendar/CalendarDayNumber.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Calendar/CalendarParts.tsx',
      documentation: {
        path: 'docs/components/calendar.md',
        anchor: 'calendardaynumber',
      },
      consumers: [
        {
          repository: 'langyspace-ui',
          path: 'src/components/Calendar/MonthView.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'CalendarDay',
    compatibilityFor: 'ScheduleCalendar',
    interactive: false,
    ownerPath: 'src/components/Calendar/CalendarParts.tsx',
    runtimeMarker: 'lsui-sc-calendar-day',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Calendar/CalendarDay.stories.tsx',
      title: 'Compatibility/CalendarDay',
    },
    test: {
      status: 'complete',
      path: 'src/components/Calendar/CalendarDay.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Calendar/CalendarParts.tsx',
      documentation: {
        path: 'docs/components/calendar.md',
        anchor: 'calendarday',
      },
      consumers: [
        {
          repository: 'langyspace-ui',
          path: 'src/components/Calendar/MonthView.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'CalendarWeekGrid',
    compatibilityFor: 'ScheduleCalendar',
    interactive: false,
    ownerPath: 'src/components/Calendar/CalendarParts.tsx',
    runtimeMarker: 'lsui-sc-calendar-week-grid',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Calendar/CalendarWeekGrid.stories.tsx',
      title: 'Compatibility/CalendarWeekGrid',
    },
    test: {
      status: 'complete',
      path: 'src/components/Calendar/CalendarWeekGrid.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Calendar/CalendarParts.tsx',
      documentation: {
        path: 'docs/components/calendar.md',
        anchor: 'calendarweekgrid',
      },
      consumers: [
        {
          repository: 'langyspace-ui',
          path: 'src/components/Calendar/WeekView.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'CalendarMonthGrid',
    compatibilityFor: 'ScheduleCalendar',
    interactive: false,
    ownerPath: 'src/components/Calendar/CalendarParts.tsx',
    runtimeMarker: 'lsui-sc-calendar-month-grid',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Calendar/CalendarMonthGrid.stories.tsx',
      title: 'Compatibility/CalendarMonthGrid',
    },
    test: {
      status: 'complete',
      path: 'src/components/Calendar/CalendarMonthGrid.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Calendar/CalendarParts.tsx',
      documentation: {
        path: 'docs/components/calendar.md',
        anchor: 'calendarmonthgrid',
      },
      consumers: [
        {
          repository: 'langyspace-ui',
          path: 'src/components/Calendar/MonthView.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'CalendarScroller',
    interactive: false,
    ownerPath: 'src/components/Calendar/CalendarScroller.tsx',
    runtimeMarker: 'lsui-sc-calendar-scroller',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Calendar/CalendarScroller.stories.tsx',
      title: 'Calendar/CalendarScroller',
    },
    test: {
      status: 'complete',
      path: 'src/components/Calendar/CalendarScroller.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Calendar/CalendarScroller.tsx',
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
    ownerPath: 'src/components/Navigation/BottomNavigationLink.tsx',
    runtimeMarker: 'lsui-sc-bottom-navigation-link',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Navigation/BottomNavigationLink.stories.tsx',
      title: 'Navigation/BottomNavigationLink',
    },
    test: {
      status: 'complete',
      path: 'src/components/Navigation/BottomNavigationLink.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Navigation/BottomNavigationLink.tsx',
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
    ownerPath: 'src/components/Navigation/BottomNavigation.tsx',
    runtimeMarker: 'lsui-sc-bottom-navigation',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Navigation/BottomNavigation.stories.tsx',
      title: 'Navigation/BottomNavigation',
    },
    test: {
      status: 'complete',
      path: 'src/components/Navigation/BottomNavigation.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Navigation/BottomNavigation.tsx',
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
    ownerPath: 'src/components/Message/ConversationRow.tsx',
    runtimeMarker: 'lsui-sc-conversation-row',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Message/ConversationRow.stories.tsx',
      title: 'Message/ConversationRow',
    },
    test: {
      status: 'complete',
      path: 'src/components/Message/ConversationRow.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Message/ConversationRow.tsx',
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
    ownerPath: 'src/components/NotificationItem/NotificationItem.tsx',
    runtimeMarker: 'lsui-sc-notification-item',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/NotificationItem/NotificationItem.stories.tsx',
      title: 'NotificationItem',
    },
    test: {
      status: 'complete',
      path: 'src/components/NotificationItem/NotificationItem.test.tsx',
    },
    reference: {
      propsPath: 'src/components/NotificationItem/NotificationItem.tsx',
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
    ownerPath: 'src/components/Navigation/NavigationButton.tsx',
    runtimeMarker: 'lsui-sc-navigation-button',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Navigation/NavigationButton.stories.tsx',
      title: 'Navigation/NavigationButton',
    },
    test: {
      status: 'complete',
      path: 'src/components/Navigation/NavigationButton.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Navigation/NavigationButton.tsx',
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
    ownerPath: 'src/components/Navigation/NavigationLink.tsx',
    runtimeMarker: 'lsui-sc-navigation-link',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Navigation/NavigationLink.stories.tsx',
      title: 'Navigation/NavigationLink',
    },
    test: {
      status: 'complete',
      path: 'src/components/Navigation/NavigationLink.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Navigation/NavigationLink.tsx',
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
    ownerPath: 'src/components/Navigation/SidebarNavigation.tsx',
    runtimeMarker: 'lsui-sc-sidebar-navigation',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Navigation/SidebarNavigation.stories.tsx',
      title: 'Navigation/SidebarNavigation',
    },
    test: {
      status: 'complete',
      path: 'src/components/Navigation/SidebarNavigation.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Navigation/SidebarNavigation.tsx',
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
    ownerPath: 'src/components/Navigation/SidebarFrame.tsx',
    runtimeMarker: 'lsui-sc-sidebar-frame',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Navigation/SidebarFrame.stories.tsx',
      title: 'Navigation/SidebarFrame',
    },
    test: {
      status: 'complete',
      path: 'src/components/Navigation/SidebarFrame.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Navigation/SidebarFrame.tsx',
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
    compatibilityFor: 'MetricSummary',
    interactive: false,
    ownerPath: 'src/components/MetricSummary/MetricSummary.compatibility.tsx',
    runtimeMarker: 'lsui-sc-metric-label',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/MetricSummary/MetricLabel.stories.tsx',
      title: 'Compatibility/MetricLabel',
    },
    test: {
      status: 'complete',
      path: 'src/components/MetricSummary/MetricLabel.test.tsx',
    },
    reference: {
      propsPath: 'src/components/MetricSummary/MetricSummary.compatibility.tsx',
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
    compatibilityFor: 'MetricSummary',
    interactive: false,
    ownerPath: 'src/components/MetricSummary/MetricSummary.compatibility.tsx',
    runtimeMarker: 'lsui-sc-metric-value',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/MetricSummary/MetricValue.stories.tsx',
      title: 'Compatibility/MetricValue',
    },
    test: {
      status: 'complete',
      path: 'src/components/MetricSummary/MetricValue.test.tsx',
    },
    reference: {
      propsPath: 'src/components/MetricSummary/MetricSummary.compatibility.tsx',
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
    ownerPath: 'src/components/MetricSummary/MetricSummary.tsx',
    runtimeMarker: 'lsui-sc-metric-summary',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/MetricSummary/MetricSummary.stories.tsx',
      title: 'MetricSummary',
    },
    test: {
      status: 'complete',
      path: 'src/components/MetricSummary/MetricSummary.test.tsx',
    },
    reference: {
      propsPath: 'src/components/MetricSummary/MetricSummary.tsx',
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
    compatibilityFor: 'Button',
    interactive: true,
    ownerPath: 'src/components/Button/Button.compatibility.tsx',
    runtimeMarker: 'lsui-sc-text-button',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Button/TextButton.stories.tsx',
      title: 'Compatibility/TextButton',
    },
    test: {
      status: 'complete',
      path: 'src/components/Button/TextButton.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Button/Button.compatibility.tsx',
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
    ownerPath: 'src/components/Details/DetailRow.tsx',
    runtimeMarker: 'lsui-sc-detail-row',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Details/DetailRow.stories.tsx',
      title: 'Details/DetailRow',
    },
    test: {
      status: 'complete',
      path: 'src/components/Details/DetailRow.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Details/DetailRow.tsx',
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
    ownerPath: 'src/components/Details/DefinitionItem.tsx',
    runtimeMarker: 'lsui-sc-definition-item',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Details/DefinitionItem.stories.tsx',
      title: 'Details/DefinitionItem',
    },
    test: {
      status: 'complete',
      path: 'src/components/Details/DefinitionItem.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Details/DefinitionItem.tsx',
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
    compatibilityFor: 'StatCard',
    interactive: false,
    ownerPath: 'src/components/StatCard/StatCard.compatibility.tsx',
    runtimeMarker: 'lsui-sc-stat-action',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/StatCard/StatAction.stories.tsx',
      title: 'Compatibility/StatAction',
    },
    test: {
      status: 'complete',
      path: 'src/components/StatCard/StatAction.test.tsx',
    },
    reference: {
      propsPath: 'src/components/StatCard/StatCard.compatibility.tsx',
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
    compatibilityFor: 'StatCard',
    interactive: false,
    ownerPath: 'src/components/StatCard/StatCard.compatibility.tsx',
    runtimeMarker: 'lsui-sc-stat-label',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/StatCard/StatLabel.stories.tsx',
      title: 'Compatibility/StatLabel',
    },
    test: {
      status: 'complete',
      path: 'src/components/StatCard/StatLabel.test.tsx',
    },
    reference: {
      propsPath: 'src/components/StatCard/StatCard.compatibility.tsx',
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
    compatibilityFor: 'StatCard',
    interactive: false,
    ownerPath: 'src/components/StatCard/StatCard.compatibility.tsx',
    runtimeMarker: 'lsui-sc-stat-value',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/StatCard/StatValue.stories.tsx',
      title: 'Compatibility/StatValue',
    },
    test: {
      status: 'complete',
      path: 'src/components/StatCard/StatValue.test.tsx',
    },
    reference: {
      propsPath: 'src/components/StatCard/StatCard.compatibility.tsx',
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
    ownerPath: 'src/components/StatCard/StatCard.tsx',
    runtimeMarker: 'lsui-sc-stat-card',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/StatCard/StatCard.stories.tsx',
      title: 'StatCard',
    },
    test: {
      status: 'complete',
      path: 'src/components/StatCard/StatCard.test.tsx',
    },
    reference: {
      propsPath: 'src/components/StatCard/StatCard.tsx',
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
    ownerPath: 'src/components/Notice/InlineNotice.tsx',
    runtimeMarker: 'lsui-sc-inline-notice',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Notice/InlineNotice.stories.tsx',
      title: 'Notice/InlineNotice',
    },
    test: {
      status: 'complete',
      path: 'src/components/Notice/InlineNotice.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Notice/InlineNotice.tsx',
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
    ownerPath: 'src/components/Form/FileInput.tsx',
    runtimeMarker: 'lsui-sc-file-input',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Form/FileInput.stories.tsx',
      title: 'Form/FileInput',
    },
    test: {
      status: 'complete',
      path: 'src/components/Form/FileInput.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Form/FileInput.tsx',
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
    ownerPath: 'src/components/Filter/FilterSelect.tsx',
    runtimeMarker: 'lsui-sc-filter-select',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Filter/FilterSelect.stories.tsx',
      title: 'Filter/FilterSelect',
    },
    test: {
      status: 'complete',
      path: 'src/components/Filter/FilterSelect.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Filter/FilterSelect.tsx',
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
    ownerPath: 'src/components/Form/FormActions.tsx',
    runtimeMarker: 'lsui-sc-form-actions',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Form/FormActions.stories.tsx',
      title: 'Form/FormActions',
    },
    test: {
      status: 'complete',
      path: 'src/components/Form/FormActions.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Form/FormActions.tsx',
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
    ownerPath: 'src/components/Form/FormError.tsx',
    runtimeMarker: 'lsui-sc-form-error',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Form/FormError.stories.tsx',
      title: 'Form/FormError',
    },
    test: {
      status: 'complete',
      path: 'src/components/Form/FormError.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Form/FormError.tsx',
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
    ownerPath: 'src/components/Form/FieldCounter.tsx',
    runtimeMarker: 'lsui-sc-field-counter',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Form/FieldCounter.stories.tsx',
      title: 'Form/FieldCounter',
    },
    test: {
      status: 'complete',
      path: 'src/components/Form/FieldCounter.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Form/FieldCounter.tsx',
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
    ownerPath: 'src/components/Form/FieldLabelRow.tsx',
    runtimeMarker: 'lsui-sc-field-label-row',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Form/FieldLabelRow.stories.tsx',
      title: 'Form/FieldLabelRow',
    },
    test: {
      status: 'complete',
      path: 'src/components/Form/FieldLabelRow.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Form/FieldLabelRow.tsx',
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
    ownerPath: 'src/components/Form/FormStack.tsx',
    runtimeMarker: 'lsui-sc-form-stack',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Form/FormStack.stories.tsx',
      title: 'Form/FormStack',
    },
    test: {
      status: 'complete',
      path: 'src/components/Form/FormStack.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Form/FormStack.tsx',
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
    ownerPath: 'src/components/Document/DocumentNavigationLink.tsx',
    runtimeMarker: 'lsui-sc-document-navigation-link',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Document/DocumentNavigationLink.stories.tsx',
      title: 'Document/DocumentNavigationLink',
    },
    test: {
      status: 'complete',
      path: 'src/components/Document/DocumentNavigationLink.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Document/DocumentNavigationLink.tsx',
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
    ownerPath: 'src/components/Brand/BrandLink.tsx',
    runtimeMarker: 'lsui-sc-brand-link',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Brand/BrandLink.stories.tsx',
      title: 'Brand/BrandLink',
    },
    test: {
      status: 'complete',
      path: 'src/components/Brand/BrandLink.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Brand/BrandLink.tsx',
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
    ownerPath: 'src/components/Document/DocumentNavigation.tsx',
    runtimeMarker: 'lsui-sc-document-navigation',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Document/DocumentNavigation.stories.tsx',
      title: 'Document/DocumentNavigation',
    },
    test: {
      status: 'complete',
      path: 'src/components/Document/DocumentNavigation.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Document/DocumentNavigation.tsx',
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
    ownerPath: 'src/components/Document/DocumentHeaderContent.tsx',
    runtimeMarker: 'lsui-sc-document-header-content',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Document/DocumentHeaderContent.stories.tsx',
      title: 'Document/DocumentHeaderContent',
    },
    test: {
      status: 'complete',
      path: 'src/components/Document/DocumentHeaderContent.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Document/DocumentHeaderContent.tsx',
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
    ownerPath: 'src/components/Document/DocumentHeader.tsx',
    runtimeMarker: 'lsui-sc-document-header',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Document/DocumentHeader.stories.tsx',
      title: 'Document/DocumentHeader',
    },
    test: {
      status: 'complete',
      path: 'src/components/Document/DocumentHeader.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Document/DocumentHeader.tsx',
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
    ownerPath: 'src/components/Auth/AuthFeature.tsx',
    runtimeMarker: 'lsui-sc-auth-feature',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Auth/AuthFeature.stories.tsx',
      title: 'Auth/AuthFeature',
    },
    test: {
      status: 'complete',
      path: 'src/components/Auth/AuthFeature.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Auth/AuthFeature.tsx',
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
    ownerPath: 'src/components/Auth/AuthFooterLink.tsx',
    runtimeMarker: 'lsui-sc-auth-footer-link',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Auth/AuthFooterLink.stories.tsx',
      title: 'Auth/AuthFooterLink',
    },
    test: {
      status: 'complete',
      path: 'src/components/Auth/AuthFooterLink.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Auth/AuthFooterLink.tsx',
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
    ownerPath: 'src/components/Auth/AuthMobileFooter.tsx',
    runtimeMarker: 'lsui-sc-auth-mobile-footer',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Auth/AuthMobileFooter.stories.tsx',
      title: 'Auth/AuthMobileFooter',
    },
    test: {
      status: 'complete',
      path: 'src/components/Auth/AuthMobileFooter.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Auth/AuthMobileFooter.tsx',
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
    ownerPath: 'src/components/Auth/AuthBrandFooter.tsx',
    runtimeMarker: 'lsui-sc-auth-brand-footer',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Auth/AuthBrandFooter.stories.tsx',
      title: 'Auth/AuthBrandFooter',
    },
    test: {
      status: 'complete',
      path: 'src/components/Auth/AuthBrandFooter.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Auth/AuthBrandFooter.tsx',
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
    ownerPath: 'src/components/Auth/AuthFeatureList.tsx',
    runtimeMarker: 'lsui-sc-auth-feature-list',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Auth/AuthFeatureList.stories.tsx',
      title: 'Auth/AuthFeatureList',
    },
    test: {
      status: 'complete',
      path: 'src/components/Auth/AuthFeatureList.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Auth/AuthFeatureList.tsx',
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
    ownerPath: 'src/components/Auth/AuthBrandDescription.tsx',
    runtimeMarker: 'lsui-sc-auth-brand-description',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Auth/AuthBrandDescription.stories.tsx',
      title: 'Auth/AuthBrandDescription',
    },
    test: {
      status: 'complete',
      path: 'src/components/Auth/AuthBrandDescription.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Auth/AuthBrandDescription.tsx',
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
    ownerPath: 'src/components/Auth/AuthBrandAccent.tsx',
    runtimeMarker: 'lsui-sc-auth-brand-accent',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Auth/AuthBrandAccent.stories.tsx',
      title: 'Auth/AuthBrandAccent',
    },
    test: {
      status: 'complete',
      path: 'src/components/Auth/AuthBrandAccent.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Auth/AuthBrandAccent.tsx',
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
    ownerPath: 'src/components/Auth/AuthBrandTitle.tsx',
    runtimeMarker: 'lsui-sc-auth-brand-title',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Auth/AuthBrandTitle.stories.tsx',
      title: 'Auth/AuthBrandTitle',
    },
    test: {
      status: 'complete',
      path: 'src/components/Auth/AuthBrandTitle.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Auth/AuthBrandTitle.tsx',
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
    ownerPath: 'src/components/Brand/BrandLogo.tsx',
    runtimeMarker: 'lsui-sc-brand-logo',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Brand/BrandLogo.stories.tsx',
      title: 'Brand/BrandLogo',
    },
    test: {
      status: 'complete',
      path: 'src/components/Brand/BrandLogo.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Brand/BrandLogo.tsx',
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
    compatibilityFor: 'PracticeResultPanel',
    interactive: false,
    ownerPath:
      'src/components/PracticeResultPanel/PracticeResultPanel.compatibility.tsx',
    runtimeMarker: 'lsui-sc-practice-result-actions',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/PracticeResultPanel/PracticeResultActions.stories.tsx',
      title: 'Compatibility/PracticeResultActions',
    },
    test: {
      status: 'complete',
      path: 'src/components/PracticeResultPanel/PracticeResultActions.test.tsx',
    },
    reference: {
      propsPath:
        'src/components/PracticeResultPanel/PracticeResultPanel.compatibility.tsx',
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
    compatibilityFor: 'PracticeResultPanel',
    interactive: false,
    ownerPath:
      'src/components/PracticeResultPanel/PracticeResultPanel.compatibility.tsx',
    runtimeMarker: 'lsui-sc-practice-result-description',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/PracticeResultPanel/PracticeResultDescription.stories.tsx',
      title: 'Compatibility/PracticeResultDescription',
    },
    test: {
      status: 'complete',
      path: 'src/components/PracticeResultPanel/PracticeResultDescription.test.tsx',
    },
    reference: {
      propsPath:
        'src/components/PracticeResultPanel/PracticeResultPanel.compatibility.tsx',
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
    compatibilityFor: 'PracticeResultPanel',
    interactive: false,
    ownerPath:
      'src/components/PracticeResultPanel/PracticeResultPanel.compatibility.tsx',
    runtimeMarker: 'lsui-sc-practice-result-title',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/PracticeResultPanel/PracticeResultTitle.stories.tsx',
      title: 'Compatibility/PracticeResultTitle',
    },
    test: {
      status: 'complete',
      path: 'src/components/PracticeResultPanel/PracticeResultTitle.test.tsx',
    },
    reference: {
      propsPath:
        'src/components/PracticeResultPanel/PracticeResultPanel.compatibility.tsx',
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
    compatibilityFor: 'PracticeResultPanel',
    interactive: false,
    ownerPath:
      'src/components/PracticeResultPanel/PracticeResultPanel.compatibility.tsx',
    runtimeMarker: 'lsui-sc-practice-result-mark',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/PracticeResultPanel/PracticeResultMark.stories.tsx',
      title: 'Compatibility/PracticeResultMark',
    },
    test: {
      status: 'complete',
      path: 'src/components/PracticeResultPanel/PracticeResultMark.test.tsx',
    },
    reference: {
      propsPath:
        'src/components/PracticeResultPanel/PracticeResultPanel.compatibility.tsx',
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
    ownerPath: 'src/components/Auth/AuthSuccessState.tsx',
    runtimeMarker: 'lsui-sc-auth-success-state',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Auth/AuthSuccessState.stories.tsx',
      title: 'Auth/AuthSuccessState',
    },
    test: {
      status: 'complete',
      path: 'src/components/Auth/AuthSuccessState.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Auth/AuthSuccessState.tsx',
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
    ownerPath: 'src/components/Auth/AuthTopLink.tsx',
    runtimeMarker: 'lsui-sc-auth-top-link',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Auth/AuthTopLink.stories.tsx',
      title: 'Auth/AuthTopLink',
    },
    test: {
      status: 'complete',
      path: 'src/components/Auth/AuthTopLink.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Auth/AuthTopLink.tsx',
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
    compatibilityFor: 'Button',
    interactive: true,
    ownerPath: 'src/components/Button/Button.compatibility.tsx',
    runtimeMarker: 'lsui-sc-auth-submit-button',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Button/AuthSubmitButton.stories.tsx',
      title: 'Compatibility/AuthSubmitButton',
    },
    test: {
      status: 'complete',
      path: 'src/components/Button/AuthSubmitButton.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Button/Button.compatibility.tsx',
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
    ownerPath: 'src/components/Auth/AuthProgress.tsx',
    runtimeMarker: 'lsui-sc-auth-progress',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Auth/AuthProgress.stories.tsx',
      title: 'Auth/AuthProgress',
    },
    test: {
      status: 'complete',
      path: 'src/components/Auth/AuthProgress.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Auth/AuthProgress.tsx',
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
    ownerPath: 'src/components/Auth/AuthSuccessIcon.tsx',
    runtimeMarker: 'lsui-sc-auth-success-icon',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Auth/AuthSuccessIcon.stories.tsx',
      title: 'Auth/AuthSuccessIcon',
    },
    test: {
      status: 'complete',
      path: 'src/components/Auth/AuthSuccessIcon.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Auth/AuthSuccessIcon.tsx',
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
    ownerPath: 'src/components/Auth/AuthResendButton.tsx',
    runtimeMarker: 'lsui-sc-auth-resend-button',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Auth/AuthResendButton.stories.tsx',
      title: 'Auth/AuthResendButton',
    },
    test: {
      status: 'complete',
      path: 'src/components/Auth/AuthResendButton.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Auth/AuthResendButton.tsx',
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
    ownerPath: 'src/components/Auth/AuthResendAction.tsx',
    runtimeMarker: 'lsui-sc-auth-resend-action',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Auth/AuthResendAction.stories.tsx',
      title: 'Auth/AuthResendAction',
    },
    test: {
      status: 'complete',
      path: 'src/components/Auth/AuthResendAction.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Auth/AuthResendAction.tsx',
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
    compatibilityFor: 'Button',
    interactive: true,
    ownerPath: 'src/components/Button/Button.compatibility.tsx',
    runtimeMarker: 'lsui-sc-auth-back-button',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Button/AuthBackButton.stories.tsx',
      title: 'Compatibility/AuthBackButton',
    },
    test: {
      status: 'complete',
      path: 'src/components/Button/AuthBackButton.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Button/Button.compatibility.tsx',
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
    ownerPath: 'src/components/Auth/AuthForm.tsx',
    runtimeMarker: 'lsui-sc-auth-form',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Auth/AuthForm.stories.tsx',
      title: 'Auth/AuthForm',
    },
    test: {
      status: 'complete',
      path: 'src/components/Auth/AuthForm.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Auth/AuthForm.tsx',
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
    ownerPath: 'src/components/Auth/AuthTopLinkHighlight.tsx',
    runtimeMarker: 'lsui-sc-auth-top-link-highlight',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Auth/AuthTopLinkHighlight.stories.tsx',
      title: 'Auth/AuthTopLinkHighlight',
    },
    test: {
      status: 'complete',
      path: 'src/components/Auth/AuthTopLinkHighlight.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Auth/AuthTopLinkHighlight.tsx',
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
    ownerPath: 'src/components/Auth/AuthEyebrow.tsx',
    runtimeMarker: 'lsui-sc-auth-eyebrow',
    ssrSmoke: complete,
    story: {
      status: 'complete',
      path: 'src/components/Auth/AuthEyebrow.stories.tsx',
      title: 'Auth/AuthEyebrow',
    },
    test: {
      status: 'complete',
      path: 'src/components/Auth/AuthEyebrow.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Auth/AuthEyebrow.tsx',
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
    ownerPath: 'src/components/PracticeResultPanel/PracticeResultPanel.tsx',
    runtimeMarker: 'lsui-sc-practice-result-panel',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/PracticeResultPanel/PracticeResultPanel.stories.tsx',
      title: 'PracticeResultPanel',
    },
    test: {
      ...complete,
      path: 'src/components/PracticeResultPanel/PracticeResultPanel.test.tsx',
    },
    reference: {
      propsPath: 'src/components/PracticeResultPanel/PracticeResultPanel.tsx',
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
    ownerPath: 'src/components/Quiz/QuizSessionHeader.tsx',
    runtimeMarker: 'lsui-sc-quiz-session-header',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Quiz/QuizSessionHeader.stories.tsx',
      title: 'Quiz/QuizSessionHeader',
    },
    test: {
      ...complete,
      path: 'src/components/Quiz/QuizSessionHeader.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Quiz/QuizSessionHeader.tsx',
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
    ownerPath: 'src/components/Practice/PracticeCardBody.tsx',
    runtimeMarker: 'lsui-sc-practice-card-body',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Practice/PracticeCardBody.stories.tsx',
      title: 'Practice/PracticeCardBody',
    },
    test: {
      ...complete,
      path: 'src/components/Practice/PracticeCardBody.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Practice/PracticeCardBody.tsx',
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
    ownerPath: 'src/components/Quiz/QuizOption.tsx',
    runtimeMarker: 'lsui-sc-quiz-option',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Quiz/QuizOption.stories.tsx',
      title: 'Quiz/QuizOption',
    },
    test: { ...complete, path: 'src/components/Quiz/QuizOption.test.tsx' },
    reference: {
      propsPath: 'src/components/Quiz/QuizOption.tsx',
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
    ownerPath: 'src/components/Quiz/QuizFeedback.tsx',
    runtimeMarker: 'lsui-sc-quiz-feedback',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Quiz/QuizFeedback.stories.tsx',
      title: 'Quiz/QuizFeedback',
    },
    test: {
      ...complete,
      path: 'src/components/Quiz/QuizFeedback.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Quiz/QuizFeedback.tsx',
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
    ownerPath: 'src/components/Flashcard/FlashcardRatingButton.tsx',
    runtimeMarker: 'lsui-sc-flashcard-rating-button',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Flashcard/FlashcardRatingButton.stories.tsx',
      title: 'Flashcard/FlashcardRatingButton',
    },
    test: {
      ...complete,
      path: 'src/components/Flashcard/FlashcardRatingButton.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Flashcard/FlashcardRatingButton.tsx',
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
    ownerPath: 'src/components/Practice/PracticePlaybackControls.tsx',
    runtimeMarker: 'lsui-sc-practice-playback-controls',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Practice/PracticePlaybackControls.stories.tsx',
      title: 'Practice/PracticePlaybackControls',
    },
    test: {
      ...complete,
      path: 'src/components/Practice/PracticePlaybackControls.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Practice/PracticePlaybackControls.tsx',
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
    ownerPath: 'src/components/Calendar/CalendarControls.tsx',
    runtimeMarker: 'lsui-sc-calendar-controls',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Calendar/CalendarControls.stories.tsx',
      title: 'Calendar/CalendarControls',
    },
    test: {
      ...complete,
      path: 'src/components/Calendar/CalendarControls.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Calendar/CalendarControls.tsx',
      documentation: {
        path: 'docs/components/calendar.md',
        anchor: 'calendarcontrols',
      },
      consumers: [
        {
          repository: 'langyspace-ui',
          path: 'src/components/Calendar/ScheduleCalendar.tsx',
        },
      ],
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'AuthFrame',
    interactive: false,
    ownerPath: 'src/components/Auth/AuthFrame.tsx',
    runtimeMarker: 'lsui-sc-auth-frame',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Auth/AuthFrame.stories.tsx',
      title: 'Auth/AuthFrame',
    },
    test: { ...complete, path: 'src/components/Auth/AuthFrame.test.tsx' },
    reference: {
      propsPath: 'src/components/Auth/AuthFrame.tsx',
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
    ownerPath: 'src/components/Form/PhoneField.tsx',
    runtimeMarker: 'lsui-sc-phone-field',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Form/PhoneField.stories.tsx',
      title: 'Form/PhoneField',
    },
    test: { ...complete, path: 'src/components/Form/PhoneField.test.tsx' },
    reference: {
      propsPath: 'src/components/Form/PhoneField.tsx',
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
    ownerPath: 'src/components/Practice/PracticeProgressBar.tsx',
    runtimeMarker: 'lsui-sc-practice-progress-bar',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Practice/PracticeProgressBar.stories.tsx',
      title: 'Practice/PracticeProgressBar',
    },
    test: {
      ...complete,
      path: 'src/components/Practice/PracticeProgressBar.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Practice/PracticeProgressBar.tsx',
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
    ownerPath: 'src/components/Practice/PracticeCardSkeletonBody.tsx',
    runtimeMarker: 'lsui-sc-practice-card-skeleton-body',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Practice/PracticeCardSkeletonBody.stories.tsx',
      title: 'Practice/PracticeCardSkeletonBody',
    },
    test: {
      ...complete,
      path: 'src/components/Practice/PracticeCardSkeletonBody.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Practice/PracticeCardSkeletonBody.tsx',
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
    ownerPath: 'src/components/Filter/FilterToolbar.tsx',
    runtimeMarker: 'lsui-sc-filter-toolbar',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Filter/FilterToolbar.stories.tsx',
      title: 'Filter/FilterToolbar',
    },
    test: {
      ...complete,
      path: 'src/components/Filter/FilterToolbar.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Filter/FilterToolbar.tsx',
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
    ownerPath: 'src/components/Card/Card.tsx',
    runtimeMarker: 'lsui-sc-card',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Card/Card.stories.tsx',
      title: 'Card',
    },
    test: { ...complete, path: 'src/components/Card/Card.test.tsx' },
    reference: {
      propsPath: 'src/components/Card/Card.tsx',
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
    ownerPath: 'src/components/Toast/ToastItem.tsx',
    runtimeMarker: 'lsui-sc-toast-item',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Toast/ToastItem.stories.tsx',
      title: 'Toast/ToastItem',
    },
    test: { ...complete, path: 'src/components/Toast/ToastItem.test.tsx' },
    reference: {
      propsPath: 'src/components/Toast/ToastItem.tsx',
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
    ownerPath: 'src/components/Toast/ToastViewport.tsx',
    runtimeMarker: 'lsui-sc-toast-viewport',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Toast/ToastViewport.stories.tsx',
      title: 'Toast/ToastViewport',
    },
    test: {
      ...complete,
      path: 'src/components/Toast/ToastViewport.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Toast/ToastViewport.tsx',
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
    ownerPath: 'src/components/Notice/NoticeBanner.tsx',
    runtimeMarker: 'lsui-sc-notice-banner',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Notice/NoticeBanner.stories.tsx',
      title: 'Notice/NoticeBanner',
    },
    test: {
      ...complete,
      path: 'src/components/Notice/NoticeBanner.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Notice/NoticeBanner.tsx',
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
    ownerPath: 'src/components/Document/DocumentLayout.tsx',
    runtimeMarker: 'lsui-sc-document-layout',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Document/DocumentLayout.stories.tsx',
      title: 'Document/DocumentLayout',
    },
    test: {
      ...complete,
      path: 'src/components/Document/DocumentLayout.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Document/DocumentLayout.tsx',
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
    ownerPath: 'src/components/Auth/AuthAccent.tsx',
    runtimeMarker: 'lsui-sc-auth-accent',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Auth/AuthAccent.stories.tsx',
      title: 'Auth/AuthAccent',
    },
    test: {
      ...complete,
      path: 'src/components/Auth/AuthAccent.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Auth/AuthAccent.tsx',
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
    ownerPath: 'src/components/Auth/AuthDescription.tsx',
    runtimeMarker: 'lsui-sc-auth-description',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Auth/AuthDescription.stories.tsx',
      title: 'Auth/AuthDescription',
    },
    test: {
      ...complete,
      path: 'src/components/Auth/AuthDescription.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Auth/AuthDescription.tsx',
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
    ownerPath: 'src/components/Auth/AuthTitle.tsx',
    runtimeMarker: 'lsui-sc-auth-title',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Auth/AuthTitle.stories.tsx',
      title: 'Auth/AuthTitle',
    },
    test: {
      ...complete,
      path: 'src/components/Auth/AuthTitle.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Auth/AuthTitle.tsx',
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
    ownerPath: 'src/components/Calendar/AvailabilityCalendar.tsx',
    runtimeMarker: 'lsui-sc-availability-calendar',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Calendar/AvailabilityCalendar.stories.tsx',
      title: 'Calendar/AvailabilityCalendar',
    },
    test: {
      ...complete,
      path: 'src/components/Calendar/AvailabilityCalendar.test.tsx',
    },
    reference: {
      propsPath: 'src/components/Calendar/AvailabilityCalendar.types.ts',
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
    ownerPath: 'src/components/ActionLink/ActionLink.tsx',
    runtimeMarker: 'lsui-sc-action-link',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/ActionLink/ActionLink.stories.tsx',
      title: 'ActionLink',
    },
    test: {
      ...complete,
      path: 'src/components/ActionLink/ActionLink.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/components/ActionLink/ActionLink.types.ts',
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
    ownerPath: 'src/components/Auth/AuthNotice.tsx',
    runtimeMarker: 'lsui-sc-auth-notice',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Auth/AuthNotice.stories.tsx',
      title: 'Auth/AuthNotice',
    },
    test: {
      ...complete,
      path: 'src/components/Auth/AuthNotice.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/components/Auth/AuthNotice.tsx',
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
    ownerPath: 'src/components/Avatar/Avatar.tsx',
    runtimeMarker: 'lsui-sc-avatar',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Avatar/Avatar.stories.tsx',
      title: 'Avatar',
    },
    test: {
      ...complete,
      path: 'src/components/Avatar/Avatar.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/components/Avatar/Avatar.tsx',
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
    ownerPath: 'src/components/Button/Button.tsx',
    runtimeMarker: 'lsui-sc-button',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Button/Button.stories.tsx',
      title: 'Button/Button',
    },
    test: {
      ...complete,
      path: 'src/components/Button/Button.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/components/Button/Button.types.ts',
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
    ownerPath: 'src/components/IconButton/IconButton.tsx',
    runtimeMarker: 'lsui-sc-icon-button',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/IconButton/IconButton.stories.tsx',
      title: 'IconButton',
    },
    test: {
      ...complete,
      path: 'src/components/IconButton/IconButton.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/components/IconButton/IconButton.types.ts',
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
    ownerPath: 'src/components/Form/SelectInput.tsx',
    runtimeMarker: 'lsui-sc-select-input',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Form/SelectInput.stories.tsx',
      title: 'Form/SelectInput',
    },
    test: {
      ...complete,
      path: 'src/components/Form/SelectInput.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/components/Form/SelectInput.tsx',
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
    ownerPath: 'src/components/StatusChip/StatusChip.tsx',
    runtimeMarker: 'lsui-sc-status-chip',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/StatusChip/StatusChip.stories.tsx',
      title: 'StatusChip',
    },
    test: {
      ...complete,
      path: 'src/components/StatusChip/StatusChip.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/components/StatusChip/StatusChip.tsx',
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
    ownerPath: 'src/components/Form/TextareaInput.tsx',
    runtimeMarker: 'lsui-sc-textarea-input',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Form/TextareaInput.stories.tsx',
      title: 'Form/TextareaInput',
    },
    test: {
      ...complete,
      path: 'src/components/Form/TextareaInput.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/components/Form/TextareaInput.tsx',
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
    ownerPath: 'src/components/Form/TextInput.tsx',
    runtimeMarker: 'lsui-sc-text-input',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Form/TextInput.stories.tsx',
      title: 'Form/TextInput',
    },
    test: {
      ...complete,
      path: 'src/components/Form/TextInput.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/components/Form/TextInput.tsx',
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
    ownerPath: 'src/components/ActionMenu/ActionMenu.tsx',
    runtimeMarker: 'lsui-sc-action-menu',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/ActionMenu/ActionMenu.stories.tsx',
      title: 'ActionMenu',
    },
    test: {
      ...complete,
      path: 'src/components/ActionMenu/ActionMenu.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/components/ActionMenu/ActionMenu.types.ts',
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
    ownerPath: 'src/components/Auth/AuthTokenDigits.tsx',
    runtimeMarker: 'lsui-sc-auth-token-digits',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Auth/AuthTokenDigits.stories.tsx',
      title: 'Auth/AuthTokenDigits',
    },
    test: {
      ...complete,
      path: 'src/components/Auth/AuthTokenDigits.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/components/Auth/AuthTokenDigits.tsx',
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
    ownerPath: 'src/components/Form/CompoundControl.tsx',
    runtimeMarker: 'lsui-sc-compound-control',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Form/CompoundControl.stories.tsx',
      title: 'Form/CompoundControl',
    },
    test: {
      ...complete,
      path: 'src/components/Form/CompoundControl.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/components/Form/CompoundControl.tsx',
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
    ownerPath: 'src/components/Form/ControlledField.tsx',
    reference: {
      propsPath: 'src/components/Form/ControlledField.types.ts',
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
      path: 'src/components/Form/ControlledField.stories.tsx',
      title: 'Form/ControlledField',
    },
    test: {
      ...complete,
      path: 'src/components/Form/ControlledField.test.tsx',
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'Dialog',
    interactive: true,
    ownerPath: 'src/components/Dialog/Dialog.tsx',
    runtimeMarker: 'lsui-sc-modal-panel',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Dialog/Dialog.stories.tsx',
      title: 'Dialog',
    },
    test: {
      ...complete,
      path: 'src/components/Dialog/Dialog.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/components/Dialog/Dialog.tsx',
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
    ownerPath: 'src/components/Drawer/Drawer.tsx',
    runtimeMarker: 'lsui-sc-modal-panel',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Drawer/Drawer.stories.tsx',
      title: 'Drawer',
    },
    test: {
      ...complete,
      path: 'src/components/Drawer/Drawer.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/components/Drawer/Drawer.tsx',
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
    compatibilityFor: 'StatePanel',
    interactive: false,
    ownerPath: 'src/components/StatePanel/StatePanel.compatibility.tsx',
    runtimeMarker: 'lsui-sc-state-panel',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/StatePanel/EmptyState.stories.tsx',
      title: 'Compatibility/EmptyState',
    },
    test: {
      ...complete,
      path: 'src/components/StatePanel/EmptyState.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/components/StatePanel/StatePanel.compatibility.tsx',
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
    ownerPath: 'src/components/Form/FieldRoot.tsx',
    runtimeMarker: 'lsui-sc-field-root',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Form/FieldRoot.stories.tsx',
      title: 'Form/FieldRoot',
    },
    test: {
      ...complete,
      path: 'src/components/Form/FieldRoot.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/components/Form/FieldRoot.tsx',
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
    ownerPath: 'src/components/Filter/FilterPills.tsx',
    runtimeMarker: 'lsui-sc-filter-pills',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Filter/FilterPills.stories.tsx',
      title: 'Filter/FilterPills',
    },
    test: {
      ...complete,
      path: 'src/components/Filter/FilterPills.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/components/Filter/FilterPills.types.ts',
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
    compatibilityFor: 'StatePanel',
    interactive: false,
    ownerPath: 'src/components/StatePanel/StatePanel.compatibility.tsx',
    runtimeMarker: 'lsui-sc-state-panel',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/StatePanel/LoadingState.stories.tsx',
      title: 'Compatibility/LoadingState',
    },
    test: {
      ...complete,
      path: 'src/components/StatePanel/LoadingState.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/components/StatePanel/StatePanel.compatibility.tsx',
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
    ownerPath: 'src/components/Message/MessageBubble.tsx',
    runtimeMarker: 'lsui-sc-message-bubble',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Message/MessageBubble.stories.tsx',
      title: 'Message/MessageBubble',
    },
    test: {
      ...complete,
      path: 'src/components/Message/MessageBubble.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/components/Message/MessageBubble.types.ts',
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
    ownerPath: 'src/components/Message/MessageComposer.tsx',
    runtimeMarker: 'lsui-sc-message-composer',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Message/MessageComposer.stories.tsx',
      title: 'Message/MessageComposer',
    },
    test: {
      ...complete,
      path: 'src/components/Message/MessageComposer.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/components/Message/MessageComposer.types.ts',
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
    ownerPath: 'src/components/Message/MessageThread.tsx',
    runtimeMarker: 'lsui-sc-message-thread',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Message/MessageThread.stories.tsx',
      title: 'Message/MessageThread',
    },
    test: {
      ...complete,
      path: 'src/components/Message/MessageThread.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/components/Message/MessageThread.tsx',
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
    ownerPath: 'src/components/Message/MessageThreadHeader.tsx',
    runtimeMarker: 'lsui-sc-message-thread-header',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Message/MessageThreadHeader.stories.tsx',
      title: 'Message/MessageThreadHeader',
    },
    test: {
      ...complete,
      path: 'src/components/Message/MessageThreadHeader.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/components/Message/MessageThreadHeader.tsx',
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
    ownerPath: 'src/components/OperationalList/OperationalList.tsx',
    reference: {
      propsPath: 'src/components/OperationalList/OperationalList.types.ts',
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
      path: 'src/components/OperationalList/OperationalList.stories.tsx',
      title: 'OperationalList',
    },
    test: {
      ...complete,
      path: 'src/components/OperationalList/OperationalList.test.tsx',
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'SearchInput',
    interactive: true,
    ownerPath: 'src/components/Form/SearchInput.tsx',
    reference: {
      propsPath: 'src/components/Form/SearchInput.types.ts',
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
      path: 'src/components/Form/SearchInput.stories.tsx',
      title: 'Form/SearchInput',
    },
    test: {
      ...complete,
      path: 'src/components/Form/SearchInput.test.tsx',
    },
    visual: true,
  },
  {
    browserSmoke: complete,
    exportName: 'SectionHeader',
    interactive: false,
    ownerPath: 'src/components/SectionHeader/SectionHeader.tsx',
    runtimeMarker: 'lsui-sc-section-header',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/SectionHeader/SectionHeader.stories.tsx',
      title: 'SectionHeader',
    },
    test: {
      ...complete,
      path: 'src/components/SectionHeader/SectionHeader.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/components/SectionHeader/SectionHeader.tsx',
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
    ownerPath: 'src/components/SegmentedControl/SegmentedControl.tsx',
    runtimeMarker: 'lsui-sc-segmented-control',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/SegmentedControl/SegmentedControl.stories.tsx',
      title: 'SegmentedControl',
    },
    test: {
      ...complete,
      path: 'src/components/SegmentedControl/SegmentedControl.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/components/SegmentedControl/SegmentedControl.types.ts',
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
    ownerPath: 'src/components/StatePanel/StatePanel.tsx',
    runtimeMarker: 'lsui-sc-state-panel',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/StatePanel/StatePanel.stories.tsx',
      title: 'StatePanel',
    },
    test: {
      ...complete,
      path: 'src/components/StatePanel/StatePanel.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/components/StatePanel/StatePanel.types.ts',
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
    ownerPath: 'src/components/Button/Pressable.tsx',
    runtimeMarker: 'lsui-sc-pressable',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Button/Pressable.stories.tsx',
      title: 'Button/Pressable',
    },
    test: {
      ...complete,
      path: 'src/components/Button/Pressable.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/components/Button/Pressable.tsx',
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
    ownerPath: 'src/components/Spinner/Spinner.tsx',
    runtimeMarker: 'lsui-sc-spinner',
    ssrSmoke: complete,
    story: {
      ...complete,
      path: 'src/components/Spinner/Spinner.stories.tsx',
      title: 'Spinner',
    },
    test: {
      ...complete,
      path: 'src/components/Spinner/Spinner.test.tsx',
    },
    visual: true,
    reference: {
      propsPath: 'src/components/Spinner/Spinner.tsx',
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
