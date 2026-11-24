# DeviceGallery

Arranges two or three canonical device frames in equal columns. `items` supplies stable IDs, labels and complete frame content. The gallery never adds another frame. A segmented selector shows one device below 46rem; `onActiveIdChange` allows consumers to stop media when switching.

Use `MobileFrame screenMode="application"` to render the existing Student exercise components in an isolated 360×640 light viewport. The application mode scales to the phone and keeps its responsive media queries, without inheriting a dark slide canvas. The default content-sized frame remains unchanged. Contacts/messages stay in `MessagePhoneFrame`.

Preview consumers own data and actions. No destination, login, progress, scheduler or message delivery is invented by these components.
