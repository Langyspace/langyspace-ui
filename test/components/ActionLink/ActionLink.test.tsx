import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import styled from 'styled-components'
import { ActionLink } from '../../../src/index'
import * as ActionLinkStyles from '../../../src/components/ActionLink/ActionLink.styles'

describe('ActionLink', () => {
  it('renders a native anchor, forwards native props and its ref', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(
      <ActionLink
        ref={ref}
        className="consumer-link"
        href="https://langy.space/aulas"
        rel="noreferrer"
        target="_blank"
      >
        Conhecer as aulas
      </ActionLink>,
    )

    const link = screen.getByRole('link', { name: 'Conhecer as aulas' })

    expect(link.tagName).toBe('A')
    expect(link).toHaveAttribute('href', 'https://langy.space/aulas')
    expect(link).toHaveAttribute('rel', 'noreferrer')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveClass('lsui-sc-action-link', 'consumer-link')
    expect(ref.current).toBe(link)
  })

  it('shares the canonical size, density, width and appearance recipe', () => {
    render(
      <ActionLink
        density="compact"
        fullWidth
        href="/cadastro"
        size="lg"
        variant="brand"
      >
        Começar agora
      </ActionLink>,
    )

    expect(screen.getByRole('link', { name: 'Começar agora' })).toHaveStyle({
      backgroundColor: '#cc0f45',
      borderRadius: '999px',
      minHeight: '3rem',
      paddingLeft: '1.25rem',
      paddingRight: '1.25rem',
      width: '100%',
    })
  })

  it('supports only the three approved link variants and both icon slots', () => {
    render(
      <>
        <ActionLink
          href="/principal"
          iconEnd={<svg data-testid="end" />}
          iconStart={<svg data-testid="start" />}
        >
          Principal
        </ActionLink>
        <ActionLink href="/secundario" variant="secondary">
          Secundário
        </ActionLink>
        <ActionLink href="/terciario" variant="tertiary">
          Terciário
        </ActionLink>
      </>,
    )

    const primary = screen.getByRole('link', { name: 'Principal' })

    expect(primary.firstElementChild).toContainElement(
      screen.getByTestId('start'),
    )
    expect(primary.lastElementChild).toContainElement(screen.getByTestId('end'))
    expect(screen.getByRole('link', { name: 'Secundário' })).toHaveStyle({
      backgroundColor: '#ffffff',
    })
    expect(screen.getByRole('link', { name: 'Terciário' })).toHaveStyle({
      backgroundColor: 'rgba(0, 0, 0, 0)',
    })
  })

  it('keeps a stable component id and supports styled composition', () => {
    const CampaignLink = styled(ActionLink)`
      margin-top: 1rem;
      width: 12rem;
    `

    render(<CampaignLink href="/campanha">Ver campanha</CampaignLink>)

    expect(screen.getByRole('link', { name: 'Ver campanha' })).toHaveStyle({
      marginTop: '1rem',
      width: '12rem',
    })
    expect(ActionLinkStyles.ActionLink.styledComponentId).toBe(
      'lsui-sc-action-link',
    )
  })
})
