# Progress

18 November 2026. All17 original Frontend screens are composed using shared SlideDeck/SlidePage,
VocabularyGrid, ExercisePanel/QuizOption, MinimalPairExercise, LearningDialogue, GrammarTable,
VoiceMessageExercise, InterviewSimulation and RolePlayExercise. No legacy HTML injection or new
public lesson component. Current original source1795037606-0c26, SHA256
8ab03020a5c8f4673a71dee90771f21289e124f48efa1b5c966942c1732bc9d4.

All49 exact ElevenLabs MP3 text/speaker/hash identities and14 existing source images were adopted.
The new Kim A201 clip is separately bound to its exact text and15.18585s duration. No TTS or image
was regenerated. The existing synthetic speech behavior of the four Sofia lessons is preserved and
is not represented as recorded audio.

68 source/current default pairs at1280x900,1280x620,390x844,320x800 passed inventory, image and
horizontal overflow checks. Source/current primary interaction states at desktop/mobile verify
wrong/correct choices, hidden options, pre-listen pronunciation, translation, four grammar reveals,
role swap/completion, native Leo0.75x/replay/manual transcript, departure pause, Jun native audio,
independent notes/checklist, selected clipboard failure fallback, Notes/cursor/focus and End/Home.
A full natural25s Leo pass was retained across geometry-only fixes. Accelerated media boundary
steps are distinguished from natural playback. Original interface drawings were reused, not redrawn.

Independent UIUX review found and integration corrected a real double-play/pause in Vocabulary,
YourVersion hiding initially visible turns, oversized profile blocks, a forced hero line break and
mismatched page/phone widths. Root loading/cancel/error/retry feedback is visible across all clips.
The optional manual transcript contract preserves default second-listen behavior. Its15 focused
unit tests passed; public API diff is one declaration with optional props/labels only.

Student contract was inspected read-only. Supported destinations are /licoes?tab=flashcards,
/licoes?tab=quiz and /licoes?tab=shadowing. Source homework data is retained, while copied links use
these supported tabs and the validated consumer origin. No Frontend deck, quiz or shadowing records
were provisioned; that work remains outside this adoption. No unsupported item query or invented
deck ID is emitted. No backend, target-branch merge, package release or deploy is included.

Remaining: final source checks/read-only review, scoped commit, clean neutral artifact and Teacher
adoption/evidence/PR handoff. Visual judgment remains with the product owner.


Independent UIUX read-only review is complete (uiux-review.json): no functional blocker remains.
Two visual advisories remain for the owner: the pronunciation Listen control spans the available
width, and two homework cards omit the reference illustrations. They are explicit differences,
not a claim of pixel identity. The current shared component pattern is retained in this delivery.
Source is frozen; additional optional visual refinements belong in a follow-up after review.


The two final source fidelity deltas were resolved before the producer freeze: Pronunciation
composes the existing compact Button and speaker icon, retaining MinimalPairExercise/score behavior.
Homework now reuses x_bulb and x_speech WebPs extracted byte-for-byte from final source8ab03020,
with provenance hashes. The private shared Homework helper accepts an optional images array; its
single-image/default/copy/fallback behavior is unchanged. Only s51/s52/s12 pairs are refreshed.


Final independent alignment readback (uiux-final-delta-01/alignment-after.json) confirms the117.86px
Listen pill plus icon centered at639.992px in1280 and194.992px in390, for both pairs. Homework
illustrations were independently confirmed resolved. The native clip/interaction proofs are reused;
only8 pronunciation default pairs and2 affected answer-state views were updated. The neutral build
URL transform was also considered: tab parsing uses URLSearchParams and accepts relative homework
paths after origin stripping. Generated Teacher runtime must verify the resulting bundle before push.
