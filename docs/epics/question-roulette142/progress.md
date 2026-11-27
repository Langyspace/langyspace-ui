# Refinement: muted tactile timbre and stable Spin label

Baseline 20f0e1e5f8890ac432b66f1fcec32fc23f38d477. Owner approved synchronization with the wheel and requested a different sound plus removal of loading dots. Boundary timing, easing and draw behavior are unchanged. The new sound replaces pitched 720Hz ticks/overtones and the ending chord with smooth band-limited taps (180–1150Hz), a damped 240Hz body and a soft 70ms final tap. Relative gain is reduced from 0.45 to 0.36. No other earcon recipe changed. The center keeps “Spin” while drawing; the state header reads “Spinning” without an ellipsis.

The local browser completed the draw and showed the literal Spin label while pending; evidence/timbre-v5/spinning.jpg matches the previous pending state and width. Existing mute, recording priority and request-scoped cancellation are reused. Seventeen component and sixteen shared-feedback cases passed across the targeted runs; two stale ellipsis assertions were updated and only those two were rerun. Declaration generation and API compatibility checks passed. Perceptual timbre/volume approval remains with the owner; no broad gate, package publication, merge or deployment.

# Refinement: stable header and dedicated spin sound

Baseline 9ba99fa9d5b655638f3dc2243d4416c0ecd5eef9. Panel centering moved the topic/progress row when the question and optional support disappeared. The metadata is now anchored at the top; a flexible question region takes the remaining space. The shorter “Spinning…” state reuses that same header. In the actual local preview, the progress anchor stayed at x487.068/y451.612 in ready, selected, pending and final states at the unchanged default width. Current ready/spinning/final JPEG evidence is in evidence/sound-v4.

The spin replaces the generic bulb beep with dedicated soft resonant ticks at actual sector-boundary crossings, using the visual cubic-bezier token, plus a quiet 220ms neutral landing tone. The deterministic waveform has smooth edges and a peak cap; the existing sound bus applies its 0.45 relative gain. Global mute, cancellation, unmount, visibility and lesson-recording priority remain in the canonical engine. Cleanup is request-scoped so an old draw cannot stop a newer unrelated earcon. Reduced motion reveals without the spin sound. No synthesis provider, media file generation, recording, network or persistence was added. “Engaging” is the design direction, not a scientifically verified cognitive effect; perceptual sound/volume approval remains with the owner.

Focused evidence: seventeen roulette cases and sixteen shared-feedback cases passed across the targeted runs. The first signal-limit assertion loop timed out because it performed an expectation for every sample; aggregating finite/peak values fixed that test, and only the failed case was rerun. TypeScript declaration generation and the deliberate API compatibility check passed (185 values, 312 types, 658 declarations). A preview transform error from calling a method directly on a theme-token chain was corrected with a local string binding; the real preview then loaded and completed two keyboard draws. Existing non-roulette earcons remain unchanged. No broad suite/package build, merge or deployment was run.

# Refinement: eight mirrored sectors, stable colors and smaller hub

The owner clarified that each possibility should have a different area, mirrored with its opposite sector, with eight options. The example uses four fixed sector widths (60°, 50°, 40°, 30°) repeated on the opposite half. Geometry remains fixed throughout a round. The additive optional topic `weight` prop controls authored area and topic probability; exhausted topics cannot be drawn, and no question repeats. Banks without weights retain uniform remaining-question drawing.

Selection no longer recolors a sector or its label. The hub was reduced from 80px to 48px, preserving a comfortable click target, and the wheel housing has a small stand and stronger rim markers. The example keeps all sixteen previous prompts and adds Learning/Future, giving eight topics and twenty B2 oral questions. The six-turn 3.8s animation, reduced-motion path, theme and support controls remain in place. This supersedes the intermediate remaining-count geometry proposal, which was not delivered.

Current refinement evidence (baseline 9aaeba7235c0a82bd7531f3263fa60e24678b750): fifteen focused component cases passed, including opposite sector dimensions, fixed paths after repeated draws, weighted topic drawing without repeats, invalid weights, timing, cancellation and keyboard operation. Declaration generation and the deliberate additive API snapshot check passed (185 values, 312 types, 657 declarations). No broad suite/package build or release was run.

The real local preview shows all eight sectors; final pointer/topic agreement, stable colors and hint behavior were observed. Both supported themes and a narrow layout with support were inspected. Temporary viewport overrides were reset. The browser was at 120% zoom, so captures made with 1280×720 and 360×800 overrides have effective sizes 1067×600 and 300×667; they are supplemental evidence, not matching-size comparisons. The PR uses the matching default-width ready captures (589×630), frame-v2/ready.png → frame-v3/ready.jpg. Current screenshots are JPEGs with .jpg extensions. The local prototype remains open for owner review, without deployment or merge.

# Refinement: stronger frame and longer suspense

The owner requested a more distinctive frame and a longer, more dramatic draw. The current version uses one framed game surface, an inset question card, a layered circular rim with static markers and a reinforced center hub. The spin now makes six full turns over 3.8 seconds with a gradual deceleration. The question remains hidden throughout the draw and fades in only at completion; no flashing lights or additional sound loop was added. Reduced motion still reveals immediately.

The timing is isolated in exercises.rouletteSpinDuration/rouletteSpinEasing/rouletteSpinTurns; other application transitions keep their original timings. The focused timing regression checks the moment immediately before and at completion, plus a subsequent draw that hides the previous question. Initial no-repeat, cancellation, keyboard and reduced-motion evidence was rerun with the longer timing. This section supersedes the earlier 800 ms choice below.

# Initial delivery (historical)

New public QuestionRoulette prepared on feat/question-roulette142, isolated from the other material worktree. Its first example bank contains twelve distinct B2 oral questions across Work, Travel, Choices, People, Opinions and Stories. Actual lesson banks remain consumer-owned; no existing lesson, material catalog or deployed artifact was changed.

The wheel draws uniformly from remaining questions and lands on their topic. One native central button spins/restarts; one optional canonical bulb reveals speaking strategy. A reducer coordinates pending/revealed/cancelled draws, progress and support. Recreated equivalent data preserves the round; changed authored data resets it. No score, recording, persistence, automatic assessment or network service.

Evidence reused by relevant input:

- Twelve focused component cases passed, including SSR, no repeats, explicit restart, unequal topic sizes, double activation, keyboard focus, cancellation/unmount, bank changes, hints, reduced motion and invalid/empty bank recovery. Six public-component manifest checks passed.
- Focused ESLint, full TypeScript check and generated API compatibility check passed. The public change is additive: one component and five named public types (185 values, 312 types, 657 declarations). No full suite, bundle/package publication or consumer release was run.
- Real local browser: 1280×720 dark ready/draw/hint, 360×800 expanded hint and 1280×720 light. Enter activated the next draw; pointer/topic and progress agreed, two observed questions differed, and support reset. A hover-related center-button displacement was corrected before the final screenshots.
- Reduced-motion, exhaustion/restart and invalid-bank cases have focused unit evidence; they were not all exercised in the browser. Long-content and empty/disabled variants are available in Storybook. Human judgment of the design remains pending.

The images in evidence/ show the actual new flow before and after drawing/support. They are interaction states, not a claim that an older roulette component existed. The temporary viewport override was reset and the live prototype was retained for owner review.

Local preview: http://127.0.0.1:8853/ . The local Vite entry under .local/roulette142 uses the same canonical component inside SlidePage/SlideDeck and the existing material theme. Standard reproducible library examples are Exercise/QuestionRoulette and Exercise/UX Lab → QuestionRoulettePractice.

No Hosting deployment, registry publication, media generation or product/data mutation. No merge; visual PR remains draft.

Visual gate review: pending human

Frame-v2 evidence (historical): thirteen component cases passed across the main focused run and the isolated added regression; full TypeScript and generated API checks passed. Current frame screenshots are in evidence/frame-v2 (dark desktop, light desktop and narrow with support). Browser inspection observed the pending placeholder, final question, pointer/topic agreement and optional support. The 360×800 and 1280×720 overrides were reset. The source-preview server was restarted because its theme-token transform caches definitions at startup; the final preview loaded the new tokens without the temporary developer overlay. No production behavior or global spinner timing was changed.
