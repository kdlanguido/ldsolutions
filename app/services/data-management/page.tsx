import BackgroundRipple from '@/components/BackgroundRipple/BackgroundRipple'
import { DataManagementCarousel } from '@/components/DataManagementCarousel'
import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div>
            <BackgroundRipple>
                <section className="flex flex-row justify-between items-center">
                    <div className="w-3/4 pr-20 flex-">
                        <h1 className="text-4xl">
                            Data Management
                        </h1>
                        <h1 className='text-lg mt-5 text-justify'>
                            Architecture is the foundation. It&apos;s imperative to define the architecture correctly at
                            the outset by asking all the right questions, only then can you build it right not just for now but for future use too.
                            We aim to create an ongoing process to formulate strategy into a policy that leads to a widespread change in culture.
                            Through our define and discovery process, we identify both your immediate and hidden needs. We develop solutions
                            that deliver immediate value while quickly and cost-effectively working towards your long-term vision.
                        </h1>
                    </div>
                    <div>
                        <Image
                            src="/assets/data-management/db2.jpg"
                            alt=""
                            width={750}
                            height={750}
                            className="w-full h-auto object-cover border rounded shadow-[5px_7px_12px_rgba(255,255,255,0.3)]"
                        />
                    </div>
                </section>

                <section className="flex flex-row justify-between items-center mt-20">
                    <div >
                        <Image
                            src="/assets/data-management/db1.jpg"
                            alt=""
                            width={750}
                            height={750}
                            className="w-full h-auto object-cover border rounded shadow-[5px_7px_12px_rgba(255,255,255,0.3)]"
                        />
                    </div>
                    <div className="w-3/4 pl-20">
                        <h1 className="text-4xl">
                            Optimizing data flow management
                        </h1>
                        <h1 className='text-lg mt-5 text-justify'>
                            Architecture is the foundation. It&apos;s imperative to define the architecture correctly at
                            the outset by asking all the right questions, only then can you build it right not just for now but for future use too.
                            We aim to create an ongoing process to formulate strategy into a policy that leads to a widespread change in culture.
                            Through our define and discovery process, we identify both your immediate and hidden needs. We develop solutions
                            that deliver immediate value while quickly and cost-effectively working towards your long-term vision.
                        </h1>
                    </div>
                </section>
            </BackgroundRipple>

            <section className="mt-10 p-[2rem]">
                <div className="pr-20">
                    <h1 className="text-4xl">
                        Broad Range of Modern Database Technologies
                    </h1>
                    <h1 className='text-lg mt-5 text-justify'>
                        Architecture is the foundation. It&apos;s imperative to define the architecture correctly at
                        the outset by asking all the right questions, only then can you build it right not just for now but for future use too.
                        We aim to create an ongoing process to formulate strategy into a policy that leads to a widespread change in culture.
                        Through our define and discovery process, we identify both your immediate and hidden needs. We develop solutions
                        that deliver immediate value while quickly and cost-effectively working towards your long-term vision.
                    </h1>
                </div>
                <DataManagementCarousel />
            </section>
        </div>
    )
}
