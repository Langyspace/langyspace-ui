import type { Meta, StoryObj } from '@storybook/react-vite'
import { styled } from 'styled-components'
import { theme } from '../../src/foundations/theme/theme'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 1rem;
  width: min(100%, 60rem);
  margin: 0 auto;
`

const Swatch = styled.div<{ $color: string }>`
  min-width: 0;
  border: 1px solid ${theme.semantic.border.default};
  border-radius: ${theme.radius.control};
  overflow: hidden;
  background: ${theme.colors.palette.white};

  &::before {
    display: block;
    height: 5rem;
    background: ${({ $color }) => $color};
    content: '';
  }

  code {
    display: block;
    padding: ${theme.spacing[3]};
    overflow-wrap: anywhere;
  }
`

const Table = styled.table`
  width: 100%;
  min-width: 36rem;
  max-width: 60rem;
  margin: 0 auto;
  border-collapse: collapse;

  th,
  td {
    padding: ${theme.spacing[3]};
    border-bottom: 1px solid ${theme.colors.border.subtle};
    text-align: left;
    vertical-align: top;
  }

  th {
    color: ${theme.colors.text.primary};
  }

  td {
    color: ${theme.colors.text.muted};
  }
`

const TableScroller = styled.div`
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;
  overflow-x: auto;
`

function ThemeColors() {
  const colors = [
    ['colors.text.primary', theme.colors.text.primary],
    ['colors.text.secondary', theme.colors.text.secondary],
    ['semantic.background.muted', theme.semantic.background.muted],
    ['semantic.foreground.brand', theme.semantic.foreground.brand],
    [
      'semantic.status.success.foreground',
      theme.semantic.status.success.foreground,
    ],
    [
      'semantic.status.warning.indicator',
      theme.semantic.status.warning.indicator,
    ],
    ['colors.feedback.danger', theme.colors.feedback.danger],
    ['colors.feedback.info', theme.colors.feedback.info],
  ] as const

  return (
    <Grid>
      {colors.map(([name, color]) => (
        <Swatch $color={color} key={name}>
          <code>
            {name}
            <br />
            {color}
          </code>
        </Swatch>
      ))}
    </Grid>
  )
}

function ThemePurpose() {
  return (
    <TableScroller>
      <Table>
        <thead>
          <tr>
            <th scope="col">Foundation</th>
            <th scope="col">Use</th>
            <th scope="col">Boundary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>sizes.control</td>
            <td>Button, link and icon action families</td>
            <td>Do not use for form fields</td>
          </tr>
          <tr>
            <td>sizes.field</td>
            <td>Inputs and compound field surfaces</td>
            <td>The parent and nested control share the same size</td>
          </tr>
          <tr>
            <td>semantic.inverse</td>
            <td>Content, borders and subtle fills on dark surfaces</td>
            <td>Choose by semantic role, not a new alpha</td>
          </tr>
          <tr>
            <td>typography.fontSize.2xs</td>
            <td>Short metadata inside chips and counters</td>
            <td>Never use for primary action or body copy</td>
          </tr>
          <tr>
            <td>Private recipe constants</td>
            <td>Singular component geometry such as StatePanel fill</td>
            <td>Promote only after a second semantic consumer exists</td>
          </tr>
        </tbody>
      </Table>
    </TableScroller>
  )
}

const meta = {
  component: ThemeColors,
  parameters: { controls: { disable: true }, layout: 'padded' },
  title: 'Foundations/Theme',
} satisfies Meta<typeof ThemeColors>

export default meta

type Story = StoryObj<typeof meta>

export const Colors: Story = {
  tags: ['visual-review'],
}

export const PurposeAndBoundaries: Story = {
  render: () => <ThemePurpose />,
}
