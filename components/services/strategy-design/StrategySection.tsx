import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
export default function StrategySection() {
    return (
        <section className="relative text-white mt-7">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">
                <div className="mx-auto max-w-7xl px-6 lg:px-15">
                    <p className="text-sm font-semibold text-[#1e00ff] uppercase">
                        Strategy and design
                    </p>
                    <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">Creating brilliant experiences together</h1>
                    <p className="mt-6 max-w-xl text-sm text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dicta qui commodi nisi necessitatibus soluta dignissimos quo blanditiis explicabo ipsam unde, dolorem sed, provident aspernatur nesciunt iste maxime enim perspiciatis?</p>

                    <div className="w-[15%] mt-5">
                        <div className="inline-flex flex-col group items-start">
                            <Button
                                variant="link"
                                className="text-white p-0 h-auto hover:no-underline"
                            >
                                <span className="text-lg font-medium flex items-center">
                                    Learn more
                                    <ChevronRight
                                        className="ml-1 h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-1"
                                    />
                                </span>
                            </Button>

                            <div
                                className="border-b-5 border-purple-500 w-full transition-[transform,width] duration-300 ease-out origin-left group-hover:w-[calc(100%+0.25rem)]"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full h-full">
                    <Image
                        src="/assets/services/img-1.png"
                        alt="Strategy illustration"
                        className="w-full"
                    />
                </div>
            </div>
            <div className="absolute -bottom left-0 w-full overflow-hidden leading-[0]">
                <svg className="relative block w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0A0A0A" fillOpacity="1" d="M0,128L120,112C240,96,480,64,720,74.7C960,85,1200,139,1320,165.3L1440,192L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
            </div>
        </section>

    );
}