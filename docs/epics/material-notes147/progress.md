# Progress

Implemented: header ActionMenu + Avatar (photo/initial), authenticated host-owned options with opaque tokens; selection is transient. Notes is writable locally persisted scratch without selection; next scheduled future lesson otherwise. Reused private attendance note commands and 900ms autosave, including clearing. Bound drafts flush before target changes, failures keep old text, stale responses/actions are ignored. Selecting a student without a next lesson keeps scratch and provides a menu status.

Evidence: UI ActionMenu/NotesWindow 17 tests pass; Teacher resolver/popup/editor 6 tests pass; selection hook + popup 3 tests pass; corrected transport retains the existing `{model}` envelope and popup 2 tests rerun pass. Teacher and UI typechecks pass; UI API report passes (184 values / 307 types / 654 declarations). Narrow-width override did not affect the material tab in this native browser session (DOM remained 1280px); do not claim 390px coverage.

Native local fixture reviewed: open scratch, edit, select Ana, edit bound note, clear selection restores scratch, reselect Ana reloads bound note, Clara without a next lesson stays scratch. Header menu and Notes screenshots: outputs/notes147/header-selection.jpg and notes-scratch.jpg in the task workspace. No production/student note writes.

Local fixture: UI `.local/notes147/server.mjs`, http://127.0.0.1:8897/notes-review. Actual source components; auth/student/lesson/note ports are in-memory fixtures and explicitly labeled. This is not logged-in backend verification. Existing 8851 source preview remains available.

Prepared for a feature-branch draft review. Comparable before screenshots and a logged-in portal walkthrough are still pending; the PR remains draft. Teacher feature must consume the matching new neutral material export before a deployment; current static published assets are intentionally unchanged. No package release, neutral export, merge or deployment was triggered by this change.

Visual gate review: pending human

Copy refinement: the clear-selection menu item now reads Rascunho. Local fixture names are Ana, Bia and Clara, without test-case suffixes; the surrounding fixture notice continues to identify fictitious data. Verified in the native menu; copy-only change, no behavioral test repeated.

## Refinement149: persistent scratch and quieter editor

Removed the explanatory scratch status and its empty row. Rascunho and bound notes have different placeholders through the existing SlideNotesWindow. All nine maintained Notes hook consumers pass their stable page ID; the trusted popup validates draftKey and stores scratch separately from attendance drafts, scoped by account and exercise. Clearing removes only that scratch key; storage errors remain visible instead of claiming a successful save. Existing bound-note save/flush/conflict behavior is unchanged.

Evidence149: six focused Teacher popup/storage tests and four UI NotesWindow tests passed; both typechecks passed; public API passed with654 declarations. Native fixture: scratch placeholder, write -> reload -> exact text restored, select Ana -> student placeholder, clear selection -> scratch restored. Only the inserted test text was cleared afterward. No backend note writes; no deploy. New screenshots are scratch-storage149.jpg and student-placeholder149.jpg in outputs/notes147.
