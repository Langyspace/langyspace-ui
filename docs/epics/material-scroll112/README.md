# Material navigation — regression112

Baseline: 943a20be9236be8e59ce0557a7666e392d6a0355. Shared owner: SlideDeck/useSlideGestures/useSlideNavigation. Indirect rendered impact (interaction/focus), unchanged lesson copy and presentation styling. Feature branch: fix/material-scroll112; local source preview/draft PR only.

## Demonstrated cause

The old wheelAdvanced gate rearmed only on direction reversal or 120ms without wheel events. A three-wave stream at 16ms packet intervals advanced exactly once: cover → s_greetings, scrollTop 720. The animation finished and movement target cleared while later waves were still ignored. This confirms the quiet-only gate as the cause of this reproduced lock; it does not implicate animation readiness, audio or content height. Temporary DEV numeric event logging captured this sequence and was removed before final source.

Browser input fixture: [1,8,25,60,45,25,12,5,2,1] three times, wheel timestamps spaced 16ms. Input.dispatchMouseEvent sends ordinary browser wheel input with controlled timestamps; this is a reproducible browser replay, not a physical human trackpad calibration. Before log and after result are retained with the delivery.

## Correction

- One testable wheel-intent owner. Fresh input responds immediately without accumulating an absolute strength threshold. Decay followed by two rising packets recognizes another drive inside a continuous momentum stream. Initial acceleration, decaying tails, equal high-frequency packets and isolated spikes stay grouped. Discrete wheel units and slower equal integer pixel ticks remain responsive.
- One scoped native capture listener on the deck handles viewport and header. An unrelated overlay editor is not captured. Continuous mode, pinch/modifier/horizontal gestures retain native behavior.
- Accepted steps and the Previous button use the same logical destination during animations, without a transition lock or queue. Rapid Previous clicks have their own regression case. Removed the second wheel/touch listener that cleared requested navigation and unused movement revision bookkeeping.
- Departing-page fields release focus to the viewport while their values remain mounted. Current-field keyboard editing and header/overlay focus retain their own semantics.
- No per-material patch, content rewrite, audio regeneration, identity/Notes contract change or global document listener.

## Verification

- 41 focused tests passed across wheel intent, gestures, navigation and fitting. Includes the exact no-quiet regression at three magnitude scales, momentum spikes, discrete units, non-cancelable packets, reversed input, pending animation, header/overlay ownership, retained input values and keyboard continuity. Existing continuous/touch/reduced-motion/controlled-echo/resize cases passed.

- Source TypeScript and declaration/API checks passed: 184 public values, 307 types; 648 declarations. Public SlideDeck props are unchanged; only internal gesture types/helper declarations differ.
- Same browser three-wave replay now reaches s_visual1 at 2160: exactly three pages.
- Whole A1.01 browser round trip: 26 pages, 25 forward + 25 backward, 50 expected/observed IDs matched. Input was sent over the header so embedded exercises retained their own controls. Full event replay and assertions are in browser-round-trip.json.

The browser does not provide a portable public finger-up/momentum phase through WheelEvent. Relative drive recognition and mouse classification are explicit heuristics with regression coverage, not a guarantee for every hardware trace. [W3C Wheel Events interface](https://www.w3.org/TR/pointerevents4/#wheel-events-and-interfaces) documents the device-dependent deltas/units. A new device trace that fails belongs in this fixture suite; do not restore a quiet-only lock or add another lesson handler. Human physical-device review remains pending. Cross-origin embedded player controls retain their browser ownership.

No package, Teacher adoption, staging or production deploy is included. Existing pending source branches are inherited, not merged. Unrelated README107 and A101.stories.tsx changes are preserved outside the commit.

Manual hardware fixture: `Slide/SlideDeck/RepeatedPageGestures`. Repeat the same-direction trackpad passes, reverse, and combine arrows with wheel navigation. The automated regression uses the controlled packet timestamps above; record a failing hardware stream rather than tuning a separate page handler.

Browser field check: after typing Brazil in the personal conversation and advancing, the next page was s_introducing111, focus was on the viewport, and the hidden previous field still contained Brazil.

Validation reuse: the 40-case navigation/gesture/fit run remained valid; after unifying rapid Previous clicks, only the affected SlideDeck file was rerun (17/17). Total distinct focused cases: 41.
