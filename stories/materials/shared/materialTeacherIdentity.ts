import type {
  MaterialTeacherIdentity,
  ResolvedMaterialTeacherIdentity,
} from './MaterialTeacherContext.types'

/** One display rule for every material surface; accepts the older host's role fallback too. */
export function resolveMaterialTeacherIdentity(
  identity?: MaterialTeacherIdentity,
): ResolvedMaterialTeacherIdentity {
  const name = identity?.name.trim() ?? ''
  const identified = Boolean(name) && !/^(?:your\s+)?teacher$/iu.test(name)
  return {
    name: identified ? name.split(/\s+/u)[0]! : 'Teacher',
    avatarUrl: identified ? identity?.avatarUrl : undefined,
    identified,
  }
}
