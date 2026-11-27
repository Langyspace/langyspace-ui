# Focused validation and limits

- Source/public-component checkpoint before the account-narrative revision: typecheck passed;9 scoped tests passed; public API check passed (182 values,301 types,635 declarations). Legacy default interview and new guided transport were covered. An earlier unfiltered UXLab run also exposed7 expectations in unrelated grammar/gap/timer tests; those were not repaired in this lesson task.
- Current account-narrative authorship check passed:11 pages,6 introductory vocabulary items,6 planning teammate turns,4 review presentations,40 exact active audio bindings; no active Save draft text; all65 previous catalog entries unchanged; only the66th lesson added. Fields are read-only and no classroom message composer remains. Owen/Ruby source portraits are distinct and were visually inspected as local files.
- The40 active media files exist with verified source hashes and exact recording/text bindings. New account narrative changes13 speech IDs and one350ms word/example composite, preserving historical receipts. This is provider/file metadata, not perceptual approval.
- Local preview returned HTTP200 after the final source changes. Earlier browser observations covered the shared-screen review and roster, but the in-app browser became unavailable before a final account-narrative screenshot. No current visual or listening approval claimed.
- Final full typecheck was interrupted when it did not return under local host load. The updated scoped test attempt hit test/worker timeouts, including in the previously passing transport test; a single-worker retry also timed out and was stopped. No test assertion or timeout was weakened. Current rewritten account prototype still needs a completed executable verification when the environment recovers; do not cite the earlier9-test result as validation of its new flow.
- No catalog-wide visual matrix, package release, source export, staging/production Hosting, backend action or Student activity publication in95. Local review is the active user-requested phase.

Visual gate review: pending human

25 November, caption-only correction: GuidedCall.test.tsx passed2/2 in2.28s. Live local browser confirmed the single-speaker caption is absolutely positioned inside the video stage, fits its bounds and does not contribute to layout height (stage538×302.625, preserving16:9). Existing silent learner cue remained visible. This focused result does not replace the previously unfinished account-prototype validation.

25 November, consolidated caption/player check:5 focused tests passed across GuidedCall and DevTeamMeeting (3.45s), including simultaneous teammate/learner text, silent learner hints, five-person roster and the read-only Login/recovery prototype flow. Source declaration emission and refreshed public API report passed (182 values,301 types,635 declarations). The local browser confirmed four stable media controls, hint immediately after Next and no routine Listen/Your turn/Press play/Continue notice. This supersedes the earlier unfinished focused account-prototype check; no broad UI suite or final catalog render was run.

## 25 November — people-only grid caption overlay

Moved the planning captions into MeetingFrame’s video stage, reusing the existing two-caption stack and keeping shared-screen/spotlight behavior. Added desktop/narrow grid-caption stories. Focused MeetingFrame + DevTeamMeeting tests: 10 passed across 2 files (planning-overlay-tests.log). Local browser showed both captions over the participant images, with the learner lower/right and no external caption rows. No public API change, CI or deploy triggered. Visual review remains with the owner.

## Shared presentation and progressive support

Native shared window now identifies the presenter, with participants in a vertical column and captions below the application inside the same window. Source declarations and additive API snapshot passed (182 values, 301 types, 635 declarations). Shared-presentation tests: 10 passed; final progressive-support interaction: 3 passed, including first hint / second complete example / third restore and reset on navigation. Authorship check: all 12 directed learner turns have complete examples without trailing periods. Browser inspection demonstrated vertical participants and captions within the shared window; a remaining height overflow prompted compact action-row and subtitle refinements. The owner then navigated to Access while reviewing; the final support cycle is verified by the focused interaction test, without claiming a new full-page screenshot or universal fit. No CI/deploy triggered.

## Standard light monitor validation

Focused browser review of Access confirmed a light screen with dark text, a 4:3 monitor and the conversation still beside it. Repository/Daily/Transfer share one theme/aspect composition. Added regular/narrow light-monitor stories; existing defaults remain unmodified. Source declarations/API checked via standard-monitor logs; no broad suite, CI or deploy triggered. Owner visual review remains pending.

## Shared portrait framing

Source declarations and API snapshot passed in shared-portraits logs. At the existing 1067px browser viewport, DOM inspection found all five review images using contain, a capped128px tile, and non-overlapping name/photo columns. The owner moved to New situation during review; the final screenshot therefore belongs to that page, not a claimed screenshot approval of the updated review. Shared-caption story is tagged as a layout boundary. No broad suite or deployment.

## Centered portraits, original name badges

At1067px, the actual review page showed all five centered portraits and original corner badges. Computed styles confirmed contain +50%/50% and absolute name positioning for every photo. Source declarations/API passed in centered-portraits logs. No extra suite, CI or deploy.

## Simplified feedback activity

Focused live DOM check: no Mobile login screen or read-only form fields on Feedback; one existing voice-note play control and the new oral-response cue. Reused existing audio/player evidence; no new media, test suite, API change, CI or deploy.

## Simplified work screens — final contextual version

TaskBoard + component manifest + existing meeting tests passed12 cases across3 files. After restoring the frames/opening prompt, reran only the affected DevTeamMeeting support suite:4passed. Source declarations and additive public API passed in contextual-work logs. Browser DOM confirmed Access has an8px native monitor border,4:3 ratio, white canvas, generated image, project, email, opening prompt and support control; Daily has3 task columns; blocker has Ready/Blocked and1support control. All3 page heights were775px at a775px viewport. Owner kept navigating during review, so no final screenshot approval is claimed. No broad suite, audio generation/playback audit, CI, staging or production deployment.

## Teacher/support/alignment refinement

Focused interaction suite:5tests passed, including each second daily-support click showing a complete model and ordered progression/reset; default Teacher label; no learner audio. Final source declarations and public API passed in teacher-support-refinement logs. An initial generic Stack alignment extension caused a declaration error in a polymorphic consumer; that extension was removed and centering moved into the screen owner before the final successful check. Browser DOM confirmed padlock-only import, both error texts centered, Teacher present/Your teacher absent on Access, explicit openings on Feedback/Blocker, and center alignment on all4 paired compositions. The owner kept reviewing other pages; no current authenticated-profile or new full-layout screenshot approval claimed. No broad catalog suite, extra audio, CI or deploy.
## Top-aligned conversations and inline help

Source declaration emission completed with exit 0 in top-inline-support-declarations-final.log. Focused tests completed: DevTeamMeeting 5/5 passed, plus four shared exercise tests (including independent dialogue audio/translation callbacks); three vocabulary visibility assertions in ExerciseComponents failed on hidden small labels. Those vocabulary tests do not exercise the changed dialogue/voice-message paths, and this turn does not claim a green full exercise file or fix their separate visibility contract. No assertion was weakened.

Live local DOM confirmed align-items:start for Access, Daily, Feedback and Blocker, with each support group inside its final learner bubble. On visible Access, clicking hint and then model replaced the cue in place and retained the icon inside that bubble. Screenshot confirmed the conversation starts at the monitor’s top. Existing meeting transport remains unchanged. No broad suite, CI, staging or production deployment.
## POV vocabulary scene

One focused test passed (toolkit-pov-tests.log): all six targets retain the intended label/example, resolve to the existing word-plus-example recordings, replay, dismiss and preserve visited labels. No new recording or public component/API change. Existing SceneExplorer owns geometry, callouts and controls; no lesson CSS.

Live local UI displayed the generated scene and six dots. Task and Deadline clicks opened the corresponding native callout and example; no audio error was displayed during those checks. The owner then navigated to Homework, so no final screenshot approval of Toolkit is claimed. The page measured775px at a775px viewport; no broad catalog matrix or perceptual audio review. The preview server was restarted in session36662 after Vite retained an earlier missing-asset import error; the final scene import loaded successfully. CI and deploy not triggered.

## Column footer clarification and homework provisioning

Six focused tests passed across DevTeamMeeting and DevToolkit (footer-homework-tests.log), preserving ordered hint/model replacement, silent learner turns and exact vocabulary audio mapping. An initial declaration check found a missing styled-components css import; corrected, final declaration emission exited0. The regenerated public API report passed (183values/305types/638declarations).

Local DOM confirmed all4 paired activity columns use stretch, every support action is outside bubbles, and each footer has0px bottom gap and0px horizontal center difference against its column. On Access, the bulb changed the cue to its hint while remaining at the column bottom. Owner viewport/navigation shifted during review; no universal-fit or final screenshot approval claimed. Native Homework links resolve to the two exact verified staging activity IDs.

Data publication is separate from lesson Hosting: saveSchoolActivity acknowledged both activities; field-level Firestore readbacks match their payloads; all19 objects match exact MD5/size/generation metadata. See homework/publication-receipt.json. No production writes, backend deploy, real student progress, external messages, extra media generation, CI or Hosting deploy.

## Twenty-card minimum and expansion inventory

DevHomework passed2 focused tests:minimum20 unique concepts, exact word/example recording texts and translations, staging-only destinations, and30 complete expansion proposals with distinct additions. New audio manifest has28 bindings:2 exact Frontend label reuses +26 generated missing clips, no retries/failures; raw provider bytes/request IDs and hashes retained. No perceptual listening claim. Original40 lesson recordings unchanged.

Staging save produced20 cards; its first strict readback detected the backend’s documented lowercase vocabulary-index normalization for API. Normalized only the index payload, then reconciled read-only:every field matches, with20 cards and unchanged6-phrase shadowing. No duplicate save or uncertain-write retry. All47 media objects verified by exact metadata. Read-only production inventory independently confirmed30 smaller course decks. Other expansions remain planned, with no production data/Hosting/backend change.

## Consolidated material authoring guide

Documentation-only update:added the111-line authoring/launch playbook and linked it from the central guide, agent entry point and developer series. Four local document links resolved; cited component props were checked against their current type declarations. Updated the current lesson table/plan to remove stale Save draft and six-card status descriptions, preserving chronological review history. No executable suite, media, product UI, CI or publication repeated for this documentation change.
