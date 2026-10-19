import { Avatar } from '../../src'

// Compiled by typecheck; these examples are not executed as runtime tests.
export function avatarTypeExamples() {
  // @ts-expect-error accent deve convergir para o tone semântico brand
  ;<Avatar initials="LS" tone="accent" />
  // @ts-expect-error dimensões livres não pertencem ao atom
  ;<Avatar initials="LS" size={36} />
  // @ts-expect-error color não é um segundo eixo visual
  ;<Avatar color="pink" initials="LS" />
}
