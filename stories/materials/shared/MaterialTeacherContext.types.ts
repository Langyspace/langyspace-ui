import type { ReactNode } from 'react'

export interface MaterialTeacherIdentity {
  name: string
  avatarUrl?: string
  /** IANA timezone from the signed-in profile; the presenting device is the local fallback. */
  timeZone?: string
  /** Declared country or the phone registration country, supplied by the host. */
  countryCode?: string
}
export interface ResolvedMaterialTeacherIdentity extends MaterialTeacherIdentity {
  /** Whether the display name comes from a real profile rather than the role fallback. */
  identified: boolean
}
export interface MaterialTeacherProviderProps {
  materialKey: string
  children: ReactNode
}
