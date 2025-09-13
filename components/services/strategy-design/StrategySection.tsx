import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
export default function StrategySection() {
    return (
        <section className="mx-auto max-w-7xl px-6 lg:px-8 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 items-center py-20">
                <div>
                    <p className="text-sm font-semibold text-[#1e00ff] uppercase">
                        Strategy and design
                    </p>
                    <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">Creating brilliant experiences together</h1>
                    <p className="mt-6 max-w-xl text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dicta qui commodi nisi necessitatibus soluta dignissimos quo blanditiis explicabo ipsam unde, dolorem sed, provident aspernatur nesciunt iste maxime enim perspiciatis?</p>

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
                {/* VIDEO COMPONENT DITO */}
            </div>
        </section>
    );
}