# Technical plan

Shared UI: extend ActionMenu with optional trigger content and compose existing Avatar. A material provider receives minimal selector options (opaque tokens/name/photo) from a strict parent/key/SHA bridge and requests selection by token. MaterialSlideDeck includes it globally. Notes preview uses localStorage keyed by material/page. Teacher uses a separate localStorage namespace scoped to origin, authenticated uid, teacherId and material/page. The draftKey URL parameter contains only the material/page identifier; it never contains note text or a student ID. Popup context changes preserve the corresponding key in its URL so reload restores the correct exercise. Open popup follows capability target changes.

Teacher: own student queries and next-lesson resolution in a hook/service; keep student IDs in host memory. Extend existing learner message with selector state; selected photo identity still uses the old You fallback when absent. Send a canonical Notes target only after resolving the selected student. Popup never auto-selects a current lesson and does not list choices; scratchpad and bound note state remain separate. Retain legacy explicit lesson routes.

Validation: focused menu/preview and authenticated-host/popup tests with sanitized fixtures. Typecheck + deliberate API snapshot update for optional trigger prop. Existing editor conflict tests reused. No live note writes. Full CI/visual approval stay asynchronous.

Reviewed: PM favors a single header control; technical review keeps services in Teacher; QA focuses on late saves, selection changes, group/canceled/recurring and no-next-lesson cases. No new backend. The product owner explicitly requested localStorage persistence in refinement149.
