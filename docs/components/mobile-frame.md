# MobileFrame

Content-sized mobile preview for prepared practice plans or other consumer-owned content. It uses the shared device border/radius and the current presentation theme. `title` is an optional ReactNode; native section attributes, children and ref are forwarded. The frame adds only decorative camera/home indicators, with no fake app controls, clipped fixed-height content or internal scroll container.

Maximum width is22rem, reduced with available presentation height to keep a portrait silhouette. Its minimum height uses the shared32rem presentation bound and74cqh; long content grows normally rather than hiding tasks. Reuse genuine links only when their destination exists. Consumers own the app name, practice copy, routes and data. Material homework is a presentation preview, not a saved Student task or a newly provisioned activity. Material closing pages place their heading beside the phone, using SlidePage’s existing split layout.


`screenMode="application"` opts into a light 360×640 local application viewport. It hosts the existing Student exercise components with their actual mobile media queries and current font faces, scaled inside the canonical phone frame. Its content does not inherit the presentation canvas. The default `content` mode is unchanged. `DeviceGallery` places two/three complete frames under a shared page heading and selects one on narrow screens. Routing, authentication and saved progress remain consumer responsibilities.
