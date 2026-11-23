# PictureStrip

Use `PictureStrip` for two or three visual prompts with captions that need to be read together. The consumer owns the situation, source facts and optional response bubbles. Captions support authored line breaks, including a consistent set of comparison criteria.

Each item provides `id`, `src`, `alt` and `caption`. Optional `region` describes a cell in an unchanged atlas: zero-based `column` and `row`, total `columns` and `rows`, and the aspect ratio of the full source. The shared image renderer uses a CSS viewport; it does not crop, overwrite or generate a bitmap. Regions are supplied from known source geometry, not inferred from faces.

For picture placement use `ImageSortBoard`, with its optional `layout="sequence"` for a bank above numbered stages. Assignment and any capacity or swapping policy remain controlled by the consumer. Default categorisation stays unchanged. Picture items also accept `imageRegion` with the same geometry.

Stories cover paired captions and a narrow layout. Native course evidence includes an ordered three-picture story, a weekend album and two simultaneous apartment comparisons.
