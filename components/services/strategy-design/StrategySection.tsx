import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
export default function StrategySection() {
    return (
        <section className="text-white mt-7">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">
                <div className="mx-auto max-w-7xl px-6 lg:px-15">
                    <p className="text-sm font-semibold text-[#53EAFD] uppercase">
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
                                className="border-b-5 border-[#53EAFD] w-full transition-[transform,width] duration-300 ease-out origin-left group-hover:w-[calc(100%+0.25rem)]"
                            />
                        </div>
                    </div>
                </div>
                <Image
                    src="/assets/services/img-1.webp"
                    alt="Strategy illustration"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                    loading="lazy"
                />
            </div>
        </section>

    );
}