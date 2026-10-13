import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { FormProvider, useForm } from 'react-hook-form'
import { ServerStyleSheet, styled } from 'styled-components'

const ConsumerSurface = styled.div`
  color: #123456;
`

const {
  CalendarControls,
  AuthFrame,
  AuthAccent,
  AuthDescription,
  AuthTitle,
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
  ControlledField,
  Dialog,
  DocumentLayout,
  NoticeBanner,
  Drawer,
  EmptyState,
  FieldRoot,
  FilterPills,
  IconButton,
  LoadingState,
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
  ToastViewport,
} = await import('@langyspace/ui')

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
        createElement(EmptyState, { title: 'Empty' }),
        createElement(LoadingState, { title: 'Loading' }),
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
          onChange: () => undefined,
          options: [{ label: 'All', value: 'all' }],
          value: 'all',
        }),
        createElement(SegmentedControl, {
          'aria-label': 'Range',
          onChange: () => undefined,
          options: [{ label: '30 days', value: '30' }],
          value: '30',
        }),
        createElement(AuthTokenDigits, {
          'aria-label': 'Code',
          autoFocus: false,
          digitLabel: 'Digit',
          idPrefix: 'code',
          length: 4,
          onTokenChange: () => undefined,
        }),
        createElement(
          AuthTitle,
          null,
          'Auth ',
          createElement(AuthAccent, null, 'title'),
        ),
        createElement(
          ToastViewport,
          null,
          createElement(ToastItem, { message: 'SSR toast', tone: 'success' }),
        ),
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
        createElement(AuthDescription, null, 'Auth description'),
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
  'lsui-sc-calendar-controls',
  'lsui-sc-practice-card-body',
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
