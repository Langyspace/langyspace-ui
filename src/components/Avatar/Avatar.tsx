import { useState } from 'react'
import * as Styled from './Avatar.styles'
import type { AvatarProps } from './Avatar.types'

export function Avatar({
  'aria-hidden': ariaHidden,
  children,
  imageUrl,
  name,
  namePosition = 'below',
  description,
  initials,
  size = 'md',
  tone = 'neutral',
  ...props
}: AvatarProps) {
  const [failedImageUrl, setFailedImageUrl] = useState<string | null>(null)
  const shouldShowImage = Boolean(imageUrl && imageUrl !== failedImageUrl)

  const portrait = (
    <Styled.Avatar
      {...(name ? {} : props)}
      $size={size}
      $tone={tone}
      aria-hidden={name ? true : (ariaHidden ?? true)}
      data-size={size}
      data-tone={tone}
    >
      {initials || children}
      {shouldShowImage ? (
        <Styled.Image
          alt=""
          src={imageUrl}
          onError={() => {
            setFailedImageUrl(imageUrl ?? null)
          }}
        />
      ) : null}
    </Styled.Avatar>
  )
  if (!name) return portrait
  return (
    <Styled.Identity
      {...props}
      $position={namePosition}
      aria-hidden={ariaHidden ?? false}
      data-avatar-identity="true"
    >
      {portrait}
      <Styled.IdentityText $position={namePosition}>
        <Styled.Name $tone={tone}>{name}</Styled.Name>
        {description ? (
          <Styled.Description>{description}</Styled.Description>
        ) : null}
      </Styled.IdentityText>
    </Styled.Identity>
  )
}
