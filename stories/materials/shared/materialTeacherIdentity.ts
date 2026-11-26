import type {
  MaterialTeacherIdentity,
  ResolvedMaterialTeacherIdentity,
} from './MaterialTeacherContext.types'

/** One display rule for every material surface; accepts the older host's role fallback too. */
export function resolveMaterialTeacherIdentity(
  identity?: MaterialTeacherIdentity,
): ResolvedMaterialTeacherIdentity {
  const name = identity?.name.trim() ?? ''
  let timeZone: string | undefined
  try {
    if (identity?.timeZone) {
      new Intl.DateTimeFormat('en', { timeZone: identity.timeZone }).format()
      timeZone = identity.timeZone
    }
  } catch {
    /* Invalid profile timezone falls back to the presenting device. */
  }
  const countryCode =
    /^[A-Z]{2}$/.test(identity?.countryCode ?? '') &&
    identity?.countryCode !== 'ZZ'
      ? identity?.countryCode
      : undefined
  const identified = Boolean(name) && !/^(?:your\s+)?teacher$/iu.test(name)
  return {
    name: identified ? name.split(/\s+/u)[0]! : 'Teacher',
    avatarUrl: identified ? identity?.avatarUrl : undefined,
    identified,
    ...(timeZone ? { timeZone } : {}),
    ...(countryCode ? { countryCode } : {}),
  }
}
