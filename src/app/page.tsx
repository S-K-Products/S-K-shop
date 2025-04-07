
import Header from '../components/Home/Header'
import HeroSection from '../components/Home/HeroSection'
import ServicesSection from '../components/Home/ServicesSection'
import ContactSection from '../components/Home/ContactSection'
import FeedBack from '../components/Home/feed-backs'
import QuickLinks from '../components/Home/QuickLinks';




const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <ContactSection />
      <FeedBack/>
      
      <QuickLinks />
    </>
  )
}

export default Home
