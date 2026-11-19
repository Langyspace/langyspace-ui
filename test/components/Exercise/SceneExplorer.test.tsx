import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { SceneExplorer } from '../../../src/components/InteractiveMaterial/SceneExplorer'
import {
  sceneCalloutLayout,
  sceneImageGeometry,
  scenePoint,
} from '../../../src/components/InteractiveMaterial/SceneExplorer.geometry'

describe('SceneExplorer projection', () => {
  const source = {
    naturalWidth: 1200,
    naturalHeight: 900,
    box: { left: 0, top: 0, width: 600, height: 300 },
    frame: { width: 600, height: 300 },
  }
  it('accounts for contain letterboxing before placing intrinsic image points', () => {
    const image = sceneImageGeometry({ ...source, fit: 'contain' })
    expect(image).toMatchObject({ left: 100, top: 0, width: 400, height: 300 })
    expect(scenePoint(image, 25, 75)).toEqual({ x: 200, y: 225 })
  })
  it('accounts for cover crop and noncentral object position', () => {
    const image = sceneImageGeometry({
      ...source,
      fit: 'cover',
      position: '50% 100%',
    })
    expect(image).toMatchObject({ left: 0, top: -150, width: 600, height: 450 })
    expect(scenePoint(image, 50, 10)).toEqual({ x: 300, y: -105 })
  })
  it('retains original size for scale-down and projects image-box offsets', () => {
    const image = sceneImageGeometry({
      naturalWidth: 100,
      naturalHeight: 100,
      box: { left: 20, top: 10, width: 400, height: 200 },
      frame: { width: 440, height: 220 },
      fit: 'scale-down',
    })
    expect(scenePoint(image, 50, 50)).toEqual({ x: 220, y: 110 })
  })
})
describe('SceneExplorer callout placement', () => {
  it('keeps the target clear and a right-edge label within the image', () => {
    const layout = sceneCalloutLayout(
      { width: 600, height: 450 },
      { x: 570, y: 300 },
      { left: 500, top: 250, width: 90, height: 140 },
      { width: 220, height: 90 },
    )
    expect(layout).toMatchObject({
      left: 372,
      top: 148,
      gutter: 0,
      placement: 'above',
    })
    expect(layout.arrow).toBe(198)
  })
  it('flips below a target near the top border', () => {
    const layout = sceneCalloutLayout(
      { width: 600, height: 450 },
      { x: 80, y: 30 },
      { left: 50, top: 10, width: 90, height: 80 },
      { width: 220, height: 90 },
    )
    expect(layout).toMatchObject({
      left: 8,
      top: 102,
      gutter: 0,
      placement: 'below',
    })
  })
  it('does not place a selected callout over another object or its control', () => {
    const layout = sceneCalloutLayout(
      { width: 600, height: 450 },
      { x: 400, y: 390 },
      { left: 350, top: 350, width: 90, height: 90 },
      { width: 220, height: 90 },
      [{ left: 250, top: 200, width: 220, height: 140 }],
    )
    expect(layout.placement).toBe('left')
    expect(layout.left + 220).toBeLessThan(350)
  })
  it('reserves space above a narrow image rather than covering its target', () => {
    const layout = sceneCalloutLayout(
      { width: 280, height: 210 },
      { x: 140, y: 100 },
      { left: 0, top: 0, width: 280, height: 210 },
      { width: 264, height: 110 },
    )
    expect(layout).toMatchObject({
      left: 8,
      top: -122,
      gutter: 122,
      placement: 'above',
    })
  })
})
describe('SceneExplorer selected feedback', () => {
  const hotspots = [
    {
      id: 'book',
      xPercent: 61,
      yPercent: 57,
      label: 'a book',
      prompt: 'What’s this?',
    },
  ]
  it('lets a host subtitle own the instruction without an empty paragraph', () => {
    const select = vi.fn()
    const props = {
      imageUrl: '/park.webp',
      imageAlt: 'Park',
      hotspots,
      visitedIds: [],
      onSelect: select,
    }
    const { rerender } = render(<SceneExplorer {...props} />)
    expect(screen.getByText('Tap a dot to explore')).toBeVisible()
    rerender(<SceneExplorer {...props} labels={{ initial: '' }} />)
    expect(screen.queryByText('Tap a dot to explore')).not.toBeInTheDocument()
    expect(
      screen.getByRole('img').closest('section')?.querySelector('p'),
    ).toBeNull()
    fireEvent.click(screen.getByRole('button', { name: 'a book' }))
    expect(select).toHaveBeenCalledWith('book')
  })
  it('keeps the name, question and replay together inside the image frame', async () => {
    const user = userEvent.setup(),
      play = vi.fn(),
      select = vi.fn(),
      nativePlay = vi.fn()
    render(
      <SceneExplorer
        imageUrl="/park.webp"
        imageAlt="Park"
        hotspots={hotspots.map((hotspot) => ({
          ...hotspot,
          prompt: (
            <>
              <span>{hotspot.prompt}</span>
              <audio aria-label="Native recording" />
            </>
          ),
        }))}
        selectedId="book"
        visitedIds={['book']}
        onSelect={select}
        onPlayHotspot={play}
        onPlay={nativePlay}
        aria-label="Explorer"
        playingId="book"
      />,
    )
    const region = screen.getByRole('region', { name: 'a book' })
    expect(region.parentElement).toContainElement(screen.getByRole('img'))
    expect(region).toHaveTextContent('What’s this?')
    const replay = screen.getByRole('button', { name: 'Ouvir: a book' })
    expect(replay).toHaveAttribute('aria-busy', 'true')
    replay.focus()
    await user.keyboard('{Enter}')
    expect(play).toHaveBeenCalledWith('book')
    fireEvent.play(screen.getByLabelText('Native recording'))
    expect(nativePlay).toHaveBeenCalledOnce()
    expect(play).toHaveBeenCalledOnce()
    expect(screen.queryByText(/explorados/)).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'a book' }))
    expect(select).toHaveBeenCalledWith('book')
  })
  it('keeps playback absent when no recording handler exists', () => {
    render(
      <SceneExplorer
        imageUrl="/park.webp"
        imageAlt="Park"
        hotspots={hotspots}
        selectedId="book"
        visitedIds={[]}
        onSelect={vi.fn()}
      />,
    )
    expect(
      screen.queryByRole('button', { name: 'Ouvir: a book' }),
    ).not.toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'a book' })).toBeVisible()
  })
})
