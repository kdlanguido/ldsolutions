"use client";
import React from "react";
import WwdCards from "./WwdCards";
import SplitText from "../SplitText";

function WwdSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 sm:px-8 py-12">
      <SplitText
        text="WHAT WE DO!"
        className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />
      <WwdCards />
    </section>
  );
}

export default WwdSection;
