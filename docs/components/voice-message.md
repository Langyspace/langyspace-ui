# Voice message

## VoiceMessageExercise

`attachment={{ src, alt, timestamp? }}` adds a real shared photo between the
greeting and voice note. The image keeps its natural ratio and has native alt text;
it does not reveal the transcript or change listen counting. A listening task
about a photo must supply that photo rather than referring to absent content.

An evaluated choice can provide `feedbackOutcome: 'correct' | 'wrong'` for the
shared short answer sound on its click. The existing `feedback` field still owns
the displayed result after evaluation. Omit the outcome for ungraded choices;
recorded speech and listening counts are independent of the answer-sound toggle.

A reusable phone listening exercise with device frame, notch/status bar, contact, incoming text and voice note, native playback controls, transcript and question choices. The source is the [current Claude A1.01 listening page](https://claude.ai/artifact/KX94fLxvBjhqmz8VmHpjgr), inspected in the browser on 2026-11-16; measurements and source limitations are recorded in the epic plan.

```tsx
<SlidePage
  width="standard"
  title="Listening Practice"
  instruction="Ouça o áudio da Kim e responda."
>
  <VoiceMessageExercise
    contact={contact}
    greeting={greeting}
    audio={voiceNote}
    questions={controlledQuestions}
    onAnswer={(questionId, choiceId) => evaluateAnswer(questionId, choiceId)}
    active={currentPageId === 'listening'}
  />
</SlidePage>
```

The teacher and student applications supply contacts, learner names, media URLs, transcript, questions, selected values and evaluation feedback. This component does not fetch lessons, grade answers, persist learner activity, request microphone permission or upload recordings. Optional `footer` and `replyAction` accept lesson-owned instructions/actions; omit the reply action until the product actually supports it. The decorative Message bar is then hidden from assistive technology.

`audio.id` and `audio.src` identify the current voice note. Changing either starts a fresh listening state and pauses the old media. Pausing, buffering and resuming continue the same listen. A second pass starts only after the first ends, and only a native `playing` event increments listens. By default the transcript appears at the start of the third successful pass. Failed starts do not count. Playback has no autoplay.

The file's native metadata and time updates drive duration/progress. Speed alternates between 1x and 0.75x as in A1.01. A retryable media failure keeps questions and answers intact and restores focus to the play control. Play and answer controls use the reference's compact 32px height; the speed control has a 24px target. All retain native keyboard activation and visible focus. Localized labels, semantic named question groups, selected states and explicit correct/incorrect labels support assistive technology.

Each third-listen recording also has one subtle, full-width clickable text area inside its voice bubble: gray `labels.transcript` ("Transcript" in lessons), with no filled surface, border or icon. Its visible label stays the same when showing or hiding the text. It is available before playback; localized `labels.showTranscript` / `labels.hideTranscript` provide its accessible action name, alongside `aria-pressed`, `aria-expanded` and the controlled transcript ID. It retains keyboard activation, visible focus and a comfortable click target. It never starts speech or changes the listen count. The shared hint sound acknowledges manual clicks and defers to active speech. Hidden transcript text is absent from the DOM; the listening explanation remains available to assistive technology. Inactive slides disable the control and retain its choice on return.

Automatic third-listen reveal remains scheduled even after an early manual Show/Hide. After that automatic reveal, Hide remains in effect across later plays until Show is chosen. `transcriptToggle={false}` opts into automatic-only behavior for third-listen. Explicit `second-listen` and `manual-after-replay` variants retain their existing timing; `transcriptToggle` can explicitly allow early access in those variants. The legacy manual-after-replay toggle remains available after replay.

Materials share English transcript action labels through `stories/materials/shared/voiceMessageLabels.ts`; the library retains its Portuguese defaults. Each recording gets ordinal accessible action names in a multi-message conversation.

Set `active` from the deck's page-change state to pause a departing page; returning retains transcript/listen state. Unmount pauses media and invalidates pending play requests. Product pages own this orchestration, file availability and recording authorization.

Layout is two columns above the container breakpoint and stacks naturally in narrow containers. Long transcript content scrolls inside the physical phone frame; questions and long names wrap. `createTheme({ voiceMessage: ... })` changes the recipe without private selectors or a global stylesheet.

Storybook supplies an explicitly labeled locally generated voice demonstration, not a final lesson recording. Missing recordings render a disabled play control with an availability explanation rather than fake audio. Do not pass an unrelated file while displaying a different transcript.

Current consumer status: new shared-library API; teacher/student adoption follows the reviewed official package release. The components remain reusable across both products.

Each question can receive optional `feedback` content, supplied by the consumer after an answer. It is announced as a status and appears below its choices. This allows a correction or inference explanation without putting answer evaluation into the phone component. B1.01 supplies four Yes/No statements and uses the shared third-listen transcript behavior.

`voiceMessage.phoneWidth`, `phoneHeight` and `contentWidth` honor the theme recipe. Use `createTheme` to supply overrides while retaining the remaining device tokens.

An optional `replayActionLabel` adds a follow-up replay control beside the questions. It stays
disabled until the first native pass ends and disappears on the second native playing pass, when
the existing transcript unlocks. Pausing or buffering does not enable it. The consumer decides when
the prompt is appropriate, such as after all four listening statements have been answered.

Native playback pauses when the document becomes hidden. Returning does not autoplay or count a new listening pass.

## Identity on a device surface

The contact header owns its foreground through the voiceMessage recipe. Its canonical named Avatar uses `textTone="inherit"` for name and status so an external dark lesson does not turn the contact name white on a light phone header. Other Avatar consumers retain the existing theme-based default. B1.01 keeps the native phone player and automatic third-listen transcript, uses a responsive larger presentation layout, and removes the unrelated footer task.

## Multiple recordings in one conversation

Keep the existing `audio` as the first message and pass optional `additionalAudios` for following recordings with unique content IDs. One phone/header/greeting/composer surrounds every recording bubble. Each uses the canonical recording owner with independent pause/resume, speed, errors and listening/transcript history; ordinal accessible names distinguish its controls and transcript region. The primary root data attributes remain compatible; each bubble also exposes its own audio ID and state. Changing the primary audio identity/source starts a fresh exercise, preserving the existing reset contract. Changing an additional recording resets only that bubble; the primary and other additional clips retain their history.

Native play pauses the other recording elements inside this phone, and native pause invalidates pending playback attempts so a cancelled request cannot surface as a spurious unavailable-audio error. Leaving the slide pauses every recording. Automatic third-listen reveal and manual visibility apply independently; additional recordings in manual replay mode expose the transcript toggle after their second pass. The original primary follow-up replay action remains unchanged.

TrialA1 combines the approved Ana clips and six grouped questions on one standard-width (47.5rem) page. Its phone dimensions are a consumer theme variation, preserving every other lesson’s sizing. Both default single-message and multiple-message behavior require focused regression coverage. No audio is synthesized by this component.

`layout="balanced"` opts into two equal centred tracks for the phone and comprehension. The default `fluid` layout retains its existing phone-sized first track. Hidden exercises use `preload="none"`; active exercises preload their native recording without resetting its source or listening history.
