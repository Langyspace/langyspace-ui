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

## Authenticated staging follow-up: animated controlled navigation

Owner-authorized Teacher97763e04 / producer7ce020bf was published to staging Hosting. Byte/config
receipt verification remains incomplete: public reads of the unchanged1.5–1.6MiB legacy B1 PNGs
expired at the existing30s deadline with eight parallel downloads. The existing coordinator is being
retried with a private read-transport queue of two; no deadline, hash/config check, lease or publisher
is bypassed. No production or target-branch change.

Actual live checks passed technical login and shared-extra/new-tab flow, but found a real End
navigation regression. Native animation reported a page; its controlled parent echoed that state
after activeRef had already advanced. The effect treated the delayed observation as an external
request and scrolled backwards. Traces show an End request11520px followed by unintended2880/3600px
requests. Earlier screenshot checks used reduced motion, so their static geometry remains valid
but they did not cover this race. Ten isolated native-motion/reload/notes cases at CPU1x/4x reproduced
five failures across A1/A2/B1/B2. The committed unit regression fails against7ce020bf and all15
SlideDeck unit cases pass after the correction.

The request effect now distinguishes a changed external request from a committed observed-page
echo, using committed observation rather than a newer mutable scroll ref. Controlled Storybook
coverage includes native Home/End progress. No visual recipe, content, media, public API or package
version changes. Native-motion browser proof and affected End screenshots are being refreshed.
This correction is a new runtime within the same owner-authorized staging delivery. Record its new
source explicitly; the authorization remains staging-only and does not approve a target-branch merge
or production.97763e04 must not be described as passing the animated navigation check.

Correction verification complete:15 SlideDeck unit cases, focused Controlled Storybook Home/End,
typecheck and changed-source/tool lint passed. Ten default-motion desktop cases (all five lessons at
CPU1x/4x) now reach100%; the original hook failed five. Fifteen paired native-motion End views cover
all five lessons at1280x800,1280x620 and390x844, CPU4x. Every corrected case reaches100% and returns
Home to0%. The mobile A2 Home check exceeded its initial5s harness deadline while progress was still
moving under throttling/resource pressure; only the failed/remaining mobile cases were retried with
10s and unchanged implementation. Retained successful desktop cases were reused. Existing static
geometry/notes/content/media proofs remain relevant because no presentation recipe changed.

Historical evidence was temporarily restored, but disk pressure recurred below200MiB during another
checkout. This feature worktree again omits historical.github/evidence folders only, retaining current
material-dark/material-fidelity proof. Source hashes were verified unchanged. All old evidence stays
in Git/GitHub; canonical checkouts remain untouched. Do not expand it while disk remains constrained.
