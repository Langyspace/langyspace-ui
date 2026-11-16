# Voice message exercise — same PR

User request: add the phone listening exercise to PR #42 after the common slide layout.

## Source and scope

- Current [Claude A1.01](https://claude.ai/artifact/KX94fLxvBjhqmz8VmHpjgr), `#s9`, viewed on 2026-11-16. Confirmed realistic black device, notch, status bar, home indicator, Kim contact, beige conversation, voice note, speed control and three compact question rows. Current page uses full “Yes, she is.” / “No, she isn’t.” answer labels.
- Browser geometry: device 212.5×425px, 9px frame, 34px corner radius, 32px column gap; exercise width 760px; question rows 8px radius. Interactive hit targets are enlarged where needed for accessibility.
- Current user instruction overrides the prototype's manual transcript disclosure: reveal on the second successful playback start; pause/resume and failed starts do not count.
- The CLI authenticated successfully but could not fetch the private artifact content. No remote design changes or synchronization claims.
- Reuse existing Button and Avatar. The message component has a different public bubble recipe, so the device's source-specific bubbles belong to this cohesive family rather than changing unrelated messaging consumers.

## Contract

- One reusable `VoiceMessageExercise`; content, contact, timestamps and labels are props. Question selections/evaluation remain controlled by the consuming lesson; callbacks carry stable ids.
- Native HTML audio supplies real duration/progress, playback speed, end and failure events. No simulated timer claims to play audio. A `active` flag pauses media when its slide is no longer active without resetting answers/transcript.
- New source/id resets listening state. Unmount pauses media and invalidates outstanding play promises. Retry keeps question state, and buffering does not increment listens.
- Optional reply action is supplied by the consumer. No microphone request, recording, upload or fake sent audio is implemented.
- Storybook uses an explicitly labeled local synthetic voice demo, not a final lesson recording. No paid provider or cloud generation is used.

## Verification and delivery

1. Focused media lifecycle, second-listen, controlled-question, reset, retry, SSR and manifest tests.
2. TypeScript/scoped lint and deliberate public API declaration update.
3. Browser proof with actual file playback, pause/resume, second listen, retry, slide return, keyboard, long copy, desktop/mobile and screenshot capture. Normal/reduced-motion page navigation remains covered by the unchanged common-layout evidence.

This media lifecycle warrants the repository's three-check allowance. CI owns the full library gate. Push once to the existing branch and update the existing draft PR's evidence table. No merge, release or portal deploy is part of this request.
