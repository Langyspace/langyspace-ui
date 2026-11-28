# C1.11 — clarify the request

Scope: C1.11 `s_personal` only; surrounding pages, media and components are unchanged.

## Problem and resulting practice

The reference reduced two messages to abstract labels, supplied the potential agreement, and asked generic questions about “the other person”. This made the learner reconstruct the situation from earlier reading pages.

The same two positions now remain visible as short messages on the left. On the right, Teacher plays the colleague checking the figures; the learner coordinates the request. Three exchanges clarify what is needed immediately, agree a checked-answer deadline, and handle a delay. A single existing bulb reveals optional phrasing in order and resets after the third hint. No fixed correct answer is assigned.

## Implementation

- Reuse `CourseActivity`, `KeyValueList` and `MaterialQuestions`; no new component or public API.
- Keep the existing material palette, typography, two-column recipe, participant identities and canonical help control.
- Keep all three question IDs and the page ID, lesson order, recordings, and other activity data.
- Update the central guideline: essential references stay visible with the practice, roles are explicit, and the reference does not give away the resolution.

## Validation and evidence

- Authorship check: after restoring only the targeted page fields and activity, the full lesson equals baseline `b2ee5e305c0db19b5f6eae78a4d138dbbddd2585`; media/other pages unchanged.
- Focused browser check at 1280×720: both messages and all three exchanges visible in dark theme; all three hints revealed and reset; all revealed hints also inspected in light theme. No internal information selector or return to a previous page is needed.
- Click verification uses actual viewport input. The initial locator-driven check scrolled the deck while bringing the bulb into view; native viewport clicks verified the actual interaction without moving to another slide. Hint copy was shortened before final screenshots.
- `git diff --check` passed. No broad suite, package build, media regeneration, merge or deploy.
- Evidence: `before-dark.jpg`, `after-dark.jpg`, `after-hints.jpg`, `after-light-hints.jpg`.
- Narrow/mobile layouts were not re-audited for this content-only change; shared layout behavior is unchanged.

Visual gate review: pending human
