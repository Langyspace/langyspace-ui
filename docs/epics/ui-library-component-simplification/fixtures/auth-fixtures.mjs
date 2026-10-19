export function authCases(project) {
  const common = [
    'register-details',
    'register-details-error',
    'register-token',
    'register-token-error',
    'register-token-ready',
    'register-success',
    'login-success',
    'login-error',
    'login-loading',
  ]
  const extra =
    project === 'teacher'
      ? ['register-availability', 'register-availability-error']
      : [
          'complete-registration',
          'complete-registration-document',
          'register-claim',
          'register-claim-error',
          'unsupported-browser',
          'payment-invalid',
          'payment-ready',
          'payment-loading',
          'payment-busy',
          'payment-error',
          'payment-confirm-switch',
        ]
  return [...common, ...extra].map((id) => ({
    id,
    path: '/__ui-v3-auth?case=' + id,
    ...(id.startsWith('payment-') &&
    !['payment-invalid', 'payment-ready', 'payment-loading'].includes(id)
      ? { captureAction: 'payment-continue' }
      : {}),
  }))
}

export function authEntry(project, before) {
  const student = project === 'student'
  return `
import '@fontsource/montserrat/latin-400.css'
import '@fontsource/montserrat/latin-500.css'
import '@fontsource/montserrat/latin-600.css'
import '@fontsource/montserrat/latin-700.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
import { GlobalStyles, theme } from '@/theme'
import { phoneCountries } from '@/constants/phoneCountries'
import { AuthShell } from '@/components/layout/AuthShell'
import { AuthTopLink } from '@/components/layout/AuthTopLink'
${before ? "import { AuthTopLinkHighlight } from '@/components/layout/AuthTopLinkHighlight'" : ''}
import { PhoneStep } from '@/pages/Login/sections/PhoneStep'
import { SuccessStep as LoginSuccess } from '@/pages/Login/sections/SuccessStep'
import { DetailsStep } from '@/pages/${student ? 'RegisterStudent' : 'RegisterTeacher'}/sections/DetailsStep'
import { TokenStep } from '@/pages/${student ? 'RegisterStudent' : 'RegisterTeacher'}/sections/TokenStep'
import { SuccessStep as RegisterSuccess } from '@/pages/${student ? 'RegisterStudent' : 'RegisterTeacher'}/sections/SuccessStep'
${student ? "import { ClaimStep } from '@/pages/RegisterStudent/sections/ClaimStep'\nimport { UnsupportedInAppBrowser } from '@/components/layout/UnsupportedInAppBrowser'\nimport { AuthContext } from '@/providers/authContext'\nimport { PaymentAccessPage } from '@/pages/PaymentAccess'\nimport { savePaymentAccessAttempt } from '@/services/auth/paymentAccessStore'" : "import { AvailabilityStep } from '@/pages/RegisterTeacher/sections/AvailabilityStep'"}
const id=new URLSearchParams(location.search).get('case')
const noop=()=>{}
const submit=event=>event.preventDefault()
const error=id.endsWith('-error')?'Confira os dados e tente novamente.':''
const country=phoneCountries.find(country=>country.code==='BR')
${student ? "if(id.startsWith('payment-')&&id!=='payment-invalid')savePaymentAccessAttempt({attemptId:'0'.repeat(32),code:'a'.repeat(16)+'.'+'b'.repeat(43),capturedAt:Date.now()})" : ''}
function Fixture(){
 const form=useForm({defaultValues:{name:'Ana Exemplo',email:'ana@example.invalid',phone:'11999999999',birthDate:'01/01/2000',instagramHandle:'ana.exemplo',payerDocument:'52998224725'}})
 const topAction=${before ? "<AuthTopLink to='/login'>Já tem cadastro? <AuthTopLinkHighlight>Entrar</AuthTopLinkHighlight></AuthTopLink>" : "<AuthTopLink to='/login' highlight='Entrar'>Já tem cadastro?</AuthTopLink>"}
 let content
 if(id==='login-success')content=<LoginSuccess ${student ? 'gender={2}' : ''}/>
 else if(id==='register-success')content=<RegisterSuccess />
 else if(id.startsWith('login-'))content=<PhoneStep country={country} channelHint="Mandamos por SMS ou WhatsApp. Use o que chegar primeiro." deliveryChannels={['sms','whatsapp']} description="Coloque seu celular e vamos te enviar um código por SMS ou WhatsApp." errorMessage={error} isSubmitting={id==='login-loading'} phone="11999999999" ${student ? 'phoneErrorMessage=""' : ''} phoneInputRef={null} onCountryChange={noop} onPhoneChange={noop} onSubmit={submit} />
 else if(id.startsWith('register-token'))content=<TokenStep autoFillToken="" devToken="" deliveryDescription="por SMS ou WhatsApp." errorMessage={error} isSubmitting={false} phoneDisplay="+55 (11) 99999-9999" resendCountdown="00:30" resendSeconds={id.endsWith('-ready')?0:30} tokenLength={4} onBack={noop} onIncompleteToken={noop} onResend={noop} onSubmit={noop} />
 ${student ? "else if(id.startsWith('register-claim'))content=<ClaimStep draft={{name:'Ana Exemplo'}} errorMessage={error} isSubmitting={false} onSubmit={submit}/>\nelse if(id==='unsupported-browser')content=<UnsupportedInAppBrowser currentUrl='https://student.example.invalid/login'/>" : "else if(id.startsWith('register-availability'))content=<AvailabilityStep errorMessage={error} isSubmitting={false} selectedDays={['monday','wednesday']} selectedPeriods={['morning','evening']} onBack={noop} onDayToggle={noop} onPeriodToggle={noop} onSubmit={submit}/>"}
 else content=<DetailsStep country={country} errorMessage={error} isSubmitting={false} ${student ? 'isCompletingRegistration={id.startsWith("complete-registration")} requiresPayerDocument={id==="complete-registration-document"}' : ''} onCountryChange={noop} onPhoneChange={noop} onSubmit={submit}/>
 const view=${student ? "id.startsWith('payment-')?<AuthContext.Provider value={{isAuthenticated:id==='payment-confirm-switch',isLoading:id==='payment-loading',logout:async()=>{},session:null}}><PaymentAccessPage/></AuthContext.Provider>:" : ''}<AuthShell formAriaLabel="${student ? 'Cadastro de aluno' : 'Cadastro de professor'}" topAction={topAction}>{content}</AuthShell>
 return <FormProvider {...form}>{view}</FormProvider>
}
createRoot(document.getElementById('root')).render(<StrictMode><ThemeProvider theme={theme}><GlobalStyles/><BrowserRouter><Fixture/></BrowserRouter></ThemeProvider></StrictMode>)
`
}

export function authServiceFixture() {
  return `const id=new URLSearchParams(location.search).get('case');\nexport const resumeStudentPaymentAccess=async()=>{throw Object.assign(new Error('Conta diferente no fixture.'),{code:'functions/permission-denied'})};\nexport const exchangeStudentPaymentAccess=async()=>{if(id==='payment-busy')return await new Promise(()=>{});throw Object.assign(new Error('Pagamento indisponível no fixture.'),{code:'functions/unavailable'})};\n`
}
