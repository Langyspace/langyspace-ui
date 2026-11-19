# Technical plan

Root granted INT-COURSE-CATALOG-02, C1-TEACHER-02, TEACHER-02, LAB-02 and STAGING-02. INT-COURSE-FREEZE-COMMIT-02 is not yet granted. Exact paths and activation conditions are in the coordination queue and integracao-course-five-plan-20261119.json. No git mutation or bundle build is allowed while private authors write.

Prepare a local MaterialLevel=StudentLevel|'C1' for the read model, generated catalog validation and material filters/sorting. Preserve MaterialDocument, Create/Update DTOs and both global StudentLevel aliases. FilterPills already accepts string labels/IDs with wrapping and an accessible group label; MaterialCard already displays level text and opens a new tab. These components need no edit.

Extend only the Storybook catalog glob to implemented A201/B101/B201/C101 story modules. Standalone C1 routing, metadata and source references wait final author handoffs. Final Lab changes are index plus four course-*.html mirrors; preserve the eleven existing files except the merged index, including historical a1-01.html/A1.03 examples.

After four freezes and explicit transfer: reconcile current upstream Hosting changes, commit scoped UI once, build one clean neutral artifact, verify/copy all generated hashes and pin source/manifest in Teacher. Existing manual source/ref/SHA/target/lease/config guards remain unchanged. Publication targets staging teacher Hosting only; temporary aliases are restored byte-for-byte.

Prepared changes receive focused catalog/filter tests. Final checks reuse author and first-batch evidence where inputs remain unchanged. Actual C1 filtering, four revised material journeys and changed recorded media are checked after deployment. No broad matrix or CI polling. Current CI URLs are collected once per exact pushed SHA without claiming their result.
