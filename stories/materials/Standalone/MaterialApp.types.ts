export type MaterialKey = 'a1-01' | 'a2-01' | 'b1-01' | 'trial-a1-a2'
export interface MaterialViewProps {
  materialKey: MaterialKey
}
declare global {
  const __MATERIAL_SOURCE_COMMIT__: string
}
