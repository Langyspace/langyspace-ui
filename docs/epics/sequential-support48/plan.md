# Sequential support and unified bubbles48

Direct rendered impact. Scope: TrialA1 introduction controls and the common LearningDialogue bubble skin used by all materials. User prefers the newer bubble and requests one appearance shared with guided conversation. UI base9ebf0457 / Teacher based63ed215. Identities, media, lesson order and other tasks preserved.

1. Canonical bubble skin adopts the newer neutral surface, border appearance and regular padding. Compact density remains for dense dialogues. presentation=paired controls exchange spacing only; it no longer owns a second skin. Use an inset border to preserve compact layout geometry.
2. Add controlled sequential guidance: hintedLineIds, revealedLineIds and next-item callbacks. One centered bulb/eye row above the dialogue advances the next supported line in source order. Models take precedence over hints; hints skip already modeled lines. Final click hides the respective support layer, preserving the other layer. Bulb is unavailable when every line already shows a model. Dynamic accessible labels expose next position/action.
3. Reuse VocabularyControls with progressive command semantics and optional disabled hint. Preserve standard level/inline guidance for compatibility, but TrialA1 and principal paired examples use one shared row.
4. Source fixtures/docs, package/API/export, guarded Teacher adoption/build and Hosting staging. No tests/browser/screenshots/playback/broad QA per current delivery policy; user owns runtime/visual review. No media generation, merge, production or backend work.

Acceptance: exactly one bulb/eye in the greeting, incremental retained revelations, reset after completion, same bubble paint on guided and introductory conversations.14 lessons/covers,210 page IDs and13 bridge/Notes/gesture/sound source blobs preserved. No claim of universal fit at every content length.
