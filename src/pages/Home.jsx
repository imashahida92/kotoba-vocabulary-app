import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Banner from '../components/Banner'
import AboutSection from '../components/AboutSection'
import SuccessCounter from '../components/SuccessCounter'
import WordOfTheDay from '../components/WordOfTheDay'
import WhyKotoba from '../components/WhyKotoba'

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true })
    document.title = 'Kotoba | Home'
  }, [])

  return (
    <div>
      <Banner />
      <AboutSection />
      <SuccessCounter />
      <WordOfTheDay />
      <WhyKotoba />
    </div>
  )
}
