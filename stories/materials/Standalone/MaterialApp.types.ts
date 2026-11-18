export type MaterialKey =
  'a1-01' | 'a1-07' | 'a1-08' | 'a2-01' | 'b1-01' | 'b2-01' | 'trial-a1-a2'
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
