import type { LangyTheme } from './theme'

type Widen<Value> = Value extends string
  ? string
  : Value extends number
    ? number
    : { [Key in keyof Value]?: Widen<Value[Key]> }

export type ThemeOverrides = Widen<LangyTheme> & Record<string, unknown>

export type DeepMerge<Base, Override> = {
  [Key in keyof Base | keyof Override]: Key extends keyof Override
    ? Key extends keyof Base
      ? Base[Key] extends Record<string, unknown>
        ? Override[Key] extends Record<string, unknown>
          ? DeepMerge<Base[Key], Override[Key]>
          : Override[Key]
        : Override[Key]
      : Override[Key]
    : Key extends keyof Base
      ? Base[Key]
      : never
}
