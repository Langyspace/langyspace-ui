# Hint feedback sound

Hint controls use a single shared Web Audio earcon: a quiet, 150 ms sine note (587.33 Hz, with a second harmonic at 10%). Its gain is 38% of the existing answer-sound bus, approximately 8.4 dB below an equivalent answer note. It acknowledges opening help without suggesting a right or wrong answer. These values are product sound choices, not a claim of improved learning or a clinically optimal frequency.

The header's existing sound toggle mutes hints and answer sounds together. Repeated clicks replace the current earcon; nothing queues. Disabling sound, hiding the document or a new native recording starting stops an active hint. Hints remain visually usable when sound is muted, unavailable or suppressed during recorded speech. The recording is never paused or attenuated by a hint.

## Canonical owners

- `VocabularyControls` opts its bulb into `IconButton feedbackSound="hint"`. Its separate eye/model action stays silent. This covers vocabulary, exploratory scenes, QuestionList, LearningDialogue, ComicRolePlay and their material adapters, including progressive help.
- `RevealCard` inline guidance plays only for the transition from cue to hint; showing the full answer and hiding remain silent.
- `AudioSequenceControls.supportAction.feedbackSound="hint"` opts contextual meeting help into the same channel. DevGuidedCall uses this contract.

No label matching, document-wide click delegation or lesson-specific audio handlers are used. Future bulb controls should reuse VocabularyControls or explicitly opt into IconButton; an accessible name containing “hint” alone does not produce sound.

Prepared recordings register through `playPreparedAudio`; WhatsApp audio registers through `useVoiceMessageAudio`. Registration observes native media events, including audio elements outside the DOM, without changing the recording's event properties, retry behavior or playback. Embedded cross-origin video is outside this native-media observer.

Focused unit coverage exercises canonical clicks, mute/cancellation, disabled/loading controls, rapid replacement, detached media priority and preservation of the existing answer design. Browser listening and final volume preference remain perceptual review; unit tests do not establish pleasantness on every device.
