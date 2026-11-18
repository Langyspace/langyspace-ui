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

##18November · recover Sofia GitHub delivery and adopt completed A1 lessons

Direct rendered impact: four existing Sofia compositions (A1.03/04/05/06:17/16/16/20 screens),59
existing scene images and A1 interface refinements are adopted from PR43, author SofiaTresse,
head0a3fea8046eb9c73e99612cb67abb26fe551258a. Source commits76c471cb/3557e03f/0a3fea8 and their
provenance/evidence are preserved; commit author is Codex, so PR ownership is the attribution
proof. No regenerated images or rewritten curricular content. PR43 and its feature branch stay intact.
The integration continues existing PR45/Teacher154, with no package publication, target merge or deploy.

The orchestrator granted exclusive INT-SOFIA-ADOPT-01 and INT-A201-AUDIO-01 file reservations.
690 exact source/evidence files were imported; adapters retain the current always-dark material
interiors, lateral public SlideNotes, per-material cursor and Notes persistence/focus, and the
animated controlled-scroll correction. The source modal Notes and light selector are deliberately
not reintroduced. Exercise group progress is retained. Do not wholesale overwrite shared styles:
PR43 lacks some later PR45 dark-theme and header fixes. The82-entry catalog remains a Storybook
fixture; portable delivery receives only actual implemented lessons. Its historical A2 title does
not replace the current approved Porto lesson.

The completed A2 Kim MP3 from AUD-A201-KIM-01 is reused with exact transcript match, duration15.18585s,
SHA1bb0cf895fb5c62b31726f5f9e6bffe2975f25d3a96ee33d674b036522eb92b5. Voice Sarah Explains, ElevenLabs
multilingual_v2, source Claude version1795033410-432c. No additional TTS call. Notes and media do not
imply Student homework provisioning. New compositions bind authored homework links to the validated
consumer origin. Previous69-page/static illustration proofs are reused for unchanged content/media;
current adaptations require focused type/lint and runtime checks, plus paired affected screenshots.

Next: complete adapters/router, verify all new inventories, Notes/cursor/default-motion progress,
Pet notes locations, environment-bound homework and native A2 playback/transcription. Stage one
coherent source commit; defer consumer artifact/publication until the full Frontend handoff. Frontend
already has17 reviewed source screens and49 MP3s; the later full port must not stop at a pilot.


## Complete Sofia and Frontend adoption,18 November

Reuse PR43 by SofiaTresse at0a3fea8046eb9c73e99612cb67abb26fe551258a (commits76c471c,3557e03,
0a3fea8), without rewriting that branch.690 imported source/evidence files are listed with their
original SHA256s in sofia-import-manifest.json. Integration reconciles imports/private adapters,
retains current forced-dark theme, lateral free Notes and focus/cursor/native scrolling, and binds
homework to the consumer environment. New A1.03/04/05/06 have17/16/16/20 screens; the59 approved
scenes include the15 A1.01 refinements.200 paired current-adapter views and11 functional checks
passed; A101's former Notes popup is captured as the real before state. Historical Sofia evidence
is retained as historical source evidence, not recaptured or represented as current remote proof.

A201 adopts the exact verified15.18585s Kim ElevenLabs clip; full native first pass/second transcript
and departure pause passed. The complete17-screen B1 Tech Frontend extra reuses49 verified MP3s and
14 images from final original1795037606-0c26/8ab03020.68 current default pairs and20 state pairs
passed. Shared VoiceMessage adds optional manual-after-replay text visibility and an optional
questions heading, keeping automatic second-listen/default rendering unchanged.15 focused tests,
typecheck/scoped lint and the reviewed one-declaration API snapshot passed. See frontend-material.

Review sheets arrange4 unedited captures per side; originals and provenance remain available.
They retain83 earlier valid pairs and288 new source/current pairs within GitHub's PR body limit.
No package publication, merge, new staging release or production is authorized in this round.
Student-specific Frontend activity provisioning remains separate; links resolve to supported tabs.
