import type { PreparedRecording } from '../../../src/internal/useRecordedAudio.types'
import audio0 from './assets/audio/V.0.mp3'
import audio1 from './assets/audio/V.1.mp3'
import audio2 from './assets/audio/V.2.mp3'
import audio3 from './assets/audio/V.3.mp3'
import audio4 from './assets/audio/V.4.mp3'
import audio5 from './assets/audio/V.5.mp3'
import audio6 from './assets/audio/ACCOUNT.EX.0.mp3'
import audio7 from './assets/audio/EX.1.mp3'
import audio8 from './assets/audio/EX.2.mp3'
import audio9 from './assets/audio/EX.3.mp3'
import audio10 from './assets/audio/EX.4.mp3'
import audio11 from './assets/audio/EX.5.mp3'
import audio12 from './assets/audio/ACCOUNT.VS.0.mp3'
import audio13 from './assets/audio/VS.1.mp3'
import audio14 from './assets/audio/VS.2.mp3'
import audio15 from './assets/audio/VS.3.mp3'
import audio16 from './assets/audio/VS.4.mp3'
import audio17 from './assets/audio/VS.5.mp3'
import audio18 from './assets/audio/CALL.1.mp3'
import audio19 from './assets/audio/CALL.2.mp3'
import audio20 from './assets/audio/CALL.3.mp3'
import audio21 from './assets/audio/ACCOUNT.CALL.4.mp3'
import audio22 from './assets/audio/CALL.5.mp3'
import audio23 from './assets/audio/ACCOUNT.PLAN.1.mp3'
import audio24 from './assets/audio/ACCOUNT.PLAN.2.mp3'
import audio25 from './assets/audio/ACCOUNT.PLAN.3.mp3'
import audio26 from './assets/audio/ACCOUNT.PLAN.4.mp3'
import audio27 from './assets/audio/ACCOUNT.PLAN.5.mp3'
import audio28 from './assets/audio/PLAN.6.mp3'
import audio29 from './assets/audio/ACCOUNT.REVIEW.1.mp3'
import audio30 from './assets/audio/ACCOUNT.REVIEW.2.mp3'
import audio31 from './assets/audio/ACCOUNT.REVIEW.3.mp3'
import audio32 from './assets/audio/ACCOUNT.REVIEW.4.mp3'
import audio33 from './assets/audio/SH.1.mp3'
import audio34 from './assets/audio/SH.2.mp3'
import audio35 from './assets/audio/ACCOUNT.SH.3.mp3'
import audio36 from './assets/audio/SH.4.mp3'
import audio37 from './assets/audio/SH.5.mp3'
import audio38 from './assets/audio/SH.6.mp3'
import audio39 from './assets/audio/ACCOUNT.FEEDBACK.mp3'
export const devRecordings: readonly PreparedRecording[] = [
  { id: 'V.0', text: 'task', src: audio0 },
  { id: 'V.1', text: 'access', src: audio1 },
  { id: 'V.2', text: 'blocker', src: audio2 },
  { id: 'V.3', text: 'deadline', src: audio3 },
  { id: 'V.4', text: 'update', src: audio4 },
  { id: 'V.5', text: 'feedback', src: audio5 },
  {
    id: 'ACCOUNT.EX.0',
    text: 'My first task is to build the login screen',
    src: audio6,
  },
  { id: 'EX.1', text: 'I need access to the repository', src: audio7 },
  { id: 'EX.2', text: 'Missing access is a blocker', src: audio8 },
  { id: 'EX.3', text: 'The deadline is Friday', src: audio9 },
  { id: 'EX.4', text: 'Here is a quick update', src: audio10 },
  { id: 'EX.5', text: 'Thanks for the feedback', src: audio11 },
  {
    id: 'ACCOUNT.VS.0',
    text: 'task. My first task is to build the login screen',
    src: audio12,
  },
  { id: 'VS.1', text: 'access. I need access to the repository', src: audio13 },
  { id: 'VS.2', text: 'blocker. Missing access is a blocker', src: audio14 },
  { id: 'VS.3', text: 'deadline. The deadline is Friday', src: audio15 },
  { id: 'VS.4', text: 'update. Here is a quick update', src: audio16 },
  { id: 'VS.5', text: 'feedback. Thanks for the feedback', src: audio17 },
  {
    id: 'CALL.1',
    text: 'Hi, welcome to the team! I’m Kim. Can you hear me clearly?',
    src: audio18,
  },
  {
    id: 'CALL.2',
    text: 'Let’s start with a quick introduction. What’s your name, and what do you work with?',
    src: audio19,
  },
  {
    id: 'CALL.3',
    text: 'I work on the frontend. Which tools do you use most?',
    src: audio20,
  },
  {
    id: 'ACCOUNT.CALL.4',
    text: 'Today, your task is to build the login screen for our new customer portal. You’re working on the frontend. Could you repeat that back to me?',
    src: audio21,
  },
  {
    id: 'CALL.5',
    text: 'I’ll send you the setup guide after this call. Can you message me if you need access?',
    src: audio22,
  },
  {
    id: 'ACCOUNT.PLAN.1',
    text: 'We’re building the customer portal. You own the login screen. What should a customer be able to do in the first version?',
    src: audio23,
  },
  {
    id: 'ACCOUNT.PLAN.2',
    text: 'I’d add Google login first. Most people don’t want another password. Why start with email and password?',
    src: audio24,
  },
  {
    id: 'ACCOUNT.PLAN.3',
    text: 'The email and password API is ready. Google login would need more backend work. What information do you need from me?',
    src: audio25,
  },
  {
    id: 'ACCOUNT.PLAN.4',
    text: 'I’ve finished the password reset screen. Your login screen only needs a Forgot password link to open it. Where will you put that link?',
    src: audio26,
  },
  {
    id: 'ACCOUNT.PLAN.5',
    text: 'What should the screen show if the email or password is wrong? We need to make that clear without losing what the customer typed.',
    src: audio27,
  },
  {
    id: 'PLAN.6',
    text: 'Let’s agree on this version before we finish. What will you deliver by Friday, and what will you leave for later?',
    src: audio28,
  },
  {
    id: 'ACCOUNT.REVIEW.1',
    text: 'I’ve finished the registration screen. A new customer can enter their name, email and password, then create an account. If an email is already in use, the page shows a clear message.',
    src: audio29,
  },
  {
    id: 'ACCOUNT.REVIEW.2',
    text: 'I’ve built the password reset screen. The customer enters their email and asks for a reset link. After they send it, the page tells them to check their inbox. They don’t need to remember their old password.',
    src: audio30,
  },
  {
    id: 'ACCOUNT.REVIEW.3',
    text: 'The backend now supports registration, login and password reset. The login API checks the email and password. If they are correct, it returns a session. If not, it returns an error for the screen to show.',
    src: audio31,
  },
  {
    id: 'ACCOUNT.REVIEW.4',
    text: 'Now show us your login screen. Explain how a customer signs in, what happens when the password is wrong, and how they can reset it.',
    src: audio32,
  },
  { id: 'SH.1', text: 'Could you say that again?', src: audio33 },
  {
    id: 'SH.2',
    text: 'Could you give me access to the repository?',
    src: audio34,
  },
  {
    id: 'ACCOUNT.SH.3',
    text: 'What should happen when the user clicks Sign in?',
    src: audio35,
  },
  {
    id: 'SH.4',
    text: 'I’m blocked because I don’t have access yet',
    src: audio36,
  },
  {
    id: 'SH.5',
    text: 'The deadline is Friday. Is that still correct?',
    src: audio37,
  },
  {
    id: 'SH.6',
    text: 'Thanks for the feedback. I’ll update the task',
    src: audio38,
  },
  {
    id: 'ACCOUNT.FEEDBACK',
    text: 'Thanks for showing the login screen. The form is clear, and the error message helps. Could you make the Forgot password link easier to find on mobile? Let’s add that to our next tasks.',
    src: audio39,
  },
]
