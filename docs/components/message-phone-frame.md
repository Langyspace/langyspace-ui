# MessagePhoneFrame

Static messaging preview using the same phone, status bar, contact strip, conversation, composer and home indicator recipe as VoiceMessageExercise. It reuses that owner’s styles without modifying listening behavior.

`contact` is a ReactNode slot for the consumer’s Avatar, BrandLogo or named contact. `children` contains messages such as MessageBubble. `time` defaults to9:41 and `composerPlaceholder` defaults toMessage. Native section attributes and ref are forwarded. Override `aria-label` in the consumer’s language.

The frame follows the voiceMessage theme’s phoneWidth/phoneHeight and stays within available width. Composer/status chrome is decorative and inaccessible. No send button, editable field, delivery callback or device access is added. Consumers own routes, identity and copy. Use VoiceMessageExercise for playable recordings and MobileFrame for content-sized homework plans.

TrialNextSteps uses the canonical Langy logo and an outgoing enrolment message, keeping the approved cover split. This commercial next action is intentionally in Portuguese, rather than another English exercise. No phone number or contact link is invented.
