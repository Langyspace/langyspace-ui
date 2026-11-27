# MessagePhoneFrame

Single owner of the status bar, contact strip, conversation viewport, composer and home indicator for both VoiceMessageExercise and static message previews. The listening component now composes this frame; it no longer keeps a parallel phone markup. Existing phone styles/recipe, player state, transcript counting and sibling playback behavior remain in their canonical owners.

`contact` is a ReactNode slot; use the canonical circular Avatar for profile identities, including a brand profile image. `children` carries message or recording content. `size="default"` preserves the current voiceMessage theme dimensions; `size="large"` uses the shared largePhoneWidth/largePhoneHeight recipe, matching the spacious listening phone. Both stay width-bounded. `time` defaults to9:41; `composerPlaceholder` defaults toMessage. Section attributes and ref are forwarded.

`conversationProps` forwards native viewport attributes and ref to the single scroll owner. `composerAction` accepts an explicit consumer-owned action; when absent, all composer chrome remains decorative and hidden from assistive technology. No automatic send or device access is added. Existing listening reply callbacks/disabled states remain consumer-controlled.

TrialNextSteps uses the supplied square Langy profile image inside Avatar, the large size and MessageBubble appearance="messaging". That appearance uses #D9FDD3 for sent messages with dark foreground and readable timestamps, while portal brand bubbles retain their existing default. Use MobileFrame for content-sized homework plans.
