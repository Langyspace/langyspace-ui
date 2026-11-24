# Evidence

Before: live Teacher neutral c44dd171e1593cfd0dbe38b3841e10967511594e, read-only, matching route/theme/viewport. After: feat/influencer88 at the same viewports.

Desktop 1440×900 and narrow 390×844: bedtime listening; closing initial state. Narrow listening intentionally stacks and remains scrollable for readable questions; no horizontal overflow. Closing stays within the viewport and selects one of three devices. Header and phones share the page grid.

Native playback/interaction additionally checked in both Chromium/WebKit at both widths, inside a same-origin Teacher-style iframe, using the existing strict teacher bridge. Teacher name/photo replacement was verified with the actual supplied current profile fixture; it is not persisted in source or query. The four runs passed with no page errors: L.1 time advances, pause/resume, page-leave stop, flashcard flip/advance, shadowing play/stop and selecting the messaging device.

25 focused tests, typecheck, library build and public API check passed. No media regenerated. No source/UI/receipt in the paused quiz worktree was modified. Human visual/listening acceptance is pending.
