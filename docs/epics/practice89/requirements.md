# Requirements

- Flashcard front/back, image fallback, progress, flip, feedback overlay, ratings and responsive spacing have one renderer.
- Shadowing header, phrase stack, identity, translation, repetitions and playback dock have one renderer.
- Consumers inject data/state/actions and keep their existing business controllers. Teacher/material previews do not write Student progress.
- The two lesson phone frames host the same renderer in a mobile viewport. No lesson-specific card/frame CSS overrides.
- Keep defaults compatible for existing low-level library consumers. Loading/empty/completed content remains consumer-owned, inside the shared frame/header.
- Same fixture and viewport must have matching shared geometry in Student, Teacher simulation and lesson frame. Preserve keyboard, focus, media cancellation, narrow/desktop rendering and current SRS behaviour.
