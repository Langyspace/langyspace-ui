# A1.02 contact flow — feedback36

User requested corrections to spelling/pronunciation, fragmented titles and contact-entry contrast, plus a coherent set of phone activities. Scope: A102 and reusable UI owners; staging only. User owns final visual, audio and navigation testing.

## Flow

1. Existing s7 spelling recognition: L-I-M-A from the valid isolated English letter clips; s8 D.4 S-O-U-Z-A also shares those sources. D.2 keeps the English prefix, with only the surname synthesized in Portuguese (Brazilian intent), same Ana voice. Provider/derivation manifests identify models, languages and source requests accurately.
2. s14 incoming Kim call moves before s13. Classic recorded ringtone waits for answer and stops on answer, hangup, slide departure/background or unmount. Native autoplay refusal has a compact trusted-click retry. Phone transport uses compact AudioSequenceControls beside the caption. Two fixed affirmative/correction chips stay beside Ana’s contact card.
3. s13 Spell your name: learner registers for an English class. New reception illustration on the left; native workstation/form on the right; teacher types what the learner spells. Three empty fields, no backend or simulated save. Native FieldRoot resolves the active theme, matching TextInput contrast.
4. s15 Now you call: outgoing phone to Emma; learner asks four live prompts. No extra role chips, contact-answer card or swap-back instructions.
5. s16 Leave a message: independent 30-second spoken contact message with the canonical timer, replacing repeated questions.

17 pages / 50 minutes remain; page IDs retained and incoming/contact order swapped. All26 alphabet clips and other valid recordings stay unchanged. Existing original sources are historical; only three speech bindings, one ringtone and one new context image are adopted.

## UI Library ownership

- SlideTitle renders the entire title in one text span beside the action; no last-word split or independent baseline.
- FieldRoot labels/hints/errors resolve theme colors.
- ExercisePanel workstation variant owns the contextual image and native monitor frame.
- CallSimulation adds incoming direction/active ringtone and an in-phone transport slot.
- AudioSequenceControls adds compact replay/next transport; previous is optional. Existing defaults remain compatible.

## Progress

- [x] Inspect current components, theme, neighboring lessons and frozen media.
- [x] Implement shared owners and A102 sequence/content.
- [x] Reuse/regenerate only the requested media and preserve actual provenance.
- [x] Add representative real-data stories/docs; necessary package build completed with exit0. API/export are recorded by the release receipt.
- [ ] One source push, one Teacher build and Hosting staging ACK.

No tests, QA, browser, playback, render or screenshot sessions. Draft human review remains pending; no production, Claude/Lab remote, backend, npm or merge.
