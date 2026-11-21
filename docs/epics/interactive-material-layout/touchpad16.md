# Touchpad response and named scene targets

The user reports that keyboard navigation works while small touchpad gestures require repeated
attempts. The wheel handler fixed a whole burst as horizontal/native from its first packet. A tiny
incidental sideways packet could therefore reject all later vertical packets until the idle boundary.
It now commits only on the first vertical packet, without requiring a minimum amplitude. The existing
one-page-per-burst protection, momentum boundary, inner-page scrolling and keyboard behavior remain.
The first-page control from the preceding component delivery is included in the same exported source.
The owner performs functional and visual evaluation; no tests, simulations or browser sessions ran.

For the forthcoming A2 picture talk, SceneExplorer adds the optional labelVisibility="always".
Its existing responsive default remains. This keeps required character names as clear HTML labels
on compact frames rather than baking text into an image or replacing names with dots. The A2
reconstruction itself is still private and is not included in this export.

The optional label prop is accepted as an additive contract; package declarations and API report are
regenerated before export. Publish the combined shared changes once to staging and all maintained
material consumers, originals and UX Lab. No npm release, merge or production publication is requested.

Visual gate review: pending human
