# Layout delivery

This document records the original shared-layout delivery. The user's subsequent request adds the phone exercise to the same PR; see `voice-message-delivery.md` for that implementation and evidence.

## Implemented

- `SlidePage`: eyebrow, heading, instruction, optional tools, 600/1040px content column, vertical centering and inverse introduction.
- `SlideDeck`: bounded viewport, native vertical snapping, previous-page action, continuous scroll progress, controlled page requests and page-change callback.
- Mounted content preserves entered answers and form state when going back. Keyboard handling stays in the focused viewport; long slides remain readable before progressing. Reduced motion is respected.
- Shared slide recipe follows inspected A1.01 values; no existing component recipe changed. The next package change is additive (minor), with two value exports and three type exports. No package version was bumped or published.
- Story fixtures reuse the exact yawning-face PNG from the A1.01 source. The fixture is a demonstration of the layout, not an implementation of the complete A1.01 lesson.

## Source and verification

- Browser reference: [current A1.01](https://claude.ai/artifact/KX94fLxvBjhqmz8VmHpjgr), inspected 2026-11-16. Confirmed 100% viewport pages, `y mandatory` snap, `scroll-snap-stop: always`, 56px navigation, centered content and natural oversized pages. Browsed the first/next page and inspected their rendered geometry.
- Baseline `3a05e0b`. New stories have no previous library implementation.
- Focused unit/SSR/manifest: 15 tests passed; after adding continuous progress and a resize regression, reran only the changed deck tests (8 passed). Unchanged SSR and manifest evidence was retained.
- TypeScript and scoped ESLint passed. Declaration generation and `check:api` passed (147 values, 228 types, 489 declarations).
- Chromium browser checks passed: real wheel scrolling, controlled navigation, PageDown/Home/End, answer persistence, textbox key isolation, stationary host, long-content reachability, narrow layout and no horizontal overflow. Live resize preserves the current page, and normal smooth navigation plus reduced-motion navigation were verified.
- Captures: 1280×720, 390×844, 844×390; 280px content container; initial, selected answer, long content start/end, long heading and theme override. See `.github/evidence/interactive-material-layout/results.json` and the reproducible `capture.mjs` beside this document.
- These checks do not replace the product owner's visual review or CI's complete library gate.

## Remaining work

1. Product-owner review of this revision's screenshots and scroll preview.
2. Compatible official UI package release and teacher adoption, preserving the existing material navigation/fullscreen shell; student can adopt the same components later.
3. The phone component is now implemented and exported in this same PR; see `voice-message-delivery.md`. The early local draft remains ignored as recovery material.

No remote design, portal route, production data or package release was changed. The private A1.01 source could be viewed in the browser but its file transport returned a content-fetch error; full source synchronization was not claimed.

Visual gate review: pending human.
