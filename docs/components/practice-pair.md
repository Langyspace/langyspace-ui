# PracticePair

Two practice previews use the existing MobileFrame chrome and a single responsive rule.
`items` is a tuple of two `{ id, label, content }` slots. Wide containers show both phones;
narrow containers offer an accessible SegmentedControl and preserve a readable phone size.
`activeId` / `onActiveIdChange` supports controlled selection and consumer-owned audio stopping.

The component owns presentation only. Consumers own content, routing, media, authentication and
progress. It never reports simulated completion. MobileFrame's default size is unchanged;
`size="compact"` applies the smaller paired presentation bound.

ShadowingActivePhrase accepts optional `speaker: { name, imageUrl?, accentLabel? }`, rendered
through the existing circular Avatar with the same name/description recipe. Omit the speaker on
legacy phrases. The consumer resolves the phrase speaker and public media URL.
