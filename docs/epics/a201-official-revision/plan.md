# A2.01 official revision

Port the published official A2.01 (version `1795045837-60e6`, HTML SHA256 `3afd630eea41e4c8b0b17ae9d3eefd8e823385b8eef55e8feda0b7c68a7dc0c9`) into the existing React material `a2-01`. Thirteen continuous vertical sections form a planned 50-minute oral lesson. Remove the previous Goal, extra warm ups, synthetic audio, pagination, timer and duplicate written summary. Preserve Notes, readable tall content, and the actual Kim recording.

The official legacy HTML remains the editorial source. `A201.official.json` preserves its final lesson plan; `A201.content.json` projects only its visible content and section metadata. The historical native copy is read-only. No new media or pedagogy is commissioned.

1. Read existing component contracts and freeze approved media. Complete.
2. Compose the 13 sections with shared controls. Complete.
3. Verify local interactions and actual React rendering at desktop, mobile and low height. Complete.
4. Freeze files and deliver to Integration. Complete; staging and UX Lab receipts belong to Integration.

To refresh visible content from the single canonical lesson plan, run `node docs/epics/a201-official-revision/sync-official.mjs <canonical lesson-data.json>`. This regenerates the visible JSON and reference snapshot together; do not maintain a second editorial plan by hand.

Reused contracts: SlideDeck, SlidePage, LessonShell/Notes, VocabularyGrid, GrammarTable, LearningDialogue, GapFillExercise, RolePlayExercise, ConnectionSignal, Avatar and Button. The lesson-specific listening panel composes the existing `useVoiceMessageAudio` hook; it allows a manual transcript after the first completed listen and removes ornamental chat/composer content. All styling uses scoped styled-components and existing theme tokens. No public API changes.

Acceptance: all 13 section IDs; opening title and three questions only; four 4:3 scenes with complete reveal chunks; visible affirmative/negative/question explanations; complete eight-line dialogues; six progressive gaps with retry; factual answer reveal and open personal questions; only the exact original Kim audio; real pause/resume/speed/replay/error/leave behavior; optional support/cues; two oral homework tasks; Notes persistence/focus; native continuous scroll, Home/End, tall-page reading; no horizontal clipping or missing assets at the three widths.

Scope is private A201 source, tests, documents and evidence. Other agents own TrialA1/B1/B2. Integration owns catalog, shared cross-material tests, UX Lab mirrors, coherent commit/build/adoption and real staging release. No author commit, bundle build, deployment, production release or auto-merge.

Validation budget: one focused A201 unit test file and one browser verification script. Fixes rerun only the failing check. Integration owns repository-wide checks after the four-author freeze. Real staging remains pending its receipt; local rendering does not prove staging publication.
