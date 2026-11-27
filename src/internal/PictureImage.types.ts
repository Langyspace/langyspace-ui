export interface PictureRegion {
  columns: number
  rows: number
  column: number
  row: number
  /** Optional spans for atlases whose independent illustrations have unequal widths. */
  columnSpan?: number
  rowSpan?: number
  sourceAspectRatio: number
}
export interface PictureImageProps {
  src: string
  alt: string
  region?: PictureRegion
}
