"use client"

import * as React from "react"
import Link from "next/link"
import { PhoneCallIcon } from "lucide-react"

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

const serviceList: { title: string; href: string; description: string }[] = [
    {
        title: "Strategy and Design",
        href: "/services/strategy-design",
        description:
            "Crafting business strategies and design solutions that align with your goals.",
    },
    {
        title: "Architecture",
        href: "/services/architecture",
        description:
            "Designing scalable, secure, and future-ready system architectures.",
    },
    {
        title: "Data Management",
        href: "/services/data-management",
        description:
            "Helping you organize, govern, and optimize data to unlock insights.",
    },
    {
        title: "Engineering",
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

const industriesList: { title: string; href: string; description: string }[] = [
    {
        title: "Real-Estate Systems",
        href: "/services/strategy-design",
        description: "Streamline property listings, sales, and management.",
    },
    {
        title: "Book Keeping Systems",
        href: "/services/architecture",
        description: "Simplify financial tracking and reporting.",
    },
    {
        title: "Information Systems",
        href: "/services/data-management",
        description: "Organize and manage data effectively.",
    },
    {
        title: "Management Systems",
        href: "/services/engineering",
        description: "Optimize workflows and boost efficiency.",
    },
    {
        title: "Appointment Systems",
        href: "/services/saas",
        description: "Schedule and manage bookings with ease.",
    },
    {
        title: "E-Learning Management",
        href: "/services/saas",
        description: "Deliver and track online learning programs.",
    },
    {
        title: "Business Profiles",
        href: "/services/saas",
        description: "Showcase company details and services online.",
    },
];

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const underlineHover =
    "relative bg-transparent focus:bg-transparent cursor-pointer " +
    "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 " +
    "after:bg-current after:transition-all after:duration-300 hover:after:w-full"

export function Header() {
    return (
        <div className="fixed top-0 left-0 right-0 z-[9999] flex justify-between p-6 px-12 items-center bg-black/80 backdrop-blur-md">
            <Link className="flex items-center" href="/">
                <Image className="h-auto" src="/assets/ldlogo.png" alt="" width={50} height={150} />
                <h1 className={`${geistMono.className} text-[18px] text-white `}>LD Solutions</h1>
            </Link>
            <NavigationMenu viewport={false}>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className={underlineHover + "bg-transparent hover:bg-transparent focus:bg-transparent cursor-pointer"}>
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
                                <ListItem
                                    title="Who we are?"
                                    href="/about-us/who-we-are"
                                >
                                    Learn about our identity, values, and the principles that guide our work.
                                </ListItem>
                                <ListItem
                                    title="Our story"
                                    href="/about-us/our-story"
                                >
                                    Discover our journey, milestones, and the vision that drives us forward.
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent cursor-pointer">Industries</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                {industriesList.map((industry) => (
                                    <ListItem
                                        key={industry.title}
                                        title={industry.title}
                                        href={industry.href}
                                    >
                                        {industry.description}
                                    </ListItem>
                                ))}
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
