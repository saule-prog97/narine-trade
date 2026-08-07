import { About } from '@/widgets/about'
import { ContactCta } from '@/widgets/contact-cta'
import { Curriculum } from '@/widgets/curriculum'
import { Exchanges } from '@/widgets/exchanges'
import { Footer } from '@/widgets/footer'
import { Format } from '@/widgets/format'
import { Header } from '@/widgets/header'
import { Hero } from '@/widgets/hero'
import { Mentorship } from '@/widgets/mentorship'
import { Payment } from '@/widgets/payment'
import { Pricing } from '@/widgets/pricing'
import { Results } from '@/widgets/results'
import { Testimonials } from '@/widgets/testimonials'
import { TradingBot } from '@/widgets/trading-bot'
import { Main } from './HomePage.styled'

export function HomePage() {
  return (
    <>
      <Header />

      <Main>
        <Hero />
        <About />
        <Format />
        <Curriculum />
        <Mentorship />
        <Results />
        <Testimonials />
        <Pricing />
        <Payment />
        <TradingBot />
        <Exchanges />
        <ContactCta />
      </Main>

      <Footer />
    </>
  )
}
