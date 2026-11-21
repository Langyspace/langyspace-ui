import type { ConnectionSignalProps } from './ConnectionSignal.types'
import * as S from './ConnectionSignal.styles'
export function ConnectionSignal(props: ConnectionSignalProps) {
  return (
    <S.Root role="img" aria-label="Bad signal" {...props}>
      {[1, 2, 3, 4].map((i) => (
        <i key={i} />
      ))}
    </S.Root>
  )
}
