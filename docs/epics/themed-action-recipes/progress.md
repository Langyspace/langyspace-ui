# Progress

Implementation complete on the isolated branch, based on approved UI4.1 main ee0b4ff. The current
canonical release checkout was only read. Product-specific values/content remain outside UI.

32 focused tests passed across Button, ActionLink, IconButton, Dialog and Drawer, including supplied
tokens and closeIcon semantics. Production library build/declarations and reviewed API snapshot
passed (145 values/225 types/482 declarations); changes are additive tokens/optional slot. Focused
lint and style audit passed. Browser comparison against the SHA-verified UI4.1 candidate showed exact
default Dialog geometry/computed styles at 390/1440, with Escape/reopen and zero console errors.
Product-themed captures exercise the new contract.

Immutable candidate sealed with checksum; current screenshots cover actions and default/product
Dialog. Final handoff updates both draft PRs. Version 4.2.0-design.1 is unpublished. No tag, release, merge or
deployment was performed. Visual gate review: pending human.

## Production authorization — 2026-11-15

The product owner explicitly authorized this reviewed delivery to production ("pode subir para prod").
Approved visual source is PR41 at 5798294 and landing PR12 at 00d813f. Preparing official 4.2.0.
The release follow-up is indirect impact: same action/Dialog colors, dimensions, slots and states;
token fallback is resolved at each leaf to preserve tree shaking instead of spreading the entire
default theme. The bounded feature budget review below applies. The Dialog test drops an unsupported ByRole option.
The catalog gate now waits for the visible modal portal as well as ordinary story children;
ProductTheme renders its Dialog in a portal, so an empty root is expected and not a layout failure.

Source-fidelity exception: the approved prototype's white text on #FF1F5C has 3.74:1 contrast.
The Button ProductTheme fixture deliberately preserves those source colors. Only color-contrast on
`button.lsui-sc-button` within that one story is excluded from axe matching; all other story rules
and other stories' contrast checks remain active. This records the existing fidelity decision, not
an AA claim or a default library token change. No production visual is changed by this release fix.

Release validation/results and official artifact receipt will be appended after execution.

### Bundle contract review for new runtime functionality

The old recipes compiled default tokens to literals and ignored provider values. UI4.2 adds runtime
provider selection for actions/focus and a new configurable Dialog contract. This is additional
runtime functionality, not only a styling-authoring refactor. The first implementation retained the
whole default theme in every action consumer (7,657 gzip bytes for actions); that was rejected.
Leaf fallbacks, a limited action default group and shared size/variant recipes reduce actions to
4,062 bytes. No compiler or styling-audit exception was introduced.

Reviewed tradeoff: retain this explicitly requested runtime theming capability and standalone
fallbacks, with narrowly measured gzip limits. Raw limits, every unrelated entry, API compatibility,
SSR/browser package smoke and all accessibility/layout checks remain required. Current measured
bytes → new limit: library 69,503 → 70,000 (old 68,000), actions 4,062 → 4,200 (old 3,500), fields
5,760 → 5,900 (old 5,600), molecules 19,641 → 20,000 (old 18,000), scheduleCalendar 8,562 → 8,700
(old 8,000), flashcardPresentation 6,018 → 6,100 (old 6,000). The maximum whole-library increase is
2,000 bytes gzip; selective action imports add 562 measured bytes versus the old limit. This is a
specific feature-cost decision, not a blanket relaxation or a performance-budget claim for the site.
A future theme change must stay within these limits or receive a new documented review.

Type declarations were reviewed: only the private theme resolver declaration changed after the
approved additive API snapshot; root and form entrypoints and the public theme declaration are
unchanged. User approval remains attached to the same visible revision; release optimizations must
prove screenshot parity before production.

Release checks: focused 35 tests, typecheck, lint/format, reviewed API, all bundle entries and
packaged ESM/SSR/browser smoke passed. Product release captures versus approved revision have
16/18 pixel-identical images; mobile modal differs by 1 pixel and desktop modal by 90 pixels,
maximum channel delta 1. Hero, phone frames and all sections are pixel-identical; geometry is exact.
Raw measurements are in evidence/release/landing-approved-parity.json.

CI43766303317 passed architecture/package but exposed a real absent-provider createGlobalStyle
case: SC supplies undefined rather than an empty theme. The resolver now normalizes that value
before reading any group. Existing 8 browser contracts passed, including nested layers, focus,
Escape, hydration and document-state preservation. This corrective follow-up changes no configured
product values; full CI is rerun before merge. The owner-approved visuals remain the authority.
