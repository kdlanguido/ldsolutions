import React from "react";
import { Button } from "@/components/ui/button";
import { Play, ChevronRight } from "lucide-react";
function HeroSection() {
  const VIDEO_SRC = "https://www.w3schools.com/html/mov_bbb.mp4";
  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row text-white font-inter">
      <div className="flex-1 p-8 md:p-16 flex flex-col justify-center space-y-6 lg:w-1/2 h-full">
        <p className="text-sm font-medium text-white uppercase">
          Transformation secured™
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Designed right. <br />
          Built right. <br />
          Delivered right.
        </h1>

        <p className="max-w-xl text-lg text-white">
          Leading with strategy, design and architecture, we make your brilliant
          ideas happen by harnessing our team’s expertise in cloud, data and
          cyber technologies, to engineer and deliver the right solution for
          your organisation.
        </p>
        <div className="w-[15%]">
          <div className="inline-flex flex-col group items-start">
            <Button
              variant="link"
              className="text-white p-0 h-auto hover:no-underline"
            >
              <span className="text-lg font-medium flex items-center">
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

            <div
              className="
        border-b-5 border-purple-500
        w-full
        transition-[transform,width] duration-300 ease-out
        origin-left
        group-hover:w-[calc(100%+0.25rem)]
      "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
