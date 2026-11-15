# Requirements

- Shared Button and component APIs, source exports and API snapshot remain unchanged. No product logic or new visual component family.
- Style definitions live with their cohesive owner and use existing semantic theme tokens. Transient props handle geometry; scoped dynamic GlobalStyle rules may bind a stable React ID where per-coordinate class growth is undesirable. No generic object-style escape or global rule-wide disable.
- Enforce owned JS/TS/JSX/HTML and stylesheet files, including public assets. Ignore comments, test fixtures and immutable historical artifacts by explicit ownership, not broad hide rules. Fontsource stylesheet imports are the only package CSS allowance.
- Generated embedded bundle/boot output must have verified source and file hashes. No unproven handwritten CSS asset is considered generated.
- Preserve nested modal inertness, focus restoration, scroll lock and original inline values; presentation state replaces imperative CSS changes. Preserve composer grow/shrink/max-height, keyboard/IME and controlled value behavior.
- Library surface matrix at390/1440: ActionMenu open/scroll/edge/long items; Modal/Dialog/Drawer nested/close/focus/scroll; MessageComposer empty/multiline/shrink/disabled/error; ScheduleCalendar positioned slots; grouped charts and progress0/partial/max; FlashcardSwiper entering/exiting/reduced motion. Baseline before runtime edits, focused before/after evidence versioned.
- Browser and builds are scheduled by root for the8GB host. One heavy task at a time. External network/provider effects blocked with synthetic fixtures.

Live Storybook and .storybook fixtures are owned UI and use the same styling policy; tests containing intentionally invalid source remain outside production authoring roots.

Library implementation boundaries: preserve141 exported component APIs/types, canonical component IDs, source order, palette values and license files. Runtime has10 source violations; catalog has42 attributes in25 modules. All52 are mapped to their owning styles and must pass AST/source plus rendered evidence. Native styling policy/package/lock/CI remain coordinator-owned. No new suppression, object-style helper, CSS mutation escape, public prop or theme token.

Dynamic cascade parity includes ordinary consumer styled composition. Only former inline declarations receive increased class specificity; no broad override is added. Modal preserves ordinary host inline overflow and prior marker while the lock is mounted; preexisting inline important overflow remains an explicitly unverified external-cascade limitation.

## PR viewport evidence

- Use the native captureVisualEvidence helper: a visible aria-modal=true selects viewport mode;
  all other states retain full-page mode. Preserve the1100px viewport, actual browser composition
  and source images; no image crop/edit, viewport resize or backdrop change.
- Recapture only five open-modal/drawer cases at390/1440 into evidence/pr-viewport. Preserve every
  original raw132 pair and manifest. A new selection manifest may override only these10 pairs.
- The Runtime source fixture is absent from baseline Git. Declare the identical current sanitized
  fixture/digests in both phases; baseline product components must come exclusively from Gitbe8a316
  through a fail-closed loader. Record every served module's Git blob and SHA256, installed peers
  and local font hashes. Reproduce all original baseline raw fields before qualification.
- Keep after sources atf3a5712, unchanged from final runtimee032ced; select the existing
  storybook-final root. Preserve raw CSS/focus/inert/scroll evidence and explicitly classify the
  intended body inline-overflow ownership change. Human review remains pending.
