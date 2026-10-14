export type ComponentLayer = 'atom' | 'molecule' | 'primitive'

type Coverage = { status: 'complete' }

export interface ComponentContract {
  browserSmoke: Coverage
  exportName: string
  interactive: boolean
  layer: ComponentLayer
  ownerPath: string
  reference?: {
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
      documentation: { path: 'README.md', anchor: 'practiceresultpanel' },
      consumers: [
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/QuizPreviewSession/index.tsx',
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
      documentation: { path: 'README.md', anchor: 'quizsessionheader' },
      consumers: [
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/QuizPreviewSession/index.tsx',
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
      documentation: { path: 'README.md', anchor: 'practicecardbody' },
      consumers: [
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/StudentPracticeActivityCards/index.tsx',
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
      documentation: { path: 'README.md', anchor: 'quizoption-e-quizfeedback' },
      consumers: [
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/QuizPreviewSession/index.tsx',
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
      documentation: { path: 'README.md', anchor: 'quizoption-e-quizfeedback' },
      consumers: [
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/QuizPreviewSession/index.tsx',
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
      documentation: { path: 'README.md', anchor: 'flashcardratingbutton' },
      consumers: [
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/FlashcardsV2.tsx',
        },
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/StudentFlashcardSession/index.tsx',
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
      documentation: { path: 'README.md', anchor: 'practiceplaybackcontrols' },
      consumers: [
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/ShadowingPreviewSession/index.tsx',
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
      documentation: { path: 'README.md', anchor: 'calendarcontrols' },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/layout/CalendarControls/index.tsx',
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
      documentation: { path: 'README.md', anchor: 'authframe' },
      consumers: [
        {
          repository: 'langyspace-student',
          path: 'src/components/layout/AuthShell/index.tsx',
        },
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
      documentation: { path: 'README.md', anchor: 'phonefield' },
      consumers: [
        {
          repository: 'langyspace-student',
          path: 'src/components/base/PhoneField/index.tsx',
        },
        {
          repository: 'langyspace-teacher',
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
      documentation: { path: 'README.md', anchor: 'practiceprogressbar' },
      consumers: [
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/StudentPracticeActivityCards/index.tsx',
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
      documentation: { path: 'README.md', anchor: 'practicecardskeletonbody' },
      consumers: [
        {
          repository: 'langyspace-student',
          path: 'src/components/features/portal/index.tsx',
        },
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/StudentLearningPreview/components/PracticePreviewCardSkeleton/index.tsx',
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
      documentation: { path: 'README.md', anchor: 'filtertoolbar' },
      consumers: [],
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
      documentation: { path: 'README.md', anchor: 'card' },
      consumers: [],
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
      documentation: { path: 'README.md', anchor: 'toastitem' },
      consumers: [
        {
          repository: 'langyspace-student',
          path: 'src/components/base/ToastViewport/index.tsx',
        },
        {
          repository: 'langyspace-teacher',
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
      documentation: { path: 'README.md', anchor: 'toastviewport' },
      consumers: [
        {
          repository: 'langyspace-student',
          path: 'src/components/base/ToastViewport/index.tsx',
        },
        {
          repository: 'langyspace-teacher',
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
      documentation: { path: 'README.md', anchor: 'noticebanner' },
      consumers: [
        {
          repository: 'langyspace-student',
          path: 'src/components/layout/ShellNotice/index.tsx',
        },
        {
          repository: 'langyspace-teacher',
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
      documentation: { path: 'README.md', anchor: 'documentlayout' },
      consumers: [
        {
          repository: 'langyspace-student',
          path: 'src/pages/LegalPage/index.tsx',
        },
        {
          repository: 'langyspace-teacher',
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
      documentation: { path: 'README.md', anchor: 'auth-presentation' },
      consumers: [
        {
          repository: 'langyspace-student',
          path: 'src/pages/Login/sections/PhoneStep/index.tsx',
        },
        {
          repository: 'langyspace-teacher',
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
      documentation: { path: 'README.md', anchor: 'auth-presentation' },
      consumers: [
        {
          repository: 'langyspace-student',
          path: 'src/pages/Login/sections/PhoneStep/index.tsx',
        },
        {
          repository: 'langyspace-teacher',
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
      documentation: { path: 'README.md', anchor: 'auth-presentation' },
      consumers: [
        {
          repository: 'langyspace-student',
          path: 'src/pages/Login/sections/PhoneStep/index.tsx',
        },
        {
          repository: 'langyspace-teacher',
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
      documentation: { path: 'README.md', anchor: 'availabilitycalendar' },
      consumers: [],
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
  },
  {
    browserSmoke: complete,
    exportName: 'ControlledField',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/ControlledField/index.tsx',
    reference: {
      propsPath: 'src/molecules/ControlledField/types.ts',
      documentation: { path: 'README.md', anchor: 'fields-e-busca' },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/pages/RegisterTeacher/sections/DetailsStep/index.tsx',
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
  },
  {
    browserSmoke: complete,
    exportName: 'OperationalList',
    interactive: true,
    layer: 'molecule',
    ownerPath: 'src/molecules/OperationalList/index.tsx',
    reference: {
      propsPath: 'src/molecules/OperationalList/types.ts',
      documentation: { path: 'README.md', anchor: 'listas-operacionais' },
      consumers: [
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/LeadCohortPage/index.tsx',
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
      documentation: { path: 'README.md', anchor: 'fields-e-busca' },
      consumers: [
        {
          repository: 'langyspace-teacher',
          path: 'src/components/base/SearchField/index.tsx',
        },
        {
          repository: 'langyspace-admin',
          path: 'src/pages/AdminPortal/LeadCohortPage/index.tsx',
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
  },
] as const satisfies readonly ComponentContract[]
