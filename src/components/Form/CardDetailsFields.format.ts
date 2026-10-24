export const digits = (value: string, limit: number) =>
  value.replace(/\D/g, '').slice(0, limit)

export const formatCardNumber = (value: string) => {
  if (/^3[47]/.test(value))
    return [value.slice(0, 4), value.slice(4, 10), value.slice(10)]
      .filter(Boolean)
      .join(' ')
  return value.match(/.{1,4}/g)?.join(' ') ?? ''
}

export const formatDocumentNumber = (value: string) => {
  const groups = value.length > 11 ? [2, 3, 3, 4, 2] : [3, 3, 3, 2]
  const separators = value.length > 11 ? ['.', '.', '/', '-'] : ['.', '.', '-']
  let result = '',
    offset = 0
  for (const [index, length] of groups.entries()) {
    if (offset >= value.length) break
    result +=
      (index ? (separators[index - 1] ?? '') : '') +
      value.slice(offset, offset + length)
    offset += length
  }
  return result
}

export const formatExpiry = (value: string) =>
  value.length > 2 ? `${value.slice(0, 2)}/${value.slice(2)}` : value
export const formatPostalCode = (value: string) =>
  value.length > 5 ? `${value.slice(0, 5)}-${value.slice(5)}` : value

export const formatPhone = (value: string) => {
  const country = value.length > 11 && value.startsWith('55') ? '+55 ' : ''
  if (value.length > 11 && !country) return value
  const national = country ? value.slice(2) : value
  if (!national) return country
  const area = `(${national.slice(0, 2)}${national.length >= 2 ? ')' : ''}`
  if (national.length <= 2) return country + area
  const number = national.slice(2)
  const split = national.length > 10 ? 5 : 4
  return `${country}${area} ${number.slice(0, split)}${number.length > split ? `-${number.slice(split)}` : ''}`
}

export function maskedEdit(
  input: HTMLInputElement,
  previous: string,
  limit: number,
  format: (value: string) => string,
  inputType?: string,
) {
  const caret = input.selectionStart ?? input.value.length
  let value = digits(input.value, limit)
  let before = digits(input.value.slice(0, caret), limit).length
  // Deleting a separator must delete the adjacent digit, rather than trapping the caret.
  if (value === previous && input.value !== format(previous)) {
    if (inputType === 'deleteContentBackward' && before > 0) {
      value = value.slice(0, before - 1) + value.slice(before)
      before--
    } else if (inputType === 'deleteContentForward') {
      value = value.slice(0, before) + value.slice(before + 1)
    }
  }
  const formatted = format(value)
  const restore = () => {
    if (document.activeElement !== input || input.value !== formatted) return
    let position = 0,
      counted = 0
    while (position < formatted.length && counted < before) {
      if (/\d/.test(formatted.charAt(position))) counted++
      position++
    }
    input.setSelectionRange(position, position)
  }
  requestAnimationFrame(restore)
  return value
}
