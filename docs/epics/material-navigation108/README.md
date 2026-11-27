# Shared presentation navigation and warm-up fitting

Requested: first-key/first-gesture page steps, no content-scroll phase, consistent full-column warm-up media, full page fitting without clipping.

Owners: ExercisePanel, SlideDeck, useSlideNavigation, useSlideGestures. All maintained materials use MaterialSlideDeck and inherit the changes. Continuous scrolling remains an explicit separate library mode.

Wheel navigation consumes the first nonzero vertical packet, with no strength threshold. One burst advances once; direction reversal or a 120ms quiet interval starts another. Browsers do not expose a portable physical gesture boundary: the quiet interval groups momentum packets, not a minimum strength or wait before the first response.

All four arrows directly step from the logical destination, including during animation. Text editing retains native arrows. Touch keeps tap discrimination. No native inner-scroller handoff occurs in presentation wheel navigation.

The warm-up media container and alternatives share their full column. Images use contain and their complete 3:2 canvas, without cropping. Fixed-height deck pages measure their natural content and apply proportional fitting only when it exceeds the viewport; reveals and viewport resizes remeasure. Presentation phone content grows instead of opening a nested scrolling conversation. Continuous mode and external Notes editors keep their existing behavior.

Dense pages may scale noticeably in short windows; content should still be split when it becomes hard to read. Do not claim a visual audit of every lesson or physically calibrated gesture recognition from unit tests.

Validation and browser samples recorded in the delivery handoff. No product publication or merge is included.

## Verification

- 29 focused tests passed across navigation, gestures, content fitting and vocabulary contracts. The four initially failing legacy assertions were updated for direct page steps and exact Back-button labels; their focused rerun passed
- TypeScript declaration compilation and API snapshot check passed
- Browser samples: 1280×720, 960×540 and 390×844 warm-ups. Media and option widths matched; all three options remained within the viewport. At 960×540 the measured final option ended at 531px and the heading began below the fixed navigation bar
- One Right key advanced Tom → Julia; one browser scroll advanced cover → Greetings. These are browser observations, not a physical-device calibration guarantee
- A1.03 listening: no nested vertical scrollers detected in the rendered activity; phone and Questions remained visible
- The 390px screenshot is complete. Desktop screenshot capture was constrained by the host pane, so the draft review does not claim complete desktop screenshot coverage
- All materials inherit the shared implementation; no lesson text, IDs, recordings, teacher/student identity bridge or Notes storage contract was rewritten

Visual gate review: pending human
