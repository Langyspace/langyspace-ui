# Always-dark lesson materials

Direct rendered impact. User explicitly requests dark INSIDE all lesson materials; keep the catalog,
portal chrome and OS/browser preference unchanged. Continue UI PR45 and Teacher PR154 feature trees.
No production merge or package publication. Previous manual permission was scoped to B2.01; do not
silently reuse it for a new manual revision.

Reference: updated local Claude exports17 November, shared tema-langy-16-11.js. Full reference read
and hashes frozen in reference.json. Background#0B0B0C, cards#1A1A1C, text#F7F7F7, muted#A9A4A6,
border#2E2E31, pink#FF1F5C, soft pink#3A0F1C, success fill#0F2E22, inputs#111113. Keep original
phone canvas/bubbles and opaque contextual illustrations. No copied runtime contrast mutation,
inline styles or global portal theme injection. Remote content unavailable for current A2/B1/trial
is an explicit local-source fallback, not a claim that the remote source rendered.

Implementation: one material-theme boundary in each canonical lesson composition and standalone
loading/error shell; shared tagged styles consume effective theme leaves. Nested device layout
providers merge their parent rather than resetting colors. Existing reusable fields, choice cards,
quiz answers, feedback, dialogue completion, grammar and role checklist must remain readable in all
states. Extend only semantic theme leaves where necessary; defaults outside materials unchanged.
Keep native media, focus/keyboard, response state and curriculum data unchanged.

QA groups(max3): (1) focused type/component/theme/API tests and relevant Storybook a11y; (2) every
material page and important revealed/wrong/correct/selected/notes/transcript state, light/dark OS,
1280×800,1280×620,390×844, paired against previous feature revision, checking contrast and overflow;
(3) neutral artifact inventory/style/build, Teacher integration and actual staging only when
currently authorized. CI owns broad suites; human visual review remains pending.

PM: theme changes only lesson surfaces, with real content. Tech lead: reusable theme contracts and
one portable producer. Engineering: scoped provider, no CSS filter/inversion/DOM color mutation,
explicit media separation. QA: every current lesson, long/mobile content, native transcript/input
and default library regressions. These five reviews agree on this bounded delivery.

- [x] Read reference and current theme/component ownership; freeze source hashes.
- [x] Implement always-dark shared lesson/theme behavior and cover actual states.
- [x] Validate and capture paired evidence; prepare clean UI feature revision.
- [ ] Freeze/adopt artifact in Teacher, verify actual routes and update PR154.
- [ ] Complete authorized staging handoff and retain human visual review pending.
