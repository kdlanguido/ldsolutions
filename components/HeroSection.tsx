import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row text-white font-inter w-full px-4 sm:px-6 md:px-8 lg:px-0">
      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-center space-y-4 sm:space-y-6 lg:w-1/2 h-full text-center lg:text-left">
        {/* Tagline */}
        <p className="text-xs sm:text-sm font-medium uppercase tracking-wide text-white/80">
          Transformation secured™
        </p>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Designed right. <br />
          Built right. <br />
          Delivered right.
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg max-w-xl mx-auto lg:mx-0 text-white/90">
          Leading with strategy, design and architecture, we make your brilliant
          ideas happen by harnessing our team’s expertise in cloud, data and
          cyber technologies, to engineer and deliver the right solution for
          your organisation.
        </p>

        {/* CTA */}
        <div className="w-fit mx-auto lg:mx-0">
          <div className="inline-flex flex-col group items-start">
            <Button
              variant="link"
              className="text-white p-0 h-auto hover:no-underline"
            >
              <span className="text-base sm:text-lg font-medium flex items-center">
                Learn more
                <ChevronRight
                  className="
                    ml-1 h-5 w-5
                    transition-transform duration-300 ease-out
                    group-hover:translate-x-1
                  "
                />
              </span>
            </Button>

            {/* Underline Animation */}
            <div
              className="
                border-b-4 border-[#53EAFD]
                w-full
                transition-[transform,width] duration-300 ease-out
                origin-left
                group-hover:w-[calc(100%+0.25rem)]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
