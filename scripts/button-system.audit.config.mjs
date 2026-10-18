import { resolve } from 'node:path'
import { defineAuditConfig } from '../audit/index.mjs'

export default defineAuditConfig({
  root: resolve(import.meta.dirname, '..'),
  sourceRoots: ['src'],
  nativeButtonOwners: [
    {
      owner: 'UI foundations',
      path: 'src/components/Button/Pressable.styles.ts',
      reason: 'Pressable owns the native styled button',
      expiresAt: '2027-08-25',
    },
  ],
  spinnerOwners: [
    {
      owner: 'UI foundations',
      path: 'src/components/Spinner/Spinner.styles.ts',
      reason: 'Spinner owns wait rotation',
      expiresAt: '2027-08-25',
    },
  ],
  allowedDomainMotion: [
    {
      owner: 'Flashcard pronunciation presentation',
      path: 'src/components/Flashcard/FlashcardAudioButton.styles.ts',
      reason:
        'Existing finite 600ms pronunciation pulse shared from Student/Teacher; audio ownership stays local and reduced motion disables the pulse',
      expiresAt: '2027-04-15',
    },
    {
      owner: 'Shadowing presentation',
      path: 'src/components/Shadowing/ShadowingPhraseStack.tsx',
      reason:
        'Existing phrase entrance or decorative repeat pulse with explicit reduced motion; audio timing remains local',
      expiresAt: '2027-04-14',
    },
    {
      owner: 'Shadowing presentation',
      path: 'src/components/Shadowing/ShadowingRepetitions.styles.ts',
      reason:
        'Existing phrase entrance or decorative repeat pulse with explicit reduced motion; audio timing remains local',
      expiresAt: '2027-04-14',
    },

    {
      owner: 'Loading presentation',
      path: 'src/components/Skeleton/Skeleton.tsx',
      reason: 'Decorative placeholder shimmer, disabled for reduced motion',
      expiresAt: '2027-04-14',
    },
    {
      owner: 'Flashcard presentation',
      path: 'src/components/Flashcard/FlashcardSwiper.styles.ts',
      reason:
        'Existing finite card/feedback transition with explicit reduced motion; scheduling and timers remain local',
      expiresAt: '2027-04-14',
    },
    {
      owner: 'Flashcard presentation',
      path: 'src/components/Flashcard/FlashcardFeedback.styles.ts',
      reason:
        'Existing finite card/feedback transition with explicit reduced motion; scheduling and timers remain local',
      expiresAt: '2027-04-14',
    },

    {
      owner: 'Auth presentation',
      path: 'src/components/Auth/AuthSuccessIcon.tsx',
      reason:
        'Existing finite auth success entrance, with explicit reduced motion',
      expiresAt: '2027-04-14',
    },
    {
      owner: 'Auth presentation',
      path: 'src/components/Auth/AuthProgress.tsx',
      reason:
        'Existing decorative auth completion progress; no navigation timer; explicit reduced motion',
      expiresAt: '2027-04-14',
    },
    {
      owner: 'Practice completion',
      path: 'src/components/PracticeResultPanel/PracticeResultPanel.styles.ts',
      reason:
        'finite 320ms completion-mark entrance from Student, shared with Teacher, explicitly disabled with reduced motion; actions and metrics stay still',
      expiresAt: '2027-04-14',
    },
    {
      owner: 'Practice rating',
      path: 'src/components/Flashcard/FlashcardRatingButton.styles.ts',
      reason:
        'finite 300ms rating-choice entrance and 20/60/100/140ms stagger from both products, disabled with reduced motion; card transitions remain in the product',
      expiresAt: '2027-04-13',
    },
    {
      owner: 'Practice loading',
      path: 'src/components/Practice/PracticeCardSkeletonBody.styles.ts',
      reason:
        'decorative practice-card shimmer with reduced-motion override; busy state stays in the product',
      expiresAt: '2027-04-12',
    },
    {
      owner: 'Feedback',
      path: 'src/components/Toast/ToastItem.styles.ts',
      reason:
        'finite toast entrance with reduced-motion override, preserving product feedback',
      expiresAt: '2027-01-11',
    },
    {
      owner: 'Operational lists',
      path: 'src/components/ActionMenu/ActionMenu.styles.ts',
      reason: 'non-modal popover entrance with reduced-motion override',
      expiresAt: '2027-08-28',
    },
    {
      owner: 'Identity',
      path: 'src/components/Auth/AuthTokenDigits.styles.ts',
      reason: 'invalid token feedback',
      expiresAt: '2027-08-25',
    },
  ],
  canonicalComponents: ['ActionLink', 'Button', 'IconButton'],
  auditPrivateStyles: true,
  requireExceptionExpiry: true,
  layerDependencies: {
    components: ['components', 'foundations', 'internal'],
    foundations: ['foundations'],
    internal: ['foundations', 'internal'],
  },
  additionalRules: [
    {
      id: 'LSUI012',
      message:
        'free cosmetic prop; expose a semantic variant or keep the recipe private',
      pattern:
        /^\s+(?:color|height|padding|radius|spacing)\??\s*:\s*(?:number|string)\b/m,
      remediation:
        'replace it with a closed semantic variant or keep the component local',
    },
  ],
})
