# Interaction fidelity progress

Baseline is the verified dark-theme staging revision4f695094 / UI0d38f73. Its coordinator release,
614 byte/config checks, clean lease and4 authenticated tests passed before this new scope; receipts
are in Teacher's dark-staging-verification.json. New fidelity changes are not yet published.

The canonical materials now share controlled SlideNotes: pencil trigger, graphite panel360x440max,
16px editor, Clear/close/Escape/focus and per-material draft storage with a usable in-memory fallback.
A1's obsolete clock/script popup and duplicate note styling are removed. The consumer owns storage;
SlideNotes is reusable presentation with no implicit persistence. A SlideDeck overlay slot keeps the
notes within its interaction and viewport boundary. Page cursor restoration uses validated stable
ids per material; explicit initial-page requests take precedence.

Navigation now works from deck controls with all four arrows and page keys, preserving editing and
custom widgets. Active page changes at60% viewport coverage (including oversized pages), which also
pauses departed media. End reaches the actual final bottom, including long last pages; progress is
actual scroll distance. Native wheel/touch snapping and resize anchoring remain. Common header
Back glyph/metrics, notes controls, safe areas and760px compact breakpoint follow the source. Short
viewports use the reference's60/12px page padding and26px title, preserving long content flow.

Teacher changes in progress: material cards and legacy viewer presentation links open authentic
presentation routes in a new tab with noopener/noreferrer. Interactive presentation removes the
second outer toolbar and fills100dvh. Legacy presentation retains its own controls. A same-origin,
frame/key/source-bound focus request lets the immersive frame receive keyboard navigation on entry,
without adding document-level library key listeners or stealing focus from editable content.

Reference measurements use local Claude HTML and the updated shared theme; native artifact auth
is valid, but current A2 content inspection still returns capability-fetch failure. A1's older
17-screen export is used only for common chrome with the current shared theme applied; it does
not replace the approved26-screen curriculum. No remote writes. Initial HTTP harness omitted UTF8,
causing garbled symbols; it was corrected before retained geometry/pixel proofs. Same pinned fonts
are served to reference/current. Source/current panel/editor/control rectangles match at DPR1/2,
1280x800,1280x620,700x800,390x844; hover/focus colors also match the reference after removing unintended field transitions and inherited hover fills. Do not claim the
entire lesson curriculum is pixel-identical from these common-surface measurements.

Focused checks: existing navigation/manifest cases passed; new notes/page-storage6 cases passed
with a fresh real JSDOM storage realm (Node26 masks Vitest's existing localStorage getter); final
End/keyboard/resize3 cases passed. Public SlideDeck7 browser stories passed. Notes stories found
invalid aside/dialog role and were corrected to a div with a nonmodal dialog role; all3 retry stories passed.
Teacher card9 tests and focus/readiness10 bounded cases passed (runner also discovers frozen
baseline cases; retain that distinction). Preview artifact builds127 assets without style policy
violations. Final source/type/lint/API and browser evidence are still in progress.

Intentional accessibility adaptations: no autoplay added; reduced-motion navigation is respected;
long pages remain readable before vertical keys advance; editable fields/widgets keep their native
keys. Notes placeholders use the existing readable semantic muted token. Human visual approval is
still pending. No package publication, target-branch merge or production work.

Retained browser proof:60 paired UI states across all five materials/three viewports,15 complete interaction cases, no page errors, no missing images/overflow, native B2 audio continuation during notes and pause on departure. Source comparison8 cases at DPR1/2 has identical panel/editor/header-control rectangles within0.1px and matching backgrounds. The60 current images were refreshed after visual-only hover/role corrections while retaining successful functional checks. Public API is additive (SlideNotes/2 types/SlideDeck.overlay/5 theme leaves),169 values269 types564 declarations; library build/API check and final typecheck passed. Targeted source lint passed except four findings corrected in the affected files; lint retry passed. Physical iOS IME remains a human check; the native Chromium touch gesture is checked separately.

Resource note: disk pressure came from concurrent workspace activity. Only this feature checkout's historical evidence folders are sparsified; source hashes were verified unchanged, current dark/fidelity proof remains present, and old blobs remain immutable in Git/GitHub. Canonical checkouts were preserved. Restore full checkout when disk safely permits.

Native touch gestures passed for all five materials at390x844 in an isolated Chromium mobile profile. The widget guard also preserves radio/grid/tree/spinbutton arrow-key ownership; its focused test passed. Source/reference measurement tooling and the changed source passed targeted lint after focused corrections. Current UI evidence and API snapshot are ready for the feature commit; clean producer/adoption remains next.
