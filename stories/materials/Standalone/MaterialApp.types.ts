export type MaterialKey =
  | 'extra-dev-study'
  | 'extra-dev-interviews'
  | 'extra-dev-first-day'
  | 'extra-influencer-routine'
  | 'a1-01'
  | 'a1-02'
  | 'a1-03'
  | 'a1-04'
  | 'a1-05'
  | 'a1-06'
  | 'a2-01'
  | 'b1-01'
  | 'b2-01'
  | 'c1-01'
  | 'trial-a1-a2'
  | 'trial-b1'
  | 'trial-b2'
  | 'tema-frontend'
export interface MaterialViewProps {
  studentPortalOrigin: string
  materialKey: MaterialKey
}
declare global {
  const __MATERIAL_SOURCE_COMMIT__: string
}

export interface MaterialReadyProps {
  materialKey: MaterialKey
}
