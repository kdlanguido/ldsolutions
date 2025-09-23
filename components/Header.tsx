"use client"

import Link from "next/link"
import { MenuIcon, PhoneCallIcon } from "lucide-react"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import { Geist_Mono } from "next/font/google"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { useState } from "react"
import HeaderMobileDropdown from "./HeaderMobileDropdown"
import { Button } from "./ui/button"

interface HeaderLinkI {
    title: string;
    href: string;
    description: string
}

const serviceList: HeaderLinkI[] = [
    {
        title: "Strategy and Design",
        href: "/services/strategy-design",
        description:
            "Crafting business strategies and design solutions that align with your goals.",
    },
    {
        title: "Data Management",
        href: "/services/data-management",
        description:
            "Helping you organize, govern, and optimize data to unlock insights.",
    },
    {
        title: "Engineering & Architecture",
        href: "/services/engineering",
        description:
            "Building reliable, high-performance applications and platforms.",
    },
    {
        title: "Software As A Service",
        href: "/services/saas",
        description:
            "Delivering scalable, subscription-based software solutions through the cloud.",
    },
]

const aboutUsList: HeaderLinkI[] = [
    {
        title: "Who we are?",
        href: "/about-us/who-we-are",
        description: "Learn about our identity, values, and the principles that guide our work."
    },
    {
        title: "Our story",
        href: "/about-us/our-story",
        description: "Discover our journey, milestones, and the vision that drives us forward."
    },
]

const insightsLink = {
    title: "Insights",
    href: "/insights",
}

const ourProjectLink = {
    title: "Our Projects",
    href: "/projects",
}

const csLink = {
    title: "Client Stories",
    href: "/clients",
}

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

            <div className="hidden lg:flex items-center justify-between gap-8 fixed top-0 left-0 right-0 z-[100] bg-black/80 backdrop-blur-md p-5 h-[10vh]  ">
                <Link className="flex items-center" href="/">
                    <Image className="h-auto w-[30] h-[auto] lg:w-[50]" src="/assets/ldlogo.png" alt="" width={50} height={150} />
                    <h1 className={`${geistMono.className} text-[10px] md:text-[18px] text-white `}>LD Solutions</h1>
                </Link>

                <NavigationMenu>
                    <NavigationMenuList >
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className={"bg-transparent hover:bg-transparent focus:bg-transparent cursor-pointer"}>
                                Insights
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] ">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                href="/insights/mern-stack"
                                                className="relative flex h-full w-full flex-col justify-end rounded-md overflow-hidden p-6 no-underline select-none focus:outline-none focus:shadow-md"
                                            >
                                                <Image
                                                    src="/assets/mern.png"
                                                    alt="MERN Stack"
                                                    fill
                                                    className="object-cover absolute inset-0 z-0"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 z-10"></div>
                                                <div className="mt-4 mb-2 text-lg font-medium text-white z-20">MERN Stack</div>
                                                <p className="text-sm leading-tight text-gray-200 z-20">
                                                    Build dynamic apps with MongoDB, Express, React, and Node.js.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>

                                    <ListItem href="/insights/methodologies" title="Methodologies">
                                        Agile approaches for efficient project delivery.
                                    </ListItem>

                                    <ListItem href="/insights/nextjs" title="Next JS">
                                        Framework for fast, scalable web applications.
                                    </ListItem>

                                    <ListItem href="/insights/modern-software" title="Modern Software Solutions">
                                        Tools and practices for building future-ready systems.
                                    </ListItem>
                                </ul>


                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent cursor-pointer">Our Services</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                    {serviceList.map((service) => (
                                        <ListItem
                                            key={service.title}
                                            title={service.title}
                                            href={service.href}
                                        >
                                            {service.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent cursor-pointer">About Us</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                    {aboutUsList.map((linkData, index) =>
                                        <ListItem
                                            key={index}
                                            title={linkData.title}
                                            href={linkData.href}
                                        >
                                            {linkData.description}
                                        </ListItem>
                                    )}

                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="font-semibold bg-transparent focus:bg-transparent cursor-pointer">
                                <Link href="/projects">Our Projects</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="font-semibold bg-transparent focus:bg-transparent cursor-pointer">
                                <Link href="/clients">Client Stories</Link>
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
                            <HeaderMobileDropdown btnTitle="Insights" closeFunction={closeSideBar} childLinks={insightsLink} />
                            <HeaderMobileDropdown btnTitle="Our Services" closeFunction={closeSideBar} childLinks={serviceList} />
                            <HeaderMobileDropdown btnTitle="About Us" closeFunction={closeSideBar} childLinks={aboutUsList} />
                            <HeaderMobileDropdown btnTitle="Our Projects" closeFunction={closeSideBar} childLinks={ourProjectLink} />
                            <HeaderMobileDropdown btnTitle="Client Stories" closeFunction={closeSideBar} childLinks={csLink} />
                        </nav>
                        <Button><PhoneCallIcon /> Contact Us</Button>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    )
}






function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
