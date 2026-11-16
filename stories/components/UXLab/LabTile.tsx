import type { ReactNode } from 'react'
import catalog from '../../materials/UXLab/catalog.json'
import * as Styled from './UXLab.stories.styles'
const patterns: Record<string, string> = {
  Interview: 'entrevista',
  'Advanced Interview': 'entrevista',
  Call: 'ligacao',
  'Advanced Call': 'ligacao',
  Grammar: 'c-gramatica',
  'Hidden Grammar': 'c-tentar',
  'Fill In The Blanks': 'c-blanks',
  'Role Play': 'c-roleplay',
  'Explore The Scene': 'cena',
  'Advanced Scene': 'cena',
  'Minimal Pairs': 'pares',
  Fluency: 'fluencia',
  'Advanced Fluency': 'fluencia',
  Conversation: 'caminhos',
  'Free Conversation': 'caminhos',
  Video: 'video',
  'Oral Assessment': 'c-oral',
  'Oral Result': 'c-oralres',
  Shadowing: 'shadowing',
  'Advanced Shadowing': 'shadowing',
  'Multiple Choice': 'c-multipla',
  'Your Turn': 'c-yourturn',
  'Right Or Wrong': 'c-certo',
  Homework: 'c-casa',
  'Lesson Intro': 'c-titulo',
  'Name These Things': 'nomes',
  'Pairs In Lesson': 'c-paresaula',
  'Received Video': 'engracado',
  'Quick Check': 'c-check',
  Vocabulary: 'c-vocab',
  'Guided Conversation': 'c-guided',
  'Chat Role Play': 'c-chatplay',
  Comprehension: 'c-comp',
  'Make Your Examples': 'c-make',
  Review: 'c-review',
  Challenge: 'c-challenge',
  'Guess Who': 'c-quem',
  Listening: 'c-simnao',
  'Dialogue And Questions': 'c-dlgq',
}
export function LabTile({
  name,
  children,
}: {
  name: string
  children: ReactNode
}) {
  const entry = catalog.find((item) => item.id === patterns[name])
  return (
    <Styled.Tile data-lab-preview>
      <Styled.TileInfo>
        <span>UX Lab · A1 a C2</span>
        <h2>{entry?.title ?? name}</h2>
        {entry?.description ? <p>{entry.description}</p> : null}
        <a
          href={`https://claude.ai/artifact/4JSNcRAHm4yHsyN89SXKwN#${entry?.anchor ?? ''}`}
          target="_blank"
          rel="noreferrer"
        >
          Ver padrão no UX Lab
        </a>
      </Styled.TileInfo>
      <Styled.TileStage>{children}</Styled.TileStage>
    </Styled.Tile>
  )
}
