import { HomePage } from '@/pages/home'
import { NeonBackground } from '@/shared/ui'
import { AppProviders } from './providers/AppProviders'

export function App() {
  return (
    <AppProviders>
      <NeonBackground />
      <HomePage />
    </AppProviders>
  )
}
