import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import Section01 from '@/components/Section01'
import Section02 from '@/components/Section02'
import Section03 from '@/components/Section03'
import Section04 from '@/components/Section04'
import {
  Section05,
  Section06,
  Section07,
  Section08,
  Section09,
  Section10,
  Section11,
  Footer,
} from '@/components/Sections05to11'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <div className="content">
        <Section01 />
        <Section02 />
        <Section03 />
        <Section04 />
        <Section05 />
        <Section06 />
        <Section07 />
        <Section08 />
        <Section09 />
        <Section10 />
        <Section11 />
      </div>
      <Footer />
    </>
  )
}
