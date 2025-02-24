import AboutProject from './components/aboutProject/AboutProject'
import AboutUnique from './components/aboutUnique/AboutUnique'
import BlogSlider from './components/blogSlider/blogSlider'
import FAQ from './components/fAQ/FAQ'
import Hero from './components/hero/Hero'
import PartnerProgram from './components/partnerProgram/PartnerProgram'
import SliderReviews from './components/sliderReviews/sliderReviews'
import TargetAudience from './components/targetAudience/TargetAudience'
import CoreValues from './components/сoreValues/CoreValues'
import FadeInSection from './HomeAnimation'
import { HomeWrapper } from './HomeStyled'

const Home = () => {
  return (
    <HomeWrapper>
      <Hero />
      <FadeInSection>
        <AboutProject />
      </FadeInSection>
      <FadeInSection>
        <CoreValues />
      </FadeInSection>
      <FadeInSection>
        <TargetAudience />
      </FadeInSection>
      <FadeInSection>
        <SliderReviews />
      </FadeInSection>
      <FadeInSection>
        <AboutUnique />
      </FadeInSection>
      <FadeInSection>
        <PartnerProgram />
      </FadeInSection>
      <FadeInSection>
        <BlogSlider />
      </FadeInSection>
      <FadeInSection>
        <FAQ />
      </FadeInSection>
    </HomeWrapper>
  )
}

export default Home
