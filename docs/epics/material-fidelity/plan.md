# Material interaction fidelity

User requests: each material opens a new page; review scroll, notes, progress and omitted common
behaviors against Claude, pixel fidelity while retaining the shared component patterns. Direct
rendered/interaction impact; continue UI PR45 and Teacher PR154, with no merges or production.
Baseline UI0d38f73 / deployed Teacher4f695094. The latter's completed staging proof is recorded
separately; that manual authorization cannot silently publish a new implementation revision.

Reference: current local Claude exports (A1/A2/B1/trial) and17November shared theme, immutable hashes
in reference.json. Current A2 remote inspection still fails to fetch content; this is an explicit
local exported-source fallback. B2 remains the new approved17-screen implementation; common chrome
uses the same current theme. No remote design writes, new lesson content or replacement imagery.

Findings to verify/fix in dependency order:

- Catalog currently navigates same tab to a framed viewer; default click should open an authenticated
  immersive presentation in a new tab, preserving the catalog and its filters.
- Teacher presentation adds a second product toolbar, reducing the design viewport; interactive
  presentations should use the full available canvas. Preserve legacy presentation behavior.
- A1 Notes opens obsolete teacher script/clock in a popup. Other lessons' free notes do not persist.
  Use one controlled shared notes panel with a per-lesson browser draft in the composition. Match
  pencil trigger, panel metrics, Clear/close/Escape/focus and editing without page navigation.
- Compare actual header/progress geometry and scroll/keyboard semantics before changing them. Keep
  snap, state, native audio pause on departure, responsive long-page reading and reduced motion.
  Never use copied DOM/CSS injection or document-level product listeners to implement the design.
- Check persistence/resume, action controls, type/radii, safe-area insets and intermediate scroll
  states; preserve deliberate content/media substitutions and record any safety adaptation.

PM review: bound changes to material entry/common mechanics. Technical review: public presentation
and interaction contracts in UI, browser persistence in canonical material composition, Teacher owns
links/routes/auth. Engineering review: existing semantic primitives and tagged theme styles; stable
ids/controlled callbacks; no new global stylesheet. QA review: source/current measurements, keyboard,
wheel/touch/long pages, page progress, notes isolation/reload/Clear/storage failure and new-tab opener,
desktop/short desktop/mobile with real content. These reviews agree on the delivery boundary.

At most3 focused validation groups: shared component/hook/type/API and relevant stories; source and
before/after browser comparisons of common states/all five materials; exact clean neutral artifact
adoption, actual Teacher routes and authorized staging. Reuse valid dark/media evidence. Human
visual review remains pending and CI owns broad suites.

- [x] Freeze deployed baseline and current reference; inventory mechanics.
- [x] Measure original/common states and implement shared corrections.
- [x] Verify interactions/geometry/contrast; capture comparable evidence and prepare UI PR.
- [ ] Adopt clean artifact; implement/test catalog new-tab immersion and refresh Teacher PR.
- [ ] Finish currently authorized staging steps or request a concrete new revision decision.
