export interface PictureRegion {
  columns: number
  rows: number
  column: number
  row: number
  sourceAspectRatio: number
}
export interface PictureImageProps {
  src: string
  alt: string
  region?: PictureRegion
}
