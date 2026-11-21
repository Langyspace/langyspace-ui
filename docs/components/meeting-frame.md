# MeetingFrame

A static Google Meet-style illustration with a main participant, a smaller participant inset and decorative microphone/camera/end-call chrome. It reuses the existing InterviewSimulation frame recipe and Avatar. There are no interactive device controls, permissions, audio, connection or end-call state.

`main` and `inset` supply names and optional image URLs/alternative text. Both fall back to their name initial. `onParticipantImageError(position, imageUrl)` allows the product to change a learner to You after a failed image. Native figure props/ref and an accessible label are supported. The consumer owns identity, photos and fallback policy; the library has no auth or scheduling dependency.

All material free-conversation pages use this frame below one title and instruction, centered with the shared media width contract. Existing trusted contexts provide the teacher first name and photo and, only with a photo, the learner first name. Missing or failed learner photos use You; no fictional portrait is attributed to a real participant.

Stories cover initials, profile photos, failed-photo fallback, long names and a narrow container. Focused tests cover rendering, photo errors and noninteractive semantics. Human visual review remains pending.
