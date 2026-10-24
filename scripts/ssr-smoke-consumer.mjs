import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { FormProvider, useForm } from 'react-hook-form'
import { ServerStyleSheet, styled } from 'styled-components'

const ConsumerSurface = styled.div`
  color: #123456;
`

const sharedUi = await import('@langyspace/ui')
const { ControlledField } = await import('@langyspace/ui/form')
for (const name of [
  'EmptyState',
  'LoadingState',
  'AuthBackButton',
  'AuthSubmitButton',
  'PracticeResultMark',
  'PracticeResultTitle',
  'PracticeResultDescription',
  'PracticeResultActions',
  'StatValue',
  'StatLabel',
  'StatAction',
  'TextButton',
  'MetricValue',
  'MetricLabel',
  'CalendarMonthGrid',
  'CalendarWeekGrid',
  'CalendarDay',
  'CalendarDayNumber',
  'CalendarEvent',
  'TimelineEvent',
  'CalendarTimeSlot',
  'AuthBrandTitle',
  'AuthBrandAccent',
  'AuthBrandDescription',
  'AuthFeatureList',
  'AuthFeature',
  'AuthBrandFooter',
  'AuthMobileFooter',
  'AuthFooterLink',
  'AuthTitle',
  'AuthAccent',
  'AuthDescription',
  'AuthResendButton',
  'FlashcardProgressTrack',
  'FlashcardProgressSegment',
  'FlashcardCounter',
  'PracticeCoverValue',
  'PracticeCoverLabel',
  'AuthSuccessIcon',
  'AuthTopLinkHighlight',
]) {
  if (name in sharedUi) throw new Error('retired_api_still_exported_' + name)
}

const {
  CalendarControls,
  AuthFrame,
  AuthNotice,
  AuthTokenDigits,
  ActionLink,
  ActionMenu,
  AvailabilityCalendar,
  Avatar,
  Button,
  Card,
  FilterToolbar,
  CompoundControl,
  Dialog,
  DocumentLayout,
  NoticeBanner,
  Drawer,
  FieldRoot,
  FilterPills,
  IconButton,
  MessageBubble,
  MessageComposer,
  MessageThread,
  MessageThreadHeader,
  OperationalList,
  Pressable,
  PhoneField,
  PracticeCardSkeletonBody,
  PracticeProgressBar,
  PracticeCardBody,
  BrandLogo,
  DocumentHeader,
  DocumentHeaderContent,
  DocumentNavigation,
  BrandLink,
  DocumentNavigationLink,
  FormStack,
  FieldLabelRow,
  FieldCounter,
  FormError,
  FormActions,
  FilterSelect,
  FileInput,
  InlineNotice,
  StatCard,
  DefinitionItem,
  DetailRow,
  MetricSummary,
  SidebarFrame,
  SidebarNavigation,
  NavigationLink,
  NavigationButton,
  NotificationItem,
  ConversationRow,
  BottomNavigation,
  BottomNavigationLink,
  CalendarScroller,
  FlashcardAudioButton,
  FlashcardFlipButton,
  FlashcardWordSkeleton,
  FlashcardFrame,
  FlashcardStage,
  FlashcardDeck,
  FlashcardFront,
  FlashcardImagePanel,
  FlashcardWord,
  FlashcardBack,
  FlashcardFlipHint,
  FlashcardFace,
  FlashcardGhost,
  FlashcardFlip,
  FlashcardSwiper,
  FlashcardFeedback,
  KeyValueList,
  GroupedBarChart,
  WeeklyCountChart,
  Checkbox,
  RadioButton,
  ToggleButton,
  ChoiceCard,
  Skeleton,
  ShadowingReader,
  ShadowingPanel,
  ShadowingPhraseStack,
  ShadowingContextPhrase,
  ShadowingActivePhrase,
  ShadowingTranslation,
  ShadowingControlDock,
  ShadowingControlCluster,
  ShadowingRepetitions,
  AuthChannelHint,
  AuthChannelIcon,
  AuthTokenLabel,
  AuthLegalText,
  PageTitle,
  PageDescription,
  SessionProgress,
  ScheduleRow,
  PracticeCard,
  PracticeCardCover,
  PracticeLevelBadge,
  QuizQuestion,
  QuizBlank,
  QuizPromptHeader,
  QuizMetadata,
  QuizBadge,
  ConnectionNotice,
  CardLink,
  ShadowingWord,
  AuthEyebrow,
  AuthForm,
  AuthResendAction,
  AuthProgress,
  AuthTopLink,
  AuthSuccessState,
  PracticeResultPanel,
  QuizSessionHeader,
  QuizOption,
  PracticePlaybackControls,
  FlashcardRatingButton,
  QuizFeedback,
  SearchInput,
  SectionHeader,
  SegmentedControl,
  SelectInput,
  Spinner,
  StatePanel,
  StatusChip,
  TextareaInput,
  TextInput,
  ToastItem,
  ToastProvider,
  Toaster,
  ToastViewport,
  AuthBrandContent,
  AuthFooter,
  AuthHeader,
  AuthActions,
  FlashcardProgress,
  ScheduleCalendar,
} = sharedUi

const packageCalendar = {
  days: [
    {
      id: 'day-15',
      dateKey: '2026-10-15',
      label: 'Quinta, 15 de outubro',
      shortLabel: 'Qui',
      dayNumber: 15,
    },
  ],
  events: [
    {
      id: 'class-1',
      dateKey: '2026-10-15',
      startMinute: 540,
      durationMinutes: 60,
      timeLabel: '09:00',
      title: 'Aula',
      label: 'Abrir aula',
    },
  ],
  slots: [
    {
      id: 'slot-1',
      dateKey: '2026-10-15',
      startMinute: 600,
      endMinute: 630,
      label: 'Quinta 10:00',
      state: 'available',
      interactive: true,
    },
  ],
  navigation: {
    label: 'Outubro',
    previousLabel: 'Anterior',
    nextLabel: 'Próximo',
    onPrevious: () => {},
    onNext: () => {},
    onToday: () => {},
  },
  timeRange: { startMinute: 540, endMinute: 660 },
  onOpenEvent: () => {},
  onSlotClick: () => {},
}

function ControlledFieldSsr() {
  const form = useForm({ defaultValues: { email: 'maria@example.com' } })
  return createElement(
    FormProvider,
    form,
    createElement(ControlledField, { label: 'Email', name: 'email' }),
  )
}

const sheet = new ServerStyleSheet()
let markup
let collectedCss

try {
  markup = renderToString(
    sheet.collectStyles(
      createElement(
        ConsumerSurface,
        null,
        createElement(
          AuthFrame,
          {
            brand: 'Brand SSR',
            brandLabel: 'Brand',
            mobileLogo: 'Logo',
            formAriaLabel: 'Auth',
            topAction: null,
          },
          'Auth frame SSR',
        ),
        createElement(AuthBrandContent, {
          logo: 'Brand',
          title: 'SSR ',
          highlight: 'auth',
          description: 'Description',
          features: ['Feature'],
        }),
        createElement(
          AuthFooter,
          { links: [{ href: '/terms', label: 'Terms' }] },
          'Copyright',
        ),
        createElement(
          AuthFooter,
          { placement: 'mobile', links: [] },
          'Mobile legal',
        ),
        createElement(AuthHeader, {
          title: 'Header ',
          highlight: 'highlight',
          paragraphs: ['Description'],
        }),
        createElement(
          AuthActions,
          null,
          createElement(Button, null, 'Continue'),
        ),
        createElement(ScheduleCalendar, { ...packageCalendar, view: 'week' }),
        createElement(ScheduleCalendar, { ...packageCalendar, view: 'month' }),
        createElement(FlashcardProgress, {
          current: 1,
          total: 4,
          label: 'Progress',
        }),
        createElement(BrandLogo, { width: 144 }),

        createElement('ul', null),
        createElement(DocumentHeader, null, 'DocumentHeader SSR'),
        createElement(DocumentHeaderContent, null, 'DocumentHeaderContent SSR'),
        createElement(DocumentNavigation, null, 'DocumentNavigation SSR'),
        createElement(BrandLink, { href: '/termos' }, 'Termos'),
        createElement(DocumentNavigationLink, { href: '/termos' }, 'Termos'),
        createElement(FormStack, null, 'FormStack SSR'),
        createElement(FieldLabelRow, null, 'FieldLabelRow SSR'),
        createElement(FieldCounter, null, 'FieldCounter SSR'),
        createElement(FormError, null, 'FormError SSR'),
        createElement(FormActions, null, 'FormActions SSR'),
        createElement(
          FilterSelect,
          { 'aria-label': 'SSR filter' },
          createElement('option', null, 'Todos'),
        ),
        createElement(FileInput, { 'aria-label': 'SSR file' }),
        createElement(InlineNotice, null, 'InlineNotice SSR'),
        createElement(StatCard, {
          value: 0,
          label: 'StatCard SSR',
          action: createElement(Button, null, 'Update'),
        }),

        createElement(DefinitionItem, {
          label: 'Nome',
          value: 'Valor completo',
        }),
        createElement(DetailRow, { label: 'Contato', value: 'Valor' }),

        createElement(MetricSummary, { value: 0, label: 'MetricSummary SSR' }),

        createElement(SidebarFrame, null, 'SidebarFrame SSR'),
        createElement(SidebarNavigation, null, 'SidebarNavigation SSR'),
        createElement(NavigationLink, { href: '#nav' }, 'Navegação'),
        createElement(NavigationButton, null, 'NavigationButton SSR'),
        createElement(NotificationItem, {
          avatar: 'LS',
          title: 'Aviso',
          description: 'Texto',
          meta: 'Agora',
        }),
        createElement(ConversationRow, {
          avatar: 'LS',
          title: 'Conversa',
          preview: 'Mensagem',
        }),
        createElement(BottomNavigation, null, 'BottomNavigation SSR'),
        createElement(BottomNavigationLink, { href: '#home' }, 'Início'),
        createElement(CalendarScroller, null, 'CalendarScroller SSR'),

        createElement(
          FlashcardFrame,
          null,
          'FlashcardFrame SSR',
          createElement(
            FlashcardFront,
            { style: { height: '24rem' } },
            createElement(FlashcardFlipButton, { label: 'SSR flip' }),
            createElement(FlashcardAudioButton, { label: 'SSR pronunciation' }),
            createElement(FlashcardWordSkeleton),
          ),
        ),
        createElement(FlashcardStage, null, 'FlashcardStage SSR'),
        createElement(FlashcardDeck, null, 'FlashcardDeck SSR'),
        createElement(FlashcardFront, null, 'FlashcardFront SSR'),
        createElement(FlashcardImagePanel, null, 'FlashcardImagePanel SSR'),
        createElement(FlashcardWord, null, 'FlashcardWord SSR'),
        createElement(FlashcardBack, { term: 'bird', translation: 'passaro' }),
        createElement(FlashcardFlipHint, null, 'FlashcardFlipHint SSR'),
        createElement(FlashcardFace, null, 'FlashcardFace SSR'),
        createElement(FlashcardGhost, { layer: 1 }),
        createElement(FlashcardFlip, null, 'FlashcardFlip SSR'),
        createElement(FlashcardSwiper, null, 'FlashcardSwiper SSR'),
        createElement(
          FlashcardFeedback,
          { grade: 'good', mark: 'OK' },
          'FlashcardFeedback SSR',
        ),
        createElement(KeyValueList, {
          items: [{ id: 'a', label: 'Origem', value: '123' }],
        }),
        createElement(GroupedBarChart, {
          'aria-label': 'Evolução',
          items: [
            {
              id: 'a',
              label: 'Seg',
              description: '12 cliques',
              values: [12, 2],
            },
          ],
        }),
        createElement(WeeklyCountChart, {
          items: [{ id: 'a', label: 'S', value: 2 }],
        }),
        createElement(Checkbox, { 'aria-label': 'Selecionar' }),
        createElement(RadioButton, { 'aria-label': 'Selecionar' }),
        createElement(ToggleButton, null, 'ToggleButton SSR'),
        createElement(ChoiceCard, null, 'ChoiceCard SSR'),
        createElement(Skeleton, { style: { width: 120, height: 16 } }),
        createElement(ShadowingReader, null, 'ShadowingReader SSR'),
        createElement(ShadowingPanel, null, 'ShadowingPanel SSR'),
        createElement(ShadowingPhraseStack, null, 'ShadowingPhraseStack SSR'),
        createElement(
          ShadowingContextPhrase,
          null,
          'ShadowingContextPhrase SSR',
        ),
        createElement(ShadowingActivePhrase, null, 'ShadowingActivePhrase SSR'),
        createElement(ShadowingTranslation, null, 'ShadowingTranslation SSR'),
        createElement(ShadowingControlDock, null, 'ShadowingControlDock SSR'),
        createElement(
          ShadowingControlCluster,
          null,
          'ShadowingControlCluster SSR',
        ),
        createElement(
          ShadowingRepetitions,
          { total: 3, value: 1 },
          '1/3 escutas',
        ),
        createElement(AuthChannelHint, null, 'AuthChannelHint SSR'),
        createElement(AuthChannelIcon, null, 'AuthChannelIcon SSR'),
        createElement(AuthTokenLabel, null, 'AuthTokenLabel SSR'),
        createElement(AuthLegalText, null, 'AuthLegalText SSR'),
        createElement(PageTitle, null, 'PageTitle SSR'),
        createElement(PageDescription, null, 'PageDescription SSR'),
        createElement(SessionProgress, {
          name: 'Atividade',
          counter: '1/3',
          value: 0.3,
        }),

        createElement(ScheduleRow, {
          time: '10:00',
          participant: 'Pessoa',
          onOpen: () => undefined,
          openLabel: 'Abrir aula de Pessoa',
        }),
        createElement(PracticeCard, null, 'PracticeCard SSR'),
        createElement(
          PracticeCardCover,
          { value: 0, label: 'cards' },
          'PracticeCardCover SSR',
        ),
        createElement(PracticeLevelBadge, null, 'PracticeLevelBadge SSR'),

        createElement(QuizQuestion, null, 'QuizQuestion SSR'),
        createElement(QuizBlank),

        createElement(QuizPromptHeader, null, 'QuizPromptHeader SSR'),
        createElement(QuizMetadata, null, 'QuizMetadata SSR'),
        createElement(QuizBadge, null, 'QuizBadge SSR'),
        createElement(ConnectionNotice, null, 'ConnectionNotice SSR'),

        createElement(CardLink, { href: '/details' }, 'Detalhes'),
        createElement(ShadowingWord, { state: 'current' }, 'practice'),
        createElement(CalendarControls, {
          label: 'Period',
          previousLabel: 'Previous',
          nextLabel: 'Next',
          onPrevious: () => {},
          onNext: () => {},
          onToday: () => {},
        }),
        createElement(PracticeCardBody, {
          title: 'Practice SSR',
          leadingMeta: '4/8',
          trailingMeta: '50%',
          value: 0.5,
          completed: true,
        }),
        createElement(
          QuizOption,
          { letter: 'A', state: 'correct', disabled: true },
          'Yes',
        ),
        createElement(
          AuthEyebrow,
          { key: 'AuthEyebrow' },
          'AuthEyebrow package',
        ),

        createElement(AuthForm, { key: 'AuthForm' }, 'AuthForm package'),

        createElement(
          AuthResendAction,
          {
            key: 'AuthResendAction',
            onResend: () => {},
            resendLabel: 'Resend',
          },
          'AuthResendAction package',
        ),

        createElement(AuthProgress, { key: 'AuthProgress' }, null),

        createElement(
          AuthTopLink,
          { key: 'AuthTopLink', href: '/cadastro', highlight: 'Entrar' },
          'AuthTopLink package',
        ),
        createElement(
          AuthSuccessState,
          { key: 'AuthSuccessState' },
          'AuthSuccessState package',
        ),
        createElement(
          PracticeResultPanel,
          {
            heading: 'SSR result',
            description: 'Done',
            actions: createElement(Button, { type: 'button' }, 'Return'),
          },
          createElement('p', null, 'Metrics'),
        ),
        createElement(QuizSessionHeader, {
          name: 'SSR quiz',
          counter: '1 de 8',
          progress: 0.125,
          backLabel: 'Back',
          onBack: () => undefined,
        }),
        createElement(QuizFeedback, { tone: 'wrong' }, 'Review'),
        createElement(
          FlashcardRatingButton,
          { grade: 'good', interval: '4 days', selected: true },
          'Good',
        ),
        createElement(PracticePlaybackControls, {
          playing: false,
          playLabel: 'Play',
          onPlay: () => {},
          speed: '1x',
          speedOptions: ['1x'],
          onSpeedChange: () => {},
          translationVisible: false,
          onTranslationToggle: () => {},
        }),
        createElement(PracticeProgressBar, { value: 0.375 }),
        createElement(PhoneField, {
          countries: [],
          country: {
            code: 'BR',
            name: 'Brasil',
            dialCode: '+55',
            flag: 'BR',
            placeholder: '00 00000 0000',
          },
          label: 'Celular',
          onCountryChange: () => {},
        }),
        createElement(PracticeCardSkeletonBody, {
          'data-testid': 'ssr-practice-skeleton',
        }),
        createElement(Card, null, 'Card SSR'),
        createElement(
          FilterToolbar,
          { 'aria-label': 'SSR filters' },
          'Toolbar SSR',
        ),
        createElement(
          Button,
          { size: 'lg', variant: 'brand', 'data-testid': 'ssr-primary-button' },
          'SSR',
        ),
        createElement(ActionLink, { href: '/next' }, 'Action SSR'),
        createElement(
          IconButton,
          { 'aria-label': 'Open menu' },
          createElement('span', { 'aria-hidden': true }, '+'),
        ),
        createElement(Pressable, null, 'Pressable SSR'),
        createElement(Spinner, { size: 'md' }),
        createElement(Avatar, { initials: 'LS', tone: 'brand' }),
        createElement(StatusChip, { tone: 'success' }, 'Confirmed'),
        createElement(StatePanel, { state: 'empty', title: 'Empty' }),
        createElement(StatePanel, { state: 'loading', title: 'Loading' }),
        createElement(StatePanel, { state: 'error', title: 'Error' }),
        createElement(AvailabilityCalendar, {
          label: 'Calendar SSR',
          days: [
            {
              id: 'monday',
              label: 'Monday',
              dateLabel: '14/09/2026',
              slots: [{ id: '09', label: '09:00', available: true }],
            },
          ],
          selectedSlotIds: ['09'],
          onToggleSlot: () => undefined,
        }),
        createElement(
          MessageBubble,
          {
            side: 'outgoing',
            status: 'sent',
            statusLabel: 'Sent',
            timestamp: '10:30',
          },
          'Message SSR',
        ),
        createElement(MessageComposer, {
          onSubmit: () => undefined,
          onValueChange: () => undefined,
          submitIcon: createElement('span', { 'aria-hidden': true }, '+'),
          submitLabel: 'Send message',
          textareaLabel: 'Message',
          value: 'Composer SSR',
        }),
        createElement(
          MessageThread,
          {
            'aria-label': 'SSR conversation',
            footer: createElement('span', null, 'Footer SSR'),
            header: createElement(MessageThreadHeader, {
              initials: 'LS',
              title: 'Participant SSR',
            }),
            viewportLabel: 'Message history SSR',
          },
          createElement('span', null, 'Thread SSR'),
        ),
        createElement(
          FieldRoot,
          { label: 'Name' },
          createElement(TextInput, { defaultValue: 'Maria' }),
        ),
        createElement(ControlledFieldSsr),
        createElement(
          FieldRoot,
          { label: 'Level' },
          createElement(
            SelectInput,
            { defaultValue: 'B1' },
            createElement('option', null, 'B1'),
          ),
        ),
        createElement(
          FieldRoot,
          { label: 'Notes' },
          createElement(TextareaInput, { defaultValue: 'SSR notes' }),
        ),
        createElement(
          CompoundControl,
          { leading: '$' },
          createElement(TextInput, {
            'aria-label': 'Amount',
            defaultValue: '48',
          }),
        ),
        createElement(SearchInput, {
          'aria-label': 'Search',
          defaultValue: 'Maria',
        }),
        createElement(SectionHeader, {
          meta: '4 items',
          title: 'Section header SSR',
        }),
        createElement(FilterPills, {
          'aria-label': 'Filters',
          onValueChange: () => undefined,
          options: [{ label: 'All', value: 'all' }],
          value: 'all',
        }),
        createElement(SegmentedControl, {
          'aria-label': 'Range',
          onValueChange: () => undefined,
          options: [{ label: '30 days', value: '30' }],
          value: '30',
        }),
        createElement(AuthTokenDigits, {
          'aria-label': 'Code',
          autoFocus: false,
          digitLabel: 'Digit',
          idPrefix: 'code',
          length: 4,
          onValueChange: () => undefined,
        }),

        createElement(
          ToastViewport,
          null,
          createElement(ToastItem, { message: 'SSR toast', tone: 'success' }),
        ),
        createElement(Toaster, {
          onDismiss: () => undefined,
          toasts: [{ id: 'ssr', message: 'SSR toaster' }],
        }),
        createElement(ToastProvider, null, 'SSR toast provider'),
        createElement(DocumentLayout, {
          title: 'SSR document',
          sections: [{ title: 'Section', body: ['Text'] }],
        }),
        createElement(
          NoticeBanner,
          {
            title: 'SSR notice',
            icon: createElement('span', { 'aria-hidden': true }, '!'),
          },
          'Notice text',
        ),

        createElement(AuthNotice, { tone: 'info' }, 'Code sent'),
        createElement(
          Dialog,
          {
            closeLabel: 'Close dialog',
            onClose: () => undefined,
            open: false,
            title: 'Dialog SSR',
          },
          'Dialog',
        ),
        createElement(
          Drawer,
          {
            closeLabel: 'Close drawer',
            onClose: () => undefined,
            open: false,
            title: 'Drawer SSR',
          },
          'Drawer',
        ),
        createElement(ActionMenu, {
          items: [
            {
              id: 'open',
              label: 'Open person',
              onSelect: () => undefined,
            },
          ],
          triggerLabel: 'More actions',
        }),
        createElement(OperationalList, {
          'aria-label': 'SSR operational queue',
          columns: [
            {
              id: 'status',
              label: 'Status',
              render: (item) => item.status,
            },
          ],
          getItemKey: (item) => item.id,
          items: [{ id: 'person-1', name: 'Maria', status: 'Active' }],
          primaryColumn: {
            label: 'Person',
            render: (item) => ({ title: item.name }),
          },
        }),
      ),
    ),
  )
  collectedCss = sheet.getStyleTags()
} finally {
  sheet.seal()
}

const primaryButton = markup.match(
  /<button\b[^>]*data-testid="ssr-primary-button"[^>]*>/,
)?.[0]
if (!primaryButton) throw new Error('shared_primary_button_missing')
const buttonClasses = (primaryButton.match(/\sclass="([^"]*)"/)?.[1] ?? '')
  .split(' ')
  .filter(Boolean)

if (!buttonClasses.includes('lsui-sc-button')) {
  throw new Error('shared_button_component_id_is_not_explicit')
}

if (!markup.includes('lsui-sc-card') || !markup.includes('Card SSR')) {
  throw new Error('shared_card_ssr_contract_missing')
}

if (
  !markup.includes('lsui-sc-filter-toolbar') ||
  !markup.includes('Toolbar SSR')
) {
  throw new Error('shared_filter_toolbar_ssr_contract_missing')
}

if (!markup.includes('lsui-sc-pressable')) {
  throw new Error('shared_pressable_component_id_is_not_explicit')
}

if (!markup.includes('lsui-sc-icon-button')) {
  throw new Error('shared_icon_button_component_id_is_not_explicit')
}

if (!markup.includes('lsui-sc-spinner')) {
  throw new Error('shared_spinner_component_id_is_not_explicit')
}

if (!markup.includes('lsui-sc-status-chip')) {
  throw new Error('shared_status_chip_component_id_is_not_explicit')
}

if (!markup.includes('lsui-sc-state-panel')) {
  throw new Error('shared_state_panel_component_id_is_not_explicit')
}

for (const componentId of [
  'lsui-sc-schedule-calendar',
  'lsui-sc-auth-actions',
  'lsui-sc-calendar-controls',
  'lsui-sc-practice-card-body',
  'lsui-sc-practice-result-panel',
  'lsui-sc-shadowing-word',
  'lsui-sc-card-link',
  'lsui-sc-flashcard-progress-segment',
  'lsui-sc-connection-notice',
  'lsui-sc-quiz-badge',
  'lsui-sc-quiz-metadata',
  'lsui-sc-quiz-prompt-header',
  'lsui-sc-flashcard-counter',
  'lsui-sc-flashcard-progress-track',
  'lsui-sc-quiz-blank',
  'lsui-sc-quiz-question',
  'lsui-sc-practice-cover-label',
  'lsui-sc-practice-cover-value',
  'lsui-sc-practice-level-badge',
  'lsui-sc-practice-card-cover',
  'lsui-sc-practice-card',
  'lsui-sc-schedule-row',
  'lsui-sc-calendar-time-slot',
  'lsui-sc-session-progress',
  'lsui-sc-page-description',
  'lsui-sc-page-title',
  'lsui-sc-auth-legal-text',
  'lsui-sc-auth-token-label',
  'lsui-sc-auth-channel-icon',
  'lsui-sc-auth-channel-hint',
  'lsui-sc-shadowing-repetitions',
  'lsui-sc-shadowing-control-cluster',
  'lsui-sc-shadowing-control-dock',
  'lsui-sc-shadowing-translation',
  'lsui-sc-shadowing-active-phrase',
  'lsui-sc-shadowing-context-phrase',
  'lsui-sc-shadowing-phrase-stack',
  'lsui-sc-shadowing-reader',
  'lsui-sc-shadowing-panel',
  'lsui-sc-skeleton',
  'lsui-sc-choice-card',
  'lsui-sc-toggle-button',
  'lsui-sc-radio-button',
  'lsui-sc-checkbox',
  'lsui-sc-weekly-count-chart',
  'lsui-sc-grouped-bar-chart',
  'lsui-sc-key-value-list',
  'lsui-sc-flashcard-feedback',
  'lsui-sc-flashcard-swiper',
  'lsui-sc-flashcard-flip',
  'lsui-sc-flashcard-ghost',
  'lsui-sc-flashcard-face',
  'lsui-sc-flashcard-flip-hint',
  'lsui-sc-flashcard-back',
  'lsui-sc-flashcard-word',
  'lsui-sc-flashcard-image-panel',
  'lsui-sc-flashcard-front',
  'lsui-sc-flashcard-deck',
  'lsui-sc-flashcard-stage',
  'lsui-sc-flashcard-frame',
  'lsui-sc-flashcard-flip-button',
  'lsui-sc-flashcard-audio-button',
  'lsui-sc-flashcard-word-skeleton',
  'lsui-sc-timeline-event',
  'lsui-sc-calendar-event',
  'lsui-sc-calendar-day-number',
  'lsui-sc-calendar-day',
  'lsui-sc-calendar-week-grid',
  'lsui-sc-calendar-month-grid',
  'lsui-sc-calendar-scroller',
  'lsui-sc-bottom-navigation-link',
  'lsui-sc-bottom-navigation',
  'lsui-sc-conversation-row',
  'lsui-sc-notification-item',
  'lsui-sc-navigation-button',
  'lsui-sc-navigation-link',
  'lsui-sc-sidebar-navigation',
  'lsui-sc-sidebar-frame',
  'lsui-sc-metric-label',
  'lsui-sc-metric-value',
  'lsui-sc-metric-summary',
  'lsui-sc-detail-row',
  'lsui-sc-definition-item',
  'lsui-sc-stat-action',
  'lsui-sc-stat-label',
  'lsui-sc-stat-value',
  'lsui-sc-stat-card',
  'lsui-sc-inline-notice',
  'lsui-sc-file-input',
  'lsui-sc-filter-select',
  'lsui-sc-form-actions',
  'lsui-sc-form-error',
  'lsui-sc-field-counter',
  'lsui-sc-field-label-row',
  'lsui-sc-form-stack',
  'lsui-sc-document-navigation-link',
  'lsui-sc-brand-link',
  'lsui-sc-document-navigation',
  'lsui-sc-document-header-content',
  'lsui-sc-document-header',
  'lsui-sc-auth-feature',
  'lsui-sc-auth-footer-link',
  'lsui-sc-auth-mobile-footer',
  'lsui-sc-auth-brand-footer',
  'lsui-sc-auth-feature-list',
  'lsui-sc-auth-brand-description',
  'lsui-sc-auth-brand-accent',
  'lsui-sc-auth-brand-title',
  'lsui-sc-brand-logo',
  'lsui-sc-practice-result-actions',
  'lsui-sc-practice-result-description',
  'lsui-sc-practice-result-title',
  'lsui-sc-practice-result-mark',
  'lsui-sc-auth-success-state',
  'lsui-sc-auth-top-link',
  'lsui-sc-auth-progress',
  'lsui-sc-auth-success-icon',
  'lsui-sc-auth-resend-button',
  'lsui-sc-auth-resend-action',
  'lsui-sc-auth-form',
  'lsui-sc-auth-top-link-highlight',
  'lsui-sc-auth-eyebrow',
  'lsui-sc-quiz-session-header',
  'lsui-sc-quiz-option',
  'lsui-sc-practice-playback-controls',
  'lsui-sc-flashcard-rating-button',
  'lsui-sc-quiz-feedback',
  'lsui-sc-practice-card-skeleton-body',
  'lsui-sc-toast-item',
  'lsui-sc-toast-viewport',
  'lsui-sc-document-layout',
  'lsui-sc-notice-banner',
  'lsui-sc-action-link',
  'lsui-sc-action-menu',
  'lsui-sc-auth-accent',
  'lsui-sc-auth-description',
  'lsui-sc-auth-title',
  'lsui-sc-auth-notice',
  'lsui-sc-auth-token-digits',
  'lsui-sc-availability-calendar',
  'lsui-sc-avatar',
  'lsui-sc-field-root',
  'lsui-sc-filter-pills',
  'lsui-sc-message-bubble',
  'lsui-sc-message-composer',
  'lsui-sc-message-thread',
  'lsui-sc-message-thread-header',
  'lsui-sc-operational-list',
  'lsui-sc-compound-control',
  'lsui-sc-search-input',
  'lsui-sc-section-header',
  'lsui-sc-select-input',
  'lsui-sc-segmented-control',
  'lsui-sc-textarea-input',
  'lsui-sc-text-input',
]) {
  if (!markup.includes(componentId)) {
    throw new Error(`shared_component_id_is_not_explicit_${componentId}`)
  }
}

if (buttonClasses.includes(ConsumerSurface.styledComponentId)) {
  throw new Error('shared_button_component_id_collides_with_consumer')
}

const generatedClasses = buttonClasses.filter(
  (className) => !className.startsWith('lsui-'),
)

if (generatedClasses.length !== 2) {
  throw new Error(
    `expected_two_generated_button_classes_received_${generatedClasses.length}`,
  )
}

if (
  generatedClasses.some(
    (generatedClass) => !collectedCss.includes(`.${generatedClass}{`),
  )
) {
  throw new Error('shared_button_styles_missing_from_collected_ssr_css')
}

if (!collectedCss.includes('border-radius:999px')) {
  throw new Error('shared_button_declarations_missing_from_collected_ssr_css')
}

if (
  !markup.includes('lsui-sc-practice-progress-bar') ||
  !markup.includes('width:37.5%')
) {
  throw new Error('ssr_practice_progress_contract_missing')
}

console.log(
  'SSR smoke passed for packaged actions, fields, filters, auth and operational-list components.',
)
