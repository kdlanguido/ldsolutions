"use client"

import Link from "next/link"
import { MenuIcon, PhoneCallIcon } from "lucide-react"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import { Geist_Mono } from "next/font/google"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { useState } from "react"
import { Button } from "./ui/button"

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export function Header() {
    const [open, setOpen] = useState(false);

    const closeSideBar = () => {
        setOpen(false)
    }

    return (
        <>
            {/* Desktop */}
            <div className="hidden lg:flex items-center justify-between gap-8 fixed top-0 left-0 right-0 z-[100] bg-black/80 backdrop-blur-md p-5 h-[10vh]">
                <Link className="flex items-center" href="/">
                    <Image className="h-auto w-[30] h-[auto] lg:w-[50]" src="/assets/ldlogo.png" alt="" width={50} height={150} />
                    <h1 className={`${geistMono.className} text-[10px] md:text-[18px] text-white `}>LD Solutions</h1>
                </Link>
                <NavigationMenu>
                    <NavigationMenuList className="gap-4">
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="font-semibold bg-transparent focus:bg-transparent cursor-pointer">
                                <Link href="/#services" >Our Services</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="font-semibold bg-transparent focus:bg-transparent cursor-pointer">
                                <Link href="/#projects">Our Projects</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="font-semibold bg-transparent focus:bg-transparent cursor-pointer">
                                <Link href="/#clients">Client Stories</Link>
                            </NavigationMenuLink>

                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="font-semibold bg-transparent focus:bg-transparent cursor-pointer">
                                <Link href="/#projects">About Us</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                    </NavigationMenuList>
                </NavigationMenu>
                <NavigationMenu viewport={false}>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link
                                    href="/contact-us"
                                    className="flex items-center flex-row gap-2 font-semibold bg-transparent focus:bg-transparent cursor-pointer animate-wiggle"
                                >
                                    <PhoneCallIcon className="text-white" />
                                    Contact Us
                                </Link>
                            </NavigationMenuLink>

                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            {/* Mobile */}
            <div className="flex justify-between lg:hidden p-5">
                <Link className="flex items-center" href="/">
                    <Image className="h-auto" src="/assets/ldlogo.png" alt="" width={50} height={150} />
                    <h1 className={`${geistMono.className} text-[18px] text-white `}>LD Solutions</h1>
                </Link>
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <button className="p-2 text-white">
                            <MenuIcon className="w-6 h-6" />
                        </button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[80%] sm:w-[60%] bg-black text-white p-5 flex min-h-[50vh] [&>button:last-of-type]:hidden">
                        <SheetHeader>
                            <SheetTitle>LDSolutions PH</SheetTitle>
                        </SheetHeader>
                        <nav className="flex flex-col px-4 gap-3 flex-1">
                            <Link onClick={closeSideBar} href="#services">Our Services</Link>
                            <Link onClick={closeSideBar} href="#projects">Our Projects</Link>
                            <Link onClick={closeSideBar} href="#clients">Client Stories</Link>
                            <Link onClick={closeSideBar} href="#about">About Us</Link>
                        </nav>
                        <Button>
                            <Link
                                href="/contact-us"
                                onClick={closeSideBar}
                                className="flex items-center flex-row gap-2 font-semibold bg-transparent focus:bg-transparent cursor-pointer animate-wiggle"
                            >
                                <PhoneCallIcon />
                                Contact Us
                            </Link>
                        </Button>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    )
}

