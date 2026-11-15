# Styled-components-only authoring

User scope: finish the styling pattern in the UI library and five web consumers before another pattern. All authored presentation uses styled-components. Sass/Less/plain authored CSS, JSX/React inline objects, attrs style objects and direct DOM CSS mutation are removed; generated styled-components output is expected. Preserve public APIs, design, interaction, accessibility and business behavior. No provider or production-data changes.

Impact: direct for shared dynamic presentation and internal overlay/composer behavior; none for new static enforcement. Existing UI4 component contracts remain stable. Source baseline be8a31600a548f6b3fb828c650163341e7d42009. Work is isolated in refactor/styled-only-20261115. No additional worktree, clone or dependency copy.

Root owns Library, shared enforcement and Site/Cupom; bounded workers own Admin, Teacher and Student. The original embedded AI Lab source is another required consumer boundary; it is migrated at its owner then adopted with integrity provenance, never patched as opaque vendor bytes.

Success: zero owned stylesheet/inline/manual CSS authoring violations in all seven source boundaries; a source-aware blocking check in each project; equivalent focused DOM/geometry/interaction evidence; complete source provenance for generated assets. Intentional output style tags are generated through styled-components and are not authored CSS exceptions.
