# Voice message delivery in PR #42

This delivery adds the phone exercise to the same branch as the common slide layout. Teacher/student adoption, package publication, recording/upload services and production deployments remain separate.

## Implemented

- `VoiceMessageExercise` owns the realistic phone frame, notch/status bar, contact portrait, incoming bubbles, native audio controls, waveform, transcript and controlled question choices.
- The source is the current Claude A1.01 `#s9`, inspected in the browser. Phone width/height, border/radius, colors and the 760px content column come from that rendered reference. Following product-owner feedback, play and answer controls now use the reference's compact 32px height, replacing the previous 48px controls.
- `SlidePage width="standard"` adds the observed 760px content column, aligning the listening heading with the phone/questions. Existing focused/wide defaults retain their appearance.
- Native audio events drive duration/progress, pause/resume and 1x/0.75x speed. The transcript appears on the second successful playback pass after the first ends; failed starts, buffering and pause/resume never count as extra listens.
- Controlled question props retain product ownership of selection, evaluation, persistence and learner identity. New audio id/source resets the listening state; leaving a slide pauses media, and returning retains listens. Unmount and inactive transitions invalidate obsolete play promises.
- The optional reply action delegates to a real product callback. No microphone permission, recorder, upload or fake sent voice note is implemented.
- Story audio is a clearly labeled local macOS Samantha demonstration; the fixture provenance is beside the assets. The final production recording remains a consumer asset.

## Verification

- Twelve focused native-media lifecycle/unit/SSR cases were exercised. The one disabled-question regression was fixed and reran successfully; six component-manifest tests passed. Unchanged successful tests were not repeatedly run.
- Native Chromium checks passed for actual file playback, pause/resume, second-pass transcript, speed, controlled answers, inactive-page pause/return and retry after a real missing-file response.
- Captures cover desktop/mobile idle, playing, paused, first-pass completion, transcript, selection, failure/retry, missing audio, inactive, dark theme, long copy, narrow container and keyboard focus. See `.github/evidence/voice-message/results.json` and the capture script.
- Storybook initially identified a missing keyboard focus target in the phone conversation; it is now a named focusable region. That failed accessibility case passed after the fix. The synthetic-click media story passed after allowing fixture autoplay only in Vitest's isolated Chromium process. The separate browser capture keeps normal browser policy and uses real trusted clicks. No test was skipped to hide a failure and no product browser policy changed.
- TypeScript, scoped ESLint and deliberate API declaration/snapshot validation passed. Full unrelated gates remain CI's responsibility. No package version was bumped.
- Current private artifact content still could not be downloaded through the file transport. Its rendered page was read in the browser; full file synchronization is not claimed.

Visual gate review: pending human.

## Visual correction after screenshot feedback — 2026-11-16

- Baseline: `70804da2bf9faec81bc0655763e3b843588a38d4` in the same draft PR #42. The 48px play and speed buttons squeezed the waveform to 33.5px, and a visible locked-transcript explanation expanded the voice bubble to 141px.
- Re-read the rendered Claude source: play 32×32px, glyph 14px, waveform approximately 70×28px, incoming bubble approximately 157px wide and compact question choices. The correction uses a 32px play, compact 24px speed target, approximately 68px waveform, 12px message copy, 10px timestamps and matching bubble spacing. The speed target is slightly taller than the reference's approximately 19px control to retain a 24px target without crowding the audio row.
- The transcript explanation remains available through the play control's accessible description; the transcript occupies visible space only from the second successful playback. Phone shadow and question-choice heights also follow the rendered reference. Public component props, media lifecycle, grading ownership and slide navigation are unchanged.
- Focused verification: the capture driver checks actual rendered control/glyph/waveform dimensions, compact locked-transcript layout, keyboard focus and Enter activation at 1280px and 390px, alongside native playback, replay, speed, error/retry, slide departure, themes, long content and a 280px container. Before/after PR images use matching files from the baseline and corrected commits.
- Theme additions are confined to the voice-message recipe. Generated declaration changes are additive recipe tokens and a private styled-component transient prop; root exports and public component props are unchanged. No version bump or publication is part of this correction.
- Results: all 30 browser captures and geometry/media checks passed; the 10 non-playback Storybook variants passed accessibility checks. The native playback story initially exceeded its default one-second seek-completion wait; after giving native playing/ended assertions the existing 10-second media allowance, the failed story alone passed. Scoped ESLint, TypeScript and reviewed API snapshot checks passed. No successful unrelated suite was repeated.
