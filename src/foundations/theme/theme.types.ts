import type { LangyTheme } from './theme'

type Widen<Value> = Value extends string
  ? string
  : Value extends number
    ? number
    : { [Key in keyof Value]?: Widen<Value[Key]> } & Record<string, unknown>

/** Partial theme values; products may also add keys of their own. */
export type ThemeOverrides = Widen<LangyTheme>

type PlainObject = Record<string, unknown>

export type DeepMerge<Base, Override> = {
  -readonly [Key in keyof Base]-?: Key extends keyof Override
    ? Base[Key] extends PlainObject
      ? Override[Key] extends PlainObject
        ? DeepMerge<Base[Key], Override[Key]>
        : Override[Key]
      : Exclude<Override[Key], undefined>
    : Base[Key]
} & Omit<Override, keyof Base>
