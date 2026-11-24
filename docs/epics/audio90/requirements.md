# Requirements

- Valid clips must recover once from a temporary network/decode/source-load failure without asking the learner to click again
- Persistent failure remains an honest error; permission denial and deliberate cancellation are not blindly retried
- Old play promises/errors cannot affect a newer request, paused player, changed page or unmounted owner
- Release prepared sources no longer owned by an active page; do not retain old decoders indefinitely
- Preserve play/pause/resume, line sequencing, current-word marking and exact IDs/text/bytes across materials
- Verify the reported six clips, page reentry/rapid switching, transient recovery and permanent failure in real Chromium/WebKit
