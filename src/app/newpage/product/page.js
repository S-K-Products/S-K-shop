import Header from "@/components/Home/Header";
import QuickLinks from "@/components/Home/QuickLinks";
import ProductSection from "@/components/product/products";
import HeroSection from "@/components/product/HeroSection";

export default function GemsPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductSection/>
      <QuickLinks />
    </>
  );
}
