import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
export default function StrategySection() {
    return (
        <section className="bg-gradient-to-r from-slate-50 to-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
                    <div>
                        <p className="text-sm font-semibold text-indigo-600 uppercase">Strategy and design</p>
                        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">Creating brilliant experiences together</h1>
                        <p className="mt-6 max-w-xl text-lg text-slate-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dicta qui commodi nisi necessitatibus soluta dignissimos quo blanditiis explicabo ipsam unde, dolorem sed, provident aspernatur nesciunt iste maxime enim perspiciatis?</p>

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

                    <div className="relative">
                        <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-indigo-50 to-sky-50 flex items-center justify-center">
                            <svg viewBox="0 0 600 360" className="w-3/4 h-auto opacity-80" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="g" x1="0" x2="1">
                                        <stop offset="0" stopColor="#7c3aed" />
                                        <stop offset="1" stopColor="#06b6d4" />
                                    </linearGradient>
                                </defs>
                                <rect rx="16" width="600" height="360" fill="url(#g)" />
                                <g fill="white" opacity="0.9">
                                    <rect x="40" y="40" width="220" height="40" rx="6" />
                                    <rect x="40" y="100" width="460" height="18" rx="6" />
                                    <rect x="40" y="140" width="460" height="18" rx="6" />
                                    <rect x="40" y="180" width="380" height="18" rx="6" />
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}