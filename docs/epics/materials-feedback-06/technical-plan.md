# Technical plan

Adopt only the exact coordinator manifest on ff30, then add the documented evidence paths. Four
composition overlaps (A101/B101/C101/TrialB2) resolve only Notes imports/lifecycle/JSX; model-active,
onModeChange, titles, scenes, copy and approved audio stay intact. No full-tree copy or dependency
update is part of adoption.

The shared popup hook synchronously opens a named window on click. Preview uses an independent
React root and the same SlideNotesWindow, dark theme, GlobalStyles and FontStyles. This keeps React
keyboard events out of the deck. Same-origin embedded previews wait for an explicit trusted host
capability; there is no timeout that guesses whether a Teacher save should become local storage.

Teacher hosts the same neutral bundle with view=notes outside the presentation. The Window accepts
only controlled value/actions/context/status/choices. Ready/state/action envelopes have exact
parent origin/window, producer revision, material key, protocol and context/request revisions. Newer
local typing survives an older host echo. Teacher supplies and refreshes its own lesson URL.

The Window reuses legacy Notes header/editor/actions. The editor has a minimum six-rem token;
choices use max-content grid rows in their own scroll region to preserve multiline labels. The root
can scroll on a short viewport. Readonly disables save/clear; saving disables duplicate submissions
while keeping typing available. Status/error text is programmatically associated with the editor.

The existing public API snapshot changes only one value, one type, three new Window declarations
and index.d.ts. Exact root acceptance is retained with the verification evidence. Do not run blanket
write:api or publish a package for this material-bundle adoption.

After this source is clean/pushed, use the existing producer exporters once for the neutral13 and
portable8. Teacher adopts those pinned outputs with its route/domain delta. The coordinator owns
remote CAS, Functions/Hosting plans, actual staging fixture qualification and later production from
the same verified runtime archive. CI/release status is not inferred from local source evidence.
