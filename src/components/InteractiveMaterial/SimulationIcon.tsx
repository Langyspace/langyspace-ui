import * as Styled from './Material.shared.styles'
import type { SimulationIconProps } from './SimulationIcon.types'
export function SimulationIcon({ name }: SimulationIconProps) {
  return (
    <Styled.Icon viewBox="0 0 24 24" aria-hidden="true">
      <path
        d={
          name === 'phone'
            ? 'M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z'
            : name === 'hangup'
              ? 'M12 9c-1.6 0-3.1.3-4.6.7v3.1c0 .4-.2.7-.6.9-.9.5-1.8 1.1-2.6 1.8-.2.2-.4.3-.7.3s-.5-.1-.7-.3L.3 13.1A1 1 0 0 1 0 12.4c0-.3.1-.5.3-.7A16.9 16.9 0 0 1 12 7c4.5 0 8.6 1.8 11.7 4.7.2.2.3.4.3.7s-.1.5-.3.7l-2.5 2.4c-.2.2-.5.3-.7.3s-.5-.1-.7-.3c-.8-.7-1.7-1.3-2.6-1.8a1 1 0 0 1-.6-.9V9.7A15 15 0 0 0 12 9z'
              : name === 'mic'
                ? 'M12 15a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.9V22h2v-3.1A7 7 0 0 0 19 12z'
                : name === 'camera'
                  ? 'M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11z'
                  : name === 'captions'
                    ? 'M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-8 7H9.5v-.5h-2v3h2V13H11v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1zm7 0h-1.5v-.5h-2v3h2V13H18v1a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1z'
                    : name === 'hand'
                      ? 'M21 7a1.5 1.5 0 0 0-3 0v5h-1V4.5a1.5 1.5 0 0 0-3 0V11h-1V3.5a1.5 1.5 0 0 0-3 0V12H9V6.5a1.5 1.5 0 0 0-3 0v9.3L4.6 14a1.6 1.6 0 0 0-2.5 2l3.5 4.6A6 6 0 0 0 10.4 23H15a6 6 0 0 0 6-6z'
                      : name === 'previous'
                        ? 'M6 6h2v12H6zm3.5 6 8.5 6V6z'
                        : name === 'replay'
                          ? 'M12 5V2L7 6l5 4V7a5 5 0 1 1-5 5H5a7 7 0 1 0 7-7z'
                          : name === 'next'
                            ? 'M16 6h2v12h-2zM6 6v12l8.5-6z'
                            : 'M7 5v14l12-7z'
        }
      />
    </Styled.Icon>
  )
}
