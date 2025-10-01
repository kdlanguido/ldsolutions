import HeroSection from "@/components/HeroSection";
import TechLoop from "@/components/TechLoop";
import WwdSection from "@/components/WhatWeDo/WwdSection";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";

export default function Page() {
  return (
    <div className="px-4 sm:px-8 md:px-16 space-y-20 mb-20">
      <HeroSection />
      <WwdSection />
      <div className="-mx-4 sm:-mx-8 md:-mx-16">
        <TechLoop />
      </div>
      <WhyChooseUs />
    </div>
  );
}
