# Dark material delivery

The five canonical lesson compositions now opt into materialDarkTheme, independent of OS settings.
The Teacher catalog and outer chrome do not opt in. Phone internals and contextual media preserve
original colors; only adjacent questions follow the material theme. No exercise data, media hook,
scroll contract or Student destination changed. Shared fields/choice/feedback styles retain their
existing defaults outside an effective provider. API addition is intentional: one preset plus three
optional voice question color leaves. No package release/version bump.

Reference is the updated local Claude shared theme, with immutable hashes in reference.json.
Current remote A2/B1/trial content could not be fetched, so no remote render claim is made. Small
pink text uses #350A17 soft fill in place of #3A0F1C for AA contrast. Inverse callouts are white per
the reference, while the enclosing page and cards remain black/graphite.

Focused group 1: typecheck; existing fields/choice/quiz/dialogue/voice plus provider regression
(20 cases; 18 passed initially, two resource timeouts passed in isolation); six Storybook a11y cases
(five complete lessons plus dark controls); library declarations and intentional API snapshot
(168 values/267 types/561 declarations). No full validate or broad suite run locally.

Group 2: pages.json records 255 paired page/viewport comparisons, exact inventories26/17/17/17/8,
1280x800,1280x620,390x844. All dark roots, unchanged OS preference behavior, no missing images,
page errors or horizontal overflow. An initial harness changed only the hash and reused A1;
those captures were discarded and all canonical navigations reloaded before the valid run.
Individual pairs and desktop/mobile overview sheets are in .github/evidence/material-dark.

states.json records15 paired important states: B2 grammar/expression reveal and unlocked support,
wrong/correct quizzes, role notes/completion, global notes/focus, phone support and native second
playback transcript. All passed focused axe color contrast. Phone contact foreground/background are
byte-equivalent computed colors across before/after. Native audio was not mocked. Initial harness
failures were locator/speed assumptions; corrected to dynamic reveal locators and supported1/.75
rates. Seven successful desktop states were retained, then failed native/mobile scope resumed.

Group 3: clean neutral producer build and Teacher adoption follow the source commit. Human visual
review remains pending. No target branch merge or production action is authorized by this change.

The separate A1 teacher-notes window also receives scoped dark foreground/background and inherited headings; its focused popup contrast proof is in popup.json. The other lesson notes remain in the deck. Targeted lint/format, final typecheck and DarkControls a11y passed after correcting the selected story prop to aria-pressed.
