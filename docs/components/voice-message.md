# Voice message

## VoiceMessageExercise

`attachment={{ src, alt, timestamp? }}` adds a real shared photo between the
greeting and voice note. The image keeps its natural ratio and has native alt text;
it does not reveal the transcript or change listen counting. A listening task
about a photo must supply that photo rather than referring to absent content.

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

`audio.id` and `audio.src` identify the current voice note. Changing either starts a fresh listening state and pauses the old media. Pausing, buffering and resuming continue the same listen. A second pass starts only after the first ends, and only a native `playing` event increments listens. The transcript appears at the start of that second successful pass and stays available. Failed starts do not unlock it. Playback has no autoplay.

The file's native metadata and time updates drive duration/progress. Speed alternates between 1x and 0.75x as in A1.01. A retryable media failure keeps questions and answers intact and restores focus to the play control. Play and answer controls use the reference's compact 32px height; the speed control has a 24px target. All retain native keyboard activation and visible focus. Localized labels, semantic named question groups, selected states and explicit correct/incorrect labels support assistive technology.

The locked-transcript explanation is available to assistive technology through the play control's description, without enlarging the voice bubble. The transcript enters the visible layout on the second successful playback pass.

Set `active` from the deck's page-change state to pause a departing page; returning retains transcript/listen state. Unmount pauses media and invalidates pending play requests. Product pages own this orchestration, file availability and recording authorization.

Layout is two columns above the container breakpoint and stacks naturally in narrow containers. Long transcript content scrolls inside the physical phone frame; questions and long names wrap. `createTheme({ voiceMessage: ... })` changes the recipe without private selectors or a global stylesheet.

Storybook supplies an explicitly labeled locally generated voice demonstration, not a final lesson recording. Missing recordings render a disabled play control with an availability explanation rather than fake audio. Do not pass an unrelated file while displaying a different transcript.

Current consumer status: new shared-library API; teacher/student adoption follows the reviewed official package release. The components remain reusable across both products.

Each question can receive optional `feedback` content, supplied by the consumer after an answer. It is announced as a status and appears below its choices. This allows a correction or inference explanation without putting answer evaluation into the phone component. B1.01 supplies four Yes/No statements and retains the second-listen transcript rule.

`voiceMessage.phoneWidth`, `phoneHeight` and `contentWidth` honor the theme recipe. Use `createTheme` to supply overrides while retaining the remaining device tokens.

An optional `replayActionLabel` adds a follow-up replay control beside the questions. It stays
disabled until the first native pass ends and disappears on the second native playing pass, when
the existing transcript unlocks. Pausing or buffering does not enable it. The consumer decides when
the prompt is appropriate, such as after all four listening statements have been answered.

Native playback pauses when the document becomes hidden. Returning does not autoplay or count a new listening pass.
