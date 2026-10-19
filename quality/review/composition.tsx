import { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import * as UI from '../../src/index'

declare global {
  interface Window {
    reviewEvents: { open: number; action: number; audio: number }
    reviewReady: boolean
  }
}

const params = new URLSearchParams(location.search)
if (params.has('reset')) {
  const reset = document.createElement('style')
  reset.textContent = '* { box-sizing: border-box; }'
  document.head.append(reset)
}

export function Review() {
  const [flipped, setFlipped] = useState(false)
  const [open, setOpen] = useState(false)
  const [events, setEvents] = useState({ open: 0, action: 0, audio: 0 })
  const rating = useRef<HTMLButtonElement | null>(null)
  const surface = params.get('surface') ?? 'flashcard'
  const record = (key: keyof typeof events) =>
    setEvents((value) => ({ ...value, [key]: value[key] + 1 }))
  useEffect(() => {
    window.reviewEvents = events
    window.reviewReady = true
  }, [events])
  useEffect(() => {
    if (flipped) rating.current?.focus()
  }, [flipped])

  return (
    <main style={{ padding: 16, maxWidth: 1000, margin: '0 auto' }}>
      {surface === 'flashcard' && (
        <UI.FlashcardFrame>
          <UI.FlashcardStage>
            <UI.FlashcardDeck>
              <UI.FlashcardSwiper>
                <UI.FlashcardFlip flipped={flipped}>
                  <UI.FlashcardFace side="front" data-testid="front-face">
                    <UI.FlashcardFront data-testid="front-content">
                      <UI.FlashcardFlipButton
                        label="Virar cartão"
                        onClick={() => setFlipped(true)}
                      />
                      <UI.FlashcardImagePanel emoji="🐦">
                        <UI.FlashcardAudioButton
                          label="Ouvir palavra"
                          onClick={() => record('audio')}
                        />
                      </UI.FlashcardImagePanel>
                      <UI.FlashcardWord
                        phonetic="/bɜːrd/"
                        example={
                          <>
                            A <b>bird</b> sings.
                          </>
                        }
                      >
                        bird
                      </UI.FlashcardWord>
                    </UI.FlashcardFront>
                  </UI.FlashcardFace>
                  <UI.FlashcardFace side="back" data-testid="back-face">
                    <UI.FlashcardBack
                      data-testid="back-content"
                      term={
                        <>
                          bird{' '}
                          <UI.FlashcardAudioButton
                            placement="term"
                            label="Ouvir tradução"
                            onClick={() => record('audio')}
                          />
                        </>
                      }
                      phonetic="/bɜːrd/"
                      translation="pássaro"
                      example={
                        <>
                          A <b>bird</b> sings.
                        </>
                      }
                    />
                  </UI.FlashcardFace>
                </UI.FlashcardFlip>
              </UI.FlashcardSwiper>
            </UI.FlashcardDeck>
          </UI.FlashcardStage>
          <footer
            data-testid="flashcard-footer"
            style={{ paddingBlock: 'var(--fc-footer-padding-block)' }}
          >
            {flipped && <UI.Button ref={rating}>Lembrei</UI.Button>}
          </footer>
        </UI.FlashcardFrame>
      )}
      {surface === 'schedule' && (
        <UI.ScheduleRow
          time="09:00"
          participant={
            <span>
              Aluno com nome composto bastante longo para verificar
              responsividade
            </span>
          }
          openLabel="Abrir aula"
          onOpen={() => record('open')}
          actions={
            <UI.Button onClick={() => record('action')}>Entrar</UI.Button>
          }
        />
      )}
      {surface === 'calendar' && (
        <UI.ScheduleCalendar
          view="month"
          days={[
            {
              id: 'day-15',
              dateKey: '2026-10-15',
              label: 'Dia 15',
              shortLabel: 'Qui',
              dayNumber: 15,
            },
          ]}
          events={[
            {
              id: 'event-1',
              dateKey: '2026-10-15',
              startMinute: 540,
              durationMinutes: 60,
              timeLabel: '09:00',
              title: 'Aula',
              label: 'Abrir aula',
            },
          ]}
          slots={[
            {
              id: 'slot-1',
              dateKey: '2026-10-15',
              startMinute: 600,
              endMinute: 630,
              label: 'Abrir dia 15',
              state: 'available',
              interactive: true,
            },
          ]}
          navigation={{
            label: 'Outubro',
            previousLabel: 'Anterior',
            nextLabel: 'Próximo',
            onPrevious: () => {},
            onNext: () => {},
            onToday: () => {},
          }}
          onOpenEvent={() => record('action')}
          onSlotClick={() => record('open')}
        />
      )}
      {surface === 'dialog' && (
        <>
          <UI.Button onClick={() => setOpen(true)}>Abrir modal</UI.Button>
          <UI.Dialog
            closeLabel="Fechar"
            open={open}
            onClose={() => setOpen(false)}
            title="Revisar aula"
            footer={<UI.Button>Continuar</UI.Button>}
          >
            <UI.ActionMenu
              triggerLabel="Ações da aula"
              items={[
                {
                  id: 'edit',
                  label: 'Editar',
                  onSelect: () => record('action'),
                },
                {
                  id: 'archive',
                  label: 'Arquivar',
                  onSelect: () => record('action'),
                },
              ]}
            />
          </UI.Dialog>
        </>
      )}
      {surface === 'keyvalue' && (
        <UI.KeyValueList
          items={[
            {
              id: 'status',
              label: 'Situação',
              value: <UI.StatusChip tone="success">Ativo</UI.StatusChip>,
            },
          ]}
        />
      )}
    </main>
  )
}

const root = document.getElementById('root')
if (!root) throw new Error('review_root_missing')
createRoot(root).render(<Review />)
