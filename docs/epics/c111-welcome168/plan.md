# C1.11 — new welcome-session roleplay168

Scope: replace `s_personal` with a new communicative task. The owner rejected further repairs to the quick-reply scenario. Its small ambiguity did not justify a whole application exercise.

## New activity

**Plan a welcome session together**

The learner and Teacher are co-organisers. Their client wants new colleagues to meet the team, receive a short project overview, and avoid compulsory speaking in front of the whole room. These three needs stay visible in the native reference panel.

Teacher proposes whole-room introductions, asks how to explain the project without a lecture, and requests a proposal to take back to the client. The learner reframes the purpose, develops a concrete activity, and summarises/checks the plan. Other coherent proposals are valid; pairs and small groups are optional language examples, not a single answer key.

This practises the lesson’s reformulation and shared-understanding goal through a concrete decision, rather than repeating an isolated ambiguity. Three meaningful oral exchanges provide six turns. The existing bulb reveals a useful model for each response. Planning time is four minutes instead of two.

## Implementation and preservation

- Reuse CourseActivity, KeyValueList and MaterialQuestions with the existing theme, two-column layout and participant context.
- No new component, public API, controls, media, fictional named character or recording.
- Page/question IDs and lesson order are preserved. The readings, recorded model, grammar, listening and other application pages are unchanged; this request replaces the identified exercise, not the whole C1.11 lesson.
- Guideline168 records the need to reconsider the activity design when repeated copy repairs fail and to give application tasks a concrete communicative outcome.

## Verification

- Focused authorship check passed: restoring only `s_personal` data and its title/instruction/minutes makes the lesson identical to baseline c688836a43f1a9cb27b822f376a420acb342d9b6. Three reference needs, three unchanged question IDs, no quick-reply content in the new activity.
- Browser check: full initial view and all three revealed hints at 1280×720; initial view at the real 572×630 preview. Default state remains open in the owner’s tab. No viewport overrides, playback, package builds, broad suites or deployments.
- Existing theme/component checks remain relevant; this delivery changes only authored content. It does not assert teacher/learner usability acceptance.
- Before images are reused byte-for-byte from the exact167 source revision. The new initial, full-help and narrow screenshots show the actual local page.

Feature PR70 only; no merge or publication.

Visual gate review: pending human
