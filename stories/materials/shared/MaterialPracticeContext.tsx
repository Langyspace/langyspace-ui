import { createContext, useContext } from 'react'
/** The Standalone bootstrap has already validated this consumer origin. No learner data is stored. */
export const MaterialPracticeOrigin = createContext<string | undefined>(
  undefined,
)
export const useMaterialPracticeOrigin = () =>
  useContext(MaterialPracticeOrigin)
