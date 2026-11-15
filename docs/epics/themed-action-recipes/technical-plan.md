# Technical plan

Source base: UI4.1 main ee0b4ff, including fef3e829 and final 0d1bfb8 release/check fixes. It is preserved
in feature ancestry. The other migration is actively publishing its own approved batch; do not edit
its checkout or infer publication permission for this candidate.

Layers: source primitives and page-specific values belong in the product theme. Shared semantic
roles and component tokens are consumed inside existing recipes. `resolveTheme` lives under
foundations and supplies the library fallback for standalone usage; products provide a complete
createTheme result. React context crosses the existing portal without a second style transport.

Action recipes honor primary/secondary/brand borders and hover color, tertiary tokens, typography,
spacing, focus and motion. `paddingY` defaults to 0px; the source product supplies actual padding,
so line boxes and borders determine height rather than a guessed fractional pixel. IconButton keeps
its independent square sizes.control contract. Dialog owns its token-based CSS and optional
closeIcon content slot. Required props and public export names are unchanged. These additive theme
fields and optional slot are deliberately reviewed as minor-version work.

Critical review: no page/domain component in UI, no consumer private-selector contract, no default
redesign, no broad suite/release replay. Default and supplied-theme checks plus bounded browser
comparison cover the risk. Generated style provenance and source audit from 4.1 remain enforced.
