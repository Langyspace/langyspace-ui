# MeetingFrame

A static Google Meet-style illustration with two participants and decorative microphone/camera/end-call chrome. The default spotlight layout preserves the main participant and smaller inset; layout="side-by-side" gives both participants equal video tiles. It reuses the existing InterviewSimulation frame recipe and Avatar. There are no interactive device controls, permissions, audio, connection or end-call state.

`main` and `inset` supply names and optional image URLs/alternative text. Both fall back to their name initial. `onParticipantImageError(position, imageUrl)` allows the product to change a learner to You after a failed image. Native figure props/ref and an accessible label are supported. The consumer owns identity, photos and fallback policy; the library has no auth or scheduling dependency.

All material free-conversation pages use the spotlight frame with insetPresentation="video" below one title and instruction, centered with the shared media width contract. The illustrated teacher occupies the main scene; the illustrated student appears in the small full-scene inset. They demonstrate an enjoyable conversation, labeled Teacher and Student. These drawings are representations and never use real user names. Live guided conversation continues to use its existing trusted identity contexts.

Stories cover spotlight initials/photos, side-by-side illustrations, failed-photo fallback, long names and a narrow container. Focused tests cover rendering, photo errors and noninteractive semantics. Human visual review remains pending.

`insetPresentation` defaults to avatar for compatibility. The video variation displays the entire inset illustration with contain fitting and an independent image-error fallback; the main scene stays intact.
