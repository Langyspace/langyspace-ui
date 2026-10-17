import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { styled } from 'styled-components'
import { Card } from '../Card'
import { FilterPills } from '../FilterPills'
import { SearchInput } from '../SearchInput'
import { SelectInput } from '../../atoms/SelectInput'
import { FilterToolbar } from '.'

const Search = styled(SearchInput)`
  flex: 1 1 17.5rem;
  min-width: min(100%, 17.5rem);
`

const Pills = styled.div`
  min-width: 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(12rem, 0.35fr) minmax(13rem, 0.35fr) 1fr;
  align-items: center;
  gap: 12px;
  @media (max-width: 1100px) {
    grid-template-columns: minmax(0, 1fr);
  }
`

function SearchFilters({ long = false, disabled = false }) {
  const [query, setQuery] = useState('')
  const [level, setLevel] = useState('all')

  return (
    <FilterToolbar aria-label="Filtros de materiais">
      <Search
        aria-label="Buscar material"
        placeholder="Buscar por título ou tema"
        value={query}
        disabled={disabled}
        onChange={(event) => setQuery(event.currentTarget.value)}
        clearLabel="Limpar busca"
        onClear={() => setQuery('')}
      />
      <Pills>
        <FilterPills
          aria-label="Filtrar por nível"
          options={[
            {
              label: long ? 'Todos os níveis de aprendizado' : 'Todos',
              value: 'all',
            },
            { label: long ? 'Intermediário e conversação' : 'B1', value: 'b1' },
            { label: 'C2', value: 'c2', disabled: true },
          ]}
          value={level}
          onChange={setLevel}
          size="sm"
          overflow="wrap"
        />
      </Pills>
    </FilterToolbar>
  )
}

const meta = {
  title: 'Molecules/Layout/FilterToolbar',
  component: FilterToolbar,
  tags: ['visual-review'],
  args: { 'aria-label': 'Filtros' },
} satisfies Meta<typeof FilterToolbar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = { render: () => <SearchFilters /> }

export const LongContent: Story = {
  tags: ['layout-boundary'],
  render: () => <SearchFilters long />,
}

export const DisabledSearch: Story = {
  render: () => <SearchFilters disabled />,
}

export const WithSurface: Story = {
  render: () => (
    <Card>
      <FilterToolbar aria-label="Filtros de mensagens">
        <Grid>
          <SelectInput aria-label="Status" defaultValue="all">
            <option value="all">Status: todas</option>
          </SelectInput>
          <SelectInput aria-label="Moderação" defaultValue="all">
            <option value="all">Moderação: todas</option>
          </SelectInput>
          <span>3 conversas carregadas</span>
        </Grid>
      </FilterToolbar>
    </Card>
  ),
}
