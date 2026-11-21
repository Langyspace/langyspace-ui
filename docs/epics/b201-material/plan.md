# B2.01 interactive material

Direct rendered impact. Continue UI PR45 and Teacher PR154 feature worktrees, preserving their
unmerged sources. Prepare B2.01 from the verified new private Claude artifact and adopt its frozen
portable artifact in the existing interactive Teacher catalog. No package publication or production
activation. Staging remains the testing target; the previous manual exception was scoped to the
preceding delivery and is not expanded silently.

## Source and product contract

The user confirmed the NEW twelve-page plan with Ana/Kim/Raj and explicitly asked to have Claude
mount it first. The eight-page Bia/Sam/Marta material is excluded. Its frozen source/unused assets
are retained only under ignored .local/b201; no old lesson content or speculative shared API change
will ship. The canonical new Markdown,1031 lines, is snapshotted with hash and source path under
.local/b201/new-plan. Read every affected page before implementation.

A real Claude chat was created and sent the complete Markdown plus native A2.01 and UX Lab artifact
references: https://claude.ai/chat/59f38510-62cb-440f-a7a2-3f0db569217d . Submission and Claude's
response that it is reading all three sources were observed in the browser. The final new artifact was observed in the browser and frozen at version1794927936-f09e,
index SHA25611834f0ca344fef11973b76e56614e4c860bc97383e14a45c68d55ddc54b8f5f. The file/API connector cannot invoke generation,
so the user's explicit request to send it to Claude is carried out through the signed-in native UI.
Old artifacts and privacy remain unchanged.

Preserve all twelve pedagogical pages and their subtelas: Review; seven-picture Vocabulary;
three Warm ups; Expressions with translations/examples; two Pronunciation pairs; twelve-line
Dialogue with a comprehension screen; two Grammar boxes; controlled Your version; native synthetic Raj
WhatsApp listening with four Yes/No statements; five corrections and today's teacher line;
free storytelling with Kim's notes and four independent steps; three Homework cards. Exact copy,
answers, hidden/revealed support and character roles come from the new source, not the old design.
Retain existing approved images where available, generate contextual opaque illustrations for
missing assets and preserve semantic distinctions required in the plan. Second-pass native audio
transcript remains the existing user requirement. Homework destinations are proposed content,
not evidence that Student activities already exist.

## Technical and engineering contract

Reuse SlideDeck/SlidePage, LessonShell/Notes, VocabularyGrid, LearningDialogue, GrammarTable,
VoiceMessageExercise and RolePlayExercise. Keep lesson content/state and browser speech in the
compositions, not in the public library. Add only opt-in semantic UI contracts needed by these
approved interactions; defaults and previous lessons must preserve their appearance/behavior.
Use tagged styled-components and existing theme tokens. No inline or imported authored CSS, global
stylesheet dependency, microphone request or external messages. Contextual opaque images and native
demo speech retain prompts, hashes and provenance. Source blob URLs cannot be used as shipped
assets. Preserve existing approved assets and the neutral Student destination contract.

Add B2.01 course/sequence1/levelB2 to the producer catalog and lazy material view. Consumer verifies
the clean source commit, manifest and every generated file, preserving all four existing materials
and the shared extra outside the courses. Extend count/filter smoke assertions rather than hiding
B2 behind a missing-student prerequisite.

## QA and delivery

At most three focused local check groups: component/lesson/type/API coverage; paired source/current
page/state screenshots and interaction journeys at1280×800,1280×620 and390×844; consumer
integration/build and any authorized actual staging rehearsal. Test two-tap naming, delayed hint,
translation/speech, every gap including incorrect/hidden/direct confirmation, grammar, full native
first listen and second transcript, independent phase checklists, editable corrections, notes,
page departure and return, keyboard/scroll, missing media/retry and homework clipboard. Audit image
meaning, readability, overflow and assets. CI owns broad suites. Visual PR bodies retain only
immutable Antes/Depois comparisons; human visual approval remains pending.

PM review: source fidelity and useful spoken tasks, no invented content or numbered extra. Tech
Lead review: one canonical portable producer, opt-in reusable interactions, no unrelated portal UI
upgrade. Engineering review: native media and user-activated actions, fixed material keys and origin
binding. QA review: all source states, short/mobile viewports, old lesson defaults and runtime
integrity. One small dependency-ordered task at a time.

## Tasks

- [x] Inspect source/contracts and record user selection of the NEW plan.
- [x] Observe and freeze the new Claude artifact, verify all twelve pages, then review the implementation map.
- [x] Generate and inspect contextual assets; record audio/image provenance.
- [x] Implement shared contracts and canonical B2.01 composition/stories.
- [x] Focused checks and immutable paired browser evidence; prepare UI feature revision.
- [ ] Build the frozen portable artifact; integrate/verify Teacher catalog and feature PR evidence.
- [ ] Complete the agreed staging handoff and record actual status; retain human review pending.
