# Influencer listening and homework

Direct visual impact, based on published UI c44dd171e1593cfd0dbe38b3841e10967511594e. Unfinished quiz edits remain isolated in feat/homework85.

Requirements: centre bedtime phone/comprehension in two balanced columns; title/instruction above three homework phones; reuse Student Flashcard/Shadowing components and approved routine recordings; WhatsApp assignment uses authenticated teacher identity. Preserve other slides/materials and default component variants.

Implementation: opt-in MobileFrame application viewport (light canvas, actual 360×640 mobile media queries, current fonts); DeviceGallery arranges native phones and selects one on narrow screens. Same Student visual owners are composed with 24 routine vocabulary items and 24 existing dialogue clips. No SRS writes, fabricated completion, microphone access or message sending. No activity URL is shown until a Student destination is published and verified.

Acceptance: three centred phones on desktop; all reachable on narrow screens; local flip/audio/repetition controls work; audio cancels on navigation/activity switch; teacher photo/fallback comes from existing strict bridge; bedtime title/body share the two-column width.

Plan: implement → focused type/component checks → matching before/after desktop/narrow evidence → feature PR. Reuse valid media; no generation. Staging publication remains a separate source-qualified step, never inferred from a local build.
