"use client"

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export default function DataManagementCarousel() {

    const imageList = [
        {
            src: "/assets/data-management/mongo.png",
            name: ""
        },
        {
            src: "/assets/data-management/postgresql.gif",
            name: ""
        },
        {
            src: "/assets/data-management/mysql.png",
            name: ""
        }, {
            src: "/assets/data-management/mssql.png",
            name: ""
        },

    ]

    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="max-w-[650px] mx-auto mt-10"
        >
            <CarouselContent>
                {imageList.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card className="p-0 ">
                                <CardContent className="flex aspect-square items-center justify-center p-6 bg-white border rounded">
                                    <Image src={image.src} alt="" height={150} width={150} />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
