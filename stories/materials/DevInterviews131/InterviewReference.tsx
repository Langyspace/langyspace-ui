import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Button } from '../../../src/components/Button/Button'
import { Dialog } from '../../../src/components/Dialog/Dialog'
import { KeyValueList } from '../../../src/components/Details/KeyValueList'
import { ExercisePanel } from '../../../src/components/Exercise/ExercisePanel'
import * as Common from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import { theme } from '../../../src/foundations/theme/theme'
import source from './DevInterviews131.content.json'

export function InterviewReference() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant="text" size="sm" onClick={() => setOpen(true)}>
        Interview reference
      </Button>
      <Dialog
        open={open}
        title="Words for your interview"
        closeLabel="Close interview reference"
        onClose={() => setOpen(false)}
        size="md"
      >
        <Common.Stack>
          {source.homeworkVocabulary.map((item) => (
            <Common.Paragraph key={item.id}>
              <b>{item.word}</b> — {item.example}
            </Common.Paragraph>
          ))}
        </Common.Stack>
      </Dialog>
    </>
  )
}

export function InterviewRoleBrief() {
  return (
    <ThemeProvider theme={theme}>
      <ExercisePanel
        variant="monitor"
        title="Frontend developer · example vacancy"
        screenAspectRatio={4 / 3}
      >
        <KeyValueList
          layout="stacked"
          density="compact"
          items={[
            {
              id: 'product',
              label: 'Product',
              value: 'Customer portal · sign-in and order tracking',
            },
            {
              id: 'work',
              label: 'Work',
              value: 'Build features, investigate bugs and connect APIs',
            },
            {
              id: 'skills',
              label: 'Skills',
              value: 'React, TypeScript and clear communication',
            },
            {
              id: 'team',
              label: 'Team',
              value: 'International team working remotely',
            },
          ]}
        />
        <InterviewReference />
      </ExercisePanel>
    </ThemeProvider>
  )
}
