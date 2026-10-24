// Expresses a translucent variant of a theme color without a new palette entry.
export function alpha(hexColor: string, opacity: number): string {
  const hex = hexColor.replace('#', '')
  const digits =
    hex.length === 3
      ? hex.replace(/./g, (digit) => digit + digit)
      : hex.slice(0, 6)
  const [red, green, blue] = [0, 2, 4].map((start) =>
    Number.parseInt(digits.slice(start, start + 2), 16),
  )

  return `rgba(${String(red)}, ${String(green)}, ${String(blue)}, ${String(opacity)})`
}
