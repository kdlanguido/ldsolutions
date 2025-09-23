import React from "react";
import SplitText from "../SplitText";
import WcuBody from "./WcuBody";

function WcuSection() {
  return (
    <section className="px-4 sm:px-8 py-12">
      <SplitText
        text="WHY CHOOSE US?"
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
      <WcuBody />
    </section>
  );
}

export default WcuSection;
