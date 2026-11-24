# Lesson openings and closing pages58

Direct visual change to the first and last pages of all14 current staging materials. Reuse each approved cover, retain existing review prompts to its right, and add a cover-only opening where the first page is vocabulary (A101/A201). Regular lessons end with their existing practice tasks inside a reusable mobile frame. Trials retain the recap and add a final direction to speak with the school team about enrolment. No invented links, prices, account writes or new media.

System: existing dark material theme, Space Grotesk titles/Montserrat body, shared SlidePage layout and spacing. Cover and review stack at the existing compact breakpoint. Add an opt-in cover slot to SlidePage so old layouts remain unchanged. Reusable MobileFrame lives in src/components; consumers own practice data and enrolment copy. Short, static practice lists, no fake controls or internal scrollbars.

Tasks:
1. Canonical cover slot + mobile frame with stories, API/docs and focused contract coverage.
2. Shared material compositions; adopt openings and endings in all14 lessons. Keep audio/dialogue/intermediate activities and existing IDs; add2 cover IDs and3 trial closing IDs.
3. Smallest useful focused tests and package/API build; committed neutral export, guarded Teacher adoption/build and verified Hosting staging publication.

Human visual review owns final fit/proportions. No browser/screenshots/playback/broad QA or production, consistent with the current requested workflow. Feature PRs remain draft.

Implementation complete:14 cover openings (12 with review,2 cover-only),11 regular mobile practice endings and3 additional trial enrolment endings. Existing recap/vocabulary/intermediate IDs retained;217 pages by source composition. Catalog/covers/media sources unchanged. Regular endings use the existing split layout so the phone sits beside its heading, rather than beneath another full-height block.

Validation: package/declaration build and accepted593-declaration API snapshot passed. Focused cover/frame/manifest/material checks cover all14 cover bindings, native content, split semantics, identity support and all3 enrolment directions.48 unique relevant cases passed across the focused run/rechecks. The2 existing TrialB2 Notes tests still target the older exact name “Notes” and inline-notes UI; current unchanged trigger is “Notes, abrir em uma janela separada”. Their failure is recorded, not presented as a new runtime defect or fixed by changing the protected Notes behavior. Source preservation receipt retains the exact Notes, gestures, identity and dialogue blobs. No browser/render/playback QA. Neutral export and staging delivery pending; human review remains pending.
