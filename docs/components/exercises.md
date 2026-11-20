# Exercise components

The teacher and student compose these contracts with `SlidePage` and `SlideDeck`. `Materials/A1.01` is the complete 26-screen source fixture; lesson data, answer keys, synthesis, homework destinations and private teacher notes are catalog fixtures, not package exports.

## Answer sounds

`QuizOption.feedbackOutcome` accepts `correct` or `wrong`, supplied by the consumer
when the result of that alternative is known. It plays once in an accepted click,
after the consumer callback; disabled buttons and prevented events stay silent.
Omit the outcome on personal preferences, exploratory choices and ungraded tasks.
No sound is triggered by state rendering, hover, answer reveal or navigation.

`GapFillChoice`, `MinimalPairChoice` and `VoiceMessageChoice` carry the same optional
outcome for their native choices. Existing result colors/icons remain independent.
`useFeedbackSounds()` exposes the client-window mute preference, play and stop;
`SlideDeck feedbackSounds` displays the library icon button to toggle it.
Spoken recordings are independent. No storage, audio files, server or new provider
is required. Context creation/resume happens only in the answer gesture and fails
silently without affecting evaluation. Rapid responses replace the prior cue.

The fixed design uses rounded sine tones with a quiet second harmonic: ascending
280ms for correct, descending225ms for wrong, soft attack/release and bounded gain.
Parameters are centralized in foundations/audio/feedbackSoundDesign.ts. See
[research and limitations](../epics/choice-feedback41/sound-study.md); these are
product choices, not clinically optimized frequencies or a retention guarantee.

## ExercisePanel

`variant="workstation"` owns the monitor frame, colored window bar, fixed taskbar,
chin and stand. `workstationMeta` accepts `appLabel`, `clock` and `date` supplied
by the exercise; these are illustrative metadata, not an operating-system clock.
The body grows with the native form fields; chrome never flex-shrinks over them.
Its silver frame and blue title bar use the workstation tokens in `theme.exercises`.
The contextual image remains a separate media slot at a comparable scale.

`RevealCard presentation="prompt" answerMinLines={3}` can reserve a short model's
minimum space when switching between content records. Longer text still grows;
concealed answers remain inert and inaccessible. Omit it for the existing layout.

A shared capsule with optional heading, counter and media slots. It supplies the measured compact exercise layout, without owning options, media playback or scoring.

## VocabularyGrid

Receives semantic image/word/translation items, controlled `revealedIds`, `showAll`, `showInitial` and `onReveal`. Hover/focus previews the label; native button activation delegates the stable id and optional `onPlay`. Touch and keyboard do not depend on hover. Image descriptions come from the consumer; decorative images do not duplicate the spoken description.

`imageVariant="scene"` gives contextual illustrations a full-card frame whose height follows the material viewport. The default `isolated` keeps icon framing. Optional `columns={3}` keeps the reference's three columns even on a phone; omit it for the responsive three/two-column grid. `density="regular"` provides taller vocabulary cards. `revealVariant="tooltip"` uses a hover/focus translation tooltip, a persistent word caption after activation/show-all and an initial-letter hint. The default overlay reveal remains available. Image generation, scene selection and asset URLs remain owned by the material author; no generation provider or credentials enter the component bundle.

Scene cards also honor the existing `density="regular"`: a 3:2 frame capped by the regular height preserves the composition of matching 3:2 artwork. Compact scenes keep their original height and upper framing. A2.01 uses the responsive three/two-column default; image composition remains the material author's responsibility.

## LearningDialogue

Receives stable line ids, speaker names/avatars, start/end alignment and React content. Translation visibility, playing id and playback/translation actions are controlled by the product. Content slots permit the existing dialogue to contain exercise blanks without cloning the chat. No speech engine or microphone service is bundled.

## RevealCard

Controlled native button with a numbered marker, prompt, hidden answer and expanded state. The product supplies `revealed`, `answer` and the click action. This supports turning statements into questions and checking answers without an evaluator inside the library.

## MatchPairs

Two named groups with stable question/answer ids. Products supply the selected question, completed matches, incorrect answer and handlers. Only the product evaluates correctness. Completed choices are disabled; status text and check/cross marks expose feedback beyond color. Long content wraps in both columns and remains usable at narrow widths.

## QuizOption compact density

`density="compact"` opts into the reference's 47px slide option with a 36px letter marker, using the existing default/correct/wrong/dim contract. The default `regular` density retains the existing practice appearance.

All components use styled-components and the shared theme, native keyboard semantics and visible focus. Interactive examples, narrow content and theme overrides live in `Exercise/Components`. Source copying never imports a lesson or an application route into the public package.

Exercise layouts use the enclosing inline-size container supplied by `SlideDeck`. A standalone host supplies `container-type: inline-size`, as shown by the component stories, so the same narrow-container rules apply without a global stylesheet.

B1.01 also uses `VocabularyGrid columns={4}` (two columns on narrow containers) and `ExercisePanel layout="split"` for a scene beside the question and choices. Existing column and stacked-layout defaults are preserved.

Learner turns in `LearningDialogue` can provide `actionLabel`, `completedIds` and `onComplete`. They use the same bubble and a native, keyboard-operable response action, with a visible completion state. Consumer callbacks own evaluation and progress. Ordinary line translation and audio remain unchanged.

For teacher-led guessing, `VocabularyGrid revealOnHover={false}` keeps an answer concealed while pointing or focusing until the consumer reveals its id. An optional `initialHint` on each item supplies a phrase scaffold such as `playing the g_____`; otherwise the initial-letter hint keeps its existing behavior. `LearningDialogue density="compact"` keeps the speaker accessible while reducing avatar/name chrome for longer conversations.

For a controlled classroom reveal, `activeId` keeps just the current card's tooltip open independently
of pointer hover. Other reviewed word captions stay concealed until `showAll`; initial scaffolds
still follow `showInitial`. `markRevealed` adds a green check and border to activated cards without
adding a question mark to untouched tooltip cards. An optional item `badge` carries consumer-owned
review metadata. All three contracts are opt-in; existing reveals and captions keep their defaults.
See `ReviewedVocabulary` and `Materials/B2.01` for the new twelve-page lesson composition.

`imageFit="contain"` preserves a whole scene inside its existing card. Omit it to retain the previous framing.

## Progressive guidance and reusable monitor

`RevealCard.guidance` is opt-in controlled support with levels `cue`, `hint` and `full`. One button cycles Hint → Answer → Hide beneath the prompt. The consumer supplies the hint, answer, labels and state; `answerMinLines` keeps space for both support states without clipping longer text. Changing the selected record should reset guidance to `cue`. Existing card and click-to-reveal prompt behavior remains unchanged.

`ExercisePanel variant="monitor"` reuses the workstation hardware frame with arbitrary children. `monitorLayout="flow"` is the default; `form` opts into the compact two-column field layout. `workstationMeta.clock` and `.date` share one line in the top bar. Omitting `.appLabel` omits the bottom taskbar and its decorative icon. `variant="workstation"` retains the contextual image and form grid. No simulated save, clock service or operating-system actions are bundled.

See Exercise/Components stories `ProgressiveHint`, `ProgressiveAnswer`, `MonitorContent` and `MonitorForm`; final visual review belongs to the consumer.
