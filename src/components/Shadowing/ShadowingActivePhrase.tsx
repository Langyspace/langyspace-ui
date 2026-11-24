import type { ShadowingActivePhraseProps } from './ShadowingActivePhrase.types'
import * as Styled from './ShadowingActivePhrase.styles'
import { Avatar } from '../Avatar/Avatar'

export function ShadowingActivePhrase({
  speaker,
  children,
  density = 'regular',
  tone = 'default',
  ...props
}: ShadowingActivePhraseProps) {
  return (
    <Styled.Root
      {...props}
      $compact={density === 'compact'}
      $material={tone === 'material'}
    >
      {speaker ? (
        <Styled.Identity>
          <Avatar
            imageUrl={speaker.imageUrl}
            initials={speaker.name.trim().slice(0, 1)}
            name={speaker.name}
            namePosition="beside"
            description={speaker.accentLabel}
            size="sm"
            textTone={tone === 'material' ? 'inherit' : 'theme'}
          />
        </Styled.Identity>
      ) : null}
      {children}
    </Styled.Root>
  )
}
