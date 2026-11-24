# A2.01 and A1 trial lesson

Direct rendered impact. Prepare both requested lessons for visual review in the shared catalog, based on approved 4.4.0/main `83b70fb78c8dbdbe1e649102050076c344bb4a54`. Package publication and adoption in the portals remain separate. One feature branch, no automatic merge.

## Sources and fidelity

- A2.01: https://claude.ai/code/artifact/1e9bba01-d234-4ac8-ad04-113e051f2e9f, live `1794863252-efa3`, dated 2026-11-16T21:07:32Z.
- A1 trial: https://claude.ai/code/artifact/b49c56f7-830d-41db-9de3-c8d24d4bb694, live `1794853762-3f89`, dated 2026-11-16T18:29:22Z.

Authenticated artifact inventory and versions verified. Content downloads fail; latest remote bytes and remote rendered canvas are unverified. No remote writes authorized or made. Use complete local authoring exports in `Planejamento Langy/codigo/` and freeze originals under ignored `.local/a201-exp-a1/reference`:

| Export                                | SHA256                                                           |
| ------------------------------------- | ---------------------------------------------------------------- |
| a2-01/saida/langy-a2-01.html          | 580822b951f79342bd285494e3a5e4f4202b04257742c5a1dc443fec6770fc71 |
| experimentais/saida/langy-exp-a1.html | 0b65e7c678ba2464cf2e9b830c52a57ecba6229aef5e039af3f028d0a0e10008 |

Full source hashes in the retained reference manifest. Preserve copy, order, headers, instructions, roles, support and source interactions. Replace provisional emoji illustrations with contextual opaque images, preserving semantic clues. Existing approved images remain unchanged. Native listening audio reveals transcription on the second play, following the user's established requirement; do not simulate recording/sending a voice message. No lessons, answers, teacher notes or browser speech orchestration exported as library business behavior.

## Requirements

A2.01: 12 pedagogical pages, 17 screens `s1,s2,s31,s32,s33,s4,s51,s52,s6,s62,s61,s7,s8,s9,s10,s11,s12`. Split cover/review; two six-item vocabulary sets with initial/reveal tools; three contextual warm-ups with corrective feedback and hidden options; two pronunciation pairs with last-eight score; two four-line dialogue screens with signal indicators; three comprehension reveals; hidden grammar with progressive explanation; controlled learner turns with independent role-swap progress; real native Kim audio, four Yes/No answers and spoken response; five corrections plus teacher's sixth; video-call simulation with elapsed timer, poor/good signal, hang-up/restart, 12-image place/action board, editable now/usually summary, four independent checklist steps; three exact homework links and honest clipboard fallback.

A1 trial: 6 pedagogical pages, 8 screens `s1,s2,s3,s41,s42,s43,s5,s6`. Compact stacked introduction and three translation-toggle greeting cards; generated park scene with six labeled audio hotspots and side support; five-line dialogue plus three learner questions; three ungraded preference comparisons with deselection and speech; six conversation questions plus three Go further prompts with retained checkmarks; six audio summary phrases. No answer grading on personal preferences.

Both: shared native SlideDeck scrolling, Back/PageDown, retained in-session state, free Notes with Escape/focus restoration, speech cancellation on page departure, responsive readable layouts. Extend existing SceneExplorer/CallSimulation/RolePlayExercise and ChoiceCard with opt-in presentation contracts; reuse the existing 70rem slide allocation through width="expanded"; preserve existing default rendering. Share consumer-level lesson styling and utilities without coupling lesson content. Reuse VocabularyGrid, ExercisePanel, LearningDialogue, MinimalPairExercise, GrammarTable, RevealCard, RolePlayExercise, VoiceMessageExercise, Button, ChoiceCard and form inputs.

## Dependency-ordered delivery

- [x] Freeze and inspect source, current public contracts and existing lesson compositions; review this plan against all source screens.
- [x] Generate/inspect assets and record prompts, hashes and provenance.
- [x] Implement opt-in shared contracts and compose A2.01.
- [x] Compose A1 trial using the same contracts and consumer utilities.
- [x] Scoped check group 1: contracts/types/API/static policy; group 2: affected story interactions; group 3: browser journeys and paired source/current captures at 1280×800, 1280×620 and 390×844, including defaults regression for B1.01 and existing affected components.
- [x] Review diff and prepare coherent delivery for a single feature-branch push and evidence-only visual PR. Leave human gate pending. CI owns full validation; do not watch/poll after push.

## Acceptance and risks

Every source screen and affected shared story has comparable evidence; all meaningful interactive states have journeys. No horizontal overflow or page errors; images decode, speech fallback is honest, native audio can retry/pause/speed/change pages and second play reveals transcription. Notes/summary clear restores focus; failed clipboard offers selectable links. Call timer runs only while active and connected, resumes correctly after page changes and resets on restart. No camera, microphone, network calling or student-data writes. Generated scenes are fixtures, not runtime generation. Main stays untouched while human review is pending. Bundle/API budgets remain enforced; document any intentional feature allocation before proposing it, never weaken checks to conceal regressions.

## Compatibility review and proposed feature allocation

Review of the generated declarations against official 4.4.0 confirms optional additive props only on CallSimulation, RolePlayExercise, SceneExplorer, ChoiceCard and SlidePage. No root or form exports and no declaration files were removed. Three private ConnectionSignal declarations are added. Root exports remain 167 values / 267 types. This is a minor-compatible candidate for a future 4.5.0 release, subject to human review; no version tag or release is initiated here.

The official 4.4.0 root was 288,904 raw / 70,650 gzip bytes. The candidate is 294,982 raw / 72,094 gzip: +1,444 gzip bytes (2.04%) for video-call/signal controls, labeled scene targets, guided checklist presentation, lesson preference cards and expanded pages. Propose a root gzip allocation of 72,500 bytes for these explicit shared features, leaving 406 bytes. The existing raw root budget and every consumer-entry, coverage and architecture limit stay enforced. This proposed feature allocation is part of the visual PR for review, not a release approval or an audit waiver.

Preserve scene aspect ratio in the notebook viewport; the trial picture can use a narrower centered image than the provisional SVG. Retain native form target sizes and a named Dica button instead of the source's tiny inputs and icon-only control. These are intentional accessibility adjustments, with source/current evidence. The consumer inventory found ChoiceCard in Teacher AvailabilityPeriodSelector, with the existing default variant. No product code is changed.

## Verification and handoff

- All seven local authoring files were rehashed against their frozen references on 17 November; unchanged. Both artifact live-version identifiers were rechecked and unchanged. Authenticated inventory/version metadata works, while content fetch still fails. The Antes column uses the complete frozen authoring exports, not a claimed live remote render.
- 22 generated contextual WebP scenes, all inspected and hash-verified; existing A1/B1 assets untouched. Generated scene prompts, source/output hashes, dimensions and reuse provenance live beside each lesson. Kim’s native MP3 is 17.6561 seconds, with exact transcript/hash/generation method recorded. It is demonstration synthesized speech and can be replaced by the consumer.
- Focused local groups passed: contracts/types/API/style policy/ESLint/build/bundle; affected story interactions and accessibility, with failed cases corrected and retried; actual Chromium journeys and source/current screenshots. Full coverage, package smoke, cross-engine and full layout/Storybook gates belong to CI and are not claimed as local passes.
- Unit evidence includes the new opt-in presentation/SSR/keyboard/consumer state contracts, existing UX Lab/B1/ChoiceCard contracts, and SlideDeck/SlidePage/media tests. The first unit group had 46 passes; the new vocabulary contract and initial deep-link case also pass. The initial 105-story group’s 13 failures were corrected (expected-page wait, initial navigation, trial contrast/list semantics), and each affected retry passed. New regular-scene and final grammar stories passed separately.
- Native audio completed an unmocked first pass, retained pass count on pause/resume, changed to 0.75x and back, revealed transcription on second native playing event, paused on departure, and recovered through retry after a genuine missing-media request. Other speech is deterministically stubbed only for interaction/screenshot capture; browser voice quality is not represented as a human recording.
- Browser journeys cover both pronunciation pairs with ten attempts each and last-eight score, all warm-ups, grammar unlock/support, independent swapped roles, call signal/end/restart/summary/checklist, all greeting/hotspot/preference/conversation states, native Back/PageDown/wheel, Notes retention/Escape/clear/focus, exact homework clipboard text and denial fallback. The call clock’s departure/resume/end/reset is covered with controlled timers. Hotspots remain in bounds and do not overlap at 1280, 390 and 320px.
- `results.json` indexes 159 comparisons and the complete page/state/width matrix and includes geometry/image/page-error assertions. Every default source screen was captured at 1280×800, 1280×620 and 390×844; all default desktop pages fit the viewport. Mobile content remains naturally scrollable. Expanded grammar has a separate end capture. Native transcription has start/end captures at desktop/mobile. Source/current Notes and baseline/current B1 Notes are included.
- Existing default/B1 regression captures: 31 of 32 pairs are pixel-identical; one mobile role-play pair has mean RGB channel difference 0.00442/255 with the same geometry/content. Normal-motion deep link to B1 s11 reproduces baseline stopping at s2, while this branch lands on s11. Initial deep links are now instant; subsequent navigation still respects smooth/reduced-motion behavior.
- Human review owns visual acceptance. No package version/tag, production deployment or portal adoption is part of this delivery. The feature worktree remains available for iteration. Package stays 4.4.0; future minor candidate is 4.5.0 after review.

## Shared trial and staging handoff (17 November follow-up)

User requests the same A1 experimental for A1 and A2 as an extra outside the regular twelve lessons, and integration of interactive materials into Teacher staging. Standalone consumer now exposes that shared header through an optional TrialA1Lesson levelLabel; the original A1 story remains unchanged. A new shared-level story covers desktop/mobile. No public UI component/API or package version changes in this follow-up.

A standalone Vite producer builds the four canonical compositions from these same source files, with lazy lesson imports, local styled-components font declarations and same-origin readiness messages bound to the source SHA. It emits a curated metadata catalog, contextual covers and a manifest binding every generated byte to a clean commit and own-source styling-audit receipt. Teacher can embed this artifact without upgrading its unrelated UI components or copying lesson implementations. The same artifact contract is available for later Student adoption.

`pnpm build:materials` requires a committed source. `--preview` is only a local development output, explicitly marked sourceClean=false and rejected by consumer builds. The portable artifact strips only the known student destination origin during bundling and receives the validated studentPortalOrigin from its consumer. Paths/queries and reference defaults stay unchanged. The same immutable neutral artifact works in staging and production, with the product configuration binding links to its own environment. Teacher verifies neutral source/asset provenance before build, and its staging build still forbids production references. This avoids preventing a future normal staging-to-production promotion.

Teacher owns catalog filtering/category semantics, routes, fullscreen and error/retry. Its request is Hosting-only workflow_dispatch at an exact feature SHA, with no merge and no automatic promotion. See the Teacher interactive-materials-staging epic for the product/technical plan, checks and delivery state. UI PR45 remains under human review; this preparation does not approve package publication or merge.

The neutral runtime receives a whitelisted HTTPS Student portal origin through its consumer URL; only homework paths/queries are bound to that origin. Default source/Storybook links are preserved. Dedicated tests cover default preservation, neutral/absolute paths, query retention and rejection of credential-bearing, non-HTTPS, injected-path and lookalike origins. The producer includes source UI, Fluent Emoji, font and runtime dependency license notices in its signed asset manifest. Interactive catalog metadata does not expose legacy image/page counts.
