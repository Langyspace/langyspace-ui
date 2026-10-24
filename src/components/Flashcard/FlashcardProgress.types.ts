export type FlashcardProgressProps = {
  label: string
} & (
  | { loading: true }
  | {
      loading?: false
      current: number
      total: number
      revealed?: boolean
      complete?: boolean
    }
)
