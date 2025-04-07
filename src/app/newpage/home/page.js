import Header from "@/components/Home/Header";
import HeroSection from "@/components/Home/HeroSection";
import QuickLinks from "@/components/Home/QuickLinks";
import ServicesSection from '@/components/Home/ServicesSection';
import Contactsection from '@/components/Home/ContactSection'
import FeedBacks from "@/components/Home/feed-backs";
import FAQ from '@/components/Home/FAQ'


export default function GemsPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection/>
      <Contactsection/>
      <FeedBacks/>
      <FAQ/>
      <QuickLinks />
    </>
  );
}
