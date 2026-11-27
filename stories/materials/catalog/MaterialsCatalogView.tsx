import { useState } from 'react'
import { materialCatalogLinkRel } from '../shared/materialCatalogNavigation'
import { Button } from '../../../src/components/Button/Button'
import { SearchInput } from '../../../src/components/Form/SearchInput'
import * as Styled from './MaterialsCatalog.styles'
import type { MaterialsCatalogProps } from './MaterialsCatalog.types'

export function MaterialsCatalogView({
  materials = [],
  initialLevel = 'A1',
  initialQuery = '',
}: MaterialsCatalogProps) {
  const levels = [
    ...new Set([...materials.map((entry) => entry.level), 'EXTRA']),
  ]
  const [level, setLevel] = useState(initialLevel)
  const [query, setQuery] = useState(initialQuery)
  const selected = materials.filter((entry) => entry.level === level)
  const normalized = query.trim().toLocaleLowerCase('pt-BR')
  const visible = selected.filter(
    (entry) =>
      !normalized ||
      `${entry.code} ${entry.title} ${entry.description}`
        .toLocaleLowerCase('pt-BR')
        .includes(normalized),
  )
  return (
    <Styled.Page>
      <Styled.Content>
        <Styled.Header>
          <h1>Materiais</h1>
          <p>Encontre a aula pelo nível, nome ou conteúdo.</p>
        </Styled.Header>
        <Styled.Filters>
          <Styled.Levels aria-label="Nível dos materiais">
            {levels.map((item) => (
              <Button
                key={item}
                variant={level === item ? 'primary' : 'secondary'}
                aria-pressed={level === item}
                onClick={() => setLevel(item)}
              >
                {item === 'EXTRA' ? 'Extra' : item}
              </Button>
            ))}
          </Styled.Levels>
          <SearchInput
            aria-label="Buscar materiais"
            placeholder="Buscar aula ou conteúdo"
            value={query}
            onChange={(event) => setQuery(event.currentTarget.value)}
            clearLabel="Limpar busca"
            onClear={() => setQuery('')}
          />
        </Styled.Filters>
        <p role="status">
          {visible.length} {visible.length === 1 ? 'material' : 'materiais'}
        </p>
        {visible.length ? (
          <Styled.Grid>
            {visible.map((entry) => {
              const available = Boolean(entry.href)
              const content = (
                <Styled.Text>
                  <Styled.Code>{entry.code}</Styled.Code>
                  <h2>{entry.title}</h2>
                  {entry.description ? <p>{entry.description}</p> : null}
                  <Styled.Availability>
                    {available
                      ? 'Abrir aula'
                      : 'Prévia ainda não disponível neste catálogo'}
                  </Styled.Availability>
                </Styled.Text>
              )
              return entry.href ? (
                <Styled.LessonLink
                  key={entry.id}
                  href={entry.href}
                  target={entry.storyId ? '_top' : '_blank'}
                  rel={
                    entry.storyId || !entry.href
                      ? undefined
                      : materialCatalogLinkRel(
                          entry.href,
                          typeof window === 'undefined'
                            ? ''
                            : window.location.origin,
                        )
                  }
                >
                  {content}
                  <span aria-hidden="true">→</span>
                </Styled.LessonLink>
              ) : (
                <Styled.LessonCard key={entry.id}>{content}</Styled.LessonCard>
              )
            })}
          </Styled.Grid>
        ) : (
          <Styled.Empty>
            <h2>{level === 'EXTRA' ? 'Em breve' : 'Nada encontrado'}</h2>
            <p>
              {level === 'EXTRA'
                ? 'Materiais extras para usar nas aulas.'
                : 'Tente outra palavra ou escolha outro nível.'}
            </p>
          </Styled.Empty>
        )}
      </Styled.Content>
    </Styled.Page>
  )
}
