# Homework flashcards — minimum twenty targets

The 29 assigned sets below20 have been expanded locally without replacing their original valid cards. Together they now contain601 cards,405 more than before. A1.02 contains10 digits plus26 active, corrected English letter recordings (36 cards); Frontend has25 work/UI terms. The other27 changed sets have20. The existing Countries48, Influencer24 and separate Dev20 sets are retained.

The same final card order, English/Portuguese content and image regions are present in the material previews and in Student's prepared school-activity package. Actual activity IDs and destination links are retained. The Student package is the publication payload; the UI's prepared data bundles the exact matching media so the teacher preview does not depend on expiring URLs. This is preparation, not a cloud publication receipt.

## Curation

- Original valid cards remain first and unchanged; preserve their IDs/media/progress keys
- Reuse complete pertinent cards or actual recorded vocabulary from the existing lessons, not unrelated words to reach a number
- A2.08 adds experience/reaction/follow-up language; B1.11 describes people, clothing and actions at a generic party rather than inventing a wedding
- C1 expansion uses relevant discourse, evidence and negotiation vocabulary with its original complete recordings
- New family, health, weather, neighbourhood and related examples are anonymous learning examples, not permanent biographies of the named lesson characters
- Alphabet cards reuse active A.A40 and A.M38 bytes with explicit hash guards, together with the other24 current letter recordings; no older invalid variants were selected

## Audio and media

The frozen request produced160 real ElevenLabs recordings (80 label/example pairs).142 bindings are selected. The18 recordings for the nine wedding terms became unused after the curation correction and remain preserved in the immutable generation output and frozen request. They are not bound to active cards. New recordings retain Ana/Jessica and the Student's approved English configuration. Existing reused voices and clips remain unchanged.

Raw thematic cards and recorded course vocabulary sometimes use one complete English recording on both sides. The preview explicitly mirrors the Student's native front-audio fallback; it does not leave an enabled back-side audio button without a target. Word-only alphabet and legacy vocabulary clips remain word-only, with no false claim that an unrecorded example is narrated.

Existing media was reused by its exact bytes;41 selected cloud objects were read with size/MD5/generation checks, without writes. `media.additions124.json` contains589 immutable media paths to reconcile when the parent publishes. Those include new recordings and reused objects whose paths were not previously listed in the course package. Native Student activity/media publication has **not** been performed.

## Validation

- Authorship/media alignment covered all29 changed decks:601 matching cards, same order/fields/image regions, audio and image hashes, >=20 distinct targets
- Two focused policy tests passed: every maintained flashcard assignment has >=20 distinct targets, and the original valid cards remain byte-for-byte equivalent as parsed data
- No browser/playback/ASR, broad test suite, build, commit, push, merge or Hosting deploy was performed by this front

Exact worktrees, bases, file list, counts and remaining publication work are in `handoff.json`. Student began clean at480aca1f and is now on `feat/flashcards124`; only `content/course-practice/activities85.json` and `media85.json` were changed there.

The unassigned legacy activity `course-practice-a1-01-flashcards` still contains6 cards. It is not the assigned A1.01 homework, which uses Countries48. Its status was preserved for the parent to decide, rather than silently removing a library activity.

Visual gate review: pending human
