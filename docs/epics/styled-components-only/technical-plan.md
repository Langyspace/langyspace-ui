# Reviewed technical plan

1. Inventory source and existing contracts. Library has attrs style in charts/calendar/progress/action menu/swiper, ModalLayer z-index/body overflow mutations and MessageComposer autogrow mutation. Five products have independent source surfaces. Admin inline ledger247 is eliminated by its worker without hiding debt; other existing style debt cannot grow.
2. Introduce a shared source-aware styling audit beside existing audit tooling. TypeScript AST detects actual code rather than commented JSX. HTML tokenizer treats comments/raw scripts correctly. Check stylesheet imports/assets, JSX/React style props, attrs style outputs and DOM CSS mutation/injection. Generated asset permission is bound to integrity/source provenance. Dedicated negative/positive fixtures verify bypasses and legitimate font/generated cases. Integrate in the library quality command. Prepare a package candidate for consumer adoption; no release/tag permission inferred.
3. Before touching shared runtime, capture comparable stories and targeted interactions with local fixtures. Convert finite dynamic declarations to transient-prop tagged styles; use stable-ID scoped GlobalStyle for moving layers if class count would grow. Modal stack state supplies render state; declarative GlobalStyle locks overflow without overwriting preexisting inline state. Composer sizing must shrink as well as grow without direct style writes, with DOM measurement and bounded prepaint React state.
4. Root reviews worker plans and hands off browser windows. Library changes precede consumer adoption; runtime package release/version and dependency/lock changes are coordinated centrally, not by workers. No permanent installation-policy override or shared store mutation.
5. Review API/diff and two focused validation blocks. CI owns broad release/layout gates. Capture evidence for all affected shared surfaces and product adoption changes. Use native feature PRs and evidence-only bodies; preserve source/CI truth and current approval rules.

Critical review: do not equate zero source matches with behavioral equivalence, or a passing existing Button audit with coverage of public/HTML. Avoid arbitrary exclusions, CSS moved into strings, shifted inline props, per-render styled factories, a global important reset and unrelated cleanup. Font assets retain licenses. Boot CSS must exist before client JS, with a styled-components SSR source. No deployment or paid operation is part of local implementation.

Inspection also found42 inline occurrences in25 live catalog/fixture files. Convert these to named styled story compositions with unchanged markup/values, not inline examples. Capture affected story variants from the fresh frozen baseline before editing. The new CLI extends public audit tooling additively; a minor4.1.0 package candidate is planned while component APIs remain frozen. Publication requires final explicit authorization under the native package skill.

## Runtime implementation review — worker handoff

The coordinator approved the following implementation before critical edits. Existing ActionMenu useId/position/focus/keyboard behavior stays intact; a client-only scoped GlobalStyle binds the existing escaped ID and replaces only the live geometry declarations, with cleanup on close and no per-coordinate class growth. Finite calendar/chart/progress/swiper values become tagged transient declarations with exact existing units/variables.

Composer keeps one existing textarea, with no new measurement node or field-sizing dependency. A value-keyed measurement state renders zero height for a new controlled value, then useLayoutEffect reads scrollHeight/current max-height and commits the bounded height before paint. This permits shrink as well as growth and retains rows, IME, Enter/ShiftEnter and controlled submit behavior. Native lint must accept legitimate DOM measurement; no suppression or disguised state update is permitted.

Modal registration/inert/focus remain in the existing stack. Layer order moves to a declarative transient value. A body data marker preserves its previous attribute state, while a GlobalStyle exists only during the client lock. The coordinator approved `overflow:hidden!important` exclusively under that marker to override ordinary preexisting inline overflow without modifying it. Preexisting inline `!important` is an external cascade limit: do not add DOM CSS writes or claim that unsupported case is solved. SSR public paths already omit client portals, so prove that path/hydration; do not claim the private styled-components6.4.2 multi-instance GlobalStyle SSR defect is solved.

The baseline harness serves the freshly compiled Storybook through the native startStaticStorybook helper. A local test-only source fixture adds controlled keyboard/grow-shrink/nested-modal/reopen/scroll actions absent from existing stories; it uses the same static Vite server and component source, before any production or catalog edit. All requests outside that origin are aborted. Evidence covers390/1440, fixed time, local Montserrat fonts and deterministic animation states. Catalog styles are converted separately with AST JSX/value preservation for all42 occurrences, rather than relying only on a zero counter.

## Reviewed cascade follow-up

The first132-state after capture completed before this follow-up. A separate390px browser discriminant applied the ordinary consumer selector `.consumer-composer textarea {height:1px}` to the same stress story. The baseline's inline height kept the computed144px; the first transient class lost the cascade and computed48px. The coordinator approved raising specificity only for migrated dynamic declarations, using `&&&&`: Composer height; chart bar height; progress fill width; calendar event height/top; Swiper --tx/--ty/--tr. The other declarations retain their existing specificity and order. Chart background was never inline, so its existing themed rules are unchanged. This retains precedence against ordinary class/descendant composition, without promising to defeat arbitrary ID or important consumer rules.

The public chart/progress/Swiper/Composer props forward className to their roots; a calendar surface wrapper can target event data attributes. Durable real-browser composition discriminants cover the same ordinary selectors, finite values, Composer144→48 growth/shrink, and Swiper unset values inheriting consumer variables. Blank exit strings emit no own custom-property declaration, retaining the existing animation var fallbacks. These requirements run through the existing `test:layout` entrypoint, which invokes the focused browser suite after its original layout contracts. Node/jsdom's installed styled-components6.5.3 CJS entry does not install createGlobalStyle client rules; equivalent computed overflow/position assertions therefore run in Chromium, while unit tests retain interaction/state assertions.

UI's installed versions are React19.2.8/styled-components6.5.3. The earlier6.4.2 SSR observation came from Student, not this installed Library. Public Dialog/Drawer/ActionMenu portals are client-only and the public SSR path is checked; private multi-instance GlobalStyle SSR behavior is outside that assertion.

The final reviewed interoperability boundary preserves native HTML style passthrough for nonconflicting properties. External inline writes to private Swiper --tx/--ty/--tr channels are not supported or claimed universally equivalent: the old attrs merge overwrote them, whereas an external inline declaration can outrank the new class. No important rule or prop filter was introduced. Four real Student/Teacher call sites and their loading wrappers have no such conflicts; their source hashes are recorded. Candidate adoption remains a coordinator check.

## Reviewed PR viewport recapture

The coordinator approved the evidence-only format correction before execution. Runtime.tsx is served
as source via /@fs and is not bundled into the frozen Storybook. Merely selecting storybook-before
would therefore import the current component checkout. The capture now uses the same native Vite
static-server configuration with a pre-load Git source boundary: every requested src file must exist
in the pinned Git tree, bytes come from git show, and Git blob/SHA256 are recorded. Baseline pins
be8a316; after pinsf3a5712 and verifies checkout bytes. No baseline fallback is possible. The current
sanitized Runtime/Runtime.styles fixture is identical in both phases and declared as current, with
explicit hashes. Local Montserrat400/500/600/700 and React/SC versions/hashes are bound in reports.
The after static root is the already compiled storybook-final, with no rendered source change since
e032ced and no rebuild.

The native captureVisualEvidence helper selects fullPage=false for a visible modal. PNG dimensions,
screenshot mode, repeated raw reads and all provenance are persisted. The same five cases run at
390/1440x1100. A native-comparer invocation restricted to the new10-pair directory checks exact
text/tags/geometry/CSS/focus/inert/scroll, classifies only the intended body inline lock ownership,
and reports PNG differences without normalization/thresholds. Each baseline receipt is also compared
against every original raw field as an origin control. The new selection manifest replaces only10
paths in the original132 selection; the original manifests/PNG/receipts are untouched.

Two first cold source-fixture attempts failed with React dispatcher errors before heading readiness.
Their reports remain raw. Explicit peer include/dedupe did not alone resolve the cold start. A bounded
preflight records the cold stack, reloads once and requires the heading before fresh capture contexts;
its errors/readiness are separate and explicit in each final phase report. No product cause is
inferred from this harness startup. All selected capture contexts subsequently passed. Native
browser/server finally blocks completed. Validation is the focused origin/10-pair visual block plus
capture syntax/lint/format/diff; no full132 recapture, build, package or cloud operation.
