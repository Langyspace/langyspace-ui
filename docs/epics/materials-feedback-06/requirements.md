# Requirements

- Reuse semantic components, theme tokens, fonts, native audio and existing exercise IDs/answers.
- Keep model playback beside its title; phase changes stop the queue and returning never autoplays.
- Preserve the reviewed progressive guided modes, copy, scene targets and native long-page reading.
- Launch Notes synchronously from its button in a named popup; blocked windows show an honest
  warning. Preview drafts are explicitly local. The presentation never mounts a private editor.
- SlideNotesWindow is controlled and independent of auth, storage, lesson IDs, URLs and fetching.
  Preserve the existing SlideNotes API. Add only SlideNotesWindow and SlideNotesWindowProps publicly.
- Keep context/status/errors readable, readonly/saving truthful, focus visible, long choices wrapped,
  editor usable in short/narrow windows, and keyboard interaction outside the presentation deck.
- Teacher owns the protected URL and dedicated editor frame; same-origin capability envelopes are
  source/version/window/material pinned. Only the dedicated Notes frame receives private text.
- Preserve legacy per-material drafts, the approved 70 model clips and 36 images. Add only the five
  approved vocabulary MP3 from the reviewed handoff; no regeneration in this integration.
- Keep visual review pending and feature PR draft until the current revision has human review and
  comparable consumer evidence. A source push or an export is not a deployment receipt.
