// Public entry. Keep the existing export order: the bundle registers component
// styles in this order, and reordering can change CSS precedence in the products.
// react-hook-form bindings live in './form'.

export { ActionLink } from './components/ActionLink/ActionLink'
export { AuthBrandContent } from './components/Auth/AuthBrandContent'
export type { AuthBrandContentProps } from './components/Auth/AuthBrandContent.types'
export { AuthFooter } from './components/Auth/AuthFooter'
export type { AuthFooterProps } from './components/Auth/AuthFooter.types'
export { AuthHeader } from './components/Auth/AuthHeader'
export type { AuthHeaderProps } from './components/Auth/AuthHeader.types'
export { AuthActions } from './components/Auth/AuthActions'
export type { AuthActionsProps } from './components/Auth/AuthActions.types'
export { FlashcardProgress } from './components/Flashcard/FlashcardProgress'
export type { FlashcardProgressProps } from './components/Flashcard/FlashcardProgress.types'
export type {
  ActionLinkProps,
  ActionLinkVariant,
} from './components/ActionLink/ActionLink.types'

export { AuthNotice } from './components/Auth/AuthNotice'
export type {
  AuthNoticeProps,
  AuthNoticeTone,
} from './components/Auth/AuthNotice.types'

export { Avatar } from './components/Avatar/Avatar'
export type {
  AvatarProps,
  AvatarSize,
  AvatarTone,
} from './components/Avatar/Avatar.types'

export { Button } from './components/Button/Button'
export type {
  ButtonProps,
  ButtonDensity,
  ButtonSize,
  ButtonVariant,
} from './components/Button/Button.types'

export { IconButton } from './components/IconButton/IconButton'
export type {
  IconButtonProps,
  IconButtonShape,
  IconButtonSize,
  IconButtonVariant,
} from './components/IconButton/IconButton.types'

export { SelectInput } from './components/Form/SelectInput'
export type {
  SelectInputProps,
  SelectInputSize,
} from './components/Form/SelectInput.types'

export { StatusChip } from './components/StatusChip/StatusChip'
export type {
  StatusChipProps,
  StatusChipSize,
  StatusChipTone,
} from './components/StatusChip/StatusChip.types'

export { TextareaInput } from './components/Form/TextareaInput'
export type {
  TextareaInputProps,
  TextareaInputSize,
} from './components/Form/TextareaInput.types'

export { TextInput } from './components/Form/TextInput'
export type {
  TextInputProps,
  TextInputSize,
} from './components/Form/TextInput.types'
export { CardDetailsFields } from './components/Form/CardDetailsFields'

export type {
  CardDetailsFieldsLabels,
  CardDetailsFieldsProps,
  CardDetailsValue,
  CardPostalCodeLookup,
} from './components/Form/CardDetailsFields.types'

export { alpha } from './foundations/theme/alpha'
export { createTheme } from './foundations/theme/createTheme'
export { GlobalStyles } from './foundations/theme/GlobalStyles'
export { theme } from './foundations/theme/theme'
export type { LangyTheme } from './foundations/theme/theme'
export type { DeepMerge, ThemeOverrides } from './foundations/theme/theme.types'
export type {
  LinkDestination,
  LinkRender,
  LinkRenderProps,
} from './foundations/links/types'

export type { FieldControlSize } from './foundations/fields'

export { ActionMenu } from './components/ActionMenu/ActionMenu'
export type {
  ActionMenuAlign,
  ActionMenuItem,
  ActionMenuProps,
  ActionMenuSize,
  ActionMenuTone,
} from './components/ActionMenu/ActionMenu.types'

export { AuthTokenDigits } from './components/Auth/AuthTokenDigits'
export type {
  AuthTokenDigitsProps,
  AuthTokenLength,
} from './components/Auth/AuthTokenDigits.types'

export { Card } from './components/Card/Card'
export type { CardProps } from './components/Card/Card.types'

export { FilterToolbar } from './components/Filter/FilterToolbar'
export type { FilterToolbarProps } from './components/Filter/FilterToolbar.types'

export { CompoundControl } from './components/Form/CompoundControl'
export type {
  CompoundControlProps,
  CompoundControlSurface,
} from './components/Form/CompoundControl.types'

export { Dialog } from './components/Dialog/Dialog'
export type {
  DialogDismissal,
  DialogPanelProps,
  DialogProps,
  DialogSize,
} from './components/Dialog/Dialog.types'

export { Drawer } from './components/Drawer/Drawer'
export type {
  DrawerDismissal,
  DrawerPanelProps,
  DrawerProps,
  DrawerSize,
} from './components/Drawer/Drawer.types'

export { FieldRoot } from './components/Form/FieldRoot'
export type {
  FieldLabelVariant,
  FieldRootProps,
} from './components/Form/FieldRoot.types'

export { FilterPills } from './components/Filter/FilterPills'
export type {
  FilterPillsOverflow,
  FilterPillsProps,
  FilterPillsSize,
} from './components/Filter/FilterPills.types'

export { MessageBubble } from './components/Message/MessageBubble'
export type {
  MessageBubbleProps,
  MessageBubbleSide,
  MessageBubbleStatus,
} from './components/Message/MessageBubble.types'

export { MessageComposer } from './components/Message/MessageComposer'
export type { MessageComposerProps } from './components/Message/MessageComposer.types'

export { MessageThread } from './components/Message/MessageThread'
export type { MessageThreadProps } from './components/Message/MessageThread.types'

export { MessageThreadHeader } from './components/Message/MessageThreadHeader'
export type {
  MessageThreadHeaderLeadingActionDisplay,
  MessageThreadHeaderProps,
} from './components/Message/MessageThreadHeader.types'

export { OperationalList } from './components/OperationalList/OperationalList'
export type {
  OperationalListAlign,
  OperationalListColumn,
  OperationalListDensity,
  OperationalListImportance,
  OperationalListItemAction,
  OperationalListLabels,
  OperationalListNavigation,
  OperationalListPrimaryColumn,
  OperationalListPrimaryContent,
  OperationalListProps,
  OperationalListSort,
  OperationalListSortDirection,
} from './components/OperationalList/OperationalList.types'

export { SearchInput } from './components/Form/SearchInput'
export type {
  SearchInputClearAction,
  SearchInputProps,
  SearchInputSize,
} from './components/Form/SearchInput.types'

export { SectionHeader } from './components/SectionHeader/SectionHeader'
export type {
  SectionHeaderLevel,
  SectionHeaderProps,
  SectionHeaderSpacing,
} from './components/SectionHeader/SectionHeader.types'

export { SegmentedControl } from './components/SegmentedControl/SegmentedControl'
export type {
  ChoiceOption,
  ChoiceValue,
  SegmentedControlProps,
  SegmentedControlShape,
  SegmentedControlSurface,
} from './components/SegmentedControl/SegmentedControl.types'

export { StatePanel } from './components/StatePanel/StatePanel'
export type {
  StatePanelDensity,
  StatePanelProps,
  StatePanelState,
  StatePanelSurface,
} from './components/StatePanel/StatePanel.types'

export { Pressable } from './components/Pressable'
export type { PressableProps } from './components/Pressable.types'

export { Spinner } from './components/Spinner/Spinner'
export type {
  SpinnerProps,
  SpinnerSize,
} from './components/Spinner/Spinner.types'

export { AvailabilityCalendar } from './components/Calendar/AvailabilityCalendar'
export type {
  AvailabilityCalendarDay,
  AvailabilityCalendarProps,
  AvailabilityCalendarSlot,
  AvailabilityCalendarStatus,
} from './components/Calendar/AvailabilityCalendar.types'

export { DocumentLayout } from './components/Document/DocumentLayout'
export type {
  DocumentLayoutProps,
  DocumentSection,
} from './components/Document/DocumentLayout.types'

export { NoticeBanner } from './components/Notice/NoticeBanner'
export type { NoticeBannerProps } from './components/Notice/NoticeBanner.types'

export { ToastItem } from './components/Toast/ToastItem'
export type {
  ToastItemProps,
  ToastTone,
} from './components/Toast/ToastItem.types'

export { ToastViewport } from './components/Toast/ToastViewport'
export type { ToastViewportProps } from './components/Toast/ToastViewport.types'

export { Toaster } from './components/Toast/Toaster'
export { ToastProvider } from './components/Toast/ToastProvider'
export { useToast } from './components/Toast/useToast'
export type {
  ToastController,
  ToastInput,
  ToastProviderProps,
  ToasterItem,
  ToasterProps,
} from './components/Toast/Toaster.types'

export { PracticeCardSkeletonBody } from './components/Practice/PracticeCardSkeletonBody'
export type { PracticeCardSkeletonBodyProps } from './components/Practice/PracticeCardSkeletonBody.types'

export { PracticeProgressBar } from './components/Practice/PracticeProgressBar'
export type { PracticeProgressBarProps } from './components/Practice/PracticeProgressBar.types'

export { PhoneField } from './components/Form/PhoneField'
export type {
  PhoneFieldProps,
  PhoneCountryOption,
} from './components/Form/PhoneField.types'

export { AuthFrame } from './components/Auth/AuthFrame'
export type { AuthFrameProps } from './components/Auth/AuthFrame.types'

export { CalendarControls } from './components/Calendar/CalendarControls'
export type { CalendarControlsProps } from './components/Calendar/CalendarControls.types'

export { PracticeCardBody } from './components/Practice/PracticeCardBody'
export type { PracticeCardBodyProps } from './components/Practice/PracticeCardBody.types'

export { QuizOption } from './components/Quiz/QuizOption'
export type {
  QuizOptionProps,
  QuizOptionState,
} from './components/Quiz/QuizOption.types'

export { QuizFeedback } from './components/Quiz/QuizFeedback'
export type { QuizFeedbackProps } from './components/Quiz/QuizFeedback.types'

export { FlashcardRatingButton } from './components/Flashcard/FlashcardRatingButton'
export type {
  FlashcardGrade,
  FlashcardRatingButtonProps,
} from './components/Flashcard/FlashcardRatingButton.types'

export { PracticePlaybackControls } from './components/Practice/PracticePlaybackControls'
export type { PracticePlaybackControlsProps } from './components/Practice/PracticePlaybackControls.types'

export { QuizSessionHeader } from './components/Quiz/QuizSessionHeader'
export type { QuizSessionHeaderProps } from './components/Quiz/QuizSessionHeader.types'

export { PracticeResultPanel } from './components/PracticeResultPanel/PracticeResultPanel'
export type { PracticeResultPanelProps } from './components/PracticeResultPanel/PracticeResultPanel.types'

export { AuthEyebrow } from './components/Auth/AuthEyebrow'
export type { AuthEyebrowProps } from './components/Auth/AuthEyebrow.types'

export { AuthForm } from './components/Auth/AuthForm'
export type { AuthFormProps } from './components/Auth/AuthForm.types'

export { AuthResendAction } from './components/Auth/AuthResendAction'
export type { AuthResendActionProps } from './components/Auth/AuthResendAction.types'

export { AuthProgress } from './components/Auth/AuthProgress'
export type { AuthProgressProps } from './components/Auth/AuthProgress.types'

export { AuthTopLink } from './components/Auth/AuthTopLink'
export type { AuthTopLinkProps } from './components/Auth/AuthTopLink.types'

export { AuthSuccessState } from './components/Auth/AuthSuccessState'
export type { AuthSuccessStateProps } from './components/Auth/AuthSuccessState.types'

export { BrandLogo } from './components/Brand/BrandLogo'
export type { BrandLogoProps } from './components/Brand/BrandLogo.types'

export { DocumentHeader } from './components/Document/DocumentHeader'
export type { DocumentHeaderProps } from './components/Document/DocumentHeader.types'

export { DocumentHeaderContent } from './components/Document/DocumentHeaderContent'
export type { DocumentHeaderContentProps } from './components/Document/DocumentHeaderContent.types'

export { DocumentNavigation } from './components/Document/DocumentNavigation'
export type { DocumentNavigationProps } from './components/Document/DocumentNavigation.types'

export { BrandLink } from './components/Brand/BrandLink'
export type { BrandLinkProps } from './components/Brand/BrandLink.types'

export { DocumentNavigationLink } from './components/Document/DocumentNavigationLink'
export type { DocumentNavigationLinkProps } from './components/Document/DocumentNavigationLink.types'

export type {
  BrandLogoAppearance,
  BrandLogoOrientation,
} from './components/Brand/BrandLogo.types'

export { FormStack } from './components/Form/FormStack'
export type { FormStackProps } from './components/Form/FormStack.types'

export { FieldLabelRow } from './components/Form/FieldLabelRow'
export type { FieldLabelRowProps } from './components/Form/FieldLabelRow.types'

export { FieldCounter } from './components/Form/FieldCounter'
export type { FieldCounterProps } from './components/Form/FieldCounter.types'

export { FormError } from './components/Form/FormError'
export type { FormErrorProps } from './components/Form/FormError.types'

export { FormActions } from './components/Form/FormActions'
export type { FormActionsProps } from './components/Form/FormActions.types'

export { FilterSelect } from './components/Filter/FilterSelect'
export type { FilterSelectProps } from './components/Filter/FilterSelect.types'

export { FileInput } from './components/Form/FileInput'
export type { FileInputProps } from './components/Form/FileInput.types'

export { InlineNotice } from './components/Notice/InlineNotice'
export type { InlineNoticeProps } from './components/Notice/InlineNotice.types'

export { StatCard } from './components/StatCard/StatCard'
export type { StatCardProps } from './components/StatCard/StatCard.types'

export { DefinitionItem } from './components/Details/DefinitionItem'
export type { DefinitionItemProps } from './components/Details/DefinitionItem.types'

export { DetailRow } from './components/Details/DetailRow'
export type { DetailRowProps } from './components/Details/DetailRow.types'

export { MetricSummary } from './components/MetricSummary/MetricSummary'
export type {
  MetricSummaryProps,
  MetricSummaryVariant,
} from './components/MetricSummary/MetricSummary.types'

export { SidebarFrame } from './components/Navigation/SidebarFrame'
export type { SidebarFrameProps } from './components/Navigation/SidebarFrame.types'

export { SidebarNavigation } from './components/Navigation/SidebarNavigation'
export type { SidebarNavigationProps } from './components/Navigation/SidebarNavigation.types'

export { NavigationLink } from './components/Navigation/NavigationLink'
export type { NavigationLinkProps } from './components/Navigation/NavigationLink.types'

export { NavigationButton } from './components/Navigation/NavigationButton'
export type { NavigationButtonProps } from './components/Navigation/NavigationButton.types'

export { NotificationItem } from './components/NotificationItem/NotificationItem'
export type { NotificationItemProps } from './components/NotificationItem/NotificationItem.types'

export { ConversationRow } from './components/Message/ConversationRow'
export type { ConversationRowProps } from './components/Message/ConversationRow.types'

export { BottomNavigation } from './components/Navigation/BottomNavigation'
export type { BottomNavigationProps } from './components/Navigation/BottomNavigation.types'

export { BottomNavigationLink } from './components/Navigation/BottomNavigationLink'
export type { BottomNavigationLinkProps } from './components/Navigation/BottomNavigationLink.types'

export { CalendarScroller } from './components/Calendar/CalendarScroller'
export type { CalendarScrollerProps } from './components/Calendar/CalendarScroller.types'

export { ScheduleCalendar } from './components/Calendar/ScheduleCalendar'

export type {
  ScheduleCalendarDay,
  ScheduleCalendarEvent,
  ScheduleCalendarLabels,
  ScheduleCalendarProps,
  ScheduleCalendarSlot,
} from './components/Calendar/ScheduleCalendar.types'

export { FlashcardFrame } from './components/Flashcard/FlashcardFrame'
export type { FlashcardFrameProps } from './components/Flashcard/FlashcardFrame.types'

export { FlashcardStage } from './components/Flashcard/FlashcardStage'
export type { FlashcardStageProps } from './components/Flashcard/FlashcardStage.types'

export { FlashcardDeck } from './components/Flashcard/FlashcardDeck'
export type { FlashcardDeckProps } from './components/Flashcard/FlashcardDeck.types'

export { FlashcardFront } from './components/Flashcard/FlashcardFront'
export type { FlashcardFrontProps } from './components/Flashcard/FlashcardFront.types'

export { FlashcardImagePanel } from './components/Flashcard/FlashcardImagePanel'
export type { FlashcardImagePanelProps } from './components/Flashcard/FlashcardImagePanel.types'

export { FlashcardWord } from './components/Flashcard/FlashcardWord'
export type { FlashcardWordProps } from './components/Flashcard/FlashcardWord.types'

export { FlashcardBack } from './components/Flashcard/FlashcardBack'
export type { FlashcardBackProps } from './components/Flashcard/FlashcardBack.types'

export { FlashcardFlipHint } from './components/Flashcard/FlashcardFlipHint'
export type { FlashcardFlipHintProps } from './components/Flashcard/FlashcardFlipHint.types'

export { FlashcardFace } from './components/Flashcard/FlashcardFace'
export type { FlashcardFaceProps } from './components/Flashcard/FlashcardFace.types'

export { FlashcardGhost } from './components/Flashcard/FlashcardGhost'
export type { FlashcardGhostProps } from './components/Flashcard/FlashcardGhost.types'

export { FlashcardFlip } from './components/Flashcard/FlashcardFlip'
export type { FlashcardFlipProps } from './components/Flashcard/FlashcardFlip.types'

export { FlashcardSwiper } from './components/Flashcard/FlashcardSwiper'
export type {
  FlashcardSwiperExit,
  FlashcardSwiperProps,
} from './components/Flashcard/FlashcardSwiper.types'

export { FlashcardFeedback } from './components/Flashcard/FlashcardFeedback'
export type { FlashcardFeedbackProps } from './components/Flashcard/FlashcardFeedback.types'

export { ShadowingReader } from './components/Shadowing/ShadowingReader'
export type { ShadowingReaderProps } from './components/Shadowing/ShadowingReader.types'

export { ShadowingPhraseStack } from './components/Shadowing/ShadowingPhraseStack'
export type { ShadowingPhraseStackProps } from './components/Shadowing/ShadowingPhraseStack.types'

export { ShadowingContextPhrase } from './components/Shadowing/ShadowingContextPhrase'
export type { ShadowingContextPhraseProps } from './components/Shadowing/ShadowingContextPhrase.types'

export { ShadowingActivePhrase } from './components/Shadowing/ShadowingActivePhrase'
export type { ShadowingActivePhraseProps } from './components/Shadowing/ShadowingActivePhrase.types'

export { ShadowingTranslation } from './components/Shadowing/ShadowingTranslation'
export type { ShadowingTranslationProps } from './components/Shadowing/ShadowingTranslation.types'

export { ShadowingControlDock } from './components/Shadowing/ShadowingControlDock'
export type { ShadowingControlDockProps } from './components/Shadowing/ShadowingControlDock.types'

export { ShadowingControlCluster } from './components/Shadowing/ShadowingControlCluster'
export type { ShadowingControlClusterProps } from './components/Shadowing/ShadowingControlCluster.types'

export { KeyValueList } from './components/Details/KeyValueList'
export type { KeyValueListProps } from './components/Details/KeyValueList.types'

export { GroupedBarChart } from './components/Charts/GroupedBarChart'
export type { GroupedBarChartProps } from './components/Charts/GroupedBarChart.types'

export { WeeklyCountChart } from './components/Charts/WeeklyCountChart'
export type { WeeklyCountChartProps } from './components/Charts/WeeklyCountChart.types'

export { Checkbox } from './components/Checkbox/Checkbox'
export type { CheckboxProps } from './components/Checkbox/Checkbox.types'

export { RadioButton } from './components/RadioButton/RadioButton'
export type { RadioButtonProps } from './components/RadioButton/RadioButton.types'

export { ToggleButton } from './components/ToggleButton/ToggleButton'
export type { ToggleButtonProps } from './components/ToggleButton/ToggleButton.types'

export { ChoiceCard } from './components/ChoiceCard/ChoiceCard'
export type { ChoiceCardProps } from './components/ChoiceCard/ChoiceCard.types'

export { Skeleton } from './components/Skeleton/Skeleton'
export type { SkeletonProps } from './components/Skeleton/Skeleton.types'

export { ShadowingRepetitions } from './components/Shadowing/ShadowingRepetitions'
export type { ShadowingRepetitionsProps } from './components/Shadowing/ShadowingRepetitions.types'

export { AuthChannelHint } from './components/Auth/AuthChannelHint'
export type { AuthChannelHintProps } from './components/Auth/AuthChannelHint.types'

export { AuthChannelIcon } from './components/Auth/AuthChannelIcon'
export type { AuthChannelIconProps } from './components/Auth/AuthChannelIcon.types'

export { AuthTokenLabel } from './components/Auth/AuthTokenLabel'
export type { AuthTokenLabelProps } from './components/Auth/AuthTokenLabel.types'

export { AuthLegalText } from './components/Auth/AuthLegalText'
export type { AuthLegalTextProps } from './components/Auth/AuthLegalText.types'

export { PageTitle } from './components/SectionHeader/PageTitle'
export type { PageTitleProps } from './components/SectionHeader/PageTitle.types'

export { PageDescription } from './components/SectionHeader/PageDescription'
export type { PageDescriptionProps } from './components/SectionHeader/PageDescription.types'

export { SessionProgress } from './components/SessionProgress/SessionProgress'
export type { SessionProgressProps } from './components/SessionProgress/SessionProgress.types'

export { ScheduleRow } from './components/Calendar/ScheduleRow'
export type { ScheduleRowProps } from './components/Calendar/ScheduleRow.types'

export { PracticeCard } from './components/Practice/PracticeCard'
export type { PracticeCardProps } from './components/Practice/PracticeCard.types'

export { PracticeCardCover } from './components/Practice/PracticeCardCover'
export type { PracticeCardCoverProps } from './components/Practice/PracticeCardCover.types'

export { PracticeLevelBadge } from './components/Practice/PracticeLevelBadge'
export type { PracticeLevelBadgeProps } from './components/Practice/PracticeLevelBadge.types'

export { QuizQuestion } from './components/Quiz/QuizQuestion'
export type { QuizQuestionProps } from './components/Quiz/QuizQuestion.types'

export { QuizBlank } from './components/Quiz/QuizBlank'
export type { QuizBlankProps } from './components/Quiz/QuizBlank.types'

export { QuizPromptHeader } from './components/Quiz/QuizPromptHeader'
export type { QuizPromptHeaderProps } from './components/Quiz/QuizPromptHeader.types'

export { QuizMetadata } from './components/Quiz/QuizMetadata'
export type { QuizMetadataProps } from './components/Quiz/QuizMetadata.types'

export { QuizBadge } from './components/Quiz/QuizBadge'
export type { QuizBadgeProps } from './components/Quiz/QuizBadge.types'

export { ConnectionNotice } from './components/Notice/ConnectionNotice'
export type { ConnectionNoticeProps } from './components/Notice/ConnectionNotice.types'

export { CardLink } from './components/Card/CardLink'
export type { CardLinkProps } from './components/Card/CardLink.types'

export { ShadowingWord } from './components/Shadowing/ShadowingWord'
export type { ShadowingWordProps } from './components/Shadowing/ShadowingWord.types'

export { FlashcardFlipButton } from './components/Flashcard/FlashcardFlipButton'
export type { FlashcardFlipButtonProps } from './components/Flashcard/FlashcardFlipButton.types'

export { FlashcardAudioButton } from './components/Flashcard/FlashcardAudioButton'
export type { FlashcardAudioButtonProps } from './components/Flashcard/FlashcardAudioButton.types'

export { FlashcardWordSkeleton } from './components/Flashcard/FlashcardWordSkeleton'
export type { FlashcardWordSkeletonProps } from './components/Flashcard/FlashcardWordSkeleton.types'

export { ShadowingPanel } from './components/Shadowing/ShadowingPanel'
export type { ShadowingPanelProps } from './components/Shadowing/ShadowingPanel.types'
