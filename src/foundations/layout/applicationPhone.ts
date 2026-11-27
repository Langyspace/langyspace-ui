const height = 'clamp(24rem, calc(100cqh - 15.625rem), 33.75rem)'

/** Shared outer geometry: the width follows the available height, capped at 18rem. */
export const applicationPhone = {
  maximumWidth: `min(18rem, calc(${height} * 0.5625))`,
  height,
  /** Below this usable screen height, quiz previews focus on feedback after answering. */
  compactScreenHeight: '22rem',
} as const
