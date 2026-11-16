# Interactive material: shared layout first

## Current scope

The user reprioritized this delivery on 2026-11-16: prepare the common slide capsule/layout and scrolling before the individual voice-message exercise. Its early draft is preserved in the ignored `.local/deferred-voice-message/` directory and is excluded from the public API and this PR.

Build `SlidePage` for consistent heading, instruction, tools, width and content. Build `SlideDeck` for the independently scrollable viewport, full-height pages, native vertical snap, previous-page action, progress and page-change callbacks. Teacher/student keep routes, lesson fetching, learner identity, exercise data, recordings and persistence.

## Reference and precedence

1. Current user instructions: shared layout and scroll exactly as Claude; exercise follows later.
2. [Current A1.01 in Claude](https://claude.ai/artifact/KX94fLxvBjhqmz8VmHpjgr), inspected in the browser on 2026-11-16. Confirmed first slide, next warm-up page and PageDown transition. At 1280px, slide min-height = 675px inside the artifact; native `scroll-snap-type: y mandatory`, `scroll-snap-align: start`, `scroll-snap-stop: always`; next page lands at scrollY 675. The slide itself has no rounded border. The warm-up's content capsule is 600px wide, white with 1px #E2E2E2 border and 8px radius. Title/instruction are outside that exercise panel.
3. Local A1.01 source in `Planejamento Langy/codigo/a1-01-novo`: wider task content 1040px, 56px header, 32px gutter, reduced-motion handling; old global document scroll is adapted to a scoped portal viewport.
4. UI 4.2 native React/styled-components conventions and existing Button/Card primitives. Do not copy Claude artifact application chrome, chats or sharing controls into the portal.

The native artifact API lists the current artifact but fails to download its content; the browser rendered reference supplies current layout evidence. The public UX Lab source was pulled with verified SHA-256 `872dbfa4ed77bfc184cafbdea31296eb884a5bb6b08fc98ada2d6bb6ce2d8d50`, version `1794646326-5b98`. No remote design was changed.

## State and interaction contract

- Page content remains mounted so returning preserves exercise state.
- Native wheel/touch scrolling and PageDown/PageUp move between snap pages. Home/End navigate the deck when its viewport has keyboard focus. Inputs and exercise controls keep their own keys.
- Long content grows the slide and remains readable with the same scroll surface. It is never clipped into an inaccessible fixed 16:9 box or a nested scroll pane.
- Observer/callback tracks a reading line at the top of the deck, including slides taller than its viewport; product callbacks can stop active audio when a different page becomes current.
- Programmatic page requests scroll only the deck; surrounding portal scroll is untouched. Unknown requested ids are ignored safely; no window-level keyboard listener or stylesheet is installed.
- Reduced motion uses instant programmatic navigation and disables CSS smooth scrolling.
- Empty/single-page decks, initial controlled page, reordering/removing pages, callback freshness, resizes, state persistence and narrow/short viewports need focused evidence.

## Delivery order

1. Shared layout and navigation, with real reference content as story fixtures.
2. Focused unit/SSR and browser interaction evidence; current public API declarations and manifest.
3. Draft PR to `main` with new-story images at 390/1280px and long-content/theme states. Baseline `3a05e0b`; no previous implementation exists.
4. Product-owner visual review; then compatible library release and teacher/student adoption in separate deliveries.
5. Resume the voice-message component inside this layout.

## Status

Shared layout and scrolling implemented and locally verified. Delivery is prepared for a draft PR; see `progress.md` for evidence and remaining adoption work. No portal route, package release, merge or production deployment has occurred.

Visual gate review: pending human.
