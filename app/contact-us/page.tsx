"use client"
import DarkVeil from '@/components/DarkVeil'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, PhoneCallIcon, Send } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Page() {
    return (
        <div className="relative w-full h-[90vh] lg:h-[80vh] ">
            <DarkVeil />
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-star top-10 lg:top-30 pt-16 px-4 sm:px-6 lg:px-8 text-white">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">Send us a Message</h1>

                <div className="flex flex-col gap-3 mt-6 w-full max-w-md sm:max-w-lg lg:max-w-xl">
                    <Input
                        placeholder="Your Email"
                        type='email'
                        className="p-3 rounded bg-white/20 border border-white/30 text-white placeholder-gray-300"
                    />

                    <div className="flex flex-col sm:flex-row gap-3">
                        <Input
                            placeholder="First name"
                            className="flex-1 p-3 rounded bg-white/20 border border-white/30 text-white placeholder-gray-300"
                        />
                        <Input
                            placeholder="Last name"
                            className="flex-1 p-3 rounded bg-white/20 border border-white/30 text-white placeholder-gray-300"
                        />
                    </div>

                    <Textarea
                        placeholder="Message"
                        className="p-3 rounded bg-white/20 border border-white/30 text-white placeholder-gray-300 min-h-[120px]"
                    />

                    <Button
                        className="cursor-pointer hover:!bg-white hover:!text-black w-full mx-auto mt-2"
                    >
                        Send <Send />
                    </Button>

                    <h2 className="text-lg sm:text-xl font-bold text-center mt-6">
                        Or reach us out
                    </h2>

                    <p className="text-sm sm:text-base flex flex-col sm:flex-row items-center gap-2 text-center mx-auto">
                        <Button asChild variant="ghost" className="flex items-center gap-1 cursor-pointer font-light">
                            <Link href="tel:+639605675579">
                                <PhoneCallIcon className="w-4 h-4" /> +639-60-567-5579
                            </Link>
                        </Button>
                        <span className="hidden sm:inline">|</span>

                        <Button asChild variant="ghost" className="flex items-center gap-1 cursor-pointer font-light">
                            <Link href="mailto:sales@ldsolutionsph.com">
                                <Mail className="w-4 h-4" /> sales@ldsolutionsph.com
                            </Link>
                        </Button>

                    </p>
                </div>
            </div>
        </div>
    )
}
