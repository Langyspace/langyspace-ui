# Progress

Implemented: header ActionMenu + Avatar (photo/initial), authenticated host-owned options with opaque tokens; selection is transient. Notes is writable memory-only scratch without selection; next scheduled future lesson otherwise. Reused private attendance note commands and 900ms autosave, including clearing. Bound drafts flush before target changes, failures keep old text, stale responses/actions are ignored. Selecting a student without a next lesson keeps scratch and provides a menu status.

Evidence: UI ActionMenu/NotesWindow 17 tests pass; Teacher resolver/popup/editor 6 tests pass; selection hook + popup 3 tests pass; corrected transport retains the existing `{model}` envelope and popup 2 tests rerun pass. Teacher and UI typechecks pass; UI API report passes (184 values / 307 types / 654 declarations). Narrow-width override did not affect the material tab in this native browser session (DOM remained 1280px); do not claim 390px coverage.

Native local fixture reviewed: open scratch, edit, select Ana, edit bound note, clear selection restores scratch, reselect Ana reloads bound note, Clara without a next lesson stays scratch. Header menu and Notes screenshots: outputs/notes147/header-selection.jpg and notes-scratch.jpg in the task workspace. No production/student note writes.

Local fixture: UI `.local/notes147/server.mjs`, http://127.0.0.1:8897/notes-review. Actual source components; auth/student/lesson/note ports are in-memory fixtures and explicitly labeled. This is not logged-in backend verification. Existing 8851 source preview remains available.

Prepared for a feature-branch draft review. Comparable before screenshots and a logged-in portal walkthrough are still pending; the PR remains draft. Teacher feature must consume the matching new neutral material export before a deployment; current static published assets are intentionally unchanged. No package release, neutral export, merge or deployment was triggered by this change.

Visual gate review: pending human
