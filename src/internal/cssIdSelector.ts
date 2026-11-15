// A React identifierPrefix must never introduce a second selector or a declaration.
export const cssIdSelector = (id: string) =>
  `#${Array.from(id, (character, index) => {
    if (
      /^[A-Za-z_]$/.test(character) ||
      (index > 0 && /^[0-9-]$/.test(character))
    ) {
      return character
    }
    const code = character.codePointAt(0) ?? 0xfffd
    return `\\${(code === 0 ? 0xfffd : code).toString(16)} `
  }).join('')}`
