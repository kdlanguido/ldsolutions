"use client"

import {
    motion,
    MotionValue,
    useScroll,
    useTransform,
} from "framer-motion"
import Image from "next/image"

import { useRef } from "react"

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance])
}

function FramerImage({ id }: { id: number }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref })
    const y = useParallax(scrollYProgress, 0)
    return (
        <section className="img-container">
            <div ref={ref}>
                <Image
                    src={`/assets/mern.png`}
                    alt="A London skyscraper"
                />
            </div>
            <motion.h2
                initial={{ visibility: "hidden" }}
                animate={{ visibility: "visible" }}
                style={{ y }}
            >{`Project ${id}`}
            </motion.h2>
            <motion.h6
                className="mt-45 max-w-[470px] pl-20"
                initial={{ visibility: "hidden" }}
                animate={{ visibility: "visible" }}
            >
                A modern web application designed to deliver fast, scalable, and user-friendly digital experiences.
                <br />
                <motion.small>
                    Link: <a href="https://example.com" className="text-blue-400 underline ml-1">Click this to visit</a>
                </motion.small>
            </motion.h6>
        </section >
    )
}

export default function ProjectsParallax() {
    return (
        <div id="example" className="py-10">
            <div className="snap-container">
                {[1, 2, 3, 4, 5].map((image, index) => (
                    <FramerImage key={index} id={image} />
                ))}
            </div>
            <StyleSheet />
        </div>
    )
}

function StyleSheet() {
    return (
        <style>{`
        .snap-container {
            scroll-snap-type: y mandatory;
            height: 75vh;
            overflow-y: scroll;
             scrollbar-width: none; 
        }

        .img-container {
            height: 75vh;
            scroll-snap-align: start;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        .img-container > div {
            width: 300px;
            height: 400px;
            margin: 10px;
            background: #f5f5f5;
            overflow: hidden;
        }

        .img-container img {
            width: 300px;
            height: 400px;
        }

        @media (max-width: 500px) {
            .img-container > div {
                width: 150px;
                height: 200px;
            }

            .img-container img {
                width: 150px;
                height: 200px;
            }
        }

        .img-container h2 {
            color: #8df0cc;
            margin: 0;
            font-family: "Azeret Mono", monospace;
            font-size: 50px;
            font-weight: 700;
            letter-spacing: -3px;
            line-height: 1.2;
            position: absolute;
            display: inline-block;
            top: calc(50% - 25px);
            left: calc(50% + 120px);
        }
    `}</style>
    )
}
