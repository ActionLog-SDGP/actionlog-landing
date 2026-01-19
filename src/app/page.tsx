import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import AppBentoGrid from "@/components/Sections/AppBentoGrid/AppBentoGrid";
import Banner from "@/components/Sections/Banner/Banner";
import FAQ from "@/components/Sections/FAQ/FAQ";
import Features from "@/components/Sections/Features/Features";
import Growth from "@/components/Sections/Growth/Growth";
import Hero from "@/components/Sections/Hero/Hero";
import Pricing from "@/components/Sections/Pricing/Pricing";
import Testimonials from "@/components/Sections/Testimonials/Testimonials";
import TrustedCompanies from "@/components/Sections/TrustedCompanies.tsx/TrustedCompanies";
import UserQuote from "@/components/Sections/UserQuote/UserQuote";

export default function Home() {
  return (
    <div className="mx-auto border-x relative">
      <div className="block w-px h-full border-l border-border absolute top-0 left-6 z-10"></div>
      <div className="block w-px h-full border-r border-border absolute top-0 right-6 z-10"></div>
      <Header />
      <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
        <Hero />

        <TrustedCompanies />

        <AppBentoGrid />

        {/* <UserQuote /> */}

        <Features />

        <Growth />

        <Pricing />

        <Testimonials />

        <FAQ />

        <Banner />

        <Footer />
      </main>
    </div>
  );
}
