# Material first-page control

The owner requested an upward arrow in the bottom-right corner of every material to return to
the first page. SlideDeck now composes the existing IconButton and navigation hook for this
control. It stays outside the scrolling viewport and uses the existing goToIndex(0) movement,
preserving page state, reduced-motion behavior and focus without scrolling the surrounding portal.
The button is present on multi-page materials, including when the first page itself is scrolled.

The optional firstPageLabel is an additive accessible-label contract. Package declarations and the
API report are regenerated before export; no npm package or PR merge is part of this delivery.
Publish this shared change to staging and all current material consumers/originals and UX Lab.
The new A2.01 content is being authored separately and is not included in this component delivery.
Testing and rendered evaluation remain with Margarida, per her explicit instructions.

Visual gate review: pending human
