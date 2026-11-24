# Technical plan

Baseline UI865945ea / Teacher5ec24171 are published in staging. Fresh native playback of the six reported recordings passes in Chromium/WebKit; all six files match provenance and ffprobe MP3 metadata. This does not disprove the user's intermittent failure. A single HTTP503 during the in-flight preload reproduces the same banner in both engines (one request, no recovery).

The prepared pool retains sources when a page supplies an empty list. Add explicit ownership reconciliation and gate scene/conversation preparation by active state. Add a single private playPreparedAudio transport for one bounded reload/retry, latest-call and request ownership guards, and ignored intentional AbortError. Replace duplicated play/catch failure handling in the prepared recording adapters and routine homework. Keep persistent errors visible and never synthesize fallback speech.

Tests cover native-like promise/event ordering and ownership. Browser evidence compares the currently served baseline with the compiled correction, including native decode, retry counts, navigation and cancellation. Export a clean neutral material artifact and preserve catalog/covers/media hashes. Existing canonical Hosting coordinator remains the only publisher.
