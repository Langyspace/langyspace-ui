/** Shared outer geometry for application previews and matching static messaging tasks. */
export const applicationPhone = {
  maximumWidth: '18rem',
  height: 'clamp(24rem, calc(100cqh - 15.625rem), 33.75rem)',
  /** Below this usable screen height, quiz previews focus on feedback after answering. */
  compactScreenHeight: '22rem',
} as const
